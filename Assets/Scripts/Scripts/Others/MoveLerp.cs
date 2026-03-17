using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveLerp : MonoBehaviour {

    public Vector2 startPos;
    public Vector2 endPos;

    public void Move(float t)
    {
        transform.position = Vector2.Lerp(startPos, endPos, t);
    }
    public void MoveLocal(float t)
    {
        transform.localPosition = startPos;
        transform.localPosition = Vector2.Lerp(startPos, endPos, t);
    }

}
