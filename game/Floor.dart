part of LD34;

class Floor extends Obj {
  bool collidable = false;

  void draw([Vector3 newPos = null, Vector2 newS = null, Vector3 newRot = null])
  {
    super.draw(new Vector3(pos.x, pos.z, pos.y), s, rot);
  }

  int collision(Vector3 char_pos, Vector3 char_pos_old)
  {
    int returns = -1;
    double char_s = 2.5;

    if (collision2d(new Vector4(pos.x, -pos.z, s.x, s.x),
        new Vector4(char_pos.x-char_s/2.0, char_pos.z+char_s/2.0, char_s, char_s)) &&
      !collision2d(new Vector4(pos.x, -pos.z, s.x, s.x),
        new Vector4(char_pos_old.x-char_s/2.0, char_pos.z+char_s/2.0, char_s, char_s))) {
      returns = 0;
    }
    if (collision2d(new Vector4(pos.x, -pos.z, s.x, s.x),
        new Vector4(char_pos.x-char_s/2.0, char_pos.z+char_s/2.0, char_s, char_s)) &&
      !collision2d(new Vector4(pos.x, -pos.z, s.x, s.x),
        new Vector4(char_pos.x-char_s/2.0, char_pos_old.z+char_s/2.0, char_s, char_s))) {
      returns = 1;
    }

    return returns;
  }

  Floor([setId = 0]) : super(setId) {

  }
}
