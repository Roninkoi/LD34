part of LD34;

class Txtr {
  Texture Tex;
  double w = 0.0;
  double h = 0.0;
  String path;

  Txtr(String path)
  {
    ImageElement img = new ImageElement();
    this.Tex = gl.createTexture();
    this.path = path;
    img.src = path;
    img.onLoad.listen((e)
    {
      gl.bindTexture(TEXTURE_2D, Tex);

      gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, 1);

      gl.texImage2DImage(TEXTURE_2D, 0, RGBA, RGBA, UNSIGNED_BYTE, img);

      gl.texParameteri(TEXTURE_2D, TEXTURE_MAG_FILTER, NEAREST);
      gl.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, NEAREST);

      w = img.width.toDouble();
      h = img.height.toDouble();
      //gl.generateMipmap(TEXTURE_2D);


      gl.bindTexture(TEXTURE_2D, null);
    });
  }
}
