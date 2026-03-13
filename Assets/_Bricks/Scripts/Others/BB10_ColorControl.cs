using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class BB10_ColorControl : MonoBehaviour
{
    [SerializeField]
    public BB10_ColorData[] sprites;
    int count = 0;

    // grayscale color
    public Texture2D[] spriteTexs;
    public Sprite[][] preloadSprite;
         
    void Start()
    {
        count = Random.Range(0, sprites.Length);
        SettupTexture();
    }

    public int preload;
    int width, height;
    float pixelsPerUnit;

    public Sprite GetSprite(int ID, float t)
    {
        int index = Mathf.Min(Mathf.RoundToInt(t * preload), preload - 1);
        //Debug.Log(index);
        return preloadSprite[ID][index];
    }

    Sprite CreateSprite(Texture2D texture, float t)
    {
        Texture2D tex = new Texture2D(width, height);

        for(int i = 0; i < width; i++)
        {
            for(int j = 0; j < height; j++)
            {
                Color texColor = texture.GetPixel(i, j);
                float l = 0.2126f * texColor.r + 0.7152f * texColor.g + 0.0722f * texColor.b;
                Color c = new Color(Mathf.Lerp(texColor.r, l, t), Mathf.Lerp(texColor.g, l, t), Mathf.Lerp(texColor.b, l, t), texColor.a);
                tex.SetPixel(i, j, c);
            }
        }

        tex.Apply();

        Sprite mySprite;
        mySprite = Sprite.Create(tex, new Rect(0.0f, 0.0f, tex.width, tex.height), new Vector2(0.5f, 0.5f), pixelsPerUnit);

        return mySprite;
    }

    void SettupTexture()
    {
        // setting
        width = (int)sprites[0].sprite.rect.width;
        height = (int)sprites[0].sprite.rect.height;
        pixelsPerUnit = sprites[0].sprite.pixelsPerUnit;

        spriteTexs = new Texture2D[sprites.Length];
        preloadSprite = new Sprite[sprites.Length][];

        for (int i = 0; i < sprites.Length; i++)
        {
            spriteTexs[i] = sprites[i].sprite.texture;
        }

        for (int i = 0; i < sprites.Length; i++)
        {
            preloadSprite[i] = new Sprite[preload];

            for (int j = 0; j < preload; j++)
            {
                preloadSprite[i][j] = CreateSprite(spriteTexs[i], (float)j / preload);
            }

        }
       
    }

    public BB10_ColorData GetRandSpriteData()
    {
        //        return sprites[0];
        int index = count % sprites.Length;
        count++;
        return sprites[index];
    }

    public BB10_ColorData GetNextSpriteData()
    {
        int index = count % sprites.Length;
        return sprites[index];
    }

    public Sprite[] GrayscaleSprites(float t)
    {
        Sprite[] listGraySprite = new Sprite[sprites.Length];
        for (int i = 0; i < sprites.Length; i++)
        {
            listGraySprite[i] = preloadSprite[i][Mathf.RoundToInt(t * preload)];
        }

        return listGraySprite;
    }

    public BB10_ColorData GetSpriteData(int index)
    {
//        index = 0;
        return sprites[index];
    }    
}
