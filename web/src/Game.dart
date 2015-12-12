part of LD34;

RenderingContext gl;

class Game {
  CanvasElement canvas;

  Render renderer;

  Input input;

  Player player;

  Screen screen;

  Map map;
  int currentMap = 1;

  int fps = 0;
  int fps_ticks = 0;
  int fps_time = 0;

  int ticks = 0;

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
    }

      player = new Player();
      screen = new Screen();

      loadMap();

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
    //renderer.render();

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

int quadCompare(Quads a, Quads b) {
  if (a!=null&&b!=null) {
  if (a.pos.z==b.pos.z){
    return 0;
  }
  else if(a.pos.z>b.pos.z){
    return 1;
  }
  else {
    return -1;
  }
  }
  else {
    return 0;
  }
}