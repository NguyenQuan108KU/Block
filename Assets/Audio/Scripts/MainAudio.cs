using UnityEngine;
using System.Collections;
using UnityEngine.Audio;
using System.Collections.Generic;

public class MainAudio : MonoBehaviour
{
    static MainAudio main;
    public InputAudio[] listInputAudio;

    AudioSource[] sound;
    Dictionary< TypeAudio, AudioSource> audioDict = new Dictionary<TypeAudio, AudioSource>();
    public bool isMute;
    int bgIndex;

    void Awake()
    {
        AddComponienAudioSources();
        //SetBGMusic();
        main = this;
    }

    void SetBGMusic()
    {
        if (audioDict.ContainsKey(TypeAudio.SoundBG))
        {
            audioDict[TypeAudio.SoundBG].loop = true;
            PlaySound(TypeAudio.SoundBG);
        }
    }

    public static MainAudio Main
    {
        get{ return main; }
    }

    void AddComponienAudioSources()
    {
        sound = new AudioSource[listInputAudio.Length];
        for (int i = 0; i < listInputAudio.Length; i++)
        {
            AudioSource thisAudio = gameObject.AddComponent<AudioSource>();
            sound[i] = thisAudio;
            thisAudio.playOnAwake = false;
            thisAudio.clip = listInputAudio[i].audioClip;
            thisAudio.volume = listInputAudio[i].volume;
            if (listInputAudio[i].loop)
            {
                thisAudio.loop = true;
            }
            audioDict.Add(listInputAudio[i].type, thisAudio);
        }
    }


    public void StopySound(TypeAudio type)
    {
        if (audioDict.ContainsKey(type))
        {
            audioDict[type].Stop();
        }
    }

    public void PlaySound(TypeAudio type)
    {
        if (!isMute && audioDict.ContainsKey(type))
        {
            audioDict[type].Play();
        }
        else
        {
            Debug.LogWarning("Audio not found: " + type);
        }
    }

    public void MuteSound(bool bol)
    {
        if (!bol)
        {
            AudioListener.volume = 1;
        }
        else
        {
            AudioListener.volume = 0;
        }
    }
        
}
