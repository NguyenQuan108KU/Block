using UnityEngine;
using System.Collections;

public class QuadLerpColor : MonoBehaviour
{
    public Material bgMat;

    Color color0, color1, color23, color67;
    Color color4, color5, color8, color9, color10, color11;
    public float f = 0.25f;
    public float f2 = 0.25f;
    Mesh mesh;

    public void SetColor()
    {
        color0 = bgMat.GetColor("_Color0");
        color1 = bgMat.GetColor("_Color1");
        color23 = bgMat.GetColor("_Color23");
        color67 = bgMat.GetColor("_Color67");

        color4 = color1;
        color5 = color0;

        color8 = color0;
        color9 = color67;
        color10 = color67;
        color11 = color5;

        Color[] colors = new Color[] { color0, color1, color23, color23, color4, color5, color67, color67, color8, color9, color10, color11 };
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

            // bobus

            new Vector3(0, 0.5f, 0),// point 8
            new Vector3(0, f, 0),// point 9
			
            new Vector3(0, -f, 0),// point 10
            new Vector3(0, -0.5f, 0),// point 11
        };

        mesh.vertices = newVertices;
        mesh.triangles = new int[] { 0, 8, 7, 7, 8, 9, 7, 9, 6, 6, 9, 10, 6, 10, 5, 5, 10, 11, 8, 1, 9, 9, 1, 2, 9, 2, 10, 10, 2, 3, 10, 3, 11, 11, 3, 4 };

       

	
        GetComponent<MeshRenderer>().material = bgMat;
        GetComponent<MeshFilter>().mesh = mesh;
    }
}
