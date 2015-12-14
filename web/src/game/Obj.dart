part of LD34;

Txtr tex = new Txtr("../Gfx/Sprites.png");

class Obj {
  int id = -1;

  Vector3 pos = new Vector3(0.0, 0.0, 0.0);
  Vector2 s = new Vector2(0.0, 0.0);

  Sprite sprite = null;

  Vector3 rot = new Vector3(0.0, 0.0, 0.0);
  Vector3 rot_c = new Vector3(0.0, 0.0, 0.0);

  void draw([Vector3 newPos=null, Vector2 newS=null, Vector3 newRot=null])
  {
    if(newPos!=null&&newS!=null&&newRot!=null)
      game.renderer.draw(sprite, newPos, newS, newRot, rot_c);
    else
      game.renderer.draw(sprite, pos, s, rot, rot_c);
  }

  void update()
  {

  }

  void draw0() {
    draw();
  }
  void draw1() {

    draw(new Vector3(pos.x, pos.y, pos.z + s.x), new Vector2(s.x, s.y), rot);
  }
  void draw2() {

    draw(new Vector3(pos.z, pos.y, -pos.x), new Vector2(s.x, s.y), new Vector3(rot.x, rot.y + PI/2.0, rot.z));
  }
  void draw3() {
    draw(new Vector3(pos.z, pos.y, -pos.x - s.x), new Vector2(s.x, s.y), new Vector3(rot.x, rot.y + PI/2.0, rot.z));
  }

  void load()
  {
    String objs;

    var req = new HttpRequest();
    req.onLoad.listen((e)
    => objs = req.responseText);
    req.open('GET', "Game/Objects.o", async: false);
    req.send();

    String tex_path = "";
    Vector4 sprite_sprite = new Vector4(0.0, 0.0, 0.0, 0.0);
    Vector4 sprite_col = new Vector4(0.0, 0.0, 0.0, 0.0);

    int i = 0;

    i = parseId(objs, this.id);

    if (i != -1) {
      ParseReturn returns = new ParseReturn(0, "");

      ++i;
      returns = parseString(objs, i);
      i = returns.i;
      tex_path = returns.s;

      ++i;

      returns = parseString(objs, i);

      i = returns.i;

      sprite_sprite = parseVec4(returns.s);

      ++i;

      returns = parseString(objs, i);
      i = returns.i;
      sprite_col = parseVec4(returns.s);

      this.sprite = new Sprite(new Txtr(tex_path), sprite_sprite, sprite_col);
    }
    else {
      throw "id " + this.id.toString() + " not found!";
    }
  }

  void set([Vector3 newPos = null, Vector2 newS = null, Vector3 newRot = null])
  {
    if (newPos != null) pos = newPos;
    if (newS != null) s = newS;
    if (newRot != null) {
      setRot(newRot);
    }
  }

  void setRot(Vector3 newRot)
  {
    rot = newRot;
  }

  double getY()
  {
    return -pos.z - game.player.pos.y + s.y;
  }

  double getDist()
  {
    return sqrt(pow(pos.x - game.player.pos.x, 2) + pow(pos.z - game.player.pos.z, 2));
  }

  Obj(this.id, [this.sprite, this.pos, this.s, this.rot])
  {
    if (sprite == null) {
      load();
    }
  }
}
