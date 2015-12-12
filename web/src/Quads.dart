part of LD34;

class Quads {
  /*Vector4 verts = new Vector4(0.0, 0.0, 0.0, 0.0);
  Vector4 tex = new Vector4(0.0, 0.0, 0.0, 0.0);

 // Vector4 col = new Vector4(1.0, 1.0, 1.0, 1.0);

  double z = 1.0;*/

  //Vector3 rot = new Vector3(0.0, 0.0, 0.0);

  //Matrix4 obj = new Matrix4.identity();
  Txtr tex = null;
  Vector3 pos = null;
  Vector2 s = null;
  Vector4 sprite = null;
  Vector3 rot = null;
  Vector3 rot_c = null;
  Vector4 col = null;

  Quads(this.tex, this.pos, this.s, this.sprite, this.rot, this.rot_c, this.col);
}
