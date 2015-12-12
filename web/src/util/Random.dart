part of LD34;

int random_interval(var min, var max)
{
  return ((new Random().nextInt(100000)) % (max - min + 1) + min).toInt();
}