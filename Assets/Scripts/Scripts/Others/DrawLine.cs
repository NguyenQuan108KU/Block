using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class DrawLine : MonoBehaviour {
    public LineRenderer line;
    List<Vector3> listPoint;
    public float minX, maxX;
    public float minY, maxY;

    void Start () 
    {
        listPoint = new List<Vector3>();
        float startY = minY + 1;
        for (int i = 0; i < (int)maxY; i++)
        {
            Vector3 p1 = new Vector3(minX, startY, 0);
            Vector3 p2 = new Vector3(maxX, startY, 0);
            if (i % 2 == 0)
            {
                AddPoint(p1);
                AddPoint(p2);
            }
            else
            {
                AddPoint(p2);
                AddPoint(p1);
            }


            startY++;
        }

        Apply();
    }

    void AddPoint(Vector3 newPos)
    {
        listPoint.Add(newPos);
    }

    void Apply()
    {
        line.SetVertexCount(listPoint.Count);
        line.SetPositions(solution(listPoint.ToArray()));
    }

    Vector3[] solution(Vector3[] original)
    {
        Vector3[] res = new Vector3[original.Length * 3 - 2];
        for (int i = 0; i < res.Length; i++)
        {
            if (i % 3 == 0)
            {
                res[i] = original[i / 3];
            }
            else if (i % 3 == 1)
            {
                res[i] = Vector3.Lerp(original[(i - 1) / 3], original[(i + 2) / 3], 0.0001f);
            }
            else if (i % 3 == 2)
            {
                res[i] = Vector3.Lerp(original[(i + 1) / 3], original[(i - 2) / 3], 0.0001f);
            }
        }
        return res;
    }


}