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
      //check ALL the keys
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
  //game.player.flying = false;
/*
  if (game.input.keydown[KeyCode.UP]) {
    game.player.pos.z += 0.01;
  }
  if (game.input.keydown[KeyCode.DOWN]) {
    game.player.pos.z -= 0.01;
  }*/

  if (game.input.keydown[KeyCode.SPACE]) {
    if (!game.player.jumping) {
      game.player.jumping = true;
      game.player.phys.v.y = -0.14;
    }
  }

  if (!(game.input.keydown[KeyCode.RIGHT] && game.input.keydown[KeyCode.LEFT])) {
    if (game.input.keydown[KeyCode.RIGHT]) {
      //game.player.moving = true;
      game.player.rot.y += 0.01;
      game.player.moving = true;
      game.player.phys.v.z += 0.03 * cos(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
      game.player.phys.v.x += 0.03 * sin(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
    }
    if (game.input.keydown[KeyCode.LEFT]) {
      //game.player.moving = true;
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

  if (game.input.keydown[KeyCode.UP] && game.player.rot.x > -PI / 6.0) {
    game.player.rot.x -= 0.05;
  }
  if (game.input.keydown[KeyCode.DOWN] && game.player.rot.x < PI / 6.0) {
    game.player.rot.x += 0.05;
  }
  if (game.input.keydown[KeyCode.D]) {
    game.player.moving = true;
    game.player.phys.v.z += 0.03 * cos(game.player.rot.y + PI / 2.0) * (1.0 + boolToInt(game.player.jumping));
    game.player.phys.v.x += 0.03 * sin(game.player.rot.y + PI / 2.0) * (1.0 + boolToInt(game.player.jumping));
  }
  if (game.input.keydown[KeyCode.A]) {
    game.player.moving = true;
    game.player.phys.v.z += -0.03 * cos(game.player.rot.y + PI / 2.0) * (1.0 + boolToInt(game.player.jumping));
    game.player.phys.v.x += -0.03 * sin(game.player.rot.y + PI / 2.0) * (1.0 + boolToInt(game.player.jumping));
  }
  if (game.input.keydown[KeyCode.W]/*game.input.keydown[KeyCode.RIGHT] || game.input.keydown[KeyCode.LEFT]*/) {
    game.player.moving = true;
    game.player.phys.v.z += 0.03 * cos(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
    game.player.phys.v.x += 0.03 * sin(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
  }
  if (game.input.keydown[KeyCode.S]) {
    game.player.moving = true;
    game.player.phys.v.z += -0.03 * cos(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
    game.player.phys.v.x += -0.03 * sin(game.player.rot.y) * (1.0 + boolToInt(game.player.jumping));
  }

  if (game.input.keydown[KeyCode.SHIFT]) {
    game.player.phys.v.y -= 0.02;
    game.player.flying = true;
  }
  if (game.input.keydown[KeyCode.CTRL]) {
    game.player.phys.pos.y += 0.05;
    game.player.flying = true;
  }

  if (game.input.keydown[KeyCode.R]) {
    game.gameRestart();
  }

  game.player.update();
}
