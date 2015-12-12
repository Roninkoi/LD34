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
      phys.v.y += 0.008;
      if (phys.pos.y > 0.15 && !jumping) {
        phys.pos.y = phys.pos_old.y;
        phys.v.y = 0.0;
      }
      /*if (phys.pos.x > -0.6 || phys.pos.x < -79.4) {//some simple collisions for testing
        phys.pos.x = phys.pos_old.x;
        phys.v.x = 0.0;
      }
      if (phys.pos.z < 0.6 || phys.pos.z > 79.4) {
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
    phys.pos = new Vector3(-8.0, 0.0, 8.0);
  }
}