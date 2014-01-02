#pragma strict

var startPos : Vector3;
var startRot : Quaternion;

function Start () {
    startPos = transform.position;
    startRot = transform.rotation;
}

function Update () {
	if (transform.position.y < -10) {
		Debug.Log("Reset ball position");
		transform.position = startPos;
		transform.rotation = startRot;
	}
}