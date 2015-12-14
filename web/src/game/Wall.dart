part of LD34;

class Wall extends Obj {
  bool collidable = true;

  void draw() {
    draw0();
    draw1();
    draw2();
    draw3();
    //super.draw(new Vector3(pos.z + 4.0, pos.y, pos.x), new Vector2(s.x, s.y), new Vector3(rot.x, rot.y + PI/2.0, rot.z));
  }

  void draw0() {

    super.draw();
  }
  void draw1() {

    super.draw(new Vector3(pos.x, pos.y, pos.z + s.x), new Vector2(s.x, s.y), rot);
  }
  void draw2() {

    super.draw(new Vector3(pos.z, pos.y, -pos.x), new Vector2(s.x, s.y), new Vector3(rot.x, rot.y + PI/2.0, rot.z));
  }
  void draw3() {
    super.draw(new Vector3(pos.z, pos.y, -pos.x - s.x), new Vector2(s.x, s.y), new Vector3(rot.x, rot.y + PI/2.0, rot.z));
  }

  int collision(Vector3 char_pos, Vector3 char_pos_old) {
    int returns = -1;
    /*if ((char_pos.x + pos.x > -0.6 && char_pos.x + pos.x < 4.6)) {
      returns = 0;
    }
    if ((char_pos.z + pos.z > -0.6 && char_pos.z + pos.z < 4.6)) {
      returns = 1;
    int returns = -1;
    if (collision2d(new Vector4(char_pos.x, char_pos.z, 1.0, 1.0), new Vector4(pos.x, pos.z, 4.0, 4.0)) && !collision2d(new Vector4(char_pos_old.x, char_pos.z, 1.0, 1.0), new Vector4(pos.x, pos.z, 4.0, 4.0))) {
      returns = 0;
    }
    if (!collision2d(new Vector4(char_pos.x, char_pos.z, 1.0, 1.0), new Vector4(pos.x, pos.z, 4.0, 4.0)) && collision2d(new Vector4(char_pos.x, char_pos_old.z, 1.0, 1.0), new Vector4(pos.x, pos.z, 4.0, 4.0))) {
      returns = 1;
    }
    if (collision2d(new Vector4(char_pos.x, char_pos.z, 1.0, 1.0)) && !collision2d(new Vector4(char_pos_old.x, char_pos_old.z, 1.0, 1.0), new Vector4(pos.x, pos.z, 4.0, 4.0))) {
      returns = 2;
    }
    }*/
    /*if ((char_pos.x + pos.x > 0.0 && char_pos.x + pos.x < 4.0) && (char_pos.z -pos.z > 0.0 && char_pos.z -pos.z < 4.0)) {
      returns = 2;
    }*/

    if (collision2d(new Vector4(-pos.x - 0.4 - s.x, pos.z - 0.4, s.x + 1.2, s.x + 1.2), new Vector4(char_pos.x, char_pos.z, 0.5, 0.5)) && !collision2d(new Vector4(-pos.x - 0.4 - s.x, pos.z - 0.4, s.x + 1.2, s.x + 1.2), new Vector4(char_pos_old.x, char_pos.z, 0.5, 0.5))) {
      returns = 0;
      game.player.phys.pos.x = game.player.phys.pos_old.x;
      game.player.phys.v.x = 0.0;
    }
    if (collision2d(new Vector4(-pos.x - 0.4 - s.x, pos.z - 0.4, s.x + 1.2, s.x + 1.2), new Vector4(char_pos.x, char_pos.z, 0.5, 0.5)) && !collision2d(new Vector4(-pos.x - 0.4 - s.x, pos.z - 0.4, s.x + 1.2, s.x + 1.2), new Vector4(char_pos.x, char_pos_old.z, 0.5, 0.5))) {
      returns = 1;
      game.player.phys.pos.z = game.player.phys.pos_old.z;
      game.player.phys.v.z = 0.0;
    }

    return returns;
  }

  Wall([int setId = 1]) : super(setId) {

  }
}
