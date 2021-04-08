part of LD34;

class Player {
	Vector3 pos = new Vector3(0.0, 0.0, -1.0);

	Vector2 rot = new Vector2(0.0, 0.0);

	Phys phys = new Phys();

	double spd = 0.9;

	bool jumping = false;
	bool flying = false;
	bool moving = false;
	bool attacking = false;

	double swingcharge = 0.0;

	double health = 100.0;
	double stamina = 100.0;

	double bpm = 60.0;

	void update()
	{
		collisions();

		bpm = 60.0/max(0.1, stamina/100.0);

		if (bpm > 200.0) game.renderer.screenshake = 0.2;

		if (stamina < 100.0) stamina += 0.1;

		if (moving) stamina -= 0.15;

		if (attacking) {
			stamina -= 14.0;

			game.aud.swing.PlaySound();
		}

		health -= max(0.0, bpm/200.0 - 1.0);
		if (health < 100.0 && !game.gameOver) health += 0.05;

		phys.v.x = spd * (phys.v.x)*max(0.8, stamina/100.0);
		phys.v.z = spd * (phys.v.z)*max(0.8, stamina/100.0);

		phys.update();
		pos = phys.pos_old;

		health = max(0.0, health);
		stamina = max(0.0, stamina);
	}

	void collisions()
	{
		/*phys.v.y += 0.008;

		if (phys.pos.y > 0.15 && !jumping) {
			phys.pos.y = phys.pos_old.y;
			phys.v.y = 0.0;
			flying = false;
		}
		if (phys.pos.y > 0.1) {
			jumping = false;
		}*/

		if (!flying) {
			int collides = -1;
			for (int i = 0; i < game.map.walls.length; ++i) {
				if (game.map.walls[i].collidable) {
					if (game.map.walls[i].collision(phys.pos, phys.pos_old) == 1 && collides == -1) {
						collides = 1;
					}
					if (game.map.walls[i].collision(phys.pos, phys.pos_old) == 0 && collides == -1) {
						collides = 0;
					}
					if (game.map.walls[i].collision(phys.pos, phys.pos_old) != -1 &&
            collides != game.map.walls[i].collision(phys.pos, phys.pos_old)) {
						collides = 2;
					}
				}
			}

			for (int i = 0; i < game.map.floors.length; ++i) {
				if (game.map.floors[i].collidable) {
					if (game.map.floors[i].collision(phys.pos, phys.pos_old) != -1) {
						health -= 10.0;
						game.aud.hurt.PlaySound();
						game.renderer.screenshake = 0.40;
						game.screen.coldticks = 100.0;

						if (!game.gameOver) game.deathCause = "Pneumonia";
					}
				}
			}
		}
	}

	Player()
	{
		phys.pos = new Vector3(7.0, 0.0, -7.0);
		rot = new Vector2(0.0, -pi - pi/4.0);
	}
}
