part of LD34;

class Wall extends Obj {
	bool collidable = true;

	void draw([Vector3 newPos=null, Vector2 newS=null, Vector3 newRot=null])
	{
		draw0();
		draw1();
		draw2();
		draw3();
	}

	void draw0()
	{
		super.draw();
	}
	
	void draw1()
	{
		super.draw(new Vector3(pos.x, pos.y, pos.z + s.x), new Vector2(s.x, s.y), rot);
	}
	
	void draw2()
	{
		super.draw(new Vector3(-pos.z - s.x, pos.y, pos.x), new Vector2(s.x, s.y), new Vector3(rot.x, rot.y + pi/2.0, rot.z));
	}
	
	void draw3()
	{
		super.draw(new Vector3(-pos.z - s.x, pos.y, pos.x + s.x), new Vector2(s.x, s.y), new Vector3(rot.x, rot.y + pi/2.0, rot.z));
	}

	int collision(Vector3 char_pos, Vector3 char_pos_old)
	{
		int returns = -1;
    double char_s = 2.5;

		if (collision2d(new Vector4(pos.x, pos.z, s.x, s.x),
        new Vector4(char_pos.x-char_s/2.0, char_pos.z-char_s/2.0, char_s, char_s)) &&
      !collision2d(new Vector4(pos.x, pos.z, s.x, s.x),
        new Vector4(char_pos_old.x-char_s/2.0, char_pos.z-char_s/2.0, char_s, char_s))) {
			returns = 0;
			game.player.phys.pos.x = game.player.phys.pos_old.x;
			game.player.phys.v.x = 0.0;
		}
		if (collision2d(new Vector4(pos.x, pos.z, s.x, s.x),
        new Vector4(char_pos.x-char_s/2.0, char_pos.z-char_s/2.0, char_s, char_s)) &&
      !collision2d(new Vector4(pos.x, pos.z, s.x, s.x),
        new Vector4(char_pos.x-char_s/2.0, char_pos_old.z-char_s/2.0, char_s, char_s))) {
			returns = 1;
			game.player.phys.pos.z = game.player.phys.pos_old.z;
			game.player.phys.v.z = 0.0;
		}

		return returns;
	}

	Wall([int setId = 1]) : super(setId)
	{
	}
}
