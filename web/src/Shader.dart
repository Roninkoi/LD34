part of LD34;

class GameShader {
  Program program;

  GameShader(String vertexShaderPath, String fragmentShaderPath)
  {
    ShaderFromFile(vertexShaderPath, fragmentShaderPath);
  }

  Program ShaderFromFile(String vertexShaderPath, String fragmentShaderPath)
  {
    String vsrc;
    String fsrc;

    var req = new HttpRequest();
    req.onLoad.listen((e) => vsrc = req.responseText);
    req.open('GET', vertexShaderPath, async: false);
    req.send();
    req = new HttpRequest();
    req.onLoad.listen((e) => fsrc = req.responseText);
    req.open('GET', fragmentShaderPath, async: false);
    req.send();

    Shader vertexShader = compile(vsrc, VERTEX_SHADER);
    Shader fragmentShader = compile(fsrc, FRAGMENT_SHADER);
    this.program = link(vertexShader, fragmentShader);
  }

  static Program link(Shader vertexShader, Shader fragmentShader)
  {
    Program program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, LINK_STATUS)) {
      throw gl.getProgramInfoLog(program);
    }

    return program;
  }

  Shader compile(String source, int type)
  {
    Shader shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, COMPILE_STATUS)) {
      throw gl.getShaderInfoLog(shader);
    }
    return shader;
  }

  void use()
  {
    gl.useProgram(program);
  }
}
