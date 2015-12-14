part of LD34;

class GUI {
  Sprite target = new Sprite(tex, new Vector4(0.0, 36.0, 1.0, 1.0), new Vector4(1.0, 1.0, 1.0, 1.0));
  Sprite walker = new Sprite(tex, new Vector4(0.0, 39.0, 29.0, 11.0), new Vector4(1.0, 1.0, 1.0, 1.0));

  Sprite swingometer = new Sprite(tex, new Vector4(1.0, 53.0, 35.0, 7.0), new Vector4(1.0, 1.0, 1.0, 1.0));
  Sprite swingbar = new Sprite(tex, new Vector4(3.0, 62.0, 31.0, 3.0), new Vector4(1.0, 1.0, 1.0, 1.0));

  Sprite staminaometer = new Sprite(tex, new Vector4(123.0, 2.0, 9.0, 53.0), new Vector4(1.0, 1.0, 1.0, 1.0));
  Sprite staminabar = new Sprite(tex, new Vector4(135.0, 5.0, 3.0, 47.0), new Vector4(1.0, 1.0, 1.0, 1.0));

  Sprite healthometer = new Sprite(tex, new Vector4(150.0, 2.0, 9.0, 53.0), new Vector4(1.0, 1.0, 1.0, 1.0));
  Sprite healthbar = new Sprite(tex, new Vector4(142.0, 5.0, 3.0, 47.0), new Vector4(1.0, 1.0, 1.0, 1.0));

  Sprite sky = new Sprite(tex, new Vector4(7.0, 81.0, 128.0, 75.0), new Vector4(1.0, 1.0, 1.0, 1.0));

  Sprite titlebg = new Sprite(tex, new Vector4(79.0, 31.0, 1.0, 1.0), new Vector4(0.4 - 0.2, 0.5 - 0.2, 0.7 - 0.2, 0.9));

  Sprite heart = new Sprite(tex, new Vector4(42.0, 41.0, 9.0, 8.0), new Vector4(1.0, 1.0, 1.0, 1.0));

  Sprite titleScreen = new Sprite(tex, new Vector4(56.0, 37.0, 63.0, 40.0), new Vector4(1.0, 1.0, 1.0, 1.0));

  Text fonts = new Text();

  GUI()
  {

  }
}
