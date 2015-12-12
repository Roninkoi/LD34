part of LD34;

class Player {
  Vector3 pos = new Vector3(0.0, 0.0, -1.0);

  Vector2 rot = new Vector2(0.0, 0.0);

  Phys phys = new Phys();

  double spd = 0.8;

  bool jumping = false;
  bool flying = false;

  void update()
  {
    collisions();

    phys.v.x = spd * (phys.v.x);
    //phys.v.y = spd * (phys.v.y);
    phys.v.z = spd * (phys.v.z);

    phys.update();
    pos = phys.pos_old;

   // if (game.ticks%30 == 0) print(pos);
  }

  void collisions()
  {
    if (!flying) {
      int collides = -1;
      for (int i = 0; i < game.map.walls.length; ++i) {
        if (game.map.walls[i].collision(phys.pos, phys.pos_old) == 1 && collides == -1) {
          collides = 1;
        }
        if (game.map.walls[i].collision(phys.pos,phys.pos_old ) == 0 && collides == -1) {
          collides = 0;
        }
        if (game.map.walls[i].collision(phys.pos,phys.pos_old ) != -1 && collides != game.map.walls[i].collision(phys.pos,phys.pos_old)) {
          collides = 2;
        }
      }


      phys.v.y += 0.008;
      if (phys.pos.y > 0.15 && !jumping) {
        phys.pos.y = phys.pos_old.y;
        phys.v.y = 0.0;
      }
      /*if (collides == 0 || collides == 2) {//some simple collisions for testing
        phys.pos.x = phys.pos_old.x;
        phys.v.x = 0.0;
      }
      if (collides == 1 || collides == 2) {
        phys.pos.z = phys.pos_old.z;
        phys.v.z = 0.0;
      }*/
      if (phys.pos.y > 0.1) {
        jumping = false;
      }
    }
  }

  Player()
  {
    phys.pos = new Vector3(-6.0, 0.0, -2.0);
  }
}