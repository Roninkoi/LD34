part of LD34;

class Map {
	String path = "";

	List objs = new List();
	List walls = new List();
	List floors = new List();

	List ducks = new List();

	Obj sky;

	bool ducksAlive = true;

	void draw()
	{
		ducksAlive = false;
		if (game.gameStarted) drawDucks();
	  
	  drawObjs();
		drawWalls();
		drawFloors();
	  
		sky.draw0();
		sky.draw1();
		sky.draw2();
		sky.draw3();
		game.renderer.draw(new Sprite(tex,
        new Vector4(7.0, 81.0, 1.0, 1.0), new Vector4(1.0, 1.0, 1.0, 1.0)),
      new Vector3(-10.0, -15.0, -22.5), new Vector2(100.0, 100.0),
      new Vector3(pi/2.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
	}

	void drawDucks()
	{
		for (int i = 0; i < ducks.length; ++i) {
			if (ducks[i].health > 0.0) ducks[i].update();
		}
	}

	void drawObjs()
	{
		for (int i = 0; i < (objs.length / 2.0).toInt(); ++i) {
			if (objs[i] != null) {
				objs[i].draw0();
			}
		}
		for (int i = (objs.length / 2.0).toInt(); i < objs.length; ++i) {
			if (objs[i] != null) {
				objs[i].draw2();
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

	Map()
	{
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
				floors[floors.length-1].set(new Vector3(i.toDouble() * 4.0, 2.0, j.toDouble() * 4.0),
          new Vector2(4.0, 4.0), new Vector3(pi/2.0, 0.0, 0.0));
			}
		}
    
		for (int i = 0; i < 20; ++i) {
			walls.length += 1;
			walls[walls.length-1] = new Wall(1);
			walls[walls.length-1].set(new Vector3(i.toDouble() * 4.0, -2.0, 0.0),
        new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));

		}

		for (int i = 0; i < 20; ++i) {
			walls.length += 1;
			walls[walls.length-1] = new Wall(1);
			walls[walls.length-1].set(new Vector3(i.toDouble() * 4.0, -2.0, -20.0	 * 4.0),
        new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));

		}
		for (int i = 0; i < 20; ++i) {
			walls.length += 1;
			walls[walls.length-1] = new Wall(1);
			walls[walls.length-1].set(new Vector3(0.0, -2.0, -i.toDouble() * 4.0),
        new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));

		}
		for (int i = 0; i < 20; ++i) {
			walls.length += 1;
			walls[walls.length-1] = new Wall(1);
			walls[walls.length-1].set(new Vector3(20.0 * 4.0, -2.0, -i.toDouble()	 * 4.0),
        new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));
		}

		for (int i = 0; i < 40; ++i) {
			walls.length += 1;
			walls[walls.length-1] = new Wall(8);
			walls[walls.length-1].set(new Vector3(
          random_interval(5, 40)/2.0 * 4.0+random_interval(-1000, 1000)/1000.0*0.1, -2.0,
          -random_interval(5, 40)/2.0 * 4.0+random_interval(-1000, 1000)/1000.0*0.1),
        new Vector2(2.0, 4.0), new Vector3(0.0, 0.0, 0.0));
		}
		for (int i = 0; i < 40; ++i) {
			walls.length += 1;
			walls[walls.length-1] = new Wall(6);
			walls[walls.length-1].set(new Vector3(
          random_interval(8, 37)/2.0 * 4.0+0.14+random_interval(-1000, 1000)/1000.0*0.1, -2.0,
          -random_interval(5, 40)/2.0 * 4.0+0.21+random_interval(-1000, 1000)/1000.0*0.1),
        new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));
		}

		for (int i = 0; i < 20; ++i) {
			walls.length += 1;
			walls[walls.length-1] = new Wall(4);
			walls[walls.length-1].set(new Vector3(
          random_interval(7, 38)/2.0 * 4.0+random_interval(-1000, 1000)/1000.0*0.1, -2.0,
          -random_interval(5, 40)/2.0 * 4.0+random_interval(-1000, 1000)/1000.0*0.1),
        new Vector2(4.0, 4.0), new Vector3(0.0, 0.0, 0.0));
		}

		for (int i = 0; i < 200; ++i) {
			objs.length += 1;
			objs[objs.length-1] = new Obj(1,
        new Sprite(tex, new Vector4(36.0, 18.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0)));
			objs[objs.length-1].set(new Vector3(
          random_interval(0, -320).toDouble()/4.0+random_interval(-1000, 1000)/1000.0*0.1, 0.0,
          -random_interval(0, -320).toDouble()/4.0+random_interval(-1000, 1000)/1000.0*0.1),
        new Vector2(2.0, 2.0),new Vector3(0.0, 0.0, 0.0));
		}
		for (int i = 0; i < 100; ++i) {
			objs.length += 1;
			objs[objs.length-1] = new Obj(9);
			objs[objs.length-1].set(new Vector3(
          random_interval(0, -320).toDouble()/4.0+random_interval(-1000, 1000)/1000.0*0.1, 0.0,
          -random_interval(0, -320).toDouble()/4.0+random_interval(-1000, 1000)/1000.0*0.1),
        new Vector2(2.0, 2.0),new Vector3(0.0, 0.0, 0.0));
		}

		for (int i = 0; i < 50; ++i) {
			objs.length += 1;
			objs[objs.length-1] = new Obj(10);
			objs[objs.length-1].set(new Vector3(
          random_interval(0, -320).toDouble()/4.0+random_interval(-1000, 1000)/1000.0*0.1,-2.125,
          -random_interval(0, -320).toDouble()/4.0+random_interval(-1000, 1000)/1000.0*0.1),
        new Vector2(2.875, 4.25), new Vector3(0.0, 0.0, 0.0));
		}

		sky = new Obj(0, new Sprite(tex, new Vector4(7.0, 81.0, 128.0, 75.0), new Vector4(1.0, 1.0, 1.0, 1.0)));
		sky.set(new Vector3(-10.0, -23.0, -85.0), new Vector2(100.0, 30.0), new Vector3(0.0, 0.0, 0.0));

		for (int i = 0; i < 40; ++i) {
			ducks.length += 1;
			ducks[ducks.length-1] = new Entity();
			ducks[ducks.length-1].set(new Vector3(
          random_interval(5, 40)/2.0 * 4.0, (2.0*0.68)/2.0 - 0.7, -random_interval(5, 40)/2.0 * 4.0),
        new Vector2(3.0, 3.0*0.68), new Vector3(0.0, 0.0, 0.0));
		}
	}
}
