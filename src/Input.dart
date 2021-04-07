part of LD34;

class Input {
  List <bool> keydown = new List.filled(256, false);
  List <bool> keypress = new List.filled(256, false);

  bool keyDown = false;

  bool x_input = false;
  bool y_input = false;
  bool z_input = false;

  bool swing = false;

  bool start = false;

  bool endPress = true;

  void keys()
  {
    window.onKeyDown.listen((KeyboardEvent e)
    {
      if (e.keyCode == KeyCode.BACKSPACE) {
        e.preventDefault();
      }
      for (int i = 0; i < keydown.length; ++i) {
        if (e.keyCode == i) {
          keydown[i] = true;
          keyDown = true;
        }
      }
    });

    window.onKeyUp.listen((KeyboardEvent e)
    {

      if (e.keyCode == KeyCode.BACKSPACE) {
        e.preventDefault();
      }
      for (int i = 0; i < keydown.length; ++i) {
        if (e.keyCode == i) {
          keydown[i] = false;
          keyDown = false;
        }
      }
    });
  }

  Input()
  {
  }
}

int boolToInt(bool b)
{
  if (b) {
    return 1;
  }
  else {
    return 0;
  }
}

void getInput()
{
  game.input.x_input = false;
  game.input.y_input = false;
  game.input.z_input = false;

  game.player.moving = false;
  game.player.attacking = false;

  if (game.gameStarted && !game.gameOver) {
    if (!(game.input.keydown[KeyCode.RIGHT] && game.input.keydown[KeyCode.LEFT])) {
      if (game.input.keydown[KeyCode.RIGHT]) {
        game.player.rot.y += 0.01;
        game.player.moving = true;
        game.player.phys.v.z += 0.03 * cos(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
        game.player.phys.v.x += 0.03 * sin(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
      }
      if (game.input.keydown[KeyCode.LEFT]) {
        game.player.rot.y -= 0.01;
        game.player.moving = true;
        game.player.phys.v.z += 0.03 * cos(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
        game.player.phys.v.x += 0.03 * sin(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
      }
    }
    if (game.input.keydown[KeyCode.RIGHT] && game.input.keydown[KeyCode.LEFT]) {
      game.player.swingcharge = min(game.player.swingcharge + 0.02, 1.0);
      if (game.input.swing && game.player.swingcharge == 1.0) {
        game.input.swing = false;
        game.player.attacking = true;
      }
    }
    else {
      game.input.swing = true;
      game.player.swingcharge = 0.0;
    }
  }
  else {
    if (game.input.keydown[KeyCode.RIGHT] || game.input.keydown[KeyCode.LEFT]) {
      if (game.input.endPress) {
        if (!game.gameStarted) {
          game.gameStarted = true;
        }
        if (game.gameOver) {
          game.gameOver = false;
          game.gameWin = false;
          game.heart_attacks = 0;
          game.max_heartRate = 60.0;
          game.start_time = new DateTime.now().millisecondsSinceEpoch;
          game.gameRestart();
        }
      }
    }
    else {
      game.input.endPress = true;
    }
  }

  game.player.update();
}
