using UnityEngine;
using System.Collections;

public class BgScale : MonoBehaviour
{
    void Start()
    {
        Camera cam = Camera.main;
        Vector3 size = GetComponent<SpriteRenderer>().sprite.bounds.size;
        float height = 2f * cam.orthographicSize;
        float width = height * cam.aspect;
        transform.localScale = new Vector3(width, height * size.x / size.y, 1);
    }
}
