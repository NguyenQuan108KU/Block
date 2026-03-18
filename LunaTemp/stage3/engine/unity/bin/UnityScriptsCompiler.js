if ( TRACE ) { TRACE( JSON.parse( '["AddSelectItem#init","AddSelectItem#CreateTable","AddSelectItem#AddItem","AutoPlay#Start","AutoPlay#InitAuto","AutoPlay#StartAuto","BB10_BrickCubeUnit#GetSpriteID#get","BB10_BrickCubeUnit#GetObj#get","BB10_BrickCubeUnit#init","BB10_BrickCubeUnit#OnClickBlock","BB10_BrickCubeUnit#Update","BB10_BrickCubeUnit#SetSprite","BB10_BrickCubeUnit#SetSprite$1","BB10_BrickCubeUnit#SetLayer","BB10_BrickCubeUnit#SetAlpha","BB10_BrickCubeUnit#RotateUnit","BB10_BrickCubeUnit#MoveCenterPos","BB10_BrickCubeUnit#ApplyRotate","BB10_BrickCubeUnit#DropDown","BB10_BrickCubeUnit#StartDrop","BB10_BrickCubeUnit#Effect","BB10_BrickCubeUnit#WaitEffect","BB10_BrickCubeUnit#EffectHideBlock","BB10_BrickCubeUnit#SetShadowDropBlock","BB10_ColorControl#init","BB10_ColorControl#Start","BB10_ColorControl#GetSprite","BB10_ColorControl#CreateSprite","BB10_ColorControl#SettupTexture","BB10_ColorControl#GetRandSpriteData","BB10_ColorControl#GetNextSpriteData","BB10_ColorControl#GrayscaleSprites","BB10_ColorControl#GetSpriteData","BB10_ColorData#getDefaultValue","BB10_ColorData#ctor","BB10_ColorData#getHashCode","BB10_ColorData#equals","BB10_ColorData#$clone","BB10_CupShaker#init","BB10_CupShaker#Awake","BB10_CupShaker#StartShake","BB10_CupShaker#StartMove","BB10_CupShaker#StartEffect","BB10_FaderHandler#Reset","BB10_FaderHandler#Fade","BB10_FaderHandler#SetActive","BB10_FaderHandler#StartFade","BB10_FaderHandler#SwichPanel","BB10_FaderHandler#StartSwichPanel","BB10_FaderHandler#SwichPanelFix","BB10_FaderHandler#StartSwichPanelFix","BB10_FaderHandler#FadeInPanel","BB10_FaderHandler#StartFadeInPanel","BB10_FaderHandler#FadeInPanelFix","BB10_FaderHandler#StartFadeInPanelFix","BB10_FaderHandler#FadeOutPanel","BB10_FaderHandler#StartFadeOutPanel","BB10_FaderHandler#FadeOutPanelFix","BB10_FaderHandler#StartFadeOutPanelFix","BB10_Grid#init","BB10_Grid#Awake","BB10_Grid#SpawnGridVisual","BB10_Grid#Preload","BB10_Grid#GrayScaleMap","BB10_Grid#GrayBlock","BB10_Grid#GetRandGray","BB10_Grid#StartGrayScale","BB10_Grid#InvalidPlacePattem","BB10_Grid#ValidPlaceMoreThanOne","BB10_Grid#PosValidPattem","BB10_Grid#InvalidPoint","BB10_Grid#CheckGridFillTest","BB10_Grid#IsRowFillWith","BB10_Grid#IsColFillWith","BB10_Grid#isRowFullTest","BB10_Grid#isColFullTest","BB10_Grid#ChangeSpriteFillCol","BB10_Grid#ChangeSpriteFillRow","BB10_Grid#CheckGrid","BB10_Grid#CreateEffect","BB10_Grid#GetCenterRow","BB10_Grid#GetCenterCol","BB10_Grid#isRowFull","BB10_Grid#isColFull","BB10_Grid#CheckBundle","BB10_Grid#CenterOfList","BB10_Grid#TurnOffAllFillLine","BB10_Grid#ClearListFill","BB10_Grid#IsInListTest","BB10_Grid#deleteRow","BB10_Grid#DeleteOneRow","BB10_Grid#DeleteSomeBlock","BB10_Grid#DeleteListEffect","BB10_Grid#deleteCol","BB10_Grid#DeleteOneCol","BB10_Grid#DeleteList","BB10_Grid#IsInList","BB10_Grid#IsInListInt","BB10_Grid#GetOneInCol","BB10_Grid#GetOneInRow","BB10_Grid#insideBorder","BB10_Grid#SetAllBlock","BB10_Grid#GetPlacePattem","BB10_Grid#SaveData","BB10_Grid#LoadDataSave","BB10_Grid#ConvertListToString","BB10_Grid.fillData#getDefaultValue","BB10_Grid.fillData#init","BB10_Grid.fillData#ctor","BB10_Grid.fillData#getHashCode","BB10_Grid.fillData#equals","BB10_Grid.fillData#$clone","BB10_Grid.unitWait#getDefaultValue","BB10_Grid.unitWait#ctor","BB10_Grid.unitWait#getHashCode","BB10_Grid.unitWait#equals","BB10_Grid.unitWait#$clone","BB10_GroundView#init","BB10_GroundView#GetCube","BB10_GroundView#HideAllBlock","BB10_GroundView#Start","BB10_GroundView#SetPattem","BB10_HomeController#init","BB10_HomeController#OnEnable","BB10_HomeController#ShowHome","BB10_HomeController#HideHome","BB10_HomeController#Restart","BB10_HomeController#Reset","BB10_HomeController#PreLoad","BB10_HomeController#CheckSound","BB10_HomeController#SoundClick","BB10_HomeController#OffFading","BB10_HomeController#MidleTryAgain","BB10_HomeController#PrivacyPolicy","BB10_HomeController#SetActive","BB10_InGameScript#Awake","BB10_InGameScript#Start","BB10_InGameScript#Preload","BB10_InGameScript#Reset","BB10_InGameScript#ScoreUpAnim","BB10_InGameScript#ResetScore","BB10_InGameScript#ResetBest","BB10_InGameScript#SetActive","BB10_InGameScript#Pause","BB10_InGameScript#SetNewScore","BB10_InGameScript#UpScoreTxt","BB10_InGameScript#SetScoreContinue","BB10_InGameScript#StartTut","BB10_InGameScript#FinishTut","BB10_InGameScript#SkipTut","BB10_LostScript#init","BB10_LostScript#init","BB10_LostScript#Preload","BB10_LostScript#Reset","BB10_LostScript#WaitSwitch","BB10_LostScript#AnimScore","BB10_LostScript#GameOver","BB10_LostScript#ScoreUpAnim","BB10_LostScript#WaitState","BB10_LostScript#TryAgainButton","BB10_LostScript#NextGame","BB10_LostScript#MidleTryAgain","BB10_LostScript#SetActive","BB10_LostScript#SetScore","BB10_LostScript#SetBestScore","BB10_MainCanvasUI#Main#get","BB10_MainCanvasUI#init","BB10_MainCanvasUI#CheckPreloadTutorial","BB10_MainCanvasUI#Start","BB10_MainCanvasUI#InitGame","BB10_MainCanvasUI#Awake","BB10_MainCanvasUI#Update","BB10_MainCanvasUI#Preload","BB10_MainCanvasUI#Reset","BB10_MainCanvasUI#StartGame","BB10_MainCanvasUI#EnsureAdBreakManager","BB10_MainCanvasUI#CheckToReloadBanner","BB10_MainCanvasUI#ShowBannerDelay","BB10_MainCanvasUI#CheckBundle","BB10_MainCanvasUI#EffectGrid","BB10_MainCanvasUI#loadPattemDelay","BB10_MainCanvasUI#Load","BB10_MainCanvasUI#FadeIn","BB10_MainCanvasUI#FadeOut","BB10_MainCanvasUI#StopWaitShowAdBreask","BB10_MainObjControl#Instant#get","BB10_MainObjControl#Preload","BB10_MainObjControl#Awake","BB10_MainObjControl#Start","BB10_MainState#GetState#get","BB10_MainState#SetState","BB10_NextViewer#init","BB10_NextViewer#SetPattem","BB10_NextViewer#Awake","BB10_NextViewer#Start","BB10_NextViewer#SetPattemAndRotate","BB10_NextViewer#SetBlockPos","BB10_NextViewer#RotatePattem","BB10_NextViewer#MoveBlocks","BB10_NextViewer#RotatePattemOne","BB10_NextViewer#FixCenterPos","BB10_NextViewer#ClickPattern","BB10_NextViewer#CheckImpossible","BB10_NextViewer#GreyWhenGameOver","BB10_NextViewer#ValidMoreThanOne","BB10_NextViewer#PosValid","BB10_NextViewer#HideAllBlock","BB10_NextViewer#ShowAllBlock","BB10_NextViewer#SetAllBlock","BB10_NextViewer#StartSetLight","BB10_NextViewer#SetLight","BB10_NextViewerControl#init","BB10_NextViewerControl#Awake","BB10_NextViewerControl#Preload","BB10_NextViewerControl#CheckUpdateNewPattem","BB10_NextViewerControl#CheckHelp","BB10_NextViewerControl#UpdatePattems","BB10_NextViewerControl#CheckImpossiblePattem","BB10_NextViewerControl#GreyWhenGameOver","BB10_NextViewerControl#CheckGameOver","BB10_NextViewerControl#IsGameOver","BB10_NextViewerControl#GetNewPattems","BB10_NextViewerControl#RotatePattem","BB10_NextViewerControl#SetAllBlockFromList","BB10_NextViewerControl#IsEmptyAll","BB10_NextViewerControl#InvalidAllPattem","BB10_NextViewerControl#NumberPattemO2","BB10_NextViewerControl#SetAllBlock","BB10_PattemCreater#init","BB10_PattemCreater#Awake","BB10_PattemCreater#CreatePattem","BB10_PattemCreater#Create","BB10_PattemCreater#CreateABlock","BB10_PattemCreater#GetCube","BB10_PattemCreater#SetCube","BB10_PattemCreater#GetTypeFromString","BB10_PauseScript#init","BB10_PauseScript#PauseGame","BB10_PauseScript#UnPause","BB10_PauseScript#ShowHome","BB10_PauseScript#Restart","BB10_PauseScript#Reset","BB10_PauseScript#PreLoad","BB10_PauseScript#CheckSound","BB10_PauseScript#SoundClick","BB10_PauseScript#OffFading","BB10_PauseScript#MidleTryAgain","BB10_PauseScript#SetActive","BB10_PlaneView#init","BB10_PlaneView#SetPattem","BB10_PlaneView#SetBlockPos","BB10_PlaneView#ScaleBlock","BB10_PlaneView#SetAllBlock","BB10_PlaneView#Awake","BB10_PlaneView#ScaleDownBlock","BB10_PlaneView#ScaleUpBlock","BB10_PlaneView#Update","BB10_PlaneView#Drag","BB10_PlaneView#CheckPlace","BB10_PlaneView#PlacePattemGround","BB10_PlaneView#CheckSelectedBlock","BB10_PlaneView#CheckPlaceInTuto","BB10_PlaneView#CheckGround","BB10_PlaneView#IsInvalidGrid","BB10_PlaneView#GetFixedMousePos","BB10_PopupRate#init","BB10_PopupRate#Rate","BB10_PopupRate#init","BB10_PopupRate#HandleClickStar","BB10_PopupRate#HandleSubmit","BB10_PopupRate#Preload","BB10_PopupRate#InitPopup","BB10_PopupRate#ShowPopup","BB10_PopupRate#HidePopup","BB10_PopupRate#CloseBtn","BB10_PopupRate#HandleRate4Star","BB10_PopupRate#HandleRate5Star","BB10_RateStar#HandleClickStar","BB10_ScoreCtr#init","BB10_ScoreCtr#GetText","BB10_ScoreCtr#SetText","BB10_ScoreCtr#ShowText","BB10_ScoreCtr#Preload","BB10_ScoreCtr#FadeOut","BB10_ScoreCtr#GetY","BB10_ScreenCtr#init","BB10_ScreenCtr#StartGridAnim","BB10_ScreenCtr#MovePart","BB10_ScreenCtr#Fix","BB10_ScreenCtr#FixMultiScreen","BB10_ScreenCtr#CreateBG","BB10_ScreenCtr#StartNoAnim","BB10_ScreenCtr#StartAnim","BB10_ScreenCtr#Step","BB10_ScreenCtr#ScaleUpUnit","BB10_ScreenCtr#easeOutQuad","BB10_ScreenCtr#SetAlphaPart1","BB10_ScreenCtr#SetAlphaAll","BB10_ScreenCtr#FixPattemPos","BB10_ScreenCtr#ScaleToFitBg","BB10_ScreenCtr#StartFade","BB10_Settings#GetBest#get","BB10_Settings#GetLevel#get","BB10_Settings#GetMaxLevel#get","BB10_Settings#GetDuration_Avg#get","BB10_Settings#GetTypeMove#get","BB10_Settings#GetSound#get","BB10_Settings#GetMusic#get","BB10_Settings#GetTime#get","BB10_Settings#GetTimePlay#get","BB10_Settings#GetTimePlayForDuration#get","BB10_Settings#GetContinue#get","BB10_Settings#GetContinueData#get","BB10_Settings#HasKey","BB10_Settings#SetBest","BB10_Settings#SetLevel","BB10_Settings#SetMaxLevel","BB10_Settings#SetDuration_Avg","BB10_Settings#SetTypeMove","BB10_Settings#SetSound","BB10_Settings#SetMusic","BB10_Settings#SetTime","BB10_Settings#SetTimePlay","BB10_Settings#SetTimePlayForDuration","BB10_Settings#SetStar","BB10_Settings#GetStar","BB10_Settings#SetContinue","BB10_Settings#SetContinueData","BB10_Settings#GetTimeStamp","BB10_Settings#SetTimeStamp","BB10_Settings#GetShowFanInDay","BB10_Settings#SetShowFanInDay","BB10_ShowHelpCtr#ShowHelp","BB10_ShowHelpCtr#GetBlock","BB10_ShowHelpCtr#SetBlock","BB10_ShowHelpCtr#HideAllBlock","BB10_Tutorial#init","BB10_Tutorial#Preload","BB10_Tutorial#Show","BB10_Tutorial#StopFinger","BB10_Tutorial#StartFinger","BB10_Tutorial#Next","BB10_Tutorial#WaitOpenMap2","BB10_Tutorial#WaitOpenMap3","BB10_Tutorial#FinishMap3","BB10_Tutorial#WaitOpenMap4","BB10_Tutorial#WaitOpenMap5","BB10_Tutorial#FinishMap5","BB10_Tutorial#OpenMap1","BB10_Tutorial#LoadMap1","BB10_Tutorial#OpenMap2","BB10_Tutorial#LoadMap2","BB10_Tutorial#OpenMap3","BB10_Tutorial#OpenMap4","BB10_Tutorial#OpenMap5","BB10_Tutorial#LoadMap3","BB10_Tutorial#SkipTut","BB10_Tutorial#StartMoveFinger","BB10_TypePattem#init","BB10_TypePattem#RandomWeight","BB10_TypePattem.Config#getDefaultValue","BB10_TypePattem.Config#ctor","BB10_TypePattem.Config#getHashCode","BB10_TypePattem.Config#equals","BB10_TypePattem.Config#$clone","BoomControl#GetBoom","BoomControl#SetBoom","BoomControl#ShowBoom","Bricks_PattemTableObj#init","Bricks_PattemTableObj#CheckException","Bricks_PattemTableObj#GetTypeException","Bricks_PattemTableObj#GetFixedRandomType","Bricks_PattemTableObj#RandomWeight","CameraResponsive#init","CameraResponsive#Start","CameraResponsive#ResizeScreen","CameraResponsive#OnDestroy","CompleteBlocks#Awake","CompleteBlocks#PlayRandom","CTAButton#GoToStore","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","Exit#Reset","Exit#SetActive","Exit#StartWait","Exit#Wait","GameDefine#init","GameDefine#GetScore","GameEvent#OnResizeScreen#get","GameEvent#init","SingletonBase$1#Instance#get","SingletonBase$1#init","InputAudio#getDefaultValue","InputAudio#ctor","InputAudio#getHashCode","InputAudio#equals","InputAudio#$clone","ItemUnit#init","ItemUnit#OnEnable","ItemUnit#SetLock","ItemUnit#SetOpen","ItemUnit#OnPointerClick","ItemUnit#ButtonClick","LevelData#getDefaultValue","LevelData#ctor","LevelData#getHashCode","LevelData#equals","LevelData#$clone","MainAudio#Main#get","MainAudio#init","MainAudio#Awake","MainAudio#SetBGMusic","MainAudio#AddComponienAudioSources","MainAudio#StopySound","MainAudio#PlaySound","MainAudio#MuteSound","PattemInfor#getDefaultValue","PattemInfor#ctor","PattemInfor#getHashCode","PattemInfor#equals","PattemInfor#$clone","PauseGameListener#init","PauseGameListener#OnMouseUp","PlayableAPI#GoToStore","PlayableAPI#GameEnded","PlayableAPI#LogEventFailed","PlayableAPI#LogEventWin","PlayableAPI#LogEventStart","PlayableAPI#CustomEvent","ResponsiveBase#Start","ResponsiveBase#Initialize","ResponsiveBase#ResizeScreen","ScaleElement#init","ScaleElement#Start","ScaleElement#StartAnimation","SelectLevelScript#Preload","SelectLevelScript#ReSet","SelectLevelScript#ResetContentTable","SelectLevelScript#SetActive","SG_Block_EffectCtr#Preload","SG_Block_EffectCtr#GetParticle","SG_Block_EffectCtr#SetParticle","SG_Block_EffectCtr#CreateFirstListEffectBreakBlock","SG_Block_EffectCtr#EffectBreakBlock","SG_Block_EffectCtr#WaitDisable","StarLevelControl#SetActive","StarLevelControl#SetActiveObj","StartGameScript#Reset","StartGameScript#Update","StartGameScript#StartPlayGame","StartGameScript#Middle","StartGameScript#SetActive","StartGameScript#FbClick","StartGameScript#RateClick","StartGameScript#MoreClick","TextMeshProController#init","TextMeshProController#Awake","TextMeshProController#OnEnable","TextMeshProController#OnDisable","TextMeshProController#ApplyCurve","TextMeshProController#PlayScaleAnimation","TextMeshProController#StopAnimation","TextMeshProController#OnDestroy","TextMeshProController#PrepareOriginalVertices","TextMeshProController#AnimateScaleSequence","TextMeshProController#AnimateCharacterScale","TextMeshProController#GetCharacterCenter","TextMeshProController#ApplyScaleToCharacter","TweenConfig#init","TweenConfig#Clone","TweenData#SetupData","TweenData#OnConfigSOValueChanged","TweenData#SetDataFromConfigSo","UITween#Play","UITween#PlayTweenScale","UITween#PlayTweenFade","UITween#PlayTweenMove","UITween#PlayTweenLocalMove","UITween#PlayTweenRectLocalMove","UITween#PlayTweenFadeGroup","UITween#PlayTweenActive","UITweenElement#init","UITweenElement#OnEnable","UITweenElement#Play","Vec2#FastDistance","Vec2#ctor","Vec2#$ctor1","Vec2#$ctor2","Vec2#$ctor3","Vec2#Print","BlockJewel#Effect","BlockJewel#EffectBlock","GamePlayManager#inherits","GamePlayManager#Start","GamePlayManager#Update","GamePlayManager#UpScore","GamePlayManager#GameOver","GamePlayManager#UpClick","GamePlayManager#GoToStore","GamePlayManager#GameEnd","ResponsiveManager#inherits","ResponsiveManager#init","ResponsiveManager#Awake","ResponsiveManager#Update","ResponsiveManager#UpdateScreenType","ResponsiveWorld#init","ResponsiveWorld#Start","ResponsiveWorld#OnHorizontal","ResponsiveWorld#OnVerticalTall","ResponsiveWorld#OnVertical","ResponsiveWorld#OnTablet","TimerProgress#inherits","TimerProgress#init","TimerProgress#Start","TimerProgress#Update","TimerProgress#SetTime","TimerProgress#StopTimer","TutorialManager#inherits","TutorialManager#init","TutorialManager#Start","TutorialManager#ShowTutorial","TutorialManager#PlayHandTutorial","TutorialManager#GetBlockCenter","TutorialManager#GetShadowCenter","TutorialManager#StartBounceTutorial","TutorialManager#ResetIdleTimer","TutorialManager#GetValidBlock"]' ) ); }
/**
 * @version 1.0.9573.21447
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AddSelectItem start.*/
    Bridge.define("AddSelectItem", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            item: null,
            row: 0,
            col: 0,
            height: 0,
            grid: null,
            rec: null,
            listUnit: null,
            count: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AddSelectItem#init", this ); }

                this.count = 0;
            }
        },
        methods: {
            /*AddSelectItem.CreateTable start.*/
            CreateTable: function () {
if ( TRACE ) { TRACE( "AddSelectItem#CreateTable", this ); }

                var numberItem = Bridge.Int.mul(this.row, this.col);
                this.listUnit = System.Array.init(numberItem, null, ItemUnit);
                for (var i = 0; i < this.col; i = (i + 1) | 0) {
                    for (var j = 0; j < this.row; j = (j + 1) | 0) {
                        this.AddItem();
                    }
                }
            },
            /*AddSelectItem.CreateTable end.*/

            /*AddSelectItem.AddItem start.*/
            AddItem: function () {
if ( TRACE ) { TRACE( "AddSelectItem#AddItem", this ); }

                var newItem = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.item);
                newItem.transform.SetParent(this.transform);
                newItem.transform.localScale = new pc.Vec3( 1, 1, 1 );
                this.listUnit[this.count] = newItem.GetComponent(ItemUnit);
                this.listUnit[this.count].index = (this.count + 1) | 0;
                this.count = (this.count + 1) | 0;
            },
            /*AddSelectItem.AddItem end.*/


        }
    });
    /*AddSelectItem end.*/

    /*AutoPlay start.*/
    Bridge.define("AutoPlay", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            grid: null,
            nextViewerCtr: null,
            planeView: null,
            timeScale: 0
        },
        methods: {
            /*AutoPlay.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AutoPlay#Start", this ); }

                UnityEngine.Time.timeScale = this.timeScale;
                this.StartCoroutine$1(this.InitAuto());
            },
            /*AutoPlay.Start end.*/

            /*AutoPlay.InitAuto start.*/
            InitAuto: function () {
if ( TRACE ) { TRACE( "AutoPlay#InitAuto", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( UnityEngine.MonoBehaviour.op_Equality(BB10_MainObjControl.Instant, null) ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    this.grid = BB10_MainObjControl.Instant.grid;
                                        this.nextViewerCtr = BB10_MainObjControl.Instant.nextViewerCtr;
                                        this.planeView = BB10_MainObjControl.Instant.planeViewCrt;

                                        this.planeView.isAuto = true;

                                        this.StartCoroutine$1(this.StartAuto());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AutoPlay.InitAuto end.*/

            /*AutoPlay.StartAuto start.*/
            StartAuto: function () {
if ( TRACE ) { TRACE( "AutoPlay#StartAuto", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    next,
                    $t,
                    $t1,
                    $t2,
                    posSelect,
                    $t3,
                    $t4,
                    $t5,
                    $t6,
                    posSelect1,
                    $t7,
                    $t8,
                    posSelect2,
                    $t9,
                    listBlockLocalPos,
                    facePos,
                    $t10,
                    place,
                    timer,
                    startPos,
                    correctPos,
                    targetPos,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 13;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    // select pattem to drag

                                        if (($t = this.nextViewerCtr.listView)[0].state === BB10_NextViewer.State.Show && !this.grid.InvalidPlacePattem(($t1 = this.nextViewerCtr.listView)[0].listBlock)) {
                                            next = ($t2 = this.nextViewerCtr.listView)[0];
                                            this.planeView.selected = 0;
                                            posSelect = UnityEngine.Vector2.FromVector3(($t3 = this.nextViewerCtr.listView)[0].transform.position.$clone());
                                            this.planeView.faceMousePos = new pc.Vec2( posSelect.x, posSelect.y + this.planeView.distanceTouch );
                                        } else if (($t4 = this.nextViewerCtr.listView)[1].state === BB10_NextViewer.State.Show && !this.grid.InvalidPlacePattem(($t5 = this.nextViewerCtr.listView)[1].listBlock)) {
                                            next = ($t6 = this.nextViewerCtr.listView)[1];
                                            this.planeView.selected = 1;
                                            posSelect1 = UnityEngine.Vector2.FromVector3(($t7 = this.nextViewerCtr.listView)[1].transform.position.$clone());
                                            this.planeView.faceMousePos = new pc.Vec2( posSelect1.x, posSelect1.y + this.planeView.distanceTouch );
                                        } else {
                                            next = ($t8 = this.nextViewerCtr.listView)[2];
                                            this.planeView.selected = 2;
                                            posSelect2 = UnityEngine.Vector2.FromVector3(($t9 = this.nextViewerCtr.listView)[2].transform.position.$clone());
                                            this.planeView.faceMousePos = new pc.Vec2( posSelect2.x, posSelect2.y + this.planeView.distanceTouch );
                                        }


                                        BB10_MainObjControl.Instant.planeViewCrt.SetPattem(next.listBlock, UnityEngine.Vector2.FromVector3(next.gameObject.transform.position), next.listBlock.getItem(0).myData, next.index, next.scale);
                                        listBlockLocalPos = System.Array.init(next.listBlock.Count, function (){
                                            return new UnityEngine.Vector2();
                                        }, UnityEngine.Vector2);

                                        for (var i = 0; i < next.listBlock.Count; i = (i + 1) | 0) {
                                            listBlockLocalPos[i] = (UnityEngine.Vector2.FromVector3(next.listBlock.getItem(i).transform.position).sub( UnityEngine.Vector2.FromVector3(next.transform.position) )).scale( 1.0 / ( next.scale ) );
                                        }


                                        next.HideAllBlock();

                                        facePos = UnityEngine.Vector2.FromVector3(($t10 = this.nextViewerCtr.listView)[this.planeView.selected].transform.position.$clone());
                                        this.planeView.faceMousePos = new pc.Vec2( facePos.x, facePos.y + this.planeView.distanceTouch );

                                        place = this.grid.GetPlacePattem(next.listBlock);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.4);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    timer = 0;

                                        startPos = this.planeView.faceMousePos.$clone();
                                        correctPos = listBlockLocalPos[0].$clone();
                                        targetPos = new pc.Vec2( place.C - correctPos.x, place.R - correctPos.y );

                                        //            planeView.faceMousePos = targetPos;

                                        duration = 0.7;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    if ( timer < duration ) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.planeView.faceMousePos = new pc.Vec2().lerp( startPos, targetPos, timer / duration );
                                        $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 4;
                                        continue;
                                }
                                case 7: {
                                    this.planeView.faceMousePos = targetPos.$clone();

                                        //             Place pattem to ground

                                        this.planeView.PlacePattemGround();

                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.2);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    if (BB10_MainState.state === BB10_MainState.State.GameOver) {
                                            $step = 9;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 9: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(8.5);
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    //BB10_MainCanvasUI.Main.lostScript.TryAgainButton();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    $step = 12;
                                    continue;
                                }
                                case 12: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 13: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AutoPlay.StartAuto end.*/


        }
    });
    /*AutoPlay end.*/

    /*BB10_BrickCubeUnit start.*/
    Bridge.define("BB10_BrickCubeUnit", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            thisType: 0,
            viewer: null,
            render: null,
            ID: 0,
            row: 0,
            col: 0,
            indexRow: 0,
            indexCol: 0,
            scale: 0,
            myData: null,
            targetGray: 0,
            durationDrop: 0,
            dropScaleMin: null,
            ac: null,
            speed: 0,
            targetScale: 0,
            durationScaleEffect: 0,
            speedRotate: 0,
            shadowDropBlock: null
        },
        props: {
            GetSpriteID: {
                get: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#GetSpriteID#get", this ); }

                    return this.myData.ID;
                }
            },
            GetObj: {
                get: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#GetObj#get", this ); }

                    return this.gameObject;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#init", this ); }

                this.myData = new BB10_ColorData();
                this.dropScaleMin = new UnityEngine.Vector3();
                this.targetScale = 0.75;
                this.durationScaleEffect = 0.1;
            }
        },
        methods: {
            /*BB10_BrickCubeUnit.OnClickBlock start.*/
            OnClickBlock: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#OnClickBlock", this ); }


                if (UnityEngine.MonoBehaviour.op_Inequality(this.viewer, null)) {
                    this.viewer.ClickPattern();
                }
            },
            /*BB10_BrickCubeUnit.OnClickBlock end.*/

            /*BB10_BrickCubeUnit.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0) && !SingletonBase$1(GamePlayManager).Instance.isFinishGame) {
                    var mousePos = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition));

                    var hits = UnityEngine.Physics2D.OverlapPointAll(mousePos);

                    for (var i = 0; i < hits.length; i = (i + 1) | 0) {
                        if (UnityEngine.GameObject.op_Equality(hits[i].gameObject, this.gameObject)) {
                            this.OnClickBlock();
                            SingletonBase$1(GamePlayManager).Instance.UpClick();
                            SingletonBase$1(TutorialManager).Instance.Hand.SetActive(false);
                            SingletonBase$1(TutorialManager).Instance.TextTut.SetActive(false);
                            MainAudio.Main.PlaySound(TypeAudio.SoundClick);
                            break;
                        }
                    }
                }
            },
            /*BB10_BrickCubeUnit.Update end.*/

            /*BB10_BrickCubeUnit.SetSprite start.*/
            SetSprite: function (data) {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#SetSprite", this ); }

                this.myData = data.$clone();
                this.render.sprite = this.myData.sprite;
            },
            /*BB10_BrickCubeUnit.SetSprite end.*/

            /*BB10_BrickCubeUnit.SetSprite$1 start.*/
            SetSprite$1: function (sprite) {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#SetSprite$1", this ); }

                this.render.sprite = sprite;
            },
            /*BB10_BrickCubeUnit.SetSprite$1 end.*/

            /*BB10_BrickCubeUnit.SetLayer start.*/
            SetLayer: function (layer) {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#SetLayer", this ); }

                this.render.sortingOrder = layer;
            },
            /*BB10_BrickCubeUnit.SetLayer end.*/

            /*BB10_BrickCubeUnit.SetAlpha start.*/
            SetAlpha: function (alpha) {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#SetAlpha", this ); }

                this.render.color = new pc.Color( 1, 1, 1, alpha );
            },
            /*BB10_BrickCubeUnit.SetAlpha end.*/

            /*BB10_BrickCubeUnit.RotateUnit start.*/
            RotateUnit: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#RotateUnit", this ); }

                var newRow, newCol;
                newCol = this.transform.position.x - (((this.indexCol - this.indexRow) | 0)) * this.scale;
                newRow = this.transform.position.y - (((this.indexRow + this.indexCol) | 0)) * this.scale;

                var t = this.indexCol;
                this.indexCol = this.indexRow;
                this.indexRow = (-t) | 0;

                this.transform.position = new pc.Vec3( newCol, newRow, 0 );
            },
            /*BB10_BrickCubeUnit.RotateUnit end.*/

            /*BB10_BrickCubeUnit.MoveCenterPos start.*/
            MoveCenterPos: function (pos, center) {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#MoveCenterPos", this ); }

                this.transform.position = UnityEngine.Vector3.FromVector2(pos.$clone().add( new pc.Vec2( (this.indexCol - center.x) * this.scale, (this.indexRow - center.y) * this.scale ) ));
            },
            /*BB10_BrickCubeUnit.MoveCenterPos end.*/

            /*BB10_BrickCubeUnit.ApplyRotate start.*/
            ApplyRotate: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#ApplyRotate", this ); }

                if (this.thisType !== Types.O1) {
                    this.transform.position = new pc.Vec3( this.col, this.row, 0 );
                }

                //if (thisType != TypePattem.Type.O1)
                //{
                //    transform.position = new Vector3(col, row);
                //}
            },
            /*BB10_BrickCubeUnit.ApplyRotate end.*/

            /*BB10_BrickCubeUnit.DropDown start.*/
            DropDown: function (startPos, targetPos, durationMove) {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#DropDown", this ); }

                this.StartCoroutine$1(this.StartDrop(startPos, targetPos, durationMove));
            },
            /*BB10_BrickCubeUnit.DropDown end.*/

            /*BB10_BrickCubeUnit.StartDrop start.*/
            StartDrop: function (startPos, targetPos, durationMove) {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#StartDrop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    targetScale,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;
                                        targetScale = new pc.Vec3( 1, 1, 1 );

                                        // Scale         
                                        //while(timer < durationDrop)
                                        //{
                                        //    timer += Time.deltaTime;
                                        //    transform.localScale = Vector3.Lerp(transform.localScale, targetScale, timer / durationDrop);
                                        //    yield return null;
                                        //}

                                        //transform.localScale = targetScale;

                                        // Drop
                                        timer = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < durationMove ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;

                                        // Move
                                        this.transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( startPos, targetPos, timer / durationMove ));

                                        // Scale
                                        this.transform.localScale = new pc.Vec3().lerp( this.transform.localScale, targetScale, timer / durationMove );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.position = UnityEngine.Vector3.FromVector2(targetPos.$clone());

                                        this.transform.localScale = targetScale.$clone();

                                        //float timer = 0;
                                        //while(timer < durationMove)
                                        //{
                                        //    timer += Time.deltaTime;
                                        //    transform.position = Vector2.Lerp(startPos, targetPos, timer / durationMove);

                                        //    //transform.localScale = Vector3.Lerp(transform.localScale, dropScaleMin, timer / durationMove);

                                        //    yield return null;
                                        //}

                                        //transform.position = targetPos;


                                        //yield return null;

                                        //Vector3 targetScale = Vector3.one;                    

                                        //timer = 0;
                                        //while(timer < durationDrop)
                                        //{
                                        //    timer += Time.deltaTime;
                                        //    transform.localScale = Vector3.Lerp(transform.localScale, targetScale, timer / durationDrop);
                                        //    yield return null;
                                        //}

                                        //transform.localScale = targetScale;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_BrickCubeUnit.StartDrop end.*/

            /*BB10_BrickCubeUnit.Effect start.*/
            Effect: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#Effect", this ); }

                this.StartCoroutine$1(this.EffectHideBlock());
            },
            /*BB10_BrickCubeUnit.Effect end.*/

            /*BB10_BrickCubeUnit.WaitEffect start.*/
            WaitEffect: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#WaitEffect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    effectPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.02);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    effectPos = UnityEngine.Vector2.FromVector3(this.transform.position);
                                        BB10_MainObjControl.Instant.sG_Block_EffectCtr.EffectBreakBlock(effectPos, this.myData.ID);
                                        //MainObjControl.Instant.effectCtr.Effect(effectPos);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_BrickCubeUnit.WaitEffect end.*/

            /*BB10_BrickCubeUnit.EffectHideBlock start.*/
            EffectHideBlock: function () {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#EffectHideBlock", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.03);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    timer = 0;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( timer < this.durationScaleEffect ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    timer += UnityEngine.Time.deltaTime;
                                        t = this.ac.value(timer / this.durationScaleEffect);
                                        this.transform.localScale = new pc.Vec3().lerpUnclamped( new pc.Vec3( 1, 1, 1 ), pc.Vec3.ZERO.clone(), t );
                                        this.transform.Rotate$1(new pc.Vec3( 0, 0, 1 ), this.speedRotate * UnityEngine.Time.deltaTime);
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    BB10_MainObjControl.Instant.pattemCreater.SetCube(this);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_BrickCubeUnit.EffectHideBlock end.*/

            /*BB10_BrickCubeUnit.SetShadowDropBlock start.*/
            SetShadowDropBlock: function (enable) {
if ( TRACE ) { TRACE( "BB10_BrickCubeUnit#SetShadowDropBlock", this ); }

                this.shadowDropBlock.SetActive(enable);
            },
            /*BB10_BrickCubeUnit.SetShadowDropBlock end.*/


        },
        overloads: {
            "SetSprite(Sprite)": "SetSprite$1"
        }
    });
    /*BB10_BrickCubeUnit end.*/

    /*BB10_ColorControl start.*/
    Bridge.define("BB10_ColorControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            sprites: null,
            count: 0,
            spriteTexs: null,
            preloadSprite: null,
            preload: 0,
            width: 0,
            height: 0,
            pixelsPerUnit: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_ColorControl#init", this ); }

                this.count = 0;
            }
        },
        methods: {
            /*BB10_ColorControl.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BB10_ColorControl#Start", this ); }

                this.count = UnityEngine.Random.Range(0, this.sprites.length);
                this.SettupTexture();
            },
            /*BB10_ColorControl.Start end.*/

            /*BB10_ColorControl.GetSprite start.*/
            GetSprite: function (ID, t) {
if ( TRACE ) { TRACE( "BB10_ColorControl#GetSprite", this ); }

                var $t;
                var index = UnityEngine.Mathf.Min(Math.round(t * this.preload), ((this.preload - 1) | 0));
                //Debug.Log(index);
                return ($t = this.preloadSprite[ID])[index];
            },
            /*BB10_ColorControl.GetSprite end.*/

            /*BB10_ColorControl.CreateSprite start.*/
            CreateSprite: function (texture, t) {
if ( TRACE ) { TRACE( "BB10_ColorControl#CreateSprite", this ); }

                var tex = new UnityEngine.Texture2D.$ctor1(this.width, this.height);

                for (var i = 0; i < this.width; i = (i + 1) | 0) {
                    for (var j = 0; j < this.height; j = (j + 1) | 0) {
                        var texColor = texture.GetPixel(i, j);
                        var l = 0.2126 * texColor.r + 0.7152 * texColor.g + 0.0722 * texColor.b;
                        var c = new pc.Color( pc.math.lerp(texColor.r, l, t), pc.math.lerp(texColor.g, l, t), pc.math.lerp(texColor.b, l, t), texColor.a );
                        tex.SetPixel(i, j, c);
                    }
                }

                tex.Apply();

                var mySprite;
                mySprite = UnityEngine.Sprite.Create$1(tex, new UnityEngine.Rect.$ctor1(0.0, 0.0, tex.width, tex.height), new pc.Vec2( 0.5, 0.5 ), this.pixelsPerUnit);

                return mySprite;
            },
            /*BB10_ColorControl.CreateSprite end.*/

            /*BB10_ColorControl.SettupTexture start.*/
            SettupTexture: function () {
if ( TRACE ) { TRACE( "BB10_ColorControl#SettupTexture", this ); }

                var $t;
                // setting
                this.width = Bridge.Int.clip32(this.sprites[0].sprite.rect.width);
                this.height = Bridge.Int.clip32(this.sprites[0].sprite.rect.height);
                this.pixelsPerUnit = this.sprites[0].sprite.pixelsPerUnit;

                this.spriteTexs = System.Array.init(this.sprites.length, null, UnityEngine.Texture2D);
                this.preloadSprite = System.Array.init(this.sprites.length, null, System.Array.type(UnityEngine.Sprite));

                for (var i = 0; i < this.sprites.length; i = (i + 1) | 0) {
                    this.spriteTexs[i] = this.sprites[i].sprite.texture;
                }

                for (var i1 = 0; i1 < this.sprites.length; i1 = (i1 + 1) | 0) {
                    this.preloadSprite[i1] = System.Array.init(this.preload, null, UnityEngine.Sprite);

                    for (var j = 0; j < this.preload; j = (j + 1) | 0) {
                        ($t = this.preloadSprite[i1])[j] = this.CreateSprite(this.spriteTexs[i1], j / this.preload);
                    }

                }

            },
            /*BB10_ColorControl.SettupTexture end.*/

            /*BB10_ColorControl.GetRandSpriteData start.*/
            GetRandSpriteData: function () {
if ( TRACE ) { TRACE( "BB10_ColorControl#GetRandSpriteData", this ); }

                //        return sprites[0];
                var index = this.count % this.sprites.length;
                this.count = (this.count + 1) | 0;
                return this.sprites[index].$clone();
            },
            /*BB10_ColorControl.GetRandSpriteData end.*/

            /*BB10_ColorControl.GetNextSpriteData start.*/
            GetNextSpriteData: function () {
if ( TRACE ) { TRACE( "BB10_ColorControl#GetNextSpriteData", this ); }

                var index = this.count % this.sprites.length;
                return this.sprites[index].$clone();
            },
            /*BB10_ColorControl.GetNextSpriteData end.*/

            /*BB10_ColorControl.GrayscaleSprites start.*/
            GrayscaleSprites: function (t) {
if ( TRACE ) { TRACE( "BB10_ColorControl#GrayscaleSprites", this ); }

                var $t;
                var listGraySprite = System.Array.init(this.sprites.length, null, UnityEngine.Sprite);
                for (var i = 0; i < this.sprites.length; i = (i + 1) | 0) {
                    listGraySprite[i] = ($t = this.preloadSprite[i])[Math.round(t * this.preload)];
                }

                return listGraySprite;
            },
            /*BB10_ColorControl.GrayscaleSprites end.*/

            /*BB10_ColorControl.GetSpriteData start.*/
            GetSpriteData: function (index) {
if ( TRACE ) { TRACE( "BB10_ColorControl#GetSpriteData", this ); }

                //        index = 0;
                return this.sprites[index].$clone();
            },
            /*BB10_ColorControl.GetSpriteData end.*/


        }
    });
    /*BB10_ColorControl end.*/

    /*BB10_ColorData start.*/
    Bridge.define("BB10_ColorData", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "BB10_ColorData#getDefaultValue", this ); }
 return new BB10_ColorData(); }
            }
        },
        fields: {
            sprite: null,
            ID: 0
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "BB10_ColorData#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "BB10_ColorData#getHashCode", this ); }

                var h = Bridge.addHash([4259666308, this.sprite, this.ID]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "BB10_ColorData#equals", this ); }

                if (!Bridge.is(o, BB10_ColorData)) {
                    return false;
                }
                return Bridge.equals(this.sprite, o.sprite) && Bridge.equals(this.ID, o.ID);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "BB10_ColorData#$clone", this ); }

                var s = to || new BB10_ColorData();
                s.sprite = this.sprite;
                s.ID = this.ID;
                return s;
            }
        }
    });
    /*BB10_ColorData end.*/

    /*BB10_CupShaker start.*/
    Bridge.define("BB10_CupShaker", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rec: null,
            duration: 0,
            delay: 0,
            fromAngle: 0,
            toAngle: 0,
            timeShake: 0,
            durationMove: 0,
            distanceMove: 0,
            waitMoveDown: 0,
            scale: 0,
            running: false,
            normalPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_CupShaker#init", this ); }

                this.normalPos = new UnityEngine.Vector2();
                this.running = true;
            }
        },
        methods: {
            /*BB10_CupShaker.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BB10_CupShaker#Awake", this ); }

                this.normalPos = this.rec.anchoredPosition.$clone();
            },
            /*BB10_CupShaker.Awake end.*/

            /*BB10_CupShaker.StartShake start.*/
            StartShake: function () {
if ( TRACE ) { TRACE( "BB10_CupShaker#StartShake", this ); }

                this.transform.rotation = pc.Quat.IDENTITY.clone();
                this.rec.anchoredPosition = this.normalPos.$clone();
                this.rec.localScale = UnityEngine.Vector3.FromVector2(pc.Vec2.ONE.clone());

                this.StartCoroutine$1(this.StartEffect());
                this.StartCoroutine$1(this.StartMove());
            },
            /*BB10_CupShaker.StartShake end.*/

            /*BB10_CupShaker.StartMove start.*/
            StartMove: function () {
if ( TRACE ) { TRACE( "BB10_CupShaker#StartMove", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    targetPos,
                    targetScale,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // move cup up
                                        timer = 0;
                                        targetPos = new pc.Vec2( this.normalPos.x, this.normalPos.y + this.distanceMove );
                                        targetScale = pc.Vec2.ONE.clone().scale( this.scale );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this.durationMove ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.rec.anchoredPosition = new pc.Vec2().lerp( this.rec.anchoredPosition, targetPos, timer / this.durationMove );
                                        this.rec.localScale = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( UnityEngine.Vector2.FromVector3(this.rec.localScale), targetScale, timer / this.durationMove ));
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.waitMoveDown);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    // move cup down
                                        timer = 0;
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    if ( timer < this.durationMove ) {
                                            $step = 7;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 7: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.rec.anchoredPosition = new pc.Vec2().lerp( this.rec.anchoredPosition, this.normalPos, timer / this.durationMove );
                                        this.rec.localScale = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( UnityEngine.Vector2.FromVector3(this.rec.localScale), pc.Vec2.ONE.clone(), timer / this.durationMove ));
                                        $enumerator.current = null;
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    
                                        $step = 6;
                                        continue;
                                }
                                case 9: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_CupShaker.StartMove end.*/

            /*BB10_CupShaker.StartEffect start.*/
            StartEffect: function () {
if ( TRACE ) { TRACE( "BB10_CupShaker#StartEffect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    time,
                    timeCounter,
                    rotateTime,
                    zAngle,
                    currentAngle,
                    zAngle1,
                    currentAngle1,
                    zAngle2,
                    currentAngle2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    time = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( time < this.timeShake ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 18;
                                        continue;
                                }
                                case 2: {
                                    time = (time + 1) | 0;

                                        if (this.running) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 16;
                                        continue;
                                }
                                case 3: {
                                    timeCounter = 0;
                                        rotateTime = this.duration * 0.25;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    if ( timeCounter < rotateTime ) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    timeCounter += UnityEngine.Time.deltaTime;
                                        zAngle = pc.math.lerp(0, this.fromAngle, timeCounter / rotateTime);
                                        currentAngle = this.gameObject.transform.rotation.$clone();
                                        this.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( currentAngle.x, currentAngle.y, zAngle );
                                        $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 4;
                                        continue;
                                }
                                case 7: {
                                    timeCounter = 0;
                                        rotateTime = this.duration * 0.5;
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    if ( timeCounter < rotateTime ) {
                                            $step = 9;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 9: {
                                    timeCounter += UnityEngine.Time.deltaTime;
                                        zAngle1 = pc.math.lerp(this.fromAngle, this.toAngle, timeCounter / rotateTime);
                                        currentAngle1 = this.gameObject.transform.rotation.$clone();
                                        this.gameObject.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( currentAngle1.x, currentAngle1.y, zAngle1 );
                                        $enumerator.current = null;
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    
                                        $step = 8;
                                        continue;
                                }
                                case 11: {
                                    timeCounter = 0;
                                        rotateTime = this.duration * 0.25;
                                    $step = 12;
                                    continue;
                                }
                                case 12: {
                                    if ( timeCounter < rotateTime ) {
                                            $step = 13;
                                            continue;
                                        } 
                                        $step = 15;
                                        continue;
                                }
                                case 13: {
                                    timeCounter += UnityEngine.Time.deltaTime;
                                        zAngle2 = pc.math.lerp(this.toAngle, 0, timeCounter / rotateTime);
                                        currentAngle2 = this.gameObject.transform.rotation.$clone();
                                        this.gameObject.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( currentAngle2.x, currentAngle2.y, zAngle2 );
                                        $enumerator.current = null;
                                        $step = 14;
                                        return true;
                                }
                                case 14: {
                                    
                                        $step = 12;
                                        continue;
                                }
                                case 15: {
                                    $step = 16;
                                    continue;
                                }
                                case 16: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delay);
                                        $step = 17;
                                        return true;
                                }
                                case 17: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 18: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_CupShaker.StartEffect end.*/


        }
    });
    /*BB10_CupShaker end.*/

    /*BB10_FaderHandler start.*/
    Bridge.define("BB10_FaderHandler", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            image: null,
            durationFade: 0,
            durationFadeOut: 0,
            durationSwich: 0
        },
        methods: {
            /*BB10_FaderHandler.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "BB10_FaderHandler#Reset", this ); }

                //SetActive(false);
            },
            /*BB10_FaderHandler.Reset end.*/

            /*BB10_FaderHandler.Fade start.*/
            Fade: function (fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#Fade", this ); }

                this.StartCoroutine$1(this.StartFade(fn));
            },
            /*BB10_FaderHandler.Fade end.*/

            /*BB10_FaderHandler.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#SetActive", this ); }

                this.image.enabled = isActive;
            },
            /*BB10_FaderHandler.SetActive end.*/

            /*BB10_FaderHandler.StartFade start.*/
            StartFade: function (fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#StartFade", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    color,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.SetActive(true);
                                        timer = 0;
                                        color = this.image.color.$clone();

                                        this.image.color = new pc.Color( color.r, color.g, color.b, 0 );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer <= this.durationFade ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.unscaledDeltaTime;
                                        this.image.color = new pc.Color( color.r, color.g, color.b, pc.math.lerp(0, 1, timer / this.durationFade) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.image.color = new pc.Color( color.r, color.g, color.b, 1 );

                                        if (!Bridge.staticEquals(fn, null)) {
                                            fn();
                                        }


                                        timer = 0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( timer <= this.durationFade ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    timer += UnityEngine.Time.unscaledDeltaTime;
                                        this.image.color = new pc.Color( color.r, color.g, color.b, pc.math.lerp(1, 0, timer / this.durationFade) );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this.image.color = new pc.Color( color.r, color.g, color.b, 0 );

                                        this.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_FaderHandler.StartFade end.*/

            /*BB10_FaderHandler.SwichPanel start.*/
            SwichPanel: function (group1, group2, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#SwichPanel", this ); }

                this.StartCoroutine$1(this.StartSwichPanel(group1, group2, fn));
            },
            /*BB10_FaderHandler.SwichPanel end.*/

            /*BB10_FaderHandler.StartSwichPanel start.*/
            StartSwichPanel: function (group1, group2, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#StartSwichPanel", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;

                                        group1.alpha = 1;
                                        group2.alpha = 0;

                                        group2.gameObject.SetActive(true);

                                        if (!Bridge.staticEquals(fn, null)) {
                                            fn();
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer <= this.durationSwich ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        t = timer / this.durationSwich;

                                        group1.alpha = 1 - t;
                                        group2.alpha = t;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    group1.gameObject.SetActive(false);
                                        group1.alpha = 1;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_FaderHandler.StartSwichPanel end.*/

            /*BB10_FaderHandler.SwichPanelFix start.*/
            SwichPanelFix: function (group1, group2, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#SwichPanelFix", this ); }

                this.StartCoroutine$1(this.StartSwichPanelFix(group1, group2, fn));
            },
            /*BB10_FaderHandler.SwichPanelFix end.*/

            /*BB10_FaderHandler.StartSwichPanelFix start.*/
            StartSwichPanelFix: function (group1, group2, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#StartSwichPanelFix", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;

                                        group1.alpha = 1;
                                        group2.alpha = 0;

                                        group2.gameObject.SetActive(true);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer <= this.durationSwich ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        t = timer / this.durationSwich;

                                        group1.alpha = 1 - t;
                                        group2.alpha = t;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (!Bridge.staticEquals(fn, null)) {
                                            fn();
                                        }

                                        group1.gameObject.SetActive(false);
                                        group1.alpha = 1;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_FaderHandler.StartSwichPanelFix end.*/

            /*BB10_FaderHandler.FadeInPanel start.*/
            FadeInPanel: function (group, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#FadeInPanel", this ); }

                this.StartCoroutine$1(this.StartFadeInPanel(group, fn));
            },
            /*BB10_FaderHandler.FadeInPanel end.*/

            /*BB10_FaderHandler.StartFadeInPanel start.*/
            StartFadeInPanel: function (group, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#StartFadeInPanel", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;

                                        group.alpha = 0;

                                        group.gameObject.SetActive(true);

                                        if (!Bridge.staticEquals(fn, null)) {
                                            fn();
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer <= this.durationSwich ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        t = timer / this.durationSwich;
                                        group.alpha = t;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    group.alpha = 1;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_FaderHandler.StartFadeInPanel end.*/

            /*BB10_FaderHandler.FadeInPanelFix start.*/
            FadeInPanelFix: function (group, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#FadeInPanelFix", this ); }

                this.StartCoroutine$1(this.StartFadeInPanelFix(group, fn));
            },
            /*BB10_FaderHandler.FadeInPanelFix end.*/

            /*BB10_FaderHandler.StartFadeInPanelFix start.*/
            StartFadeInPanelFix: function (group, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#StartFadeInPanelFix", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;

                                        group.alpha = 0;

                                        group.gameObject.SetActive(true);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer <= this.durationSwich ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        t = timer / this.durationSwich;
                                        group.alpha = t;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (!Bridge.staticEquals(fn, null)) {
                                            fn();
                                        }

                                        group.alpha = 1;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_FaderHandler.StartFadeInPanelFix end.*/

            /*BB10_FaderHandler.FadeOutPanel start.*/
            FadeOutPanel: function (group, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#FadeOutPanel", this ); }

                this.StartCoroutine$1(this.StartFadeOutPanel(group, fn));
            },
            /*BB10_FaderHandler.FadeOutPanel end.*/

            /*BB10_FaderHandler.StartFadeOutPanel start.*/
            StartFadeOutPanel: function (group, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#StartFadeOutPanel", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;

                                        group.alpha = 1;

                                        if (!Bridge.staticEquals(fn, null)) {
                                            fn();
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer <= this.durationSwich ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        t = timer / this.durationSwich;
                                        group.alpha = 1 - t;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    group.gameObject.SetActive(false);
                                        group.alpha = 1;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_FaderHandler.StartFadeOutPanel end.*/

            /*BB10_FaderHandler.FadeOutPanelFix start.*/
            FadeOutPanelFix: function (group, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#FadeOutPanelFix", this ); }

                this.StartCoroutine$1(this.StartFadeOutPanelFix(group, fn));
            },
            /*BB10_FaderHandler.FadeOutPanelFix end.*/

            /*BB10_FaderHandler.StartFadeOutPanelFix start.*/
            StartFadeOutPanelFix: function (group, fn) {
if ( TRACE ) { TRACE( "BB10_FaderHandler#StartFadeOutPanelFix", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;

                                        group.alpha = 1;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer <= this.durationSwich ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        t = timer / this.durationSwich;
                                        group.alpha = 1 - t;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (!Bridge.staticEquals(fn, null)) {
                                            fn();
                                        }


                                        group.gameObject.SetActive(false);
                                        group.alpha = 1;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_FaderHandler.StartFadeOutPanelFix end.*/


        }
    });
    /*BB10_FaderHandler end.*/

    /*BB10_Grid start.*/
    Bridge.define("BB10_Grid", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            numberCol: 0,
            numberRow: 0,
            grid: null,
            gridPos: null,
            waitDelete: 0,
            waitPerUnit: 0,
            pattemCreater: null,
            durationGray: 0,
            nonGray: 0,
            halfGray: 0,
            fullGray: 0,
            waitUnit: 0,
            listFill: null,
            colorCtr: null,
            completeText: null,
            effectPositions: null,
            score: 0,
            cellPrefab: null,
            parentGrid: null,
            cellSize: 0,
            isCreateCell: false,
            saveData: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_Grid#init", this ); }

                this.effectPositions = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor();
                this.cellSize = 1.0;
            }
        },
        methods: {
            /*BB10_Grid.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BB10_Grid#Awake", this ); }

                this.Preload();
                if (this.isCreateCell) {
                    this.SpawnGridVisual();
                }
            },
            /*BB10_Grid.Awake end.*/

            /*BB10_Grid.SpawnGridVisual start.*/
            SpawnGridVisual: function () {
if ( TRACE ) { TRACE( "BB10_Grid#SpawnGridVisual", this ); }

                this.gridPos = System.Array.create(function (){
                    return new UnityEngine.Vector2();
                }, null, UnityEngine.Vector2, this.numberRow, this.numberCol);

                var startX = ((-this.numberCol) | 0) / 2.0 + 3.5;
                var startY = ((-this.numberRow) | 0) / 2.0 + 3.5;

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                        var pos = new pc.Vec2( startX + col, startY + row );

                        var cell = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.cellPrefab, UnityEngine.Vector3.FromVector2(pos), pc.Quat.IDENTITY.clone(), this.transform);

                        this.gridPos.set([row, col], pos.$clone());
                    }
                }
            },
            /*BB10_Grid.SpawnGridVisual end.*/

            /*BB10_Grid.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "BB10_Grid#Preload", this ); }

                this.grid = System.Array.create(null, null, BB10_BrickCubeUnit, this.numberRow, this.numberCol);

                this.listFill = new (System.Collections.Generic.List$1(BB10_Grid.fillData)).ctor();
                this.pattemCreater = BB10_MainObjControl.Instant.pattemCreater;
                this.colorCtr = BB10_MainObjControl.Instant.colorControl;
            },
            /*BB10_Grid.Preload end.*/

            /*BB10_Grid.GrayScaleMap start.*/
            GrayScaleMap: function (isGrayIn) {
if ( TRACE ) { TRACE( "BB10_Grid#GrayScaleMap", this ); }

                this.StartCoroutine$1(this.StartGrayScale(isGrayIn));
            },
            /*BB10_Grid.GrayScaleMap end.*/

            /*BB10_Grid.GrayBlock start.*/
            GrayBlock: function (unit, targetGray, isGrayIn) {
if ( TRACE ) { TRACE( "BB10_Grid#GrayBlock", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    sprite,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this.durationGray ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        if (isGrayIn) {
                                            sprite = this.colorCtr.GetSprite(unit.GetSpriteID, timer * targetGray / this.durationGray);
                                        } else {
                                            sprite = this.colorCtr.GetSprite(unit.GetSpriteID, targetGray * (UnityEngine.Mathf.Max(1 - timer / this.durationGray, 0)));
                                        }

                                        unit.SetSprite$1(sprite);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (!isGrayIn) {
                                            unit.SetSprite(this.colorCtr.GetSpriteData(unit.GetSpriteID));
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Grid.GrayBlock end.*/

            /*BB10_Grid.GetRandGray start.*/
            GetRandGray: function () {
if ( TRACE ) { TRACE( "BB10_Grid#GetRandGray", this ); }

                var rand = UnityEngine.Random.value;
                if (rand > 0.24) {
                    return this.fullGray;
                } else if (rand > 0.1) {
                    return this.halfGray;
                }

                return this.nonGray;
            },
            /*BB10_Grid.GetRandGray end.*/

            /*BB10_Grid.StartGrayScale start.*/
            StartGrayScale: function (isGrayIn) {
if ( TRACE ) { TRACE( "BB10_Grid#StartGrayScale", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    vecs,
                    i,
                    rand,
                    randGray,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    vecs = new (System.Collections.Generic.List$1(Vec2)).ctor();
                                        for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                                            for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                                                vecs.add(new Vec2.$ctor1(row, col));
                                            }
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( vecs.Count > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 10;
                                        continue;
                                }
                                case 2: {
                                    i = 0;
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ( i < 3 ) {
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 9;
                                    continue;
                                }
                                case 4: {
                                    rand = UnityEngine.Random.Range(0, vecs.Count);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([vecs.getItem(rand).R, vecs.getItem(rand).C]), null)) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    if (isGrayIn) {
                                            randGray = this.GetRandGray();
                                            this.grid.get([vecs.getItem(rand).R, vecs.getItem(rand).C]).targetGray = randGray;
                                            this.StartCoroutine$1(this.GrayBlock(this.grid.get([vecs.getItem(rand).R, vecs.getItem(rand).C]), randGray, isGrayIn));
                                        } else {
                                            this.StartCoroutine$1(this.GrayBlock(this.grid.get([vecs.getItem(rand).R, vecs.getItem(rand).C]), this.grid.get([vecs.getItem(rand).R, vecs.getItem(rand).C]).targetGray, isGrayIn));
                                        }


                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.waitUnit);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    vecs.removeAt(rand);

                                        if (vecs.Count === 0) {
                                            $step = 9;
                                            continue;
                                        }
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    i = (i + 1) | 0;
                                    $step = 3;
                                    continue;
                                }
                                case 9: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 10: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Grid.StartGrayScale end.*/

            /*BB10_Grid.InvalidPlacePattem start.*/
            InvalidPlacePattem: function (listUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#InvalidPlacePattem", this ); }

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                        if (!this.InvalidPoint(listUnit, row, col)) {
                            return false;
                        }
                    }
                }

                return true;
            },
            /*BB10_Grid.InvalidPlacePattem end.*/

            /*BB10_Grid.ValidPlaceMoreThanOne start.*/
            ValidPlaceMoreThanOne: function (listUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#ValidPlaceMoreThanOne", this ); }

                var time = 0;
                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                        if (!this.InvalidPoint(listUnit, row, col)) {
                            time = (time + 1) | 0;

                            if (time >= 2) {
                                return true;
                            }
                        }
                    }
                }

                return false;
            },
            /*BB10_Grid.ValidPlaceMoreThanOne end.*/

            /*BB10_Grid.PosValidPattem start.*/
            PosValidPattem: function (listUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#PosValidPattem", this ); }

                var time = 0;
                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                        if (!this.InvalidPoint(listUnit, row, col)) {
                            return new pc.Vec2( col, row );
                        }
                    }
                }

                return pc.Vec2.ZERO.clone();
            },
            /*BB10_Grid.PosValidPattem end.*/

            /*BB10_Grid.InvalidPoint start.*/
            InvalidPoint: function (listUnit, row, col) {
if ( TRACE ) { TRACE( "BB10_Grid#InvalidPoint", this ); }

                var mainRow = listUnit.getItem(0).indexRow;
                var mainCol = listUnit.getItem(0).indexCol;

                for (var i = 0; i < listUnit.Count; i = (i + 1) | 0) {
                    var unitRow = (row - (((mainRow - listUnit.getItem(i).indexRow) | 0))) | 0;
                    var unitCol = (col - (((mainCol - listUnit.getItem(i).indexCol) | 0))) | 0;

                    if (unitRow < 0 || unitRow >= this.numberRow || unitCol < 0 || unitCol >= this.numberCol) {
                        return true;
                    }

                    if (this.grid == null) {
                        return true;
                    }

                    if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([unitRow, unitCol]), null)) {

                        return true;
                    }
                }

                return false;
            },
            /*BB10_Grid.InvalidPoint end.*/

            /*BB10_Grid.CheckGridFillTest start.*/
            CheckGridFillTest: function (listUnit, mainRow, mainCol, data) {
if ( TRACE ) { TRACE( "BB10_Grid#CheckGridFillTest", this ); }

                for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                    if (this.isColFullTest(col, listUnit, mainRow, mainCol)) {
                        //                Debug.Log("run 11");
                        this.ChangeSpriteFillCol(col, data);
                    }
                }

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    if (this.isRowFullTest(row, listUnit, mainRow, mainCol)) {
                        //                Debug.Log("run 11");
                        this.ChangeSpriteFillRow(row, data);
                    }
                }
            },
            /*BB10_Grid.CheckGridFillTest end.*/

            /*BB10_Grid.IsRowFillWith start.*/
            IsRowFillWith: function (r, c) {
if ( TRACE ) { TRACE( "BB10_Grid#IsRowFillWith", this ); }

                for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.grid.get([r, col]), null) && col !== c) {
                        return false;
                    }
                }
                return true;
            },
            /*BB10_Grid.IsRowFillWith end.*/

            /*BB10_Grid.IsColFillWith start.*/
            IsColFillWith: function (r, c) {
if ( TRACE ) { TRACE( "BB10_Grid#IsColFillWith", this ); }

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.grid.get([row, c]), null) && row !== r) {
                        return false;
                    }
                }
                return true;
            },
            /*BB10_Grid.IsColFillWith end.*/

            /*BB10_Grid.isRowFullTest start.*/
            isRowFullTest: function (row, listUnit, mainRow, mainCol) {
if ( TRACE ) { TRACE( "BB10_Grid#isRowFullTest", this ); }

                for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.grid.get([row, col]), null) && !this.IsInListTest(row, col, listUnit, mainRow, mainCol)) {
                        return false;
                    }
                }
                return true;
            },
            /*BB10_Grid.isRowFullTest end.*/

            /*BB10_Grid.isColFullTest start.*/
            isColFullTest: function (col, listUnit, mainRow, mainCol) {
if ( TRACE ) { TRACE( "BB10_Grid#isColFullTest", this ); }

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.grid.get([row, col]), null) && !this.IsInListTest(row, col, listUnit, mainRow, mainCol)) {
                        return false;
                    }
                }
                return true;
            },
            /*BB10_Grid.isColFullTest end.*/

            /*BB10_Grid.ChangeSpriteFillCol start.*/
            ChangeSpriteFillCol: function (col, data) {
if ( TRACE ) { TRACE( "BB10_Grid#ChangeSpriteFillCol", this ); }

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([row, col]), null)) {
                        // save data before change
                        var fillData = new BB10_Grid.fillData();
                        fillData.cubeRow = this.grid.get([row, col]).row;
                        fillData.cubeCol = this.grid.get([row, col]).col;
                        fillData.data = this.grid.get([row, col]).myData.$clone();
                        this.listFill.add(fillData.$clone());

                        this.grid.get([row, col]).SetSprite(data);
                    }
                }
            },
            /*BB10_Grid.ChangeSpriteFillCol end.*/

            /*BB10_Grid.ChangeSpriteFillRow start.*/
            ChangeSpriteFillRow: function (row, data) {
if ( TRACE ) { TRACE( "BB10_Grid#ChangeSpriteFillRow", this ); }

                for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([row, col]), null)) {
                        // save data before change
                        var fillData = new BB10_Grid.fillData();
                        fillData.cubeRow = this.grid.get([row, col]).row;
                        fillData.cubeCol = this.grid.get([row, col]).col;
                        fillData.data = this.grid.get([row, col]).myData.$clone();
                        this.listFill.add(fillData.$clone());

                        this.grid.get([row, col]).SetSprite(data);
                    }
                }
            },
            /*BB10_Grid.ChangeSpriteFillRow end.*/

            /*BB10_Grid.CheckGrid start.*/
            CheckGrid: function (newCubeUnit, isCollect) {
if ( TRACE ) { TRACE( "BB10_Grid#CheckGrid", this ); }

                var numberLine = 0;
                var listFillPos = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor();
                var listColDeleted = new (System.Collections.Generic.List$1(System.Int32)).ctor();

                for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                    if (this.isColFull(col, newCubeUnit)) {
                        var pos = this.GetCenterCol(col);
                        this.effectPositions.add(pos.$clone());
                        SingletonBase$1(GamePlayManager).Instance.UpScore(10);
                        for (var i = 0; i < newCubeUnit.Count; i = (i + 1) | 0) {
                            if (newCubeUnit.getItem(i).col === col) {
                                listFillPos.add(UnityEngine.Vector2.FromVector3(newCubeUnit.getItem(i).transform.position.$clone()));
                            }
                        }

                        numberLine = (numberLine + 1) | 0;
                        this.deleteCol(col, newCubeUnit);
                        listColDeleted.add(col);

                    }
                }

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    if (this.isRowFull(row, newCubeUnit, listColDeleted)) {
                        var pos1 = this.GetCenterRow(row);
                        this.effectPositions.add(pos1.$clone());
                        SingletonBase$1(GamePlayManager).Instance.UpScore(10);
                        for (var i1 = 0; i1 < newCubeUnit.Count; i1 = (i1 + 1) | 0) {
                            if (newCubeUnit.getItem(i1).row === row) {
                                listFillPos.add(UnityEngine.Vector2.FromVector3(newCubeUnit.getItem(i1).transform.position.$clone()));
                            }
                        }

                        numberLine = (numberLine + 1) | 0;
                        this.deleteRow(row, newCubeUnit);
                    }
                }

                var scoreFillLine = GameDefine.GetScore(numberLine);
                if (this.effectPositions.Count > 0) {
                    var centerScreen = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ViewportToWorldPoint(UnityEngine.Vector3.FromVector2(new pc.Vec2( 0.5, 0.5 ))));
                    this.CreateEffect(UnityEngine.Vector3.FromVector2(centerScreen));
                    this.effectPositions.clear();
                }
                if (scoreFillLine > 0) {
                    isCollect.v = true;
                    this.ClearListFill();

                    var score = 0;
                    // BB10_MainObjControl.Instant.scoreCtr.ShowText(CenterOfList(listFillPos), scoreFillLine);
                }


                BB10_MainCanvasUI.Main.inGameScript.SetNewScore(scoreFillLine, newCubeUnit.Count);
            },
            /*BB10_Grid.CheckGrid end.*/

            /*BB10_Grid.CreateEffect start.*/
            CreateEffect: function (pos) {
if ( TRACE ) { TRACE( "BB10_Grid#CreateEffect", this ); }

                MainAudio.Main.PlaySound(TypeAudio.CollectBlock);
                var effect = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.completeText, pos, pc.Quat.IDENTITY.clone());
                effect.GetComponent(CompleteBlocks).PlayRandom();
            },
            /*BB10_Grid.CreateEffect end.*/

            /*BB10_Grid.GetCenterRow start.*/
            GetCenterRow: function (row) {
if ( TRACE ) { TRACE( "BB10_Grid#GetCenterRow", this ); }

                return new pc.Vec2( (((this.numberCol - 1) | 0)) * 0.5, 0 );
            },
            /*BB10_Grid.GetCenterRow end.*/

            /*BB10_Grid.GetCenterCol start.*/
            GetCenterCol: function (col) {
if ( TRACE ) { TRACE( "BB10_Grid#GetCenterCol", this ); }

                return new pc.Vec2( col, 0 );
            },
            /*BB10_Grid.GetCenterCol end.*/

            /*BB10_Grid.isRowFull start.*/
            isRowFull: function (row, newCubeUnit, listColDeleted) {
if ( TRACE ) { TRACE( "BB10_Grid#isRowFull", this ); }

                if (listColDeleted.Count === 0) {
                    for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Equality(this.grid.get([row, col]), null) && !this.IsInList(row, col, newCubeUnit)) {
                            return false;
                        }
                    }
                } else {
                    for (var col1 = 0; col1 < this.numberCol; col1 = (col1 + 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Equality(this.grid.get([row, col1]), null) && !this.IsInList(row, col1, newCubeUnit) && !this.IsInListInt(col1, listColDeleted)) {
                            return false;
                        }
                    }
                }
                return true;
            },
            /*BB10_Grid.isRowFull end.*/

            /*BB10_Grid.isColFull start.*/
            isColFull: function (col, newCubeUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#isColFull", this ); }

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.grid.get([row, col]), null) && !this.IsInList(row, col, newCubeUnit)) {
                        return false;
                    }
                }
                return true;
            },
            /*BB10_Grid.isColFull end.*/

            /*BB10_Grid.CheckBundle start.*/
            CheckBundle: function () {
if ( TRACE ) { TRACE( "BB10_Grid#CheckBundle", this ); }

                //if(Application.identifier != "")
                //{
                //    Application.Quit();
                //}
            },
            /*BB10_Grid.CheckBundle end.*/

            /*BB10_Grid.CenterOfList start.*/
            CenterOfList: function (listFill) {
if ( TRACE ) { TRACE( "BB10_Grid#CenterOfList", this ); }

                var total = pc.Vec2.ZERO.clone();
                for (var i = 0; i < listFill.Count; i = (i + 1) | 0) {
                    total = total.$clone().add( listFill.getItem(i).$clone() );
                }

                return total.$clone().scale( 1.0 / ( listFill.Count ) );
            },
            /*BB10_Grid.CenterOfList end.*/

            /*BB10_Grid.TurnOffAllFillLine start.*/
            TurnOffAllFillLine: function () {
if ( TRACE ) { TRACE( "BB10_Grid#TurnOffAllFillLine", this ); }

                if (this.listFill.Count > 0) {
                    //            Debug.Log("run");
                    for (var i = 0; i < this.listFill.Count; i = (i + 1) | 0) {
                        this.grid.get([this.listFill.getItem(i).$clone().cubeRow, this.listFill.getItem(i).$clone().cubeCol]).SetSprite(this.listFill.getItem(i).$clone().data);
                    }

                    this.ClearListFill();
                }
            },
            /*BB10_Grid.TurnOffAllFillLine end.*/

            /*BB10_Grid.ClearListFill start.*/
            ClearListFill: function () {
if ( TRACE ) { TRACE( "BB10_Grid#ClearListFill", this ); }

                this.listFill.clear();
            },
            /*BB10_Grid.ClearListFill end.*/

            /*BB10_Grid.IsInListTest start.*/
            IsInListTest: function (r, c, listUnit, mainRow, mainCol) {
if ( TRACE ) { TRACE( "BB10_Grid#IsInListTest", this ); }

                for (var i = 0; i < listUnit.Count; i = (i + 1) | 0) {
                    if (((mainRow - (((listUnit.getItem(0).indexRow - listUnit.getItem(i).indexRow) | 0))) | 0) === r && ((mainCol - (((listUnit.getItem(0).indexCol - listUnit.getItem(i).indexCol) | 0))) | 0) === c) {
                        return true;
                    }
                }

                return false;
            },
            /*BB10_Grid.IsInListTest end.*/

            /*BB10_Grid.deleteRow start.*/
            deleteRow: function (row, newCubeUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#deleteRow", this ); }

                var oneInRow = this.GetOneInRow(row, newCubeUnit);
                var thisCol = oneInRow.col;

                this.DeleteOneRow(row, thisCol, newCubeUnit, true);
                this.DeleteOneRow(row, thisCol, newCubeUnit, false);
            },
            /*BB10_Grid.deleteRow end.*/

            /*BB10_Grid.DeleteOneRow start.*/
            DeleteOneRow: function (row, thisCol, newCubeUnit, isUp) {
if ( TRACE ) { TRACE( "BB10_Grid#DeleteOneRow", this ); }

                var newList = new (System.Collections.Generic.List$1(BB10_Grid.unitWait)).ctor();
                if (isUp) {
                    for (var col = thisCol; col < this.numberCol; col = (col + 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([row, col]), null)) {
                            var newUnit = new BB10_Grid.unitWait();
                            newUnit.unit = this.grid.get([row, col]);
                            if (!this.IsInList(row, col, newCubeUnit)) {
                                newUnit.isWait = true;
                            } else {
                                newUnit.isWait = false;
                            }

                            newList.add(newUnit.$clone());

                            this.grid.set([row, col], null);
                        }
                    }
                } else {
                    for (var col1 = (thisCol - 1) | 0; col1 >= 0; col1 = (col1 - 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([row, col1]), null)) {
                            var newUnit1 = new BB10_Grid.unitWait();
                            newUnit1.unit = this.grid.get([row, col1]);
                            if (!this.IsInList(row, col1, newCubeUnit)) {
                                newUnit1.isWait = true;
                            } else {
                                newUnit1.isWait = false;
                            }

                            newList.add(newUnit1.$clone());

                            this.grid.set([row, col1], null);
                        }
                    }
                }

                this.StartCoroutine$1(this.DeleteList(newList));
            },
            /*BB10_Grid.DeleteOneRow end.*/

            /*BB10_Grid.DeleteSomeBlock start.*/
            DeleteSomeBlock: function () {
if ( TRACE ) { TRACE( "BB10_Grid#DeleteSomeBlock", this ); }

                var listBlock = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
                for (var r = 0; r < this.numberRow; r = (r + 1) | 0) {
                    for (var c = 0; c < this.numberCol; c = (c + 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([r, c]), null)) {
                            listBlock.add(this.grid.get([r, c]));
                        }
                    }
                }

                var numberDelete = Math.floor(listBlock.Count * 0.7);
                var listBlockDelete = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();

                for (var i = 0; i < numberDelete; i = (i + 1) | 0) {
                    if (listBlock.Count > 0) {
                        var rand = UnityEngine.Random.Range(0, listBlock.Count);
                        listBlockDelete.add(listBlock.getItem(rand));
                        this.grid.set([listBlock.getItem(rand).row, listBlock.getItem(rand).col], null);
                        listBlock.removeAt(rand);
                    }
                }

                this.StartCoroutine$1(this.DeleteListEffect(listBlockDelete));
            },
            /*BB10_Grid.DeleteSomeBlock end.*/

            /*BB10_Grid.DeleteListEffect start.*/
            DeleteListEffect: function (listBlockDelete) {
if ( TRACE ) { TRACE( "BB10_Grid#DeleteListEffect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < listBlockDelete.Count ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    listBlockDelete.getItem(i).Effect();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.03);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Grid.DeleteListEffect end.*/

            /*BB10_Grid.deleteCol start.*/
            deleteCol: function (col, newCubeUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#deleteCol", this ); }

                var oneInCol = this.GetOneInCol(col, newCubeUnit);
                var thisRow = oneInCol.row;
                this.DeleteOneCol(col, thisRow, newCubeUnit, true);
                this.DeleteOneCol(col, thisRow, newCubeUnit, false);
            },
            /*BB10_Grid.deleteCol end.*/

            /*BB10_Grid.DeleteOneCol start.*/
            DeleteOneCol: function (col, thisRow, newCubeUnit, isUp) {
if ( TRACE ) { TRACE( "BB10_Grid#DeleteOneCol", this ); }

                var newList = new (System.Collections.Generic.List$1(BB10_Grid.unitWait)).ctor();
                if (isUp) {
                    for (var row = thisRow; row < this.numberRow; row = (row + 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([row, col]), null)) {
                            var newUnit = new BB10_Grid.unitWait();
                            newUnit.unit = this.grid.get([row, col]);
                            if (!this.IsInList(row, col, newCubeUnit)) {
                                newUnit.isWait = true;
                            } else {
                                newUnit.isWait = false;
                            }

                            newList.add(newUnit.$clone());

                            this.grid.set([row, col], null);
                        }
                    }
                } else {
                    for (var row1 = (thisRow - 1) | 0; row1 >= 0; row1 = (row1 - 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([row1, col]), null)) {
                            var newUnit1 = new BB10_Grid.unitWait();
                            newUnit1.unit = this.grid.get([row1, col]);
                            if (!this.IsInList(row1, col, newCubeUnit)) {
                                newUnit1.isWait = true;
                            } else {
                                newUnit1.isWait = false;
                            }

                            newList.add(newUnit1.$clone());

                            this.grid.set([row1, col], null);
                        }
                    }
                }

                this.StartCoroutine$1(this.DeleteList(newList));
            },
            /*BB10_Grid.DeleteOneCol end.*/

            /*BB10_Grid.DeleteList start.*/
            DeleteList: function (newCubeUnitWait) {
if ( TRACE ) { TRACE( "BB10_Grid#DeleteList", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.waitDelete);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    i = 0;
                                        $step = 2;
                                        continue;
                                }
                                case 2: {
                                    if ( i < newCubeUnitWait.Count ) {
                                            $step = 3;
                                            continue;
                                        }
                                    $step = 8;
                                    continue;
                                }
                                case 3: {
                                    if (newCubeUnitWait.getItem(i).$clone().isWait) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.waitPerUnit);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    newCubeUnitWait.getItem(i).$clone().unit.Effect();
                                        //            grid[newCubeUnitWait[i].unit.row, newCubeUnitWait[i].unit.col] = null;
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    i = (i + 1) | 0;
                                    $step = 2;
                                    continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Grid.DeleteList end.*/

            /*BB10_Grid.IsInList start.*/
            IsInList: function (r, c, newCubeUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#IsInList", this ); }

                for (var i = 0; i < newCubeUnit.Count; i = (i + 1) | 0) {
                    if (newCubeUnit.getItem(i).row === r && newCubeUnit.getItem(i).col === c) {
                        return true;
                    }
                }

                return false;
            },
            /*BB10_Grid.IsInList end.*/

            /*BB10_Grid.IsInListInt start.*/
            IsInListInt: function (value, listInt) {
if ( TRACE ) { TRACE( "BB10_Grid#IsInListInt", this ); }

                for (var i = 0; i < listInt.Count; i = (i + 1) | 0) {
                    if (value === listInt.getItem(i)) {
                        return true;
                    }
                }
                return false;
            },
            /*BB10_Grid.IsInListInt end.*/

            /*BB10_Grid.GetOneInCol start.*/
            GetOneInCol: function (c, newCubeUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#GetOneInCol", this ); }

                for (var i = 0; i < newCubeUnit.Count; i = (i + 1) | 0) {
                    if (newCubeUnit.getItem(i).col === c) {
                        return newCubeUnit.getItem(i);
                    }
                }
                return newCubeUnit.getItem(0);
            },
            /*BB10_Grid.GetOneInCol end.*/

            /*BB10_Grid.GetOneInRow start.*/
            GetOneInRow: function (r, newCubeUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#GetOneInRow", this ); }

                for (var i = 0; i < newCubeUnit.Count; i = (i + 1) | 0) {
                    if (newCubeUnit.getItem(i).row === r) {
                        return newCubeUnit.getItem(i);
                    }
                }
                return newCubeUnit.getItem(0);
            },
            /*BB10_Grid.GetOneInRow end.*/

            /*BB10_Grid.insideBorder start.*/
            insideBorder: function (cubeUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#insideBorder", this ); }

                if (cubeUnit.col < 0) {
                    return 1;
                } else if (cubeUnit.col >= this.numberCol) {
                    return 2;
                } else if (cubeUnit.row < 0) {
                    return 3;
                }

                return 0;
            },
            /*BB10_Grid.insideBorder end.*/

            /*BB10_Grid.SetAllBlock start.*/
            SetAllBlock: function () {
if ( TRACE ) { TRACE( "BB10_Grid#SetAllBlock", this ); }

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([row, col]), null)) {
                            this.pattemCreater.SetCube(this.grid.get([row, col]));
                            this.grid.set([row, col], null);
                        }
                    }
                }

                //SonatScript.PlayTimes++;
                //SonatScript.LogStartLevel();
            },
            /*BB10_Grid.SetAllBlock end.*/

            /*BB10_Grid.GetPlacePattem start.*/
            GetPlacePattem: function (listUnit) {
if ( TRACE ) { TRACE( "BB10_Grid#GetPlacePattem", this ); }

                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                        if (!this.InvalidPoint(listUnit, row, col)) {
                            return new Vec2.$ctor1(row, col);
                        }
                    }
                }

                return new Vec2.$ctor1(0, 0);
            },
            /*BB10_Grid.GetPlacePattem end.*/

            /*BB10_Grid.SaveData start.*/
            SaveData: function () {
if ( TRACE ) { TRACE( "BB10_Grid#SaveData", this ); }

                var $t, $t1, $t2, $t3, $t4;
                var save = "";
                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.grid.get([row, col]), null)) {
                            //save += "1";
                            save = (save || "") + (((this.grid.get([row, col]).myData.ID + 1) | 0));
                        } else {
                            save = (save || "") + "0";
                        }
                        save = (save || "") + "-";
                    }
                }

                save = (save || "") + "+";
                //save += BB10_MainCanvasUI.Main.inGameScript.scoreInt.ToString();

                if (($t = BB10_MainObjControl.Instant.nextViewerCtr.listView)[0].state === BB10_NextViewer.State.Null && ($t1 = BB10_MainObjControl.Instant.nextViewerCtr.listView)[1].state === BB10_NextViewer.State.Null && ($t2 = BB10_MainObjControl.Instant.nextViewerCtr.listView)[2].state === BB10_NextViewer.State.Null) {
                    UnityEngine.Debug.Log$1("dont save");
                    return;
                }

                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    save = (save || "") + "+";
                    if (($t3 = BB10_MainObjControl.Instant.nextViewerCtr.listView)[i].state !== BB10_NextViewer.State.Null) {
                        save = (save || "") + ((System.Enum.toString(Types, ($t4 = BB10_MainObjControl.Instant.nextViewerCtr.listView)[i].myType)) || "");
                        //save += "-";
                        //save += MainObjControl.Instant.nextViewerCtr.listView[i].rotateTime.ToString();
                    }
                }

                //Debug.Log(save);
                BB10_Settings.SetContinueData(save);
                BB10_Settings.SetContinue(1);
            },
            /*BB10_Grid.SaveData end.*/

            /*BB10_Grid.LoadDataSave start.*/
            LoadDataSave: function () {
if ( TRACE ) { TRACE( "BB10_Grid#LoadDataSave", this ); }

                var $t;
                var save = this.ConvertListToString(this.saveData.gridData);
                if (System.String.isNullOrEmpty(save)) {
                    return;
                }
                var wordsTotal = System.String.split(save, [43].map(function (i) {{ return String.fromCharCode(i); }}));

                var words = System.String.split(wordsTotal[0], [45].map(function (i) {{ return String.fromCharCode(i); }}));
                var count = 0;
                for (var row = 0; row < this.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.numberCol; col = (col + 1) | 0) {
                        var number = System.Int32.parse(words[count]);

                        if (number === 0) {
                            UnityEngine.Debug.Log$1("null");
                        } else if (number > 0) {
                            var block = this.pattemCreater.CreateABlock(new pc.Vec2( col, row ), 1);

                            var spriteIndex = this.saveData.gridSprites.getItem(count);

                            if (spriteIndex >= 0) {
                                block.SetSprite(this.colorCtr.GetSpriteData(spriteIndex));
                            }

                            block.row = row;
                            block.col = col;

                            block.indexRow = row;
                            block.indexCol = col;

                            this.grid.set([row, col], block);
                        }

                        count = (count + 1) | 0;
                    }

                }

                BB10_MainCanvasUI.Main.inGameScript.SetScoreContinue(System.Int32.parse(wordsTotal[1]));

                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    if (!Bridge.referenceEquals(wordsTotal[((2 + i) | 0)], "")) {
                        var wordsPattem = System.String.split(wordsTotal[((2 + i) | 0)], [45].map(function (i) {{ return String.fromCharCode(i); }}));
                        var next = ($t = BB10_MainObjControl.Instant.nextViewerCtr.listView)[i];
                        var type = this.pattemCreater.GetTypeFromString(wordsPattem[0]);
                        var listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, UnityEngine.Vector2.FromVector3(next.transform.position), next.scale);
                        next.state = BB10_NextViewer.State.Show;
                        next.SetPattem(listUnit, type, System.Int32.parse(wordsPattem[1]), false);
                        next.SetPattem(listUnit, type, UnityEngine.Random.Range(0, 4), false);
                        next.FixCenterPos();
                        next.CheckImpossible();
                    }
                }
            },
            /*BB10_Grid.LoadDataSave end.*/

            /*BB10_Grid.ConvertListToString start.*/
            ConvertListToString: function (data) {
if ( TRACE ) { TRACE( "BB10_Grid#ConvertListToString", this ); }

                var result = "";

                for (var i = 0; i < data.Count; i = (i + 1) | 0) {
                    result = (result || "") + (((Bridge.toString(data.getItem(i)) || "") + "-") || "");
                }

                result = (result || "") + "+0+++"; // giữ format cũ của bạn

                return result;
            },
            /*BB10_Grid.ConvertListToString end.*/


        }
    });
    /*BB10_Grid end.*/

    /*BB10_Grid+fillData start.*/
    Bridge.define("BB10_Grid.fillData", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "BB10_Grid.fillData#getDefaultValue", this ); }
 return new BB10_Grid.fillData(); }
            }
        },
        fields: {
            cubeRow: 0,
            cubeCol: 0,
            data: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_Grid.fillData#init", this ); }

                this.data = new BB10_ColorData();
            },
            ctor: function () {
if ( TRACE ) { TRACE( "BB10_Grid.fillData#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "BB10_Grid.fillData#getHashCode", this ); }

                var h = Bridge.addHash([3454061226, this.cubeRow, this.cubeCol, this.data]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "BB10_Grid.fillData#equals", this ); }

                if (!Bridge.is(o, BB10_Grid.fillData)) {
                    return false;
                }
                return Bridge.equals(this.cubeRow, o.cubeRow) && Bridge.equals(this.cubeCol, o.cubeCol) && Bridge.equals(this.data, o.data);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "BB10_Grid.fillData#$clone", this ); }

                var s = to || new BB10_Grid.fillData();
                s.cubeRow = this.cubeRow;
                s.cubeCol = this.cubeCol;
                s.data = this.data.$clone();
                return s;
            }
        }
    });
    /*BB10_Grid+fillData end.*/

    /*BB10_Grid+unitWait start.*/
    Bridge.define("BB10_Grid.unitWait", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "BB10_Grid.unitWait#getDefaultValue", this ); }
 return new BB10_Grid.unitWait(); }
            }
        },
        fields: {
            unit: null,
            isWait: false
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "BB10_Grid.unitWait#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "BB10_Grid.unitWait#getHashCode", this ); }

                var h = Bridge.addHash([3906129868, this.unit, this.isWait]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "BB10_Grid.unitWait#equals", this ); }

                if (!Bridge.is(o, BB10_Grid.unitWait)) {
                    return false;
                }
                return Bridge.equals(this.unit, o.unit) && Bridge.equals(this.isWait, o.isWait);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "BB10_Grid.unitWait#$clone", this ); }

                var s = to || new BB10_Grid.unitWait();
                s.unit = this.unit;
                s.isWait = this.isWait;
                return s;
            }
        }
    });
    /*BB10_Grid+unitWait end.*/

    /*BB10_GroundView start.*/
    Bridge.define("BB10_GroundView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            groundPrefab: null,
            listBlockRender: null,
            vecDown: null,
            ID: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_GroundView#init", this ); }

                this.vecDown = new UnityEngine.Vector3();
                this.ID = -1;
            }
        },
        methods: {
            /*BB10_GroundView.GetCube start.*/
            GetCube: function () {
if ( TRACE ) { TRACE( "BB10_GroundView#GetCube", this ); }

                var render = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.groundPrefab).GetComponent(UnityEngine.SpriteRenderer);

                render.sortingOrder = -1; // ghost nằm dưới block thật

                var c = render.color.$clone();
                c.a = 0.35; // làm block mờ
                render.color = c.$clone();

                this.listBlockRender.add(render);
                return render;
            },
            /*BB10_GroundView.GetCube end.*/

            /*BB10_GroundView.HideAllBlock start.*/
            HideAllBlock: function () {
if ( TRACE ) { TRACE( "BB10_GroundView#HideAllBlock", this ); }

                for (var i = 0; i < this.listBlockRender.Count; i = (i + 1) | 0) {
                    this.listBlockRender.getItem(i).transform.position = this.vecDown.$clone();
                }
            },
            /*BB10_GroundView.HideAllBlock end.*/

            /*BB10_GroundView.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BB10_GroundView#Start", this ); }

                this.listBlockRender = new (System.Collections.Generic.List$1(UnityEngine.SpriteRenderer)).ctor();
                this.vecDown = UnityEngine.Vector3.FromVector2(new pc.Vec2( 0, -100 ));
            },
            /*BB10_GroundView.Start end.*/

            /*BB10_GroundView.SetPattem start.*/
            SetPattem: function (listUnit, row, col, data) {
if ( TRACE ) { TRACE( "BB10_GroundView#SetPattem", this ); }

                this.HideAllBlock();

                for (var i = 0; i < listUnit.Count; i = (i + 1) | 0) {
                    if (this.listBlockRender.Count <= i) {
                        this.GetCube();
                    }

                    var posRow = (row - (((listUnit.getItem(0).indexRow - listUnit.getItem(i).indexRow) | 0))) | 0;
                    var posCol = (col - (((listUnit.getItem(0).indexCol - listUnit.getItem(i).indexCol) | 0))) | 0;
                    this.listBlockRender.getItem(i).transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2( posCol, posRow ));

                    if (this.ID !== data.ID) {
                        this.listBlockRender.getItem(i).sprite = data.sprite;

                        var c = this.listBlockRender.getItem(i).color.$clone();
                        c.a = 0.35; // giữ block mờ
                        this.listBlockRender.getItem(i).color = c.$clone();
                    }

                }

                this.ID = data.ID;
            },
            /*BB10_GroundView.SetPattem end.*/


        }
    });
    /*BB10_GroundView end.*/

    /*BB10_HomeController start.*/
    Bridge.define("BB10_HomeController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            group: null,
            isFading: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#init", this ); }

                this.isFading = false;
            }
        },
        methods: {
            /*BB10_HomeController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#OnEnable", this ); }

                this.CheckSound();
            },
            /*BB10_HomeController.OnEnable end.*/

            /*BB10_HomeController.ShowHome start.*/
            ShowHome: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#ShowHome", this ); }

                if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Normal && BB10_MainState.state !== BB10_MainState.State.Waiting && !this.isFading) {
                    this.isFading = true;
                    BB10_MainCanvasUI.Main.StopWaitShowAdBreask();
                    BB10_MainCanvasUI.Main.faderScript.FadeInPanelFix(this.group, Bridge.fn.cacheBind(this, this.OffFading));
                    BB10_MainState.SetState(BB10_MainState.State.Home);
                }
            },
            /*BB10_HomeController.ShowHome end.*/

            /*BB10_HomeController.HideHome start.*/
            HideHome: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#HideHome", this ); }

                if (!this.isFading) {
                    BB10_MainState.SetState(BB10_MainState.State.Ingame);
                    this.isFading = true;
                    BB10_MainCanvasUI.Main.faderScript.FadeOutPanelFix(this.group, Bridge.fn.cacheBind(this, this.OffFading));
                    BB10_MainCanvasUI.Main.StartGame();
                }
            },
            /*BB10_HomeController.HideHome end.*/

            /*BB10_HomeController.Restart start.*/
            Restart: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#Restart", this ); }

                if (!BB10_MainObjControl.Instant.screenCtr.gridMoving) {
                    BB10_MainCanvasUI.Main.faderScript.Fade(Bridge.fn.cacheBind(this, this.MidleTryAgain));
                }
            },
            /*BB10_HomeController.Restart end.*/

            /*BB10_HomeController.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#Reset", this ); }

                this.SetActive(false);
                //CheckSound();
            },
            /*BB10_HomeController.Reset end.*/

            /*BB10_HomeController.PreLoad start.*/
            PreLoad: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#PreLoad", this ); }

                this.CheckSound();
            },
            /*BB10_HomeController.PreLoad end.*/

            /*BB10_HomeController.CheckSound start.*/
            CheckSound: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#CheckSound", this ); }

                if (BB10_Settings.GetSound === 0) {
                    //soundIgame.sprite = soundOff;
                    MainAudio.Main.MuteSound(true);
                } else {
                    //soundIgame.sprite = soundOn;
                    MainAudio.Main.MuteSound(false);
                }
            },
            /*BB10_HomeController.CheckSound end.*/

            /*BB10_HomeController.SoundClick start.*/
            SoundClick: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#SoundClick", this ); }

                if (BB10_Settings.GetSound === 1) {
                    //soundIgame.sprite = soundOff;
                    BB10_Settings.SetSound(0);
                    MainAudio.Main.MuteSound(true);
                } else {
                    //soundIgame.sprite = soundOn;
                    BB10_Settings.SetSound(1);
                    MainAudio.Main.MuteSound(false);
                }
            },
            /*BB10_HomeController.SoundClick end.*/

            /*BB10_HomeController.OffFading start.*/
            OffFading: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#OffFading", this ); }

                this.isFading = false;
            },
            /*BB10_HomeController.OffFading end.*/

            /*BB10_HomeController.MidleTryAgain start.*/
            MidleTryAgain: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#MidleTryAgain", this ); }

                BB10_Settings.SetContinue(0);

                BB10_MainObjControl.Instant.grid.SetAllBlock();
                BB10_MainObjControl.Instant.nextViewerCtr.SetAllBlock();
                BB10_MainObjControl.Instant.planeViewCrt.SetAllBlock();
                BB10_MainObjControl.Instant.helpCtr.HideAllBlock();
                BB10_MainCanvasUI.Main.faderScript.FadeInPanel(BB10_MainCanvasUI.Main.inGameScript.group, null);
                BB10_MainCanvasUI.Main.Reset(true);
            },
            /*BB10_HomeController.MidleTryAgain end.*/

            /*BB10_HomeController.PrivacyPolicy start.*/
            PrivacyPolicy: function () {
if ( TRACE ) { TRACE( "BB10_HomeController#PrivacyPolicy", this ); }
 },
            /*BB10_HomeController.PrivacyPolicy end.*/

            /*BB10_HomeController.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "BB10_HomeController#SetActive", this ); }

                this.gameObject.SetActive(isActive);
            },
            /*BB10_HomeController.SetActive end.*/


        }
    });
    /*BB10_HomeController end.*/

    /*BB10_InGameScript start.*/
    Bridge.define("BB10_InGameScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rec: null,
            scoreTxt: null,
            bestTxt: null,
            scoreInt: 0,
            bestInt: 0,
            group: null,
            scoreRuning: false,
            scoreUp: null,
            blur_1: null
        },
        methods: {
            /*BB10_InGameScript.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#Awake", this ); }

                //blur_1.SetActive(false);
                //skip.SetActive(false);
            },
            /*BB10_InGameScript.Awake end.*/

            /*BB10_InGameScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#Start", this ); }

                //scoreTxt.GetComponent<MeshRenderer>().sortingOrder = -7;
                //bestTxt.GetComponent<MeshRenderer>().sortingOrder = -7;
            },
            /*BB10_InGameScript.Start end.*/

            /*BB10_InGameScript.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#Preload", this ); }

                this.SetActive(false);
            },
            /*BB10_InGameScript.Preload end.*/

            /*BB10_InGameScript.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#Reset", this ); }

                this.ResetScore();
                this.bestInt = BB10_Settings.GetBest;
                //bestTxt.text = bestInt.ToString();         
            },
            /*BB10_InGameScript.Reset end.*/

            /*BB10_InGameScript.ScoreUpAnim start.*/
            ScoreUpAnim: function (fromScore) {
if ( TRACE ) { TRACE( "BB10_InGameScript#ScoreUpAnim", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    unitPlus,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.scoreRuning = true;
                                        unitPlus = UnityEngine.Mathf.Max(1, ((Bridge.Int.div((((this.scoreInt - fromScore) | 0)), 12)) | 0));
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if ( fromScore < this.scoreInt ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.08);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    fromScore = UnityEngine.Mathf.Min(this.scoreInt, ((fromScore + unitPlus) | 0));
                                        //scoreTxt.text = fromScore.ToString();

                                        if (fromScore > this.bestInt) {
                                            this.bestInt = fromScore;
                                            this.bestTxt.text = Bridge.toString(this.bestInt);
                                        }


                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.scoreTxt.text = Bridge.toString(this.scoreInt);

                                        if (this.bestInt > BB10_Settings.GetBest) {
                                            BB10_Settings.SetBest(this.bestInt);
                                        }

                                        this.scoreRuning = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_InGameScript.ScoreUpAnim end.*/

            /*BB10_InGameScript.ResetScore start.*/
            ResetScore: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#ResetScore", this ); }

                if (this.scoreRuning) {
                    this.StopCoroutine(this.scoreUp);
                }

                this.scoreInt = 0;
                this.scoreTxt.text = Bridge.toString(this.scoreInt);
            },
            /*BB10_InGameScript.ResetScore end.*/

            /*BB10_InGameScript.ResetBest start.*/
            ResetBest: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#ResetBest", this ); }

                this.bestInt = 0;
                BB10_Settings.SetBest(0);
            },
            /*BB10_InGameScript.ResetBest end.*/

            /*BB10_InGameScript.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "BB10_InGameScript#SetActive", this ); }

                this.gameObject.SetActive(isActive);
            },
            /*BB10_InGameScript.SetActive end.*/

            /*BB10_InGameScript.Pause start.*/
            Pause: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#Pause", this ); }

                //BB10_MainCanvasUI.Main.pauseScript.PauseGame();
            },
            /*BB10_InGameScript.Pause end.*/

            /*BB10_InGameScript.SetNewScore start.*/
            SetNewScore: function (scoreFillLine, numberUnit) {
if ( TRACE ) { TRACE( "BB10_InGameScript#SetNewScore", this ); }

                var value = (scoreFillLine + numberUnit) | 0;

                this.UpScoreTxt(value);
            },
            /*BB10_InGameScript.SetNewScore end.*/

            /*BB10_InGameScript.UpScoreTxt start.*/
            UpScoreTxt: function (value) {
if ( TRACE ) { TRACE( "BB10_InGameScript#UpScoreTxt", this ); }

                if (value > 0) {
                    var from = this.scoreInt;
                    this.scoreInt = (this.scoreInt + value) | 0;
                    if (this.scoreRuning) {
                        this.StopCoroutine(this.scoreUp);
                        this.scoreTxt.text = Bridge.toString(this.scoreInt);
                    }

                    this.scoreUp = this.ScoreUpAnim(from);
                    this.StartCoroutine$1(this.scoreUp);
                }
            },
            /*BB10_InGameScript.UpScoreTxt end.*/

            /*BB10_InGameScript.SetScoreContinue start.*/
            SetScoreContinue: function (value) {
if ( TRACE ) { TRACE( "BB10_InGameScript#SetScoreContinue", this ); }

                this.scoreInt = value;
                this.scoreTxt.text = Bridge.toString(this.scoreInt);
            },
            /*BB10_InGameScript.SetScoreContinue end.*/

            /*BB10_InGameScript.StartTut start.*/
            StartTut: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#StartTut", this ); }

                UnityEngine.Debug.Log$1("blur_1");
                //blur_1.SetActive(true);
                //skip.SetActive(true);
            },
            /*BB10_InGameScript.StartTut end.*/

            /*BB10_InGameScript.FinishTut start.*/
            FinishTut: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#FinishTut", this ); }

                this.blur_1.SetActive(false);
                //skip.SetActive(false);
            },
            /*BB10_InGameScript.FinishTut end.*/

            /*BB10_InGameScript.SkipTut start.*/
            SkipTut: function () {
if ( TRACE ) { TRACE( "BB10_InGameScript#SkipTut", this ); }

                //StopAllCoroutines();

                BB10_MainObjControl.Instant.tutorial.SkipTut();
                //BB10_MainCanvasUI.mainCanvas.pauseScript.Restart();

                this.blur_1.SetActive(false);
                //skip.SetActive(false);
            },
            /*BB10_InGameScript.SkipTut end.*/


        }
    });
    /*BB10_InGameScript end.*/

    /*BB10_LostScript start.*/
    Bridge.define("BB10_LostScript", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                SCORE_TOTAL_KEY: null,
                POST_SCORE_NUMBER_KEY: null,
                fistGameOver: false
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#init", this ); }

                    this.SCORE_TOTAL_KEY = "SCORE_TOTAL_KEY";
                    this.POST_SCORE_NUMBER_KEY = "POST_SCORE_NUMBER_KEY";
                    this.fistGameOver = true;
                }
            }
        },
        fields: {
            scoreText: null,
            bestText: null,
            group: null,
            isAuto: false,
            cupShaker: null,
            score: 0,
            AnimSoundLoop: null,
            scoreCounting: false,
            listViewAdsPannel: null,
            checkToRate: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#init", this ); }

                this.checkToRate = false;
            }
        },
        methods: {
            /*BB10_LostScript.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#Preload", this ); }

                this.group.gameObject.SetActive(false);
                //starEffecrt.SetActive(false);

            },
            /*BB10_LostScript.Preload end.*/

            /*BB10_LostScript.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#Reset", this ); }

                this.scoreText.text = "0";
                this.group.gameObject.SetActive(false);
                //newObj.SetActive(false);
                //starFullImage.SetActive(false);
            },
            /*BB10_LostScript.Reset end.*/

            /*BB10_LostScript.WaitSwitch start.*/
            WaitSwitch: function (isGray) {
if ( TRACE ) { TRACE( "BB10_LostScript#WaitSwitch", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (isGray) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 4;
                                            continue;
                                        }
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.3);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    BB10_MainObjControl.Instant.grid.GrayScaleMap(true);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(3.2);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 6;
                                    continue;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.3);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    //if((PlayerPrefs.GetInt(BB10_PopupRate.rate_inpopup_key, 0) == 0)
                                        //    && (BB10_Settings.GetTimePlay % FireBaseController2.number_play_to_popup_rate_value) == 0)
                                        //{
                                        //    //BB10_MainCanvasUI.mainCanvas.popupRate.ShowPopup();
                                        //    checkToRate = true;
                                        //}
                                        //else
                                        //{
                                        //    checkToRate = false;
                                        //    BB10_AdsManager.bricks_adm.ShowIntertitial("GameOver");
                                        //}

                                        //StartCoroutine(EffectControl.FadeOutSprite(MainCanvas.Main.inGameScript.bgGrid, 1));
                                        BB10_MainCanvasUI.Main.faderScript.SwichPanelFix(BB10_MainCanvasUI.Main.inGameScript.group, this.group, Bridge.fn.cacheBind(this, this.AnimScore));
                                        // Kernel.Resolve<AdsManager>().ShowMrecBanner();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_LostScript.WaitSwitch end.*/

            /*BB10_LostScript.AnimScore start.*/
            AnimScore: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#AnimScore", this ); }

                this.StartCoroutine$1(this.ScoreUpAnim());
                //AnimSoundLoop = AnimSound();
                //StartCoroutine(AnimSoundLoop);
            },
            /*BB10_LostScript.AnimScore end.*/

            /*BB10_LostScript.GameOver start.*/
            GameOver: function (isGray) {
if ( TRACE ) { TRACE( "BB10_LostScript#GameOver", this ); }

                // hide banner ads
                //AdManager.HideBanner();

                BB10_Settings.SetContinue(0);

                if (!BB10_LostScript.fistGameOver) {
                    //listAds.ResetPositionListViewAds();
                } else {
                    BB10_LostScript.fistGameOver = false;
                }

                this.group.gameObject.SetActive(true);

                this.group.alpha = 0;
                if (isGray) {
                    //MainAudio.Main.PlaySound(TypeAudio.SoundLose);
                }

                if (this.isAuto) {
                    BB10_MainState.SetState(BB10_MainState.State.GameOver);
                } else {
                    BB10_MainState.SetState(BB10_MainState.State.Waiting);
                }

                // log duration play game
                //score = BB10_MainCanvasUI.Main.inGameScript.scoreInt;

                var postNumber = UnityEngine.PlayerPrefs.GetInt(BB10_LostScript.POST_SCORE_NUMBER_KEY, 0);
                postNumber = (postNumber + 1) | 0;

                var scoreTotal = System.Int64.parse(UnityEngine.PlayerPrefs.GetString(BB10_LostScript.SCORE_TOTAL_KEY, "0"));
                scoreTotal = scoreTotal.add(System.Int64(this.score));

                var score_avg = System.Int64.clip32(scoreTotal.div(System.Int64(postNumber)));

                //Kernel.Resolve<FireBaseController>().LogEvent(
                //Firebase.Analytics.FirebaseAnalytics.EventPostScore,
                //Firebase.Analytics.FirebaseAnalytics.ParameterScore, score);

                //Kernel.Resolve<FireBaseController>().LogEvent(Firebase.Analytics.FirebaseAnalytics.EventPostScore, "score_avg", score_avg);

                //PlayerPrefs.SetInt(POST_SCORE_NUMBER_KEY, postNumber);
                //PlayerPrefs.SetString(SCORE_TOTAL_KEY, scoreTotal.ToString());

                //SetBestScore();
                //StartCoroutine(WaitSwitch(isGray));
            },
            /*BB10_LostScript.GameOver end.*/

            /*BB10_LostScript.ScoreUpAnim start.*/
            ScoreUpAnim: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#ScoreUpAnim", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    current,
                    unit,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    current = 0;
                                        unit = UnityEngine.Mathf.Max(1, ((Bridge.Int.div(this.score, 25)) | 0));
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( current < this.score ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.04);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    current = UnityEngine.Mathf.Min(this.score, ((current + unit) | 0));
                                        this.SetScore(current);
                                        //MainAudio.Main.PlaySound(TypeAudio.SoundScore);

                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.SetScore(this.score);

                                        //StopCoroutine(AnimSoundLoop);
                                        //scoreCounting = false;
                                        //MainAudio.Main.StopySound(TypeAudio.SoundScore);

                                        //starEffecrt.SetActive(true);
                                        this.StartCoroutine$1(this.WaitState());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_LostScript.ScoreUpAnim end.*/

            /*BB10_LostScript.WaitState start.*/
            WaitState: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#WaitState", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    //starFullImage.SetActive(true);

                                        //MainAudio.Main.PlaySound(TypeAudio.SoundBoom);
                                        //yield return new WaitForSeconds(0.1f);
                                        this.cupShaker.StartShake();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    BB10_MainState.state = BB10_MainState.State.GameOver;

                                        //if((PlayerPrefs.GetInt(BB10_PopupRate.rate_inpopup_key, 0) == 0)
                                        //    && (BB10_Settings.GetTimePlay % FireBaseController2.number_play_to_popup_rate_value) == 0)
                                        //{
                                        //    BB10_MainCanvasUI.mainCanvas.popupRate.ShowPopup();
                                        //}

                                        // For test
                                        //Bricks_MainCanvasUI.mainCanvas.popupRate.ShowPopup();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_LostScript.WaitState end.*/

            /*BB10_LostScript.TryAgainButton start.*/
            TryAgainButton: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#TryAgainButton", this ); }

                if (BB10_MainState.state === BB10_MainState.State.GameOver) {
                    UnityEngine.Debug.Log$1("newSession: " + System.Boolean.toString(BB10_MainCanvasUI.newSession));
                    //if(MainCanvas.newSession && (!FireBaseController.display_intertitial_before_value &&
                    //    (FireBaseController.display_intertitial_after_value
                    //    || ((SG_AdManager.ads.intertitialType == SG_AdManager.TypeAd.FAN) 
                    //    && FanAdsManager.isIntertitialLoaded))))
                    //{
                    //    MainCanvas.newSession = false;

                    //    SG_AdManager.ads.ShowIntertitial();
                    //}

                    //starEffecrt.SetActive(false);

                    // Kernel.Resolve<AdsManager>().HideMrecBanner();

                    if (UnityEngine.PlayerPrefs.GetInt(BB10_PopupRate.rate_inpopup_key, 0) === 0) {
                        //BB10_MainCanvasUI.mainCanvas.popupRate.ShowPopup();
                        this.checkToRate = true;
                        this.NextGame();
                    } else {
                        this.checkToRate = false;
                    }
                }
            },
            /*BB10_LostScript.TryAgainButton end.*/

            /*BB10_LostScript.NextGame start.*/
            NextGame: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#NextGame", this ); }

                BB10_MainCanvasUI.Main.faderScript.Fade(Bridge.fn.cacheBind(this, this.MidleTryAgain));
                DG.Tweening.DOVirtual.DelayedCall(1.0, Bridge.fn.bind(this, function () {
                    if (this.checkToRate) {
                        //BB10_MainCanvasUI.mainCanvas.popupRate.ShowPopup();
                        this.checkToRate = false;
                    }
                }));
            },
            /*BB10_LostScript.NextGame end.*/

            /*BB10_LostScript.MidleTryAgain start.*/
            MidleTryAgain: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#MidleTryAgain", this ); }

                //MainAudio.Main.StopySound(TypeAudio.SoundScore);
                //if (scoreCounting)
                //{
                //    StopCoroutine(AnimSoundLoop);
                //    scoreCounting = false;
                //}
                BB10_MainObjControl.Instant.grid.SetAllBlock();
                BB10_MainObjControl.Instant.nextViewerCtr.SetAllBlock();
                BB10_MainObjControl.Instant.planeViewCrt.SetAllBlock();
                BB10_MainObjControl.Instant.helpCtr.HideAllBlock();

                BB10_MainCanvasUI.Main.faderScript.FadeInPanel(BB10_MainCanvasUI.Main.inGameScript.group, null);
                BB10_MainCanvasUI.Main.Reset(true);

                BB10_MainState.SetState(BB10_MainState.State.Ingame);
            },
            /*BB10_LostScript.MidleTryAgain end.*/

            /*BB10_LostScript.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "BB10_LostScript#SetActive", this ); }

                this.group.gameObject.SetActive(isActive);
            },
            /*BB10_LostScript.SetActive end.*/

            /*BB10_LostScript.SetScore start.*/
            SetScore: function (score) {
if ( TRACE ) { TRACE( "BB10_LostScript#SetScore", this ); }

                this.scoreText.text = Bridge.toString(score);
            },
            /*BB10_LostScript.SetScore end.*/

            /*BB10_LostScript.SetBestScore start.*/
            SetBestScore: function () {
if ( TRACE ) { TRACE( "BB10_LostScript#SetBestScore", this ); }

                //int lastBest = BB10_MainCanvasUI.Main.inGameScript.bestInt;
                //int best = Mathf.Max(lastBest, score);
                //if (lastBest < score)
                //{
                //    //newObj.SetActive(true);
                //}

                //BB10_Settings.SetBest(best);
                //bestText.text = best.ToString();
            },
            /*BB10_LostScript.SetBestScore end.*/


        }
    });
    /*BB10_LostScript end.*/

    /*BB10_MainCanvasUI start.*/
    Bridge.define("BB10_MainCanvasUI", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                mainCanvas: null,
                timePlay: 0,
                newSession: false,
                firstLoaded: false
            },
            props: {
                Main: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#Main#get", this ); }

                        return BB10_MainCanvasUI.mainCanvas;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#init", this ); }

                    this.timePlay = 0;
                    this.newSession = false;
                    this.firstLoaded = false;
                }
            }
        },
        fields: {
            inGameScript: null,
            faderScript: null,
            OnDropPiece: null,
            blur: null,
            OnNeedStopAdBreak: null
        },
        methods: {
            /*BB10_MainCanvasUI.CheckPreloadTutorial start.*/
            CheckPreloadTutorial: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#CheckPreloadTutorial", this ); }

                //if (BB10_Settings.GetTimePlay < 1)
                //{
                //    BB10_MainState.typePlay = BB10_MainState.TypePlay.Tutorial;
                //}
                //else
                //{
                BB10_MainState.typePlay = BB10_MainState.TypePlay.Normal;
                //}
            },
            /*BB10_MainCanvasUI.CheckPreloadTutorial end.*/

            /*BB10_MainCanvasUI.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#Start", this ); }

                this.StartCoroutine$1(this.InitGame());
            },
            /*BB10_MainCanvasUI.Start end.*/

            /*BB10_MainCanvasUI.InitGame start.*/
            InitGame: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#InitGame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( UnityEngine.MonoBehaviour.op_Equality(BB10_MainObjControl.Instant, null) ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    this.Preload();
                                        this.Reset(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_MainCanvasUI.InitGame end.*/

            /*BB10_MainCanvasUI.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#Awake", this ); }

                BB10_MainCanvasUI.mainCanvas = this;
            },
            /*BB10_MainCanvasUI.Awake end.*/

            /*BB10_MainCanvasUI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (this.blur.activeSelf) {
                        this.blur.SetActive(false);
                    }
                }
            },
            /*BB10_MainCanvasUI.Update end.*/

            /*BB10_MainCanvasUI.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#Preload", this ); }

                //Debug.LogError("Preload");
                this.CheckPreloadTutorial();
                BB10_MainObjControl.Instant.Preload();
                switch (BB10_MainState.typePlay) {
                    case BB10_MainState.TypePlay.Tutorial: 
                        //SonatScript.PlayTimes++;
                        //SonatScript.LogStartLevel();
                        BB10_MainObjControl.Instant.tutorial.Show();
                        break;
                    case BB10_MainState.TypePlay.Normal: 
                        break;
                }
                //inGameScript.Preload();
                //lostScript.Preload();
                //pauseScript.PreLoad();
                //popupRate.Preload();
                //UnityAdsManager.Instant.InitializeUnityAds(6);

                //#if UNITY_EDITOR
                //        LeanTween.delayedCall(5f, () =>
                //        {
                //            if(UnityEngine.Advertisements.Advertisement.IsReady("banner"))
                //            {
                //                SG_AdManager.ads.bannerType = SG_AdManager.TypeAd.UNITY;
                //                UnityEngine.Advertisements.Advertisement.Banner.Show("banner");
                //            }
                //        });
                //#endif
            },
            /*BB10_MainCanvasUI.Preload end.*/

            /*BB10_MainCanvasUI.Reset start.*/
            Reset: function (isIngame) {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#Reset", this ); }

                if (isIngame) {
                    BB10_MainState.state = BB10_MainState.State.Ingame;
                    this.faderScript.FadeInPanel(this.inGameScript.group, null);
                } else {
                    this.inGameScript.group.alpha = 1;
                    this.inGameScript.SetActive(true);
                }

                // Reset count create pattern
                Bricks_PattemTableObj.count = 0;

                // Canvas

                this.inGameScript.Reset();
                //lostScript.Reset();
                //pauseScript.Reset();
                this.faderScript.Reset();
                //lostScript.Reset();
                //rewardVideoScript.Reset();

                //popupRate.Preload();

                // other

                this.EffectGrid();
                this.Load();

                //CheckToReloadBanner();

                //        if (firstLoaded)
                //        {
                //            LeanTween.delayedCall(5f, () =>
                //            {
                //                BB10_AdsManager.bricks_adm.RequestAds();
                //                //SG_AdManager.ads.ShowBanner();
                //            });
                //        }

                BB10_MainCanvasUI.firstLoaded = true;
                BB10_MainCanvasUI.newSession = true;
                //Debug.Log("newSession: " + newSession);

                this.StartGame();
            },
            /*BB10_MainCanvasUI.Reset end.*/

            /*BB10_MainCanvasUI.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#StartGame", this ); }

                this.EnsureAdBreakManager();

            },
            /*BB10_MainCanvasUI.StartGame end.*/

            /*BB10_MainCanvasUI.EnsureAdBreakManager start.*/
            EnsureAdBreakManager: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#EnsureAdBreakManager", this ); }
 },
            /*BB10_MainCanvasUI.EnsureAdBreakManager end.*/

            /*BB10_MainCanvasUI.CheckToReloadBanner start.*/
            CheckToReloadBanner: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#CheckToReloadBanner", this ); }

                //if (!SG_AdManager.IsBannerLoaded())
                //{
                //    StartCoroutine(ShowBannerDelay());
                //}
            },
            /*BB10_MainCanvasUI.CheckToReloadBanner end.*/

            /*BB10_MainCanvasUI.ShowBannerDelay start.*/
            ShowBannerDelay: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#ShowBannerDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(3.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    //SG_AdManager.ShowBanner();

                                        //if (!SG_AdManager.IsInterstitialLoaded())
                                        //{
                                        //    SG_AdManager.RequestInterstitial();
                                        //}

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_MainCanvasUI.ShowBannerDelay end.*/

            /*BB10_MainCanvasUI.CheckBundle start.*/
            CheckBundle: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#CheckBundle", this ); }

                //if(Application.identifier != "")
                //{
                //    Application.Quit();
                //}
            },
            /*BB10_MainCanvasUI.CheckBundle end.*/

            /*BB10_MainCanvasUI.EffectGrid start.*/
            EffectGrid: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#EffectGrid", this ); }

                //MainAudio.Main.PlaySound(TypeAudio.StartGame);

                switch (BB10_MainState.typePlay) {
                    case BB10_MainState.TypePlay.Tutorial: 
                        BB10_MainObjControl.Instant.screenCtr.StartNoAnim();
                        break;
                    case BB10_MainState.TypePlay.Normal: 
                        if (BB10_Settings.GetContinue === 0) {
                            BB10_MainObjControl.Instant.screenCtr.StartAnim();
                            this.StartCoroutine$1(this.loadPattemDelay());
                        } else {
                            BB10_MainObjControl.Instant.screenCtr.StartNoAnim();
                            //BB10_MainObjControl.Instant.grid.LoadDataSave();
                        }
                        //MainObjControl.Instant.screenCtr.StartAnim();
                        break;
                }
            },
            /*BB10_MainCanvasUI.EffectGrid end.*/

            /*BB10_MainCanvasUI.loadPattemDelay start.*/
            loadPattemDelay: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#loadPattemDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.3);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    //BB10_MainObjControl.Instant.nextViewerCtr.GetNewPattems();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_MainCanvasUI.loadPattemDelay end.*/

            /*BB10_MainCanvasUI.Load start.*/
            Load: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#Load", this ); }

                var playNumbers = BB10_Settings.GetTimePlay;
                playNumbers = (playNumbers + 1) | 0;
                BB10_Settings.SetTimePlay(playNumbers);


                //new SonatLogLevelUp().SetExtraParameter(new[]
                //{
                //    new Sonat.LogParameter("game_play","Play Game " + BB10_Settings.GetTimePlay),
                //}).Post();



                if (BB10_Settings.GetTimePlay > 500) {
                }
                if (BB10_Settings.GetTimePlay > 300) {
                } else if (BB10_Settings.GetTimePlay > 200) {
                } else if (BB10_Settings.GetTimePlay > 100) {
                } else if (BB10_Settings.GetTimePlay > 50) {
                } else if (BB10_Settings.GetTimePlay > 20) {
                } else if (BB10_Settings.GetTimePlay > 10) {
                } else if (BB10_Settings.GetTimePlay > 5) {
                }

                // Log time play
                BB10_MainCanvasUI.timePlay = (BB10_MainCanvasUI.timePlay + 1) | 0;
                //new SonatLogLevelUp().SetExtraParameter(new[]
                //{
                //    new Sonat.LogParameter("game_replay","Replay Game " + timePlay),
                //}).Post();

                switch (BB10_MainState.typePlay) {
                    case BB10_MainState.TypePlay.Tutorial: 
                        break;
                    case BB10_MainState.TypePlay.Normal: 
                        //MainObjControl.Instant.nextViewerCtr.GetNewPattems();
                        break;
                }

            },
            /*BB10_MainCanvasUI.Load end.*/

            /*BB10_MainCanvasUI.FadeIn start.*/
            FadeIn: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#FadeIn", this ); }

                this.blur.SetActive(true);
                DG.Tweening.DOTweenModuleSprite.DOFade(this.blur.GetComponent(UnityEngine.SpriteRenderer), 0.75, 0.2);
            },
            /*BB10_MainCanvasUI.FadeIn end.*/

            /*BB10_MainCanvasUI.FadeOut start.*/
            FadeOut: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#FadeOut", this ); }

                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this.blur.GetComponent(UnityEngine.UI.Image), 0.0, 0.2), Bridge.fn.bind(this, function () {
                    this.blur.SetActive(false);
                }));
            },
            /*BB10_MainCanvasUI.FadeOut end.*/

            /*BB10_MainCanvasUI.StopWaitShowAdBreask start.*/
            StopWaitShowAdBreask: function () {
if ( TRACE ) { TRACE( "BB10_MainCanvasUI#StopWaitShowAdBreask", this ); }

                !Bridge.staticEquals(this.OnNeedStopAdBreak, null) ? this.OnNeedStopAdBreak() : null;
            },
            /*BB10_MainCanvasUI.StopWaitShowAdBreask end.*/


        }
    });
    /*BB10_MainCanvasUI end.*/

    /*BB10_MainObjControl start.*/
    Bridge.define("BB10_MainObjControl", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                main: null
            },
            props: {
                Instant: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_MainObjControl#Instant#get", this ); }

                        return BB10_MainObjControl.main;
                    }
                }
            }
        },
        fields: {
            colorControl: null,
            pattemCreater: null,
            nextViewerCtr: null,
            grid: null,
            planeViewCrt: null,
            groundView: null,
            sG_Block_EffectCtr: null,
            camScript: null,
            scoreCtr: null,
            helpCtr: null,
            screenCtr: null,
            tutorial: null,
            cam: null
        },
        methods: {
            /*BB10_MainObjControl.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "BB10_MainObjControl#Preload", this ); }

                this.grid.Preload();
                //nextViewerCtr.Preload();
                //effectCtr.Preload();
                this.tutorial.Preload();
                this.scoreCtr.Preload();
                this.sG_Block_EffectCtr.Preload();
                //Bricks_SG.Instant.moreAppCanvas.worldCamera = cam.cam;
            },
            /*BB10_MainObjControl.Preload end.*/

            /*BB10_MainObjControl.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BB10_MainObjControl#Awake", this ); }

                //Application.targetFrameRate = 60;
                UnityEngine.Time.timeScale = 1;
                this.screenCtr.Fix(this.grid.numberRow, this.grid.numberCol);
                BB10_MainObjControl.main = this;

            },
            /*BB10_MainObjControl.Awake end.*/

            /*BB10_MainObjControl.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BB10_MainObjControl#Start", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Preload();
                                        BB10_MainObjControl.Instant.grid.LoadDataSave();
                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.nextViewerCtr.CheckUpdateNewPattem();

                                        BB10_MainState.state = BB10_MainState.State.Ingame;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_MainObjControl.Start end.*/


        }
    });
    /*BB10_MainObjControl end.*/

    /*BB10_MainState start.*/
    Bridge.define("BB10_MainState", {
        statics: {
            fields: {
                state: 0,
                typePlay: 0
            },
            props: {
                GetState: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_MainState#GetState#get", this ); }

                        return BB10_MainState.state;
                    }
                }
            },
            methods: {
                /*BB10_MainState.SetState:static start.*/
                SetState: function (newState) {
if ( TRACE ) { TRACE( "BB10_MainState#SetState", this ); }

                    BB10_MainState.state = newState;
                },
                /*BB10_MainState.SetState:static end.*/


            }
        }
    });
    /*BB10_MainState end.*/

    /*BB10_MainState+State start.*/
    Bridge.define("BB10_MainState.State", {
        $kind: 1006,
        statics: {
            fields: {
                Home: 0,
                Ingame: 1,
                GameOver: 2,
                Pause: 3,
                Waiting: 4,
                MoreApp: 5,
                ShowReward: 6,
                Exit: 7
            }
        }
    });
    /*BB10_MainState+State end.*/

    /*BB10_MainState+TypePlay start.*/
    Bridge.define("BB10_MainState.TypePlay", {
        $kind: 1006,
        statics: {
            fields: {
                Normal: 0,
                Tutorial: 1
            }
        }
    });
    /*BB10_MainState+TypePlay end.*/

    /*BB10_NextViewer start.*/
    Bridge.define("BB10_NextViewer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            index: 0,
            scale: 0,
            durationLight: 0,
            duration: 0,
            durationIn: 0,
            myType: 0,
            rotateTime: 0,
            listBlock: null,
            listBlockLocalPos: null,
            ScaleUpAnim: null,
            state: 0,
            normalPos: null,
            startPos1: null,
            startPos2: null,
            ac1: null,
            ac2: null,
            isMoving: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#init", this ); }

                this.normalPos = new UnityEngine.Vector2();
                this.startPos1 = new UnityEngine.Vector2();
                this.startPos2 = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*BB10_NextViewer.SetPattem start.*/
            SetPattem: function (listUnit, type, numberRotate, isRotate) {
if ( TRACE ) { TRACE( "BB10_NextViewer#SetPattem", this ); }

                this.myType = type;
                this.listBlock = listUnit;
                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    this.listBlock.getItem(i).viewer = this;
                }
                //if (isRotate)
                //    RotatePattem(numberRotate);

                this.FixCenterPos();

                this.listBlockLocalPos = System.Array.init(listUnit.Count, function (){
                    return new UnityEngine.Vector2();
                }, UnityEngine.Vector2);

                for (var i1 = 0; i1 < this.listBlock.Count; i1 = (i1 + 1) | 0) {
                    this.listBlockLocalPos[i1] = UnityEngine.Vector2.FromVector3(this.listBlock.getItem(i1).transform.position).sub( this.normalPos );
                }

                if (this.ScaleUpAnim != null && this.isMoving) {
                    this.StopCoroutine(this.ScaleUpAnim);
                }

                this.ScaleUpAnim = this.MoveBlocks();
                this.StartCoroutine$1(this.ScaleUpAnim);

            },
            /*BB10_NextViewer.SetPattem end.*/

            /*BB10_NextViewer.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#Awake", this ); }

                this.normalPos = UnityEngine.Vector2.FromVector3(this.transform.position.$clone());
            },
            /*BB10_NextViewer.Awake end.*/

            /*BB10_NextViewer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#Start", this ); }

                //startPos1 = new Vector2(startPos1.x, startPos1.y + (transform.localPosition.y + 2.77f));
                //startPos2 = new Vector2(startPos2.x, startPos2.y + (transform.localPosition.y + 2.77f));
            },
            /*BB10_NextViewer.Start end.*/

            /*BB10_NextViewer.SetPattemAndRotate start.*/
            SetPattemAndRotate: function (listUnit, type) {
if ( TRACE ) { TRACE( "BB10_NextViewer#SetPattemAndRotate", this ); }

                this.myType = type;
                this.listBlock = listUnit;

                this.RotatePattemOne();

                this.FixCenterPos();

                this.listBlockLocalPos = System.Array.init(listUnit.Count, function (){
                    return new UnityEngine.Vector2();
                }, UnityEngine.Vector2);

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    this.listBlockLocalPos[i] = UnityEngine.Vector2.FromVector3(this.listBlock.getItem(i).transform.position).sub( this.normalPos );
                }

                if (this.ScaleUpAnim != null && this.isMoving) {
                    this.StopCoroutine(this.ScaleUpAnim);
                }

                this.ScaleUpAnim = this.MoveBlocks();
                this.StartCoroutine$1(this.ScaleUpAnim);

            },
            /*BB10_NextViewer.SetPattemAndRotate end.*/

            /*BB10_NextViewer.SetBlockPos start.*/
            SetBlockPos: function (pos) {
if ( TRACE ) { TRACE( "BB10_NextViewer#SetBlockPos", this ); }

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    this.listBlock.getItem(i).transform.position = UnityEngine.Vector3.FromVector2(this.listBlockLocalPos[i].$clone().add( pos ));
                }
            },
            /*BB10_NextViewer.SetBlockPos end.*/

            /*BB10_NextViewer.RotatePattem start.*/
            RotatePattem: function (numberRotate) {
if ( TRACE ) { TRACE( "BB10_NextViewer#RotatePattem", this ); }

                if (this.myType === Types.I3 || this.myType === Types.O1 || this.myType === Types.O0) {
                    this.rotateTime = 0;
                    return;
                } else {
                    this.rotateTime = numberRotate;

                    for (var t = 0; t < this.rotateTime; t = (t + 1) | 0) {
                        for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                            this.listBlock.getItem(i).RotateUnit();
                        }
                    }
                }
            },
            /*BB10_NextViewer.RotatePattem end.*/

            /*BB10_NextViewer.MoveBlocks start.*/
            MoveBlocks: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#MoveBlocks", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    pos,
                    pos1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isMoving = true;
                                        timer = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this.durationIn ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        pos = new pc.Vec2().lerp( this.startPos1, this.startPos2, this.ac1.value(timer / this.durationIn) );
                                        this.SetBlockPos(pos);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    timer = 0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( timer < this.duration ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    timer += UnityEngine.Time.deltaTime;
                                        pos1 = new pc.Vec2().lerp( this.startPos2, this.normalPos, this.ac2.value(timer / this.duration) );
                                        this.SetBlockPos(pos1);
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this.SetBlockPos(this.normalPos);
                                        this.isMoving = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_NextViewer.MoveBlocks end.*/

            /*BB10_NextViewer.RotatePattemOne start.*/
            RotatePattemOne: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#RotatePattemOne", this ); }

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    this.listBlock.getItem(i).RotateUnit();
                    this.listBlockLocalPos[i] = UnityEngine.Vector2.FromVector3(this.listBlock.getItem(i).transform.position).sub( this.normalPos );
                }
            },
            /*BB10_NextViewer.RotatePattemOne end.*/

            /*BB10_NextViewer.FixCenterPos start.*/
            FixCenterPos: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#FixCenterPos", this ); }

                var centerX = 0;
                var centerY = 0;

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    centerX += this.listBlock.getItem(i).indexCol;
                    centerY += this.listBlock.getItem(i).indexRow;
                }

                centerX = centerX / this.listBlock.Count;
                centerY = centerY / this.listBlock.Count;

                var center = new pc.Vec2( centerX, centerY );

                for (var i1 = 0; i1 < this.listBlock.Count; i1 = (i1 + 1) | 0) {
                    this.listBlock.getItem(i1).MoveCenterPos(UnityEngine.Vector2.FromVector3(this.transform.position), center);
                }
            },
            /*BB10_NextViewer.FixCenterPos end.*/

            /*BB10_NextViewer.ClickPattern start.*/
            ClickPattern: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#ClickPattern", this ); }


                if ((this.state === BB10_NextViewer.State.Show || this.state === BB10_NextViewer.State.Hide) && BB10_MainState.GetState === BB10_MainState.State.Ingame) {
                    BB10_MainObjControl.Instant.planeViewCrt.SetPattem(this.listBlock, UnityEngine.Vector2.FromVector3(this.transform.position), this.listBlock.getItem(0).myData, this.index, this.scale);

                    //MainAudio.Main.PlaySound(TypeAudio.SellectPattem);
                    this.HideAllBlock();

                    if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                        BB10_MainObjControl.Instant.tutorial.StopFinger();
                    }
                }
            },
            /*BB10_NextViewer.ClickPattern end.*/

            /*BB10_NextViewer.CheckImpossible start.*/
            CheckImpossible: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#CheckImpossible", this ); }

                // Comment for disable grey block when InImpossible
                if (this.state !== BB10_NextViewer.State.Null) {
                    if (!BB10_MainObjControl.Instant.grid.InvalidPlacePattem(this.listBlock)) {
                        if (this.state === BB10_NextViewer.State.Hide) {
                            //StartCoroutine(StartSetLight(GameDefine.pattemDarkAlpha, GameDefine.pattemLightAlpha));
                            this.state = BB10_NextViewer.State.Show;
                        }
                    } else {
                        if (this.state === BB10_NextViewer.State.Show) {
                            //StartCoroutine(StartSetLight(GameDefine.pattemLightAlpha, GameDefine.pattemDarkAlpha));
                            this.state = BB10_NextViewer.State.Hide;
                        }
                    }
                }
            },
            /*BB10_NextViewer.CheckImpossible end.*/

            /*BB10_NextViewer.GreyWhenGameOver start.*/
            GreyWhenGameOver: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#GreyWhenGameOver", this ); }

                if (this.state !== BB10_NextViewer.State.Null) {
                    if (BB10_MainObjControl.Instant.grid.InvalidPlacePattem(this.listBlock)) {
                        UnityEngine.Debug.Log$1("Game Over");
                        this.StartCoroutine$1(this.StartSetLight(GameDefine.pattemLightAlpha, GameDefine.pattemDarkAlpha));
                    }
                }
            },
            /*BB10_NextViewer.GreyWhenGameOver end.*/

            /*BB10_NextViewer.ValidMoreThanOne start.*/
            ValidMoreThanOne: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#ValidMoreThanOne", this ); }

                return BB10_MainObjControl.Instant.grid.ValidPlaceMoreThanOne(this.listBlock);
            },
            /*BB10_NextViewer.ValidMoreThanOne end.*/

            /*BB10_NextViewer.PosValid start.*/
            PosValid: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#PosValid", this ); }

                return BB10_MainObjControl.Instant.grid.PosValidPattem(this.listBlock);
            },
            /*BB10_NextViewer.PosValid end.*/

            /*BB10_NextViewer.HideAllBlock start.*/
            HideAllBlock: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#HideAllBlock", this ); }

                if (this.ScaleUpAnim != null && this.isMoving) {
                    this.StopCoroutine(this.ScaleUpAnim);
                }

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    this.listBlock.getItem(i).transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2( 0, -100 ));
                }
            },
            /*BB10_NextViewer.HideAllBlock end.*/

            /*BB10_NextViewer.ShowAllBlock start.*/
            ShowAllBlock: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#ShowAllBlock", this ); }

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    this.listBlock.getItem(i).transform.position = UnityEngine.Vector3.FromVector2(this.normalPos.$clone().add( this.listBlockLocalPos[i] ));
                }
            },
            /*BB10_NextViewer.ShowAllBlock end.*/

            /*BB10_NextViewer.SetAllBlock start.*/
            SetAllBlock: function () {
if ( TRACE ) { TRACE( "BB10_NextViewer#SetAllBlock", this ); }

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    BB10_MainObjControl.Instant.pattemCreater.SetCube(this.listBlock.getItem(i));
                }

                this.listBlock = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
            },
            /*BB10_NextViewer.SetAllBlock end.*/

            /*BB10_NextViewer.StartSetLight start.*/
            StartSetLight: function (fromAlpha, toAlpha) {
if ( TRACE ) { TRACE( "BB10_NextViewer#StartSetLight", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this.durationLight ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.SetLight(pc.math.lerp(fromAlpha, toAlpha, timer / this.durationLight));
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.SetLight(toAlpha);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_NextViewer.StartSetLight end.*/

            /*BB10_NextViewer.SetLight start.*/
            SetLight: function (alpha) {
if ( TRACE ) { TRACE( "BB10_NextViewer#SetLight", this ); }

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    this.listBlock.getItem(i).SetAlpha(alpha);
                }
            },
            /*BB10_NextViewer.SetLight end.*/


        }
    });
    /*BB10_NextViewer end.*/

    /*BB10_NextViewer+State start.*/
    Bridge.define("BB10_NextViewer.State", {
        $kind: 1006,
        statics: {
            fields: {
                Null: 0,
                Show: 1,
                Hide: 2
            }
        }
    });
    /*BB10_NextViewer+State end.*/

    /*BB10_NextViewerControl start.*/
    Bridge.define("BB10_NextViewerControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pattemTableObj: null,
            spawnData: null,
            spawnIndex: 0,
            listView: null,
            type0: 0,
            type1: 0,
            type2: 0,
            listUnit0: null,
            listUnit1: null,
            listUnit2: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#init", this ); }

                this.spawnIndex = 0;
            }
        },
        methods: {
            /*BB10_NextViewerControl.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#Awake", this ); }

                for (var i = 0; i < this.listView.length; i = (i + 1) | 0) {
                    this.listView[i].index = i;
                }
            },
            /*BB10_NextViewerControl.Awake end.*/

            /*BB10_NextViewerControl.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#Preload", this ); }

                this.listUnit0 = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
                this.listUnit1 = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
                this.listUnit2 = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
            },
            /*BB10_NextViewerControl.Preload end.*/

            /*BB10_NextViewerControl.CheckUpdateNewPattem start.*/
            CheckUpdateNewPattem: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#CheckUpdateNewPattem", this ); }

                this.UpdatePattems();
                this.CheckImpossiblePattem();
            },
            /*BB10_NextViewerControl.CheckUpdateNewPattem end.*/

            /*BB10_NextViewerControl.CheckHelp start.*/
            CheckHelp: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#CheckHelp", this ); }

                if (this.listView[0].state === BB10_NextViewer.State.Show && !this.listView[0].ValidMoreThanOne()) {
                    if ((this.listView[1].state === BB10_NextViewer.State.Hide || this.listView[1].state === BB10_NextViewer.State.Null) && (this.listView[2].state === BB10_NextViewer.State.Hide || this.listView[2].state === BB10_NextViewer.State.Null)) {
                        var posValid = this.listView[0].PosValid();
                        BB10_MainObjControl.Instant.helpCtr.ShowHelp(this.listView[0].listBlock, posValid);
                    }
                } else if (this.listView[1].state === BB10_NextViewer.State.Show && !this.listView[1].ValidMoreThanOne()) {
                    if ((this.listView[0].state === BB10_NextViewer.State.Hide || this.listView[0].state === BB10_NextViewer.State.Null) && (this.listView[2].state === BB10_NextViewer.State.Hide || this.listView[2].state === BB10_NextViewer.State.Null)) {
                        var posValid1 = this.listView[1].PosValid();
                        BB10_MainObjControl.Instant.helpCtr.ShowHelp(this.listView[1].listBlock, posValid1);
                    }
                } else if (this.listView[2].state === BB10_NextViewer.State.Show && !this.listView[2].ValidMoreThanOne()) {
                    if ((this.listView[1].state === BB10_NextViewer.State.Hide || this.listView[1].state === BB10_NextViewer.State.Null) && (this.listView[0].state === BB10_NextViewer.State.Hide || this.listView[0].state === BB10_NextViewer.State.Null)) {
                        var posValid2 = this.listView[2].PosValid();
                        BB10_MainObjControl.Instant.helpCtr.ShowHelp(this.listView[2].listBlock, posValid2);
                    }
                } else {
                    BB10_MainObjControl.Instant.helpCtr.HideAllBlock();
                }
            },
            /*BB10_NextViewerControl.CheckHelp end.*/

            /*BB10_NextViewerControl.UpdatePattems start.*/
            UpdatePattems: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#UpdatePattems", this ); }

                if (this.IsEmptyAll()) {
                    this.GetNewPattems();
                } else {
                    this.CheckGameOver();
                }
            },
            /*BB10_NextViewerControl.UpdatePattems end.*/

            /*BB10_NextViewerControl.CheckImpossiblePattem start.*/
            CheckImpossiblePattem: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#CheckImpossiblePattem", this ); }

                this.listView[0].CheckImpossible();
                this.listView[1].CheckImpossible();
                this.listView[2].CheckImpossible();
            },
            /*BB10_NextViewerControl.CheckImpossiblePattem end.*/

            /*BB10_NextViewerControl.GreyWhenGameOver start.*/
            GreyWhenGameOver: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#GreyWhenGameOver", this ); }

                UnityEngine.Debug.Log$1("Game Over");
                this.listView[0].GreyWhenGameOver();
                this.listView[1].GreyWhenGameOver();
                this.listView[2].GreyWhenGameOver();
            },
            /*BB10_NextViewerControl.GreyWhenGameOver end.*/

            /*BB10_NextViewerControl.CheckGameOver start.*/
            CheckGameOver: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#CheckGameOver", this ); }

                if (this.IsGameOver()) {
                    UnityEngine.Debug.Log$1("Game Over");
                    SingletonBase$1(TimerProgress).Instance.StopTimer();
                    SingletonBase$1(GamePlayManager).Instance.GameOver(false);
                    this.GreyWhenGameOver();
                }
            },
            /*BB10_NextViewerControl.CheckGameOver end.*/

            /*BB10_NextViewerControl.IsGameOver start.*/
            IsGameOver: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#IsGameOver", this ); }

                var $t;
                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    if (this.listView[i].state !== BB10_NextViewer.State.Null) {
                        var listViewer = ($t = BB10_MainObjControl.Instant.nextViewerCtr.listView)[i].listBlock;
                        if (!BB10_MainObjControl.Instant.grid.InvalidPlacePattem(listViewer)) {
                            return false;
                        }
                    }
                }

                return true;
            },
            /*BB10_NextViewerControl.IsGameOver end.*/

            /*BB10_NextViewerControl.GetNewPattems start.*/
            GetNewPattems: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#GetNewPattems", this ); }

                var $t;
                do {
                    var score = BB10_MainCanvasUI.Main.inGameScript.scoreInt;
                    this.SetAllBlockFromList(this.listUnit0);
                    this.SetAllBlockFromList(this.listUnit1);
                    this.SetAllBlockFromList(this.listUnit2);

                    //type0 = pattemTableObj.GetFixedRandomType(score);
                    //type1 = pattemTableObj.GetFixedRandomType(score);
                    //type2 = pattemTableObj.GetFixedRandomType(score);

                    if (this.spawnIndex < this.spawnData.spawnGroups.length) {
                        var g = ($t = this.spawnData.spawnGroups)[this.spawnIndex];

                        this.type0 = g.block1;
                        this.type1 = g.block2;
                        this.type2 = g.block3;

                        this.spawnIndex = (this.spawnIndex + 1) | 0;
                    } else {
                        // chuyển sang random hệ thống
                        this.type0 = this.pattemTableObj.GetFixedRandomType(score);
                        this.type1 = this.pattemTableObj.GetFixedRandomType(score);
                        this.type2 = this.pattemTableObj.GetFixedRandomType(score);
                    }

                    this.listUnit0 = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(this.type0, UnityEngine.Vector2.FromVector3(this.listView[0].transform.position), this.listView[0].scale);
                    this.listUnit1 = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(this.type1, UnityEngine.Vector2.FromVector3(this.listView[1].transform.position), this.listView[1].scale);
                    this.listUnit2 = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(this.type2, UnityEngine.Vector2.FromVector3(this.listView[2].transform.position), this.listView[2].scale);

                    this.listView[0].SetPattem(this.listUnit0, this.type0, UnityEngine.Random.Range(0, 4), true);
                    this.listView[1].SetPattem(this.listUnit1, this.type1, UnityEngine.Random.Range(0, 4), true);
                    this.listView[2].SetPattem(this.listUnit2, this.type2, UnityEngine.Random.Range(0, 4), true);
                } while (this.InvalidAllPattem() || this.NumberPattemO2(this.type0, this.type1, this.type2) > 2);


                this.listUnit0 = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
                this.listUnit1 = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
                this.listUnit2 = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();

                this.listView[0].state = BB10_NextViewer.State.Show;
                this.listView[1].state = BB10_NextViewer.State.Show;
                this.listView[2].state = BB10_NextViewer.State.Show;

                this.CheckImpossiblePattem();
            },
            /*BB10_NextViewerControl.GetNewPattems end.*/

            /*BB10_NextViewerControl.RotatePattem start.*/
            RotatePattem: function (listUnitRotate) {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#RotatePattem", this ); }

                var randRotation = UnityEngine.Random.Range(0, 3);

                for (var t = 0; t < randRotation; t = (t + 1) | 0) {
                    for (var i = 0; i < listUnitRotate.Count; i = (i + 1) | 0) {
                        listUnitRotate.getItem(i).RotateUnit();
                    }
                }
            },
            /*BB10_NextViewerControl.RotatePattem end.*/

            /*BB10_NextViewerControl.SetAllBlockFromList start.*/
            SetAllBlockFromList: function (listBlock) {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#SetAllBlockFromList", this ); }

                for (var i = 0; i < listBlock.Count; i = (i + 1) | 0) {
                    BB10_MainObjControl.Instant.pattemCreater.SetCube(listBlock.getItem(i));
                }

                listBlock = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
            },
            /*BB10_NextViewerControl.SetAllBlockFromList end.*/

            /*BB10_NextViewerControl.IsEmptyAll start.*/
            IsEmptyAll: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#IsEmptyAll", this ); }

                for (var i = 0; i < this.listView.length; i = (i + 1) | 0) {
                    if (this.listView[i].state !== BB10_NextViewer.State.Null) {
                        return false;
                    }
                }
                return true;
            },
            /*BB10_NextViewerControl.IsEmptyAll end.*/

            /*BB10_NextViewerControl.InvalidAllPattem start.*/
            InvalidAllPattem: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#InvalidAllPattem", this ); }

                var b0 = BB10_MainObjControl.Instant.grid.InvalidPlacePattem(this.listView[0].listBlock);
                var b1 = BB10_MainObjControl.Instant.grid.InvalidPlacePattem(this.listView[1].listBlock);
                var b2 = BB10_MainObjControl.Instant.grid.InvalidPlacePattem(this.listView[2].listBlock);

                if (b0 && b1 && b2) {
                    return true;
                }

                return false;
            },
            /*BB10_NextViewerControl.InvalidAllPattem end.*/

            /*BB10_NextViewerControl.NumberPattemO2 start.*/
            NumberPattemO2: function (t0, t1, t2) {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#NumberPattemO2", this ); }

                var t = 0;

                if (t0 === Types.O2) {
                    t = (t + 1) | 0;
                }

                if (t1 === Types.O2) {
                    t = (t + 1) | 0;
                }

                if (t2 === Types.O2) {
                    t = (t + 1) | 0;
                }

                return t;
            },
            /*BB10_NextViewerControl.NumberPattemO2 end.*/

            /*BB10_NextViewerControl.SetAllBlock start.*/
            SetAllBlock: function () {
if ( TRACE ) { TRACE( "BB10_NextViewerControl#SetAllBlock", this ); }

                this.listView[0].SetAllBlock();
                this.listView[1].SetAllBlock();
                this.listView[2].SetAllBlock();

                this.listView[0].state = BB10_NextViewer.State.Null;
                this.listView[1].state = BB10_NextViewer.State.Null;
                this.listView[2].state = BB10_NextViewer.State.Null;
            },
            /*BB10_NextViewerControl.SetAllBlock end.*/


        }
    });
    /*BB10_NextViewerControl end.*/

    /*BB10_PattemCreater start.*/
    Bridge.define("BB10_PattemCreater", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cubePrefab: null,
            listCube: null,
            pattemDataSave: null,
            listPattemsInfor: null,
            dataInfor: null,
            listO0: null,
            listO1: null,
            listO2: null,
            listL0: null,
            listL1: null,
            listI0: null,
            listI1: null,
            listI2: null,
            listI3: null,
            listT0: null,
            listT1: null,
            listLB0: null,
            listZ0: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_PattemCreater#init", this ); }

                this.dataInfor = new (System.Collections.Generic.Dictionary$2(Types,System.Array.type(Vec2))).ctor();
                this.listO0 = System.Array.init([new Vec2.$ctor1(0, 0)], Vec2);
                this.listO1 = System.Array.init([new Vec2.$ctor1(0, 0), new Vec2.$ctor1(1, 0), new Vec2.$ctor1(1, 1), new Vec2.$ctor1(0, 1)], Vec2);
                this.listO2 = System.Array.init([new Vec2.$ctor1(0, 0), new Vec2.$ctor1(1, 0), new Vec2.$ctor1(-1, 0), new Vec2.$ctor1(0, 1), new Vec2.$ctor1(1, 1), new Vec2.$ctor1(-1, 1), new Vec2.$ctor1(0, -1), new Vec2.$ctor1(1, -1), new Vec2.$ctor1(-1, -1)], Vec2);
                this.listL0 = System.Array.init([new Vec2.$ctor1(1, 0), new Vec2.$ctor1(1, 1), new Vec2.$ctor1(0, 1)], Vec2);
                this.listL1 = System.Array.init([new Vec2.$ctor1(-1, 0), new Vec2.$ctor1(0, 1), new Vec2.$ctor1(1, 1), new Vec2.$ctor1(-1, 1), new Vec2.$ctor1(-1, -1)], Vec2);
                this.listI0 = System.Array.init([new Vec2.$ctor1(0, 0), new Vec2.$ctor1(1, 0)], Vec2);
                this.listI1 = System.Array.init([new Vec2.$ctor1(-1, 0), new Vec2.$ctor1(0, 0), new Vec2.$ctor1(1, 0)], Vec2);
                this.listI2 = System.Array.init([new Vec2.$ctor1(-1, 0), new Vec2.$ctor1(0, 0), new Vec2.$ctor1(1, 0), new Vec2.$ctor1(2, 0)], Vec2);
                this.listI3 = System.Array.init([new Vec2.$ctor1(-2, 0), new Vec2.$ctor1(-1, 0), new Vec2.$ctor1(0, 0), new Vec2.$ctor1(1, 0), new Vec2.$ctor1(2, 0)], Vec2);
                this.listT0 = System.Array.init([new Vec2.$ctor1(0, 1), new Vec2.$ctor1(0, 0), new Vec2.$ctor1(0, -1), new Vec2.$ctor1(-1, 0)], Vec2);
                this.listT1 = System.Array.init([new Vec2.$ctor1(-1, 0), new Vec2.$ctor1(0, 0), new Vec2.$ctor1(1, 0), new Vec2.$ctor1(1, 1), new Vec2.$ctor1(1, -1)], Vec2);
                this.listLB0 = System.Array.init([new Vec2.$ctor1(0, 1), new Vec2.$ctor1(0, 0), new Vec2.$ctor1(0, -1), new Vec2.$ctor1(1, -1)], Vec2);
                this.listZ0 = System.Array.init([new Vec2.$ctor1(0, 1), new Vec2.$ctor1(0, 0), new Vec2.$ctor1(-1, 0), new Vec2.$ctor1(-1, -1)], Vec2);
            }
        },
        methods: {
            /*BB10_PattemCreater.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BB10_PattemCreater#Awake", this ); }

                this.listPattemsInfor = this.pattemDataSave.listPattemsInfor;

                for (var i = 0; i < this.listPattemsInfor.length; i = (i + 1) | 0) {
                    var grid = this.listPattemsInfor[i].grid;


                    var listVec = new (System.Collections.Generic.List$1(Vec2)).ctor();


                    for (var j = 0; j < grid.length; j = (j + 1) | 0) {
                        if (grid[j]) {
                            listVec.add(new Vec2.$ctor1(j % 5, ((Bridge.Int.div(j, 5)) | 0)));
                        }
                    }

                    this.dataInfor.add(this.listPattemsInfor[i].type, listVec.ToArray());
                }
            },
            /*BB10_PattemCreater.Awake end.*/

            /*BB10_PattemCreater.CreatePattem start.*/
            CreatePattem: function (type, pos, scale) {
if ( TRACE ) { TRACE( "BB10_PattemCreater#CreatePattem", this ); }

                return this.Create(type, pos, scale);
            },
            /*BB10_PattemCreater.CreatePattem end.*/

            /*BB10_PattemCreater.Create start.*/
            Create: function (thisType, pos, scale) {
if ( TRACE ) { TRACE( "BB10_PattemCreater#Create", this ); }

                if (!this.dataInfor.containsKey(thisType)) {
                    UnityEngine.Debug.LogError$2("Pattern type not found: " + System.Enum.toString(Types, thisType));
                    return new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
                }

                var pattemList = this.dataInfor.getItem(thisType);

                var listCubeUnit = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
                var data = BB10_MainObjControl.Instant.colorControl.GetRandSpriteData();

                for (var i = 0; i < pattemList.length; i = (i + 1) | 0) {
                    var thisCubeUnit = this.GetCube();
                    listCubeUnit.add(thisCubeUnit);
                    thisCubeUnit.thisType = thisType;
                    thisCubeUnit.SetSprite(data);
                    //thisCubeUnit.SetSprite(colorCtr.GetSpriteData(1), 1);
                    thisCubeUnit.transform.localScale = new pc.Vec3( scale, scale, scale );

                    var posX = pos.x + pattemList[i].R * scale;
                    var posY = pos.y + pattemList[i].C * scale;

                    thisCubeUnit.transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2( posX, posY ));

                    thisCubeUnit.scale = scale;
                    thisCubeUnit.indexRow = pattemList[i].C;
                    thisCubeUnit.indexCol = pattemList[i].R;

                    thisCubeUnit.SetShadowDropBlock(false);
                }
                return listCubeUnit;
            },
            /*BB10_PattemCreater.Create end.*/

            /*BB10_PattemCreater.CreateABlock start.*/
            CreateABlock: function (pos, scale) {
if ( TRACE ) { TRACE( "BB10_PattemCreater#CreateABlock", this ); }

                var newCubeUnit = this.GetCube();
                newCubeUnit.transform.localScale = new pc.Vec3( scale, scale, scale );
                newCubeUnit.transform.position = UnityEngine.Vector3.FromVector2(pos.$clone());

                newCubeUnit.row = Math.round(pos.y);
                newCubeUnit.col = Math.round(pos.x);

                return newCubeUnit;
            },
            /*BB10_PattemCreater.CreateABlock end.*/

            /*BB10_PattemCreater.GetCube start.*/
            GetCube: function () {
if ( TRACE ) { TRACE( "BB10_PattemCreater#GetCube", this ); }

                var cube;
                if (this.listCube.Count === 0) {
                    cube = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.cubePrefab).GetComponent(BB10_BrickCubeUnit);
                } else {
                    cube = this.listCube.getItem(((this.listCube.Count - 1) | 0));
                    this.listCube.removeAt(((this.listCube.Count - 1) | 0));
                    cube.SetAlpha(GameDefine.pattemLightAlpha);
                    cube.transform.eulerAngles = pc.Vec3.ZERO.clone();
                }

                cube.SetShadowDropBlock(false);

                return cube;
            },
            /*BB10_PattemCreater.GetCube end.*/

            /*BB10_PattemCreater.SetCube start.*/
            SetCube: function (cube) {
if ( TRACE ) { TRACE( "BB10_PattemCreater#SetCube", this ); }

                this.listCube.add(cube);
                cube.transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2( 0, -100 ));
            },
            /*BB10_PattemCreater.SetCube end.*/

            /*BB10_PattemCreater.GetTypeFromString start.*/
            GetTypeFromString: function (text) {
if ( TRACE ) { TRACE( "BB10_PattemCreater#GetTypeFromString", this ); }

                for (var i = 0; i < this.listPattemsInfor.length; i = (i + 1) | 0) {
                    if (System.String.equals(System.Enum.toString(Types, this.listPattemsInfor[i].type), text)) {
                        return this.listPattemsInfor[i].type;
                    }
                }

                return Types.O0;
            },
            /*BB10_PattemCreater.GetTypeFromString end.*/


        }
    });
    /*BB10_PattemCreater end.*/

    /*BB10_PauseScript start.*/
    Bridge.define("BB10_PauseScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            group: null,
            soundIgame: null,
            soundOn: null,
            soundOff: null,
            isFading: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#init", this ); }

                this.isFading = false;
            }
        },
        methods: {
            /*BB10_PauseScript.PauseGame start.*/
            PauseGame: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#PauseGame", this ); }

                if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Normal && BB10_MainState.state !== BB10_MainState.State.Waiting && !this.isFading) {
                    this.isFading = true;
                    BB10_MainCanvasUI.Main.faderScript.FadeInPanelFix(this.group, Bridge.fn.cacheBind(this, this.OffFading));
                    BB10_MainState.SetState(BB10_MainState.State.Pause);

                    this.CheckSound();
                }
            },
            /*BB10_PauseScript.PauseGame end.*/

            /*BB10_PauseScript.UnPause start.*/
            UnPause: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#UnPause", this ); }

                if (!this.isFading) {
                    BB10_MainState.SetState(BB10_MainState.State.Ingame);
                    this.isFading = true;
                    BB10_MainCanvasUI.Main.faderScript.FadeOutPanelFix(this.group, Bridge.fn.cacheBind(this, this.OffFading));
                }
            },
            /*BB10_PauseScript.UnPause end.*/

            /*BB10_PauseScript.ShowHome start.*/
            ShowHome: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#ShowHome", this ); }


                if (!this.isFading) {
                }

            },
            /*BB10_PauseScript.ShowHome end.*/

            /*BB10_PauseScript.Restart start.*/
            Restart: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#Restart", this ); }
 },
            /*BB10_PauseScript.Restart end.*/

            /*BB10_PauseScript.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#Reset", this ); }

                this.SetActive(false);
                //CheckSound();
            },
            /*BB10_PauseScript.Reset end.*/

            /*BB10_PauseScript.PreLoad start.*/
            PreLoad: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#PreLoad", this ); }

                this.CheckSound();
            },
            /*BB10_PauseScript.PreLoad end.*/

            /*BB10_PauseScript.CheckSound start.*/
            CheckSound: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#CheckSound", this ); }

                if (BB10_Settings.GetSound === 0) {
                    this.soundIgame.sprite = this.soundOff;
                    MainAudio.Main.MuteSound(true);
                } else {
                    this.soundIgame.sprite = this.soundOn;
                    MainAudio.Main.MuteSound(false);
                }
            },
            /*BB10_PauseScript.CheckSound end.*/

            /*BB10_PauseScript.SoundClick start.*/
            SoundClick: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#SoundClick", this ); }

                if (BB10_Settings.GetSound === 1) {
                    this.soundIgame.sprite = this.soundOff;
                    BB10_Settings.SetSound(0);
                    MainAudio.Main.MuteSound(true);
                } else {
                    this.soundIgame.sprite = this.soundOn;
                    BB10_Settings.SetSound(1);
                    MainAudio.Main.MuteSound(false);
                }
            },
            /*BB10_PauseScript.SoundClick end.*/

            /*BB10_PauseScript.OffFading start.*/
            OffFading: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#OffFading", this ); }

                this.isFading = false;
            },
            /*BB10_PauseScript.OffFading end.*/

            /*BB10_PauseScript.MidleTryAgain start.*/
            MidleTryAgain: function () {
if ( TRACE ) { TRACE( "BB10_PauseScript#MidleTryAgain", this ); }

                BB10_Settings.SetContinue(0);

                BB10_MainObjControl.Instant.grid.SetAllBlock();
                BB10_MainObjControl.Instant.nextViewerCtr.SetAllBlock();
                BB10_MainObjControl.Instant.planeViewCrt.SetAllBlock();
                BB10_MainObjControl.Instant.helpCtr.HideAllBlock();
                BB10_MainCanvasUI.Main.faderScript.FadeInPanel(BB10_MainCanvasUI.Main.inGameScript.group, null);
                BB10_MainCanvasUI.Main.Reset(true);
            },
            /*BB10_PauseScript.MidleTryAgain end.*/

            /*BB10_PauseScript.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "BB10_PauseScript#SetActive", this ); }

                this.gameObject.SetActive(isActive);
            },
            /*BB10_PauseScript.SetActive end.*/


        }
    });
    /*BB10_PauseScript end.*/

    /*BB10_PlaneView start.*/
    Bridge.define("BB10_PlaneView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            camera: null,
            y: 0,
            scale: 0,
            scaleSmall: 0,
            distanceTouch: 0,
            duration: 0,
            cam: null,
            cellTutAcepted: null,
            myType: 0,
            listBlock: null,
            listBlockLocalPos: null,
            touchPos: null,
            startPos: null,
            selected: 0,
            row: 0,
            col: 0,
            groundView: null,
            grid: null,
            nextViewerCtr: null,
            pattemCreater: null,
            thisData: null,
            ScaleUpAnim: null,
            isScaling: false,
            groundAcepted: false,
            cellAcepted: null,
            lastResetFillCel: null,
            faceMousePos: null,
            isAuto: false,
            state: 0,
            speedMoveDrop: 0,
            timeDelaySetAllBlock: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#init", this ); }

                this.touchPos = new UnityEngine.Vector3();
                this.startPos = new UnityEngine.Vector3();
                this.thisData = new BB10_ColorData();
                this.faceMousePos = new UnityEngine.Vector2();
                this.cellTutAcepted = new Vec2.ctor();
                this.cellAcepted = new Vec2.ctor();
                this.timeDelaySetAllBlock = 0.0;
            }
        },
        methods: {
            /*BB10_PlaneView.SetPattem start.*/
            SetPattem: function (listBlock0, pos, data, select, viewScale) {
if ( TRACE ) { TRACE( "BB10_PlaneView#SetPattem", this ); }

                this.state = BB10_PlaneView.State.Drag;

                this.selected = select;
                this.startPos = UnityEngine.Vector3.FromVector2(pos.$clone());
                this.thisData = data.$clone();
                this.groundAcepted = false;
                this.SetAllBlock();
                this.listBlockLocalPos = System.Array.init(listBlock0.Count, function (){
                    return new UnityEngine.Vector2();
                }, UnityEngine.Vector2);
                for (var i = 0; i < listBlock0.Count; i = (i + 1) | 0) {

                    var indexRow = listBlock0.getItem(i).indexRow;
                    var indexCol = listBlock0.getItem(i).indexCol;
                    var p = UnityEngine.Vector2.FromVector3(listBlock0.getItem(i).transform.position.$clone());
                    this.listBlock.add(this.pattemCreater.CreateABlock(p, this.scale));

                    this.listBlock.getItem(i).indexRow = indexRow;
                    this.listBlock.getItem(i).indexCol = indexCol;
                    this.listBlock.getItem(i).SetSprite(this.thisData);
                    this.listBlock.getItem(i).SetLayer(GameDefine.selectingLayer);
                    this.listBlockLocalPos[i] = (p.$clone().sub( pos )).scale( 1.0 / ( viewScale ) );

                    this.listBlock.getItem(i).SetShadowDropBlock(true);
                }

                this.ScaleBlock(this.scaleSmall);

                if (this.ScaleUpAnim != null && this.isScaling) {
                    this.StopCoroutine(this.ScaleUpAnim);
                }

                this.ScaleUpAnim = this.ScaleUpBlock();
                this.StartCoroutine$1(this.ScaleUpAnim);
                BB10_MainObjControl.Instant.helpCtr.HideAllBlock();
            },
            /*BB10_PlaneView.SetPattem end.*/

            /*BB10_PlaneView.SetBlockPos start.*/
            SetBlockPos: function (pos, newScale) {
if ( TRACE ) { TRACE( "BB10_PlaneView#SetBlockPos", this ); }

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    var posX = pos.x + this.listBlockLocalPos[i].x * UnityEngine.Mathf.Min(newScale, this.scale) / this.scale;
                    var posY = pos.y + this.listBlockLocalPos[i].y * UnityEngine.Mathf.Min(newScale, this.scale) / this.scale;

                    this.listBlock.getItem(i).transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2( posX, posY ));
                }
            },
            /*BB10_PlaneView.SetBlockPos end.*/

            /*BB10_PlaneView.ScaleBlock start.*/
            ScaleBlock: function (newScale) {
if ( TRACE ) { TRACE( "BB10_PlaneView#ScaleBlock", this ); }

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    this.listBlock.getItem(i).transform.localScale = new pc.Vec3( newScale, newScale, newScale );
                }
            },
            /*BB10_PlaneView.ScaleBlock end.*/

            /*BB10_PlaneView.SetAllBlock start.*/
            SetAllBlock: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#SetAllBlock", this ); }

                for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                    this.listBlock.getItem(i).SetLayer(GameDefine.freeLayer);
                    BB10_MainObjControl.Instant.pattemCreater.SetCube(this.listBlock.getItem(i));
                }

                this.listBlock.clear();
            },
            /*BB10_PlaneView.SetAllBlock end.*/

            /*BB10_PlaneView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#Awake", this ); }

                this.listBlock = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
                this.row = BB10_MainObjControl.Instant.grid.numberRow;
                this.col = BB10_MainObjControl.Instant.grid.numberCol;
                this.groundView = BB10_MainObjControl.Instant.groundView;
                this.grid = BB10_MainObjControl.Instant.grid;
                this.nextViewerCtr = BB10_MainObjControl.Instant.nextViewerCtr;
                this.pattemCreater = BB10_MainObjControl.Instant.pattemCreater;
            },
            /*BB10_PlaneView.Awake end.*/

            /*BB10_PlaneView.ScaleDownBlock start.*/
            ScaleDownBlock: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#ScaleDownBlock", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    currentMousePos,
                    originalPos,
                    $t,
                    $t1,
                    timeScaleDown,
                    newScale,
                    newPos,
                    $t2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isScaling = true;
                                        timer = 0.0;
                                        currentMousePos = new UnityEngine.Vector2();
                                        originalPos = new pc.Vec2( ($t = this.nextViewerCtr.listView)[this.selected].transform.position.x, ($t1 = this.nextViewerCtr.listView)[this.selected].transform.position.y );

                                        //Debug.Log("listBlock.Count: " + listBlock.Count);

                                        timeScaleDown = this.duration / 2.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < timeScaleDown && this.listBlock.Count > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        newScale = pc.math.lerp(this.scale, this.scaleSmall, timer / timeScaleDown);

                                        this.ScaleBlock(newScale);

                                        currentMousePos = this.GetFixedMousePos();
                                        newPos = new pc.Vec2().lerp( currentMousePos, originalPos, timer / timeScaleDown );

                                        this.SetBlockPos(UnityEngine.Vector3.FromVector2(newPos), newScale);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    currentMousePos = this.GetFixedMousePos();
                                        this.SetBlockPos(UnityEngine.Vector3.FromVector2(originalPos), this.scaleSmall);

                                        ($t2 = this.nextViewerCtr.listView)[this.selected].ShowAllBlock();

                                        this.isScaling = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_PlaneView.ScaleDownBlock end.*/

            /*BB10_PlaneView.ScaleUpBlock start.*/
            ScaleUpBlock: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#ScaleUpBlock", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    currentMousePos,
                    currentPos,
                    $t,
                    $t1,
                    newScale,
                    newPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isScaling = true;
                                        timer = 0.0;
                                        currentMousePos = new UnityEngine.Vector2();

                                        currentPos = new pc.Vec2( ($t = this.nextViewerCtr.listView)[this.selected].transform.position.x, ($t1 = this.nextViewerCtr.listView)[this.selected].transform.position.y );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this.duration && this.listBlock.Count > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        newScale = pc.math.lerp(this.scaleSmall, this.scale, timer / this.duration);
                                        this.ScaleBlock(newScale);

                                        currentMousePos = this.GetFixedMousePos();
                                        newPos = new pc.Vec2().lerp( currentPos, currentMousePos, timer / this.duration );

                                        currentMousePos = this.GetFixedMousePos();
                                        this.SetBlockPos(UnityEngine.Vector3.FromVector2(newPos), newScale);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    currentMousePos = this.GetFixedMousePos();
                                        this.SetBlockPos(UnityEngine.Vector3.FromVector2(currentMousePos), this.scale);


                                        this.isScaling = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_PlaneView.ScaleUpBlock end.*/

            /*BB10_PlaneView.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#Update", this ); }

                this.Drag();

                if (this.isAuto) {
                    return;
                }

                this.CheckPlace();

            },
            /*BB10_PlaneView.Update end.*/

            /*BB10_PlaneView.Drag start.*/
            Drag: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#Drag", this ); }

                if (this.state === BB10_PlaneView.State.Drag && this.listBlock.Count > 0 && !this.isScaling) {
                    this.SetBlockPos(UnityEngine.Vector3.FromVector2(this.GetFixedMousePos()), this.scale);
                    this.CheckGround();
                }
            },
            /*BB10_PlaneView.Drag end.*/

            /*BB10_PlaneView.CheckPlace start.*/
            CheckPlace: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#CheckPlace", this ); }

                var $t;
                if (UnityEngine.Input.GetMouseButtonUp(0) && this.listBlock.Count > 0) {
                    this.CheckGround();
                    this.PlacePattemGround();
                    MainAudio.Main.PlaySound(TypeAudio.SoundStop);

                    if (BB10_MainCanvasUI.Main.blur.activeSelf) {
                        BB10_MainCanvasUI.Main.blur.SetActive(false);
                    }

                    !Bridge.staticEquals(($t = BB10_MainCanvasUI.Main.OnDropPiece), null) ? $t() : null;
                }
            },
            /*BB10_PlaneView.CheckPlace end.*/

            /*BB10_PlaneView.PlacePattemGround start.*/
            PlacePattemGround: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#PlacePattemGround", this ); }

                this.CheckSelectedBlock();
                DG.Tweening.DOVirtual.DelayedCall(this.timeDelaySetAllBlock, Bridge.fn.bind(this, function () {
                    this.SetAllBlock();
                }));

                this.groundView.HideAllBlock();
                BB10_MainObjControl.Instant.nextViewerCtr.CheckHelp();
                this.state = BB10_PlaneView.State.Free;
            },
            /*BB10_PlaneView.PlacePattemGround end.*/

            /*BB10_PlaneView.CheckSelectedBlock start.*/
            CheckSelectedBlock: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#CheckSelectedBlock", this ); }

                var $t, $t1;
                if (this.groundAcepted && !this.isScaling) {
                    this.timeDelaySetAllBlock = 0.0;

                    var r1 = this.cellAcepted.R;
                    var c1 = this.cellAcepted.C;
                    var posPlace1 = new pc.Vec2( c1, r1 );
                    var startPos1 = UnityEngine.Vector2.FromVector3(this.listBlock.getItem(0).transform.position.$clone());
                    var durationMoveDrop = (startPos1.$clone().sub( posPlace1 )).length() / this.speedMoveDrop;
                    durationMoveDrop = UnityEngine.Mathf.Min(durationMoveDrop, 0.09);
                    var newListCubeUnit = new (System.Collections.Generic.List$1(BB10_BrickCubeUnit)).ctor();
                    for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                        var r = (this.cellAcepted.R - (((this.listBlock.getItem(0).indexRow - this.listBlock.getItem(i).indexRow) | 0))) | 0;
                        var c = (this.cellAcepted.C - (((this.listBlock.getItem(0).indexCol - this.listBlock.getItem(i).indexCol) | 0))) | 0;
                        var posPlace = new pc.Vec2( c, r );
                        var startPos = UnityEngine.Vector2.FromVector3(this.listBlock.getItem(i).transform.position.$clone());
                        var newCubeUnit = this.pattemCreater.CreateABlock(startPos, this.scale);

                        this.grid.grid.set([r, c], newCubeUnit);
                        newCubeUnit.col = c;
                        newCubeUnit.row = r;
                        newCubeUnit.SetSprite(this.thisData);
                        newListCubeUnit.add(newCubeUnit);
                        newCubeUnit.DropDown(startPos, posPlace, durationMoveDrop);

                        newCubeUnit.SetShadowDropBlock(false);
                    }

                    var isColect = { v : false };
                    BB10_MainObjControl.Instant.grid.CheckGrid(newListCubeUnit, isColect);

                    ($t = this.nextViewerCtr.listView)[this.selected].SetAllBlock();
                    ($t1 = this.nextViewerCtr.listView)[this.selected].state = BB10_NextViewer.State.Null;


                    if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                        BB10_MainObjControl.Instant.tutorial.Next();
                    } else {
                        BB10_MainObjControl.Instant.nextViewerCtr.CheckUpdateNewPattem();
                    }

                    if (isColect.v) {
                        //MainAudio.Main.PlaySound(TypeAudio.SoundCollect);
                    } else {
                        //MainAudio.Main.PlaySound(TypeAudio.SoundStop);
                    }
                } else {
                    this.timeDelaySetAllBlock = this.duration / 2.0;

                    if (this.ScaleUpAnim != null && this.isScaling) {
                        this.StopCoroutine(this.ScaleUpAnim);
                    }

                    this.ScaleUpAnim = this.ScaleDownBlock();
                    this.StartCoroutine$1(this.ScaleUpAnim);

                    DG.Tweening.DOVirtual.DelayedCall(this.timeDelaySetAllBlock, Bridge.fn.bind(this, function () {
                        var $t2;
                        ($t2 = this.nextViewerCtr.listView)[this.selected].ShowAllBlock();
                    }));

                    //MainAudio.Main.PlaySound(TypeAudio.SoundPutFall);
                    if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                        BB10_MainObjControl.Instant.tutorial.StartFinger();
                        this.grid.TurnOffAllFillLine();
                    }
                }
            },
            /*BB10_PlaneView.CheckSelectedBlock end.*/

            /*BB10_PlaneView.CheckPlaceInTuto start.*/
            CheckPlaceInTuto: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#CheckPlaceInTuto", this ); }

                if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                    var mainRow = this.listBlock.getItem(0).indexRow;
                    var mainCol = this.listBlock.getItem(0).indexCol;

                    for (var i = 0; i < this.listBlock.Count; i = (i + 1) | 0) {
                        var unitRow = (this.cellAcepted.R - (((mainRow - this.listBlock.getItem(i).indexRow) | 0))) | 0;
                        var unitCol = (this.cellAcepted.C - (((mainCol - this.listBlock.getItem(i).indexCol) | 0))) | 0;

                        if (!this.grid.IsRowFillWith(unitRow, unitCol) && !this.grid.IsColFillWith(unitRow, unitCol)) {
                            return false;
                        }
                    }
                }

                return true;
            },
            /*BB10_PlaneView.CheckPlaceInTuto end.*/

            /*BB10_PlaneView.CheckGround start.*/
            CheckGround: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#CheckGround", this ); }

                if (this.IsInvalidGrid()) {
                    this.groundAcepted = true;
                    this.groundView.SetPattem(this.listBlock, this.cellAcepted.R, this.cellAcepted.C, this.listBlock.getItem(0).myData);
                    // check fill line
                    if (this.lastResetFillCel == null || this.lastResetFillCel.R !== this.cellAcepted.R || this.lastResetFillCel.C !== this.cellAcepted.C) {
                        this.grid.TurnOffAllFillLine();
                        this.grid.CheckGridFillTest(this.listBlock, this.cellAcepted.R, this.cellAcepted.C, this.listBlock.getItem(0).myData);
                        this.lastResetFillCel = new Vec2.$ctor1(this.cellAcepted.R, this.cellAcepted.C);
                    }
                } else {
                    this.groundAcepted = false;
                    this.grid.TurnOffAllFillLine();
                    this.groundView.HideAllBlock();
                    this.lastResetFillCel = null;
                }
            },
            /*BB10_PlaneView.CheckGround end.*/

            /*BB10_PlaneView.IsInvalidGrid start.*/
            IsInvalidGrid: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#IsInvalidGrid", this ); }

                var mainPos = UnityEngine.Vector2.FromVector3(this.listBlock.getItem(0).transform.position.$clone());
                this.cellAcepted.C = Math.round(mainPos.x);
                this.cellAcepted.R = Math.round(mainPos.y);

                var isAcept = false; //!grid.InvalidPoint(listBlock, cellAcepted.R, cellAcepted.C);

                if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                    if ((Math.round(mainPos.x) === this.cellTutAcepted.C) && (Math.round(mainPos.y) === this.cellTutAcepted.R)) {
                        isAcept = true;
                    } else {
                        isAcept = false;
                    }
                } else {
                    isAcept = !this.grid.InvalidPoint(this.listBlock, this.cellAcepted.R, this.cellAcepted.C);
                }

                return isAcept;
            },
            /*BB10_PlaneView.IsInvalidGrid end.*/

            /*BB10_PlaneView.GetFixedMousePos start.*/
            GetFixedMousePos: function () {
if ( TRACE ) { TRACE( "BB10_PlaneView#GetFixedMousePos", this ); }

                if (!this.isAuto) {
                    var mousePos = new UnityEngine.Vector2();
                    mousePos = UnityEngine.Vector2.FromVector3(this.camera.ScreenToWorldPoint(UnityEngine.Input.mousePosition));
                    mousePos = new pc.Vec2( mousePos.x, mousePos.y + this.distanceTouch );
                    return mousePos.$clone();
                } else {
                    return this.faceMousePos.$clone();
                }
            },
            /*BB10_PlaneView.GetFixedMousePos end.*/


        }
    });
    /*BB10_PlaneView end.*/

    /*BB10_PlaneView+State start.*/
    Bridge.define("BB10_PlaneView.State", {
        $kind: 1006,
        statics: {
            fields: {
                Free: 0,
                Drag: 1
            }
        }
    });
    /*BB10_PlaneView+State end.*/

    /*BB10_PopupRate start.*/
    Bridge.define("BB10_PopupRate", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                /**
                 * @static
                 * @public
                 * @memberof BB10_PopupRate
                 * @constant
                 * @default "rate_inpopup_key"
                 * @type string
                 */
                rate_inpopup_key: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#init", this ); }

                    this.rate_inpopup_key = "rate_inpopup_key";
                }
            },
            methods: {
                /*BB10_PopupRate.Rate:static start.*/
                Rate: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#Rate", this ); }
 },
                /*BB10_PopupRate.Rate:static end.*/


            }
        },
        fields: {
            starList: null,
            submit: null,
            textRate: null,
            starOn: null,
            starOff: null,
            starNumber: 0,
            popup: null,
            pannel: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#init", this ); }

                this.starList = new (System.Collections.Generic.List$1(BB10_RateStar)).$ctor2(5);
                this.starNumber = 5;
            }
        },
        methods: {
            /*BB10_PopupRate.HandleClickStar start.*/
            HandleClickStar: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#HandleClickStar", this ); }

                for (var i = 0; i < this.starNumber; i = (i + 1) | 0) {
                    this.starList.getItem(i).starImg.sprite = this.starOn;
                }

                for (var i1 = this.starNumber; i1 < this.starList.Count; i1 = (i1 + 1) | 0) {
                    this.starList.getItem(i1).starImg.sprite = this.starOff;
                }

                this.textRate.SetActive(false);
                this.submit.SetActive(true);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.submit.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( 1.1 ), 0.2), Bridge.fn.bind(this, function () {
                    DG.Tweening.ShortcutExtensions.DOScale$1(this.submit.transform, new pc.Vec3( 1, 1, 1 ), 0.05);
                }));
            },
            /*BB10_PopupRate.HandleClickStar end.*/

            /*BB10_PopupRate.HandleSubmit start.*/
            HandleSubmit: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#HandleSubmit", this ); }

                if (this.starNumber === 5) {
                    this.HandleRate5Star();
                } else {
                    this.HandleRate4Star();
                }
            },
            /*BB10_PopupRate.HandleSubmit end.*/

            /*BB10_PopupRate.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#Preload", this ); }

                this.popup.SetActive(false);

                this.InitPopup();
            },
            /*BB10_PopupRate.Preload end.*/

            /*BB10_PopupRate.InitPopup start.*/
            InitPopup: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#InitPopup", this ); }

                this.textRate.SetActive(true);
                this.submit.SetActive(false);
                this.submit.transform.localScale = pc.Vec3.ZERO.clone();

                for (var i = 0; i < this.starList.Count; i = (i + 1) | 0) {
                    this.starList.getItem(i).starImg.sprite = this.starOff;
                }
            },
            /*BB10_PopupRate.InitPopup end.*/

            /*BB10_PopupRate.ShowPopup start.*/
            ShowPopup: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#ShowPopup", this ); }

                //BB10_MainCanvasUI.mainCanvas.lostScript.group.gameObject.SetActive(false);
                this.popup.SetActive(true);

                this.pannel.transform.localScale = pc.Vec3.ZERO.clone();
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.pannel.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( 1.1 ), 0.3), Bridge.fn.bind(this, function () {
                    DG.Tweening.ShortcutExtensions.DOScale$1(this.pannel.transform, new pc.Vec3( 1, 1, 1 ), 0.05);
                }));

                //MainAudio.Main.PlaySound(TypeAudio.SoundGood);
            },
            /*BB10_PopupRate.ShowPopup end.*/

            /*BB10_PopupRate.HidePopup start.*/
            HidePopup: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#HidePopup", this ); }

                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.pannel.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( 1.1 ), 0.05), Bridge.fn.bind(this, function () {
                    DG.Tweening.ShortcutExtensions.DOScale$1(this.pannel.transform, pc.Vec3.ZERO.clone(), 0.3);
                }));

                DG.Tweening.DOVirtual.DelayedCall(0.36, Bridge.fn.bind(this, function () {
                    this.popup.SetActive(false);
                }));
            },
            /*BB10_PopupRate.HidePopup end.*/

            /*BB10_PopupRate.CloseBtn start.*/
            CloseBtn: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#CloseBtn", this ); }

                this.HidePopup();

            },
            /*BB10_PopupRate.CloseBtn end.*/

            /*BB10_PopupRate.HandleRate4Star start.*/
            HandleRate4Star: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#HandleRate4Star", this ); }

                UnityEngine.PlayerPrefs.SetInt(BB10_PopupRate.rate_inpopup_key, 1);

                this.HidePopup();
            },
            /*BB10_PopupRate.HandleRate4Star end.*/

            /*BB10_PopupRate.HandleRate5Star start.*/
            HandleRate5Star: function () {
if ( TRACE ) { TRACE( "BB10_PopupRate#HandleRate5Star", this ); }

                UnityEngine.PlayerPrefs.SetInt(BB10_PopupRate.rate_inpopup_key, 1);

                BB10_PopupRate.Rate();

                DG.Tweening.DOVirtual.DelayedCall(0.3, Bridge.fn.bind(this, function () {
                    this.HidePopup();
                }));
            },
            /*BB10_PopupRate.HandleRate5Star end.*/


        }
    });
    /*BB10_PopupRate end.*/

    /*BB10_RateStar start.*/
    Bridge.define("BB10_RateStar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            starImg: null,
            starNumber: 0
        },
        methods: {
            /*BB10_RateStar.HandleClickStar start.*/
            HandleClickStar: function () {
if ( TRACE ) { TRACE( "BB10_RateStar#HandleClickStar", this ); }

                //BB10_MainCanvasUI.mainCanvas.popupRate.starNumber = this.starNumber;

                //BB10_MainCanvasUI.mainCanvas.popupRate.HandleClickStar();
            },
            /*BB10_RateStar.HandleClickStar end.*/


        }
    });
    /*BB10_RateStar end.*/

    /*BB10_ScoreCtr start.*/
    Bridge.define("BB10_ScoreCtr", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scorePrefab: null,
            listText: null,
            startColor: null,
            endColor: null,
            mat: null,
            speed0: 0,
            G: 0,
            duration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_ScoreCtr#init", this ); }

                this.startColor = new UnityEngine.Color();
                this.endColor = new UnityEngine.Color();
            }
        },
        methods: {
            /*BB10_ScoreCtr.GetText start.*/
            GetText: function () {
if ( TRACE ) { TRACE( "BB10_ScoreCtr#GetText", this ); }

                var newText;
                if (this.listText.Count === 0) {
                    newText = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.scorePrefab).GetComponent(UnityEngine.TextMesh);
                } else {
                    newText = this.listText.getItem(((this.listText.Count - 1) | 0));
                    newText.gameObject.SetActive(true);
                    newText.color = this.startColor.$clone();
                    this.listText.removeAt(((this.listText.Count - 1) | 0));
                }
                return newText;
            },
            /*BB10_ScoreCtr.GetText end.*/

            /*BB10_ScoreCtr.SetText start.*/
            SetText: function (text) {
if ( TRACE ) { TRACE( "BB10_ScoreCtr#SetText", this ); }

                text.gameObject.SetActive(false);
                this.listText.add(text);
            },
            /*BB10_ScoreCtr.SetText end.*/

            /*BB10_ScoreCtr.ShowText start.*/
            ShowText: function (pos, score) {
if ( TRACE ) { TRACE( "BB10_ScoreCtr#ShowText", this ); }

                var text = this.GetText();
                text.transform.position = UnityEngine.Vector3.FromVector2(pos.$clone());
                text.text = "+" + score;

                this.StartCoroutine$1(this.FadeOut(text));
            },
            /*BB10_ScoreCtr.ShowText end.*/

            /*BB10_ScoreCtr.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "BB10_ScoreCtr#Preload", this ); }

                var text1 = this.GetText();
                var text2 = this.GetText();

                this.SetText(text1);
                this.SetText(text2);
            },
            /*BB10_ScoreCtr.Preload end.*/

            /*BB10_ScoreCtr.FadeOut start.*/
            FadeOut: function (text) {
if ( TRACE ) { TRACE( "BB10_ScoreCtr#FadeOut", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    textTrans,
                    startX,
                    startY,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    textTrans = text.transform;
                                        startX = textTrans.position.x;
                                        startY = textTrans.position.y;
                                        t = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < this.duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        textTrans.position = UnityEngine.Vector3.FromVector2(new pc.Vec2( startX, startY + this.GetY(t) ));
                                        this.mat.SetColor$1("_Color", pc.Color.lerp( this.startColor, this.endColor, t / this.duration ));
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.SetText(text);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_ScoreCtr.FadeOut end.*/

            /*BB10_ScoreCtr.GetY start.*/
            GetY: function (t) {
if ( TRACE ) { TRACE( "BB10_ScoreCtr#GetY", this ); }

                return this.speed0 * t + 0.5 * this.G * t * t;
            },
            /*BB10_ScoreCtr.GetY end.*/


        }
    });
    /*BB10_ScoreCtr end.*/

    /*BB10_ScreenCtr start.*/
    Bridge.define("BB10_ScreenCtr", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            BgUnit: null,
            topRec: null,
            bottomTrans: null,
            listPattemTrans: null,
            defaultPattemY: 0,
            defaultPattemUIY: 0,
            orthographicSizeMin: 0,
            cam: null,
            distanceEdge: 0,
            durationFadeIn: 0,
            distanceMoveFade: 0,
            startAlpha: 0,
            F: 0,
            FUI: 0,
            BG: null,
            targetAlpha: 0,
            listSprites: null,
            myR: 0,
            myC: 0,
            partTop: null,
            partDown: null,
            partLeft: null,
            partRight: null,
            defaultScreen: 0,
            currentScren: 0,
            grid: null,
            gridMoving: false,
            waitStep: 0,
            durationScaleUp: 0,
            acScale: null,
            parentCell: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#init", this ); }

                this.gridMoving = false;
            }
        },
        methods: {
            /*BB10_ScreenCtr.StartGridAnim start.*/
            StartGridAnim: function () {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#StartGridAnim", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.partTop.localPosition = UnityEngine.Vector3.FromVector2(new pc.Vec2( 0, 1.93 ));
                                        this.partDown.localPosition = UnityEngine.Vector3.FromVector2(new pc.Vec2( 0, -1.78 ));
                                        this.partRight.localPosition = UnityEngine.Vector3.FromVector2(new pc.Vec2( -1.4, 0 ));
                                        this.partLeft.localPosition = UnityEngine.Vector3.FromVector2(new pc.Vec2( 2.95, 0 ));

                                        this.partTop.gameObject.SetActive(true);
                                        this.partDown.gameObject.SetActive(true);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.StartCoroutine$1(this.MovePart(this.partRight, pc.Vec2.ZERO.clone(), 1.3));
                                        this.StartCoroutine$1(this.MovePart(this.partLeft, pc.Vec2.ZERO.clone(), 1.3));

                                        //        yield return new WaitForSeconds(0.07f);
                                        //StartCoroutine(FadeInPart2(.8f, 1, 0.5f));

                                        this.StartCoroutine$1(this.MovePart(this.partTop, pc.Vec2.ZERO.clone(), 1.65));
                                        this.StartCoroutine$1(this.MovePart(this.partDown, pc.Vec2.ZERO.clone(), 1.65));

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_ScreenCtr.StartGridAnim end.*/

            /*BB10_ScreenCtr.MovePart start.*/
            MovePart: function (part, target, duration) {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#MovePart", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    timer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPos = UnityEngine.Vector2.FromVector3(part.localPosition.$clone());
                                        timer = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        part.localPosition = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( startPos, target, this.easeOutQuad(0, 1, timer / duration) ));
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    part.localPosition = UnityEngine.Vector3.FromVector2(target.$clone());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_ScreenCtr.MovePart end.*/

            /*BB10_ScreenCtr.Fix start.*/
            Fix: function (row, col) {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#Fix", this ); }

                this.myR = row;
                this.myC = col;

                //grid = new GameObject[row * col];
                //CreateBG(row, col);

                //float size = col + distanceEdge;

                //defaultScreen = 1920.0f / 1080.0f;
                //currentScren = (float)Screen.height / (float)Screen.width;

                //cam.orthographicSize = Mathf.Max(orthographicSizeMin, size / (2.0f * cam.aspect));

                this.FixMultiScreen();

                //ScaleToFitBg();

                //FixPattemPos();
            },
            /*BB10_ScreenCtr.Fix end.*/

            /*BB10_ScreenCtr.FixMultiScreen start.*/
            FixMultiScreen: function () {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#FixMultiScreen", this ); }

                this.defaultScreen = 1.77777779;
                var fatScreen = 1.33333337;
                var thinScreen = 2.33333325;
                this.currentScren = UnityEngine.Screen.height / UnityEngine.Screen.width;

                var screenFThin = (this.currentScren - this.defaultScreen) / (thinScreen - this.defaultScreen);
                var screenFFat = (this.currentScren - this.defaultScreen) / (fatScreen - this.defaultScreen);

                //float defaultOg = 7.9f;
                //float defaultBottom = -0f;
                //float defaultCamY = 4f;


                //1.47 // -1.22

                //if(currentScren < defaultScreen - 0.1f)
                //{
                //    orthographicSizeMin = 10.5f;
                //}

                //if (currentScren > (defaultScreen + 0.3))
                //{

                //}

                //if (currentScreen > defaultScreen + 0.1f)
                //{
                var size = this.myC + this.distanceEdge;
                this.cam.orthographicSize = UnityEngine.Mathf.Max(this.orthographicSizeMin, size / (2.0 * this.cam.aspect));

                //float camYMax = 1.9f;
                //cam.transform.position = new Vector3(4.5f, Mathf.LerpUnclamped(defaultCamY, camYMax, screenFThin), -20);

                //BG.transform.localPosition = new Vector2(0, cam.transform.position.y);

                //float bottomMax = -1.17f;
                //bottomTrans.position = new Vector2(0, Mathf.LerpUnclamped(defaultBottom, bottomMax, screenFThin));

                //}
                //else if (currentScreen < defaultScreen - 0.1f)
                //{
                //    //cs.matchWidthOrHeight = 1;

                //    float ogMax = 7.28f;
                //    cam.orthographicSize = Mathf.LerpUnclamped(defaultOg, ogMax, screenFFat) + 1f;

                //    float bottomMax = -0.24f;
                //    bottomTrans.position = new Vector2(0, Mathf.LerpUnclamped(defaultBottom, bottomMax, screenFFat));
                //}
            },
            /*BB10_ScreenCtr.FixMultiScreen end.*/

            /*BB10_ScreenCtr.CreateBG start.*/
            CreateBG: function (row, col) {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#CreateBG", this ); }

                for (var r = 0; r < row; r = (r + 1) | 0) {
                    for (var c = 0; c < col; c = (c + 1) | 0) {
                        var cell = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.BgUnit);
                        cell.transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2( c - 0.5, r - 0.5 ));
                        cell.transform.SetParent(this.parentCell);
                        this.grid[((r + Bridge.Int.mul(c, row)) | 0)] = cell;
                    }
                }
            },
            /*BB10_ScreenCtr.CreateBG end.*/

            /*BB10_ScreenCtr.StartNoAnim start.*/
            StartNoAnim: function () {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#StartNoAnim", this ); }

                //SetAlphaAll(1);
                //partTop.gameObject.SetActive(false);
                //partDown.gameObject.SetActive(false);
            },
            /*BB10_ScreenCtr.StartNoAnim end.*/

            /*BB10_ScreenCtr.StartAnim start.*/
            StartAnim: function () {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#StartAnim", this ); }

                //StartCoroutine(StartGridAnim());

                //for(int i = 0; i < 64; i++)
                //{
                //    grid[i].transform.localScale = Vector3.zero;
                //}

                //MainAudio.Main.PlaySound(TypeAudio.StartGame);

                this.StartCoroutine$1(this.Step());
            },
            /*BB10_ScreenCtr.StartAnim end.*/

            /*BB10_ScreenCtr.Step start.*/
            Step: function () {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#Step", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.gridMoving = true;

                                        //for(int i = 0; i < 8; i++)
                                        //{
                                        //    for(int j = 0; j <= i; j++)
                                        //    {
                                        //        StartCoroutine(ScaleUpUnit(i + 7 * j));
                                        //    }

                                        //    yield return new WaitForSeconds(waitStep);
                                        //}

                                        //for(int i = 0; i < 7; i++)
                                        //{
                                        //    for(int j = 6 - i; j >= 0; j--)
                                        //    {
                                        //        StartCoroutine(ScaleUpUnit(15 + i * 8 + 7 * j));
                                        //    }

                                        //    yield return new WaitForSeconds(waitStep);
                                        //}

                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.gridMoving = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_ScreenCtr.Step end.*/

            /*BB10_ScreenCtr.ScaleUpUnit start.*/
            ScaleUpUnit: function (index) {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#ScaleUpUnit", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    unit,
                    timer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    unit = this.grid[index];
                                        timer = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this.durationScaleUp ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        unit.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( UnityEngine.Mathf.LerpUnclamped(0, 1, this.acScale.value(timer / this.durationScaleUp)) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    unit.transform.localScale = new pc.Vec3( 1, 1, 1 );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_ScreenCtr.ScaleUpUnit end.*/

            /*BB10_ScreenCtr.easeOutQuad start.*/
            easeOutQuad: function (start, end, value) {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#easeOutQuad", this ); }

                value--;
                end -= start;
                return end * (value * value * value * value * value + 1) + start;
            },
            /*BB10_ScreenCtr.easeOutQuad end.*/

            /*BB10_ScreenCtr.SetAlphaPart1 start.*/
            SetAlphaPart1: function (alpha) {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#SetAlphaPart1", this ); }

                var color = new pc.Color( 1, 1, 1, alpha );
                for (var r = 0; r < this.myR; r = (r + 1) | 0) {
                    for (var c = 0; c < this.myC; c = (c + 1) | 0) {
                        this.listSprites.get([r, c]).color = color.$clone();
                    }
                }
            },
            /*BB10_ScreenCtr.SetAlphaPart1 end.*/

            /*BB10_ScreenCtr.SetAlphaAll start.*/
            SetAlphaAll: function (alpha) {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#SetAlphaAll", this ); }

                var color = new pc.Color( 1, 1, 1, alpha );
                for (var r = 0; r < this.myR; r = (r + 1) | 0) {
                    for (var c = 0; c < this.myC; c = (c + 1) | 0) {
                        this.listSprites.get([r, c]).color = color.$clone();
                    }
                }
            },
            /*BB10_ScreenCtr.SetAlphaAll end.*/

            /*BB10_ScreenCtr.FixPattemPos start.*/
            FixPattemPos: function () {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#FixPattemPos", this ); }

                if (this.currentScren > this.defaultScreen) {
                    var newY = this.defaultPattemY - (this.currentScren - this.defaultScreen) * this.F;
                    for (var i = 0; i < this.listPattemTrans.length; i = (i + 1) | 0) {
                        this.listPattemTrans[i].transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2( this.listPattemTrans[i].transform.position.x, newY ));
                    }

                    var newUIY = this.defaultPattemUIY - (this.currentScren - this.defaultScreen) * this.FUI;
                    this.topRec.anchoredPosition = new pc.Vec2( 0, newUIY );
                }
            },
            /*BB10_ScreenCtr.FixPattemPos end.*/

            /*BB10_ScreenCtr.ScaleToFitBg start.*/
            ScaleToFitBg: function () {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#ScaleToFitBg", this ); }

                var size = this.BG.GetComponent(UnityEngine.SpriteRenderer).sprite.bounds.halfExtents.$clone().scale( 2 ).$clone();

                var width = size.x;
                var height = size.y;

                var worldScreenHeight = this.cam.orthographicSize * 2.0;
                var worldScreenWidth = worldScreenHeight / UnityEngine.Screen.height * UnityEngine.Screen.width;
                this.BG.transform.localScale = new pc.Vec3( worldScreenWidth / width, worldScreenHeight / height, 1 );
            },
            /*BB10_ScreenCtr.ScaleToFitBg end.*/

            /*BB10_ScreenCtr.StartFade start.*/
            StartFade: function (obj, startPos, targetPos, enableGrid) {
if ( TRACE ) { TRACE( "BB10_ScreenCtr#StartFade", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    render,
                    startColor,
                    timer,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    obj.SetActive(true);
                                        render = obj.GetComponent(UnityEngine.SpriteRenderer);
                                        startColor = new pc.Color( 1, 1, 1, 1 );

                                        timer = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this.durationFadeIn ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        t = timer / this.durationFadeIn;
                                        obj.transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( startPos, targetPos, t ));
                                        render.color = new pc.Color( startColor.r, startColor.g, startColor.b, pc.math.lerp(this.startAlpha, 1, t) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    render.color = new pc.Color( startColor.r, startColor.g, startColor.b, 1 );
                                        obj.transform.position = UnityEngine.Vector3.FromVector2(targetPos.$clone());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_ScreenCtr.StartFade end.*/


        }
    });
    /*BB10_ScreenCtr end.*/

    /*BB10_Settings start.*/
    Bridge.define("BB10_Settings", {
        statics: {
            props: {
                GetBest: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetBest#get", this ); }

                        if (!BB10_Settings.HasKey("best")) {
                            BB10_Settings.SetBest(0);
                        }
                        return UnityEngine.PlayerPrefs.GetInt("best");
                    }
                },
                GetLevel: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetLevel#get", this ); }

                        if (!BB10_Settings.HasKey("level")) {
                            BB10_Settings.SetLevel(1);
                        }
                        return UnityEngine.PlayerPrefs.GetInt("level");
                    }
                },
                GetMaxLevel: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetMaxLevel#get", this ); }

                        if (!BB10_Settings.HasKey("maxlevel")) {
                            BB10_Settings.SetMaxLevel(1);
                        }
                        return UnityEngine.PlayerPrefs.GetInt("maxlevel");
                    }
                },
                GetDuration_Avg: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetDuration_Avg#get", this ); }

                        if (!BB10_Settings.HasKey("durationavg")) {
                            BB10_Settings.SetDuration_Avg(0);
                        }
                        return UnityEngine.PlayerPrefs.GetInt("durationavg");
                    }
                },
                GetTypeMove: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetTypeMove#get", this ); }

                        return UnityEngine.PlayerPrefs.GetInt("typemove");
                    }
                },
                GetSound: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetSound#get", this ); }

                        if (!BB10_Settings.HasKey("sound")) {
                            BB10_Settings.SetSound(1);
                        }

                        return UnityEngine.PlayerPrefs.GetInt("sound");
                    }
                },
                GetMusic: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetMusic#get", this ); }

                        if (!BB10_Settings.HasKey("music")) {
                            BB10_Settings.SetMusic(1);
                        }

                        return UnityEngine.PlayerPrefs.GetInt("music");
                    }
                },
                GetTime: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetTime#get", this ); }

                        return UnityEngine.PlayerPrefs.GetInt("time");
                    }
                },
                GetTimePlay: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetTimePlay#get", this ); }

                        if (!BB10_Settings.HasKey("timeplay")) {
                            BB10_Settings.SetTimePlay(0);
                        }
                        return UnityEngine.PlayerPrefs.GetInt("timeplay");
                    }
                },
                GetTimePlayForDuration: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetTimePlayForDuration#get", this ); }

                        if (!BB10_Settings.HasKey("timeplayduration")) {
                            BB10_Settings.SetTimePlayForDuration(0);
                        }
                        return UnityEngine.PlayerPrefs.GetInt("timeplayduration");
                    }
                },
                GetContinue: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetContinue#get", this ); }

                        if (!BB10_Settings.HasKey("continue")) {
                            BB10_Settings.SetContinue(0);
                        }
                        return UnityEngine.PlayerPrefs.GetInt("continue");
                    }
                },
                GetContinueData: {
                    get: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetContinueData#get", this ); }

                        if (!BB10_Settings.HasKey("continuedata")) {
                            BB10_Settings.SetContinueData("");
                        }
                        return UnityEngine.PlayerPrefs.GetString("continuedata");
                    }
                }
            },
            methods: {
                /*BB10_Settings.HasKey:static start.*/
                HasKey: function (key) {
if ( TRACE ) { TRACE( "BB10_Settings#HasKey", this ); }

                    return UnityEngine.PlayerPrefs.HasKey(key);
                },
                /*BB10_Settings.HasKey:static end.*/

                /*BB10_Settings.SetBest:static start.*/
                SetBest: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetBest", this ); }

                    UnityEngine.PlayerPrefs.SetInt("best", value);
                },
                /*BB10_Settings.SetBest:static end.*/

                /*BB10_Settings.SetLevel:static start.*/
                SetLevel: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetLevel", this ); }

                    UnityEngine.PlayerPrefs.SetInt("level", value);
                },
                /*BB10_Settings.SetLevel:static end.*/

                /*BB10_Settings.SetMaxLevel:static start.*/
                SetMaxLevel: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetMaxLevel", this ); }

                    UnityEngine.PlayerPrefs.SetInt("maxlevel", value);
                },
                /*BB10_Settings.SetMaxLevel:static end.*/

                /*BB10_Settings.SetDuration_Avg:static start.*/
                SetDuration_Avg: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetDuration_Avg", this ); }

                    UnityEngine.PlayerPrefs.SetInt("durationavg", value);
                },
                /*BB10_Settings.SetDuration_Avg:static end.*/

                /*BB10_Settings.SetTypeMove:static start.*/
                SetTypeMove: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetTypeMove", this ); }

                    UnityEngine.PlayerPrefs.SetInt("typemove", value);
                },
                /*BB10_Settings.SetTypeMove:static end.*/

                /*BB10_Settings.SetSound:static start.*/
                SetSound: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetSound", this ); }

                    UnityEngine.PlayerPrefs.SetInt("sound", value);
                },
                /*BB10_Settings.SetSound:static end.*/

                /*BB10_Settings.SetMusic:static start.*/
                SetMusic: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetMusic", this ); }

                    UnityEngine.PlayerPrefs.SetInt("music", value);
                },
                /*BB10_Settings.SetMusic:static end.*/

                /*BB10_Settings.SetTime:static start.*/
                SetTime: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetTime", this ); }

                    UnityEngine.PlayerPrefs.SetInt("time", value);
                },
                /*BB10_Settings.SetTime:static end.*/

                /*BB10_Settings.SetTimePlay:static start.*/
                SetTimePlay: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetTimePlay", this ); }

                    UnityEngine.PlayerPrefs.SetInt("timeplay", value);
                },
                /*BB10_Settings.SetTimePlay:static end.*/

                /*BB10_Settings.SetTimePlayForDuration:static start.*/
                SetTimePlayForDuration: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetTimePlayForDuration", this ); }

                    UnityEngine.PlayerPrefs.SetInt("timeplayduration", value);
                },
                /*BB10_Settings.SetTimePlayForDuration:static end.*/

                /*BB10_Settings.SetStar:static start.*/
                SetStar: function (value, index) {
if ( TRACE ) { TRACE( "BB10_Settings#SetStar", this ); }

                    UnityEngine.PlayerPrefs.SetInt("star" + index, value);
                },
                /*BB10_Settings.SetStar:static end.*/

                /*BB10_Settings.GetStar:static start.*/
                GetStar: function (index) {
if ( TRACE ) { TRACE( "BB10_Settings#GetStar", this ); }

                    if (!BB10_Settings.HasKey("star" + index)) {
                        BB10_Settings.SetStar(1, index);
                    }

                    return UnityEngine.PlayerPrefs.GetInt("star" + index);
                },
                /*BB10_Settings.GetStar:static end.*/

                /*BB10_Settings.SetContinue:static start.*/
                SetContinue: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetContinue", this ); }

                    UnityEngine.PlayerPrefs.SetInt("continue", value);
                },
                /*BB10_Settings.SetContinue:static end.*/

                /*BB10_Settings.SetContinueData:static start.*/
                SetContinueData: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetContinueData", this ); }

                    UnityEngine.PlayerPrefs.SetString("continuedata", value);
                },
                /*BB10_Settings.SetContinueData:static end.*/

                /*BB10_Settings.GetTimeStamp:static start.*/
                GetTimeStamp: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetTimeStamp", this ); }

                    return System.Int64.parse(UnityEngine.PlayerPrefs.GetString("time_stamp", "0"));
                },
                /*BB10_Settings.GetTimeStamp:static end.*/

                /*BB10_Settings.SetTimeStamp:static start.*/
                SetTimeStamp: function (timeStamp) {
if ( TRACE ) { TRACE( "BB10_Settings#SetTimeStamp", this ); }

                    UnityEngine.PlayerPrefs.SetString("time_stamp", Bridge.toString(timeStamp));
                },
                /*BB10_Settings.SetTimeStamp:static end.*/

                /*BB10_Settings.GetShowFanInDay:static start.*/
                GetShowFanInDay: function () {
if ( TRACE ) { TRACE( "BB10_Settings#GetShowFanInDay", this ); }

                    return UnityEngine.PlayerPrefs.GetInt("show_fan_in_day", 0);
                },
                /*BB10_Settings.GetShowFanInDay:static end.*/

                /*BB10_Settings.SetShowFanInDay:static start.*/
                SetShowFanInDay: function (value) {
if ( TRACE ) { TRACE( "BB10_Settings#SetShowFanInDay", this ); }

                    UnityEngine.PlayerPrefs.SetInt("show_fan_in_day", value);
                },
                /*BB10_Settings.SetShowFanInDay:static end.*/


            }
        }
    });
    /*BB10_Settings end.*/

    /*BB10_ShowHelpCtr start.*/
    Bridge.define("BB10_ShowHelpCtr", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            groundPrefab: null,
            listBlockDisable: null,
            listBlockActive: null
        },
        methods: {
            /*BB10_ShowHelpCtr.ShowHelp start.*/
            ShowHelp: function (listBlock, posValid) {
if ( TRACE ) { TRACE( "BB10_ShowHelpCtr#ShowHelp", this ); }

                var mainRow = listBlock.getItem(0).indexRow;
                var mainCol = listBlock.getItem(0).indexCol;

                for (var i = 0; i < listBlock.Count; i = (i + 1) | 0) {
                    var newBlock = this.GetBlock();
                    var pos = posValid.$clone().add( new pc.Vec2( ((listBlock.getItem(i).indexCol - mainCol) | 0), ((listBlock.getItem(i).indexRow - mainRow) | 0) ) );
                    newBlock.transform.position = UnityEngine.Vector3.FromVector2(pos.$clone());
                    this.listBlockActive.add(newBlock);
                }
                //        Time.timeScale = 0;
            },
            /*BB10_ShowHelpCtr.ShowHelp end.*/

            /*BB10_ShowHelpCtr.GetBlock start.*/
            GetBlock: function () {
if ( TRACE ) { TRACE( "BB10_ShowHelpCtr#GetBlock", this ); }

                var newBlock;
                if (this.listBlockDisable.Count === 0) {
                    newBlock = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.groundPrefab);
                } else {
                    newBlock = this.listBlockDisable.getItem(((this.listBlockDisable.Count - 1) | 0));
                    newBlock.SetActive(true);
                    this.listBlockDisable.removeAt(((this.listBlockDisable.Count - 1) | 0));
                }
                return newBlock;
            },
            /*BB10_ShowHelpCtr.GetBlock end.*/

            /*BB10_ShowHelpCtr.SetBlock start.*/
            SetBlock: function (block) {
if ( TRACE ) { TRACE( "BB10_ShowHelpCtr#SetBlock", this ); }

                block.SetActive(false);
                this.listBlockDisable.add(block);
            },
            /*BB10_ShowHelpCtr.SetBlock end.*/

            /*BB10_ShowHelpCtr.HideAllBlock start.*/
            HideAllBlock: function () {
if ( TRACE ) { TRACE( "BB10_ShowHelpCtr#HideAllBlock", this ); }

                if (this.listBlockActive.Count > 0) {
                    for (var i = 0; i < this.listBlockActive.Count; i = (i + 1) | 0) {
                        this.SetBlock(this.listBlockActive.getItem(i));
                    }

                    this.listBlockActive.clear();
                }
            },
            /*BB10_ShowHelpCtr.HideAllBlock end.*/


        }
    });
    /*BB10_ShowHelpCtr end.*/

    /*BB10_SpawnBlockData start.*/
    Bridge.define("BB10_SpawnBlockData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            spawnGroups: null
        }
    });
    /*BB10_SpawnBlockData end.*/

    /*BB10_Tutorial start.*/
    Bridge.define("BB10_Tutorial", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            finger: null,
            circle: null,
            durationMoveUp: 0,
            durationMoveDown: 0,
            durationScale: 0,
            durationMoveShort: 0,
            state: 0,
            grid: null,
            FingerMove: null,
            normalScale: null,
            smallScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#init", this ); }

                this.normalScale = new UnityEngine.Vector3();
                this.smallScale = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*BB10_Tutorial.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#Preload", this ); }

                if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                    this.grid = BB10_MainObjControl.Instant.grid;
                    this.finger.SetActive(false);
                    this.normalScale = new pc.Vec3( 0.8, 0.8, 1 );
                    this.smallScale = new pc.Vec3( 0.66, 0.66, 1 );
                }
            },
            /*BB10_Tutorial.Preload end.*/

            /*BB10_Tutorial.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#Show", this ); }

                this.state = BB10_Tutorial.State.Step0;
                this.finger.SetActive(false);
                this.Next();
            },
            /*BB10_Tutorial.Show end.*/

            /*BB10_Tutorial.StopFinger start.*/
            StopFinger: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#StopFinger", this ); }

                if (this.FingerMove != null) {
                    this.StopCoroutine(this.FingerMove);
                    this.finger.SetActive(false);
                }
            },
            /*BB10_Tutorial.StopFinger end.*/

            /*BB10_Tutorial.StartFinger start.*/
            StartFinger: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#StartFinger", this ); }

                if (this.FingerMove != null) {
                    this.finger.SetActive(true);
                    this.StartCoroutine$1(this.FingerMove);
                }
            },
            /*BB10_Tutorial.StartFinger end.*/

            /*BB10_Tutorial.Next start.*/
            Next: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#Next", this ); }

                if (BB10_MainState.typePlay !== BB10_MainState.TypePlay.Tutorial) {
                    UnityEngine.Debug.Log$1("Skip Tut");

                    return;
                }

                switch (this.state) {
                    case BB10_Tutorial.State.Step0: 
                        //Debug.Log("Tut step 0");
                        BB10_MainCanvasUI.mainCanvas.inGameScript.StartTut();
                        //OpenMap1();
                        this.state = BB10_Tutorial.State.Step1;
                        break;
                    case BB10_Tutorial.State.Step1: 
                        //Debug.Log("Tut step 1");
                        //StartCoroutine(WaitOpenMap2());
                        this.state = BB10_Tutorial.State.Step2;
                        break;
                    case BB10_Tutorial.State.Step2: 
                        //Debug.Log("Tut step 2");
                        //StartCoroutine(WaitOpenMap3());
                        this.state = BB10_Tutorial.State.Step3;
                        //MainStateWood.typePlay = MainStateWood.TypePlay.Normal;
                        break;
                    case BB10_Tutorial.State.Step3: 
                        //Debug.Log("Tut step 3");
                        //StartCoroutine(WaitOpenMap4());
                        this.state = BB10_Tutorial.State.Step4;
                        break;
                    case BB10_Tutorial.State.Step4: 
                        //Debug.Log("Tut step 4");
                        //StartCoroutine(WaitOpenMap5());
                        this.state = BB10_Tutorial.State.Step5;
                        break;
                    case BB10_Tutorial.State.Step5: 
                        //Debug.Log("Tut step 5");
                        // StartCoroutine(FinishMap5());
                        this.state = BB10_Tutorial.State.Step6;
                        break;
                    default: 
                        break;
                }
            },
            /*BB10_Tutorial.Next end.*/

            /*BB10_Tutorial.WaitOpenMap2 start.*/
            WaitOpenMap2: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#WaitOpenMap2", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                                            // OpenMap2();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Tutorial.WaitOpenMap2 end.*/

            /*BB10_Tutorial.WaitOpenMap3 start.*/
            WaitOpenMap3: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#WaitOpenMap3", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                                            this.OpenMap3();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Tutorial.WaitOpenMap3 end.*/

            /*BB10_Tutorial.FinishMap3 start.*/
            FinishMap3: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#FinishMap3", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.6);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Tutorial.FinishMap3 end.*/

            /*BB10_Tutorial.WaitOpenMap4 start.*/
            WaitOpenMap4: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#WaitOpenMap4", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                                            this.OpenMap4();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Tutorial.WaitOpenMap4 end.*/

            /*BB10_Tutorial.WaitOpenMap5 start.*/
            WaitOpenMap5: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#WaitOpenMap5", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                                            this.OpenMap5();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Tutorial.WaitOpenMap5 end.*/

            /*BB10_Tutorial.FinishMap5 start.*/
            FinishMap5: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#FinishMap5", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (BB10_MainState.typePlay === BB10_MainState.TypePlay.Tutorial) {
                                            // Restart
                                            BB10_MainState.typePlay = BB10_MainState.TypePlay.Normal;

                                            BB10_MainCanvasUI.Main.inGameScript.ResetScore();
                                            BB10_MainCanvasUI.Main.inGameScript.ResetBest();
                                            // BB10_MainCanvasUI.Main.inGameScript.bestInt = 0;

                                            BB10_MainObjControl.Instant.nextViewerCtr.GetNewPattems();

                                            BB10_MainCanvasUI.mainCanvas.inGameScript.FinishTut();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Tutorial.FinishMap5 end.*/

            /*BB10_Tutorial.OpenMap1 start.*/
            OpenMap1: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#OpenMap1", this ); }

                var $t;
                this.LoadMap1();
                var next = ($t = BB10_MainObjControl.Instant.nextViewerCtr.listView)[1];
                var type = Types.I1;
                var listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, UnityEngine.Vector2.FromVector3(next.transform.position), next.scale);
                next.SetPattem(listUnit, type, 0, true);
                next.state = BB10_NextViewer.State.Show;

                var startPos = UnityEngine.Vector2.FromVector3(next.transform.position.$clone());
                var targetPos = new pc.Vec2( 3, 3 );

                BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2.$ctor1(3, 2);

                BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new pc.Vec2( 2, 3 ));

                this.FingerMove = this.StartMoveFinger(startPos, targetPos);
                this.StartFinger();
            },
            /*BB10_Tutorial.OpenMap1 end.*/

            /*BB10_Tutorial.LoadMap1 start.*/
            LoadMap1: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#LoadMap1", this ); }

                for (var row = 0; row < this.grid.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.grid.numberCol; col = (col + 1) | 0) {
                        if ((col >= 2 && col <= 4) && row !== 3) {
                            this.grid.grid.set([row, col], BB10_MainObjControl.Instant.pattemCreater.CreateABlock(new pc.Vec2( col, row ), 1));

                            var indexData;

                            if (row === 6) {
                                indexData = 3;
                            } else if (row === 7 || row === 2 || row === 4) {
                                indexData = 2;
                            } else {
                                if (col === 3 && row < 4) {
                                    indexData = 1;
                                } else {
                                    indexData = 5;
                                }
                            }

                            var data = BB10_MainObjControl.Instant.colorControl.GetSpriteData(indexData);
                            this.grid.grid.get([row, col]).SetSprite(data);
                            this.grid.grid.get([row, col]).row = row;
                            this.grid.grid.get([row, col]).col = col;
                        }
                    }
                }

            },
            /*BB10_Tutorial.LoadMap1 end.*/

            /*BB10_Tutorial.OpenMap2 start.*/
            OpenMap2: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#OpenMap2", this ); }

                var $t;
                this.LoadMap2();
                var next = ($t = BB10_MainObjControl.Instant.nextViewerCtr.listView)[1];
                var type = Types.I2;
                var listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, UnityEngine.Vector2.FromVector3(next.transform.position), next.scale);
                next.SetPattem(listUnit, type, 1, true);
                //next.RotatePattemOne();
                next.rotateTime = 1;
                next.state = BB10_NextViewer.State.Show;

                var startPos = UnityEngine.Vector2.FromVector3(next.transform.position.$clone());
                var targetPos = new pc.Vec2( 4.0, 4.5 );

                BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2.$ctor1(6, 4);

                BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new pc.Vec2( 4, 6 ));

                this.FingerMove = this.StartMoveFinger(startPos, targetPos);
                this.finger.SetActive(true);
                this.StartCoroutine$1(this.FingerMove);
            },
            /*BB10_Tutorial.OpenMap2 end.*/

            /*BB10_Tutorial.LoadMap2 start.*/
            LoadMap2: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#LoadMap2", this ); }

                for (var row = 0; row < this.grid.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.grid.numberCol; col = (col + 1) | 0) {
                        if ((row >= 3 && row <= 6) && col !== 4) {
                            this.grid.grid.set([row, col], BB10_MainObjControl.Instant.pattemCreater.CreateABlock(new pc.Vec2( col, row ), 1));

                            var indexData;

                            if (col < 5) {
                                indexData = 4;
                            } else {
                                if (row === 6) {
                                    indexData = 3;
                                } else if (row === 7 || row === 7 || row === 4) {
                                    indexData = 2;
                                } else {
                                    if (col === 1 && row < 2) {
                                        indexData = 1;
                                    } else {
                                        indexData = 5;
                                    }
                                }
                            }

                            var data = BB10_MainObjControl.Instant.colorControl.GetSpriteData(indexData);
                            this.grid.grid.get([row, col]).SetSprite(data);
                            this.grid.grid.get([row, col]).row = row;
                            this.grid.grid.get([row, col]).col = col;
                        }
                    }
                }

            },
            /*BB10_Tutorial.LoadMap2 end.*/

            /*BB10_Tutorial.OpenMap3 start.*/
            OpenMap3: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#OpenMap3", this ); }

                var $t;
                this.LoadMap3();

                var next = ($t = BB10_MainObjControl.Instant.nextViewerCtr.listView)[0];
                var type = Types.I1;
                var listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, UnityEngine.Vector2.FromVector3(next.transform.position), next.scale);
                next.SetPattem(listUnit, type, 0, true);
                next.state = BB10_NextViewer.State.Show;

                var startPos = UnityEngine.Vector2.FromVector3(next.transform.position.$clone());
                var targetPos = new pc.Vec2( 1.0, 4.0 );

                BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2.$ctor1(4, 0);

                BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new pc.Vec2( 0, 4 ));

                this.FingerMove = this.StartMoveFinger(startPos, targetPos);
                this.finger.SetActive(true);
                this.StartCoroutine$1(this.FingerMove);

                //lastTut = true;
            },
            /*BB10_Tutorial.OpenMap3 end.*/

            /*BB10_Tutorial.OpenMap4 start.*/
            OpenMap4: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#OpenMap4", this ); }

                var $t;
                var next = ($t = BB10_MainObjControl.Instant.nextViewerCtr.listView)[2];
                var type = Types.I2;
                var listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, UnityEngine.Vector2.FromVector3(next.transform.position), next.scale);
                next.SetPattem(listUnit, type, 0, true);
                next.state = BB10_NextViewer.State.Show;

                var startPos = UnityEngine.Vector2.FromVector3(next.transform.position.$clone());
                var targetPos = new pc.Vec2( 7.5, 4.0 );

                BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2.$ctor1(4, 6);

                BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new pc.Vec2( 6, 4 ));

                this.FingerMove = this.StartMoveFinger(startPos, targetPos);
                this.finger.SetActive(true);
                this.StartCoroutine$1(this.FingerMove);
            },
            /*BB10_Tutorial.OpenMap4 end.*/

            /*BB10_Tutorial.OpenMap5 start.*/
            OpenMap5: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#OpenMap5", this ); }

                var $t;
                var next = ($t = BB10_MainObjControl.Instant.nextViewerCtr.listView)[1];
                var type = Types.O2;
                var listUnit = BB10_MainObjControl.Instant.pattemCreater.CreatePattem(type, UnityEngine.Vector2.FromVector3(next.transform.position), next.scale);
                next.SetPattem(listUnit, type, 0, true);
                next.state = BB10_NextViewer.State.Show;

                var startPos = UnityEngine.Vector2.FromVector3(next.transform.position.$clone());
                var targetPos = new pc.Vec2( 4.0, 4.0 );

                BB10_MainObjControl.Instant.planeViewCrt.cellTutAcepted = new Vec2.$ctor1(3, 3);

                BB10_MainObjControl.Instant.helpCtr.ShowHelp(listUnit, new pc.Vec2( 3, 3 ));

                this.FingerMove = this.StartMoveFinger(startPos, targetPos);
                this.finger.SetActive(true);
                this.StartCoroutine$1(this.FingerMove);
            },
            /*BB10_Tutorial.OpenMap5 end.*/

            /*BB10_Tutorial.LoadMap3 start.*/
            LoadMap3: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#LoadMap3", this ); }

                for (var row = 0; row < this.grid.numberRow; row = (row + 1) | 0) {
                    for (var col = 0; col < this.grid.numberCol; col = (col + 1) | 0) {
                        if ((((row === 3 || row === 4 || row === 5)) || (col === 3 || col === 4 || col === 5)) && !(row === 3 && col === 3) && !(row === 4 && col === 4) && !(row === 4 && col === 3) && !(row === 3 && col === 4) && !(row === 3 && col === 5) && !(row === 4 && col === 5) && !(row === 5 && col === 5) && !(row === 5 && col === 4) && !(row === 5 && col === 3) && (row !== 4)) {
                            this.grid.grid.set([row, col], BB10_MainObjControl.Instant.pattemCreater.CreateABlock(new pc.Vec2( col, row ), 1));

                            var indexData;

                            if (row === 5) {
                                indexData = 3;
                            } else if (col === 5 && row < 2) {
                                indexData = 1;
                            } else if (row === 1 || row === 5 || row === 2) {
                                indexData = 2;
                            } else {
                                if (col === 5 && row < 6) {
                                    indexData = 1;
                                } else {
                                    indexData = 5;
                                }
                            }

                            var data = BB10_MainObjControl.Instant.colorControl.GetSpriteData(indexData);
                            this.grid.grid.get([row, col]).SetSprite(data);
                            this.grid.grid.get([row, col]).row = row;
                            this.grid.grid.get([row, col]).col = col;
                        }
                    }
                }

            },
            /*BB10_Tutorial.LoadMap3 end.*/

            /*BB10_Tutorial.SkipTut start.*/
            SkipTut: function () {
if ( TRACE ) { TRACE( "BB10_Tutorial#SkipTut", this ); }

                BB10_MainState.typePlay = BB10_MainState.TypePlay.Normal;

                this.finger.SetActive(false);

                BB10_MainCanvasUI.Main.inGameScript.ResetScore();
                BB10_MainCanvasUI.Main.inGameScript.ResetBest();
                //BB10_MainCanvasUI.Main.inGameScript.bestInt = 0;

                //BK99_MainObjControl.Instant.nextViewerCtr.GetNewPattems();
            },
            /*BB10_Tutorial.SkipTut end.*/

            /*BB10_Tutorial.StartMoveFinger start.*/
            StartMoveFinger: function (startPos, targetPos) {
if ( TRACE ) { TRACE( "BB10_Tutorial#StartMoveFinger", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    preStart,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    preStart = startPos.$clone().add( new pc.Vec2( 0.5, -0.5 ) );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 27;
                                        continue;
                                }
                                case 2: {
                                    timer = 0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( timer < this.durationMoveShort ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.finger.transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( preStart, startPos, timer / this.durationMoveShort ));
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    this.finger.transform.position = UnityEngine.Vector3.FromVector2(startPos.$clone());
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    timer = 0;
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    if ( timer < this.durationScale ) {
                                            $step = 9;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 9: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.finger.transform.localScale = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( UnityEngine.Vector2.FromVector3(this.normalScale), UnityEngine.Vector2.FromVector3(this.smallScale), timer / this.durationScale ));
                                        $enumerator.current = null;
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    
                                        $step = 8;
                                        continue;
                                }
                                case 11: {
                                    this.finger.transform.localScale = this.smallScale.$clone();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 12;
                                        return true;
                                }
                                case 12: {
                                    timer = 0;
                                    $step = 13;
                                    continue;
                                }
                                case 13: {
                                    if ( timer < this.durationMoveUp ) {
                                            $step = 14;
                                            continue;
                                        } 
                                        $step = 16;
                                        continue;
                                }
                                case 14: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.finger.transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( startPos, targetPos, timer / this.durationMoveUp ));
                                        $enumerator.current = null;
                                        $step = 15;
                                        return true;
                                }
                                case 15: {
                                    
                                        $step = 13;
                                        continue;
                                }
                                case 16: {
                                    this.finger.transform.position = UnityEngine.Vector3.FromVector2(targetPos.$clone());

                                        timer = 0;
                                    $step = 17;
                                    continue;
                                }
                                case 17: {
                                    if ( timer < this.durationScale ) {
                                            $step = 18;
                                            continue;
                                        } 
                                        $step = 20;
                                        continue;
                                }
                                case 18: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.finger.transform.localScale = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( UnityEngine.Vector2.FromVector3(this.normalScale), UnityEngine.Vector2.FromVector3(this.smallScale), 1 - timer / this.durationScale ));
                                        $enumerator.current = null;
                                        $step = 19;
                                        return true;
                                }
                                case 19: {
                                    
                                        $step = 17;
                                        continue;
                                }
                                case 20: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 21;
                                        return true;
                                }
                                case 21: {
                                    timer = 0;
                                    $step = 22;
                                    continue;
                                }
                                case 22: {
                                    if ( timer < this.durationMoveDown ) {
                                            $step = 23;
                                            continue;
                                        } 
                                        $step = 25;
                                        continue;
                                }
                                case 23: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.finger.transform.position = UnityEngine.Vector3.FromVector2(new pc.Vec2().lerp( preStart, targetPos, 1 - timer / this.durationMoveDown ));
                                        $enumerator.current = null;
                                        $step = 24;
                                        return true;
                                }
                                case 24: {
                                    
                                        $step = 22;
                                        continue;
                                }
                                case 25: {
                                    this.finger.transform.position = UnityEngine.Vector3.FromVector2(preStart.$clone());
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.3);
                                        $step = 26;
                                        return true;
                                }
                                case 26: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 27: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BB10_Tutorial.StartMoveFinger end.*/


        }
    });
    /*BB10_Tutorial end.*/

    /*BB10_Tutorial+State start.*/
    Bridge.define("BB10_Tutorial.State", {
        $kind: 1006,
        statics: {
            fields: {
                Step0: 0,
                Step1: 1,
                Step2: 2,
                Step3: 3,
                Step4: 4,
                Step5: 5,
                Step6: 6
            }
        }
    });
    /*BB10_Tutorial+State end.*/

    /*BB10_TypePattem start.*/
    Bridge.define("BB10_TypePattem", {
        statics: {
            fields: {
                type: 0,
                ListEasy: null,
                ListMedium: null,
                ListHard: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BB10_TypePattem#init", this ); }

                    var $t;
                    this.ListEasy = System.Array.init([($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.O0, $t.weight = 8, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.O1, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.O2, $t.weight = 4, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I1, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I2, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I3, $t.weight = 5, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.L0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.L1, $t.weight = 7, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.T0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.LB0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.Z0, $t.weight = 0, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.T1, $t.weight = 0, $t)], BB10_TypePattem.Config);
                    this.ListMedium = System.Array.init([($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.O0, $t.weight = 4, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.O1, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.O2, $t.weight = 6, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I1, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I2, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I3, $t.weight = 7, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.L0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.L1, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.T0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.LB0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.Z0, $t.weight = 8, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.T1, $t.weight = 4, $t)], BB10_TypePattem.Config);
                    this.ListHard = System.Array.init([($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.O0, $t.weight = 2, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.O1, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.O2, $t.weight = 8, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I1, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I2, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.I3, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.L0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.L1, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.T0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.LB0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.Z0, $t.weight = 10, $t), ($t = new BB10_TypePattem.Config(), $t.type = BB10_TypePattem.Type.T1, $t.weight = 5, $t)], BB10_TypePattem.Config);
                }
            },
            methods: {
                /*BB10_TypePattem.RandomWeight:static start.*/
                RandomWeight: function (list) {
if ( TRACE ) { TRACE( "BB10_TypePattem#RandomWeight", this ); }

                    var totalweight = 0;
                    for (var i = 0; i < list.length; i = (i + 1) | 0) {
                        totalweight = (totalweight + list[i].weight) | 0;
                    }

                    var choice = UnityEngine.Random.Range(0, totalweight);
                    var sum = 0;

                    for (var i1 = 0; i1 < list.length; i1 = (i1 + 1) | 0) {
                        if (((list[i1].weight + sum) | 0) >= choice) {
                            return list[i1].type;
                        }

                        sum = (sum + list[i1].weight) | 0;
                    }

                    return list[0].type;
                },
                /*BB10_TypePattem.RandomWeight:static end.*/


            }
        }
    });
    /*BB10_TypePattem end.*/

    /*BB10_TypePattem+Config start.*/
    Bridge.define("BB10_TypePattem.Config", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "BB10_TypePattem.Config#getDefaultValue", this ); }
 return new BB10_TypePattem.Config(); }
            }
        },
        fields: {
            type: 0,
            weight: 0
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "BB10_TypePattem.Config#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "BB10_TypePattem.Config#getHashCode", this ); }

                var h = Bridge.addHash([1718539948, this.type, this.weight]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "BB10_TypePattem.Config#equals", this ); }

                if (!Bridge.is(o, BB10_TypePattem.Config)) {
                    return false;
                }
                return Bridge.equals(this.type, o.type) && Bridge.equals(this.weight, o.weight);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "BB10_TypePattem.Config#$clone", this ); }

                var s = to || new BB10_TypePattem.Config();
                s.type = this.type;
                s.weight = this.weight;
                return s;
            }
        }
    });
    /*BB10_TypePattem+Config end.*/

    /*BB10_TypePattem+Level start.*/
    Bridge.define("BB10_TypePattem.Level", {
        $kind: 1006,
        statics: {
            fields: {
                Easy: 0,
                Medium: 1,
                Hard: 2
            }
        }
    });
    /*BB10_TypePattem+Level end.*/

    /*BB10_TypePattem+Type start.*/
    Bridge.define("BB10_TypePattem.Type", {
        $kind: 1006,
        statics: {
            fields: {
                O0: 0,
                O1: 1,
                O2: 2,
                I0: 3,
                I1: 4,
                I2: 5,
                I3: 6,
                L0: 7,
                L1: 8,
                T0: 9,
                T1: 10,
                LB0: 11,
                Z0: 12
            }
        }
    });
    /*BB10_TypePattem+Type end.*/

    /*BoomControl start.*/
    Bridge.define("BoomControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            boomPrefab: null,
            listBoom: null
        },
        methods: {
            /*BoomControl.GetBoom start.*/
            GetBoom: function () {
if ( TRACE ) { TRACE( "BoomControl#GetBoom", this ); }

                var newBoom;
                if (this.listBoom.Count === 0) {
                    newBoom = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.boomPrefab);
                } else {
                    newBoom = this.listBoom.getItem(((this.listBoom.Count - 1) | 0));
                    newBoom.SetActive(true);
                    this.listBoom.removeAt(((this.listBoom.Count - 1) | 0));
                }
                return newBoom;
            },
            /*BoomControl.GetBoom end.*/

            /*BoomControl.SetBoom start.*/
            SetBoom: function (boom) {
if ( TRACE ) { TRACE( "BoomControl#SetBoom", this ); }

                boom.SetActive(false);
                this.listBoom.add(boom);
            },
            /*BoomControl.SetBoom end.*/

            /*BoomControl.ShowBoom start.*/
            ShowBoom: function (pos, data) {
if ( TRACE ) { TRACE( "BoomControl#ShowBoom", this ); }

                var bom = this.GetBoom();
                //        bom.GetComponent<OrangeMest>().Boom(pos, data);
            },
            /*BoomControl.ShowBoom end.*/


        }
    });
    /*BoomControl end.*/

    /*Bricks_PattemTableObj start.*/
    Bridge.define("Bricks_PattemTableObj", {
        inherits: [UnityEngine.ScriptableObject],
        statics: {
            fields: {
                count: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Bricks_PattemTableObj#init", this ); }

                    this.count = 0;
                }
            }
        },
        fields: {
            listPattemsInfor: null,
            levelData: null
        },
        methods: {
            /*Bricks_PattemTableObj.CheckException start.*/
            CheckException: function () {
if ( TRACE ) { TRACE( "Bricks_PattemTableObj#CheckException", this ); }

                Bricks_PattemTableObj.count = (Bricks_PattemTableObj.count + 1) | 0;
                return false;
            },
            /*Bricks_PattemTableObj.CheckException end.*/

            /*Bricks_PattemTableObj.GetTypeException start.*/
            GetTypeException: function () {
if ( TRACE ) { TRACE( "Bricks_PattemTableObj#GetTypeException", this ); }

                //Debug.Log("GetTypeException");

                var rand = UnityEngine.Random.Range(0, 6);

                switch (rand) {
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
            },
            /*Bricks_PattemTableObj.GetTypeException end.*/

            /*Bricks_PattemTableObj.GetFixedRandomType start.*/
            GetFixedRandomType: function (score) {
if ( TRACE ) { TRACE( "Bricks_PattemTableObj#GetFixedRandomType", this ); }

                if (this.CheckException()) {
                    return this.GetTypeException();
                }

                for (var i = 0; i < this.levelData.length; i = (i + 1) | 0) {
                    if (score < this.levelData[i].Score) {
                        return this.listPattemsInfor[this.RandomWeight(this.levelData[i].weight)].type;
                    }
                }

                return this.listPattemsInfor[this.RandomWeight(this.levelData[((this.levelData.length - 1) | 0)].weight)].type;
            },
            /*Bricks_PattemTableObj.GetFixedRandomType end.*/

            /*Bricks_PattemTableObj.RandomWeight start.*/
            RandomWeight: function (list) {
if ( TRACE ) { TRACE( "Bricks_PattemTableObj#RandomWeight", this ); }

                var totalweight = 0;
                for (var i = 0; i < list.length; i = (i + 1) | 0) {
                    totalweight = (totalweight + list[i]) | 0;
                }

                var choice = UnityEngine.Random.Range(0, totalweight);
                var sum = 0;

                for (var i1 = 0; i1 < list.length; i1 = (i1 + 1) | 0) {
                    if (((list[i1] + sum) | 0) >= choice) {
                        return i1;
                    }

                    sum = (sum + list[i1]) | 0;
                }

                return 0;
            },
            /*Bricks_PattemTableObj.RandomWeight end.*/


        }
    });
    /*Bricks_PattemTableObj end.*/

    /*CameraResponsive start.*/
    Bridge.define("CameraResponsive", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            orthoSizeV: 0,
            orthoSizeVTall: 0,
            orthoSizeH: 0,
            orthoSizeTab: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraResponsive#init", this ); }

                this.orthoSizeV = 0;
                this.orthoSizeVTall = 0;
                this.orthoSizeH = 0;
                this.orthoSizeTab = 0;
            }
        },
        methods: {
            /*CameraResponsive.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CameraResponsive#Start", this ); }

                this.ResizeScreen(SingletonBase$1(ResponsiveManager).Instance.screenType);
                GameEvent.OnResizeScreen.AddListener(Bridge.fn.cacheBind(this, this.ResizeScreen));
            },
            /*CameraResponsive.Start end.*/

            /*CameraResponsive.ResizeScreen start.*/
            ResizeScreen: function (screenType) {
if ( TRACE ) { TRACE( "CameraResponsive#ResizeScreen", this ); }

                var mainCamera = UnityEngine.Camera.main;
                if (UnityEngine.Component.op_Equality(mainCamera, null)) {
                    return;
                }

                switch (screenType) {
                    case ScreenType.Vertical: 
                        mainCamera.orthographicSize = this.orthoSizeV;
                        break;
                    case ScreenType.VerticalTall: 
                        mainCamera.orthographicSize = this.orthoSizeVTall;
                        break;
                    case ScreenType.Tablet: 
                        mainCamera.orthographicSize = this.orthoSizeTab;
                        break;
                    case ScreenType.Horizontal: 
                        mainCamera.orthographicSize = this.orthoSizeH;
                        break;
                }
            },
            /*CameraResponsive.ResizeScreen end.*/

            /*CameraResponsive.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "CameraResponsive#OnDestroy", this ); }

                GameEvent.OnResizeScreen.RemoveListener(Bridge.fn.cacheBind(this, this.ResizeScreen));
            },
            /*CameraResponsive.OnDestroy end.*/


        }
    });
    /*CameraResponsive end.*/

    /*CameraScript start.*/
    Bridge.define("CameraScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cam: null
        }
    });
    /*CameraScript end.*/

    /*CompleteBlocks start.*/
    Bridge.define("CompleteBlocks", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spriteRenderer: null,
            listTextAndSound: null,
            audioSource: null
        },
        methods: {
            /*CompleteBlocks.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CompleteBlocks#Awake", this ); }

                this.audioSource = this.GetComponent(UnityEngine.AudioSource);
            },
            /*CompleteBlocks.Awake end.*/

            /*CompleteBlocks.PlayRandom start.*/
            PlayRandom: function () {
if ( TRACE ) { TRACE( "CompleteBlocks#PlayRandom", this ); }

                if (this.listTextAndSound == null || this.listTextAndSound.Count === 0) {
                    return;
                }
                var rand = UnityEngine.Random.Range(0, this.listTextAndSound.Count);
                var data = this.listTextAndSound.getItem(rand);
                this.spriteRenderer.sprite = data.sprite;
                this.audioSource.PlayOneShot(data.audioClip);
            },
            /*CompleteBlocks.PlayRandom end.*/


        }
    });
    /*CompleteBlocks end.*/

    /*CTAButton start.*/
    Bridge.define("CTAButton", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*CTAButton.GoToStore start.*/
            GoToStore: function () {
if ( TRACE ) { TRACE( "CTAButton#GoToStore", this ); }

                //GameplayController.Instance.GoToStore();
            },
            /*CTAButton.GoToStore end.*/


        }
    });
    /*CTAButton end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Exit start.*/
    Bridge.define("Exit", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            duration: 0
        },
        methods: {
            /*Exit.Reset start.*/
            Reset: function (isActive) {
if ( TRACE ) { TRACE( "Exit#Reset", this ); }

                this.SetActive(isActive);
            },
            /*Exit.Reset end.*/

            /*Exit.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "Exit#SetActive", this ); }

                this.gameObject.SetActive(isActive);
            },
            /*Exit.SetActive end.*/

            /*Exit.StartWait start.*/
            StartWait: function (isHome) {
if ( TRACE ) { TRACE( "Exit#StartWait", this ); }

                this.SetActive(true);
                this.StartCoroutine$1(this.Wait(isHome));
            },
            /*Exit.StartWait end.*/

            /*Exit.Wait start.*/
            Wait: function (isHome) {
if ( TRACE ) { TRACE( "Exit#Wait", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    BB10_MainState.SetState(BB10_MainState.State.Exit);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.duration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (isHome) {
                                            BB10_MainState.SetState(BB10_MainState.State.Home);
                                        } else {
                                            BB10_MainState.SetState(BB10_MainState.State.GameOver);
                                        }
                                        this.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Exit.Wait end.*/


        }
    });
    /*Exit end.*/

    /*GameDefine start.*/
    Bridge.define("GameDefine", {
        statics: {
            fields: {
                posRight: null,
                posLeft: null,
                posTop: null,
                posCenter: null,
                pikachuNormalScale: 0,
                pikachuYScale: 0,
                pageID: null,
                pageName: null,
                startRow: 0,
                startCol: 0,
                selectingLayer: 0,
                freeLayer: 0,
                pattemDarkAlpha: 0,
                pattemLightAlpha: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "GameDefine#init", this ); }

                    this.posRight = new UnityEngine.Vector2();
                    this.posLeft = new UnityEngine.Vector2();
                    this.posTop = new UnityEngine.Vector2();
                    this.posCenter = new UnityEngine.Vector2();
                    this.posRight = new pc.Vec2( 2000, 0 );
                    this.posLeft = new pc.Vec2( -2000, 0 );
                    this.posTop = new pc.Vec2( 0, 2000 );
                    this.posCenter = new pc.Vec2( 0, 0 );
                    this.pikachuNormalScale = 0.48;
                    this.pikachuYScale = 0.15;
                    this.pageID = "1384190174944235";
                    this.pageName = "Connect Animal Game";
                    this.startRow = 16;
                    this.startCol = 4;
                    this.selectingLayer = 5;
                    this.freeLayer = 0;
                    this.pattemDarkAlpha = 0.38;
                    this.pattemLightAlpha = 1;
                }
            },
            methods: {
                /*GameDefine.GetScore:static start.*/
                GetScore: function (numberLine) {
if ( TRACE ) { TRACE( "GameDefine#GetScore", this ); }

                    return 1000;
                },
                /*GameDefine.GetScore:static end.*/


            }
        }
    });
    /*GameDefine end.*/

    /*GameEvent start.*/
    Bridge.define("GameEvent", {
        statics: {
            fields: {
                _onResizeScreen: null
            },
            props: {
                OnResizeScreen: {
                    get: function () {
if ( TRACE ) { TRACE( "GameEvent#OnResizeScreen#get", this ); }

                        return GameEvent._onResizeScreen;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "GameEvent#init", this ); }

                    this._onResizeScreen = new (UnityEngine.Events.UnityEvent$1(ScreenType))();
                }
            }
        }
    });
    /*GameEvent end.*/

    /*SingletonBase$1 start.*/
    Bridge.define("SingletonBase$1", function (T) { return {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: Bridge.getDefaultValue(T)
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "SingletonBase$1#Instance#get", this ); }

                        if (Bridge.rValue(SingletonBase$1(T).instance) == null) {
                            SingletonBase$1(T).instance = Bridge.as(UnityEngine.Object.FindObjectOfType$1(T), T);
                            if (Bridge.rValue(SingletonBase$1(T).instance) == null) {
                                UnityEngine.Debug.LogError$2("SingletoneBase<T>: Could not found GameObject of type " + (Bridge.Reflection.getTypeName(T) || ""));
                            }
                        }
                        return Bridge.rValue(SingletonBase$1(T).instance);
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SingletonBase$1#init", this ); }

                    this.instance = Bridge.getDefaultValue(T);
                }
            }
        }
    }; });
    /*SingletonBase$1 end.*/

    /*GridSaveData start.*/
    Bridge.define("GridSaveData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            gridData: null,
            gridSprites: null
        }
    });
    /*GridSaveData end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*InputAudio start.*/
    Bridge.define("InputAudio", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "InputAudio#getDefaultValue", this ); }
 return new InputAudio(); }
            }
        },
        fields: {
            type: 0,
            audioClip: null,
            loop: false,
            volume: 0
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "InputAudio#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "InputAudio#getHashCode", this ); }

                var h = Bridge.addHash([3655737126, this.type, this.audioClip, this.loop, this.volume]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "InputAudio#equals", this ); }

                if (!Bridge.is(o, InputAudio)) {
                    return false;
                }
                return Bridge.equals(this.type, o.type) && Bridge.equals(this.audioClip, o.audioClip) && Bridge.equals(this.loop, o.loop) && Bridge.equals(this.volume, o.volume);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "InputAudio#$clone", this ); }

                var s = to || new InputAudio();
                s.type = this.type;
                s.audioClip = this.audioClip;
                s.loop = this.loop;
                s.volume = this.volume;
                return s;
            }
        }
    });
    /*InputAudio end.*/

    /*ItemUnit start.*/
    Bridge.define("ItemUnit", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
        fields: {
            index: 0,
            star1: null,
            star2: null,
            star3: null,
            numberText: null,
            lockObj: null,
            openObj: null,
            scaleZoom: null,
            timeZoomOut: 0,
            timeZoomIn: 0,
            running: false
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ItemUnit#init", this ); }

                this.scaleZoom = new UnityEngine.Vector3();
                this.scaleZoom = new pc.Vec3( 1.5, 1.5, 1.5 );
                this.timeZoomOut = 0.1;
                this.timeZoomIn = 0.2;
                this.running = false;
            }
        },
        methods: {
            /*ItemUnit.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "ItemUnit#OnEnable", this ); }

                this.running = false;
                this.transform.localScale = new pc.Vec3( 1, 1, 1 );
            },
            /*ItemUnit.OnEnable end.*/

            /*ItemUnit.SetLock start.*/
            SetLock: function () {
if ( TRACE ) { TRACE( "ItemUnit#SetLock", this ); }

                this.lockObj.SetActive(true);
                this.openObj.SetActive(false);

                this.star1.SetActiveObj(false);
                this.star2.SetActiveObj(false);
                this.star3.SetActiveObj(false);
            },
            /*ItemUnit.SetLock end.*/

            /*ItemUnit.SetOpen start.*/
            SetOpen: function (maxLv) {
if ( TRACE ) { TRACE( "ItemUnit#SetOpen", this ); }

                this.lockObj.SetActive(false);
                this.openObj.SetActive(true);
                this.numberText.text = Bridge.toString(this.index);

                if (this.index === maxLv) {
                    this.star1.SetActiveObj(false);
                    this.star2.SetActiveObj(false);
                    this.star3.SetActiveObj(false);
                } else {
                    this.star1.SetActive(true);
                    this.star2.SetActive(true);
                    this.star3.SetActive(true);

                    var numberStar = BB10_Settings.GetStar(this.index);
                    if (numberStar === 1) {
                        this.star1.SetActive(true);
                        this.star2.SetActive(false);
                        this.star3.SetActive(false);
                    } else if (numberStar === 2) {
                        this.star1.SetActive(true);
                        this.star2.SetActive(true);
                        this.star3.SetActive(false);
                    } else {
                        this.star1.SetActive(true);
                        this.star2.SetActive(true);
                        this.star3.SetActive(true);
                    }

                }
            },
            /*ItemUnit.SetOpen end.*/

            /*ItemUnit.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "ItemUnit#OnPointerClick", this ); }

                //        if (!running && !MainCanvas.Main.selectLevelScript.isSelected)
                //        {
                //            StartCoroutine(ButtonClick());
                //        }
            },
            /*ItemUnit.OnPointerClick end.*/

            /*ItemUnit.ButtonClick start.*/
            ButtonClick: function () {
if ( TRACE ) { TRACE( "ItemUnit#ButtonClick", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    currentTime,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    //        MainCanvas.Main.selectLevelScript.isSelected = true;
                                        this.running = true;

                                        currentTime = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( currentTime < this.timeZoomOut ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.transform.localScale = new pc.Vec3().lerp( new pc.Vec3( 1, 1, 1 ), this.scaleZoom, currentTime / this.timeZoomOut );
                                        currentTime += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    //        MainCanvas.Main.startGameScript.StartPlayLevel(index);
                                        currentTime = 0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( currentTime < this.timeZoomIn ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    this.transform.localScale = new pc.Vec3().lerp( this.scaleZoom, new pc.Vec3( 1, 1, 1 ), currentTime / this.timeZoomIn );
                                        currentTime += UnityEngine.Time.unscaledDeltaTime;
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.3);
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    this.running = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ItemUnit.ButtonClick end.*/


        }
    });
    /*ItemUnit end.*/

    /*Level start.*/
    Bridge.define("Level", {
        $kind: 6,
        statics: {
            fields: {
                Level_1: 0,
                Level_2: 1,
                Level_3: 2,
                Level_4: 3,
                Level_5: 4,
                Level_6: 5,
                Level_7: 6,
                Level_8: 7,
                Level_9: 8,
                Level_10: 9,
                Level_11: 10,
                Level_12: 11,
                Level_13: 12,
                Level_14: 13,
                Level_15: 14,
                Level_16: 15
            }
        }
    });
    /*Level end.*/

    /*LevelData start.*/
    Bridge.define("LevelData", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "LevelData#getDefaultValue", this ); }
 return new LevelData(); }
            }
        },
        fields: {
            level: 0,
            Score: 0,
            weight: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "LevelData#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "LevelData#getHashCode", this ); }

                var h = Bridge.addHash([3654789657, this.level, this.Score, this.weight]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "LevelData#equals", this ); }

                if (!Bridge.is(o, LevelData)) {
                    return false;
                }
                return Bridge.equals(this.level, o.level) && Bridge.equals(this.Score, o.Score) && Bridge.equals(this.weight, o.weight);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "LevelData#$clone", this ); }

                var s = to || new LevelData();
                s.level = this.level;
                s.Score = this.Score;
                s.weight = this.weight;
                return s;
            }
        }
    });
    /*LevelData end.*/

    /*MainAudio start.*/
    Bridge.define("MainAudio", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                main: null
            },
            props: {
                Main: {
                    get: function () {
if ( TRACE ) { TRACE( "MainAudio#Main#get", this ); }

                        return MainAudio.main;
                    }
                }
            }
        },
        fields: {
            listInputAudio: null,
            sound: null,
            audioDict: null,
            isMute: false,
            bgIndex: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MainAudio#init", this ); }

                this.audioDict = new (System.Collections.Generic.Dictionary$2(TypeAudio,UnityEngine.AudioSource)).ctor();
            }
        },
        methods: {
            /*MainAudio.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MainAudio#Awake", this ); }

                this.AddComponienAudioSources();
                //SetBGMusic();
                MainAudio.main = this;
            },
            /*MainAudio.Awake end.*/

            /*MainAudio.SetBGMusic start.*/
            SetBGMusic: function () {
if ( TRACE ) { TRACE( "MainAudio#SetBGMusic", this ); }

                if (this.audioDict.containsKey(TypeAudio.SoundBG)) {
                    this.audioDict.getItem(TypeAudio.SoundBG).loop = true;
                    this.PlaySound(TypeAudio.SoundBG);
                }
            },
            /*MainAudio.SetBGMusic end.*/

            /*MainAudio.AddComponienAudioSources start.*/
            AddComponienAudioSources: function () {
if ( TRACE ) { TRACE( "MainAudio#AddComponienAudioSources", this ); }

                this.sound = System.Array.init(this.listInputAudio.length, null, UnityEngine.AudioSource);
                for (var i = 0; i < this.listInputAudio.length; i = (i + 1) | 0) {
                    var thisAudio = this.gameObject.AddComponent(UnityEngine.AudioSource);
                    this.sound[i] = thisAudio;
                    thisAudio.playOnAwake = false;
                    thisAudio.clip = this.listInputAudio[i].audioClip;
                    thisAudio.volume = this.listInputAudio[i].volume;
                    if (this.listInputAudio[i].loop) {
                        thisAudio.loop = true;
                    }
                    this.audioDict.add(this.listInputAudio[i].type, thisAudio);
                }
            },
            /*MainAudio.AddComponienAudioSources end.*/

            /*MainAudio.StopySound start.*/
            StopySound: function (type) {
if ( TRACE ) { TRACE( "MainAudio#StopySound", this ); }

                if (this.audioDict.containsKey(type)) {
                    this.audioDict.getItem(type).Stop();
                }
            },
            /*MainAudio.StopySound end.*/

            /*MainAudio.PlaySound start.*/
            PlaySound: function (type) {
if ( TRACE ) { TRACE( "MainAudio#PlaySound", this ); }

                if (!this.isMute && this.audioDict.containsKey(type)) {
                    this.audioDict.getItem(type).Play();
                } else {
                    UnityEngine.Debug.LogWarning$1("Audio not found: " + System.Enum.toString(TypeAudio, type));
                }
            },
            /*MainAudio.PlaySound end.*/

            /*MainAudio.MuteSound start.*/
            MuteSound: function (bol) {
if ( TRACE ) { TRACE( "MainAudio#MuteSound", this ); }

                if (!bol) {
                    UnityEngine.AudioListener.volume = 1;
                } else {
                    UnityEngine.AudioListener.volume = 0;
                }
            },
            /*MainAudio.MuteSound end.*/


        }
    });
    /*MainAudio end.*/

    /*PattemInfor start.*/
    Bridge.define("PattemInfor", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "PattemInfor#getDefaultValue", this ); }
 return new PattemInfor(); }
            }
        },
        fields: {
            type: 0,
            grid: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "PattemInfor#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "PattemInfor#getHashCode", this ); }

                var h = Bridge.addHash([3811589659, this.type, this.grid]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "PattemInfor#equals", this ); }

                if (!Bridge.is(o, PattemInfor)) {
                    return false;
                }
                return Bridge.equals(this.type, o.type) && Bridge.equals(this.grid, o.grid);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "PattemInfor#$clone", this ); }

                var s = to || new PattemInfor();
                s.type = this.type;
                s.grid = this.grid;
                return s;
            }
        }
    });
    /*PattemInfor end.*/

    /*PauseGameListener start.*/
    Bridge.define("PauseGameListener", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            onClick: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PauseGameListener#init", this ); }

                this.onClick = false;
            }
        },
        methods: {
            /*PauseGameListener.OnMouseUp start.*/
            OnMouseUp: function () {
if ( TRACE ) { TRACE( "PauseGameListener#OnMouseUp", this ); }

                if (this.onClick || BB10_MainState.state === BB10_MainState.State.Pause) {
                    return;
                }

                this.onClick = true;
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, new pc.Vec3( 1.2, 1.2, 1.0 ), 0.1), 2, DG.Tweening.LoopType.Yoyo), Bridge.fn.bind(this, function () {
                    this.onClick = false;
                }));

                //BB10_MainCanvasUI.Main.pauseScript.PauseGame();
            },
            /*PauseGameListener.OnMouseUp end.*/


        }
    });
    /*PauseGameListener end.*/

    /*PlayableAPI start.*/
    Bridge.define("PlayableAPI", {
        statics: {
            methods: {
                /*PlayableAPI.GoToStore:static start.*/
                GoToStore: function () {
if ( TRACE ) { TRACE( "PlayableAPI#GoToStore", this ); }

                    Luna.Unity.Playable.InstallFullGame();
                },
                /*PlayableAPI.GoToStore:static end.*/

                /*PlayableAPI.GameEnded:static start.*/
                GameEnded: function () {
if ( TRACE ) { TRACE( "PlayableAPI#GameEnded", this ); }

                    Luna.Unity.LifeCycle.GameEnded();
                },
                /*PlayableAPI.GameEnded:static end.*/

                /*PlayableAPI.LogEventFailed:static start.*/
                LogEventFailed: function () {
if ( TRACE ) { TRACE( "PlayableAPI#LogEventFailed", this ); }

                    Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.LevelFailed);
                },
                /*PlayableAPI.LogEventFailed:static end.*/

                /*PlayableAPI.LogEventWin:static start.*/
                LogEventWin: function () {
if ( TRACE ) { TRACE( "PlayableAPI#LogEventWin", this ); }

                    Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.LevelWon);
                },
                /*PlayableAPI.LogEventWin:static end.*/

                /*PlayableAPI.LogEventStart:static start.*/
                LogEventStart: function () {
if ( TRACE ) { TRACE( "PlayableAPI#LogEventStart", this ); }

                    Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.LevelStart);
                },
                /*PlayableAPI.LogEventStart:static end.*/

                /*PlayableAPI.CustomEvent:static start.*/
                CustomEvent: function (eventName, Value) {
if ( TRACE ) { TRACE( "PlayableAPI#CustomEvent", this ); }

                    Luna.Unity.Analytics.LogEvent$1(eventName, Value);
                },
                /*PlayableAPI.CustomEvent:static end.*/


            }
        }
    });
    /*PlayableAPI end.*/

    /*ResponsiveBase start.*/
    Bridge.define("ResponsiveBase", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*ResponsiveBase.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ResponsiveBase#Start", this ); }

                this.ResizeScreen(SingletonBase$1(ResponsiveManager).Instance.screenType);
                this.Initialize();
            },
            /*ResponsiveBase.Start end.*/

            /*ResponsiveBase.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "ResponsiveBase#Initialize", this ); }

                GameEvent.OnResizeScreen.AddListener(Bridge.fn.cacheBind(this, this.ResizeScreen));
            },
            /*ResponsiveBase.Initialize end.*/

            /*ResponsiveBase.ResizeScreen start.*/
            ResizeScreen: function (screenType) {
if ( TRACE ) { TRACE( "ResponsiveBase#ResizeScreen", this ); }

                switch (screenType) {
                    case ScreenType.Vertical: 
                        this.OnVertical();
                        break;
                    case ScreenType.VerticalTall: 
                        this.OnVerticalTall();
                        break;
                    case ScreenType.Tablet: 
                        this.OnTablet();
                        break;
                    case ScreenType.Horizontal: 
                        this.OnHorizontal();
                        break;
                }
            },
            /*ResponsiveBase.ResizeScreen end.*/


        }
    });
    /*ResponsiveBase end.*/

    /*ScaleElement start.*/
    Bridge.define("ScaleElement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            animationDuration: 0,
            delay: 0,
            targetScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScaleElement#init", this ); }

                this.targetScale = new UnityEngine.Vector3();
                this.animationDuration = 0.5;
                this.delay = 0.0;
                this.targetScale = new pc.Vec3( 1.5, 1.5, 1.5 );
            }
        },
        methods: {
            /*ScaleElement.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ScaleElement#Start", this ); }

                this.StartAnimation();
            },
            /*ScaleElement.Start end.*/

            /*ScaleElement.StartAnimation start.*/
            StartAnimation: function () {
if ( TRACE ) { TRACE( "ScaleElement#StartAnimation", this ); }

                DG.Tweening.DOVirtual.DelayedCall(this.delay, Bridge.fn.bind(this, function () {
                    DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                    DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, this.targetScale.$clone(), this.animationDuration), DG.Tweening.Ease.InOutCirc), -1, DG.Tweening.LoopType.Yoyo);
                }));
            },
            /*ScaleElement.StartAnimation end.*/


        }
    });
    /*ScaleElement end.*/

    /*ScreenType start.*/
    Bridge.define("ScreenType", {
        $kind: 6,
        statics: {
            fields: {
                Vertical: 0,
                Tablet: 1,
                Horizontal: 2,
                VerticalTall: 3
            }
        }
    });
    /*ScreenType end.*/

    /*SelectLevelScript start.*/
    Bridge.define("SelectLevelScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            addScript: null,
            listUnit: null,
            isSelected: false
        },
        methods: {
            /*SelectLevelScript.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "SelectLevelScript#Preload", this ); }

                this.addScript.CreateTable();
                this.listUnit = this.addScript.listUnit;
            },
            /*SelectLevelScript.Preload end.*/

            /*SelectLevelScript.ReSet start.*/
            ReSet: function () {
if ( TRACE ) { TRACE( "SelectLevelScript#ReSet", this ); }

                this.isSelected = false;
                this.ResetContentTable();
                this.SetActive(false);
            },
            /*SelectLevelScript.ReSet end.*/

            /*SelectLevelScript.ResetContentTable start.*/
            ResetContentTable: function () {
if ( TRACE ) { TRACE( "SelectLevelScript#ResetContentTable", this ); }

                var maxLv = BB10_Settings.GetMaxLevel;
                //        maxLv = 100;

                for (var i = 0; i < this.listUnit.length; i = (i + 1) | 0) {
                    if (i <= ((maxLv - 1) | 0)) {
                        this.listUnit[i].SetOpen(maxLv);
                        this.listUnit[i].enabled = true;
                    } else {
                        this.listUnit[i].SetLock();
                        this.listUnit[i].enabled = false;
                    }
                }
            },
            /*SelectLevelScript.ResetContentTable end.*/

            /*SelectLevelScript.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "SelectLevelScript#SetActive", this ); }

                this.gameObject.SetActive(isActive);
            },
            /*SelectLevelScript.SetActive end.*/


        }
    });
    /*SelectLevelScript end.*/

    /*SG_Block_EffectCtr start.*/
    Bridge.define("SG_Block_EffectCtr", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            particlePrefabs: null,
            listParticlesDisable: null,
            preload: 0
        },
        methods: {
            /*SG_Block_EffectCtr.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "SG_Block_EffectCtr#Preload", this ); }

                this.listParticlesDisable = System.Array.init(this.particlePrefabs.length, null, System.Collections.Generic.List$1(UnityEngine.ParticleSystem));
                for (var i = 0; i < this.particlePrefabs.length; i = (i + 1) | 0) {
                    this.listParticlesDisable[i] = new (System.Collections.Generic.List$1(UnityEngine.ParticleSystem)).ctor();
                }

                this.CreateFirstListEffectBreakBlock();
            },
            /*SG_Block_EffectCtr.Preload end.*/

            /*SG_Block_EffectCtr.GetParticle start.*/
            GetParticle: function (ID) {
if ( TRACE ) { TRACE( "SG_Block_EffectCtr#GetParticle", this ); }

                var particle;

                if (this.listParticlesDisable[ID].Count === 0) {
                    var obj = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.particlePrefabs[ID]);
                    particle = obj.GetComponent(UnityEngine.ParticleSystem);
                } else {
                    particle = this.listParticlesDisable[ID].getItem(((this.listParticlesDisable[ID].Count - 1) | 0));
                    this.listParticlesDisable[ID].removeAt(((this.listParticlesDisable[ID].Count - 1) | 0));
                    particle.gameObject.SetActive(true);
                }

                return particle;
            },
            /*SG_Block_EffectCtr.GetParticle end.*/

            /*SG_Block_EffectCtr.SetParticle start.*/
            SetParticle: function (particle, ID) {
if ( TRACE ) { TRACE( "SG_Block_EffectCtr#SetParticle", this ); }

                //ID = 0;
                this.listParticlesDisable[ID].add(particle);
                particle.gameObject.SetActive(false);
            },
            /*SG_Block_EffectCtr.SetParticle end.*/

            /*SG_Block_EffectCtr.CreateFirstListEffectBreakBlock start.*/
            CreateFirstListEffectBreakBlock: function () {
if ( TRACE ) { TRACE( "SG_Block_EffectCtr#CreateFirstListEffectBreakBlock", this ); }

                for (var i = 0; i < this.particlePrefabs.length; i = (i + 1) | 0) {
                    var particle = System.Array.init(this.preload, null, UnityEngine.ParticleSystem);

                    for (var j = 0; j < this.preload; j = (j + 1) | 0) {
                        particle[j] = this.GetParticle(i);
                    }

                    for (var j1 = 0; j1 < this.preload; j1 = (j1 + 1) | 0) {
                        this.SetParticle(particle[j1], i);
                    }
                }
            },
            /*SG_Block_EffectCtr.CreateFirstListEffectBreakBlock end.*/

            /*SG_Block_EffectCtr.EffectBreakBlock start.*/
            EffectBreakBlock: function (pos, iD) {
if ( TRACE ) { TRACE( "SG_Block_EffectCtr#EffectBreakBlock", this ); }

                var particle = this.GetParticle(iD);
                particle.transform.position = UnityEngine.Vector3.FromVector2(pos.$clone());
                particle.Play();

                this.StartCoroutine$1(this.WaitDisable(particle, iD));
            },
            /*SG_Block_EffectCtr.EffectBreakBlock end.*/

            /*SG_Block_EffectCtr.WaitDisable start.*/
            WaitDisable: function (particle, iD) {
if ( TRACE ) { TRACE( "SG_Block_EffectCtr#WaitDisable", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(particle.main.duration + 0.05);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.SetParticle(particle, iD);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SG_Block_EffectCtr.WaitDisable end.*/


        }
    });
    /*SG_Block_EffectCtr end.*/

    /*SpawnGroup start.*/
    Bridge.define("SpawnGroup", {
        fields: {
            block1: 0,
            block2: 0,
            block3: 0
        }
    });
    /*SpawnGroup end.*/

    /*StarLevelControl start.*/
    Bridge.define("StarLevelControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            starObj: null
        },
        methods: {
            /*StarLevelControl.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "StarLevelControl#SetActive", this ); }

                this.starObj.SetActive(isActive);
                if (isActive && !this.gameObject.activeSelf) {
                    this.SetActiveObj(true);
                }
            },
            /*StarLevelControl.SetActive end.*/

            /*StarLevelControl.SetActiveObj start.*/
            SetActiveObj: function (isActive) {
if ( TRACE ) { TRACE( "StarLevelControl#SetActiveObj", this ); }

                this.gameObject.SetActive(isActive);
            },
            /*StarLevelControl.SetActiveObj end.*/


        }
    });
    /*StarLevelControl end.*/

    /*StartGameScript start.*/
    Bridge.define("StartGameScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rec: null,
            group: null,
            duration: 0,
            tetrisText: null,
            tapText: null,
            moreImage: null,
            rateImage: null,
            likeImage: null
        },
        methods: {
            /*StartGameScript.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "StartGameScript#Reset", this ); }

                this.SetActive(false);

            },
            /*StartGameScript.Reset end.*/

            /*StartGameScript.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "StartGameScript#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0) && BB10_MainState.GetState === BB10_MainState.State.Home && !UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(0)) {
                    this.StartPlayGame();
                }
            },
            /*StartGameScript.Update end.*/

            /*StartGameScript.StartPlayGame start.*/
            StartPlayGame: function () {
if ( TRACE ) { TRACE( "StartGameScript#StartPlayGame", this ); }

                this.Middle();
            },
            /*StartGameScript.StartPlayGame end.*/

            /*StartGameScript.Middle start.*/
            Middle: function () {
if ( TRACE ) { TRACE( "StartGameScript#Middle", this ); }

                BB10_MainState.SetState(BB10_MainState.State.Ingame);
                var toGroup = BB10_MainCanvasUI.Main.inGameScript.group;
                BB10_MainCanvasUI.Main.faderScript.SwichPanel(this.group, toGroup, null);
            },
            /*StartGameScript.Middle end.*/

            /*StartGameScript.SetActive start.*/
            SetActive: function (isActive) {
if ( TRACE ) { TRACE( "StartGameScript#SetActive", this ); }

                this.gameObject.SetActive(isActive);
            },
            /*StartGameScript.SetActive end.*/

            /*StartGameScript.FbClick start.*/
            FbClick: function () {
if ( TRACE ) { TRACE( "StartGameScript#FbClick", this ); }

                //        UtilsFB.OpenFacebook(GameDefine.pageID, GameDefine.pageName);
                //        Application.OpenURL("fb://profile/" + GameDefine.pageID);
            },
            /*StartGameScript.FbClick end.*/

            /*StartGameScript.RateClick start.*/
            RateClick: function () {
if ( TRACE ) { TRACE( "StartGameScript#RateClick", this ); }


            },
            /*StartGameScript.RateClick end.*/

            /*StartGameScript.MoreClick start.*/
            MoreClick: function () {
if ( TRACE ) { TRACE( "StartGameScript#MoreClick", this ); }
 },
            /*StartGameScript.MoreClick end.*/


        }
    });
    /*StartGameScript end.*/

    /*TextAndSound start.*/
    Bridge.define("TextAndSound", {
        fields: {
            sprite: null,
            audioClip: null
        }
    });
    /*TextAndSound end.*/

    /*TextMeshProController start.*/
    Bridge.define("TextMeshProController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            textMeshPro: null,
            useCurve: false,
            radius: 0,
            arcAngle: 0,
            playOnEnable: false,
            animDuration: 0,
            delayBetweenChars: 0,
            scaleCurve: null,
            currentAnimCoroutine: null,
            originalVertices: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TextMeshProController#init", this ); }

                this.useCurve = false;
                this.radius = 50.0;
                this.arcAngle = 180.0;
                this.playOnEnable = false;
                this.animDuration = 0.5;
                this.delayBetweenChars = 0.1;
                this.scaleCurve = pc.AnimationCurve.createEaseInOut(0, 0, 1, 1);
            }
        },
        methods: {
            /*TextMeshProController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TextMeshProController#Awake", this ); }

                if (!UnityEngine.Object.op_Implicit(this.textMeshPro)) {
                    this.textMeshPro = this.GetComponent(TMPro.TextMeshProUGUI);
                }
            },
            /*TextMeshProController.Awake end.*/

            /*TextMeshProController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "TextMeshProController#OnEnable", this ); }

                // Chuẩn bị mesh/curve trước khi animate
                if (this.useCurve) {
                    this.ApplyCurve();
                } else {
                    this.textMeshPro.ForceMeshUpdate();
                }

                if (this.playOnEnable) {
                    this.PlayScaleAnimation();
                }
            },
            /*TextMeshProController.OnEnable end.*/

            /*TextMeshProController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "TextMeshProController#OnDisable", this ); }

                this.StopAnimation();
            },
            /*TextMeshProController.OnDisable end.*/

            /*TextMeshProController.ApplyCurve start.*/
            /**
             * Bẻ cong chữ theo cung tròn (áp vào mesh hiện tại).
             *
             * @instance
             * @private
             * @this TextMeshProController
             * @memberof TextMeshProController
             * @return  {void}
             */
            ApplyCurve: function () {
if ( TRACE ) { TRACE( "TextMeshProController#ApplyCurve", this ); }

                this.textMeshPro.ForceMeshUpdate();

                var textInfo = this.textMeshPro.textInfo;
                if (textInfo.characterCount === 0 || textInfo.meshInfo.length === 0) {
                    return;
                }

                var meshInfo = textInfo.meshInfo[0].$clone();

                for (var i = 0; i < textInfo.characterCount; i = (i + 1) | 0) {
                    var charInfo = textInfo.characterInfo[i].$clone();
                    if (!charInfo.isVisible) {
                        continue;
                    }

                    var vertexIndex = charInfo.vertexIndex;

                    var t = (textInfo.characterCount === 1) ? 0.5 : i / (((textInfo.characterCount - 1) | 0));
                    var angle = pc.math.lerp(-this.arcAngle * 0.5, this.arcAngle * 0.5, t) * UnityEngine.Mathf.Deg2Rad;

                    // Tính tâm 4 đỉnh của ký tự
                    var center = pc.Vec3.ZERO.clone();
                    for (var j = 0; j < 4; j = (j + 1) | 0) {
                        center = center.$clone().add( meshInfo.vertices[((vertexIndex + j) | 0)].$clone() );
                    }
                    center = center.$clone().clone().scale( 0.25 );

                    // Xoay ký tự quanh tâm và “ép” nó lên cung tròn
                    var cosA = Math.cos(angle);
                    var sinA = Math.sin(angle);

                    for (var j1 = 0; j1 < 4; j1 = (j1 + 1) | 0) {
                        var v = meshInfo.vertices[((vertexIndex + j1) | 0)].$clone();

                        // Đưa về tâm
                        v = v.$clone().sub( center.$clone() );

                        // Xoay quanh tâm theo góc
                        var rx = v.x * cosA - v.y * sinA;
                        var ry = v.x * sinA + v.y * cosA;
                        v = new pc.Vec3( rx, ry, v.z );

                        // Đưa lên cung tròn có bán kính radius
                        var x = v.x;
                        var y = v.y + this.radius;

                        var nx = x * cosA - y * sinA;
                        var ny = x * sinA + y * cosA;

                        meshInfo.vertices[((vertexIndex + j1) | 0)] = new pc.Vec3( nx, ny - this.radius, v.z ).add( center );
                    }
                }

                this.textMeshPro.UpdateVertexData();
            },
            /*TextMeshProController.ApplyCurve end.*/

            /*TextMeshProController.PlayScaleAnimation start.*/
            /**
             * Public API để chạy hiệu ứng scale từng ký tự.
             *
             * @instance
             * @public
             * @this TextMeshProController
             * @memberof TextMeshProController
             * @param   {number}    customDuration    
             * @param   {number}    customDelay
             * @return  {void}
             */
            PlayScaleAnimation: function (customDuration, customDelay) {
if ( TRACE ) { TRACE( "TextMeshProController#PlayScaleAnimation", this ); }

                if (customDuration === void 0) { customDuration = -1.0; }
                if (customDelay === void 0) { customDelay = -1.0; }
                var duration = customDuration > 0 ? customDuration : this.animDuration;
                var delay = customDelay > 0 ? customDelay : this.delayBetweenChars;

                // Hủy cái cũ (nếu đang chạy)
                this.StopAnimation();

                // Khởi tạo lại dữ liệu gốc trước khi animate
                this.PrepareOriginalVertices();

                // Chạy coroutine
                this.currentAnimCoroutine = this.StartCoroutine$1(this.AnimateScaleSequence(duration, delay));
            },
            /*TextMeshProController.PlayScaleAnimation end.*/

            /*TextMeshProController.StopAnimation start.*/
            /**
             * Dừng hiệu ứng và khôi phục mesh.
             *
             * @instance
             * @public
             * @this TextMeshProController
             * @memberof TextMeshProController
             * @return  {void}
             */
            StopAnimation: function () {
if ( TRACE ) { TRACE( "TextMeshProController#StopAnimation", this ); }

                var $t;
                if (this.currentAnimCoroutine != null) {
                    this.StopCoroutine$2(this.currentAnimCoroutine);
                    this.currentAnimCoroutine = null;
                }

                // Kill toàn bộ tween gắn với object này
                DG.Tweening.DOTween.Kill(this);

                // Khôi phục vertices nếu có
                if (this.originalVertices != null && UnityEngine.Object.op_Implicit(this.textMeshPro) && this.textMeshPro.textInfo.meshInfo.length > 0) {
                    var meshInfo = ($t = this.textMeshPro.textInfo.meshInfo)[0].$clone();
                    if (meshInfo.vertices != null && meshInfo.vertices.length === this.originalVertices.length) {
                        System.Array.copy(this.originalVertices, 0, meshInfo.vertices, 0, this.originalVertices.length);
                        // textMeshPro.UpdateVertexData(TMP_VertexDataUpdateFlags.Vertices);
                    }
                }
            },
            /*TextMeshProController.StopAnimation end.*/

            /*TextMeshProController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "TextMeshProController#OnDestroy", this ); }

                this.StopAnimation();
            },
            /*TextMeshProController.OnDestroy end.*/

            /*TextMeshProController.PrepareOriginalVertices start.*/
            PrepareOriginalVertices: function () {
if ( TRACE ) { TRACE( "TextMeshProController#PrepareOriginalVertices", this ); }

                // Nếu có curve, giữ mesh đã bẻ cong làm "gốc" để scale từ đó
                if (this.useCurve) {
                    this.ApplyCurve();
                } else {
                    this.textMeshPro.ForceMeshUpdate();
                }

                var textInfo = this.textMeshPro.textInfo;
                if (textInfo.meshInfo.length === 0) {
                    return;
                }

                var meshInfo = textInfo.meshInfo[0].$clone();
                if (meshInfo.vertices == null) {
                    return;
                }

                if (this.originalVertices == null || this.originalVertices.length !== meshInfo.vertices.length) {
                    this.originalVertices = System.Array.init(meshInfo.vertices.length, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                }

                System.Array.copy(meshInfo.vertices, 0, this.originalVertices, 0, meshInfo.vertices.length);
            },
            /*TextMeshProController.PrepareOriginalVertices end.*/

            /*TextMeshProController.AnimateScaleSequence start.*/
            AnimateScaleSequence: function (duration, delay) {
if ( TRACE ) { TRACE( "TextMeshProController#AnimateScaleSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    textInfo,
                    meshInfo,
                    ch,
                    i1,
                    ch1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (!UnityEngine.Object.op_Implicit(this.textMeshPro)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    this.textMeshPro.ForceMeshUpdate();

                                        textInfo = this.textMeshPro.textInfo;
                                        if (textInfo.characterCount === 0 || textInfo.meshInfo.length === 0) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    return false;
                                }
                                case 4: {
                                    meshInfo = textInfo.meshInfo[0].$clone();
                                        if (meshInfo.vertices == null) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 5: {
                                    return false;
                                }
                                case 6: {
                                    // Đưa toàn bộ ký tự về scale 0 trước
                                        for (var i = 0; i < textInfo.characterCount; i = (i + 1) | 0) {
                                            ch = textInfo.characterInfo[i].$clone();
                                            if (!ch.isVisible) {
                                                continue;
                                            }

                                            this.ApplyScaleToCharacter(ch.vertexIndex, this.GetCharacterCenter(ch.vertexIndex), 0.0);
                                        }
                                        this.textMeshPro.UpdateVertexData$1(TMPro.TMP_VertexDataUpdateFlags.Vertices);

                                        // Lần lượt scale lên theo delay
                                        i1 = 0;
                                        $step = 7;
                                        continue;
                                }
                                case 7: {
                                    if ( i1 < textInfo.characterCount ) {
                                            $step = 8;
                                            continue;
                                        }
                                    $step = 15;
                                    continue;
                                }
                                case 8: {
                                    ch1 = textInfo.characterInfo[i1].$clone();
                                        if (!ch1.isVisible) {
                                            $step = 14;
                                            continue;
                                        }

                                        this.AnimateCharacterScale(ch1.vertexIndex, duration);

                                        if (delay > 0.0) {
                                            $step = 9;
                                            continue;
                                        } else  {
                                            $step = 11;
                                            continue;
                                        }
                                }
                                case 9: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $step = 13;
                                    continue;
                                }
                                case 11: {
                                    $enumerator.current = null;
                                        $step = 12;
                                        return true;
                                }
                                case 12: {
                                    $step = 13;
                                    continue;
                                }
                                case 13: {
                                    // 1 frame để mượt
                                    $step = 14;
                                    continue;
                                }
                                case 14: {
                                    i1 = (i1 + 1) | 0;
                                    $step = 7;
                                    continue;
                                }
                                case 15: {
                                    this.currentAnimCoroutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TextMeshProController.AnimateScaleSequence end.*/

            /*TextMeshProController.AnimateCharacterScale start.*/
            AnimateCharacterScale: function (vertexIndex, duration) {
if ( TRACE ) { TRACE( "TextMeshProController#AnimateCharacterScale", this ); }

                var center = this.GetCharacterCenter(vertexIndex);
                DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTween.To$4(function () {
                    return 0.0;
                }, Bridge.fn.bind(this, function (s) {
                    this.ApplyScaleToCharacter(vertexIndex, center, s);
                    this.textMeshPro.UpdateVertexData$1(TMPro.TMP_VertexDataUpdateFlags.Vertices);
                }), 1.0, duration), this.scaleCurve), this);
            },
            /*TextMeshProController.AnimateCharacterScale end.*/

            /*TextMeshProController.GetCharacterCenter start.*/
            GetCharacterCenter: function (vertexIndex) {
if ( TRACE ) { TRACE( "TextMeshProController#GetCharacterCenter", this ); }

                var c = pc.Vec3.ZERO.clone();
                for (var j = 0; j < 4; j = (j + 1) | 0) {
                    c = c.$clone().add( this.originalVertices[((vertexIndex + j) | 0)].$clone() );
                }
                return c.$clone().clone().scale( 0.25 );
            },
            /*TextMeshProController.GetCharacterCenter end.*/

            /*TextMeshProController.ApplyScaleToCharacter start.*/
            ApplyScaleToCharacter: function (vertexIndex, center, scale) {
if ( TRACE ) { TRACE( "TextMeshProController#ApplyScaleToCharacter", this ); }

                var $t;
                var meshInfo = ($t = this.textMeshPro.textInfo.meshInfo)[0].$clone();
                for (var j = 0; j < 4; j = (j + 1) | 0) {
                    var v = this.originalVertices[((vertexIndex + j) | 0)].$clone();
                    var dir = v.$clone().sub( center );
                    meshInfo.vertices[((vertexIndex + j) | 0)] = center.$clone().add( dir.$clone().clone().scale( scale ) );
                }
            },
            /*TextMeshProController.ApplyScaleToCharacter end.*/


        }
    });
    /*TextMeshProController end.*/

    /*TweenConfig start.*/
    Bridge.define("TweenConfig", {
        fields: {
            tweenType: 0,
            from: 0,
            to: 0,
            mFrom: null,
            mTo: null,
            duration: 0,
            delay: 0,
            curve: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TweenConfig#init", this ); }

                this.mFrom = new UnityEngine.Vector3();
                this.mTo = new UnityEngine.Vector3();
                this.to = 1;
                this.curve = pc.AnimationCurve.createLinear(0, 0, 1, 1);
            }
        },
        methods: {
            /*TweenConfig.Clone start.*/
            Clone: function () {
if ( TRACE ) { TRACE( "TweenConfig#Clone", this ); }

                var $t;
                return ($t = new TweenConfig(), $t.tweenType = this.tweenType, $t.from = this.from, $t.to = this.to, $t.duration = this.duration, $t.delay = this.delay, $t.mTo = this.mTo.$clone(), $t.mFrom = this.mFrom.$clone(), $t.curve = this.curve, $t);
            },
            /*TweenConfig.Clone end.*/


        }
    });
    /*TweenConfig end.*/

    /*TweenConfigSO start.*/
    Bridge.define("TweenConfigSO", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            config: null
        }
    });
    /*TweenConfigSO end.*/

    /*TweenData start.*/
    Bridge.define("TweenData", {
        fields: {
            target: null,
            configSO: null,
            custom: false,
            config: null,
            OnCompleted: null
        },
        methods: {
            /*TweenData.SetupData start.*/
            SetupData: function () {
if ( TRACE ) { TRACE( "TweenData#SetupData", this ); }

                this.SetDataFromConfigSo();
            },
            /*TweenData.SetupData end.*/

            /*TweenData.OnConfigSOValueChanged start.*/
            OnConfigSOValueChanged: function () {
if ( TRACE ) { TRACE( "TweenData#OnConfigSOValueChanged", this ); }

                this.custom = this.configSO == null;
                this.SetDataFromConfigSo();
            },
            /*TweenData.OnConfigSOValueChanged end.*/

            /*TweenData.SetDataFromConfigSo start.*/
            SetDataFromConfigSo: function () {
if ( TRACE ) { TRACE( "TweenData#SetDataFromConfigSo", this ); }

                if (!this.custom && this.configSO != null) {
                    this.config = this.configSO.config.Clone();
                }
            },
            /*TweenData.SetDataFromConfigSo end.*/


        }
    });
    /*TweenData end.*/

    /*TypeAudio start.*/
    Bridge.define("TypeAudio", {
        $kind: 6,
        statics: {
            fields: {
                SoundBG: 0,
                SoundScore: 1,
                SoundClick: 2,
                SoundLose: 3,
                SoundWin: 4,
                SoundStop: 5,
                SoundCollect: 6,
                SoundPutFall: 7,
                SoundBoom: 8,
                SoundBop: 9,
                SoundPopup: 10,
                SoundFinishVideo: 11,
                SellectPattem: 12,
                CollectBlock: 13,
                StartGame: 14,
                WaringTime: 15
            }
        }
    });
    /*TypeAudio end.*/

    /*Types start.*/
    Bridge.define("Types", {
        $kind: 6,
        statics: {
            fields: {
                O0: 0,
                O1: 1,
                O2: 2,
                I0: 3,
                I1: 4,
                I2: 5,
                I3: 6,
                L0: 7,
                L1: 8,
                T0: 9,
                T1: 10,
                LB0: 11,
                Z0: 12,
                U0: 13,
                Plus: 14,
                W: 15,
                X1: 16,
                New1: 17,
                New2: 18,
                New3: 19,
                New4: 20,
                New5: 21,
                New6: 22,
                New7: 23,
                New8: 24,
                New9: 25,
                New10: 26,
                New11: 27,
                New12: 28,
                New13: 29,
                New14: 30,
                New15: 31,
                New16: 32,
                id3: 33
            }
        }
    });
    /*Types end.*/

    /*UITween start.*/
    Bridge.define("UITween", {
        statics: {
            methods: {
                /*UITween.Play:static start.*/
                Play: function (tweenData) {
if ( TRACE ) { TRACE( "UITween#Play", this ); }

                    tweenData.SetupData();
                    if (tweenData.config == null) {
                        return;
                    }
                    switch (tweenData.config.tweenType) {
                        case UITweenType.Scale: 
                            UITween.PlayTweenScale(tweenData);
                            break;
                        case UITweenType.Fade: 
                            UITween.PlayTweenFade(tweenData);
                            break;
                        case UITweenType.Move: 
                            UITween.PlayTweenMove(tweenData);
                            break;
                        case UITweenType.LocalMove: 
                            UITween.PlayTweenLocalMove(tweenData);
                            break;
                        case UITweenType.RectLocalMove: 
                            UITween.PlayTweenRectLocalMove(tweenData);
                            break;
                        case UITweenType.FadeGroup: 
                            UITween.PlayTweenFadeGroup(tweenData);
                            break;
                        case UITweenType.Active: 
                            UITween.PlayTweenActive(tweenData);
                            break;
                    }
                },
                /*UITween.Play:static end.*/

                /*UITween.PlayTweenScale:static start.*/
                PlayTweenScale: function (tweenData) {
if ( TRACE ) { TRACE( "UITween#PlayTweenScale", this ); }

                    var target = tweenData.target;
                    target.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( tweenData.config.from );
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(target, tweenData.config.to, tweenData.config.duration), tweenData.config.curve), tweenData.config.delay), function () {
                        !Bridge.staticEquals(tweenData.OnCompleted, null) ? tweenData.OnCompleted() : null;
                    });
                },
                /*UITween.PlayTweenScale:static end.*/

                /*UITween.PlayTweenFade:static start.*/
                PlayTweenFade: function (tweenData) {
if ( TRACE ) { TRACE( "UITween#PlayTweenFade", this ); }

                    var target = tweenData.target.GetComponent(UnityEngine.UI.Graphic);
                    var color = target.color.$clone();
                    color.a = tweenData.config.from;
                    target.color = color.$clone();
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$1(target, tweenData.config.to, tweenData.config.duration), tweenData.config.curve), tweenData.config.delay), function () {
                        !Bridge.staticEquals(tweenData.OnCompleted, null) ? tweenData.OnCompleted() : null;
                    });
                },
                /*UITween.PlayTweenFade:static end.*/

                /*UITween.PlayTweenMove:static start.*/
                PlayTweenMove: function (tweenData) {
if ( TRACE ) { TRACE( "UITween#PlayTweenMove", this ); }

                    var target = tweenData.target;
                    target.position = tweenData.config.mFrom.$clone();
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(target, tweenData.config.mTo.$clone(), tweenData.config.duration), tweenData.config.curve), tweenData.config.delay), function () {
                        !Bridge.staticEquals(tweenData.OnCompleted, null) ? tweenData.OnCompleted() : null;
                    });
                },
                /*UITween.PlayTweenMove:static end.*/

                /*UITween.PlayTweenLocalMove:static start.*/
                PlayTweenLocalMove: function (tweenData) {
if ( TRACE ) { TRACE( "UITween#PlayTweenLocalMove", this ); }

                    var target = tweenData.target;
                    target.localPosition = tweenData.config.mFrom.$clone();
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(target, tweenData.config.mTo.$clone(), tweenData.config.duration), tweenData.config.curve), tweenData.config.delay), function () {
                        !Bridge.staticEquals(tweenData.OnCompleted, null) ? tweenData.OnCompleted() : null;
                    });
                },
                /*UITween.PlayTweenLocalMove:static end.*/

                /*UITween.PlayTweenRectLocalMove:static start.*/
                PlayTweenRectLocalMove: function (tweenData) {
if ( TRACE ) { TRACE( "UITween#PlayTweenRectLocalMove", this ); }

                    var target = Bridge.cast(tweenData.target, UnityEngine.RectTransform);
                    target.anchoredPosition = UnityEngine.Vector2.FromVector3(tweenData.config.mFrom.$clone());
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(target, UnityEngine.Vector2.FromVector3(UnityEngine.Vector2.FromVector3(tweenData.config).mTo.$clone()), tweenData.config.duration), tweenData.config.curve), tweenData.config.delay), function () {
                        !Bridge.staticEquals(tweenData.OnCompleted, null) ? tweenData.OnCompleted() : null;
                    });
                },
                /*UITween.PlayTweenRectLocalMove:static end.*/

                /*UITween.PlayTweenFadeGroup:static start.*/
                PlayTweenFadeGroup: function (tweenData) {
if ( TRACE ) { TRACE( "UITween#PlayTweenFadeGroup", this ); }

                    var target = tweenData.target.GetComponent(UnityEngine.CanvasGroup);
                    target.alpha = tweenData.config.from;
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(target, tweenData.config.to, tweenData.config.duration), tweenData.config.curve), tweenData.config.delay), function () {
                        !Bridge.staticEquals(tweenData.OnCompleted, null) ? tweenData.OnCompleted() : null;
                    });
                },
                /*UITween.PlayTweenFadeGroup:static end.*/

                /*UITween.PlayTweenActive:static start.*/
                PlayTweenActive: function (tweenData) {
if ( TRACE ) { TRACE( "UITween#PlayTweenActive", this ); }

                    tweenData.target.gameObject.SetActive(false);
                    DG.Tweening.DOVirtual.DelayedCall(tweenData.config.delay, function () {
                        tweenData.target.gameObject.SetActive(true);
                    });
                },
                /*UITween.PlayTweenActive:static end.*/


            }
        }
    });
    /*UITween end.*/

    /*UITweenElement start.*/
    Bridge.define("UITweenElement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tweenData: null,
            playOnAwake: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UITweenElement#init", this ); }

                this.playOnAwake = true;
            }
        },
        methods: {
            /*UITweenElement.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "UITweenElement#OnEnable", this ); }

                if (UnityEngine.Component.op_Equality(this.tweenData.target, null)) {
                    this.tweenData.target = this.transform;
                }
                if (this.playOnAwake) {
                    this.Play();
                }
            },
            /*UITweenElement.OnEnable end.*/

            /*UITweenElement.Play start.*/
            Play: function () {
if ( TRACE ) { TRACE( "UITweenElement#Play", this ); }

                UITween.Play(this.tweenData);
            },
            /*UITweenElement.Play end.*/


        }
    });
    /*UITweenElement end.*/

    /*UITweenType start.*/
    Bridge.define("UITweenType", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Scale: 1,
                Fade: 2,
                Move: 3,
                LocalMove: 4,
                RectLocalMove: 5,
                FadeGroup: 6,
                Active: 7
            }
        }
    });
    /*UITweenType end.*/

    /*Vec2 start.*/
    Bridge.define("Vec2", {
        statics: {
            fields: {
                r: 0,
                c: 0
            },
            methods: {
                /*Vec2.FastDistance:static start.*/
                FastDistance: function (v1, v2) {
if ( TRACE ) { TRACE( "Vec2#FastDistance", this ); }

                    Vec2.r = Math.abs(((v1.R - v2.R) | 0));
                    Vec2.c = Math.abs(((v1.C - v2.C) | 0));
                    if (Vec2.r > Vec2.c) {
                        return Vec2.r;
                    }
                    return Vec2.c;
                },
                /*Vec2.FastDistance:static end.*/


            }
        },
        fields: {
            R: 0,
            C: 0
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "Vec2#ctor", this ); }

                this.$initialize();
                this.R = 0;
                this.C = 0;
            },
            $ctor1: function (r, c) {
if ( TRACE ) { TRACE( "Vec2#$ctor1", this ); }

                this.$initialize();
                this.R = r;
                this.C = c;
            },
            $ctor2: function (vec) {
if ( TRACE ) { TRACE( "Vec2#$ctor2", this ); }

                this.$initialize();
                this.R = Bridge.Int.clip32(vec.y);
                this.C = Bridge.Int.clip32(vec.x);
            },
            $ctor3: function (vec) {
if ( TRACE ) { TRACE( "Vec2#$ctor3", this ); }

                this.$initialize();
                this.R = vec.R;
                this.C = vec.C;
            }
        },
        methods: {
            /*Vec2.Print start.*/
            Print: function () {
if ( TRACE ) { TRACE( "Vec2#Print", this ); }

                var r = "(" + this.R + "," + this.C + ")";
                return r;
            },
            /*Vec2.Print end.*/


        }
    });
    /*Vec2 end.*/

    /*BlockJewel start.*/
    Bridge.define("BlockJewel", {
        inherits: [BB10_BrickCubeUnit],
        methods: {
            /*BlockJewel.Effect start.*/
            Effect: function () {
if ( TRACE ) { TRACE( "BlockJewel#Effect", this ); }

                this.StartCoroutine$1(this.WaitEffect());
                this.StartCoroutine$1(this.EffectBlock());
            },
            /*BlockJewel.Effect end.*/

            /*BlockJewel.EffectBlock start.*/
            EffectBlock: function () {
if ( TRACE ) { TRACE( "BlockJewel#EffectBlock", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timer = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer < this.durationScaleEffect ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer += UnityEngine.Time.deltaTime;
                                        this.transform.localScale = new pc.Vec3().lerp( new pc.Vec3( 1, 1, 1 ), new pc.Vec3( 1, 1, 1 ).clone().scale( this.targetScale ), timer / this.durationScaleEffect );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    BB10_MainObjControl.Instant.pattemCreater.SetCube(this);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BlockJewel.EffectBlock end.*/


        }
    });
    /*BlockJewel end.*/

    /*GamePlayManager start.*/
    Bridge.define("GamePlayManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "GamePlayManager#inherits", this ); }
 return [SingletonBase$1(GamePlayManager)]; },
        fields: {
            score: 0,
            target: 0,
            totalClick: 0,
            countClick: 0,
            textProScore: null,
            textProTarget: null,
            textScore: null,
            textTarget: null,
            win: null,
            lose: null,
            buttonDownload: null,
            isFinishGame: false
        },
        methods: {
            /*GamePlayManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GamePlayManager#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.textProScore, null) && UnityEngine.MonoBehaviour.op_Inequality(this.textProTarget, null)) {
                    this.textProTarget.text = Bridge.toString(this.target);
                    this.textProScore.text = Bridge.toString(this.score);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.textScore, null) && UnityEngine.MonoBehaviour.op_Inequality(this.textTarget, null)) {
                    this.textTarget.text = Bridge.toString(this.target);
                    this.textScore.text = Bridge.toString(this.score);
                }
            },
            /*GamePlayManager.Start end.*/

            /*GamePlayManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GamePlayManager#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0) && this.isFinishGame) {
                    this.GoToStore();
                }
            },
            /*GamePlayManager.Update end.*/

            /*GamePlayManager.UpScore start.*/
            UpScore: function (point) {
if ( TRACE ) { TRACE( "GamePlayManager#UpScore", this ); }

                var startScore = this.score;
                var endScore = (this.score + point) | 0;

                this.score = endScore;
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), DG.Tweening.DOTween.To$2(function () {
                    return startScore;
                }, Bridge.fn.bind(this, function (x) {
                    startScore = x;
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.textProScore, null)) {
                        this.textProScore.text = Bridge.toString(startScore);
                    } else {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.textScore, null)) {
                            this.textScore.text = Bridge.toString(startScore);
                        }
                    }
                }), endScore, 0.5), DG.Tweening.Ease.OutQuad), Bridge.fn.bind(this, function () {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.textProScore, null)) {
                        this.textProScore.text = Bridge.toString(endScore);
                    } else {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.textScore, null)) {
                            this.textScore.text = Bridge.toString(endScore);
                        }
                    }

                    if (this.score >= this.target) {
                        SingletonBase$1(TimerProgress).Instance.StopTimer();
                        this.GameOver(true);
                    }
                }));

                // hiệu ứng nhún (giữ nguyên)
                if (UnityEngine.MonoBehaviour.op_Inequality(this.textProScore, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.textProScore.transform$1);
                    this.textProScore.transform$1.localScale = new pc.Vec3( 1, 1, 1 );
                    DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.textProScore.transform$1, 1.2, 0.15), 2, DG.Tweening.LoopType.Yoyo);
                } else if (UnityEngine.MonoBehaviour.op_Inequality(this.textScore, null)) {
                    DG.Tweening.ShortcutExtensions.DOKill(this.textScore.transform);
                    this.textScore.transform.localScale = new pc.Vec3( 1, 1, 1 );
                    DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.textScore.transform, 1.2, 0.15), 2, DG.Tweening.LoopType.Yoyo);
                }
            },
            /*GamePlayManager.UpScore end.*/

            /*GamePlayManager.GameOver start.*/
            GameOver: function (isOver) {
if ( TRACE ) { TRACE( "GamePlayManager#GameOver", this ); }

                if (isOver && !this.isFinishGame) {
                    this.isFinishGame = true;
                    this.GameEnd();
                    DG.Tweening.DOVirtual.DelayedCall(0.5, Bridge.fn.bind(this, function () {
                        MainAudio.Main.PlaySound(TypeAudio.SoundWin);
                        this.buttonDownload.SetActive(false);
                        this.win.SetActive(true);
                    }));
                } else if (isOver === false && !this.isFinishGame) {
                    this.isFinishGame = true;
                    this.GameEnd();
                    DG.Tweening.DOVirtual.DelayedCall(0.5, Bridge.fn.bind(this, function () {
                        MainAudio.Main.PlaySound(TypeAudio.SoundLose);
                        this.buttonDownload.SetActive(false);
                        this.lose.SetActive(true);
                    }));
                }
            },
            /*GamePlayManager.GameOver end.*/

            /*GamePlayManager.UpClick start.*/
            UpClick: function () {
if ( TRACE ) { TRACE( "GamePlayManager#UpClick", this ); }

                this.countClick = (this.countClick + 1) | 0;
                if (this.countClick >= this.totalClick) {
                    this.GameEnd();
                    UnityEngine.Debug.Log$1("GameEnd");
                    this.isFinishGame = true;
                }
            },
            /*GamePlayManager.UpClick end.*/

            /*GamePlayManager.GoToStore start.*/
            GoToStore: function () {
if ( TRACE ) { TRACE( "GamePlayManager#GoToStore", this ); }

                PlayableAPI.GoToStore();
            },
            /*GamePlayManager.GoToStore end.*/

            /*GamePlayManager.GameEnd start.*/
            GameEnd: function () {
if ( TRACE ) { TRACE( "GamePlayManager#GameEnd", this ); }

                PlayableAPI.GameEnded();
            },
            /*GamePlayManager.GameEnd end.*/


        }
    });
    /*GamePlayManager end.*/

    /*ResponsiveManager start.*/
    Bridge.define("ResponsiveManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "ResponsiveManager#inherits", this ); }
 return [SingletonBase$1(ResponsiveManager)]; },
        fields: {
            screenType: 0,
            widthScreen: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ResponsiveManager#init", this ); }

                this.screenType = ScreenType.Vertical;
                this.widthScreen = 0;
            }
        },
        methods: {
            /*ResponsiveManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ResponsiveManager#Awake", this ); }

                this.UpdateScreenType();
            },
            /*ResponsiveManager.Awake end.*/

            /*ResponsiveManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ResponsiveManager#Update", this ); }

                if (UnityEngine.Screen.width !== this.widthScreen) {
                    this.UpdateScreenType();
                }
            },
            /*ResponsiveManager.Update end.*/

            /*ResponsiveManager.UpdateScreenType start.*/
            UpdateScreenType: function () {
if ( TRACE ) { TRACE( "ResponsiveManager#UpdateScreenType", this ); }

                var $t;
                this.widthScreen = UnityEngine.Screen.width;
                var heightScreen = UnityEngine.Screen.height;

                var aspectRatio = this.widthScreen / heightScreen;
                if (aspectRatio <= 0.5) {
                    this.screenType = ScreenType.VerticalTall; // dọc dài (9:19.5, 10:21...)
                } else if (aspectRatio <= 0.7) {
                    this.screenType = ScreenType.Vertical; // dọc (9:16, 10:19...)
                } else if (aspectRatio > 0.7 && aspectRatio <= 1.6) {
                    this.screenType = ScreenType.Tablet; // 4:3, 3:2, các tỷ lệ trung gian
                } else {
                    this.screenType = ScreenType.Horizontal; // 16:9, 21:9...
                }

                ($t = GameEvent.OnResizeScreen) != null ? $t.Invoke(this.screenType) : null;
            },
            /*ResponsiveManager.UpdateScreenType end.*/


        }
    });
    /*ResponsiveManager end.*/

    /*ResponsiveWorld start.*/
    Bridge.define("ResponsiveWorld", {
        inherits: [ResponsiveBase],
        fields: {
            positionVertical: null,
            positionVerticalTall: null,
            positionHorizontal: null,
            positionTablet: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ResponsiveWorld#init", this ); }

                this.positionVertical = new UnityEngine.Vector3();
                this.positionVerticalTall = new UnityEngine.Vector3();
                this.positionHorizontal = new UnityEngine.Vector3();
                this.positionTablet = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*ResponsiveWorld.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ResponsiveWorld#Start", this ); }

                ResponsiveBase.prototype.Start.call(this);
            },
            /*ResponsiveWorld.Start end.*/

            /*ResponsiveWorld.OnHorizontal start.*/
            OnHorizontal: function () {
if ( TRACE ) { TRACE( "ResponsiveWorld#OnHorizontal", this ); }


                this.transform.localPosition = this.positionHorizontal.$clone();
            },
            /*ResponsiveWorld.OnHorizontal end.*/

            /*ResponsiveWorld.OnVerticalTall start.*/
            OnVerticalTall: function () {
if ( TRACE ) { TRACE( "ResponsiveWorld#OnVerticalTall", this ); }

                this.transform.localPosition = this.positionVerticalTall.$clone();
            },
            /*ResponsiveWorld.OnVerticalTall end.*/

            /*ResponsiveWorld.OnVertical start.*/
            OnVertical: function () {
if ( TRACE ) { TRACE( "ResponsiveWorld#OnVertical", this ); }


                this.transform.localPosition = this.positionVertical.$clone();
            },
            /*ResponsiveWorld.OnVertical end.*/

            /*ResponsiveWorld.OnTablet start.*/
            OnTablet: function () {
if ( TRACE ) { TRACE( "ResponsiveWorld#OnTablet", this ); }


                this.transform.localPosition = this.positionTablet.$clone();
            },
            /*ResponsiveWorld.OnTablet end.*/


        }
    });
    /*ResponsiveWorld end.*/

    /*TimerProgress start.*/
    Bridge.define("TimerProgress", {
        inherits: function () {
if ( TRACE ) { TRACE( "TimerProgress#inherits", this ); }
 return [SingletonBase$1(TimerProgress)]; },
        fields: {
            fillImageRed: null,
            fillImage: null,
            slider: null,
            timer: 0,
            timerText: null,
            haveTimer: false,
            IsStart: false,
            isFormatTimeMMSS: false,
            warningSprite: null,
            timeWarning: 0,
            warningTween: null,
            isWarning: false,
            warningSoundTimer: 0,
            warningSoundInterval: 0,
            isFillRed: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TimerProgress#init", this ); }

                this.timer = 60;
                this.haveTimer = true;
                this.IsStart = false;
                this.isFormatTimeMMSS = true;
                this.isWarning = false;
                this.warningSoundTimer = 0.0;
                this.warningSoundInterval = 1.0;
                this.isFillRed = false;
            }
        },
        methods: {
            /*TimerProgress.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TimerProgress#Start", this ); }


                if (!this.haveTimer) {
                    this.gameObject.SetActive(false);
                    return;
                }
                if (UnityEngine.Object.op_Implicit(this.slider)) {
                    this.slider.maxValue = this.timer;
                    this.slider.value = this.timer;
                }
                if (UnityEngine.Object.op_Implicit(this.timerText)) {
                    this.SetTime(this.timer);
                }

                //GameEvent.OnUserFirstTouch.AddListener(() =>
                //{
                //  IsStart = true;
                //});
            },
            /*TimerProgress.Start end.*/

            /*TimerProgress.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "TimerProgress#Update", this ); }

                if (!this.IsStart && UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.IsStart = true;
                }
                if (this.IsStart && this.timer >= 0) {
                    this.timer -= UnityEngine.Time.deltaTime;
                    if (UnityEngine.Object.op_Implicit(this.timerText)) {
                        this.SetTime(this.timer >= 0 ? this.timer : 0);
                    }
                    if (UnityEngine.Object.op_Implicit(this.slider)) {
                        this.slider.value = this.timer;
                    }
                    if (this.timer <= this.timeWarning && UnityEngine.Object.op_Implicit(this.fillImage) && UnityEngine.Object.op_Implicit(this.fillImageRed) && !this.isFillRed) {
                        this.isFillRed = true;
                        this.fillImage.sprite = this.fillImageRed;
                        DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.ShortcutExtensions.DOShakeScale(this.transform, 1.0, 0.1, 1, 90, false), -1, DG.Tweening.LoopType.Restart);
                    }
                    //ps
                    if (this.timer <= this.timeWarning) {
                        if (!this.isWarning) {
                            this.isWarning = true;
                            this.warningSoundTimer = 0.0;
                            MainAudio.Main.PlaySound(TypeAudio.WaringTime);

                            if (UnityEngine.Object.op_Implicit(this.warningSprite)) {
                                this.warningSprite.SetActive(true);

                                var cg = this.warningSprite.GetComponent(UnityEngine.CanvasGroup);
                                if (UnityEngine.MonoBehaviour.op_Equality(cg, null)) {
                                    cg = this.warningSprite.AddComponent(UnityEngine.CanvasGroup);
                                }

                                this.warningTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(cg, 0.0, 0.5), -1, DG.Tweening.LoopType.Yoyo), DG.Tweening.Ease.InOutSine);
                            }
                        } else {
                            this.warningSoundTimer += UnityEngine.Time.deltaTime;
                            if (this.warningSoundTimer >= this.warningSoundInterval) {
                                this.warningSoundTimer = 0.0;
                                MainAudio.Main.PlaySound(TypeAudio.WaringTime);
                            }
                        }
                    }

                    //
                    if (this.timer <= 0) {
                        UnityEngine.Debug.Log$1("Time's up!");
                        SingletonBase$1(GamePlayManager).Instance.GameOver(false);
                        this.warningSprite.SetActive(false);
                    }
                }
            },
            /*TimerProgress.Update end.*/

            /*TimerProgress.SetTime start.*/
            SetTime: function (time) {
if ( TRACE ) { TRACE( "TimerProgress#SetTime", this ); }

                // set format second:milliseconds
                var seconds = Math.floor(time);
                var milliseconds = Math.floor((time - seconds) * 100);
                if (!this.isFormatTimeMMSS) {
                    this.timerText.text = System.String.format("{0:00}:{1:00}", Bridge.box(seconds, System.Int32), Bridge.box(milliseconds, System.Int32));
                } else {
                    var minutes = Math.floor(time / 60);
                    this.timerText.text = System.String.format("{0:00}:{1:00}", Bridge.box(minutes, System.Int32), Bridge.box(Math.floor(time % 60), System.Int32));
                }
            },
            /*TimerProgress.SetTime end.*/

            /*TimerProgress.StopTimer start.*/
            StopTimer: function () {
if ( TRACE ) { TRACE( "TimerProgress#StopTimer", this ); }

                this.IsStart = false;

                // dừng hiệu ứng warning nếu có
                if (this.warningTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.warningTween);
                }

                // tắt icon warning
                if (UnityEngine.GameObject.op_Inequality(this.warningSprite, null)) {
                    this.warningSprite.SetActive(false);
                }
            },
            /*TimerProgress.StopTimer end.*/


        }
    });
    /*TimerProgress end.*/

    /*TutorialManager start.*/
    Bridge.define("TutorialManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "TutorialManager#inherits", this ); }
 return [SingletonBase$1(TutorialManager)]; },
        fields: {
            groundView: null,
            firstBlock: null,
            Hand: null,
            TextTut: null,
            idleTimer: 0,
            idleTimeToShow: 0,
            blockTutorial: null,
            nextViewers: null,
            bounceTween: null,
            isTutorialPlaying: false,
            isFirstTouch: false,
            r: 0,
            c: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TutorialManager#init", this ); }

                this.idleTimer = 0.0;
                this.idleTimeToShow = 3.0;
                this.isTutorialPlaying = false;
                this.isFirstTouch = false;
            }
        },
        methods: {
            /*TutorialManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TutorialManager#Start", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // đợi block spawn
                                        this.ShowTutorial();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TutorialManager.Start end.*/

            /*TutorialManager.ShowTutorial start.*/
            ShowTutorial: function () {
if ( TRACE ) { TRACE( "TutorialManager#ShowTutorial", this ); }

                if (this.firstBlock.listBlock == null || this.firstBlock.listBlock.Count === 0) {
                    return;
                }

                var listUnit = this.firstBlock.listBlock;

                var row = this.r;
                var col = this.c;

                var data = listUnit.getItem(0).myData.$clone();

                // hiện ghost block
                this.groundView.SetPattem(listUnit, row, col, data);

                this.PlayHandTutorial();
            },
            /*TutorialManager.ShowTutorial end.*/

            /*TutorialManager.PlayHandTutorial start.*/
            PlayHandTutorial: function () {
if ( TRACE ) { TRACE( "TutorialManager#PlayHandTutorial", this ); }

                this.Hand.SetActive(true);
                this.TextTut.SetActive(true);

                // vị trí block ở NextViewer
                var startPos = this.GetBlockCenter();

                // vị trí ghost block trên grid
                var targetPos = this.GetShadowCenter();

                this.Hand.transform.position = startPos.$clone();

                var seq = DG.Tweening.DOTween.Sequence();

                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.Hand.transform, targetPos.$clone(), 1.0), DG.Tweening.Ease.InOutSine));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(seq, 0.3);
                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.ShortcutExtensions.DOMove(this.Hand.transform, startPos.$clone(), 0.0));
                DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Sequence, seq, -1);
            },
            /*TutorialManager.PlayHandTutorial end.*/

            /*TutorialManager.GetBlockCenter start.*/
            GetBlockCenter: function () {
if ( TRACE ) { TRACE( "TutorialManager#GetBlockCenter", this ); }

                var $t;
                var center = pc.Vec3.ZERO.clone();

                $t = Bridge.getEnumerator(this.firstBlock.listBlock);
                try {
                    while ($t.moveNext()) {
                        var cube = $t.Current;
                        center = center.$clone().add( cube.transform.position.$clone() );
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                center = center.$clone().scale( 1.0 / ( (this.firstBlock.listBlock.Count) | 0 ) );

                return center.$clone();
            },
            /*TutorialManager.GetBlockCenter end.*/

            /*TutorialManager.GetShadowCenter start.*/
            GetShadowCenter: function () {
if ( TRACE ) { TRACE( "TutorialManager#GetShadowCenter", this ); }

                var center = pc.Vec3.ZERO.clone();
                var count = this.firstBlock.listBlock.Count;

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    center = center.$clone().add( this.groundView.listBlockRender.getItem(i).transform.position.$clone() );
                }

                center = center.$clone().scale( 1.0 / ( count | 0 ) );

                return center.$clone();
            },
            /*TutorialManager.GetShadowCenter end.*/

            /*TutorialManager.StartBounceTutorial start.*/
            StartBounceTutorial: function () {
if ( TRACE ) { TRACE( "TutorialManager#StartBounceTutorial", this ); }

                var $t;
                this.blockTutorial = this.GetValidBlock();

                if (UnityEngine.MonoBehaviour.op_Equality(this.blockTutorial, null)) {
                    return;
                }

                this.isTutorialPlaying = true;

                this.bounceTween = DG.Tweening.DOTween.Sequence();

                $t = Bridge.getEnumerator(this.blockTutorial.listBlock);
                try {
                    while ($t.moveNext()) {
                        var cube = $t.Current;
                        DG.Tweening.TweenSettingsExtensions.Join(this.bounceTween, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(cube.transform, 0.65, 0.35), -1, DG.Tweening.LoopType.Yoyo), DG.Tweening.Ease.InOutSine));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TutorialManager.StartBounceTutorial end.*/

            /*TutorialManager.ResetIdleTimer start.*/
            ResetIdleTimer: function () {
if ( TRACE ) { TRACE( "TutorialManager#ResetIdleTimer", this ); }

                var $t;
                this.idleTimer = 0.0;

                if (this.bounceTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.bounceTween);
                    this.bounceTween = null;

                    if (this.blockTutorial.listBlock != null && this.blockTutorial.listBlock != null) {
                        $t = Bridge.getEnumerator(this.blockTutorial.listBlock);
                        try {
                            while ($t.moveNext()) {
                                var cube = $t.Current;
                                cube.transform.localScale = new pc.Vec3( 1, 1, 1 );
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }

                    this.isTutorialPlaying = false;
                }
            },
            /*TutorialManager.ResetIdleTimer end.*/

            /*TutorialManager.GetValidBlock start.*/
            GetValidBlock: function () {
if ( TRACE ) { TRACE( "TutorialManager#GetValidBlock", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.nextViewers);
                try {
                    while ($t.moveNext()) {
                        var viewer = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(viewer, null) && viewer.listBlock != null && viewer.listBlock.Count > 0) {
                            return viewer;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return null;
            },
            /*TutorialManager.GetValidBlock end.*/


        }
    });
    /*TutorialManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","System.Collections.Generic","System.Collections","TMPro","UnityEngine.Events","UnityEngine.UI","DG.Tweening","UnityEngine.EventSystems","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*InputAudio start.*/
    $m("InputAudio", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"audioClip","t":4,"rt":$n[0].AudioClip,"sn":"audioClip"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"loop","t":4,"rt":$n[1].Boolean,"sn":"loop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"type","t":4,"rt":TypeAudio,"sn":"type","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"volume","t":4,"rt":$n[1].Single,"sn":"volume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*InputAudio end.*/

    /*MainAudio start.*/
    $m("MainAudio", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddComponienAudioSources","t":8,"sn":"AddComponienAudioSources","rt":$n[1].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"MuteSound","t":8,"pi":[{"n":"bol","pt":$n[1].Boolean,"ps":0}],"sn":"MuteSound","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"PlaySound","t":8,"pi":[{"n":"type","pt":TypeAudio,"ps":0}],"sn":"PlaySound","rt":$n[1].Void,"p":[TypeAudio]},{"a":1,"n":"SetBGMusic","t":8,"sn":"SetBGMusic","rt":$n[1].Void},{"a":2,"n":"StopySound","t":8,"pi":[{"n":"type","pt":TypeAudio,"ps":0}],"sn":"StopySound","rt":$n[1].Void,"p":[TypeAudio]},{"a":2,"n":"Main","is":true,"t":16,"rt":MainAudio,"g":{"a":2,"n":"get_Main","t":8,"rt":MainAudio,"fg":"Main","is":true},"fn":"Main"},{"a":1,"n":"audioDict","t":4,"rt":$n[2].Dictionary$2(TypeAudio,UnityEngine.AudioSource),"sn":"audioDict"},{"a":1,"n":"bgIndex","t":4,"rt":$n[1].Int32,"sn":"bgIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"isMute","t":4,"rt":$n[1].Boolean,"sn":"isMute","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listInputAudio","t":4,"rt":System.Array.type(InputAudio),"sn":"listInputAudio"},{"a":1,"n":"main","is":true,"t":4,"rt":MainAudio,"sn":"main"},{"a":1,"n":"sound","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"sound"}]}; }, $n);
    /*MainAudio end.*/

    /*TypeAudio start.*/
    $m("TypeAudio", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CollectBlock","is":true,"t":4,"rt":TypeAudio,"sn":"CollectBlock","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SellectPattem","is":true,"t":4,"rt":TypeAudio,"sn":"SellectPattem","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundBG","is":true,"t":4,"rt":TypeAudio,"sn":"SoundBG","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundBoom","is":true,"t":4,"rt":TypeAudio,"sn":"SoundBoom","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundBop","is":true,"t":4,"rt":TypeAudio,"sn":"SoundBop","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundClick","is":true,"t":4,"rt":TypeAudio,"sn":"SoundClick","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundCollect","is":true,"t":4,"rt":TypeAudio,"sn":"SoundCollect","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundFinishVideo","is":true,"t":4,"rt":TypeAudio,"sn":"SoundFinishVideo","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundLose","is":true,"t":4,"rt":TypeAudio,"sn":"SoundLose","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundPopup","is":true,"t":4,"rt":TypeAudio,"sn":"SoundPopup","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundPutFall","is":true,"t":4,"rt":TypeAudio,"sn":"SoundPutFall","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundScore","is":true,"t":4,"rt":TypeAudio,"sn":"SoundScore","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundStop","is":true,"t":4,"rt":TypeAudio,"sn":"SoundStop","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"SoundWin","is":true,"t":4,"rt":TypeAudio,"sn":"SoundWin","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"StartGame","is":true,"t":4,"rt":TypeAudio,"sn":"StartGame","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}},{"a":2,"n":"WaringTime","is":true,"t":4,"rt":TypeAudio,"sn":"WaringTime","box":function ($v) { return Bridge.box($v, TypeAudio, System.Enum.toStringFn(TypeAudio));}}]}; }, $n);
    /*TypeAudio end.*/

    /*BB10_MainState start.*/
    $m("BB10_MainState", function () { return {"nested":[BB10_MainState.State,BB10_MainState.TypePlay],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetState","is":true,"t":8,"pi":[{"n":"newState","pt":BB10_MainState.State,"ps":0}],"sn":"SetState","rt":$n[1].Void,"p":[BB10_MainState.State]},{"a":2,"n":"GetState","is":true,"t":16,"rt":BB10_MainState.State,"g":{"a":2,"n":"get_GetState","t":8,"rt":BB10_MainState.State,"fg":"GetState","is":true,"box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}},"fn":"GetState"},{"a":2,"n":"state","is":true,"t":4,"rt":BB10_MainState.State,"sn":"state","box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}},{"a":2,"n":"typePlay","is":true,"t":4,"rt":BB10_MainState.TypePlay,"sn":"typePlay","box":function ($v) { return Bridge.box($v, BB10_MainState.TypePlay, System.Enum.toStringFn(BB10_MainState.TypePlay));}}]}; }, $n);
    /*BB10_MainState end.*/

    /*BB10_MainState+State start.*/
    $m("BB10_MainState.State", function () { return {"td":BB10_MainState,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Exit","is":true,"t":4,"rt":BB10_MainState.State,"sn":"Exit","box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}},{"a":2,"n":"GameOver","is":true,"t":4,"rt":BB10_MainState.State,"sn":"GameOver","box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}},{"a":2,"n":"Home","is":true,"t":4,"rt":BB10_MainState.State,"sn":"Home","box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}},{"a":2,"n":"Ingame","is":true,"t":4,"rt":BB10_MainState.State,"sn":"Ingame","box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}},{"a":2,"n":"MoreApp","is":true,"t":4,"rt":BB10_MainState.State,"sn":"MoreApp","box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}},{"a":2,"n":"Pause","is":true,"t":4,"rt":BB10_MainState.State,"sn":"Pause","box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}},{"a":2,"n":"ShowReward","is":true,"t":4,"rt":BB10_MainState.State,"sn":"ShowReward","box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}},{"a":2,"n":"Waiting","is":true,"t":4,"rt":BB10_MainState.State,"sn":"Waiting","box":function ($v) { return Bridge.box($v, BB10_MainState.State, System.Enum.toStringFn(BB10_MainState.State));}}]}; }, $n);
    /*BB10_MainState+State end.*/

    /*BB10_MainState+TypePlay start.*/
    $m("BB10_MainState.TypePlay", function () { return {"td":BB10_MainState,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Normal","is":true,"t":4,"rt":BB10_MainState.TypePlay,"sn":"Normal","box":function ($v) { return Bridge.box($v, BB10_MainState.TypePlay, System.Enum.toStringFn(BB10_MainState.TypePlay));}},{"a":2,"n":"Tutorial","is":true,"t":4,"rt":BB10_MainState.TypePlay,"sn":"Tutorial","box":function ($v) { return Bridge.box($v, BB10_MainState.TypePlay, System.Enum.toStringFn(BB10_MainState.TypePlay));}}]}; }, $n);
    /*BB10_MainState+TypePlay end.*/

    /*BlockJewel start.*/
    $m("BlockJewel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Effect","t":8,"sn":"Effect","rt":$n[1].Void},{"a":2,"n":"EffectBlock","t":8,"sn":"EffectBlock","rt":$n[3].IEnumerator}]}; }, $n);
    /*BlockJewel end.*/

    /*CTAButton start.*/
    $m("CTAButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GoToStore","t":8,"sn":"GoToStore","rt":$n[1].Void}]}; }, $n);
    /*CTAButton end.*/

    /*ScaleElement start.*/
    $m("ScaleElement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"StartAnimation","t":8,"sn":"StartAnimation","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animationDuration","t":4,"rt":$n[1].Single,"sn":"animationDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delay","t":4,"rt":$n[1].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetScale","t":4,"rt":$n[0].Vector3,"sn":"targetScale"}]}; }, $n);
    /*ScaleElement end.*/

    /*TextMeshProController start.*/
    $m("TextMeshProController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(TMPro.TextMeshProUGUI)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCharacterScale","t":8,"pi":[{"n":"vertexIndex","pt":$n[1].Int32,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"AnimateCharacterScale","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Single]},{"a":1,"n":"AnimateScaleSequence","t":8,"pi":[{"n":"duration","pt":$n[1].Single,"ps":0},{"n":"delay","pt":$n[1].Single,"ps":1}],"sn":"AnimateScaleSequence","rt":$n[3].IEnumerator,"p":[$n[1].Single,$n[1].Single]},{"a":1,"n":"ApplyCurve","t":8,"sn":"ApplyCurve","rt":$n[1].Void},{"a":1,"n":"ApplyScaleToCharacter","t":8,"pi":[{"n":"vertexIndex","pt":$n[1].Int32,"ps":0},{"n":"center","pt":$n[0].Vector3,"ps":1},{"n":"scale","pt":$n[1].Single,"ps":2}],"sn":"ApplyScaleToCharacter","rt":$n[1].Void,"p":[$n[1].Int32,$n[0].Vector3,$n[1].Single]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"GetCharacterCenter","t":8,"pi":[{"n":"vertexIndex","pt":$n[1].Int32,"ps":0}],"sn":"GetCharacterCenter","rt":$n[0].Vector3,"p":[$n[1].Int32]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"PlayScaleAnimation","t":8,"pi":[{"n":"customDuration","dv":-1.0,"o":true,"pt":$n[1].Single,"ps":0},{"n":"customDelay","dv":-1.0,"o":true,"pt":$n[1].Single,"ps":1}],"sn":"PlayScaleAnimation","rt":$n[1].Void,"p":[$n[1].Single,$n[1].Single]},{"a":1,"n":"PrepareOriginalVertices","t":8,"sn":"PrepareOriginalVertices","rt":$n[1].Void},{"a":2,"n":"StopAnimation","t":8,"sn":"StopAnimation","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animDuration","t":4,"rt":$n[1].Single,"sn":"animDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arcAngle","t":4,"rt":$n[1].Single,"sn":"arcAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentAnimCoroutine","t":4,"rt":$n[0].Coroutine,"sn":"currentAnimCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delayBetweenChars","t":4,"rt":$n[1].Single,"sn":"delayBetweenChars","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalVertices","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"originalVertices"},{"at":[new UnityEngine.HeaderAttribute("Animation Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playOnEnable","t":4,"rt":$n[1].Boolean,"sn":"playOnEnable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[1].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleCurve","t":4,"rt":pc.AnimationCurve,"sn":"scaleCurve"},{"at":[new UnityEngine.HeaderAttribute("Curve Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"textMeshPro","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"textMeshPro"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useCurve","t":4,"rt":$n[1].Boolean,"sn":"useCurve","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*TextMeshProController end.*/

    /*TweenConfigSO start.*/
    $m("TweenConfigSO", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        menuName: "Sonat/UI Tween/Tween Config"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"config","t":4,"rt":TweenConfig,"sn":"config"}]}; }, $n);
    /*TweenConfigSO end.*/

    /*TweenConfig start.*/
    $m("TweenConfig", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Clone","t":8,"sn":"Clone","rt":TweenConfig},{"a":2,"n":"curve","t":4,"rt":pc.AnimationCurve,"sn":"curve"},{"a":2,"n":"delay","t":4,"rt":$n[1].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"from","t":4,"rt":$n[1].Single,"sn":"from","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"mFrom","t":4,"rt":$n[0].Vector3,"sn":"mFrom"},{"a":2,"n":"mTo","t":4,"rt":$n[0].Vector3,"sn":"mTo"},{"a":2,"n":"to","t":4,"rt":$n[1].Single,"sn":"to","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tweenType","t":4,"rt":UITweenType,"sn":"tweenType","box":function ($v) { return Bridge.box($v, UITweenType, System.Enum.toStringFn(UITweenType));}}]}; }, $n);
    /*TweenConfig end.*/

    /*TweenData start.*/
    $m("TweenData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnConfigSOValueChanged","t":8,"sn":"OnConfigSOValueChanged","rt":$n[1].Void},{"a":1,"n":"SetDataFromConfigSo","t":8,"sn":"SetDataFromConfigSo","rt":$n[1].Void},{"a":2,"n":"SetupData","t":8,"sn":"SetupData","rt":$n[1].Void},{"a":2,"n":"OnCompleted","t":4,"rt":Function,"sn":"OnCompleted"},{"a":2,"n":"config","t":4,"rt":TweenConfig,"sn":"config"},{"a":2,"n":"configSO","t":4,"rt":TweenConfigSO,"sn":"configSO"},{"a":2,"n":"custom","t":4,"rt":$n[1].Boolean,"sn":"custom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"target","t":4,"rt":$n[0].Transform,"sn":"target"}]}; }, $n);
    /*TweenData end.*/

    /*UITweenType start.*/
    $m("UITweenType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Active","is":true,"t":4,"rt":UITweenType,"sn":"Active","box":function ($v) { return Bridge.box($v, UITweenType, System.Enum.toStringFn(UITweenType));}},{"a":2,"n":"Fade","is":true,"t":4,"rt":UITweenType,"sn":"Fade","box":function ($v) { return Bridge.box($v, UITweenType, System.Enum.toStringFn(UITweenType));}},{"a":2,"n":"FadeGroup","is":true,"t":4,"rt":UITweenType,"sn":"FadeGroup","box":function ($v) { return Bridge.box($v, UITweenType, System.Enum.toStringFn(UITweenType));}},{"a":2,"n":"LocalMove","is":true,"t":4,"rt":UITweenType,"sn":"LocalMove","box":function ($v) { return Bridge.box($v, UITweenType, System.Enum.toStringFn(UITweenType));}},{"a":2,"n":"Move","is":true,"t":4,"rt":UITweenType,"sn":"Move","box":function ($v) { return Bridge.box($v, UITweenType, System.Enum.toStringFn(UITweenType));}},{"a":2,"n":"None","is":true,"t":4,"rt":UITweenType,"sn":"None","box":function ($v) { return Bridge.box($v, UITweenType, System.Enum.toStringFn(UITweenType));}},{"a":2,"n":"RectLocalMove","is":true,"t":4,"rt":UITweenType,"sn":"RectLocalMove","box":function ($v) { return Bridge.box($v, UITweenType, System.Enum.toStringFn(UITweenType));}},{"a":2,"n":"Scale","is":true,"t":4,"rt":UITweenType,"sn":"Scale","box":function ($v) { return Bridge.box($v, UITweenType, System.Enum.toStringFn(UITweenType));}}]}; }, $n);
    /*UITweenType end.*/

    /*UITween start.*/
    $m("UITween", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Play","is":true,"t":8,"pi":[{"n":"tweenData","pt":TweenData,"ps":0}],"sn":"Play","rt":$n[1].Void,"p":[TweenData]},{"a":1,"n":"PlayTweenActive","is":true,"t":8,"pi":[{"n":"tweenData","pt":TweenData,"ps":0}],"sn":"PlayTweenActive","rt":$n[1].Void,"p":[TweenData]},{"a":1,"n":"PlayTweenFade","is":true,"t":8,"pi":[{"n":"tweenData","pt":TweenData,"ps":0}],"sn":"PlayTweenFade","rt":$n[1].Void,"p":[TweenData]},{"a":1,"n":"PlayTweenFadeGroup","is":true,"t":8,"pi":[{"n":"tweenData","pt":TweenData,"ps":0}],"sn":"PlayTweenFadeGroup","rt":$n[1].Void,"p":[TweenData]},{"a":1,"n":"PlayTweenLocalMove","is":true,"t":8,"pi":[{"n":"tweenData","pt":TweenData,"ps":0}],"sn":"PlayTweenLocalMove","rt":$n[1].Void,"p":[TweenData]},{"a":1,"n":"PlayTweenMove","is":true,"t":8,"pi":[{"n":"tweenData","pt":TweenData,"ps":0}],"sn":"PlayTweenMove","rt":$n[1].Void,"p":[TweenData]},{"a":1,"n":"PlayTweenRectLocalMove","is":true,"t":8,"pi":[{"n":"tweenData","pt":TweenData,"ps":0}],"sn":"PlayTweenRectLocalMove","rt":$n[1].Void,"p":[TweenData]},{"a":1,"n":"PlayTweenScale","is":true,"t":8,"pi":[{"n":"tweenData","pt":TweenData,"ps":0}],"sn":"PlayTweenScale","rt":$n[1].Void,"p":[TweenData]}]}; }, $n);
    /*UITween end.*/

    /*UITweenElement start.*/
    $m("UITweenElement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"Play","t":8,"sn":"Play","rt":$n[1].Void},{"a":2,"n":"playOnAwake","t":4,"rt":$n[1].Boolean,"sn":"playOnAwake","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"tweenData","t":4,"rt":TweenData,"sn":"tweenData"}]}; }, $n);
    /*UITweenElement end.*/

    /*BB10_SpawnBlockData start.*/
    $m("BB10_SpawnBlockData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "SpawnBlockData", menuName: "BB10/Spawn Block Data"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"spawnGroups","t":4,"rt":System.Array.type(SpawnGroup),"sn":"spawnGroups"}]}; }, $n);
    /*BB10_SpawnBlockData end.*/

    /*SpawnGroup start.*/
    $m("SpawnGroup", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"block1","t":4,"rt":Types,"sn":"block1","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"block2","t":4,"rt":Types,"sn":"block2","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"block3","t":4,"rt":Types,"sn":"block3","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}}]}; }, $n);
    /*SpawnGroup end.*/

    /*PattemInfor start.*/
    $m("PattemInfor", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"grid","t":4,"rt":$n[1].Array.type(System.Boolean),"sn":"grid"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"type","t":4,"rt":Types,"sn":"type","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}}]}; }, $n);
    /*PattemInfor end.*/

    /*Level start.*/
    $m("Level", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Level_1","is":true,"t":4,"rt":Level,"sn":"Level_1","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_10","is":true,"t":4,"rt":Level,"sn":"Level_10","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_11","is":true,"t":4,"rt":Level,"sn":"Level_11","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_12","is":true,"t":4,"rt":Level,"sn":"Level_12","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_13","is":true,"t":4,"rt":Level,"sn":"Level_13","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_14","is":true,"t":4,"rt":Level,"sn":"Level_14","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_15","is":true,"t":4,"rt":Level,"sn":"Level_15","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_16","is":true,"t":4,"rt":Level,"sn":"Level_16","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_2","is":true,"t":4,"rt":Level,"sn":"Level_2","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_3","is":true,"t":4,"rt":Level,"sn":"Level_3","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_4","is":true,"t":4,"rt":Level,"sn":"Level_4","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_5","is":true,"t":4,"rt":Level,"sn":"Level_5","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_6","is":true,"t":4,"rt":Level,"sn":"Level_6","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_7","is":true,"t":4,"rt":Level,"sn":"Level_7","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_8","is":true,"t":4,"rt":Level,"sn":"Level_8","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"Level_9","is":true,"t":4,"rt":Level,"sn":"Level_9","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}}]}; }, $n);
    /*Level end.*/

    /*Types start.*/
    $m("Types", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"I0","is":true,"t":4,"rt":Types,"sn":"I0","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"I1","is":true,"t":4,"rt":Types,"sn":"I1","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"I2","is":true,"t":4,"rt":Types,"sn":"I2","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"I3","is":true,"t":4,"rt":Types,"sn":"I3","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"L0","is":true,"t":4,"rt":Types,"sn":"L0","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"L1","is":true,"t":4,"rt":Types,"sn":"L1","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"LB0","is":true,"t":4,"rt":Types,"sn":"LB0","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New1","is":true,"t":4,"rt":Types,"sn":"New1","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New10","is":true,"t":4,"rt":Types,"sn":"New10","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New11","is":true,"t":4,"rt":Types,"sn":"New11","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New12","is":true,"t":4,"rt":Types,"sn":"New12","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New13","is":true,"t":4,"rt":Types,"sn":"New13","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New14","is":true,"t":4,"rt":Types,"sn":"New14","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New15","is":true,"t":4,"rt":Types,"sn":"New15","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New16","is":true,"t":4,"rt":Types,"sn":"New16","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New2","is":true,"t":4,"rt":Types,"sn":"New2","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New3","is":true,"t":4,"rt":Types,"sn":"New3","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New4","is":true,"t":4,"rt":Types,"sn":"New4","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New5","is":true,"t":4,"rt":Types,"sn":"New5","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New6","is":true,"t":4,"rt":Types,"sn":"New6","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New7","is":true,"t":4,"rt":Types,"sn":"New7","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New8","is":true,"t":4,"rt":Types,"sn":"New8","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"New9","is":true,"t":4,"rt":Types,"sn":"New9","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"O0","is":true,"t":4,"rt":Types,"sn":"O0","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"O1","is":true,"t":4,"rt":Types,"sn":"O1","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"O2","is":true,"t":4,"rt":Types,"sn":"O2","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"Plus","is":true,"t":4,"rt":Types,"sn":"Plus","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"T0","is":true,"t":4,"rt":Types,"sn":"T0","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"T1","is":true,"t":4,"rt":Types,"sn":"T1","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"U0","is":true,"t":4,"rt":Types,"sn":"U0","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"W","is":true,"t":4,"rt":Types,"sn":"W","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"X1","is":true,"t":4,"rt":Types,"sn":"X1","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"Z0","is":true,"t":4,"rt":Types,"sn":"Z0","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"id3","is":true,"t":4,"rt":Types,"sn":"id3","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}}]}; }, $n);
    /*Types end.*/

    /*LevelData start.*/
    $m("LevelData", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Score","t":4,"rt":$n[1].Int32,"sn":"Score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"level","t":4,"rt":Level,"sn":"level","box":function ($v) { return Bridge.box($v, Level, System.Enum.toStringFn(Level));}},{"a":2,"n":"weight","t":4,"rt":$n[1].Array.type(System.Int32),"sn":"weight"}]}; }, $n);
    /*LevelData end.*/

    /*Bricks_PattemTableObj start.*/
    $m("Bricks_PattemTableObj", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "PattemData", menuName: "Create Pattem Data"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckException","t":8,"sn":"CheckException","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetFixedRandomType","t":8,"pi":[{"n":"score","pt":$n[1].Int32,"ps":0}],"sn":"GetFixedRandomType","rt":Types,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":1,"n":"GetTypeException","t":8,"sn":"GetTypeException","rt":Types,"box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":1,"n":"RandomWeight","t":8,"pi":[{"n":"list","pt":$n[1].Array.type(System.Int32),"ps":0}],"sn":"RandomWeight","rt":$n[1].Int32,"p":[$n[1].Array.type(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"count","is":true,"t":4,"rt":$n[1].Int32,"sn":"count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"levelData","t":4,"rt":System.Array.type(LevelData),"sn":"levelData"},{"a":2,"n":"listPattemsInfor","t":4,"rt":System.Array.type(PattemInfor),"sn":"listPattemsInfor"}]}; }, $n);
    /*Bricks_PattemTableObj end.*/

    /*GridSaveData start.*/
    $m("GridSaveData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "GridSaveData", menuName: "BB10/Grid Save Data"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"gridData","t":4,"rt":$n[2].List$1(System.Int32),"sn":"gridData"},{"a":2,"n":"gridSprites","t":4,"rt":$n[2].List$1(System.Int32),"sn":"gridSprites"}]}; }, $n);
    /*GridSaveData end.*/

    /*CompleteBlocks start.*/
    $m("CompleteBlocks", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"PlayRandom","t":8,"sn":"PlayRandom","rt":$n[1].Void},{"a":1,"n":"audioSource","t":4,"rt":$n[0].AudioSource,"sn":"audioSource"},{"a":2,"n":"listTextAndSound","t":4,"rt":$n[2].List$1(TextAndSound),"sn":"listTextAndSound"},{"a":2,"n":"spriteRenderer","t":4,"rt":$n[0].SpriteRenderer,"sn":"spriteRenderer"}]}; }, $n);
    /*CompleteBlocks end.*/

    /*SG_Block_EffectCtr start.*/
    $m("SG_Block_EffectCtr", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CreateFirstListEffectBreakBlock","t":8,"sn":"CreateFirstListEffectBreakBlock","rt":$n[1].Void},{"a":2,"n":"EffectBreakBlock","t":8,"pi":[{"n":"pos","pt":$n[0].Vector2,"ps":0},{"n":"iD","pt":$n[1].Int32,"ps":1}],"sn":"EffectBreakBlock","rt":$n[1].Void,"p":[$n[0].Vector2,$n[1].Int32]},{"a":2,"n":"GetParticle","t":8,"pi":[{"n":"ID","pt":$n[1].Int32,"ps":0}],"sn":"GetParticle","rt":$n[0].ParticleSystem,"p":[$n[1].Int32]},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":2,"n":"SetParticle","t":8,"pi":[{"n":"particle","pt":$n[0].ParticleSystem,"ps":0},{"n":"ID","pt":$n[1].Int32,"ps":1}],"sn":"SetParticle","rt":$n[1].Void,"p":[$n[0].ParticleSystem,$n[1].Int32]},{"a":1,"n":"WaitDisable","t":8,"pi":[{"n":"particle","pt":$n[0].ParticleSystem,"ps":0},{"n":"iD","pt":$n[1].Int32,"ps":1}],"sn":"WaitDisable","rt":$n[3].IEnumerator,"p":[$n[0].ParticleSystem,$n[1].Int32]},{"a":2,"n":"listParticlesDisable","t":4,"rt":System.Array.type(System.Collections.Generic.List$1(UnityEngine.ParticleSystem)),"sn":"listParticlesDisable"},{"a":2,"n":"particlePrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"particlePrefabs"},{"a":2,"n":"preload","t":4,"rt":$n[1].Int32,"sn":"preload","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SG_Block_EffectCtr end.*/

    /*TextAndSound start.*/
    $m("TextAndSound", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"audioClip","t":4,"rt":$n[0].AudioClip,"sn":"audioClip"},{"a":2,"n":"sprite","t":4,"rt":$n[0].Sprite,"sn":"sprite"}]}; }, $n);
    /*TextAndSound end.*/

    /*GameEvent start.*/
    $m("GameEvent", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"OnResizeScreen","is":true,"t":16,"rt":$n[5].UnityEvent$1(ScreenType),"g":{"a":2,"n":"get_OnResizeScreen","t":8,"rt":$n[5].UnityEvent$1(ScreenType),"fg":"OnResizeScreen","is":true},"fn":"OnResizeScreen"},{"a":1,"n":"_onResizeScreen","is":true,"t":4,"rt":$n[5].UnityEvent$1(ScreenType),"sn":"_onResizeScreen"}]}; }, $n);
    /*GameEvent end.*/

    /*BB10_MainObjControl start.*/
    $m("BB10_MainObjControl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[3].IEnumerator},{"a":2,"n":"Instant","is":true,"t":16,"rt":BB10_MainObjControl,"g":{"a":2,"n":"get_Instant","t":8,"rt":BB10_MainObjControl,"fg":"Instant","is":true},"fn":"Instant"},{"a":2,"n":"cam","t":4,"rt":CameraScript,"sn":"cam"},{"a":2,"n":"camScript","t":4,"rt":CameraScript,"sn":"camScript"},{"a":2,"n":"colorControl","t":4,"rt":BB10_ColorControl,"sn":"colorControl"},{"a":2,"n":"grid","t":4,"rt":BB10_Grid,"sn":"grid"},{"a":2,"n":"groundView","t":4,"rt":BB10_GroundView,"sn":"groundView"},{"a":2,"n":"helpCtr","t":4,"rt":BB10_ShowHelpCtr,"sn":"helpCtr"},{"a":1,"n":"main","is":true,"t":4,"rt":BB10_MainObjControl,"sn":"main"},{"a":2,"n":"nextViewerCtr","t":4,"rt":BB10_NextViewerControl,"sn":"nextViewerCtr"},{"a":2,"n":"pattemCreater","t":4,"rt":BB10_PattemCreater,"sn":"pattemCreater"},{"a":2,"n":"planeViewCrt","t":4,"rt":BB10_PlaneView,"sn":"planeViewCrt"},{"a":2,"n":"sG_Block_EffectCtr","t":4,"rt":SG_Block_EffectCtr,"sn":"sG_Block_EffectCtr"},{"a":2,"n":"scoreCtr","t":4,"rt":BB10_ScoreCtr,"sn":"scoreCtr"},{"a":2,"n":"screenCtr","t":4,"rt":BB10_ScreenCtr,"sn":"screenCtr"},{"a":2,"n":"tutorial","t":4,"rt":BB10_Tutorial,"sn":"tutorial"}]}; }, $n);
    /*BB10_MainObjControl end.*/

    /*GamePlayManager start.*/
    $m("GamePlayManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GameEnd","t":8,"sn":"GameEnd","rt":$n[1].Void},{"a":2,"n":"GameOver","t":8,"pi":[{"n":"isOver","pt":$n[1].Boolean,"ps":0}],"sn":"GameOver","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"GoToStore","t":8,"sn":"GoToStore","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"UpClick","t":8,"sn":"UpClick","rt":$n[1].Void},{"a":2,"n":"UpScore","t":8,"pi":[{"n":"point","pt":$n[1].Int32,"ps":0}],"sn":"UpScore","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"buttonDownload","t":4,"rt":$n[0].GameObject,"sn":"buttonDownload"},{"a":2,"n":"countClick","t":4,"rt":$n[1].Int32,"sn":"countClick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"isFinishGame","t":4,"rt":$n[1].Boolean,"sn":"isFinishGame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lose","t":4,"rt":$n[0].GameObject,"sn":"lose"},{"a":2,"n":"score","t":4,"rt":$n[1].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute(null, -1, "Target Settings", false, null)],"a":2,"n":"target","t":4,"rt":$n[1].Int32,"sn":"target","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"textProScore","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"textProScore"},{"a":2,"n":"textProTarget","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"textProTarget"},{"a":2,"n":"textScore","t":4,"rt":$n[6].Text,"sn":"textScore"},{"a":2,"n":"textTarget","t":4,"rt":$n[6].Text,"sn":"textTarget"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute(null, -1, "Target Settings", false, null)],"a":2,"n":"totalClick","t":4,"rt":$n[1].Int32,"sn":"totalClick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"win","t":4,"rt":$n[0].GameObject,"sn":"win"}]}; }, $n);
    /*GamePlayManager end.*/

    /*ResponsiveManager start.*/
    $m("ResponsiveManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateScreenType","t":8,"sn":"UpdateScreenType","rt":$n[1].Void},{"a":2,"n":"screenType","t":4,"rt":ScreenType,"sn":"screenType","box":function ($v) { return Bridge.box($v, ScreenType, System.Enum.toStringFn(ScreenType));}},{"a":1,"n":"widthScreen","t":4,"rt":$n[1].Single,"sn":"widthScreen","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ResponsiveManager end.*/

    /*ScreenType start.*/
    $m("ScreenType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":ScreenType,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, ScreenType, System.Enum.toStringFn(ScreenType));}},{"a":2,"n":"Tablet","is":true,"t":4,"rt":ScreenType,"sn":"Tablet","box":function ($v) { return Bridge.box($v, ScreenType, System.Enum.toStringFn(ScreenType));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":ScreenType,"sn":"Vertical","box":function ($v) { return Bridge.box($v, ScreenType, System.Enum.toStringFn(ScreenType));}},{"a":2,"n":"VerticalTall","is":true,"t":4,"rt":ScreenType,"sn":"VerticalTall","box":function ($v) { return Bridge.box($v, ScreenType, System.Enum.toStringFn(ScreenType));}}]}; }, $n);
    /*ScreenType end.*/

    /*TimerProgress start.*/
    $m("TimerProgress", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SetTime","t":8,"pi":[{"n":"time","pt":$n[1].Single,"ps":0}],"sn":"SetTime","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"StopTimer","t":8,"sn":"StopTimer","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"IsStart","t":4,"rt":$n[1].Boolean,"sn":"IsStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"fillImage","t":4,"rt":$n[6].Image,"sn":"fillImage"},{"a":2,"n":"fillImageRed","t":4,"rt":$n[0].Sprite,"sn":"fillImageRed"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute(null, -1, "Timer Settings", false, null)],"a":2,"n":"haveTimer","t":4,"rt":$n[1].Boolean,"sn":"haveTimer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isFillRed","t":4,"rt":$n[1].Boolean,"sn":"isFillRed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isFormatTimeMMSS","t":4,"rt":$n[1].Boolean,"sn":"isFormatTimeMMSS","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isWarning","t":4,"rt":$n[1].Boolean,"sn":"isWarning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"slider","t":4,"rt":$n[6].Slider,"sn":"slider"},{"a":2,"n":"timeWarning","t":4,"rt":$n[1].Single,"sn":"timeWarning","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute(null, -1, "Timer Settings", false, null)],"a":2,"n":"timer","t":4,"rt":$n[1].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"timerText","t":4,"rt":$n[4].TMP_Text,"sn":"timerText"},{"a":1,"n":"warningSoundInterval","t":4,"rt":$n[1].Single,"sn":"warningSoundInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"warningSoundTimer","t":4,"rt":$n[1].Single,"sn":"warningSoundTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"warningSprite","t":4,"rt":$n[0].GameObject,"sn":"warningSprite"},{"a":1,"n":"warningTween","t":4,"rt":$n[7].Tween,"sn":"warningTween"}]}; }, $n);
    /*TimerProgress end.*/

    /*TutorialManager start.*/
    $m("TutorialManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetBlockCenter","t":8,"sn":"GetBlockCenter","rt":$n[0].Vector3},{"a":1,"n":"GetShadowCenter","t":8,"sn":"GetShadowCenter","rt":$n[0].Vector3},{"a":1,"n":"GetValidBlock","t":8,"sn":"GetValidBlock","rt":BB10_NextViewer},{"a":1,"n":"PlayHandTutorial","t":8,"sn":"PlayHandTutorial","rt":$n[1].Void},{"a":1,"n":"ResetIdleTimer","t":8,"sn":"ResetIdleTimer","rt":$n[1].Void},{"a":1,"n":"ShowTutorial","t":8,"sn":"ShowTutorial","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[3].IEnumerator},{"a":1,"n":"StartBounceTutorial","t":8,"sn":"StartBounceTutorial","rt":$n[1].Void},{"a":2,"n":"Hand","t":4,"rt":$n[0].GameObject,"sn":"Hand"},{"a":2,"n":"TextTut","t":4,"rt":$n[0].GameObject,"sn":"TextTut"},{"a":2,"n":"blockTutorial","t":4,"rt":BB10_NextViewer,"sn":"blockTutorial"},{"a":1,"n":"bounceTween","t":4,"rt":$n[7].Sequence,"sn":"bounceTween"},{"a":2,"n":"c","t":4,"rt":$n[1].Int32,"sn":"c","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"firstBlock","t":4,"rt":BB10_NextViewer,"sn":"firstBlock"},{"a":2,"n":"groundView","t":4,"rt":BB10_GroundView,"sn":"groundView"},{"a":2,"n":"idleTimeToShow","t":4,"rt":$n[1].Single,"sn":"idleTimeToShow","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("---------- Tutorial -----------")],"a":2,"n":"idleTimer","t":4,"rt":$n[1].Single,"sn":"idleTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isFirstTouch","t":4,"rt":$n[1].Boolean,"sn":"isFirstTouch","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTutorialPlaying","t":4,"rt":$n[1].Boolean,"sn":"isTutorialPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"nextViewers","t":4,"rt":$n[2].List$1(BB10_NextViewer),"sn":"nextViewers"},{"a":2,"n":"r","t":4,"rt":$n[1].Int32,"sn":"r","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*TutorialManager end.*/

    /*AddSelectItem start.*/
    $m("AddSelectItem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddItem","t":8,"sn":"AddItem","rt":$n[1].Void},{"a":2,"n":"CreateTable","t":8,"sn":"CreateTable","rt":$n[1].Void},{"a":2,"n":"col","t":4,"rt":$n[1].Int32,"sn":"col","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"count","t":4,"rt":$n[1].Int32,"sn":"count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"grid","t":4,"rt":$n[6].GridLayoutGroup,"sn":"grid"},{"a":2,"n":"height","t":4,"rt":$n[1].Single,"sn":"height","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"item","t":4,"rt":$n[0].GameObject,"sn":"item"},{"a":2,"n":"listUnit","t":4,"rt":System.Array.type(ItemUnit),"sn":"listUnit"},{"a":2,"n":"rec","t":4,"rt":$n[0].RectTransform,"sn":"rec"},{"a":2,"n":"row","t":4,"rt":$n[1].Int32,"sn":"row","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*AddSelectItem end.*/

    /*AutoPlay start.*/
    $m("AutoPlay", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"InitAuto","t":8,"sn":"InitAuto","rt":$n[3].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"StartAuto","t":8,"sn":"StartAuto","rt":$n[3].IEnumerator},{"a":1,"n":"grid","t":4,"rt":BB10_Grid,"sn":"grid"},{"a":1,"n":"nextViewerCtr","t":4,"rt":BB10_NextViewerControl,"sn":"nextViewerCtr"},{"a":1,"n":"planeView","t":4,"rt":BB10_PlaneView,"sn":"planeView"},{"a":2,"n":"timeScale","t":4,"rt":$n[1].Int32,"sn":"timeScale","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*AutoPlay end.*/

    /*BB10_BrickCubeUnit start.*/
    $m("BB10_BrickCubeUnit", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyRotate","t":8,"sn":"ApplyRotate","rt":$n[1].Void},{"a":2,"n":"DropDown","t":8,"pi":[{"n":"startPos","pt":$n[0].Vector2,"ps":0},{"n":"targetPos","pt":$n[0].Vector2,"ps":1},{"n":"durationMove","pt":$n[1].Single,"ps":2}],"sn":"DropDown","rt":$n[1].Void,"p":[$n[0].Vector2,$n[0].Vector2,$n[1].Single]},{"v":true,"a":2,"n":"Effect","t":8,"sn":"Effect","rt":$n[1].Void},{"a":1,"n":"EffectHideBlock","t":8,"sn":"EffectHideBlock","rt":$n[3].IEnumerator},{"a":2,"n":"MoveCenterPos","t":8,"pi":[{"n":"pos","pt":$n[0].Vector2,"ps":0},{"n":"center","pt":$n[0].Vector2,"ps":1}],"sn":"MoveCenterPos","rt":$n[1].Void,"p":[$n[0].Vector2,$n[0].Vector2]},{"a":1,"n":"OnClickBlock","t":8,"sn":"OnClickBlock","rt":$n[1].Void},{"a":2,"n":"RotateUnit","t":8,"sn":"RotateUnit","rt":$n[1].Void},{"a":2,"n":"SetAlpha","t":8,"pi":[{"n":"alpha","pt":$n[1].Single,"ps":0}],"sn":"SetAlpha","rt":$n[1].Void,"p":[$n[1].Single]},{"a":2,"n":"SetLayer","t":8,"pi":[{"n":"layer","pt":$n[1].Int32,"ps":0}],"sn":"SetLayer","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetShadowDropBlock","t":8,"pi":[{"n":"enable","pt":$n[1].Boolean,"ps":0}],"sn":"SetShadowDropBlock","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SetSprite","t":8,"pi":[{"n":"data","pt":BB10_ColorData,"ps":0}],"sn":"SetSprite","rt":$n[1].Void,"p":[BB10_ColorData]},{"a":2,"n":"SetSprite","t":8,"pi":[{"n":"sprite","pt":$n[0].Sprite,"ps":0}],"sn":"SetSprite$1","rt":$n[1].Void,"p":[$n[0].Sprite]},{"a":1,"n":"StartDrop","t":8,"pi":[{"n":"startPos","pt":$n[0].Vector2,"ps":0},{"n":"targetPos","pt":$n[0].Vector2,"ps":1},{"n":"durationMove","pt":$n[1].Single,"ps":2}],"sn":"StartDrop","rt":$n[3].IEnumerator,"p":[$n[0].Vector2,$n[0].Vector2,$n[1].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"v":true,"a":2,"n":"WaitEffect","t":8,"sn":"WaitEffect","rt":$n[3].IEnumerator},{"a":2,"n":"GetObj","t":16,"rt":$n[0].GameObject,"g":{"a":2,"n":"get_GetObj","t":8,"rt":$n[0].GameObject,"fg":"GetObj"},"fn":"GetObj"},{"a":2,"n":"GetSpriteID","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetSpriteID","t":8,"rt":$n[1].Int32,"fg":"GetSpriteID","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetSpriteID"},{"a":2,"n":"ID","t":4,"rt":$n[1].Int32,"sn":"ID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ac","t":4,"rt":pc.AnimationCurve,"sn":"ac"},{"a":2,"n":"col","t":4,"rt":$n[1].Int32,"sn":"col","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dropScaleMin","t":4,"rt":$n[0].Vector3,"sn":"dropScaleMin"},{"a":2,"n":"durationDrop","t":4,"rt":$n[1].Single,"sn":"durationDrop","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationScaleEffect","t":4,"rt":$n[1].Single,"sn":"durationScaleEffect","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"indexCol","t":4,"rt":$n[1].Int32,"sn":"indexCol","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indexRow","t":4,"rt":$n[1].Int32,"sn":"indexRow","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"myData","t":4,"rt":BB10_ColorData,"sn":"myData"},{"a":2,"n":"render","t":4,"rt":$n[0].SpriteRenderer,"sn":"render"},{"a":2,"n":"row","t":4,"rt":$n[1].Int32,"sn":"row","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"scale","t":4,"rt":$n[1].Single,"sn":"scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"shadowDropBlock","t":4,"rt":$n[0].GameObject,"sn":"shadowDropBlock"},{"a":2,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speedRotate","t":4,"rt":$n[1].Single,"sn":"speedRotate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"targetGray","t":4,"rt":$n[1].Single,"sn":"targetGray","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"targetScale","t":4,"rt":$n[1].Single,"sn":"targetScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"thisType","t":4,"rt":Types,"sn":"thisType","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"viewer","t":4,"rt":BB10_NextViewer,"sn":"viewer"}]}; }, $n);
    /*BB10_BrickCubeUnit end.*/

    /*BB10_ColorControl start.*/
    $m("BB10_ColorControl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CreateSprite","t":8,"pi":[{"n":"texture","pt":$n[0].Texture2D,"ps":0},{"n":"t","pt":$n[1].Single,"ps":1}],"sn":"CreateSprite","rt":$n[0].Sprite,"p":[$n[0].Texture2D,$n[1].Single]},{"a":2,"n":"GetNextSpriteData","t":8,"sn":"GetNextSpriteData","rt":BB10_ColorData},{"a":2,"n":"GetRandSpriteData","t":8,"sn":"GetRandSpriteData","rt":BB10_ColorData},{"a":2,"n":"GetSprite","t":8,"pi":[{"n":"ID","pt":$n[1].Int32,"ps":0},{"n":"t","pt":$n[1].Single,"ps":1}],"sn":"GetSprite","rt":$n[0].Sprite,"p":[$n[1].Int32,$n[1].Single]},{"a":2,"n":"GetSpriteData","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"GetSpriteData","rt":BB10_ColorData,"p":[$n[1].Int32]},{"a":2,"n":"GrayscaleSprites","t":8,"pi":[{"n":"t","pt":$n[1].Single,"ps":0}],"sn":"GrayscaleSprites","rt":System.Array.type(UnityEngine.Sprite),"p":[$n[1].Single]},{"a":1,"n":"SettupTexture","t":8,"sn":"SettupTexture","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"count","t":4,"rt":$n[1].Int32,"sn":"count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"height","t":4,"rt":$n[1].Int32,"sn":"height","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"pixelsPerUnit","t":4,"rt":$n[1].Single,"sn":"pixelsPerUnit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"preload","t":4,"rt":$n[1].Int32,"sn":"preload","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"preloadSprite","t":4,"rt":System.Array.type(System.Array.type(UnityEngine.Sprite)),"sn":"preloadSprite"},{"a":2,"n":"spriteTexs","t":4,"rt":System.Array.type(UnityEngine.Texture2D),"sn":"spriteTexs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"sprites","t":4,"rt":System.Array.type(BB10_ColorData),"sn":"sprites"},{"a":1,"n":"width","t":4,"rt":$n[1].Int32,"sn":"width","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*BB10_ColorControl end.*/

    /*BB10_ColorData start.*/
    $m("BB10_ColorData", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ID","t":4,"rt":$n[1].Int32,"sn":"ID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"sprite","t":4,"rt":$n[0].Sprite,"sn":"sprite"}]}; }, $n);
    /*BB10_ColorData end.*/

    /*BB10_Grid start.*/
    $m("BB10_Grid", function () { return {"nested":[BB10_Grid.fillData,BB10_Grid.unitWait],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"CenterOfList","t":8,"pi":[{"n":"listFill","pt":$n[2].List$1(UnityEngine.Vector2),"ps":0}],"sn":"CenterOfList","rt":$n[0].Vector2,"p":[$n[2].List$1(UnityEngine.Vector2)]},{"a":2,"n":"ChangeSpriteFillCol","t":8,"pi":[{"n":"col","pt":$n[1].Int32,"ps":0},{"n":"data","pt":BB10_ColorData,"ps":1}],"sn":"ChangeSpriteFillCol","rt":$n[1].Void,"p":[$n[1].Int32,BB10_ColorData]},{"a":2,"n":"ChangeSpriteFillRow","t":8,"pi":[{"n":"row","pt":$n[1].Int32,"ps":0},{"n":"data","pt":BB10_ColorData,"ps":1}],"sn":"ChangeSpriteFillRow","rt":$n[1].Void,"p":[$n[1].Int32,BB10_ColorData]},{"a":1,"n":"CheckBundle","t":8,"sn":"CheckBundle","rt":$n[1].Void},{"a":2,"n":"CheckGrid","t":8,"pi":[{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0},{"n":"isCollect","ref":true,"pt":$n[1].Boolean,"ps":1}],"sn":"CheckGrid","rt":$n[1].Void,"p":[$n[2].List$1(BB10_BrickCubeUnit),$n[1].Boolean]},{"a":2,"n":"CheckGridFillTest","t":8,"pi":[{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0},{"n":"mainRow","pt":$n[1].Int32,"ps":1},{"n":"mainCol","pt":$n[1].Int32,"ps":2},{"n":"data","pt":BB10_ColorData,"ps":3}],"sn":"CheckGridFillTest","rt":$n[1].Void,"p":[$n[2].List$1(BB10_BrickCubeUnit),$n[1].Int32,$n[1].Int32,BB10_ColorData]},{"a":2,"n":"ClearListFill","t":8,"sn":"ClearListFill","rt":$n[1].Void},{"a":1,"n":"ConvertListToString","t":8,"pi":[{"n":"data","pt":$n[2].List$1(System.Int32),"ps":0}],"sn":"ConvertListToString","rt":$n[1].String,"p":[$n[2].List$1(System.Int32)]},{"a":2,"n":"CreateEffect","t":8,"pi":[{"n":"pos","pt":$n[0].Vector3,"ps":0}],"sn":"CreateEffect","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":1,"n":"DeleteList","t":8,"pi":[{"n":"newCubeUnitWait","pt":$n[2].List$1(BB10_Grid.unitWait),"ps":0}],"sn":"DeleteList","rt":$n[3].IEnumerator,"p":[$n[2].List$1(BB10_Grid.unitWait)]},{"a":1,"n":"DeleteListEffect","t":8,"pi":[{"n":"listBlockDelete","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0}],"sn":"DeleteListEffect","rt":$n[3].IEnumerator,"p":[$n[2].List$1(BB10_BrickCubeUnit)]},{"a":1,"n":"DeleteOneCol","t":8,"pi":[{"n":"col","pt":$n[1].Int32,"ps":0},{"n":"thisRow","pt":$n[1].Int32,"ps":1},{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":2},{"n":"isUp","pt":$n[1].Boolean,"ps":3}],"sn":"DeleteOneCol","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit),$n[1].Boolean]},{"a":1,"n":"DeleteOneRow","t":8,"pi":[{"n":"row","pt":$n[1].Int32,"ps":0},{"n":"thisCol","pt":$n[1].Int32,"ps":1},{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":2},{"n":"isUp","pt":$n[1].Boolean,"ps":3}],"sn":"DeleteOneRow","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit),$n[1].Boolean]},{"a":2,"n":"DeleteSomeBlock","t":8,"sn":"DeleteSomeBlock","rt":$n[1].Void},{"a":1,"n":"GetCenterCol","t":8,"pi":[{"n":"col","pt":$n[1].Int32,"ps":0}],"sn":"GetCenterCol","rt":$n[0].Vector2,"p":[$n[1].Int32]},{"a":1,"n":"GetCenterRow","t":8,"pi":[{"n":"row","pt":$n[1].Int32,"ps":0}],"sn":"GetCenterRow","rt":$n[0].Vector2,"p":[$n[1].Int32]},{"a":1,"n":"GetOneInCol","t":8,"pi":[{"n":"c","pt":$n[1].Int32,"ps":0},{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":1}],"sn":"GetOneInCol","rt":BB10_BrickCubeUnit,"p":[$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit)]},{"a":1,"n":"GetOneInRow","t":8,"pi":[{"n":"r","pt":$n[1].Int32,"ps":0},{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":1}],"sn":"GetOneInRow","rt":BB10_BrickCubeUnit,"p":[$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit)]},{"a":2,"n":"GetPlacePattem","t":8,"pi":[{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0}],"sn":"GetPlacePattem","rt":Vec2,"p":[$n[2].List$1(BB10_BrickCubeUnit)]},{"a":1,"n":"GetRandGray","t":8,"sn":"GetRandGray","rt":$n[1].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GrayBlock","t":8,"pi":[{"n":"unit","pt":BB10_BrickCubeUnit,"ps":0},{"n":"targetGray","pt":$n[1].Single,"ps":1},{"n":"isGrayIn","pt":$n[1].Boolean,"ps":2}],"sn":"GrayBlock","rt":$n[3].IEnumerator,"p":[BB10_BrickCubeUnit,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"GrayScaleMap","t":8,"pi":[{"n":"isGrayIn","pt":$n[1].Boolean,"ps":0}],"sn":"GrayScaleMap","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"InvalidPlacePattem","t":8,"pi":[{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0}],"sn":"InvalidPlacePattem","rt":$n[1].Boolean,"p":[$n[2].List$1(BB10_BrickCubeUnit)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"InvalidPoint","t":8,"pi":[{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0},{"n":"row","pt":$n[1].Int32,"ps":1},{"n":"col","pt":$n[1].Int32,"ps":2}],"sn":"InvalidPoint","rt":$n[1].Boolean,"p":[$n[2].List$1(BB10_BrickCubeUnit),$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsColFillWith","t":8,"pi":[{"n":"r","pt":$n[1].Int32,"ps":0},{"n":"c","pt":$n[1].Int32,"ps":1}],"sn":"IsColFillWith","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsInList","t":8,"pi":[{"n":"r","pt":$n[1].Int32,"ps":0},{"n":"c","pt":$n[1].Int32,"ps":1},{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":2}],"sn":"IsInList","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsInListInt","t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0},{"n":"listInt","pt":$n[2].List$1(System.Int32),"ps":1}],"sn":"IsInListInt","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[2].List$1(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsInListTest","t":8,"pi":[{"n":"r","pt":$n[1].Int32,"ps":0},{"n":"c","pt":$n[1].Int32,"ps":1},{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":2},{"n":"mainRow","pt":$n[1].Int32,"ps":3},{"n":"mainCol","pt":$n[1].Int32,"ps":4}],"sn":"IsInListTest","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit),$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsRowFillWith","t":8,"pi":[{"n":"r","pt":$n[1].Int32,"ps":0},{"n":"c","pt":$n[1].Int32,"ps":1}],"sn":"IsRowFillWith","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LoadDataSave","t":8,"sn":"LoadDataSave","rt":$n[1].Void},{"a":2,"n":"PosValidPattem","t":8,"pi":[{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0}],"sn":"PosValidPattem","rt":$n[0].Vector2,"p":[$n[2].List$1(BB10_BrickCubeUnit)]},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":1,"n":"SaveData","t":8,"sn":"SaveData","rt":$n[1].Void},{"a":2,"n":"SetAllBlock","t":8,"sn":"SetAllBlock","rt":$n[1].Void},{"a":1,"n":"SpawnGridVisual","t":8,"sn":"SpawnGridVisual","rt":$n[1].Void},{"a":1,"n":"StartGrayScale","t":8,"pi":[{"n":"isGrayIn","pt":$n[1].Boolean,"ps":0}],"sn":"StartGrayScale","rt":$n[3].IEnumerator,"p":[$n[1].Boolean]},{"a":2,"n":"TurnOffAllFillLine","t":8,"sn":"TurnOffAllFillLine","rt":$n[1].Void},{"a":2,"n":"ValidPlaceMoreThanOne","t":8,"pi":[{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0}],"sn":"ValidPlaceMoreThanOne","rt":$n[1].Boolean,"p":[$n[2].List$1(BB10_BrickCubeUnit)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"deleteCol","t":8,"pi":[{"n":"col","pt":$n[1].Int32,"ps":0},{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":1}],"sn":"deleteCol","rt":$n[1].Void,"p":[$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit)]},{"a":1,"n":"deleteRow","t":8,"pi":[{"n":"row","pt":$n[1].Int32,"ps":0},{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":1}],"sn":"deleteRow","rt":$n[1].Void,"p":[$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit)]},{"a":2,"n":"insideBorder","t":8,"pi":[{"n":"cubeUnit","pt":BB10_BrickCubeUnit,"ps":0}],"sn":"insideBorder","rt":$n[1].Int32,"p":[BB10_BrickCubeUnit],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"isColFull","t":8,"pi":[{"n":"col","pt":$n[1].Int32,"ps":0},{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":1}],"sn":"isColFull","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isColFullTest","t":8,"pi":[{"n":"col","pt":$n[1].Int32,"ps":0},{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":1},{"n":"mainRow","pt":$n[1].Int32,"ps":2},{"n":"mainCol","pt":$n[1].Int32,"ps":3}],"sn":"isColFullTest","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit),$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRowFull","t":8,"pi":[{"n":"row","pt":$n[1].Int32,"ps":0},{"n":"newCubeUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":1},{"n":"listColDeleted","pt":$n[2].List$1(System.Int32),"ps":2}],"sn":"isRowFull","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit),$n[2].List$1(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRowFullTest","t":8,"pi":[{"n":"row","pt":$n[1].Int32,"ps":0},{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":1},{"n":"mainRow","pt":$n[1].Int32,"ps":2},{"n":"mainCol","pt":$n[1].Int32,"ps":3}],"sn":"isRowFullTest","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[2].List$1(BB10_BrickCubeUnit),$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"cellPrefab","t":4,"rt":$n[0].GameObject,"sn":"cellPrefab"},{"a":2,"n":"cellSize","t":4,"rt":$n[1].Single,"sn":"cellSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"colorCtr","t":4,"rt":BB10_ColorControl,"sn":"colorCtr"},{"a":2,"n":"completeText","t":4,"rt":$n[0].GameObject,"sn":"completeText"},{"a":2,"n":"durationGray","t":4,"rt":$n[1].Single,"sn":"durationGray","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"effectPositions","t":4,"rt":$n[2].List$1(UnityEngine.Vector2),"sn":"effectPositions"},{"a":2,"n":"fullGray","t":4,"rt":$n[1].Single,"sn":"fullGray","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"grid","t":4,"rt":System.Array.type(BB10_BrickCubeUnit, 2),"sn":"grid"},{"a":2,"n":"gridPos","t":4,"rt":System.Array.type(UnityEngine.Vector2, 2),"sn":"gridPos"},{"a":2,"n":"halfGray","t":4,"rt":$n[1].Single,"sn":"halfGray","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"isCreateCell","t":4,"rt":$n[1].Boolean,"sn":"isCreateCell","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listFill","t":4,"rt":$n[2].List$1(BB10_Grid.fillData),"sn":"listFill"},{"a":2,"n":"nonGray","t":4,"rt":$n[1].Single,"sn":"nonGray","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"numberCol","t":4,"rt":$n[1].Int32,"sn":"numberCol","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"numberRow","t":4,"rt":$n[1].Int32,"sn":"numberRow","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"parentGrid","t":4,"rt":$n[0].Transform,"sn":"parentGrid"},{"a":1,"n":"pattemCreater","t":4,"rt":BB10_PattemCreater,"sn":"pattemCreater"},{"a":2,"n":"saveData","t":4,"rt":GridSaveData,"sn":"saveData"},{"a":2,"n":"score","t":4,"rt":$n[1].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"waitDelete","t":4,"rt":$n[1].Single,"sn":"waitDelete","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waitPerUnit","t":4,"rt":$n[1].Single,"sn":"waitPerUnit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waitUnit","t":4,"rt":$n[1].Single,"sn":"waitUnit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BB10_Grid end.*/

    /*BB10_Grid+fillData start.*/
    $m("BB10_Grid.fillData", function () { return {"td":BB10_Grid,"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"cubeCol","t":4,"rt":$n[1].Int32,"sn":"cubeCol","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"cubeRow","t":4,"rt":$n[1].Int32,"sn":"cubeRow","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"data","t":4,"rt":BB10_ColorData,"sn":"data"}]}; }, $n);
    /*BB10_Grid+fillData end.*/

    /*BB10_Grid+unitWait start.*/
    $m("BB10_Grid.unitWait", function () { return {"td":BB10_Grid,"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"isWait","t":4,"rt":$n[1].Boolean,"sn":"isWait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"unit","t":4,"rt":BB10_BrickCubeUnit,"sn":"unit"}]}; }, $n);
    /*BB10_Grid+unitWait end.*/

    /*BB10_GroundView start.*/
    $m("BB10_GroundView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetCube","t":8,"sn":"GetCube","rt":$n[0].SpriteRenderer},{"a":2,"n":"HideAllBlock","t":8,"sn":"HideAllBlock","rt":$n[1].Void},{"a":2,"n":"SetPattem","t":8,"pi":[{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0},{"n":"row","pt":$n[1].Int32,"ps":1},{"n":"col","pt":$n[1].Int32,"ps":2},{"n":"data","pt":BB10_ColorData,"ps":3}],"sn":"SetPattem","rt":$n[1].Void,"p":[$n[2].List$1(BB10_BrickCubeUnit),$n[1].Int32,$n[1].Int32,BB10_ColorData]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"ID","t":4,"rt":$n[1].Int32,"sn":"ID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"groundPrefab","t":4,"rt":$n[0].GameObject,"sn":"groundPrefab"},{"a":2,"n":"listBlockRender","t":4,"rt":$n[2].List$1(UnityEngine.SpriteRenderer),"sn":"listBlockRender"},{"a":1,"n":"vecDown","t":4,"rt":$n[0].Vector3,"sn":"vecDown"}]}; }, $n);
    /*BB10_GroundView end.*/

    /*BB10_NextViewer start.*/
    $m("BB10_NextViewer", function () { return {"nested":[BB10_NextViewer.State],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"CheckImpossible","t":8,"sn":"CheckImpossible","rt":$n[1].Void},{"a":2,"n":"ClickPattern","t":8,"sn":"ClickPattern","rt":$n[1].Void},{"a":2,"n":"FixCenterPos","t":8,"sn":"FixCenterPos","rt":$n[1].Void},{"a":2,"n":"GreyWhenGameOver","t":8,"sn":"GreyWhenGameOver","rt":$n[1].Void},{"a":2,"n":"HideAllBlock","t":8,"sn":"HideAllBlock","rt":$n[1].Void},{"a":1,"n":"MoveBlocks","t":8,"sn":"MoveBlocks","rt":$n[3].IEnumerator},{"a":2,"n":"PosValid","t":8,"sn":"PosValid","rt":$n[0].Vector2},{"a":2,"n":"RotatePattem","t":8,"pi":[{"n":"numberRotate","pt":$n[1].Int32,"ps":0}],"sn":"RotatePattem","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"RotatePattemOne","t":8,"sn":"RotatePattemOne","rt":$n[1].Void},{"a":2,"n":"SetAllBlock","t":8,"sn":"SetAllBlock","rt":$n[1].Void},{"a":1,"n":"SetBlockPos","t":8,"pi":[{"n":"pos","pt":$n[0].Vector2,"ps":0}],"sn":"SetBlockPos","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":1,"n":"SetLight","t":8,"pi":[{"n":"alpha","pt":$n[1].Single,"ps":0}],"sn":"SetLight","rt":$n[1].Void,"p":[$n[1].Single]},{"a":2,"n":"SetPattem","t":8,"pi":[{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0},{"n":"type","pt":Types,"ps":1},{"n":"numberRotate","pt":$n[1].Int32,"ps":2},{"n":"isRotate","pt":$n[1].Boolean,"ps":3}],"sn":"SetPattem","rt":$n[1].Void,"p":[$n[2].List$1(BB10_BrickCubeUnit),Types,$n[1].Int32,$n[1].Boolean]},{"a":2,"n":"SetPattemAndRotate","t":8,"pi":[{"n":"listUnit","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0},{"n":"type","pt":Types,"ps":1}],"sn":"SetPattemAndRotate","rt":$n[1].Void,"p":[$n[2].List$1(BB10_BrickCubeUnit),Types]},{"a":2,"n":"ShowAllBlock","t":8,"sn":"ShowAllBlock","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"StartSetLight","t":8,"pi":[{"n":"fromAlpha","pt":$n[1].Single,"ps":0},{"n":"toAlpha","pt":$n[1].Single,"ps":1}],"sn":"StartSetLight","rt":$n[3].IEnumerator,"p":[$n[1].Single,$n[1].Single]},{"a":2,"n":"ValidMoreThanOne","t":8,"sn":"ValidMoreThanOne","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ScaleUpAnim","t":4,"rt":$n[3].IEnumerator,"sn":"ScaleUpAnim"},{"a":2,"n":"ac1","t":4,"rt":pc.AnimationCurve,"sn":"ac1"},{"a":2,"n":"ac2","t":4,"rt":pc.AnimationCurve,"sn":"ac2"},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationIn","t":4,"rt":$n[1].Single,"sn":"durationIn","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationLight","t":4,"rt":$n[1].Single,"sn":"durationLight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"index","t":4,"rt":$n[1].Int32,"sn":"index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isMoving","t":4,"rt":$n[1].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listBlock","t":4,"rt":$n[2].List$1(BB10_BrickCubeUnit),"sn":"listBlock"},{"a":1,"n":"listBlockLocalPos","t":4,"rt":System.Array.type(UnityEngine.Vector2),"sn":"listBlockLocalPos"},{"a":2,"n":"myType","t":4,"rt":Types,"sn":"myType","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":1,"n":"normalPos","t":4,"rt":$n[0].Vector2,"sn":"normalPos"},{"a":2,"n":"rotateTime","t":4,"rt":$n[1].Int32,"sn":"rotateTime","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"scale","t":4,"rt":$n[1].Single,"sn":"scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"startPos1","t":4,"rt":$n[0].Vector2,"sn":"startPos1"},{"a":2,"n":"startPos2","t":4,"rt":$n[0].Vector2,"sn":"startPos2"},{"a":2,"n":"state","t":4,"rt":BB10_NextViewer.State,"sn":"state","box":function ($v) { return Bridge.box($v, BB10_NextViewer.State, System.Enum.toStringFn(BB10_NextViewer.State));}}]}; }, $n);
    /*BB10_NextViewer end.*/

    /*BB10_NextViewer+State start.*/
    $m("BB10_NextViewer.State", function () { return {"td":BB10_NextViewer,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Hide","is":true,"t":4,"rt":BB10_NextViewer.State,"sn":"Hide","box":function ($v) { return Bridge.box($v, BB10_NextViewer.State, System.Enum.toStringFn(BB10_NextViewer.State));}},{"a":2,"n":"Null","is":true,"t":4,"rt":BB10_NextViewer.State,"sn":"Null","box":function ($v) { return Bridge.box($v, BB10_NextViewer.State, System.Enum.toStringFn(BB10_NextViewer.State));}},{"a":2,"n":"Show","is":true,"t":4,"rt":BB10_NextViewer.State,"sn":"Show","box":function ($v) { return Bridge.box($v, BB10_NextViewer.State, System.Enum.toStringFn(BB10_NextViewer.State));}}]}; }, $n);
    /*BB10_NextViewer+State end.*/

    /*BB10_NextViewerControl start.*/
    $m("BB10_NextViewerControl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"CheckGameOver","t":8,"sn":"CheckGameOver","rt":$n[1].Void},{"a":2,"n":"CheckHelp","t":8,"sn":"CheckHelp","rt":$n[1].Void},{"a":1,"n":"CheckImpossiblePattem","t":8,"sn":"CheckImpossiblePattem","rt":$n[1].Void},{"a":2,"n":"CheckUpdateNewPattem","t":8,"sn":"CheckUpdateNewPattem","rt":$n[1].Void},{"a":2,"n":"GetNewPattems","t":8,"sn":"GetNewPattems","rt":$n[1].Void},{"a":2,"n":"GreyWhenGameOver","t":8,"sn":"GreyWhenGameOver","rt":$n[1].Void},{"a":1,"n":"InvalidAllPattem","t":8,"sn":"InvalidAllPattem","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsEmptyAll","t":8,"sn":"IsEmptyAll","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsGameOver","t":8,"sn":"IsGameOver","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"NumberPattemO2","t":8,"pi":[{"n":"t0","pt":Types,"ps":0},{"n":"t1","pt":Types,"ps":1},{"n":"t2","pt":Types,"ps":2}],"sn":"NumberPattemO2","rt":$n[1].Int32,"p":[Types,Types,Types],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":2,"n":"RotatePattem","t":8,"pi":[{"n":"listUnitRotate","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0}],"sn":"RotatePattem","rt":$n[1].Void,"p":[$n[2].List$1(BB10_BrickCubeUnit)]},{"a":2,"n":"SetAllBlock","t":8,"sn":"SetAllBlock","rt":$n[1].Void},{"a":2,"n":"SetAllBlockFromList","t":8,"pi":[{"n":"listBlock","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0}],"sn":"SetAllBlockFromList","rt":$n[1].Void,"p":[$n[2].List$1(BB10_BrickCubeUnit)]},{"a":1,"n":"UpdatePattems","t":8,"sn":"UpdatePattems","rt":$n[1].Void},{"a":2,"n":"listUnit0","t":4,"rt":$n[2].List$1(BB10_BrickCubeUnit),"sn":"listUnit0"},{"a":2,"n":"listUnit1","t":4,"rt":$n[2].List$1(BB10_BrickCubeUnit),"sn":"listUnit1"},{"a":2,"n":"listUnit2","t":4,"rt":$n[2].List$1(BB10_BrickCubeUnit),"sn":"listUnit2"},{"a":2,"n":"listView","t":4,"rt":System.Array.type(BB10_NextViewer),"sn":"listView"},{"a":2,"n":"pattemTableObj","t":4,"rt":Bricks_PattemTableObj,"sn":"pattemTableObj"},{"a":2,"n":"spawnData","t":4,"rt":BB10_SpawnBlockData,"sn":"spawnData"},{"a":1,"n":"spawnIndex","t":4,"rt":$n[1].Int32,"sn":"spawnIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"type0","t":4,"rt":Types,"sn":"type0","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":1,"n":"type1","t":4,"rt":Types,"sn":"type1","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":1,"n":"type2","t":4,"rt":Types,"sn":"type2","box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}}]}; }, $n);
    /*BB10_NextViewerControl end.*/

    /*BB10_PattemCreater start.*/
    $m("BB10_PattemCreater", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"Create","t":8,"pi":[{"n":"thisType","pt":Types,"ps":0},{"n":"pos","pt":$n[0].Vector2,"ps":1},{"n":"scale","pt":$n[1].Single,"ps":2}],"sn":"Create","rt":$n[2].List$1(BB10_BrickCubeUnit),"p":[Types,$n[0].Vector2,$n[1].Single]},{"a":2,"n":"CreateABlock","t":8,"pi":[{"n":"pos","pt":$n[0].Vector2,"ps":0},{"n":"scale","pt":$n[1].Single,"ps":1}],"sn":"CreateABlock","rt":BB10_BrickCubeUnit,"p":[$n[0].Vector2,$n[1].Single]},{"a":2,"n":"CreatePattem","t":8,"pi":[{"n":"type","pt":Types,"ps":0},{"n":"pos","pt":$n[0].Vector2,"ps":1},{"n":"scale","pt":$n[1].Single,"ps":2}],"sn":"CreatePattem","rt":$n[2].List$1(BB10_BrickCubeUnit),"p":[Types,$n[0].Vector2,$n[1].Single]},{"a":1,"n":"GetCube","t":8,"sn":"GetCube","rt":BB10_BrickCubeUnit},{"a":2,"n":"GetTypeFromString","t":8,"pi":[{"n":"text","pt":$n[1].String,"ps":0}],"sn":"GetTypeFromString","rt":Types,"p":[$n[1].String],"box":function ($v) { return Bridge.box($v, Types, System.Enum.toStringFn(Types));}},{"a":2,"n":"SetCube","t":8,"pi":[{"n":"cube","pt":BB10_BrickCubeUnit,"ps":0}],"sn":"SetCube","rt":$n[1].Void,"p":[BB10_BrickCubeUnit]},{"a":2,"n":"cubePrefab","t":4,"rt":$n[0].GameObject,"sn":"cubePrefab"},{"a":1,"n":"dataInfor","t":4,"rt":$n[2].Dictionary$2(Types,System.Array.type(Vec2)),"sn":"dataInfor"},{"a":2,"n":"listCube","t":4,"rt":$n[2].List$1(BB10_BrickCubeUnit),"sn":"listCube"},{"a":1,"n":"listI0","t":4,"rt":System.Array.type(Vec2),"sn":"listI0"},{"a":1,"n":"listI1","t":4,"rt":System.Array.type(Vec2),"sn":"listI1"},{"a":1,"n":"listI2","t":4,"rt":System.Array.type(Vec2),"sn":"listI2"},{"a":1,"n":"listI3","t":4,"rt":System.Array.type(Vec2),"sn":"listI3"},{"a":1,"n":"listL0","t":4,"rt":System.Array.type(Vec2),"sn":"listL0"},{"a":1,"n":"listL1","t":4,"rt":System.Array.type(Vec2),"sn":"listL1"},{"a":1,"n":"listLB0","t":4,"rt":System.Array.type(Vec2),"sn":"listLB0"},{"a":1,"n":"listO0","t":4,"rt":System.Array.type(Vec2),"sn":"listO0"},{"a":1,"n":"listO1","t":4,"rt":System.Array.type(Vec2),"sn":"listO1"},{"a":1,"n":"listO2","t":4,"rt":System.Array.type(Vec2),"sn":"listO2"},{"a":1,"n":"listPattemsInfor","t":4,"rt":System.Array.type(PattemInfor),"sn":"listPattemsInfor"},{"a":1,"n":"listT0","t":4,"rt":System.Array.type(Vec2),"sn":"listT0"},{"a":1,"n":"listT1","t":4,"rt":System.Array.type(Vec2),"sn":"listT1"},{"a":1,"n":"listZ0","t":4,"rt":System.Array.type(Vec2),"sn":"listZ0"},{"a":2,"n":"pattemDataSave","t":4,"rt":Bricks_PattemTableObj,"sn":"pattemDataSave"}]}; }, $n);
    /*BB10_PattemCreater end.*/

    /*BB10_PlaneView start.*/
    $m("BB10_PlaneView", function () { return {"nested":[BB10_PlaneView.State],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"CheckGround","t":8,"sn":"CheckGround","rt":$n[1].Void},{"a":1,"n":"CheckPlace","t":8,"sn":"CheckPlace","rt":$n[1].Void},{"a":1,"n":"CheckPlaceInTuto","t":8,"sn":"CheckPlaceInTuto","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CheckSelectedBlock","t":8,"sn":"CheckSelectedBlock","rt":$n[1].Void},{"a":1,"n":"Drag","t":8,"sn":"Drag","rt":$n[1].Void},{"a":1,"n":"GetFixedMousePos","t":8,"sn":"GetFixedMousePos","rt":$n[0].Vector2},{"a":1,"n":"IsInvalidGrid","t":8,"sn":"IsInvalidGrid","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PlacePattemGround","t":8,"sn":"PlacePattemGround","rt":$n[1].Void},{"a":1,"n":"ScaleBlock","t":8,"pi":[{"n":"newScale","pt":$n[1].Single,"ps":0}],"sn":"ScaleBlock","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"ScaleDownBlock","t":8,"sn":"ScaleDownBlock","rt":$n[3].IEnumerator},{"a":1,"n":"ScaleUpBlock","t":8,"sn":"ScaleUpBlock","rt":$n[3].IEnumerator},{"a":2,"n":"SetAllBlock","t":8,"sn":"SetAllBlock","rt":$n[1].Void},{"a":1,"n":"SetBlockPos","t":8,"pi":[{"n":"pos","pt":$n[0].Vector3,"ps":0},{"n":"newScale","pt":$n[1].Single,"ps":1}],"sn":"SetBlockPos","rt":$n[1].Void,"p":[$n[0].Vector3,$n[1].Single]},{"a":2,"n":"SetPattem","t":8,"pi":[{"n":"listBlock0","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0},{"n":"pos","pt":$n[0].Vector2,"ps":1},{"n":"data","pt":BB10_ColorData,"ps":2},{"n":"select","pt":$n[1].Int32,"ps":3},{"n":"viewScale","pt":$n[1].Single,"ps":4}],"sn":"SetPattem","rt":$n[1].Void,"p":[$n[2].List$1(BB10_BrickCubeUnit),$n[0].Vector2,BB10_ColorData,$n[1].Int32,$n[1].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"ScaleUpAnim","t":4,"rt":$n[3].IEnumerator,"sn":"ScaleUpAnim"},{"a":2,"n":"cam","t":4,"rt":$n[0].Transform,"sn":"cam"},{"a":2,"n":"camera","t":4,"rt":$n[0].Camera,"sn":"camera"},{"a":1,"n":"cellAcepted","t":4,"rt":Vec2,"sn":"cellAcepted"},{"a":2,"n":"cellTutAcepted","t":4,"rt":Vec2,"sn":"cellTutAcepted"},{"a":1,"n":"col","t":4,"rt":$n[1].Int32,"sn":"col","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"distanceTouch","t":4,"rt":$n[1].Single,"sn":"distanceTouch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"faceMousePos","t":4,"rt":$n[0].Vector2,"sn":"faceMousePos"},{"a":1,"n":"grid","t":4,"rt":BB10_Grid,"sn":"grid"},{"a":2,"n":"groundAcepted","t":4,"rt":$n[1].Boolean,"sn":"groundAcepted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"groundView","t":4,"rt":BB10_GroundView,"sn":"groundView"},{"a":2,"n":"isAuto","t":4,"rt":$n[1].Boolean,"sn":"isAuto","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isScaling","t":4,"rt":$n[1].Boolean,"sn":"isScaling","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastResetFillCel","t":4,"rt":Vec2,"sn":"lastResetFillCel"},{"a":2,"n":"listBlock","t":4,"rt":$n[2].List$1(BB10_BrickCubeUnit),"sn":"listBlock"},{"a":1,"n":"listBlockLocalPos","t":4,"rt":System.Array.type(UnityEngine.Vector2),"sn":"listBlockLocalPos"},{"a":1,"n":"myType","t":4,"rt":BB10_TypePattem.Type,"sn":"myType","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":1,"n":"nextViewerCtr","t":4,"rt":BB10_NextViewerControl,"sn":"nextViewerCtr"},{"a":1,"n":"pattemCreater","t":4,"rt":BB10_PattemCreater,"sn":"pattemCreater"},{"a":1,"n":"row","t":4,"rt":$n[1].Int32,"sn":"row","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"scale","t":4,"rt":$n[1].Single,"sn":"scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"scaleSmall","t":4,"rt":$n[1].Single,"sn":"scaleSmall","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"selected","t":4,"rt":$n[1].Int32,"sn":"selected","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"speedMoveDrop","t":4,"rt":$n[1].Single,"sn":"speedMoveDrop","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"startPos","t":4,"rt":$n[0].Vector3,"sn":"startPos"},{"a":2,"n":"state","t":4,"rt":BB10_PlaneView.State,"sn":"state","box":function ($v) { return Bridge.box($v, BB10_PlaneView.State, System.Enum.toStringFn(BB10_PlaneView.State));}},{"a":1,"n":"thisData","t":4,"rt":BB10_ColorData,"sn":"thisData"},{"a":1,"n":"timeDelaySetAllBlock","t":4,"rt":$n[1].Single,"sn":"timeDelaySetAllBlock","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"touchPos","t":4,"rt":$n[0].Vector3,"sn":"touchPos"},{"a":2,"n":"y","t":4,"rt":$n[1].Single,"sn":"y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BB10_PlaneView end.*/

    /*BB10_PlaneView+State start.*/
    $m("BB10_PlaneView.State", function () { return {"td":BB10_PlaneView,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Drag","is":true,"t":4,"rt":BB10_PlaneView.State,"sn":"Drag","box":function ($v) { return Bridge.box($v, BB10_PlaneView.State, System.Enum.toStringFn(BB10_PlaneView.State));}},{"a":2,"n":"Free","is":true,"t":4,"rt":BB10_PlaneView.State,"sn":"Free","box":function ($v) { return Bridge.box($v, BB10_PlaneView.State, System.Enum.toStringFn(BB10_PlaneView.State));}}]}; }, $n);
    /*BB10_PlaneView+State end.*/

    /*BB10_ScoreCtr start.*/
    $m("BB10_ScoreCtr", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FadeOut","t":8,"pi":[{"n":"text","pt":$n[0].TextMesh,"ps":0}],"sn":"FadeOut","rt":$n[3].IEnumerator,"p":[$n[0].TextMesh]},{"a":2,"n":"GetText","t":8,"sn":"GetText","rt":$n[0].TextMesh},{"a":1,"n":"GetY","t":8,"pi":[{"n":"t","pt":$n[1].Single,"ps":0}],"sn":"GetY","rt":$n[1].Single,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":2,"n":"SetText","t":8,"pi":[{"n":"text","pt":$n[0].TextMesh,"ps":0}],"sn":"SetText","rt":$n[1].Void,"p":[$n[0].TextMesh]},{"a":2,"n":"ShowText","t":8,"pi":[{"n":"pos","pt":$n[0].Vector2,"ps":0},{"n":"score","pt":$n[1].Int32,"ps":1}],"sn":"ShowText","rt":$n[1].Void,"p":[$n[0].Vector2,$n[1].Int32]},{"a":2,"n":"G","t":4,"rt":$n[1].Single,"sn":"G","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endColor","t":4,"rt":$n[0].Color,"sn":"endColor"},{"a":2,"n":"listText","t":4,"rt":$n[2].List$1(UnityEngine.TextMesh),"sn":"listText"},{"a":2,"n":"mat","t":4,"rt":$n[0].Material,"sn":"mat"},{"a":2,"n":"scorePrefab","t":4,"rt":$n[0].GameObject,"sn":"scorePrefab"},{"a":2,"n":"speed0","t":4,"rt":$n[1].Single,"sn":"speed0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"startColor","t":4,"rt":$n[0].Color,"sn":"startColor"}]}; }, $n);
    /*BB10_ScoreCtr end.*/

    /*BB10_ScreenCtr start.*/
    $m("BB10_ScreenCtr", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CreateBG","t":8,"pi":[{"n":"row","pt":$n[1].Int32,"ps":0},{"n":"col","pt":$n[1].Int32,"ps":1}],"sn":"CreateBG","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32]},{"a":2,"n":"Fix","t":8,"pi":[{"n":"row","pt":$n[1].Int32,"ps":0},{"n":"col","pt":$n[1].Int32,"ps":1}],"sn":"Fix","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32]},{"a":1,"n":"FixMultiScreen","t":8,"sn":"FixMultiScreen","rt":$n[1].Void},{"a":1,"n":"FixPattemPos","t":8,"sn":"FixPattemPos","rt":$n[1].Void},{"a":1,"n":"MovePart","t":8,"pi":[{"n":"part","pt":$n[0].Transform,"ps":0},{"n":"target","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"MovePart","rt":$n[3].IEnumerator,"p":[$n[0].Transform,$n[0].Vector2,$n[1].Single]},{"a":1,"n":"ScaleToFitBg","t":8,"sn":"ScaleToFitBg","rt":$n[1].Void},{"a":1,"n":"ScaleUpUnit","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"ScaleUpUnit","rt":$n[3].IEnumerator,"p":[$n[1].Int32]},{"a":1,"n":"SetAlphaAll","t":8,"pi":[{"n":"alpha","pt":$n[1].Single,"ps":0}],"sn":"SetAlphaAll","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"SetAlphaPart1","t":8,"pi":[{"n":"alpha","pt":$n[1].Single,"ps":0}],"sn":"SetAlphaPart1","rt":$n[1].Void,"p":[$n[1].Single]},{"a":2,"n":"StartAnim","t":8,"sn":"StartAnim","rt":$n[1].Void},{"a":1,"n":"StartFade","t":8,"pi":[{"n":"obj","pt":$n[0].GameObject,"ps":0},{"n":"startPos","pt":$n[0].Vector2,"ps":1},{"n":"targetPos","pt":$n[0].Vector2,"ps":2},{"n":"enableGrid","pt":$n[1].Boolean,"ps":3}],"sn":"StartFade","rt":$n[3].IEnumerator,"p":[$n[0].GameObject,$n[0].Vector2,$n[0].Vector2,$n[1].Boolean]},{"a":1,"n":"StartGridAnim","t":8,"sn":"StartGridAnim","rt":$n[3].IEnumerator},{"a":2,"n":"StartNoAnim","t":8,"sn":"StartNoAnim","rt":$n[1].Void},{"a":1,"n":"Step","t":8,"sn":"Step","rt":$n[3].IEnumerator},{"a":1,"n":"easeOutQuad","t":8,"pi":[{"n":"start","pt":$n[1].Single,"ps":0},{"n":"end","pt":$n[1].Single,"ps":1},{"n":"value","pt":$n[1].Single,"ps":2}],"sn":"easeOutQuad","rt":$n[1].Single,"p":[$n[1].Single,$n[1].Single,$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"BG","t":4,"rt":$n[0].GameObject,"sn":"BG"},{"a":2,"n":"BgUnit","t":4,"rt":$n[0].GameObject,"sn":"BgUnit"},{"a":2,"n":"F","t":4,"rt":$n[1].Single,"sn":"F","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"FUI","t":4,"rt":$n[1].Single,"sn":"FUI","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"acScale","t":4,"rt":pc.AnimationCurve,"sn":"acScale"},{"a":2,"n":"bottomTrans","t":4,"rt":$n[0].Transform,"sn":"bottomTrans"},{"a":2,"n":"cam","t":4,"rt":$n[0].Camera,"sn":"cam"},{"a":1,"n":"currentScren","t":4,"rt":$n[1].Single,"sn":"currentScren","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"defaultPattemUIY","t":4,"rt":$n[1].Single,"sn":"defaultPattemUIY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"defaultPattemY","t":4,"rt":$n[1].Single,"sn":"defaultPattemY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"defaultScreen","t":4,"rt":$n[1].Single,"sn":"defaultScreen","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"distanceEdge","t":4,"rt":$n[1].Single,"sn":"distanceEdge","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"distanceMoveFade","t":4,"rt":$n[1].Single,"sn":"distanceMoveFade","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationFadeIn","t":4,"rt":$n[1].Single,"sn":"durationFadeIn","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationScaleUp","t":4,"rt":$n[1].Single,"sn":"durationScaleUp","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"grid","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"grid"},{"a":2,"n":"gridMoving","t":4,"rt":$n[1].Boolean,"sn":"gridMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listPattemTrans","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"listPattemTrans"},{"a":1,"n":"listSprites","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer, 2),"sn":"listSprites"},{"a":1,"n":"myC","t":4,"rt":$n[1].Int32,"sn":"myC","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"myR","t":4,"rt":$n[1].Int32,"sn":"myR","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"orthographicSizeMin","t":4,"rt":$n[1].Single,"sn":"orthographicSizeMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"parentCell","t":4,"rt":$n[0].Transform,"sn":"parentCell"},{"a":2,"n":"partDown","t":4,"rt":$n[0].Transform,"sn":"partDown"},{"a":2,"n":"partLeft","t":4,"rt":$n[0].Transform,"sn":"partLeft"},{"a":2,"n":"partRight","t":4,"rt":$n[0].Transform,"sn":"partRight"},{"a":2,"n":"partTop","t":4,"rt":$n[0].Transform,"sn":"partTop"},{"a":2,"n":"startAlpha","t":4,"rt":$n[1].Single,"sn":"startAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"targetAlpha","t":4,"rt":$n[1].Single,"sn":"targetAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"topRec","t":4,"rt":$n[0].RectTransform,"sn":"topRec"},{"a":2,"n":"waitStep","t":4,"rt":$n[1].Single,"sn":"waitStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BB10_ScreenCtr end.*/

    /*BB10_Settings start.*/
    $m("BB10_Settings", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetShowFanInDay","is":true,"t":8,"sn":"GetShowFanInDay","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetStar","is":true,"t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"GetStar","rt":$n[1].Int32,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetTimeStamp","is":true,"t":8,"sn":"GetTimeStamp","rt":$n[1].Int64},{"a":2,"n":"HasKey","is":true,"t":8,"pi":[{"n":"key","pt":$n[1].String,"ps":0}],"sn":"HasKey","rt":$n[1].Boolean,"p":[$n[1].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetBest","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetBest","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetContinue","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetContinue","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetContinueData","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].String,"ps":0}],"sn":"SetContinueData","rt":$n[1].Void,"p":[$n[1].String]},{"a":2,"n":"SetDuration_Avg","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetDuration_Avg","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetLevel","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetLevel","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetMaxLevel","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetMaxLevel","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetMusic","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetMusic","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetShowFanInDay","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetShowFanInDay","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetSound","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetSound","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetStar","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0},{"n":"index","pt":$n[1].Int32,"ps":1}],"sn":"SetStar","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32]},{"a":2,"n":"SetTime","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetTime","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetTimePlay","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetTimePlay","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetTimePlayForDuration","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetTimePlayForDuration","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetTimeStamp","is":true,"t":8,"pi":[{"n":"timeStamp","pt":$n[1].Int64,"ps":0}],"sn":"SetTimeStamp","rt":$n[1].Void,"p":[$n[1].Int64]},{"a":2,"n":"SetTypeMove","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetTypeMove","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"GetBest","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetBest","t":8,"rt":$n[1].Int32,"fg":"GetBest","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetBest"},{"a":2,"n":"GetContinue","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetContinue","t":8,"rt":$n[1].Int32,"fg":"GetContinue","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetContinue"},{"a":2,"n":"GetContinueData","is":true,"t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_GetContinueData","t":8,"rt":$n[1].String,"fg":"GetContinueData","is":true},"fn":"GetContinueData"},{"a":2,"n":"GetDuration_Avg","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetDuration_Avg","t":8,"rt":$n[1].Int32,"fg":"GetDuration_Avg","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetDuration_Avg"},{"a":2,"n":"GetLevel","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetLevel","t":8,"rt":$n[1].Int32,"fg":"GetLevel","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetLevel"},{"a":2,"n":"GetMaxLevel","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetMaxLevel","t":8,"rt":$n[1].Int32,"fg":"GetMaxLevel","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetMaxLevel"},{"a":2,"n":"GetMusic","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetMusic","t":8,"rt":$n[1].Int32,"fg":"GetMusic","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetMusic"},{"a":2,"n":"GetSound","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetSound","t":8,"rt":$n[1].Int32,"fg":"GetSound","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetSound"},{"a":2,"n":"GetTime","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetTime","t":8,"rt":$n[1].Int32,"fg":"GetTime","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetTime"},{"a":2,"n":"GetTimePlay","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetTimePlay","t":8,"rt":$n[1].Int32,"fg":"GetTimePlay","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetTimePlay"},{"a":2,"n":"GetTimePlayForDuration","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetTimePlayForDuration","t":8,"rt":$n[1].Int32,"fg":"GetTimePlayForDuration","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetTimePlayForDuration"},{"a":2,"n":"GetTypeMove","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_GetTypeMove","t":8,"rt":$n[1].Int32,"fg":"GetTypeMove","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"GetTypeMove"}]}; }, $n);
    /*BB10_Settings end.*/

    /*BB10_ShowHelpCtr start.*/
    $m("BB10_ShowHelpCtr", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetBlock","t":8,"sn":"GetBlock","rt":$n[0].GameObject},{"a":2,"n":"HideAllBlock","t":8,"sn":"HideAllBlock","rt":$n[1].Void},{"a":2,"n":"SetBlock","t":8,"pi":[{"n":"block","pt":$n[0].GameObject,"ps":0}],"sn":"SetBlock","rt":$n[1].Void,"p":[$n[0].GameObject]},{"a":2,"n":"ShowHelp","t":8,"pi":[{"n":"listBlock","pt":$n[2].List$1(BB10_BrickCubeUnit),"ps":0},{"n":"posValid","pt":$n[0].Vector2,"ps":1}],"sn":"ShowHelp","rt":$n[1].Void,"p":[$n[2].List$1(BB10_BrickCubeUnit),$n[0].Vector2]},{"a":2,"n":"groundPrefab","t":4,"rt":$n[0].GameObject,"sn":"groundPrefab"},{"a":2,"n":"listBlockActive","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"listBlockActive"},{"a":2,"n":"listBlockDisable","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"listBlockDisable"}]}; }, $n);
    /*BB10_ShowHelpCtr end.*/

    /*BB10_Tutorial start.*/
    $m("BB10_Tutorial", function () { return {"nested":[BB10_Tutorial.State],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FinishMap3","t":8,"sn":"FinishMap3","rt":$n[3].IEnumerator},{"a":1,"n":"FinishMap5","t":8,"sn":"FinishMap5","rt":$n[3].IEnumerator},{"a":1,"n":"LoadMap1","t":8,"sn":"LoadMap1","rt":$n[1].Void},{"a":1,"n":"LoadMap2","t":8,"sn":"LoadMap2","rt":$n[1].Void},{"a":1,"n":"LoadMap3","t":8,"sn":"LoadMap3","rt":$n[1].Void},{"a":2,"n":"Next","t":8,"sn":"Next","rt":$n[1].Void},{"a":1,"n":"OpenMap1","t":8,"sn":"OpenMap1","rt":$n[1].Void},{"a":1,"n":"OpenMap2","t":8,"sn":"OpenMap2","rt":$n[1].Void},{"a":1,"n":"OpenMap3","t":8,"sn":"OpenMap3","rt":$n[1].Void},{"a":1,"n":"OpenMap4","t":8,"sn":"OpenMap4","rt":$n[1].Void},{"a":1,"n":"OpenMap5","t":8,"sn":"OpenMap5","rt":$n[1].Void},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[1].Void},{"a":2,"n":"SkipTut","t":8,"sn":"SkipTut","rt":$n[1].Void},{"a":2,"n":"StartFinger","t":8,"sn":"StartFinger","rt":$n[1].Void},{"a":1,"n":"StartMoveFinger","t":8,"pi":[{"n":"startPos","pt":$n[0].Vector2,"ps":0},{"n":"targetPos","pt":$n[0].Vector2,"ps":1}],"sn":"StartMoveFinger","rt":$n[3].IEnumerator,"p":[$n[0].Vector2,$n[0].Vector2]},{"a":2,"n":"StopFinger","t":8,"sn":"StopFinger","rt":$n[1].Void},{"a":1,"n":"WaitOpenMap2","t":8,"sn":"WaitOpenMap2","rt":$n[3].IEnumerator},{"a":1,"n":"WaitOpenMap3","t":8,"sn":"WaitOpenMap3","rt":$n[3].IEnumerator},{"a":1,"n":"WaitOpenMap4","t":8,"sn":"WaitOpenMap4","rt":$n[3].IEnumerator},{"a":1,"n":"WaitOpenMap5","t":8,"sn":"WaitOpenMap5","rt":$n[3].IEnumerator},{"a":1,"n":"FingerMove","t":4,"rt":$n[3].IEnumerator,"sn":"FingerMove"},{"a":2,"n":"circle","t":4,"rt":$n[0].GameObject,"sn":"circle"},{"a":2,"n":"durationMoveDown","t":4,"rt":$n[1].Single,"sn":"durationMoveDown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationMoveShort","t":4,"rt":$n[1].Single,"sn":"durationMoveShort","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationMoveUp","t":4,"rt":$n[1].Single,"sn":"durationMoveUp","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationScale","t":4,"rt":$n[1].Single,"sn":"durationScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"finger","t":4,"rt":$n[0].GameObject,"sn":"finger"},{"a":1,"n":"grid","t":4,"rt":BB10_Grid,"sn":"grid"},{"a":1,"n":"normalScale","t":4,"rt":$n[0].Vector3,"sn":"normalScale"},{"a":1,"n":"smallScale","t":4,"rt":$n[0].Vector3,"sn":"smallScale"},{"a":2,"n":"state","t":4,"rt":BB10_Tutorial.State,"sn":"state","box":function ($v) { return Bridge.box($v, BB10_Tutorial.State, System.Enum.toStringFn(BB10_Tutorial.State));}}]}; }, $n);
    /*BB10_Tutorial end.*/

    /*BB10_Tutorial+State start.*/
    $m("BB10_Tutorial.State", function () { return {"td":BB10_Tutorial,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Step0","is":true,"t":4,"rt":BB10_Tutorial.State,"sn":"Step0","box":function ($v) { return Bridge.box($v, BB10_Tutorial.State, System.Enum.toStringFn(BB10_Tutorial.State));}},{"a":2,"n":"Step1","is":true,"t":4,"rt":BB10_Tutorial.State,"sn":"Step1","box":function ($v) { return Bridge.box($v, BB10_Tutorial.State, System.Enum.toStringFn(BB10_Tutorial.State));}},{"a":2,"n":"Step2","is":true,"t":4,"rt":BB10_Tutorial.State,"sn":"Step2","box":function ($v) { return Bridge.box($v, BB10_Tutorial.State, System.Enum.toStringFn(BB10_Tutorial.State));}},{"a":2,"n":"Step3","is":true,"t":4,"rt":BB10_Tutorial.State,"sn":"Step3","box":function ($v) { return Bridge.box($v, BB10_Tutorial.State, System.Enum.toStringFn(BB10_Tutorial.State));}},{"a":2,"n":"Step4","is":true,"t":4,"rt":BB10_Tutorial.State,"sn":"Step4","box":function ($v) { return Bridge.box($v, BB10_Tutorial.State, System.Enum.toStringFn(BB10_Tutorial.State));}},{"a":2,"n":"Step5","is":true,"t":4,"rt":BB10_Tutorial.State,"sn":"Step5","box":function ($v) { return Bridge.box($v, BB10_Tutorial.State, System.Enum.toStringFn(BB10_Tutorial.State));}},{"a":2,"n":"Step6","is":true,"t":4,"rt":BB10_Tutorial.State,"sn":"Step6","box":function ($v) { return Bridge.box($v, BB10_Tutorial.State, System.Enum.toStringFn(BB10_Tutorial.State));}}]}; }, $n);
    /*BB10_Tutorial+State end.*/

    /*BB10_TypePattem start.*/
    $m("BB10_TypePattem", function () { return {"nested":[BB10_TypePattem.Type,BB10_TypePattem.Level,BB10_TypePattem.Config],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"RandomWeight","is":true,"t":8,"pi":[{"n":"list","pt":System.Array.type(BB10_TypePattem.Config),"ps":0}],"sn":"RandomWeight","rt":BB10_TypePattem.Type,"p":[System.Array.type(BB10_TypePattem.Config)],"box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":1,"n":"ListEasy","is":true,"t":4,"rt":System.Array.type(BB10_TypePattem.Config),"sn":"ListEasy"},{"a":1,"n":"ListHard","is":true,"t":4,"rt":System.Array.type(BB10_TypePattem.Config),"sn":"ListHard"},{"a":1,"n":"ListMedium","is":true,"t":4,"rt":System.Array.type(BB10_TypePattem.Config),"sn":"ListMedium"},{"a":2,"n":"type","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"type","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}}]}; }, $n);
    /*BB10_TypePattem end.*/

    /*BB10_TypePattem+Type start.*/
    $m("BB10_TypePattem.Type", function () { return {"td":BB10_TypePattem,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"I0","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"I0","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"I1","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"I1","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"I2","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"I2","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"I3","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"I3","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"L0","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"L0","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"L1","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"L1","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"LB0","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"LB0","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"O0","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"O0","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"O1","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"O1","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"O2","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"O2","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"T0","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"T0","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"T1","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"T1","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"Z0","is":true,"t":4,"rt":BB10_TypePattem.Type,"sn":"Z0","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}}]}; }, $n);
    /*BB10_TypePattem+Type end.*/

    /*BB10_TypePattem+Level start.*/
    $m("BB10_TypePattem.Level", function () { return {"td":BB10_TypePattem,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Easy","is":true,"t":4,"rt":BB10_TypePattem.Level,"sn":"Easy","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Level, System.Enum.toStringFn(BB10_TypePattem.Level));}},{"a":2,"n":"Hard","is":true,"t":4,"rt":BB10_TypePattem.Level,"sn":"Hard","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Level, System.Enum.toStringFn(BB10_TypePattem.Level));}},{"a":2,"n":"Medium","is":true,"t":4,"rt":BB10_TypePattem.Level,"sn":"Medium","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Level, System.Enum.toStringFn(BB10_TypePattem.Level));}}]}; }, $n);
    /*BB10_TypePattem+Level end.*/

    /*BB10_TypePattem+Config start.*/
    $m("BB10_TypePattem.Config", function () { return {"td":BB10_TypePattem,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"type","t":4,"rt":BB10_TypePattem.Type,"sn":"type","box":function ($v) { return Bridge.box($v, BB10_TypePattem.Type, System.Enum.toStringFn(BB10_TypePattem.Type));}},{"a":2,"n":"weight","t":4,"rt":$n[1].Int32,"sn":"weight","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*BB10_TypePattem+Config end.*/

    /*BoomControl start.*/
    $m("BoomControl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetBoom","t":8,"sn":"GetBoom","rt":$n[0].GameObject},{"a":2,"n":"SetBoom","t":8,"pi":[{"n":"boom","pt":$n[0].GameObject,"ps":0}],"sn":"SetBoom","rt":$n[1].Void,"p":[$n[0].GameObject]},{"a":2,"n":"ShowBoom","t":8,"pi":[{"n":"pos","pt":$n[0].Vector3,"ps":0},{"n":"data","pt":BB10_ColorData,"ps":1}],"sn":"ShowBoom","rt":$n[1].Void,"p":[$n[0].Vector3,BB10_ColorData]},{"a":2,"n":"boomPrefab","t":4,"rt":$n[0].GameObject,"sn":"boomPrefab"},{"a":2,"n":"listBoom","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"listBoom"}]}; }, $n);
    /*BoomControl end.*/

    /*CameraScript start.*/
    $m("CameraScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"cam","t":4,"rt":$n[0].Camera,"sn":"cam"}]}; }, $n);
    /*CameraScript end.*/

    /*ItemUnit start.*/
    $m("ItemUnit", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ButtonClick","t":8,"sn":"ButtonClick","rt":$n[3].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[8].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[1].Void,"p":[$n[8].PointerEventData]},{"a":2,"n":"SetLock","t":8,"sn":"SetLock","rt":$n[1].Void},{"a":2,"n":"SetOpen","t":8,"pi":[{"n":"maxLv","pt":$n[1].Int32,"ps":0}],"sn":"SetOpen","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"index","t":4,"rt":$n[1].Int32,"sn":"index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"lockObj","t":4,"rt":$n[0].GameObject,"sn":"lockObj"},{"a":2,"n":"numberText","t":4,"rt":$n[6].Text,"sn":"numberText"},{"a":2,"n":"openObj","t":4,"rt":$n[0].GameObject,"sn":"openObj"},{"a":1,"n":"running","t":4,"rt":$n[1].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"scaleZoom","t":4,"rt":$n[0].Vector3,"sn":"scaleZoom"},{"a":2,"n":"star1","t":4,"rt":StarLevelControl,"sn":"star1"},{"a":2,"n":"star2","t":4,"rt":StarLevelControl,"sn":"star2"},{"a":2,"n":"star3","t":4,"rt":StarLevelControl,"sn":"star3"},{"a":1,"n":"timeZoomIn","t":4,"rt":$n[1].Single,"sn":"timeZoomIn","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeZoomOut","t":4,"rt":$n[1].Single,"sn":"timeZoomOut","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ItemUnit end.*/

    /*SelectLevelScript start.*/
    $m("SelectLevelScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":2,"n":"ReSet","t":8,"sn":"ReSet","rt":$n[1].Void},{"a":1,"n":"ResetContentTable","t":8,"sn":"ResetContentTable","rt":$n[1].Void},{"a":2,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActive","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"addScript","t":4,"rt":AddSelectItem,"sn":"addScript"},{"a":2,"n":"isSelected","t":4,"rt":$n[1].Boolean,"sn":"isSelected","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listUnit","t":4,"rt":System.Array.type(ItemUnit),"sn":"listUnit"}]}; }, $n);
    /*SelectLevelScript end.*/

    /*StarLevelControl start.*/
    $m("StarLevelControl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActive","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SetActiveObj","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActiveObj","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"starObj","t":4,"rt":$n[0].GameObject,"sn":"starObj"}]}; }, $n);
    /*StarLevelControl end.*/

    /*Vec2 start.*/
    $m("Vec2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Vector2],"pi":[{"n":"vec","pt":$n[0].Vector2,"ps":0}],"sn":"$ctor2"},{"a":2,"n":".ctor","t":1,"p":[Vec2],"pi":[{"n":"vec","pt":Vec2,"ps":0}],"sn":"$ctor3"},{"a":2,"n":".ctor","t":1,"p":[$n[1].Int32,$n[1].Int32],"pi":[{"n":"r","pt":$n[1].Int32,"ps":0},{"n":"c","pt":$n[1].Int32,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"FastDistance","is":true,"t":8,"pi":[{"n":"v1","pt":Vec2,"ps":0},{"n":"v2","pt":Vec2,"ps":1}],"sn":"FastDistance","rt":$n[1].Int32,"p":[Vec2,Vec2],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Print","t":8,"sn":"Print","rt":$n[1].String},{"a":2,"n":"C","t":4,"rt":$n[1].Int32,"sn":"C","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"R","t":4,"rt":$n[1].Int32,"sn":"R","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"c","is":true,"t":4,"rt":$n[1].Int32,"sn":"c","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"r","is":true,"t":4,"rt":$n[1].Int32,"sn":"r","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Vec2 end.*/

    /*PlayableAPI start.*/
    $m("PlayableAPI", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"CustomEvent","is":true,"t":8,"pi":[{"n":"eventName","pt":$n[1].String,"ps":0},{"n":"Value","pt":$n[1].Int32,"ps":1}],"sn":"CustomEvent","rt":$n[1].Void,"p":[$n[1].String,$n[1].Int32]},{"a":2,"n":"GameEnded","is":true,"t":8,"sn":"GameEnded","rt":$n[1].Void},{"a":2,"n":"GoToStore","is":true,"t":8,"sn":"GoToStore","rt":$n[1].Void},{"a":2,"n":"LogEventFailed","is":true,"t":8,"sn":"LogEventFailed","rt":$n[1].Void},{"a":2,"n":"LogEventStart","is":true,"t":8,"sn":"LogEventStart","rt":$n[1].Void},{"a":2,"n":"LogEventWin","is":true,"t":8,"sn":"LogEventWin","rt":$n[1].Void}]}; }, $n);
    /*PlayableAPI end.*/

    /*CameraResponsive start.*/
    $m("CameraResponsive", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":1,"n":"ResizeScreen","t":8,"pi":[{"n":"screenType","pt":ScreenType,"ps":0}],"sn":"ResizeScreen","rt":$n[1].Void,"p":[ScreenType]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"orthoSizeH","t":4,"rt":$n[1].Single,"sn":"orthoSizeH","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"orthoSizeTab","t":4,"rt":$n[1].Single,"sn":"orthoSizeTab","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"orthoSizeV","t":4,"rt":$n[1].Single,"sn":"orthoSizeV","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"orthoSizeVTall","t":4,"rt":$n[1].Single,"sn":"orthoSizeVTall","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CameraResponsive end.*/

    /*ResponsiveBase start.*/
    $m("ResponsiveBase", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"ab":true,"a":2,"n":"OnHorizontal","t":8,"sn":"OnHorizontal","rt":$n[1].Void},{"ab":true,"a":2,"n":"OnTablet","t":8,"sn":"OnTablet","rt":$n[1].Void},{"ab":true,"a":2,"n":"OnVertical","t":8,"sn":"OnVertical","rt":$n[1].Void},{"ab":true,"a":2,"n":"OnVerticalTall","t":8,"sn":"OnVerticalTall","rt":$n[1].Void},{"a":1,"n":"ResizeScreen","t":8,"pi":[{"n":"screenType","pt":ScreenType,"ps":0}],"sn":"ResizeScreen","rt":$n[1].Void,"p":[ScreenType]},{"v":true,"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void}]}; }, $n);
    /*ResponsiveBase end.*/

    /*ResponsiveWorld start.*/
    $m("ResponsiveWorld", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnHorizontal","t":8,"sn":"OnHorizontal","rt":$n[1].Void},{"ov":true,"a":2,"n":"OnTablet","t":8,"sn":"OnTablet","rt":$n[1].Void},{"ov":true,"a":2,"n":"OnVertical","t":8,"sn":"OnVertical","rt":$n[1].Void},{"ov":true,"a":2,"n":"OnVerticalTall","t":8,"sn":"OnVerticalTall","rt":$n[1].Void},{"ov":true,"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"positionHorizontal","t":4,"rt":$n[0].Vector3,"sn":"positionHorizontal"},{"a":2,"n":"positionTablet","t":4,"rt":$n[0].Vector3,"sn":"positionTablet"},{"a":2,"n":"positionVertical","t":4,"rt":$n[0].Vector3,"sn":"positionVertical"},{"a":2,"n":"positionVerticalTall","t":4,"rt":$n[0].Vector3,"sn":"positionVerticalTall"}]}; }, $n);
    /*ResponsiveWorld end.*/

    /*BB10_CupShaker start.*/
    $m("BB10_CupShaker", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"StartEffect","t":8,"sn":"StartEffect","rt":$n[3].IEnumerator},{"a":1,"n":"StartMove","t":8,"sn":"StartMove","rt":$n[3].IEnumerator},{"a":2,"n":"StartShake","t":8,"sn":"StartShake","rt":$n[1].Void},{"a":2,"n":"delay","t":4,"rt":$n[1].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"distanceMove","t":4,"rt":$n[1].Single,"sn":"distanceMove","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationMove","t":4,"rt":$n[1].Single,"sn":"durationMove","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fromAngle","t":4,"rt":$n[1].Single,"sn":"fromAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"normalPos","t":4,"rt":$n[0].Vector2,"sn":"normalPos"},{"a":2,"n":"rec","t":4,"rt":$n[0].RectTransform,"sn":"rec"},{"a":1,"n":"running","t":4,"rt":$n[1].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"scale","t":4,"rt":$n[1].Single,"sn":"scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"timeShake","t":4,"rt":$n[1].Int32,"sn":"timeShake","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"toAngle","t":4,"rt":$n[1].Single,"sn":"toAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waitMoveDown","t":4,"rt":$n[1].Single,"sn":"waitMoveDown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BB10_CupShaker end.*/

    /*BB10_FaderHandler start.*/
    $m("BB10_FaderHandler", function () { return {"nested":[Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Fade","t":8,"pi":[{"n":"fn","pt":Function,"ps":0}],"sn":"Fade","rt":$n[1].Void,"p":[Function]},{"a":2,"n":"FadeInPanel","t":8,"pi":[{"n":"group","pt":$n[0].CanvasGroup,"ps":0},{"n":"fn","pt":Function,"ps":1}],"sn":"FadeInPanel","rt":$n[1].Void,"p":[$n[0].CanvasGroup,Function]},{"a":2,"n":"FadeInPanelFix","t":8,"pi":[{"n":"group","pt":$n[0].CanvasGroup,"ps":0},{"n":"fn","pt":Function,"ps":1}],"sn":"FadeInPanelFix","rt":$n[1].Void,"p":[$n[0].CanvasGroup,Function]},{"a":2,"n":"FadeOutPanel","t":8,"pi":[{"n":"group","pt":$n[0].CanvasGroup,"ps":0},{"n":"fn","pt":Function,"ps":1}],"sn":"FadeOutPanel","rt":$n[1].Void,"p":[$n[0].CanvasGroup,Function]},{"a":2,"n":"FadeOutPanelFix","t":8,"pi":[{"n":"group","pt":$n[0].CanvasGroup,"ps":0},{"n":"fn","pt":Function,"ps":1}],"sn":"FadeOutPanelFix","rt":$n[1].Void,"p":[$n[0].CanvasGroup,Function]},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[1].Void},{"a":1,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActive","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"StartFade","t":8,"pi":[{"n":"fn","pt":Function,"ps":0}],"sn":"StartFade","rt":$n[3].IEnumerator,"p":[Function]},{"a":1,"n":"StartFadeInPanel","t":8,"pi":[{"n":"group","pt":$n[0].CanvasGroup,"ps":0},{"n":"fn","pt":Function,"ps":1}],"sn":"StartFadeInPanel","rt":$n[3].IEnumerator,"p":[$n[0].CanvasGroup,Function]},{"a":1,"n":"StartFadeInPanelFix","t":8,"pi":[{"n":"group","pt":$n[0].CanvasGroup,"ps":0},{"n":"fn","pt":Function,"ps":1}],"sn":"StartFadeInPanelFix","rt":$n[3].IEnumerator,"p":[$n[0].CanvasGroup,Function]},{"a":1,"n":"StartFadeOutPanel","t":8,"pi":[{"n":"group","pt":$n[0].CanvasGroup,"ps":0},{"n":"fn","pt":Function,"ps":1}],"sn":"StartFadeOutPanel","rt":$n[3].IEnumerator,"p":[$n[0].CanvasGroup,Function]},{"a":1,"n":"StartFadeOutPanelFix","t":8,"pi":[{"n":"group","pt":$n[0].CanvasGroup,"ps":0},{"n":"fn","pt":Function,"ps":1}],"sn":"StartFadeOutPanelFix","rt":$n[3].IEnumerator,"p":[$n[0].CanvasGroup,Function]},{"a":1,"n":"StartSwichPanel","t":8,"pi":[{"n":"group1","pt":$n[0].CanvasGroup,"ps":0},{"n":"group2","pt":$n[0].CanvasGroup,"ps":1},{"n":"fn","pt":Function,"ps":2}],"sn":"StartSwichPanel","rt":$n[3].IEnumerator,"p":[$n[0].CanvasGroup,$n[0].CanvasGroup,Function]},{"a":1,"n":"StartSwichPanelFix","t":8,"pi":[{"n":"group1","pt":$n[0].CanvasGroup,"ps":0},{"n":"group2","pt":$n[0].CanvasGroup,"ps":1},{"n":"fn","pt":Function,"ps":2}],"sn":"StartSwichPanelFix","rt":$n[3].IEnumerator,"p":[$n[0].CanvasGroup,$n[0].CanvasGroup,Function]},{"a":2,"n":"SwichPanel","t":8,"pi":[{"n":"group1","pt":$n[0].CanvasGroup,"ps":0},{"n":"group2","pt":$n[0].CanvasGroup,"ps":1},{"n":"fn","pt":Function,"ps":2}],"sn":"SwichPanel","rt":$n[1].Void,"p":[$n[0].CanvasGroup,$n[0].CanvasGroup,Function]},{"a":2,"n":"SwichPanelFix","t":8,"pi":[{"n":"group1","pt":$n[0].CanvasGroup,"ps":0},{"n":"group2","pt":$n[0].CanvasGroup,"ps":1},{"n":"fn","pt":Function,"ps":2}],"sn":"SwichPanelFix","rt":$n[1].Void,"p":[$n[0].CanvasGroup,$n[0].CanvasGroup,Function]},{"a":2,"n":"durationFade","t":4,"rt":$n[1].Single,"sn":"durationFade","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationFadeOut","t":4,"rt":$n[1].Single,"sn":"durationFadeOut","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"durationSwich","t":4,"rt":$n[1].Single,"sn":"durationSwich","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"image","t":4,"rt":$n[6].Image,"sn":"image"}]}; }, $n);
    /*BB10_FaderHandler end.*/

    /*BB10_HomeController start.*/
    $m("BB10_HomeController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CheckSound","t":8,"sn":"CheckSound","rt":$n[1].Void},{"a":2,"n":"HideHome","t":8,"sn":"HideHome","rt":$n[1].Void},{"a":2,"n":"MidleTryAgain","t":8,"sn":"MidleTryAgain","rt":$n[1].Void},{"a":1,"n":"OffFading","t":8,"sn":"OffFading","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"PreLoad","t":8,"sn":"PreLoad","rt":$n[1].Void},{"a":2,"n":"PrivacyPolicy","t":8,"sn":"PrivacyPolicy","rt":$n[1].Void},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[1].Void},{"a":2,"n":"Restart","t":8,"sn":"Restart","rt":$n[1].Void},{"a":2,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActive","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"ShowHome","t":8,"sn":"ShowHome","rt":$n[1].Void},{"a":2,"n":"SoundClick","t":8,"sn":"SoundClick","rt":$n[1].Void},{"a":2,"n":"group","t":4,"rt":$n[0].CanvasGroup,"sn":"group"},{"a":1,"n":"isFading","t":4,"rt":$n[1].Boolean,"sn":"isFading","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*BB10_HomeController end.*/

    /*BB10_InGameScript start.*/
    $m("BB10_InGameScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"FinishTut","t":8,"sn":"FinishTut","rt":$n[1].Void},{"a":2,"n":"Pause","t":8,"sn":"Pause","rt":$n[1].Void},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[1].Void},{"a":2,"n":"ResetBest","t":8,"sn":"ResetBest","rt":$n[1].Void},{"a":2,"n":"ResetScore","t":8,"sn":"ResetScore","rt":$n[1].Void},{"a":1,"n":"ScoreUpAnim","t":8,"pi":[{"n":"fromScore","pt":$n[1].Int32,"ps":0}],"sn":"ScoreUpAnim","rt":$n[3].IEnumerator,"p":[$n[1].Int32]},{"a":2,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActive","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SetNewScore","t":8,"pi":[{"n":"scoreFillLine","pt":$n[1].Int32,"ps":0},{"n":"numberUnit","pt":$n[1].Int32,"ps":1}],"sn":"SetNewScore","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32]},{"a":2,"n":"SetScoreContinue","t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"SetScoreContinue","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SkipTut","t":8,"sn":"SkipTut","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"StartTut","t":8,"sn":"StartTut","rt":$n[1].Void},{"a":2,"n":"UpScoreTxt","t":8,"pi":[{"n":"value","pt":$n[1].Int32,"ps":0}],"sn":"UpScoreTxt","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"bestInt","t":4,"rt":$n[1].Int32,"sn":"bestInt","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"bestTxt","t":4,"rt":$n[0].TextMesh,"sn":"bestTxt"},{"a":2,"n":"blur_1","t":4,"rt":$n[0].GameObject,"sn":"blur_1"},{"a":2,"n":"group","t":4,"rt":$n[0].CanvasGroup,"sn":"group"},{"a":2,"n":"rec","t":4,"rt":$n[0].RectTransform,"sn":"rec"},{"a":2,"n":"scoreInt","t":4,"rt":$n[1].Int32,"sn":"scoreInt","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"scoreRuning","t":4,"rt":$n[1].Boolean,"sn":"scoreRuning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"scoreTxt","t":4,"rt":$n[0].TextMesh,"sn":"scoreTxt"},{"a":1,"n":"scoreUp","t":4,"rt":$n[3].IEnumerator,"sn":"scoreUp"}]}; }, $n);
    /*BB10_InGameScript end.*/

    /*BB10_LostScript start.*/
    $m("BB10_LostScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimScore","t":8,"sn":"AnimScore","rt":$n[1].Void},{"a":2,"n":"GameOver","t":8,"pi":[{"n":"isGray","pt":$n[1].Boolean,"ps":0}],"sn":"GameOver","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"MidleTryAgain","t":8,"sn":"MidleTryAgain","rt":$n[1].Void},{"a":1,"n":"NextGame","t":8,"sn":"NextGame","rt":$n[1].Void},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[1].Void},{"a":1,"n":"ScoreUpAnim","t":8,"sn":"ScoreUpAnim","rt":$n[3].IEnumerator},{"a":2,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActive","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SetBestScore","t":8,"sn":"SetBestScore","rt":$n[1].Void},{"a":2,"n":"SetScore","t":8,"pi":[{"n":"score","pt":$n[1].Int32,"ps":0}],"sn":"SetScore","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"TryAgainButton","t":8,"sn":"TryAgainButton","rt":$n[1].Void},{"a":1,"n":"WaitState","t":8,"sn":"WaitState","rt":$n[3].IEnumerator},{"a":1,"n":"WaitSwitch","t":8,"pi":[{"n":"isGray","pt":$n[1].Boolean,"ps":0}],"sn":"WaitSwitch","rt":$n[3].IEnumerator,"p":[$n[1].Boolean]},{"a":1,"n":"AnimSoundLoop","t":4,"rt":$n[3].IEnumerator,"sn":"AnimSoundLoop"},{"a":2,"n":"POST_SCORE_NUMBER_KEY","is":true,"t":4,"rt":$n[1].String,"sn":"POST_SCORE_NUMBER_KEY"},{"a":2,"n":"SCORE_TOTAL_KEY","is":true,"t":4,"rt":$n[1].String,"sn":"SCORE_TOTAL_KEY"},{"a":2,"n":"bestText","t":4,"rt":$n[6].Text,"sn":"bestText"},{"a":1,"n":"checkToRate","t":4,"rt":$n[1].Boolean,"sn":"checkToRate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"cupShaker","t":4,"rt":BB10_CupShaker,"sn":"cupShaker"},{"a":1,"n":"fistGameOver","is":true,"t":4,"rt":$n[1].Boolean,"sn":"fistGameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"group","t":4,"rt":$n[0].CanvasGroup,"sn":"group"},{"a":2,"n":"isAuto","t":4,"rt":$n[1].Boolean,"sn":"isAuto","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listViewAdsPannel","t":4,"rt":$n[0].GameObject,"sn":"listViewAdsPannel"},{"a":1,"n":"score","t":4,"rt":$n[1].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"scoreCounting","t":4,"rt":$n[1].Boolean,"sn":"scoreCounting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"scoreText","t":4,"rt":$n[6].Text,"sn":"scoreText"}]}; }, $n);
    /*BB10_LostScript end.*/

    /*BB10_MainCanvasUI start.*/
    $m("BB10_MainCanvasUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"CheckBundle","t":8,"sn":"CheckBundle","rt":$n[1].Void},{"a":1,"n":"CheckPreloadTutorial","t":8,"sn":"CheckPreloadTutorial","rt":$n[1].Void},{"a":1,"n":"CheckToReloadBanner","t":8,"sn":"CheckToReloadBanner","rt":$n[1].Void},{"a":1,"n":"EffectGrid","t":8,"sn":"EffectGrid","rt":$n[1].Void},{"a":1,"n":"EnsureAdBreakManager","t":8,"sn":"EnsureAdBreakManager","rt":$n[1].Void},{"a":2,"n":"FadeIn","t":8,"sn":"FadeIn","rt":$n[1].Void},{"a":2,"n":"FadeOut","t":8,"sn":"FadeOut","rt":$n[1].Void},{"a":1,"n":"InitGame","t":8,"sn":"InitGame","rt":$n[3].IEnumerator},{"a":1,"n":"Load","t":8,"sn":"Load","rt":$n[1].Void},{"a":1,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":2,"n":"Reset","t":8,"pi":[{"n":"isIngame","pt":$n[1].Boolean,"ps":0}],"sn":"Reset","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"ShowBannerDelay","t":8,"sn":"ShowBannerDelay","rt":$n[3].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[1].Void},{"a":2,"n":"StopWaitShowAdBreask","t":8,"sn":"StopWaitShowAdBreask","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"loadPattemDelay","t":8,"sn":"loadPattemDelay","rt":$n[3].IEnumerator},{"a":2,"n":"Main","is":true,"t":16,"rt":BB10_MainCanvasUI,"g":{"a":2,"n":"get_Main","t":8,"rt":BB10_MainCanvasUI,"fg":"Main","is":true},"fn":"Main"},{"a":2,"n":"OnDropPiece","t":4,"rt":Function,"sn":"OnDropPiece"},{"a":2,"n":"OnNeedStopAdBreak","t":4,"rt":Function,"sn":"OnNeedStopAdBreak"},{"a":2,"n":"blur","t":4,"rt":$n[0].GameObject,"sn":"blur"},{"a":2,"n":"faderScript","t":4,"rt":BB10_FaderHandler,"sn":"faderScript"},{"a":1,"n":"firstLoaded","is":true,"t":4,"rt":$n[1].Boolean,"sn":"firstLoaded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"inGameScript","t":4,"rt":BB10_InGameScript,"sn":"inGameScript"},{"a":2,"n":"mainCanvas","is":true,"t":4,"rt":BB10_MainCanvasUI,"sn":"mainCanvas"},{"a":2,"n":"newSession","is":true,"t":4,"rt":$n[1].Boolean,"sn":"newSession","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"timePlay","is":true,"t":4,"rt":$n[1].Int32,"sn":"timePlay","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*BB10_MainCanvasUI end.*/

    /*BB10_PauseScript start.*/
    $m("BB10_PauseScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CheckSound","t":8,"sn":"CheckSound","rt":$n[1].Void},{"a":2,"n":"MidleTryAgain","t":8,"sn":"MidleTryAgain","rt":$n[1].Void},{"a":1,"n":"OffFading","t":8,"sn":"OffFading","rt":$n[1].Void},{"a":2,"n":"PauseGame","t":8,"sn":"PauseGame","rt":$n[1].Void},{"a":2,"n":"PreLoad","t":8,"sn":"PreLoad","rt":$n[1].Void},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[1].Void},{"a":2,"n":"Restart","t":8,"sn":"Restart","rt":$n[1].Void},{"a":2,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActive","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"ShowHome","t":8,"sn":"ShowHome","rt":$n[1].Void},{"a":2,"n":"SoundClick","t":8,"sn":"SoundClick","rt":$n[1].Void},{"a":2,"n":"UnPause","t":8,"sn":"UnPause","rt":$n[1].Void},{"a":2,"n":"group","t":4,"rt":$n[0].CanvasGroup,"sn":"group"},{"a":1,"n":"isFading","t":4,"rt":$n[1].Boolean,"sn":"isFading","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"soundIgame","t":4,"rt":$n[6].Image,"sn":"soundIgame"},{"a":2,"n":"soundOff","t":4,"rt":$n[0].Sprite,"sn":"soundOff"},{"a":2,"n":"soundOn","t":4,"rt":$n[0].Sprite,"sn":"soundOn"}]}; }, $n);
    /*BB10_PauseScript end.*/

    /*BB10_PopupRate start.*/
    $m("BB10_PopupRate", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CloseBtn","t":8,"sn":"CloseBtn","rt":$n[1].Void},{"a":2,"n":"HandleClickStar","t":8,"sn":"HandleClickStar","rt":$n[1].Void},{"a":2,"n":"HandleRate4Star","t":8,"sn":"HandleRate4Star","rt":$n[1].Void},{"a":2,"n":"HandleRate5Star","t":8,"sn":"HandleRate5Star","rt":$n[1].Void},{"a":2,"n":"HandleSubmit","t":8,"sn":"HandleSubmit","rt":$n[1].Void},{"a":2,"n":"HidePopup","t":8,"sn":"HidePopup","rt":$n[1].Void},{"a":1,"n":"InitPopup","t":8,"sn":"InitPopup","rt":$n[1].Void},{"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[1].Void},{"a":2,"n":"Rate","is":true,"t":8,"sn":"Rate","rt":$n[1].Void},{"a":2,"n":"ShowPopup","t":8,"sn":"ShowPopup","rt":$n[1].Void},{"a":2,"n":"pannel","t":4,"rt":$n[0].GameObject,"sn":"pannel"},{"a":2,"n":"popup","t":4,"rt":$n[0].GameObject,"sn":"popup"},{"a":2,"n":"rate_inpopup_key","is":true,"t":4,"rt":$n[1].String,"sn":"rate_inpopup_key"},{"a":2,"n":"starList","t":4,"rt":$n[2].List$1(BB10_RateStar),"sn":"starList"},{"a":2,"n":"starNumber","t":4,"rt":$n[1].Int32,"sn":"starNumber","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"starOff","t":4,"rt":$n[0].Sprite,"sn":"starOff"},{"a":2,"n":"starOn","t":4,"rt":$n[0].Sprite,"sn":"starOn"},{"a":2,"n":"submit","t":4,"rt":$n[0].GameObject,"sn":"submit"},{"a":2,"n":"textRate","t":4,"rt":$n[0].GameObject,"sn":"textRate"}]}; }, $n);
    /*BB10_PopupRate end.*/

    /*BB10_RateStar start.*/
    $m("BB10_RateStar", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"HandleClickStar","t":8,"sn":"HandleClickStar","rt":$n[1].Void},{"a":2,"n":"starImg","t":4,"rt":$n[6].Image,"sn":"starImg"},{"a":2,"n":"starNumber","t":4,"rt":$n[1].Int32,"sn":"starNumber","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*BB10_RateStar end.*/

    /*Exit start.*/
    $m("Exit", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Reset","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"Reset","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActive","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"StartWait","t":8,"pi":[{"n":"isHome","pt":$n[1].Boolean,"ps":0}],"sn":"StartWait","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"Wait","t":8,"pi":[{"n":"isHome","pt":$n[1].Boolean,"ps":0}],"sn":"Wait","rt":$n[3].IEnumerator,"p":[$n[1].Boolean]},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Exit end.*/

    /*GameDefine start.*/
    $m("GameDefine", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetScore","is":true,"t":8,"pi":[{"n":"numberLine","pt":$n[1].Int32,"ps":0}],"sn":"GetScore","rt":$n[1].Int32,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"freeLayer","is":true,"t":4,"rt":$n[1].Int32,"sn":"freeLayer","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"pageID","is":true,"t":4,"rt":$n[1].String,"sn":"pageID"},{"a":2,"n":"pageName","is":true,"t":4,"rt":$n[1].String,"sn":"pageName"},{"a":2,"n":"pattemDarkAlpha","is":true,"t":4,"rt":$n[1].Single,"sn":"pattemDarkAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pattemLightAlpha","is":true,"t":4,"rt":$n[1].Single,"sn":"pattemLightAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pikachuNormalScale","is":true,"t":4,"rt":$n[1].Single,"sn":"pikachuNormalScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pikachuYScale","is":true,"t":4,"rt":$n[1].Single,"sn":"pikachuYScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"posCenter","is":true,"t":4,"rt":$n[0].Vector2,"sn":"posCenter"},{"a":2,"n":"posLeft","is":true,"t":4,"rt":$n[0].Vector2,"sn":"posLeft"},{"a":2,"n":"posRight","is":true,"t":4,"rt":$n[0].Vector2,"sn":"posRight"},{"a":2,"n":"posTop","is":true,"t":4,"rt":$n[0].Vector2,"sn":"posTop"},{"a":2,"n":"selectingLayer","is":true,"t":4,"rt":$n[1].Int32,"sn":"selectingLayer","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"startCol","is":true,"t":4,"rt":$n[1].Int32,"sn":"startCol","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"startRow","is":true,"t":4,"rt":$n[1].Int32,"sn":"startRow","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*GameDefine end.*/

    /*PauseGameListener start.*/
    $m("PauseGameListener", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[1].Void},{"a":1,"n":"onClick","t":4,"rt":$n[1].Boolean,"sn":"onClick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PauseGameListener end.*/

    /*StartGameScript start.*/
    $m("StartGameScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FbClick","t":8,"sn":"FbClick","rt":$n[1].Void},{"a":1,"n":"Middle","t":8,"sn":"Middle","rt":$n[1].Void},{"a":2,"n":"MoreClick","t":8,"sn":"MoreClick","rt":$n[1].Void},{"a":2,"n":"RateClick","t":8,"sn":"RateClick","rt":$n[1].Void},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[1].Void},{"a":2,"n":"SetActive","t":8,"pi":[{"n":"isActive","pt":$n[1].Boolean,"ps":0}],"sn":"SetActive","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"StartPlayGame","t":8,"sn":"StartPlayGame","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"group","t":4,"rt":$n[0].CanvasGroup,"sn":"group"},{"a":2,"n":"likeImage","t":4,"rt":$n[6].Image,"sn":"likeImage"},{"a":2,"n":"moreImage","t":4,"rt":$n[6].Image,"sn":"moreImage"},{"a":2,"n":"rateImage","t":4,"rt":$n[6].Image,"sn":"rateImage"},{"a":2,"n":"rec","t":4,"rt":$n[0].RectTransform,"sn":"rec"},{"a":2,"n":"tapText","t":4,"rt":$n[6].Text,"sn":"tapText"},{"a":2,"n":"tetrisText","t":4,"rt":$n[6].Text,"sn":"tetrisText"}]}; }, $n);
    /*StartGameScript end.*/

    /*SingletonBase$1 start.*/
    $m("SingletonBase$1", function (T) { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"instance","is":true,"t":4,"rt":T,"sn":"instance"}]}; }, $n);
    /*SingletonBase$1 end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[1].Int32,"p":[$n[9].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[10].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[1].Int32,"p":[$n[9].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0},{"n":"to","pt":$n[1].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[1].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[1].Int32,"p":[$n[9].AudioMixer,$n[1].Single,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOKill","rt":$n[1].Int32,"p":[$n[9].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[1].Int32,"p":[$n[9].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPitch","rt":$n[10].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[1].Int32,"p":[$n[9].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[1].Int32,"p":[$n[9].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[1].Int32,"p":[$n[9].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[1].Int32,"p":[$n[9].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[1].Int32,"p":[$n[9].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0},{"n":"floatName","pt":$n[1].String,"ps":1},{"n":"endValue","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[10].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[9].AudioMixer,$n[1].String,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[1].Int32,"p":[$n[9].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[9].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[1].Int32,"p":[$n[9].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[7].Sequence,"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":$n[11].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,$n[11].Path,$n[1].Single,$n[7].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[7].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[7].PathType,$n[7].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"towards","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[7].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[10].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[7].AxisConstraint,$n[1].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":$n[11].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,$n[11].Path,$n[1].Single,$n[7].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[7].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[7].PathType,$n[7].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[7].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[10].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[7].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[7].Sequence,"p":[$n[0].Rigidbody2D,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":$n[11].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,$n[11].Path,$n[1].Single,$n[7].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[7].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[7].PathType,$n[7].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":$n[11].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,$n[11].Path,$n[1].Single,$n[7].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[7].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[7].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[7].PathType,$n[7].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DORotate","rt":$n[10].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[7].Tweener,"p":[$n[0].SpriteRenderer,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[0].SpriteRenderer,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[0].SpriteRenderer,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[7].Sequence,"p":[$n[0].SpriteRenderer,pc.ColorGradient,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[7].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[7].Tweener,"p":[$n[6].Graphic,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[7].Tweener,"p":[$n[6].Image,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[7].Tweener,"p":[$n[6].Text,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Graphic,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$1","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Image,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$2","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Outline,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$3","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Text,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"fromValue","pt":$n[1].Int32,"ps":1},{"n":"endValue","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[12].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[10].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[6].Text,$n[1].Int32,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[12].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[10].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].CanvasGroup,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$1","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Graphic,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$2","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$3","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Outline,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$4","rt":$n[10].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Text,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[10].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[7].Sequence,"p":[$n[6].Image,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[7].Tweener,"p":[$n[6].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[7].Sequence,"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[7].Tweener,"p":[$n[6].ScrollRect,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivot","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotX","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotY","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"punch","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[7].Tweener,"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOScale","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].Outline,$n[0].Vector2,$n[1].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[7].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[7].Tweener,"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[7].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","pt":$n[0].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[7].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[7].Tweener,"p":[$n[0].RectTransform,$n[1].Single,$n[0].Vector2,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[7].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"center","pt":$n[0].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Single,$n[1].Boolean,$n[1].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[1].String,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[1].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[7].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[1].String,"ps":5}],"sn":"DOText","rt":$n[10].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[6].Text,$n[1].String,$n[1].Single,$n[1].Boolean,$n[7].ScrambleMode,$n[1].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Slider,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOValue","rt":$n[10].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].Slider,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[7].Tweener,"p":[$n[6].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[7].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].RectTransform,"ps":0},{"n":"to","pt":$n[0].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[0].Vector2,"p":[$n[0].RectTransform,$n[0].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[7].Sequence,"p":[$n[0].Material,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[1].String,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[7].Sequence,"p":[$n[0].Material,pc.ColorGradient,$n[1].String,$n[1].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOOffset","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Material,$n[0].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOTiling","rt":$n[10].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Material,$n[0].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[0].CustomYieldInstruction,"p":[$n[7].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[0].CustomYieldInstruction,"p":[$n[7].Tween,$n[1].Int32,$n[1].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[0].CustomYieldInstruction,"p":[$n[7].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[0].CustomYieldInstruction,"p":[$n[7].Tween,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[0].CustomYieldInstruction,"p":[$n[7].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[7].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[0].CustomYieldInstruction,"p":[$n[7].Tween,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[7].DOTweenCYInstruction.WaitForCompletion,$n[7].DOTweenCYInstruction.WaitForRewind,$n[7].DOTweenCYInstruction.WaitForKill,$n[7].DOTweenCYInstruction.WaitForElapsedLoops,$n[7].DOTweenCYInstruction.WaitForPosition,$n[7].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween,$n[1].Int32],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[1].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween,$n[1].Single],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[1].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[7].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[7].Tween],"pi":[{"n":"tween","pt":$n[7].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[7].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[7].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[1].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[1].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[1].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[7].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[1].Boolean,"ps":1},{"n":"isLocal","pt":$n[1].Boolean,"ps":2},{"n":"path","pt":$n[11].Path,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"pathMode","pt":$n[7].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[10].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].MonoBehaviour,$n[1].Boolean,$n[1].Boolean,$n[11].Path,$n[1].Single,$n[7].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[1].Boolean,"p":[$n[0].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[1].Boolean,"p":[$n[0].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[13].PathOptions,"ps":0},{"n":"t","pt":$n[7].Tween,"ps":1},{"n":"newRot","pt":$n[0].Quaternion,"ps":2},{"n":"trans","pt":$n[0].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[1].Void,"p":[$n[13].PathOptions,$n[7].Tween,$n[0].Quaternion,$n[0].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
