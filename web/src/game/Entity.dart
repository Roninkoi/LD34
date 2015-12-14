part of LD34;

class Entity {
  Sprite ducksprite1 = new Sprite(tex, new Vector4(150.0, 62.0, 25.0, 17.0), new Vector4(1.0, 1.0, 1.0, 1.0));
  Sprite ducksprite2 = new Sprite(tex, new Vector4(150.0, 86.0, 25.0, 17.0), new Vector4(1.0, 1.0, 1.0, 1.0));
  Sprite ducksprite3 = new Sprite(tex, new Vector4(187.0, 62.0, 25.0, 17.0), new Vector4(1.0, 1.0, 1.0, 1.0));

  bool attacking = false;

  int anim  = 0;
  int anim_ticks  = 0;

  Vector3 pos = new Vector3(0.0, 0.0, 0.0);
  Vector2 s = new Vector2(0.0, 0.0);
  Vector3 rot = new Vector3(0.0, 0.0, 0.0);

  double health = 100.0;
  double damageticks = 0.0;

  List anim_cycle = new List(2);

  void update()
  {
    game.map.ducksAlive = true;

    if (sqrt(pow(
        game.player.pos.x + pos.x, 2) + pow(game.player.pos.z - pos.z, 2)) < 8.0) {
      attacking = true;
      if (game.player.attacking) {
        health -= 50.0;
        print("damage");
        damageticks = 100.0;
        game.aud.damage.PlaySound();
      }
    }
    else {
      attacking = false;
    }

    if (damageticks > 0.0) damageticks -= 1.0;

    if (damageticks > 0.0 && game.ticks%15 > 7.5) {
      ducksprite1.col = new Vector4(1.0, 0.0, 0.0, 1.0);
      ducksprite2.col = new Vector4(1.0, 0.0, 0.0, 1.0);
      ducksprite3.col = new Vector4(1.0, 0.0, 0.0, 1.0);
    }
    else {
      ducksprite1.col = new Vector4(1.0, 1.0, 1.0, 1.0);
      ducksprite2.col = new Vector4(1.0, 1.0, 1.0, 1.0);
      ducksprite3.col = new Vector4(1.0, 1.0, 1.0, 1.0);
    }

    rot.y = game.player.rot.y;

    move();

    animation();

    if (sqrt(pow(game.player.pos.x + pos.x, 2) + pow(game.player.pos.z - pos.z, 2)) < 2.0) {
      game.player.health -= 0.1;
      game.screen.attackticks = 50.0;
      if (!game.gameOver) game.deathCause = "Multiple injuries";
      if (game.ticks%30.0 == 0.0) {
        game.aud.hurt.PlaySound();
      }
    }

    if (sqrt(pow(game.player.pos.x + pos.x, 2) + pow(game.player.pos.z - pos.z, 2)) < 32.0) {
      draw();
    }
  }

  void draw() {
    game.renderer.flushBatch();
    if (anim_cycle[anim] == 0) {
      //ducksprite1.draw(pos, s, rot);
      //game.renderer.draw(ducksprite1, pos, s, rot, new Vector3(0.0, 0.0, 0.0));
      game.renderer.draw(ducksprite1, new Vector3(-s.x/2.0,  pos.y, 0.0), s, rot, new Vector3(pos.x, 0.0, pos.z));
    }
    else if (anim_cycle[anim] == 1) {
      //ducksprite2.draw(pos, s, rot);
      //game.renderer.draw(ducksprite2, pos, s, rot, new Vector3(0.0, 0.0, 0.0));
      game.renderer.draw(ducksprite2, new Vector3(-s.x/2.0,  pos.y, 0.0), s, rot, new Vector3(pos.x, 0.0, pos.z));
    }
    else if (anim_cycle[anim] == 2) {
     // ducksprite3.draw(pos, s, rot);
      //game.renderer.draw(ducksprite3, pos, s, rot, new Vector3(0.0, 0.0, 0.0));
      game.renderer.draw(ducksprite3, new Vector3(-s.x/2.0,  pos.y, 0.0), s, rot, new Vector3(pos.x,0.0, pos.z));
    }
    game.renderer.flushBatch();
    game.renderer.flush = true;
  }

  void move()
  {
    if (-pos.x > game.player.pos.x) {
      pos.x += 0.02;
    }
    if (-pos.x < game.player.pos.x) {
      pos.x -= 0.02;
    }
    if (pos.z < game.player.pos.z) {
      pos.z += 0.02;
    }
    if (pos.z > game.player.pos.z) {
      pos.z -= 0.02;
    }
  }

  void animation()
  {
    ++anim_ticks;

    if (attacking) {
      anim_cycle = [0, 2];
    }
    else {
      anim_cycle = [0, 1];
    }

    if (anim_ticks > 10) {
      anim_ticks = 0;
      ++anim;
    }


    if (anim > 1) anim = 0;
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

  Entity()
  {

  }
}
