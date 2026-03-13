using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using UnityEditor;
using UnityEngine;
using Object = UnityEngine.Object;


[CustomPropertyDrawer(typeof(MyButtonIntParameterPresetAttribute))]
public class MyButtonIntParameterPresetDrawer : ClassicButtonDrawer
{
    protected override bool UsePropertyAsParameter => false;
    protected override bool Skip => true;

    protected override List<Type[]> FindParams => new List<Type[]>
    {
        new Type[0],
        new []{typeof(int)},
    };

    protected override int NButtons => ((MyButtonIntParameterPresetAttribute) attribute).Parameter.Length;

    public override object GetParams(SerializedProperty property, int i)
    {
        var att = (MyButtonIntParameterPresetAttribute) attribute;
        return att.Parameter[i];
    }

    protected override string GetMethodName(int i) => ButtonAttribute.MethodNames[0];
    protected override string GetButtonName(int i)
    {
        var att = ((MyButtonIntParameterPresetAttribute) attribute);
        return att.Prefix + " " + att .Parameter[i];
    }
}

[CustomPropertyDrawer(typeof(MyButtonRangeAttribute))]
public class ButtonRangeAttributeDrawer : ClassicButtonDrawer
{
    protected override bool UsePropertyAsParameter => false;
    protected override bool Skip => true;

    protected override int[] Colors => ((MyButtonRangeAttribute) attribute).Colors;

    protected override List<Type[]> FindParams => new List<Type[]>
    {
        new Type[0],
        new []{typeof(int)},
    };

    protected override int NButtons
    {
        get
        {   
            var att = (MyButtonRangeAttribute) attribute;
            return att.To - att.From + 1;// + (att.Label != null ? 1 : 0);
        }
    }

    public override object GetParams(SerializedProperty property, int i)
    {
        var att = (MyButtonRangeAttribute) attribute;
        return att.From + i;
    }

    protected override string GetMethodName(int i) => ButtonAttribute.MethodNames[0];
    protected override string GetButtonName(int i)
    {
        var att = ((MyButtonRangeAttribute) attribute);
        if(att.Names != null)
            return att.Names[i];
        return att.Prefix + " " + (att.From + i);
    }
}

[CustomPropertyDrawer(typeof(MyButtonIntPageSelectAttribute))]
public class MyButtonIntPageSelectAttributeDrawer : ClassicButtonDrawer
{
    protected override bool UsePropertyAsParameter => true;

    protected override List<Type[]> FindParams => new List<Type[]>
    {
        new Type[0],
        new []{typeof(int)},
    };

    public override object GetParams(SerializedProperty property, int index)
    {
        return property.intValue;
    }
    
    public override void DrawProperty(SerializedProperty property, Rect rect,GUIContent label)
    {
        base.DrawProperty(property, rect,label);
        var rects = rect.GetSplitRect(3);

        
        GUI.enabled = property.intValue > 0;

        if (GUI.Button(rects[0], "<<"))
        {
            property.intValue--;
        }

        var att = (MyButtonIntPageSelectAttribute)attribute;
        var parent = (object) property.serializedObject.targetObject;
        if (parent == null)
            parent = property.DuongGetParentSerializedValueRaw();

        // count 
        var field = parent.GetType().GetField(att.NameOfListOrCountProperty);
        if (field != null)
        {
            var property2 = field.GetValue(parent);
            if (property2 is ICollection)
            {
                GUI.enabled = property.intValue < ((ICollection)property2).Count;
            }
        }
        else
        {
            var field2 = parent.GetType().GetProperty(att.NameOfListOrCountProperty);
            GUI.enabled = property.intValue < (int)field2.GetValue(parent);
        }
    

        if (GUI.Button(rects[2], ">>"))
        {
            property.intValue++;
        }
        GUI.enabled = true;

        property.intValue = EditorGUI.IntField(rects[1], property.intValue);

    }
}