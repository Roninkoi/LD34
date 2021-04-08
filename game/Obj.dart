part of LD34;

Tex tex = new Tex("gfx/Sprites.png");

class Obj {
	int id = -1;

	Vector3 pos = new Vector3(0.0, 0.0, 0.0);
	Vector2 s = new Vector2(0.0, 0.0);

	Sprite sprite = null;

	Vector3 rot = new Vector3(0.0, 0.0, 0.0);
	Vector3 rot_c = new Vector3(0.0, 0.0, 0.0);

	void draw([Vector3 newPos = null, Vector2 newS = null, Vector3 newRot = null])
	{
		if (newPos != null && newS != null && newRot != null) {
			game.renderer.draw(sprite, newPos, newS, newRot, rot_c);
    }
		else {
			game.renderer.draw(sprite, pos, s, rot, rot_c);
    }
	}

	void update()
	{

	}

	void draw0()
	{
		draw(new Vector3(pos.x, pos.y, pos.z), new Vector2(s.x, s.y), rot);
	}

	void draw1()
	{
		draw(new Vector3(pos.x, pos.y, pos.z + s.x), new Vector2(s.x, s.y), rot);
	}

	void draw2()
	{
		draw(new Vector3(-pos.z-s.x, pos.y, pos.x), new Vector2(s.x, s.y),
			new Vector3(rot.x, rot.y + pi / 2.0, rot.z));
	}

	void draw3()
	{
		draw(new Vector3(-pos.z-s.x, pos.y, pos.x + s.x), new Vector2(s.x, s.y),
			new Vector3(rot.x, rot.y + pi / 2.0, rot.z));
	}

	void set([Vector3 newPos = null, Vector2 newS = null, Vector3 newRot = null])
	{
		if (newPos != null) pos = newPos;
		if (newS != null) s = newS;
		if (newRot != null) rot = newRot;
	}

	void setRot(Vector3 newRot)
	{
		rot = newRot;
	}

	double getY()
	{
		return -pos.z - game.player.pos.y + s.y;
	}

	double getDist()
	{
		return sqrt(pow(pos.x - game.player.pos.x, 2) + pow(pos.z - game.player.pos.z, 2));
	}

	Obj(this.id, [this.sprite, this.pos, this.s, this.rot])
	{
		if (sprite == null) {
			//load();
			switch (id) {
				case 0:
				sprite = new Sprite(tex, new Vector4(0.0, 0.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
				case 1:
				sprite = new Sprite(tex, new Vector4(36.0, 0.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
				case 2:
				sprite = new Sprite(tex, new Vector4(18.0, 0.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
				case 3:
				sprite = new Sprite(tex, new Vector4(36.0, 0.0, 16.0, 16.0), new Vector4(0.5, 0.3, 0.2, 1.0));
				break;
				case 4:
				sprite = new Sprite(tex, new Vector4(18.0, 18.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
				case 5:
				sprite = new Sprite(tex, new Vector4(0.0, 18.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
				case 6:
				sprite = new Sprite(tex, new Vector4(54.0, 18.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
				case 7:
				sprite = new Sprite(tex, new Vector4(54.0, 0.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
				case 8:
				sprite = new Sprite(tex, new Vector4(72.0, 0.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
				case 9:
				sprite = new Sprite(tex, new Vector4(72.0, 18.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
				case 10:
				sprite = new Sprite(tex, new Vector4(93.0, 0.0, 23.0, 34.0), new Vector4(1.0, 1.0, 1.0, 1.0));
				break;
			}
		}
	}
}
