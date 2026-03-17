using UnityEngine;
using System.Collections;

public class QuadCenterColor : MonoBehaviour
{

    public Material bgMat;

    Color color0, color1, color23, color67;
    Color color4, color5;
    public float f = 0.2f;
    Mesh mesh;

    public void SetColor()
    {
        color0 = bgMat.GetColor("_Color0");
        color1 = bgMat.GetColor("_Color1");
        color23 = bgMat.GetColor("_Color23");
        color67 = bgMat.GetColor("_Color67");

        color4 = color1;
        color5 = color0;

        Color[] colors = new Color[] { color0, color1, color23, color23, color4, color5, color67, color67 };


        mesh.colors = colors;
    }

    void Awake()
    {
        

        gameObject.AddComponent<MeshFilter>();
        gameObject.AddComponent<MeshRenderer>();


        mesh = new Mesh();

        Vector3[] newVertices = new Vector3[]
        {
            new Vector3(-0.5f, 0.5f, 0),// point 0
            new Vector3(0.5f, 0.5f, 0),// point 1

            new Vector3(0.5f, f, 0),// point 2
            new Vector3(0.5f, -f, 0),// point 3

            new Vector3(0.5f, -0.5f, 0),// point 4
            new Vector3(-0.5f, -0.5f, 0),// point 5

            new Vector3(-0.5f, -f, 0),// point 6
            new Vector3(-0.5f, f, 0),// point 7
        };

        mesh.vertices = newVertices;
        mesh.triangles = new int[] { 0, 1, 7, 7, 1, 2, 7, 2, 6, 6, 2, 3, 6, 3, 5, 5, 3, 4 };




        GetComponent<MeshRenderer>().material = bgMat;
        GetComponent<MeshFilter>().mesh = mesh;
    }
}
