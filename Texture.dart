part of LD34;

class Tex {
	Texture tex;
	double w = 0.0;
	double h = 0.0;
	String path;

	Tex(String path)
	{
		ImageElement img = new ImageElement();
		this.tex = gl.createTexture();
		this.path = path;
		img.src = path;
		
		img.onLoad.listen((e)
		  {
			  gl.bindTexture(WebGL.TEXTURE_2D, tex);

			  gl.pixelStorei(WebGL.UNPACK_FLIP_Y_WEBGL, 1);

			  gl.texImage2D(WebGL.TEXTURE_2D, 0, WebGL.RGBA, WebGL.RGBA, WebGL.UNSIGNED_BYTE, img);

			  gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MAG_FILTER, WebGL.NEAREST);
			  gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MIN_FILTER, WebGL.NEAREST);

			  w = img.width.toDouble();
			  h = img.height.toDouble();

			  gl.bindTexture(WebGL.TEXTURE_2D, null);
		});
	}
}
