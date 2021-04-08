part of LD34;

bool collision2d(Vector4 rect1, Vector4 rect2)
{
  if ((rect1.x + rect1.z >= rect2.x && rect1.x <= rect2.x + rect2.z) && (rect1.y + rect1.w >= rect2.y && rect1.y <= rect2.y + rect2.w)) {
    return true;
  }
  else {
    return false;
  }
}
