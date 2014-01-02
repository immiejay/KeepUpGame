#pragma strict

function Start () {

}

var smooth = 5.0;
var tiltAngle = 30.0; 

function Update () {
	//var halfWidth : float = Screen.width/2;
    //transform.position.x = (Input.mousePosition.x - halfWidth)/halfWidth;
    //var halfHeight: float = Screen.height/2;
    //transform.position.z = (Input.mousePosition.y - halfHeight)/halfHeight;

    //^Commented out because if both these scripts are attached to the paddle, leap motion is ignored
    // and it will only move the Y axis 

    // Smoothly tilts a transform towards a target rotation.
    var tiltAroundZ = Input.GetAxis("Mouse X") * tiltAngle * 2;
    var tiltAroundX = Input.GetAxis("Mouse Y") * tiltAngle * -2;
    var target = Quaternion.Euler (tiltAroundX, 0, tiltAroundZ);
    // Dampen towards the target rotation
    transform.rotation = Quaternion.Slerp(transform.rotation, target,Time.deltaTime * smooth);
}