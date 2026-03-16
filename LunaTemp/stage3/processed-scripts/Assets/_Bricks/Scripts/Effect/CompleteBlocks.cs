using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CompleteBlocks : MonoBehaviour
{
    public SpriteRenderer spriteRenderer;
    public List<TextAndSound> listTextAndSound;
    AudioSource audioSource;
    void Awake()
    {
        audioSource = GetComponent<AudioSource>();
    }

    public void PlayRandom()
    {
        if (listTextAndSound == null || listTextAndSound.Count == 0)
            return;
        int rand = Random.Range(0, listTextAndSound.Count);
        TextAndSound data = listTextAndSound[rand];
        spriteRenderer.sprite = data.sprite;
        audioSource.PlayOneShot(data.audioClip);
    }
}
