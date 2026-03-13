using UnityEngine;
using System.Collections;

public class BgQuadMesh : MonoBehaviour
{

    public Material bgMat;
    public Color color0, color1;
    public float f = 0.2f;

	
	
    void Start()
    {
        Mesh mesh = new Mesh();
		
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
        mesh.triangles = new int[]
        { 
            0, 1, 7,
            7, 1, 2,
            7, 2, 6,
            6, 2, 3,
            6, 3, 5,
            5, 3, 4
        };

        Color[] colors = new Color[] { color0, color0, color0, color1, color1, color1, color1, color0 };
		
		
        mesh.colors = colors;
		
		
        GetComponent<MeshRenderer>().material = bgMat;
        GetComponent<MeshFilter>().mesh = mesh;
    }
}
