part of LD34;

class Wall extends Obj {
  void draw() {
    super.draw();
  }

  bool Collision(Vector3 char_pos) {
    if (char_pos.x + pos.x > -0.6 && char_pos.x + pos.x < 4.6) {

    }
  }

  Wall([int setId = 1]) : super(setId, new Sprite(tex, new Vector4(36.0, 0.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0))) {

  }
}
