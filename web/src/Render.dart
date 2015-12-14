part of LD34;

class Render {
  Buffer vertexBuffer;
  Buffer indexBuffer;
  Buffer texBuffer;
  Buffer colBuffer;
  Buffer posBuffer;

  Int16List indexData;
  var vertexData;

  //var colData;
  var posData;
  var texData;

  UniformLocation u_camMatrix;
  UniformLocation u_objMatrix;
  UniformLocation u_viewMatrix;
  UniformLocation u_fov;
  UniformLocation u_col;
  UniformLocation u_a;
  UniformLocation u_pMatrix;

  Matrix4 objMatrix = new Matrix4.identity();
  Matrix4 camMatrix = new Matrix4.identity();
  Matrix4 viewMatrix = new Matrix4.identity();

  var pos;
  //var col;
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
  void drawSingle(Sprite sprite, Vector3 pos, Vector2 s, Vector3 rot, Vector3 rot_c)
  {
    gl.enable(BLEND);
    gl.enable(DEPTH_TEST);

    gl.depthMask(true);
    gl.depthFunc(LESS);


    gl.activeTexture(TEXTURE0);
    gl.bindTexture(TEXTURE_2D, tex.Tex);

    //gl.enable(CULL_FACE);

    gl.blendFunc(SRC_ALPHA, ONE_MINUS_SRC_ALPHA);

    flushBatch();

    _batch(sprite.tex, pos, s, sprite.sprite, rot, rot_c, sprite.col);

    gl.enable(BLEND);
    gl.enable(DEPTH_TEST);

    gl.depthMask(true);
    gl.depthFunc(LESS);


    gl.activeTexture(TEXTURE0);
    gl.bindTexture(TEXTURE_2D, tex.Tex);

    //gl.enable(CULL_FACE);

    gl.blendFunc(SRC_ALPHA, ONE_MINUS_SRC_ALPHA);

    flushBatch();
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

      // quads.length = 1;
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


    //quads[batches] = new Quads(new Vector4(pos.x, pos.y, s.x, s.y), pos.z, new Vector4(pos.x - sprite.x / s.x, sprite.y / s.y - pos.y, (sprite.z / tex.w) / s.x, (sprite.w / tex.h) / s.y));
/*
    Vector4 vertices = new Vector4(pos.x, -(pos.y + s.y), s.x, s.y);
    vertexData.setRange(0 * 3 + 12 * batches, 3 * 4 + 12 * batches, [
      (vertices.x), (vertices.y + vertices.w), pos.z,
      (vertices.x + vertices.z), (vertices.y + vertices.w), pos.z,
      (vertices.x + vertices.z), vertices.y, pos.z,
      vertices.x, vertices.y, pos.zasd
    ]);*/
    vertexData.setRange(0 * 3 + 12 * batches, 3 * 4 + 12 * batches, [
      (pos.x), (-(pos.y + s.y) + s.y), pos.z,
      (pos.x + s.x), (-(pos.y + s.y) + s.y), pos.z,
      (pos.x + s.x), -(pos.y + s.y), pos.z,
      pos.x, -(pos.y + s.y), pos.z
    ]);

    //colData.setRange(0 * 4 + 16 * batches, 4 * 4 + 16 * batches, [col.x, col.y, col.z, col.w, col.x, col.y, col.z, col.w, col.x, col.y, col.z, col.w, col.x, col.y, col.z, col.w]);

    //Vector4 texpos = new Vector4(pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y);

    //texData.setRange(0 * 4 + 16 * batches, 4 * 4 + 16 * batches, [texpos.x, texpos.y, texpos.z, texpos.w, texpos.x, texpos.y, texpos.z, texpos.w, texpos.x, texpos.y, texpos.z, texpos.w, texpos.x, texpos.y, texpos.z, texpos.w]);
    //texData.setRange(0 * 4 + 16 * batches, 4 * 4 + 16 * batches, [pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y, pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y, pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y, pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y]);

    texData.setRange(0 * 4 + 16 * batches, 4 * 4 + 16 * batches, [pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y, pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y, pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y, pos.x - (sprite.x/tex.w)/((sprite.z/tex.w)/s.x), (sprite.y/tex.h)/((sprite.w/tex.h)/s.y)-pos.y, (sprite.z/tex.w)/s.x, (sprite.w/tex.h)/s.y]);

    //  quads.length += 1;
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

    //gl.enable(CULL_FACE);

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
    //quads.getRange(0, batches).toList().sort((a, b) => b.z.compareTo(a.z));

    //gl.depthRange(1.0, 100.0);

    Matrix4 perspectiveMatrix = new Matrix4.identity();

    setPerspectiveMatrix(perspectiveMatrix, PI/3.0,game.canvas.width / game.canvas.height, 0.5, 130.0 );
    gl.depthRange(0.2, 130.0);

    gl.uniformMatrix4fv(u_pMatrix, false, perspectiveMatrix.storage);
    gl.uniformMatrix4fv(u_objMatrix, false, objMatrix.storage);

    gl.uniformMatrix4fv(u_viewMatrix, false, viewMatrix.storage);

    //gl.uniform1f(u_a, parseFloat(document.getElementById("alpha").value));

    gl.uniform4f(u_col, b_col.r, b_col.g, b_col.b, b_col.a);



    //shader.use();
/*
    for (int i = 0; i < batches; ++i) {
      //Vector4 vertices = new Vector4(quads[i].verts.x, -(quads[i].verts.y + quads[i].verts.w), quads[i].verts.z, quads[i].verts.w);

      /*
      vertexData.setAll(0 * 3 + 12 * i, [(vertices.x), (vertices.y + vertices.w), quads[i].z]);
      vertexData.setAll(1 * 3 + 12 * i, [(vertices.x + vertices.z), (vertices.y + vertices.w), quads[i].z]);
      vertexData.setAll(2 * 3 + 12 * i, [(vertices.x + vertices.z), vertices.y, quads[i].z]);
      vertexData.setAll(3 * 3 + 12 * i, [vertices.x, vertices.y, quads[i].z]);*/
/*
      Vector4 v1 = new Vector4((vertices.x), (vertices.y + vertices.w), quads[i].z, 1.0);
      Vector4 v2 = new Vector4((vertices.x + vertices.z), (vertices.y + vertices.w), quads[i].z, 1.0);
      Vector4 v3 = new Vector4((vertices.x + vertices.z), vertices.y, quads[i].z, 1.0);
      Vector4 v4 = new Vector4(vertices.x, vertices.y, quads[i].z, 1.0);

      vertexData.setRange(0 * 3 + 12 * i, 3 * 4 + 12 * i, [
        v1.x, v1.y, v1.z,
        v2.x, v2.y, v2.z,
        v3.x, v3.y, v3.z,
        v4.x, v4.y, v4.z
      ]);*/
/*
      vertexData.setRange(0 * 3 + 12 * i, 3 * 4 + 12 * i, [
        (vertices.x), (vertices.y + vertices.w), quads[i].z,
        (vertices.x + vertices.z), (vertices.y + vertices.w), quads[i].z,
        (vertices.x + vertices.z), vertices.y, quads[i].z,
        vertices.x, vertices.y, quads[i].z
      ]);*/


      /* v1 = new Vector4(quads[i].obj.getRow(0).x*v1.x + quads[i].obj.getRow(0).y*v1.y+quads[i].obj.getRow(0).z*v1.z+quads[i].obj.getRow(0).w*v1.w,
      quads[i].obj.getRow(1).x*v1.x + quads[i].obj.getRow(1).y*v1.y+quads[i].obj.getRow(1).z*v1.z+quads[i].obj.getRow(1).w*v1.w,
      quads[i].obj.getRow(2).x*v1.x + quads[i].obj.getRow(2).y*v1.y+quads[i].obj.getRow(2).z*v1.z+quads[i].obj.getRow(2).w*v1.w,
      quads[i].obj.getRow(3).x*v1.x + quads[i].obj.getRow(3).y*v1.y+quads[i].obj.getRow(3).z*v1.z+quads[i].obj.getRow(3).w*v1.w);


      v2 = new Vector4(quads[i].obj.getRow(0).x*v2.x + quads[i].obj.getRow(0).y*v2.y+quads[i].obj.getRow(0).z*v2.z+quads[i].obj.getRow(0).w*v2.w,
      quads[i].obj.getRow(1).x*v2.x + quads[i].obj.getRow(1).y*v2.y+quads[i].obj.getRow(1).z*v2.z+quads[i].obj.getRow(1).w*v2.w,
      quads[i].obj.getRow(2).x*v2.x + quads[i].obj.getRow(2).y*v2.y+quads[i].obj.getRow(2).z*v2.z+quads[i].obj.getRow(2).w*v2.w,
      quads[i].obj.getRow(3).x*v2.x + quads[i].obj.getRow(3).y*v2.y+quads[i].obj.getRow(3).z*v2.z+quads[i].obj.getRow(3).w*v2.w);

      v3 = new Vector4(quads[i].obj.getRow(0).x*v3.x + quads[i].obj.getRow(0).y*v3.y+quads[i].obj.getRow(0).z*v3.z+quads[i].obj.getRow(0).w*v3.w,
      quads[i].obj.getRow(1).x*v3.x + quads[i].obj.getRow(1).y*v3.y+quads[i].obj.getRow(1).z*v3.z+quads[i].obj.getRow(1).w*v3.w,
      quads[i].obj.getRow(2).x*v3.x + quads[i].obj.getRow(2).y*v3.y+quads[i].obj.getRow(2).z*v3.z+quads[i].obj.getRow(2).w*v3.w,
      quads[i].obj.getRow(3).x*v3.x + quads[i].obj.getRow(3).y*v3.y+quads[i].obj.getRow(3).z*v3.z+quads[i].obj.getRow(3).w*v3.w);

      v4 = new Vector4(quads[i].obj.getRow(0).x*v4.x + quads[i].obj.getRow(0).y*v4.y+quads[i].obj.getRow(0).z*v4.z+quads[i].obj.getRow(0).w*v4.w,
      quads[i].obj.getRow(1).x*v4.x + quads[i].obj.getRow(1).y*v4.y+quads[i].obj.getRow(1).z*v4.z+quads[i].obj.getRow(1).w*v4.w,
      quads[i].obj.getRow(2).x*v4.x + quads[i].obj.getRow(2).y*v4.y+quads[i].obj.getRow(2).z*v4.z+quads[i].obj.getRow(2).w*v4.w,
      quads[i].obj.getRow(3).x*v4.x + quads[i].obj.getRow(3).y*v4.y+quads[i].obj.getRow(3).z*v4.z+quads[i].obj.getRow(3).w*v4.w);

      posData.setRange(0 * 3 + 12 * i, 3*4 + 12*i, [
        v1.x, v1.y, v1.z,
        v2.x, v2.y, v2.z,
        v3.x, v3.y, v3.z,
        v4.x, v4.y, v4.z
      ]);*/

      colData.setRange(0 * 4 + 16 * i, 4 * 4 + 16 * i, [quads[i].col.x, quads[i].col.y, quads[i].col.z, quads[i].col.w, quads[i].col.x, quads[i].col.y, quads[i].col.z, quads[i].col.w, quads[i].col.x, quads[i].col.y, quads[i].col.z, quads[i].col.w, quads[i].col.x, quads[i].col.y, quads[i].col.z, quads[i].col.w]);

      texData.setRange(0 * 4 + 16 * i, 4 * 4 + 16 * i, [quads[i].tex.x, quads[i].tex.y, quads[i].tex.z, quads[i].tex.w, quads[i].tex.x, quads[i].tex.y, quads[i].tex.z, quads[i].tex.w, quads[i].tex.x, quads[i].tex.y, quads[i].tex.z, quads[i].tex.w, quads[i].tex.x, quads[i].tex.y, quads[i].tex.z, quads[i].tex.w]);
    }*/



    gl.bindBuffer(ARRAY_BUFFER, vertexBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, vertexData, DYNAMIC_DRAW);

/*
    gl.bindBuffer(ARRAY_BUFFER, posBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, posData, DYNAMIC_DRAW);*/
    //gl.vertexAttribPointer(pos, 3, FLOAT, false, 0, 0);

    gl.bindBuffer(ARRAY_BUFFER, texBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, texData, DYNAMIC_DRAW);
    //gl.vertexAttribPointer(s, 4, FLOAT, false, 0, 0);
/*
    gl.bindBuffer(ARRAY_BUFFER, colBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, colData, DYNAMIC_DRAW);*/
   // gl.vertexAttribPointer(col, 4, FLOAT, false, 0, 0);

    gl.drawElements(TRIANGLES, 6 * batches, UNSIGNED_SHORT, 0);


    batches = 0;
  }

  void initQuad()
  {
    u_pMatrix = gl.getUniformLocation(shader.program, "perspectiveMatrix");
    u_objMatrix = gl.getUniformLocation(shader.program, "objectMatrix");
    //u_camMatrix = gl.getUniformLocation(shader.program, "cameraMatrix");
    shader.use();
    //u_viewMatrix = gl.getUniformLocation(shader.program, "viewMatrix");

    u_viewMatrix = gl.getUniformLocation(shader.program, "viewMatrix");
    u_col = gl.getUniformLocation(shader.program, "u_col");

    u_a = gl.getUniformLocation(shader.program, "u_a");

    pos = gl.getAttribLocation(shader.program, "a_pos");
    //position  = gl.getAttribLocation(shader.program, "a_position");
    //col = gl.getAttribLocation(shader.program, "a_col");
    s = gl.getAttribLocation(shader.program, "a_sprite");

    gl.enableVertexAttribArray(pos);
    gl.enableVertexAttribArray(s);
    //gl.enableVertexAttribArray(position);
//    gl.enableVertexAttribArray(col);

    vertexBuffer = gl.createBuffer();
    texBuffer = gl.createBuffer();
    //colBuffer = gl.createBuffer();
    indexBuffer = gl.createBuffer();
    //posBuffer = gl.createBuffer();

    indexData = new Int16List(batch_size * 6);
    vertexData = new Float32List(4 * 3 * batch_size);
    //colData = new Float32List(4 * 4 * batch_size);
    texData = new Float32List(4 * 4* batch_size);
    //posData = new Float32List(4 * 3 * batch_size);

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
/*
    gl.bindBuffer(ARRAY_BUFFER, posBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, posData, DYNAMIC_DRAW);
    gl.vertexAttribPointer(position, 3, FLOAT, false, 0, 0);*/

    gl.bindBuffer(ARRAY_BUFFER, texBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, texData, DYNAMIC_DRAW);
    gl.vertexAttribPointer(s, 4, FLOAT, false, 0, 0);
/*
    gl.bindBuffer(ARRAY_BUFFER, colBuffer);
    gl.bufferDataTyped(ARRAY_BUFFER, colData, DYNAMIC_DRAW);
    gl.vertexAttribPointer(col, 4, FLOAT, false, 0, 0);*/


/*
    var depthBuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(RENDERBUFFER, depthBuffer);
    gl.renderbufferStorage(RENDERBUFFER, DEPTH_COMPONENT16, 256, 256);*/


    //gl.bindRenderbuffer(RENDERBUFFER, )
/*    var framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(FRAMEBUFFER, framebuffer);
    gl.framebufferRenderbuffer(FRAMEBUFFER, DEPTH_ATTACHMENT, RENDERBUFFER, depthBuffer);*/

    //quads.fillRange(0, batch_size, new Quads(new Vector4(0.0, 0.0, 0.0, 0.0), 1.0, new Vector4(0.0, 0.0, 0.0, 0.0), new Vector4(0.0, 0.0, 0.0, 0.0)));
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
