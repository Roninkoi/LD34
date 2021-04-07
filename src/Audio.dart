part of LD34;

class Sound {
  static AudioContext aud_cntxt;
  static GainNode gn;

  String path;

  HttpRequest rq;
  AudioBuffer aud_buf;

  bool loaded = false;

  bool started = false;

  AudioBufferSourceNode sourceNode;

  void LoadSound()
  {
    try {
      rq = new HttpRequest();
      rq.responseType = "arraybuffer";
      rq.onLoad.listen(sampleLoaded);
      rq.open("GET", path, async:true);
      rq.send();
    }
    catch (e) {
      print(e);
    }
  }

  void sampleLoaded(ProgressEvent e)
  {
    aud_cntxt.decodeAudioData(rq.response).then((e)
    {
      aud_buf = e;
      loaded = true;
    });
  }

  void PlaySound()
  {
    if (!loaded || game.aud.muted) return;
    try {
      sourceNode = aud_cntxt.createBufferSource();
      sourceNode.connectNode(gn);
      sourceNode.buffer = aud_buf;
      sourceNode.start(0);
    }
    catch (e) {
      print(e);
    }
  }

  void StopSound()
  {
    if (!loaded) return;
    try {
      if (sourceNode != null) {
        sourceNode.loop = false;
        sourceNode.stop(0);
      }
      started = false;
    }
    catch (e) {
      print(e);
    }
  }

  void PlaySoundLoop(int ms)
  {
    if (!loaded || game.aud.muted || started) return;
    try {
      sourceNode = aud_cntxt.createBufferSource();
      sourceNode.connectNode(gn);
      sourceNode.buffer = aud_buf;
      sourceNode.loop = true;
      started = true;
      sourceNode.start(0);
    }
    catch (e) {
      print(e);
    }
  }

  void InitAudio()
  {
    aud_cntxt = new AudioContext();
    gn = aud_cntxt.createGain();
    gn.connectNode(aud_cntxt.destination);
    //game.audio_inited = true;
  }

  Sound(this.path)
  {
    /*if (!game.audio_inited) */InitAudio();
    LoadSound();
  }
}

class Sfx {
  bool muted = false;

  Sound hurt = new Sound("../sfx/hurt.wav");
  Sound beat = new Sound("../sfx/beat.wav");
  Sound swing = new Sound("../sfx/swing.wav");
  Sound damage = new Sound("../sfx/damage.wav");
  Sound funk = new Sound("../sfx/funky_chunk.ogg");

  Sfx()
  {
  }
}
