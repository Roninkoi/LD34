part of LD34;

class Phys {
	Vector3 pos = new Vector3(0.0, 0.0, 0.0);
	Vector3 pos_old = new Vector3(0.0, 0.0, 0.0);

	Vector3 rot = new Vector3(0.0, 0.0, 0.0);

	Vector3 v = new Vector3(0.0, 0.0, 0.0);
	Vector3 v_old = new Vector3(0.0, 0.0, 0.0);

	Vector3 a = new Vector3(0.0, 0.0, 0.0);

	double m = 1.0;

	Vector3 update() {
		pos_old = new Vector3(pos.x, pos.y, pos.z);

		v.x += a.x;
		v.y += a.y;
		v.z += a.z;
		pos.x += v.x;
		pos.y += v.y;
		pos.z += v.z;

		v_old = new Vector3(v.x, v.y, v.z);

		return pos;
	}

	Phys() {

	}
}
