part of LD34;

class Render {
  Buffer vertexBuffer;
  Buffer indexBuffer;
  Buffer texBuffer;
  Buffer colBuffer;

  Int16List indexData;
  var vertexData;

  var posData;
  var texData;

  //UniformLocation u_camMatrix;
  UniformLocation u_objMatrix;
  UniformLocation u_viewMatrix;
  UniformLocation u_fov;
  UniformLocation u_col;
  UniformLocation u_pMatrix;

  Matrix4 objMatrix = new Matrix4.identity();
  Matrix4 camMatrix = new Matrix4.identity();
  Matrix4 viewMatrix = new Matrix4.identity();

  var pos;
  var s;
  var position;

  GameShader shader;

  int batch_size = 1024;

  int batches = 0;
  bool flush = false;

  double fov = 1.5;

  int batchespercycle = 0;

  int render_time = 0;
  int render_ticks = 0;
  int render_count = 0;

  Txtr oldtex = new Txtr("");
  Vector3 oldrot = new Vector3(0.0, 0.0, 0.0);
  Vector4 oldcol = new Vector4(0.0, 0.0, 0.0, 0.0);

  Vector4 b_col = new Vector4(0.0, 0.0, 0.0, 0.0);

  double screenshake = 0.0;

  Vector2 screenshakevec = new Vector2(0.0, 0.0);

  void draw(Sprite sprite, Vector3 pos, Vector2 s, Vector3 rot, Vector3 rot_c)
  {
    _batch(sprite.tex, pos, s, sprite.sprite, rot, rot_c, sprite.col);
  }
  //add to batch
  bool disableViewTrans = false;

  void _batch(Txtr tex, Vector3 pos, Vector2 s, Vector4 sprite, Vector3 rot, Vector3 rot_c, Vector4 col)
  {
    ++render_count;

    if (((batches >= batch_size ||
    (rot.x != oldrot.x || rot.y != oldrot.y || rot.z != oldrot.z) ||
    (col.r != oldcol.r || col.g != oldcol.g || col.b != oldcol.b || col.a != oldcol.a))
    || flush)) {
      flushBatch();
      batchespercycle += 1;

      batches = 0;
      flush = false;

      oldrot = rot;
      oldcol = col;

      b_col = col;

      objMatrix = new Matrix4.identity();
      objMatrix.translate(rot_c.x, rot_c.y, rot_c.z);
      objMatrix.rotateX(rot.x);
      objMatrix.rotateY(rot.y);
      objMatrix.rotateZ(rot.z);
    }

    vertexData.setRange(0 * 3 + 12 * batches, 3 * 4 + 12 * batches, [
      (pos.x), (-(pos.y + s.y) + s.y), pos.z,
      (pos.x + s.x), (-(pos.y + s.y) + s.y), pos.z,
      (pos.x + s.x), -(pos.y + s.y), pos.z,
      pos.x, -(pos.y + s.y), pos.z
    ]);

    texData.setRange(0 * 4 + 16 * batches, 4 * 4 + 16 * batches, [pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y, pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y, pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y, pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y]);

    ++batches;
  }

  void flushBatch()
  {
    gl.enable(BLEND);
    gl.enable(DEPTH_TEST);

    gl.depthMask(true);
    gl.depthFunc(LESS);

    gl.activeTexture(TEXTURE0);
    gl.bindTexture(TEXTURE_2D, tex.Tex);

    gl.blendFunc(SRC_ALPHA, ONE_MINUS_SRC_ALPHA);

    viewMatrix = new Matrix4.identity();

    if (!disableViewTrans) {
      viewMatrix = makeViewMatrix(game.screen.camPos, new Vector3(0.0, 0.0, 1.0), new Vector3(0.0, 1.0, 0.0));

//    viewMatrix.scale(1.0, game.canvas.width / game.canvas.height);
      viewMatrix.rotateY(-game.player.rot.y);
      viewMatrix.rotateX(-cos(game.player.rot.y) * game.player.rot.x);
      viewMatrix.rotateZ(-sin(game.player.rot.y) * game.player.rot.x);

      screenshakevec.x = (random_interval(0, 100)/100.0)*screenshake;
      screenshakevec.y = (random_interval(0, 100)/100.0)*screenshake;

      viewMatrix.translate(game.player.pos.x + screenshakevec.x, game.player.pos.y + game.screen.walkerbop*2.0 + screenshakevec.y, -game.player.pos.z);
    }
    //gl.depthRange(1.0, 100.0);

    Matrix4 perspectiveMatrix = new Matrix4.identity();

    setPerspectiveMatrix(perspectiveMatrix, PI/3.0,game.canvas.width / game.canvas.height, 0.5, 130.0 );
    gl.depthRange(0.2, 130.0);

    gl.uniformMatrix4fv(u_pMatrix, false, perspectiveMatrix.storage);
    gl.uniformMatrix4fv(u_objMatrix, false, objMatrix.storage);

    gl.uniformMatrix4fv(u_viewMatrix, false, viewMatrix.storage);

    gl.uniform4f(u_col, b_col.r, b_col.g, b_col.b, b_col.a);

    gl.bindBuffer(ARRAY_BUFFER, vertexBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, vertexData, DYNAMIC_DRAW);

    gl.bindBuffer(ARRAY_BUFFER, texBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, texData, DYNAMIC_DRAW);

    gl.drawElements(TRIANGLES, 6 * batches, UNSIGNED_SHORT, 0);

    batches = 0;
  }

  void initQuad()
  {
    u_pMatrix = gl.getUniformLocation(shader.program, "perspectiveMatrix");
    u_objMatrix = gl.getUniformLocation(shader.program, "objectMatrix");
    //u_camMatrix = gl.getUniformLocation(shader.program, "cameraMatrix");
    shader.use();

    u_viewMatrix = gl.getUniformLocation(shader.program, "viewMatrix");
    u_col = gl.getUniformLocation(shader.program, "u_col");

    pos = gl.getAttribLocation(shader.program, "a_pos");
    s = gl.getAttribLocation(shader.program, "a_sprite");

    gl.enableVertexAttribArray(pos);
    gl.enableVertexAttribArray(s);

    vertexBuffer = gl.createBuffer();
    texBuffer = gl.createBuffer();
    indexBuffer = gl.createBuffer();

    indexData = new Int16List(batch_size * 6);
    vertexData = new Float32List(4 * 3 * batch_size);
    texData = new Float32List(4 * 4* batch_size);

    for (int i = 0; i < batch_size; i += 1) {
      indexData[i * 6] = 0 + 4 * i;
      indexData[i * 6 + 1] = 2 + 4 * i;
      indexData[i * 6 + 2] = 3 + 4 * i;
      indexData[i * 6 + 3] = 0 + 4 * i;
      indexData[i * 6 + 4] = 1 + 4 * i;
      indexData[i * 6 + 5] = 2 + 4 * i;
    }

    gl.bindBuffer(ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferDataTyped(ELEMENT_ARRAY_BUFFER, indexData, DYNAMIC_DRAW);

    gl.bindBuffer(ARRAY_BUFFER, vertexBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, vertexData, DYNAMIC_DRAW);
    gl.vertexAttribPointer(pos, 3, FLOAT, false, 0, 0);

    gl.bindBuffer(ARRAY_BUFFER, texBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, texData, DYNAMIC_DRAW);
    gl.vertexAttribPointer(s, 4, FLOAT, false, 0, 0);
  }

  void initShader()
  {
    shader = new GameShader("shaders/VertexShader.vert", "shaders/FragmentShader.frag");
  }

  Render()
  {
    initShader();
    initQuad();
  }
}
