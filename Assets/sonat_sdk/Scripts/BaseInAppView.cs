using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public abstract class BaseInAppView : KernelLoadedView
{
    [IndexAsEnumSonatSdk(BuiltInEnumType.ShopItemKey)] [SerializeField]
    protected int key;

    [SerializeField] protected TMP_Text textPrice;
    [SerializeField] protected Text textPrice2;
    [SerializeField] protected Button buyButton;


    protected override void Start()
    {
        base.Start();
        UpdateView();
        buyButton.onClick.AddListener(() =>
        {
            Debug.Log("click buy"+key);
            Kernel.Resolve<BasePurchaser>().Buy(key, Claim);
        });
    }

    protected override void OnKernelLoaded()
    {
        base.OnKernelLoaded();
        UpdateView();
    }

    protected virtual void UpdateView()
    {
        if (textPrice != null)
            textPrice.text = $"{Kernel.Resolve<BasePurchaser>().GetPriceText(key)}";
        if (textPrice2 != null)
            textPrice2.text = $"{Kernel.Resolve<BasePurchaser>().GetPriceText(key)}";
    }

    protected virtual void OnEnable()
    {
        UpdateView();
    }

    protected abstract void Claim();
}