part of LD34;

class Map {
  String path = "";

  List objs = new List();
  List walls = new List();
  List floors = new List();

  List ducks = new List();

  Obj sky;

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
        switch(id) {
          case 0:
            floors.length += 1;
            floors[objs.length - 1] = new Floor(id);
            floors[objs.length - 1].set(pos, s, rot);
            break;
          case 1:
            walls.length += 1;
            walls[walls.length - 1] = new Wall(id);
            walls[walls.length - 1].set(pos, s, rot);
            break;
          default:

            objs.length += 1;
            objs[objs.length - 1] = new Obj(id);
            objs[objs.length - 1].set(pos, s, rot);
            break;
      }
    }
      done = false;
    }
  }

  void draw()
  {
    drawDucks();

    drawObjs();
    drawWalls();
    drawFloors();

    sky.draw0();
    sky.draw1();
    sky.draw2();
    sky.draw3();
    game.renderer.draw(new Sprite(tex, new Vector4(7.0, 81.0, 1.0, 1.0), new Vector4(1.0, 1.0, 1.0, 1.0)), new Vector3(-10.0, -15.0, -22.5), new Vector2(100.0, 100.0), new Vector3(PI/2.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
  }

  void drawDucks()
  {
    for (int i = 0; i < ducks.length; ++i) {
      if (ducks[i].health > 0.0) ducks[i].update();
    }
  }

  void drawObjs()
  {
    //objs[500].setRot(new Vector3(0.0, game.ticks/100.0, 0.0));
    for (int i = 0; i < objs.length; ++i) {
      if (objs[i] != null) {
        objs[i].draw();
      }
    }
  }

  void drawWalls()
  {
    for (int i = 0; i < walls.length; ++i) {
      if (walls[i] != null) {
        walls[i].draw0();
        walls[i].draw1();
      }
    }
    for (int i = 0; i < walls.length; ++i) {
      if (walls[i] != null) {
        walls[i].draw2();
        walls[i].draw3();
      }
    }
  }
  void drawFloors()
  {
    for (int i = 0; i < floors.length; ++i) {
      if (floors[i] != null) {
        floors[i].draw();
      }
    }
  }

  Map(this.path)
  {
   // load();
    for (int i = 0; i < 20; ++i) {
      for (int j = 0; j < 20; ++j) {
        int rand = random_interval(0, 32);
        int floorsprite = 0;
        if (rand >= 0 && rand < 10) {
          floorsprite = 0;
        }
        if (rand >= 10 && rand < 20) {
          floorsprite = 2;
        }
        if (rand >= 20 && rand < 30) {
          floorsprite = 5;
        }
        if (rand >= 30 && rand < 33) {
          floorsprite = 7;
        }

        floors.length += 1;
        floors[floors.length-1] = new Floor(floorsprite);
        if (floorsprite == 7)floors[floors.length-1].collidable = true;
        floors[floors.length-1].set(new Vector3( i.toDouble() * 3.95, 2.0, j.toDouble() * 3.95), new Vector2(4.0, 4.0),new Vector3(PI/2.0, 0.0, 0.0));
      }
    }
//, new Sprite(tex, new Vector4(0.0, 0.0, 16.0, 16.0), new Vector4(2.0, 1.5, 1.0, 1.0))
    //, new Sprite(tex, new Vector4(18.0, 0.0, 16.0, 16.0), new Vector4(1.3, 0.8, 0.3, 1.0))


    //objs.length += 40 * 2;
    for (int i = 0; i < 20; ++i) {

      walls.length += 1;
      walls[walls.length-1] = new Wall(1);
      walls[walls.length-1].set(new Vector3(i.toDouble() * 3.95, -2.0, 0.0), new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));

    }

    for (int i = 0; i < 20; ++i) {

      walls.length += 1;
      walls[walls.length-1] = new Wall(1);
      walls[walls.length-1].set(new Vector3(i.toDouble() * 3.95, -2.0, -20.0  * 3.95), new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));

    }
    for (int i = 0; i < 20; ++i) {

      walls.length += 1;
      walls[walls.length-1] = new Wall(1);
      walls[walls.length-1].set(new Vector3(0.0, -2.0, -i.toDouble() * 3.95), new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));

    }
    for (int i = 0; i < 20; ++i) {
      walls.length += 1;
      walls[walls.length-1] = new Wall(1);
      walls[walls.length-1].set(new Vector3(20.0 * 3.95, -2.0, -i.toDouble()  * 3.95), new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));
    }

    for (int i = 0; i < 40; ++i) {
      walls.length += 1;
      walls[walls.length-1] = new Wall(8);
      walls[walls.length-1].set(new Vector3(random_interval(5, 40)/2.0 * 3.95, -2.0, -random_interval(5, 40)/2.0 * 3.95), new Vector2(2.0, 4.0), new Vector3(0.0, 0.0, 0.0));
    }
    for (int i = 0; i < 40; ++i) {
      walls.length += 1;
      walls[walls.length-1] = new Wall(6);
      walls[walls.length-1].set(new Vector3(random_interval(5, 40)/2.0 * 3.95, -2.0, -random_interval(5, 40)/2.0 * 3.95), new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));
    }

    for (int i = 0; i < 20; ++i) {
      walls.length += 1;
      walls[walls.length-1] = new Wall(4);
      walls[walls.length-1].set(new Vector3(random_interval(5, 40)/2.0 * 3.95, -2.0, -random_interval(5, 40)/2.0 * 3.95), new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));
    }

    for (int i = 0; i < 200; ++i) {
      objs.length += 1;
      objs[objs.length-1] = new Obj(1, new Sprite(tex, new Vector4(36.0, 18.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0)));
      objs[objs.length-1].set(new Vector3( random_interval(0, -320).toDouble()/4.0, 0.0, -random_interval(0, -320).toDouble()/4.0), new Vector2(2.0, 2.0),new Vector3(0.0, 0.0, 0.0));
    }
    for (int i = 0; i < 100; ++i) {
      objs.length += 1;
      objs[objs.length-1] = new Obj(9);
      objs[objs.length-1].set(new Vector3( random_interval(0, -320).toDouble()/4.0, 0.0, -random_interval(0, -320).toDouble()/4.0), new Vector2(2.0, 2.0),new Vector3(0.0, 0.0, 0.0));
    }

    for (int i = 0; i < 50; ++i) {
      objs.length += 1;
      objs[objs.length-1] = new Obj(10);
      objs[objs.length-1].set(new Vector3( random_interval(0, -320).toDouble()/4.0,-2.125, -random_interval(0, -320).toDouble()/4.0), new Vector2(2.875, 4.25),new Vector3(0.0, 0.0, 0.0));
    }
    for (int i = 0; i < 100; ++i) {
      objs.length += 1;
      objs[objs.length-1] = new Obj(9);
      objs[objs.length-1].set(new Vector3( random_interval(0, -320).toDouble()/4.0,0.0, random_interval(0, -320).toDouble()/4.0), new Vector2(2.0, 2.0),new Vector3(0.0, -PI / 2.0, 0.0));
    }
    for (int i = 0; i < 50; ++i) {
      objs.length += 1;
      objs[objs.length-1] = new Obj(10);
      objs[objs.length-1].set(new Vector3( random_interval(0, -320).toDouble()/4.0,-2.125, random_interval(0, -320).toDouble()/4.0), new Vector2(2.875, 4.25),new Vector3(0.0, -PI / 2.0, 0.0));
    }
    for (int i = 0; i < 200; ++i) {
      objs.length += 1;
      objs[objs.length-1] = new Obj(3, new Sprite(tex, new Vector4(36.0, 18.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0)));
      objs[objs.length-1].set(new Vector3( random_interval(0, -320).toDouble()/4.0,0.0, random_interval(0, -320).toDouble()/4.0), new Vector2(2.0, 2.0),new Vector3(0.0, -PI / 2.0, 0.0));
    }

    sky = new Obj(0, new Sprite(tex, new Vector4(7.0, 81.0, 128.0, 75.0), new Vector4(1.0, 1.0, 1.0, 1.0)));
    sky.set(new Vector3(-10.0, -23.0, -85.0), new Vector2(100.0, 30.0), new Vector3(0.0, 0.0, 0.0));

    for (int i = 0; i < 40; ++i) {
      ducks.length += 1;
      ducks[ducks.length-1] = new Entity();
      ducks[ducks.length-1].set(new Vector3(random_interval(5, 40)/2.0 * 3.95, (2.0*0.68)/2.0 - 0.7, -random_interval(5, 40)/2.0 * 3.95), new Vector2(3.0, 3.0*0.68), new Vector3(0.0, 0.0, 0.0));
    }
/*
    for (int i = 0; i < 20; ++i) {
      for (int j = 0; j < 20; ++j) {
        floors.length += 1;
        int floorsprite = 0;
        floors[floors.length-1] = new Floor(floorsprite);
        floors[floors.length-1].set(new Vector3( i.toDouble() * 3.95, -6.0, j.toDouble() * 3.95), new Vector2(4.0, 4.0),new Vector3(PI/2.0, 0.0, 0.0));
      }
    }*/

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
