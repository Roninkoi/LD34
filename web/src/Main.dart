library LD34;

import "dart:html";
import "dart:core";
import "dart:async";
import "dart:typed_data";
import "dart:math";
import "package:vector_math/vector_math.dart";

import "dart:web_gl";
import "dart:web_audio";

part "Game.dart";
part "Render.dart";
part "Shader.dart";
part "Texture.dart";
part "Sprite.dart";
part "Input.dart";
part "Phys.dart";
part "Screen.dart";
part "Text.dart";

part "game/Obj.dart";
part "game/Player.dart";
part "game/Wall.dart";
part "game/Floor.dart";
part "game/Map.dart";
part "game/GUI.dart";

part "util/Parsers.dart";
part "util/Random.dart";
part "util/Collisions.dart";

Game game;

int main()
{
  try {
    game = new Game();
  }
  catch (e) {
    throw e;

  }
}

void reload()
{
  game = new Game();
}
