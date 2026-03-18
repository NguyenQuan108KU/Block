using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SG_Block_EffectCtr : MonoBehaviour
{
    public GameObject[] particlePrefabs;
    public List<ParticleSystem>[] listParticlesDisable;
    public int preload;

    public void Preload()
    {
        listParticlesDisable = new List<ParticleSystem>[particlePrefabs.Length];
        for (int i = 0; i < particlePrefabs.Length; i++)
        {
            listParticlesDisable[i] = new List<ParticleSystem>();
        }

        CreateFirstListEffectBreakBlock();
    }

    public ParticleSystem GetParticle(int ID)
{
    ParticleSystem particle;

    if (listParticlesDisable[ID].Count == 0)
    {
        GameObject obj = Instantiate(particlePrefabs[ID]);
        particle = obj.GetComponent<ParticleSystem>();
    }
    else
    {
        particle = listParticlesDisable[ID][listParticlesDisable[ID].Count - 1];
        listParticlesDisable[ID].RemoveAt(listParticlesDisable[ID].Count - 1);
        particle.gameObject.SetActive(true);
    }

    return particle;
}

    public void SetParticle(ParticleSystem particle, int ID)
    {
        //ID = 0;
        listParticlesDisable[ID].Add(particle);
        particle.gameObject.SetActive(false);
    }

    void CreateFirstListEffectBreakBlock()
    {  
        for (int i = 0; i < particlePrefabs.Length; i++)
        {
            ParticleSystem[] particle = new ParticleSystem[preload];

            for (int j = 0; j < preload; j++)
            {
                particle[j] = GetParticle(i);
            }

            for (int j = 0; j < preload; j++)
            {
                SetParticle(particle[j], i);
            }
        }
    }

    public void EffectBreakBlock([Bridge.Ref] Vector2 pos, int iD)
    {
        ParticleSystem particle = GetParticle(iD);
        particle.transform.position = pos;
        particle.Play();

        StartCoroutine(WaitDisable(particle, iD));
    }

    IEnumerator WaitDisable(ParticleSystem particle, int iD)
    {
        yield return new WaitForSeconds(particle.main.duration + 0.05f);
        SetParticle(particle, iD);
    }     
}
