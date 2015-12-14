part of LD34;

RenderingContext gl;

class Game {
  CanvasElement canvas;

  Render renderer;

  Input input;

  Player player;

  Screen screen;

  Sfx aud;

  Map map;
  int currentMap = 1;

  int fps = 0;
  int fps_ticks = 0;
  int fps_time = 0;

  int ticks = 0;

  bool audio_inited = false;

  int start_time = 0;

  double max_heartRate = 0.0;

  int heart_attacks = 0;

  String deathCause = "null";

  bool gameOver = false;
  bool gameStarted = false;
  bool gameWin = false;

  bool music_playing = false;

  void start([bool restarting = false])
  {
    if (!restarting) {
      canvas = querySelector("#game");
      gl = canvas.getContext("webgl", {"antialias": false, "depth": true});

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(COLOR_BUFFER_BIT | DEPTH_BUFFER_BIT);

      renderer = new Render();
      input = new Input();
      input.keys();

      aud = new Sfx();
      music_playing = false;

      //aud.funk.PlaySoundLoop(239000);
    }

      player = new Player();
      screen = new Screen();

      loadMap();

      start_time = new DateTime.now().millisecondsSinceEpoch;


      if (!restarting) window.requestAnimationFrame(gameLoop);
  }

  gameLoop(double time)
  {
    ++ticks;
    ++fps_ticks;

    if (new DateTime.now().millisecondsSinceEpoch - fps_time >= 1000) {
      fps = fps_ticks;
      fps_ticks = 0;
      fps_time = new DateTime.now().millisecondsSinceEpoch;

      print("FPS: " + fps.toString() + ", render count: " + renderer.render_count.toString() + ", batches: " + renderer.batchespercycle.toString() + ", batch size: " + renderer.batch_size.toString() + ", render time: " + renderer.render_time.toString() + " ms");
    }
    //screen.gui.fonts.LoadFonts();

    if (!music_playing && game.ticks > 100) {
      aud.funk.PlaySound();
      music_playing = true;
    }

    if (screen.beat == 2) {
      game.aud.beat.PlaySound();
    }

    if (game.player.health <= 0.0 && !gameOver) {
      gameOver = true;
      input.endPress = false;
    }

    if (!game.gameOver) game.deathCause = "A massive heart attack";

    if (!map.ducksAlive && game.gameStarted && !game.gameOver) {
      game.gameWin = true;
      game.gameOver = true;
      input.endPress = false;
    }

    screen.center();

    getInput();

    gameRender();

    window.requestAnimationFrame(gameLoop);
  }
  
  void gameRender() {
    gl.clear(COLOR_BUFFER_BIT | DEPTH_BUFFER_BIT);

    renderer.flush = true;
    renderer.batchespercycle = 0;
    renderer.render_count = 0;

    renderer.render_ticks = new DateTime.now().millisecondsSinceEpoch;
    game.renderer.disableViewTrans = false;

    map.draw();
    /*
    if(ticks%60==0) {
    /*  map.objs.sort((Obj a, Obj b)
      => (a.pos.z).compareTo(b.pos.z));*/
  /*    map.objs.sort((Obj a, Obj b)
      => (a.pos.x - player.pos.x).compareTo(b.pos.x - player.pos.x));
*/
    /*  map.objs.sort((Obj a, Obj b)
      => (-a.pos.z).compareTo(-b.pos.z));*/
/*
      if (cos(game.player.rot.y) < 0.0)
        map.objs = map.objs.reversed.toList();*/
      map.objs.sort((Obj a, Obj b)
      => (a.getDist()).compareTo(b.getDist()));

      print(game.player.pos);
    }*/
/*
    game.renderer.draw(new Sprite(tex, new Vector4(0.0, 0.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0)), new Vector3(0.0, 0.0, 0.0), new Vector2(2.0, 2.0), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));


    game.renderer.draw(new Sprite(tex, new Vector4(0.0, 0.0, 16.0, 16.0), new Vector4(1.0, 1.0, 1.0, 1.0)), new Vector3(0.0, 0.0, -8.0), new Vector2(2.0, 2.0), new Vector3(0.0, 0.0, 0.0), new Vector3(0.0, 0.0, 0.0));

*/
    if (game.ticks%30.0 == 0) {
      game.renderer.screenshake = 0.0;
    }

    //renderer.render();

    screen.drawGUI();


    renderer.flushBatch();

    renderer.render_time = new DateTime.now().millisecondsSinceEpoch - renderer.render_ticks;
  }

  void loadMap([int mapNumber = null]) {
    if (mapNumber != null) {
      map = new Map("Map" + mapNumber.toString() + ".m");
    }
    else {
      map = new Map("Map" + currentMap.toString() + ".m");
    }
  }

  void gameRestart()
  {
    start(true);
  }

  void gameReload() {
    reload();
  }

  Game()
  {
    start();
  }
}
