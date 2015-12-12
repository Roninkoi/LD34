part of LD34;

class Map {
  String path = "";

  List objs = new List();

  void load()
  {
    String map;

    var req = new HttpRequest();
    req.onLoad.listen((e)
    => map = req.responseText);
    req.open('GET', "../Maps/" + path, async: false);
    req.send();

    int i = 0;

    String b = "";

    bool r = false;
    bool done = false;

    for (;i < map.length; ++i) {
      Vector3 pos = new Vector3(0.0, 0.0, 0.0);
      Vector3 rot = new Vector3(0.0, 0.0, 0.0);
      Vector2 s = new Vector2(0.0, 0.0);

      int id = -1;
      ParseReturn returns = new ParseReturn(0, "");

      for (; i < map.length && !done; ++i) {
        if (map[i] == ">") {
          r = false;
          id = stringToInt(b);
          done = true;
        }
        if (r) b += map[i];
        if (map[i] == "<") {
          r = true;
        };
      }

      ++i;
      returns = parseString(map, i);
      i = returns.i;

      pos = parseVec3(returns.s);

      ++i;
      returns = parseString(map, i);
      i = returns.i;

      s = parseVec2(returns.s);

      ++i;
      returns = parseString(map, i);
      i = returns.i;

      rot = parseVec3(returns.s);

      if (id != -1) {
            objs.length += 1;
            objs[objs.length - 1] = new Obj(id);
            objs[objs.length - 1].set(pos, s, rot);
      }
      done = false;
    }
  }

  void draw()
  {
    drawObjs();
  }

  void drawObjs()
  {
    objs[500].setRot(new Vector3(0.0, game.ticks/100.0, 0.0));
    for (int i = 0; i < objs.length; ++i) {
      if (objs[i] != null) {
        objs[i].draw();
      }
    }
  }

  Map(this.path)
  {
    load();
    for (int i = 0; i < 20; ++i) {
      for (int j = 0; j < 20; ++j) {
        objs.length += 1;
        objs[objs.length-1] = new Floor(0);
        objs[objs.length-1].set(new Vector3( i.toDouble()*4.0, 2.0, j.toDouble()*4.0), new Vector2(4.0, 4.0),new Vector3(PI/2.0, 0.0, 0.0));
      }
    }
//, new Sprite(tex, new Vector4(0.0, 0.0, 16.0, 16.0), new Vector4(2.0, 1.5, 1.0, 1.0))
    //, new Sprite(tex, new Vector4(18.0, 0.0, 16.0, 16.0), new Vector4(1.3, 0.8, 0.3, 1.0))


    //objs.length += 40 * 2;
    for (int i = 0; i < 20; ++i) {

      objs.length += 1;
      objs[objs.length-1] = new Wall(1);
      objs[objs.length-1].set(new Vector3(i.toDouble() * 4.0, -2.0, 0.0), new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));

    }

    for (int i = 0; i < 20; ++i) {

      objs.length += 1;
      objs[objs.length-1] = new Wall(1);
      objs[objs.length-1].set(new Vector3(i.toDouble() * 4.0, -2.0, -20.0 * 4.0), new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));

    }
    for (int i = 0; i < 20; ++i) {

      objs.length += 1;
      objs[objs.length-1] = new Wall(1);
      objs[objs.length-1].set(new Vector3(i.toDouble() * 4.0, -2.0, 0.0), new Vector2(4.0, 4.0), new Vector3(0.0, -PI / 2.0, 0.0));

    }
    for (int i = 0; i < 20; ++i) {
      objs.length += 1;
      objs[objs.length-1] = new Wall(1);
      objs[objs.length-1].set(new Vector3(i.toDouble() * 4.0, -2.0, 20.0 * 4.0), new Vector2(4.0, 4.0), new Vector3(0.0, -PI / 2.0, 0.0));

    }
    for (int i = 0; i < 20000; ++i) {
      objs.length += 1;
      objs[objs.length-1] = new Obj(1, new Sprite(tex, new Vector4(36.0, 18.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0)));
      objs[objs.length-1].set(new Vector3( random_interval(0, -320).toDouble()/4.0, 1.0, -random_interval(0, -320).toDouble()/4.0), new Vector2(1.0, 1.0),new Vector3(0.0, 0.0, 0.0));
    }

    /*
    for (int i = 0; i < 20000; ++i) {
        objs.length += 1;
        objs[objs.length-1] = new Obj(1, new Sprite(tex, new Vector4(0.0, 18.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0)));
        objs[objs.length-1].set(new Vector3( random_interval(0, -320).toDouble()/4.0,1.0, random_interval(0, -320).toDouble()/4.0), new Vector2(1.0, 1.0),new Vector3(0.0, -PI / 2.0, 0.0));

    }*/
    for (int i = 0; i < 20; ++i) {
      for (int j = 0; j < 20; ++j) {
        objs.length += 1;
        objs[objs.length-1] = new Floor(0);
        objs[objs.length-1].set(new Vector3( i.toDouble()*4.0 , -2.0, j.toDouble()*4.0), new Vector2(4.0, 4.0),  new Vector3(PI/2.0, 0.0, 0.0));
      }
    }

    objs[500] = new Wall(1);
    objs[500].set(new Vector3(1.0* 4.0, -2.0, 1.0 * 4.0), new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));

/*
    walls.length += 1;
    walls[walls.length-1] = new Wall();
    walls[walls.length-1].set(new Vector3(sqrt(32), -2.0, 0.0), new Vector2(4.0*sqrt(2), 4.0), new Vector3(0.0, -PI/4.0, 0.0));
    walls.length += 1;
    walls[walls.length-1] = new Wall();
    walls[walls.length-1].set(new Vector3(sqrt(32)*2.0, -2.0, 4.0), new Vector2(4.0*sqrt(2), 4.0), new Vector3(0.0, -PI/4.0, 0.0));
    walls.length += 1;
    walls[walls.length-1] = new Wall();
    walls[walls.length-1].set(new Vector3(sqrt(32), -2.0, -4.0), new Vector2(4.0*sqrt(2), 4.0), new Vector3(0.0, -PI/4.0, 0.0));*/
  }
}
