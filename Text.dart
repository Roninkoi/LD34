part of LD34;

class Text {
	void LoadFonts()
	{
	}
}

void renderText(String s, Vector3 pos, double size, Vector4 col)
{
	for (int i = 0; i < s.length; ++i) {
		double y0 = ((s.codeUnitAt(i) - 32.0)/16.0).floor()*9.0;
		double x0 = ((s.codeUnitAt(i) - 32.0)%16.0)*6.0;

		game.renderer.draw(new Sprite(tex, new Vector4(x0 + 160.0, y0, 6.0, 9.0), col), new Vector3(pos.x + i*(size/1.2), pos.y, pos.z), new Vector2(size, size*1.5), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
	}
}

double textLength(String s, double size)
{
	return s.length*(size/1.2);
}
