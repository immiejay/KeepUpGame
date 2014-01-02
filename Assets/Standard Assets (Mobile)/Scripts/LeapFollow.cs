using UnityEngine;
using System.Collections;
using Leap;

public class LeapFollow : MonoBehaviour {
    Controller m_leapController;

    void Start ()
    {
        m_leapController = new Controller();
    }

    // gets the hand furthest away from the user (closest to the screen).
	Hand GetForeMostHand() {
		Frame f = m_leapController.Frame();
		Hand foremostHand = null;
		float zMax = -float.MaxValue;
		for(int i = 0; i < f.Hands.Count; ++i) {
			float palmZ = f.Hands[i].PalmPosition.ToUnityScaled().z;
			if (palmZ > zMax) {
				zMax = palmZ;
				foremostHand = f.Hands[i];
			}
		}

		return foremostHand;
	}

	void MovePaddle (Hand hand) {
		if (hand.PalmPosition.ToUnityScaled().z > 0) {
			transform.position += transform.forward * 0.1f;
		}
		
		if (hand.PalmPosition.ToUnityScaled().z < -1.0f) {
			transform.position -= transform.forward * 0.04f;
		}
	}

    void FixedUpdate () {
		Hand foremostHand = GetForeMostHand();
		if (foremostHand != null) {
    	print("hi");
			MovePaddle(foremostHand);
		}
	}
}