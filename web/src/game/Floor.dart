part of LD34;

class Floor extends Obj {
  bool collidable = false;

  void draw() {
    super.draw(new Vector3(pos.x, pos.z, pos.y), s, rot);
  }

  int collision(Vector3 char_pos, Vector3 char_pos_old) {
    int returns = -1;

    if (collision2d(new Vector4(-pos.x - 0.4 - s.x + 0.8, pos.z - 0.4 + 0.8, s.x + 1.2 - 1.6, s.x + 1.2 - 1.6), new Vector4(char_pos.x, -char_pos.z, 0.5, 0.5)) && !collision2d(new Vector4(-pos.x - 0.4 - s.x + 0.8, pos.z - 0.4 + 0.8, s.x + 1.2 - 1.6, s.x + 1.2 - 1.6), new Vector4(char_pos_old.x, -char_pos.z, 0.5, 0.5))) {
      returns = 0;
    }
    if (collision2d(new Vector4(-pos.x - 0.4 - s.x + 0.8, pos.z - 0.4 + 0.8, s.x + 1.2 - 1.6, s.x + 1.2 - 1.6), new Vector4(char_pos.x, -char_pos.z, 0.5, 0.5)) && !collision2d(new Vector4(-pos.x - 0.4 - s.x + 0.8, pos.z - 0.4 + 0.8, s.x + 1.2 - 1.6, s.x + 1.2 - 1.6), new Vector4(char_pos.x, -char_pos_old.z, 0.5, 0.5))) {
      returns = 1;
    }

    return returns;
  }

  double getY()
  {
    return -pos.z - game.player.pos.y;
  }

  Floor([setId = 0]) : super(setId) {

  }
}
