using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bricks_EffectCtr : MonoBehaviour
{
    public GameObject particlePrefabs;
    public List<GameObject> listParticlesDisable;
    public int preload;

    public void Preload()
    {
        listParticlesDisable = new List<GameObject>();

        CreateFirst();
    }

    void CreateFirst()
    {
        GameObject[] particle = new GameObject[preload];

        for (int j = 0; j < preload; j++)
        {
            particle[j] = GetParticle();
        }

        for (int j = 0; j < preload; j++)
        {
            SetParticle(particle[j]);
        }
    }

    public void Effect(Vector2 pos)
    {
        GameObject particle = GetParticle();
        particle.transform.position = pos;

        StartCoroutine(WaitDisable(particle));
    }

    IEnumerator WaitDisable(GameObject particle)
    {
        yield return new WaitForSeconds(0.8f);
        SetParticle(particle);
    }

    public GameObject GetParticle()
    {
        GameObject particle;
        if (listParticlesDisable.Count == 0)
        {
            particle = Instantiate(particlePrefabs);
        }
        else
        {
            particle = listParticlesDisable[listParticlesDisable.Count - 1];
            listParticlesDisable.RemoveAt(listParticlesDisable.Count - 1);
            particle.gameObject.SetActive(true);
        }

        return particle;
    }

    public void SetParticle(GameObject particle)
    {
        listParticlesDisable.Add(particle);
        particle.gameObject.SetActive(false);
    }
}
