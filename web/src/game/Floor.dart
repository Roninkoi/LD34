part of LD34;

class Floor extends Obj {
  void draw() {
    super.draw(new Vector3(pos.x, pos.z, pos.y), s, rot);
  }

  double getY()
  {
    return -pos.z - game.player.pos.y;
  }

  Floor([setId = 0]) : super(setId) {

  }
}
