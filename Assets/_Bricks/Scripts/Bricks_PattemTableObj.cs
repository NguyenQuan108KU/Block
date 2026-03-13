using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//using System;

[CreateAssetMenu(fileName = "PattemData", menuName = "Create Pattem Data")]
public class Bricks_PattemTableObj : ScriptableObject
{
    public PattemInfor[] listPattemsInfor;

    public LevelData[] levelData;

    public static int count = 0;

    bool CheckException()
    {
        count++;
        return false;
    }

    Types GetTypeException()
    {
        //Debug.Log("GetTypeException");

        int rand = Random.Range(0, 6);

        switch(rand)
        {
            case 0:
            case 1:
                return Types.O2;
            case 2:
                return Types.I2;
            case 3:
            case 4:
                return Types.I3;
            case 5:
                return Types.L1;
            default:
                break;
        }

        return Types.O2;
    }

    public Types GetFixedRandomType(int score)
    {
        if(CheckException())
        {
            return GetTypeException();
        }

        for (int i = 0; i < levelData.Length; i++)
        {
            if (score < levelData[i].Score)
            {
                return listPattemsInfor[RandomWeight(levelData[i].weight)].type;
            }
        } 
            
        return listPattemsInfor[RandomWeight(levelData[levelData.Length - 1].weight)].type;
    }        

    int RandomWeight(int[] list)
    {
        int totalweight = 0;
        for (int i = 0; i < list.Length; i++)
        {
            totalweight += list[i];
        }

        int choice = Random.Range(0, totalweight);
        int sum = 0;

        for (int i = 0; i < list.Length; i++)
        {
            if (list[i] + sum >= choice)
            {
                return i;
            }

            sum += list[i];
        }
            
        return 0;
    }
}
