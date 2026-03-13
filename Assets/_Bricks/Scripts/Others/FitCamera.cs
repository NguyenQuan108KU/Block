using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FitCamera : MonoBehaviour
{
    public bool setFitX;
    public bool setFitY;

    void Awake()
    {
        Vector3 size = GetComponent<SpriteRenderer>().sprite.bounds.size;

        float width = size.x;
        float height = size.y;

        float worldScreenHeight = Camera.main.orthographicSize * 2.0f;
        float worldScreenWidth = worldScreenHeight / Screen.height * Screen.width;
        float scaleX = setFitX ? worldScreenWidth / width : transform.localScale.x;
        float scaleY = setFitY ? worldScreenHeight / height : transform.localScale.y;
        transform.localScale = new Vector3(scaleX, scaleY, 1);
    }
}
