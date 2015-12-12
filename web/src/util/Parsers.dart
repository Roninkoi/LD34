part of LD34;

class ParseReturn {
  int i = 0;
  String s = "";

  ParseReturn(this.i, this.s);
}

int parseId(String s, int id)
{
  int returns = -1;

  String b = "";

  bool r = false;
  bool done = false;
  int i = 0;
  for (; i < s.length && !done; ++i) {
    if (s[i] == ">") r = false;
    if (r) b += s[i];
    if (s[i] == "<") r = true;

    if (stringToInt(b) == id) done = true;
    else if (!r) b = "";
  }

  if (done) returns = i;

  return returns;
}

ParseReturn parseString(String s, int i)
{
  bool done = false;
  bool r = false;
  String b = "";

  for (; i < s.length && !done; ++i) {
    if (s[i] == "]") {
      r = false;
      done = true;
    }
    if (r) b += s[i];
    if (s[i] == "[") r = true;
  }

  return new ParseReturn(i, b);
}

//there's some error for some reason
Vector4 parseVec4(String s)
{
  Vector4 returns = new Vector4(0.0, 0.0, 0.0, 0.0);

  int i = 0;
  bool r = false;
  bool done = false;
  String b = "";

  int vec_i = 0;

  for (; i < s.length; ++i) {
    if ((s[i] == " " || s[i] == ",") && r) {
      done = true;
      r = false;
    }

    if (s[i] != " " && s[i] != ",") r = true;
    if (r) b += s[i];

    if (!r && done || s.length - 1 == i) {
      returns[vec_i] = parseDouble(b);
      ++vec_i;
    }

    if (!r) {
      b = "";
      done = false;
    }
  }

  return returns;
}

double parseDouble(String s)
{
  double d = 0.0;
  String num = "";

  bool neg = false;

  for (int j = 0; j < s.length; ++j) {
    if (s[j] == "-") neg = true;
    if (s[j] != ".") num += s[j];
    d = stringToInt(num).toDouble();
    if (s[j] == ".") {
      d = stringToInt(num).toDouble();
      num = "";
      int n = 0;
      bool end = false;
      ++j;

      for (; j < s.length; ++j) {
        if (s[j] == "0") {
        }
        else {
          end = true;
        }
        num += s[j];
        n += 1;
      }
      d += stringToInt(num).toDouble() / pow(10.0, n);
    }
  }

  if (neg) d = -d;

  return d;
}

Vector3 parseVec3(String s)
{
  Vector3 returns = new Vector3(0.0, 0.0, 0.0);

  int i = 0;
  bool r = false;
  bool done = false;
  String b = "";

  int vec_i = 0;

  for (; i < s.length; ++i) {
    if ((s[i] == " " || s[i] == ",") && r) {
      done = true;
      r = false;
    }

    if (s[i] != " " && s[i] != ",") r = true;
    if (r) b += s[i];

    if (!r && done || s.length - 1 == i) {
      returns[vec_i] = parseDouble(b);
      ++vec_i;
    }

    if (!r) {
      b = "";
      done = false;
    }
  }

  return returns;
}

Vector2 parseVec2(String s)
{
  Vector2 returns = new Vector2(0.0, 0.0);

  int i = 0;
  bool r = false;
  bool done = false;
  String b = "";

  int vec_i = 0;

  for (; i < s.length; ++i) {
    if ((s[i] == " " || s[i] == ",") && r) {
      done = true;
      r = false;
    }

    if (s[i] != " " && s[i] != ",") r = true;
    if (r) b += s[i];

    if (!r && done || s.length - 1 == i) {
      returns[vec_i] = parseDouble(b);
      ++vec_i;
    }

    if (!r) {
      b = "";
      done = false;
    }
  }

  return returns;
}

int stringToInt(String s)
{
  int returns = 0;

  for (int n = 0; n < s.length; ++n) {
    int number = 0;
    switch (s[n]) {
      case "0":
        number = 0;
        break;
      case "1":
        number = 1;
        break;
      case "2":
        number = 2;
        break;
      case "3":
        number = 3;
        break;
      case "4":
        number = 4;
        break;
      case "5":
        number = 5;
        break;
      case "6":
        number = 6;
        break;
      case "7":
        number = 7;
        break;
      case "8":
        number = 8;
        break;
      case "9":
        number = 9;
        break;
    }

    returns += pow(10, s.length - 1 - n) * number;
  }
  return returns;
}
