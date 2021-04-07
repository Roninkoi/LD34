part of LD34;

class Sprite {
  Txtr tex = null;
  Vector4 sprite = new Vector4(0.0, 0.0, 0.0, 0.0);
  Vector4 col = new Vector4(1.0, 1.0, 1.0, 1.0);

  void draw(Vector3 pos, Vector2 s, Vector3 rot) {
    game.renderer.draw(this, pos, s, rot, new Vector3(0.0, 0.0, 0.0));
  }

  Sprite(this.tex, this.sprite, this.col);
}
