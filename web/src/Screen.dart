part of LD34;

class Screen {
  Vector3 camPos = new Vector3(0.0, 0.0, 0.0);
  int w = 1024;
  int h = 600;

  GUI gui = new GUI();

  double walkerbop = 0.0;
  Vector2 walkerswing = new Vector2(0.0, 0.0);

  bool moving = false;

  int walkerticks = 0;
  double swingticks = 0.0;
  bool swinging = false;

  bool titlebg = false;

  double barOffs = 0.0;

  int beat = 0;
  int beats = 0;

  double coldticks = 0.0;
  double attackticks= 0.0;

  double bpm = 60.0;

  void drawGUI()
  {
    game.renderer.flushBatch();

    game.renderer.disableViewTrans = true;

    ++walkerticks;
    walkerbop = -(sin(walkerticks/10.0)*0.2).abs();
    if (game.player.moving) {
      this.moving = true;
    }
    if ((!game.player.moving || game.player.attacking) && walkerbop < 0.01 && walkerbop > -0.01) {
      this.moving = false;
    }
    if (!this.moving) {
      walkerbop = 0.0;
      walkerticks = 0;
    }
    if ((swingticks > 1.0*PI) && (walkerswing.x < 0.05 && walkerswing.x > -0.05)) {
      walkerswing.x = 0.0;
    }
    if ((swingticks > 1.0*PI) && (walkerswing.y < 0.05 && walkerswing.y > -0.05)) {
      walkerswing.y = 0.0;
    }
    if ((walkerswing.x == 0.0 && walkerswing.y == 0.0)) {
      swingticks = 0.5/3.0;
      swinging = false;
    }

    swingticks += (0.5/3.0);
    if ((swingticks <= 1.0*PI) || walkerswing.x != 0.0) walkerswing.x = (cos(swingticks));
    if ((swingticks <= 1.0*PI) || walkerswing.y != 0.0) walkerswing.y = -(sin(swingticks)*0.5).abs();

    if (game.player.swingcharge == 1.0) {
      swinging = true;
      game.input.swing = true;
      game.player.swingcharge = 0.0;
    }
    if (!swinging) {
      walkerswing = new Vector2(0.0, 0.0);
    }

    game.renderer.draw(gui.target, new Vector3(0.0, 0.0, -1.0), new Vector2(0.01, 0.01), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
    game.renderer.draw(gui.walker, new Vector3(-1.0 + walkerswing.x, 0.7 + walkerbop + walkerswing.y, -2.0), new Vector2(2.0, 1.0), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
   //  game.renderer.draw(new Sprite(tex, new Vector4(0.0, 0.0, 16.0, 16.0), new Vector4(4.0, 1.0, 1.0, 1.0)), new Vector3(0.0, 0.0 , -2.0), new Vector2(2.0, 2.0), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));

    if (game.input.keydown[KeyCode.RIGHT] && barOffs > -(PI/2.0))  {
      barOffs -= 0.1;
    }
    if (game.input.keydown[KeyCode.LEFT] && barOffs < PI/2.0)  {
      barOffs += 0.1;
    }
    if (!game.input.keydown[KeyCode.LEFT] && !game.input.keydown[KeyCode.RIGHT]) {
      if (barOffs < 0.0)  {
        barOffs += 0.1;
      }
      if (barOffs > 0.0)  {
        barOffs -= 0.1;
      }
    }

    if (game.player.swingcharge > 0.1) {
      game.renderer.draw(gui.swingometer, new Vector3(-0.5 + 0.1 + sin(barOffs)*0.05, -0.5 + 0.2, -1.0), new Vector2(1.0 - 0.2, 0.15), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
      game.renderer.draw(gui.swingbar, new Vector3(-0.5 + 0.028571429*2.0 + 0.08+ sin(barOffs)*0.05, -0.5 + 0.021428571*2.0 + 0.2, -1.0), new Vector2(max(0.0,0.885714299*(game.player.swingcharge/1.0) - 0.15), 0.0642857), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
    }

    game.renderer.draw(gui.staminaometer, new Vector3(-0.9+ sin(barOffs)*0.05, -0.5, -1.0), new Vector2(0.2, 1.0), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
    game.renderer.draw(gui.staminabar, new Vector3(-0.9 + 0.06+ sin(barOffs)*0.05, -0.5 + 0.01 + (1.0 - 0.01), -1.0), new Vector2(0.09, ((1.0 - 0.01)*(-game.player.stamina/100.0))), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));

    game.renderer.draw(gui.healthometer, new Vector3(0.7+ sin(barOffs)*0.05, -0.5, -1.0), new Vector2(0.2, 1.0), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
    game.renderer.draw(gui.healthbar, new Vector3(0.7 + 0.06+ sin(barOffs)*0.05, -0.5 + 0.01 + (1.0 - 0.01), -1.0), new Vector2(0.09, (max(0.0, 1.0 - 0.01)*(-game.player.health/100.0))), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
   // game.renderer.draw(gui.staminabar, new Vector3(-0.5 + 0.028571429*2.0, -0.5 + 0.021428571*2.0, -1.0), new Vector2(0.885714299*(game.player.swingcharge/1.0), 0.0642857), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));


    game.renderer.draw(gui.heart, new Vector3(-0.3 + sin(barOffs)*0.05 - beat.toDouble()*0.01, -0.5 - beat.toDouble()*0.01, -1.0), new Vector2(0.11*1.2 + beat.toDouble()*0.02, 0.1*1.2 + beat.toDouble()*0.02), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));

    if (titlebg) {
      game.renderer.draw(gui.titlebg, new Vector3(-2.0, -2.0, -0.5), new Vector2(10.0, 10.0), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));
    }
    if (game.ticks%180 == 0) bpm = game.player.bpm;
    ++beats;
    if ((beats%(((60.0/bpm)*60.0).floor())).toDouble() <= 3.0) {
      beat = 2;
    }
    else {
      beat = 0;
    }



    renderText(game.player.bpm.floor().toString() + " BPM", new Vector3(-0.1  + sin(barOffs)*0.05 , -0.5 + 0.02, -1.0), 0.06, new Vector4(0.5, 0.0, 0.0, 1.0));

    if (game.player.bpm >= 150.0 && game.ticks%30.0 <= 20) renderText("You're having a heart attack!", new Vector3(0.0 - textLength("You're having a heart attack!", 0.05)/2.0 + sin(barOffs)*0.05, 0.1, -1.0), 0.05, new Vector4(1.0, 0.7, 0.0, 1.0));

    if (coldticks > 0.0 && game.ticks%30.0 <= 20) renderText("You're going to get a cold!", new Vector3(0.0 - textLength("You're going to get a cold!", 0.05)/2.0 + sin(barOffs)*0.05, 0.1, -1.0), 0.05, new Vector4(1.0, 0.7, 0.0, 1.0));
    if (coldticks >= 0.0) {
      coldticks -= 1.0;
    }

    if (attackticks > 0.0 && game.ticks%30.0 <= 20) renderText("Don't break your hip!", new Vector3(0.0 - textLength("Don't break your hip!", 0.05)/2.0 + sin(barOffs)*0.05, 0.1, -1.0), 0.05, new Vector4(1.0, 0.7, 0.0, 1.0));
    if (attackticks >= 0.0) {
      attackticks -= 1.0;
    }

    renderText(game.player.stamina.floor().toString() +"%", new Vector3(-0.7 + sin(barOffs)*0.05, -0.03, -1.0), 0.05, new Vector4(1.0, 1.0, 1.0, 0.5));

    renderText(game.player.health.floor().toString() +"%", new Vector3(0.65 + sin(barOffs)*0.05 - textLength(game.player.health.floor().toString() +"%", 0.05), -0.03, -1.0), 0.05, new Vector4(1.0, 1.0, 1.0, 0.5));

    game.renderer.flushBatch();

    game.renderer.disableViewTrans = false;
  }

  void Resize() {

  }

  Screen() {

  }
}
