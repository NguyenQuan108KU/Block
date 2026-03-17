using UnityEngine;
using System.Collections;

public class BB10_TypePattem
{
    public static Type type;

    public enum Type
    {
        O0,
        O1,
        O2,
        I0,
        I1,
        I2,
        I3,
        L0,
        L1,
        T0,
        T1,
        LB0,
        Z0,
    }


    static Type RandomWeight(Config[] list)
    {
        int totalweight = 0;
        for(int i = 0; i < list.Length; i++)
        {
            totalweight += list[i].weight;
        }

        int choice = Random.Range(0, totalweight);
        int sum = 0;

        for(int i = 0; i < list.Length; i++)
        {
            if(list[i].weight + sum >= choice)
            {
                return list[i].type;
            }

            sum += list[i].weight;
        }

        return list[0].type;
    }

    enum Level
    {
        Easy,
        Medium,
        Hard
    }

    struct Config
    {
        public Type type;
        public int weight;
    }

    static Config[] ListEasy = new Config[]
    {
        new Config() { type = Type.O0, weight = 8 },//1
        new Config() { type = Type.O1, weight = 10 },//2
        new Config() { type = Type.O2, weight = 4 },//3
        new Config() { type = Type.I0, weight = 10 },//4
        new Config() { type = Type.I1, weight = 10 },//5
        new Config() { type = Type.I2, weight = 10 },//6
        new Config() { type = Type.I3, weight = 5 },//7
        new Config() { type = Type.L0, weight = 10 },//8
        new Config() { type = Type.L1, weight = 7 },//9
        new Config() { type = Type.T0, weight = 10 },//10
        new Config() { type = Type.LB0, weight = 10 },//11
        new Config() { type = Type.Z0, weight = 0 },//12
        new Config() { type = Type.T1, weight = 0 }//13
    };

    static Config[] ListMedium = new Config[] // 500
    {
        new Config() { type = Type.O0, weight = 4 },//1
        new Config() { type = Type.O1, weight = 10 },//2
        new Config() { type = Type.O2, weight = 6 },//3
        new Config() { type = Type.I0, weight = 10 },//4
        new Config() { type = Type.I1, weight = 10 },//5
        new Config() { type = Type.I2, weight = 10 },//6
        new Config() { type = Type.I3, weight = 7 },//7
        new Config() { type = Type.L0, weight = 10 },//8
        new Config() { type = Type.L1, weight = 10 },//9
        new Config() { type = Type.T0, weight = 10 },//10
        new Config() { type = Type.LB0, weight = 10 },//11
        new Config() { type = Type.Z0, weight = 8 },//12
        new Config() { type = Type.T1, weight = 4 }//13
    };

    static Config[] ListHard = new Config[] // 900
    {
        new Config() { type = Type.O0, weight = 2 },//1
        new Config() { type = Type.O1, weight = 10 },//2
        new Config() { type = Type.O2, weight = 8 },//3
        new Config() { type = Type.I0, weight = 10 },//4
        new Config() { type = Type.I1, weight = 10 },//5
        new Config() { type = Type.I2, weight = 10 },//6
        new Config() { type = Type.I3, weight = 10 },//7
        new Config() { type = Type.L0, weight = 10 },//8
        new Config() { type = Type.L1, weight = 10 },//9
        new Config() { type = Type.T0, weight = 10 },//10
        new Config() { type = Type.LB0, weight = 10 },//11
        new Config() { type = Type.Z0, weight = 10 },//12
        new Config() { type = Type.T1, weight = 5 }//13
    };      
}
