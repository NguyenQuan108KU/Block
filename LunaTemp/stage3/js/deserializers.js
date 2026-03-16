var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointSpring' )
  var i643 = data
  i642.spring = i643[0]
  i642.damper = i643[1]
  i642.targetPosition = i643[2]
  return i642
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointMotor' )
  var i645 = data
  i644.m_TargetVelocity = i645[0]
  i644.m_Force = i645[1]
  i644.m_FreeSpin = i645[2]
  return i644
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointLimits' )
  var i647 = data
  i646.m_Min = i647[0]
  i646.m_Max = i647[1]
  i646.m_Bounciness = i647[2]
  i646.m_BounceMinVelocity = i647[3]
  i646.m_ContactDistance = i647[4]
  i646.minBounce = i647[5]
  i646.maxBounce = i647[6]
  return i646
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointDrive' )
  var i649 = data
  i648.m_PositionSpring = i649[0]
  i648.m_PositionDamper = i649[1]
  i648.m_MaximumForce = i649[2]
  i648.m_UseAcceleration = i649[3]
  return i648
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i651 = data
  i650.m_Spring = i651[0]
  i650.m_Damper = i651[1]
  return i650
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i653 = data
  i652.m_Limit = i653[0]
  i652.m_Bounciness = i653[1]
  i652.m_ContactDistance = i653[2]
  return i652
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i655 = data
  i654.m_ExtremumSlip = i655[0]
  i654.m_ExtremumValue = i655[1]
  i654.m_AsymptoteSlip = i655[2]
  i654.m_AsymptoteValue = i655[3]
  i654.m_Stiffness = i655[4]
  return i654
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i657 = data
  i656.m_LowerAngle = i657[0]
  i656.m_UpperAngle = i657[1]
  return i656
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i659 = data
  i658.m_MotorSpeed = i659[0]
  i658.m_MaximumMotorTorque = i659[1]
  return i658
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i661 = data
  i660.m_DampingRatio = i661[0]
  i660.m_Frequency = i661[1]
  i660.m_Angle = i661[2]
  return i660
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i663 = data
  i662.m_LowerTranslation = i663[0]
  i662.m_UpperTranslation = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i664 = root || new pc.UnityMaterial()
  var i665 = data
  i664.name = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'shader')
  i664.renderQueue = i665[3]
  i664.enableInstancing = !!i665[4]
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i667[i + 0]) );
  }
  i664.floatParameters = i666
  var i669 = i665[6]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i669[i + 0]) );
  }
  i664.colorParameters = i668
  var i671 = i665[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i671[i + 0]) );
  }
  i664.vectorParameters = i670
  var i673 = i665[8]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i673[i + 0]) );
  }
  i664.textureParameters = i672
  var i675 = i665[9]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i675[i + 0]) );
  }
  i664.materialFlags = i674
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i679 = data
  i678.name = i679[0]
  i678.value = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i683 = data
  i682.name = i683[0]
  i682.value = new pc.Color(i683[1], i683[2], i683[3], i683[4])
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i687 = data
  i686.name = i687[0]
  i686.value = new pc.Vec4( i687[1], i687[2], i687[3], i687[4] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'value')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i695 = data
  i694.name = i695[0]
  i694.enabled = !!i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i697 = data
  i696.name = i697[0]
  i696.width = i697[1]
  i696.height = i697[2]
  i696.mipmapCount = i697[3]
  i696.anisoLevel = i697[4]
  i696.filterMode = i697[5]
  i696.hdr = !!i697[6]
  i696.format = i697[7]
  i696.wrapMode = i697[8]
  i696.alphaIsTransparency = !!i697[9]
  i696.alphaSource = i697[10]
  i696.graphicsFormat = i697[11]
  i696.sRGBTexture = !!i697[12]
  i696.desiredColorSpace = i697[13]
  i696.wrapU = i697[14]
  i696.wrapV = i697[15]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i699 = data
  i698.position = new pc.Vec3( i699[0], i699[1], i699[2] )
  i698.scale = new pc.Vec3( i699[3], i699[4], i699[5] )
  i698.rotation = new pc.Quat(i699[6], i699[7], i699[8], i699[9])
  return i698
}

Deserializers["CompleteBlocks"] = function (request, data, root) {
  var i700 = root || request.c( 'CompleteBlocks' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'spriteRenderer')
  var i703 = i701[2]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('TextAndSound')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(request.d('TextAndSound', i703[i + 0]));
  }
  i700.listTextAndSound = i702
  return i700
}

Deserializers["TextAndSound"] = function (request, data, root) {
  var i706 = root || request.c( 'TextAndSound' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'sprite')
  request.r(i707[2], i707[3], 0, i706, 'audioClip')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'clip')
  request.r(i709[2], i709[3], 0, i708, 'outputAudioMixerGroup')
  i708.playOnAwake = !!i709[4]
  i708.loop = !!i709[5]
  i708.time = i709[6]
  i708.volume = i709[7]
  i708.pitch = i709[8]
  i708.enabled = !!i709[9]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i711 = data
  i710.color = new pc.Color(i711[0], i711[1], i711[2], i711[3])
  request.r(i711[4], i711[5], 0, i710, 'sprite')
  i710.flipX = !!i711[6]
  i710.flipY = !!i711[7]
  i710.drawMode = i711[8]
  i710.size = new pc.Vec2( i711[9], i711[10] )
  i710.tileMode = i711[11]
  i710.adaptiveModeThreshold = i711[12]
  i710.maskInteraction = i711[13]
  i710.spriteSortPoint = i711[14]
  i710.enabled = !!i711[15]
  request.r(i711[16], i711[17], 0, i710, 'sharedMaterial')
  var i713 = i711[18]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.sharedMaterials = i712
  i710.receiveShadows = !!i711[19]
  i710.shadowCastingMode = i711[20]
  i710.sortingLayerID = i711[21]
  i710.sortingOrder = i711[22]
  i710.lightmapIndex = i711[23]
  i710.lightmapSceneIndex = i711[24]
  i710.lightmapScaleOffset = new pc.Vec4( i711[25], i711[26], i711[27], i711[28] )
  i710.lightProbeUsage = i711[29]
  i710.reflectionProbeUsage = i711[30]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'animatorController')
  request.r(i717[2], i717[3], 0, i716, 'avatar')
  i716.updateMode = i717[4]
  i716.hasTransformHierarchy = !!i717[5]
  i716.applyRootMotion = !!i717[6]
  var i719 = i717[7]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i716.humanBones = i718
  i716.enabled = !!i717[8]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i723 = data
  i722.name = i723[0]
  i722.tagId = i723[1]
  i722.enabled = !!i723[2]
  i722.isStatic = !!i723[3]
  i722.layer = i723[4]
  return i722
}

Deserializers["BB10_BrickCubeUnit"] = function (request, data, root) {
  var i724 = root || request.c( 'BB10_BrickCubeUnit' )
  var i725 = data
  i724.thisType = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'viewer')
  request.r(i725[3], i725[4], 0, i724, 'render')
  i724.ID = i725[5]
  i724.row = i725[6]
  i724.col = i725[7]
  i724.indexRow = i725[8]
  i724.indexCol = i725[9]
  i724.scale = i725[10]
  i724.myData = request.d('BB10_ColorData', i725[11], i724.myData)
  i724.targetGray = i725[12]
  i724.durationDrop = i725[13]
  i724.dropScaleMin = new pc.Vec3( i725[14], i725[15], i725[16] )
  i724.ac = new pc.AnimationCurve( { keys_flow: i725[17] } )
  i724.speed = i725[18]
  i724.targetScale = i725[19]
  i724.durationScaleEffect = i725[20]
  i724.speedRotate = i725[21]
  request.r(i725[22], i725[23], 0, i724, 'shadowDropBlock')
  return i724
}

Deserializers["BB10_ColorData"] = function (request, data, root) {
  var i726 = root || request.c( 'BB10_ColorData' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'sprite')
  i726.ID = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i729 = data
  i728.usedByComposite = !!i729[0]
  i728.autoTiling = !!i729[1]
  i728.size = new pc.Vec2( i729[2], i729[3] )
  i728.edgeRadius = i729[4]
  i728.enabled = !!i729[5]
  i728.isTrigger = !!i729[6]
  i728.usedByEffector = !!i729[7]
  i728.density = i729[8]
  i728.offset = new pc.Vec2( i729[9], i729[10] )
  request.r(i729[11], i729[12], 0, i728, 'material')
  return i728
}

Deserializers["BB10_ColorControl"] = function (request, data, root) {
  var i730 = root || request.c( 'BB10_ColorControl' )
  var i731 = data
  var i733 = i731[0]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('BB10_ColorData', i733[i + 0]) );
  }
  i730.sprites = i732
  var i735 = i731[1]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i730.spriteTexs = i734
  var i737 = i731[2]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
  var i739 = i737[i + 0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
    i736.push( i738 );
  }
  i730.preloadSprite = i736
  i730.preload = i731[3]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'additionalVertexStreams')
  i750.enabled = !!i751[2]
  request.r(i751[3], i751[4], 0, i750, 'sharedMaterial')
  var i753 = i751[5]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i750.sharedMaterials = i752
  i750.receiveShadows = !!i751[6]
  i750.shadowCastingMode = i751[7]
  i750.sortingLayerID = i751[8]
  i750.sortingOrder = i751[9]
  i750.lightmapIndex = i751[10]
  i750.lightmapSceneIndex = i751[11]
  i750.lightmapScaleOffset = new pc.Vec4( i751[12], i751[13], i751[14], i751[15] )
  i750.lightProbeUsage = i751[16]
  i750.reflectionProbeUsage = i751[17]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TextMesh"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TextMesh' )
  var i755 = data
  i754.m_Alignment = i755[0]
  i754.m_Anchor = i755[1]
  i754.m_CharacterSize = i755[2]
  request.r(i755[3], i755[4], 0, i754, 'm_Font')
  i754.m_FontSize = i755[5]
  i754.m_FontStyle = i755[6]
  i754.m_LineSpacing = i755[7]
  i754.m_OffsetZ = i755[8]
  i754.m_RichText = !!i755[9]
  i754.m_TabSize = i755[10]
  i754.m_Text = i755[11]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i757 = data
  i756.name = i757[0]
  i756.atlasId = i757[1]
  i756.mipmapCount = i757[2]
  i756.hdr = !!i757[3]
  i756.size = i757[4]
  i756.anisoLevel = i757[5]
  i756.filterMode = i757[6]
  var i759 = i757[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 4) {
    i758.push( UnityEngine.Rect.MinMaxRect(i759[i + 0], i759[i + 1], i759[i + 2], i759[i + 3]) );
  }
  i756.rects = i758
  i756.wrapU = i757[8]
  i756.wrapV = i757[9]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i763 = data
  i762.name = i763[0]
  i762.index = i763[1]
  i762.startup = !!i763[2]
  return i762
}

Deserializers["BB10_MainObjControl"] = function (request, data, root) {
  var i764 = root || request.c( 'BB10_MainObjControl' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'colorControl')
  request.r(i765[2], i765[3], 0, i764, 'pattemCreater')
  request.r(i765[4], i765[5], 0, i764, 'nextViewerCtr')
  request.r(i765[6], i765[7], 0, i764, 'grid')
  request.r(i765[8], i765[9], 0, i764, 'planeViewCrt')
  request.r(i765[10], i765[11], 0, i764, 'groundView')
  request.r(i765[12], i765[13], 0, i764, 'camScript')
  request.r(i765[14], i765[15], 0, i764, 'scoreCtr')
  request.r(i765[16], i765[17], 0, i764, 'helpCtr')
  request.r(i765[18], i765[19], 0, i764, 'screenCtr')
  request.r(i765[20], i765[21], 0, i764, 'tutorial')
  request.r(i765[22], i765[23], 0, i764, 'cam')
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i767 = data
  i766.aspect = i767[0]
  i766.orthographic = !!i767[1]
  i766.orthographicSize = i767[2]
  i766.backgroundColor = new pc.Color(i767[3], i767[4], i767[5], i767[6])
  i766.nearClipPlane = i767[7]
  i766.farClipPlane = i767[8]
  i766.fieldOfView = i767[9]
  i766.depth = i767[10]
  i766.clearFlags = i767[11]
  i766.cullingMask = i767[12]
  i766.rect = i767[13]
  request.r(i767[14], i767[15], 0, i766, 'targetTexture')
  i766.usePhysicalProperties = !!i767[16]
  i766.focalLength = i767[17]
  i766.sensorSize = new pc.Vec2( i767[18], i767[19] )
  i766.lensShift = new pc.Vec2( i767[20], i767[21] )
  i766.gateFit = i767[22]
  i766.commandBufferCount = i767[23]
  i766.cameraType = i767[24]
  i766.enabled = !!i767[25]
  return i766
}

Deserializers["CameraScript"] = function (request, data, root) {
  var i768 = root || request.c( 'CameraScript' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'cam')
  return i768
}

Deserializers["MainAudio"] = function (request, data, root) {
  var i770 = root || request.c( 'MainAudio' )
  var i771 = data
  var i773 = i771[0]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('InputAudio', i773[i + 0]) );
  }
  i770.listInputAudio = i772
  i770.isMute = !!i771[1]
  return i770
}

Deserializers["InputAudio"] = function (request, data, root) {
  var i776 = root || request.c( 'InputAudio' )
  var i777 = data
  i776.type = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'audioClip')
  i776.loop = !!i777[3]
  i776.volume = i777[4]
  return i776
}

Deserializers["BB10_Grid"] = function (request, data, root) {
  var i778 = root || request.c( 'BB10_Grid' )
  var i779 = data
  i778.numberCol = i779[0]
  i778.numberRow = i779[1]
  i778.waitDelete = i779[2]
  i778.waitPerUnit = i779[3]
  i778.durationGray = i779[4]
  i778.nonGray = i779[5]
  i778.halfGray = i779[6]
  i778.fullGray = i779[7]
  i778.waitUnit = i779[8]
  request.r(i779[9], i779[10], 0, i778, 'completeText')
  i778.score = i779[11]
  return i778
}

Deserializers["BB10_PattemCreater"] = function (request, data, root) {
  var i780 = root || request.c( 'BB10_PattemCreater' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'cubePrefab')
  var i783 = i781[2]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i780.listCube = i782
  request.r(i781[3], i781[4], 0, i780, 'pattemDataSave')
  return i780
}

Deserializers["BB10_PlaneView"] = function (request, data, root) {
  var i786 = root || request.c( 'BB10_PlaneView' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'camera')
  i786.y = i787[2]
  i786.scale = i787[3]
  i786.scaleSmall = i787[4]
  i786.distanceTouch = i787[5]
  i786.duration = i787[6]
  request.r(i787[7], i787[8], 0, i786, 'cam')
  var i789 = i787[9]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 1, i788, '')
  }
  i786.listBlock = i788
  i786.selected = i787[10]
  i786.isScaling = !!i787[11]
  i786.groundAcepted = !!i787[12]
  i786.faceMousePos = new pc.Vec2( i787[13], i787[14] )
  i786.isAuto = !!i787[15]
  i786.state = i787[16]
  i786.speedMoveDrop = i787[17]
  return i786
}

Deserializers["BB10_GroundView"] = function (request, data, root) {
  var i790 = root || request.c( 'BB10_GroundView' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'groundPrefab')
  var i793 = i791[2]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 1, i792, '')
  }
  i790.listBlockRender = i792
  return i790
}

Deserializers["BB10_NextViewerControl"] = function (request, data, root) {
  var i796 = root || request.c( 'BB10_NextViewerControl' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'pattemTableObj')
  request.r(i797[2], i797[3], 0, i796, 'spawnData')
  var i799 = i797[4]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.listView = i798
  var i801 = i797[5]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 1, i800, '')
  }
  i796.listUnit0 = i800
  var i803 = i797[6]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 1, i802, '')
  }
  i796.listUnit1 = i802
  var i805 = i797[7]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 1, i804, '')
  }
  i796.listUnit2 = i804
  return i796
}

Deserializers["BB10_NextViewer"] = function (request, data, root) {
  var i808 = root || request.c( 'BB10_NextViewer' )
  var i809 = data
  i808.index = i809[0]
  i808.scale = i809[1]
  i808.durationLight = i809[2]
  i808.duration = i809[3]
  i808.durationIn = i809[4]
  i808.myType = i809[5]
  i808.rotateTime = i809[6]
  var i811 = i809[7]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 1, i810, '')
  }
  i808.listBlock = i810
  i808.state = i809[8]
  i808.startPos1 = new pc.Vec2( i809[9], i809[10] )
  i808.startPos2 = new pc.Vec2( i809[11], i809[12] )
  i808.ac1 = new pc.AnimationCurve( { keys_flow: i809[13] } )
  i808.ac2 = new pc.AnimationCurve( { keys_flow: i809[14] } )
  return i808
}

Deserializers["BB10_ScoreCtr"] = function (request, data, root) {
  var i812 = root || request.c( 'BB10_ScoreCtr' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'scorePrefab')
  var i815 = i813[2]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextMesh')))
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 1, i814, '')
  }
  i812.listText = i814
  i812.startColor = new pc.Color(i813[3], i813[4], i813[5], i813[6])
  i812.endColor = new pc.Color(i813[7], i813[8], i813[9], i813[10])
  request.r(i813[11], i813[12], 0, i812, 'mat')
  i812.speed0 = i813[13]
  i812.G = i813[14]
  i812.duration = i813[15]
  return i812
}

Deserializers["BB10_ShowHelpCtr"] = function (request, data, root) {
  var i818 = root || request.c( 'BB10_ShowHelpCtr' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'groundPrefab')
  var i821 = i819[2]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 1, i820, '')
  }
  i818.listBlockDisable = i820
  var i823 = i819[3]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 1, i822, '')
  }
  i818.listBlockActive = i822
  return i818
}

Deserializers["BB10_Tutorial"] = function (request, data, root) {
  var i826 = root || request.c( 'BB10_Tutorial' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'finger')
  request.r(i827[2], i827[3], 0, i826, 'circle')
  i826.durationMoveUp = i827[4]
  i826.durationMoveDown = i827[5]
  i826.durationScale = i827[6]
  i826.durationMoveShort = i827[7]
  i826.state = i827[8]
  return i826
}

Deserializers["BB10_ScreenCtr"] = function (request, data, root) {
  var i828 = root || request.c( 'BB10_ScreenCtr' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'BgUnit')
  request.r(i829[2], i829[3], 0, i828, 'topRec')
  request.r(i829[4], i829[5], 0, i828, 'bottomTrans')
  var i831 = i829[6]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.listPattemTrans = i830
  i828.defaultPattemY = i829[7]
  i828.defaultPattemUIY = i829[8]
  i828.orthographicSizeMin = i829[9]
  request.r(i829[10], i829[11], 0, i828, 'cam')
  i828.distanceEdge = i829[12]
  i828.durationFadeIn = i829[13]
  i828.distanceMoveFade = i829[14]
  i828.startAlpha = i829[15]
  i828.F = i829[16]
  i828.FUI = i829[17]
  request.r(i829[18], i829[19], 0, i828, 'BG')
  i828.targetAlpha = i829[20]
  request.r(i829[21], i829[22], 0, i828, 'partTop')
  request.r(i829[23], i829[24], 0, i828, 'partDown')
  request.r(i829[25], i829[26], 0, i828, 'partLeft')
  request.r(i829[27], i829[28], 0, i828, 'partRight')
  var i833 = i829[29]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i828.grid = i832
  i828.gridMoving = !!i829[30]
  i828.waitStep = i829[31]
  i828.durationScaleUp = i829[32]
  i828.acScale = new pc.AnimationCurve( { keys_flow: i829[33] } )
  request.r(i829[34], i829[35], 0, i828, 'parentCell')
  return i828
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i836 = root || request.c( 'GamePlayManager' )
  var i837 = data
  i836.score = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'textScore')
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i839 = data
  i838.type = i839[0]
  i838.color = new pc.Color(i839[1], i839[2], i839[3], i839[4])
  i838.cullingMask = i839[5]
  i838.intensity = i839[6]
  i838.range = i839[7]
  i838.spotAngle = i839[8]
  i838.shadows = i839[9]
  i838.shadowNormalBias = i839[10]
  i838.shadowBias = i839[11]
  i838.shadowStrength = i839[12]
  i838.shadowResolution = i839[13]
  i838.lightmapBakeType = i839[14]
  i838.renderMode = i839[15]
  request.r(i839[16], i839[17], 0, i838, 'cookie')
  i838.cookieSize = i839[18]
  i838.enabled = !!i839[19]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i841 = data
  i840.pivot = new pc.Vec2( i841[0], i841[1] )
  i840.anchorMin = new pc.Vec2( i841[2], i841[3] )
  i840.anchorMax = new pc.Vec2( i841[4], i841[5] )
  i840.sizeDelta = new pc.Vec2( i841[6], i841[7] )
  i840.anchoredPosition3D = new pc.Vec3( i841[8], i841[9], i841[10] )
  i840.rotation = new pc.Quat(i841[11], i841[12], i841[13], i841[14])
  i840.scale = new pc.Vec3( i841[15], i841[16], i841[17] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i843 = data
  i842.planeDistance = i843[0]
  i842.referencePixelsPerUnit = i843[1]
  i842.isFallbackOverlay = !!i843[2]
  i842.renderMode = i843[3]
  i842.renderOrder = i843[4]
  i842.sortingLayerName = i843[5]
  i842.sortingOrder = i843[6]
  i842.scaleFactor = i843[7]
  request.r(i843[8], i843[9], 0, i842, 'worldCamera')
  i842.overrideSorting = !!i843[10]
  i842.pixelPerfect = !!i843[11]
  i842.targetDisplay = i843[12]
  i842.overridePixelPerfect = !!i843[13]
  i842.enabled = !!i843[14]
  return i842
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i845 = data
  i844.m_UiScaleMode = i845[0]
  i844.m_ReferencePixelsPerUnit = i845[1]
  i844.m_ScaleFactor = i845[2]
  i844.m_ReferenceResolution = new pc.Vec2( i845[3], i845[4] )
  i844.m_ScreenMatchMode = i845[5]
  i844.m_MatchWidthOrHeight = i845[6]
  i844.m_PhysicalUnit = i845[7]
  i844.m_FallbackScreenDPI = i845[8]
  i844.m_DefaultSpriteDPI = i845[9]
  i844.m_DynamicPixelsPerUnit = i845[10]
  i844.m_PresetInfoIsWorld = !!i845[11]
  return i844
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i847 = data
  i846.m_IgnoreReversedGraphics = !!i847[0]
  i846.m_BlockingObjects = i847[1]
  i846.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i847[2] )
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i849 = data
  i848.cullTransparentMesh = !!i849[0]
  return i848
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Image' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'm_Sprite')
  i850.m_Type = i851[2]
  i850.m_PreserveAspect = !!i851[3]
  i850.m_FillCenter = !!i851[4]
  i850.m_FillMethod = i851[5]
  i850.m_FillAmount = i851[6]
  i850.m_FillClockwise = !!i851[7]
  i850.m_FillOrigin = i851[8]
  i850.m_UseSpriteMesh = !!i851[9]
  i850.m_PixelsPerUnitMultiplier = i851[10]
  i850.m_Maskable = !!i851[11]
  request.r(i851[12], i851[13], 0, i850, 'm_Material')
  i850.m_Color = new pc.Color(i851[14], i851[15], i851[16], i851[17])
  i850.m_RaycastTarget = !!i851[18]
  i850.m_RaycastPadding = new pc.Vec4( i851[19], i851[20], i851[21], i851[22] )
  return i850
}

Deserializers["BB10_MainCanvasUI"] = function (request, data, root) {
  var i852 = root || request.c( 'BB10_MainCanvasUI' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'inGameScript')
  request.r(i853[2], i853[3], 0, i852, 'faderScript')
  i852.OnDropPiece = request.d('System.Action', i853[4], i852.OnDropPiece)
  request.r(i853[5], i853[6], 0, i852, 'blur')
  i852.OnNeedStopAdBreak = request.d('System.Action', i853[7], i852.OnNeedStopAdBreak)
  return i852
}

Deserializers["System.Action"] = function (request, data, root) {
  var i854 = root || request.c( 'System.Action' )
  var i855 = data
  return i854
}

Deserializers["BB10_InGameScript"] = function (request, data, root) {
  var i856 = root || request.c( 'BB10_InGameScript' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'rec')
  request.r(i857[2], i857[3], 0, i856, 'scoreTxt')
  request.r(i857[4], i857[5], 0, i856, 'bestTxt')
  i856.scoreInt = i857[6]
  i856.bestInt = i857[7]
  request.r(i857[8], i857[9], 0, i856, 'group')
  request.r(i857[10], i857[11], 0, i856, 'blur_1')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i859 = data
  i858.m_Alpha = i859[0]
  i858.m_Interactable = !!i859[1]
  i858.m_BlocksRaycasts = !!i859[2]
  i858.m_IgnoreParentGroups = !!i859[3]
  i858.enabled = !!i859[4]
  return i858
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_FirstSelected')
  i860.m_sendNavigationEvents = !!i861[2]
  i860.m_DragThreshold = i861[3]
  return i860
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i863 = data
  i862.m_HorizontalAxis = i863[0]
  i862.m_VerticalAxis = i863[1]
  i862.m_SubmitButton = i863[2]
  i862.m_CancelButton = i863[3]
  i862.m_InputActionsPerSecond = i863[4]
  i862.m_RepeatDelay = i863[5]
  i862.m_ForceModuleActive = !!i863[6]
  i862.m_SendPointerHoverToParent = !!i863[7]
  return i862
}

Deserializers["BB10_FaderHandler"] = function (request, data, root) {
  var i864 = root || request.c( 'BB10_FaderHandler' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'image')
  i864.durationFade = i865[2]
  i864.durationFadeOut = i865[3]
  i864.durationSwich = i865[4]
  return i864
}

Deserializers["BB10_HomeController"] = function (request, data, root) {
  var i866 = root || request.c( 'BB10_HomeController' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'group')
  return i866
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i869 = data
  i868.m_hasFontAssetChanged = !!i869[0]
  request.r(i869[1], i869[2], 0, i868, 'm_baseMaterial')
  i868.m_maskOffset = new pc.Vec4( i869[3], i869[4], i869[5], i869[6] )
  i868.m_text = i869[7]
  i868.m_isRightToLeft = !!i869[8]
  request.r(i869[9], i869[10], 0, i868, 'm_fontAsset')
  request.r(i869[11], i869[12], 0, i868, 'm_sharedMaterial')
  var i871 = i869[13]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.m_fontSharedMaterials = i870
  request.r(i869[14], i869[15], 0, i868, 'm_fontMaterial')
  var i873 = i869[16]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i868.m_fontMaterials = i872
  i868.m_fontColor32 = UnityEngine.Color32.ConstructColor(i869[17], i869[18], i869[19], i869[20])
  i868.m_fontColor = new pc.Color(i869[21], i869[22], i869[23], i869[24])
  i868.m_enableVertexGradient = !!i869[25]
  i868.m_colorMode = i869[26]
  i868.m_fontColorGradient = request.d('TMPro.VertexGradient', i869[27], i868.m_fontColorGradient)
  request.r(i869[28], i869[29], 0, i868, 'm_fontColorGradientPreset')
  request.r(i869[30], i869[31], 0, i868, 'm_spriteAsset')
  i868.m_tintAllSprites = !!i869[32]
  request.r(i869[33], i869[34], 0, i868, 'm_StyleSheet')
  i868.m_TextStyleHashCode = i869[35]
  i868.m_overrideHtmlColors = !!i869[36]
  i868.m_faceColor = UnityEngine.Color32.ConstructColor(i869[37], i869[38], i869[39], i869[40])
  i868.m_fontSize = i869[41]
  i868.m_fontSizeBase = i869[42]
  i868.m_fontWeight = i869[43]
  i868.m_enableAutoSizing = !!i869[44]
  i868.m_fontSizeMin = i869[45]
  i868.m_fontSizeMax = i869[46]
  i868.m_fontStyle = i869[47]
  i868.m_HorizontalAlignment = i869[48]
  i868.m_VerticalAlignment = i869[49]
  i868.m_textAlignment = i869[50]
  i868.m_characterSpacing = i869[51]
  i868.m_wordSpacing = i869[52]
  i868.m_lineSpacing = i869[53]
  i868.m_lineSpacingMax = i869[54]
  i868.m_paragraphSpacing = i869[55]
  i868.m_charWidthMaxAdj = i869[56]
  i868.m_enableWordWrapping = !!i869[57]
  i868.m_wordWrappingRatios = i869[58]
  i868.m_overflowMode = i869[59]
  request.r(i869[60], i869[61], 0, i868, 'm_linkedTextComponent')
  request.r(i869[62], i869[63], 0, i868, 'parentLinkedComponent')
  i868.m_enableKerning = !!i869[64]
  i868.m_enableExtraPadding = !!i869[65]
  i868.checkPaddingRequired = !!i869[66]
  i868.m_isRichText = !!i869[67]
  i868.m_parseCtrlCharacters = !!i869[68]
  i868.m_isOrthographic = !!i869[69]
  i868.m_isCullingEnabled = !!i869[70]
  i868.m_horizontalMapping = i869[71]
  i868.m_verticalMapping = i869[72]
  i868.m_uvLineOffset = i869[73]
  i868.m_geometrySortingOrder = i869[74]
  i868.m_IsTextObjectScaleStatic = !!i869[75]
  i868.m_VertexBufferAutoSizeReduction = !!i869[76]
  i868.m_useMaxVisibleDescender = !!i869[77]
  i868.m_pageToDisplay = i869[78]
  i868.m_margin = new pc.Vec4( i869[79], i869[80], i869[81], i869[82] )
  i868.m_isUsingLegacyAnimationComponent = !!i869[83]
  i868.m_isVolumetricText = !!i869[84]
  i868.m_Maskable = !!i869[85]
  request.r(i869[86], i869[87], 0, i868, 'm_Material')
  i868.m_Color = new pc.Color(i869[88], i869[89], i869[90], i869[91])
  i868.m_RaycastTarget = !!i869[92]
  i868.m_RaycastPadding = new pc.Vec4( i869[93], i869[94], i869[95], i869[96] )
  return i868
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.VertexGradient' )
  var i875 = data
  i874.topLeft = new pc.Color(i875[0], i875[1], i875[2], i875[3])
  i874.topRight = new pc.Color(i875[4], i875[5], i875[6], i875[7])
  i874.bottomLeft = new pc.Color(i875[8], i875[9], i875[10], i875[11])
  i874.bottomRight = new pc.Color(i875[12], i875[13], i875[14], i875[15])
  return i874
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.Slider' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_FillRect')
  request.r(i877[2], i877[3], 0, i876, 'm_HandleRect')
  i876.m_Direction = i877[4]
  i876.m_MinValue = i877[5]
  i876.m_MaxValue = i877[6]
  i876.m_WholeNumbers = !!i877[7]
  i876.m_Value = i877[8]
  i876.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i877[9], i876.m_OnValueChanged)
  i876.m_Navigation = request.d('UnityEngine.UI.Navigation', i877[10], i876.m_Navigation)
  i876.m_Transition = i877[11]
  i876.m_Colors = request.d('UnityEngine.UI.ColorBlock', i877[12], i876.m_Colors)
  i876.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i877[13], i876.m_SpriteState)
  i876.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i877[14], i876.m_AnimationTriggers)
  i876.m_Interactable = !!i877[15]
  request.r(i877[16], i877[17], 0, i876, 'm_TargetGraphic')
  return i876
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i879 = data
  i878.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i879[0], i878.m_PersistentCalls)
  return i878
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i881 = data
  var i883 = i881[0]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('UnityEngine.Events.PersistentCall', i883[i + 0]));
  }
  i880.m_Calls = i882
  return i880
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'm_Target')
  i886.m_TargetAssemblyTypeName = i887[2]
  i886.m_MethodName = i887[3]
  i886.m_Mode = i887[4]
  i886.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i887[5], i886.m_Arguments)
  i886.m_CallState = i887[6]
  return i886
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i889 = data
  i888.m_Mode = i889[0]
  i888.m_WrapAround = !!i889[1]
  request.r(i889[2], i889[3], 0, i888, 'm_SelectOnUp')
  request.r(i889[4], i889[5], 0, i888, 'm_SelectOnDown')
  request.r(i889[6], i889[7], 0, i888, 'm_SelectOnLeft')
  request.r(i889[8], i889[9], 0, i888, 'm_SelectOnRight')
  return i888
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i891 = data
  i890.m_NormalColor = new pc.Color(i891[0], i891[1], i891[2], i891[3])
  i890.m_HighlightedColor = new pc.Color(i891[4], i891[5], i891[6], i891[7])
  i890.m_PressedColor = new pc.Color(i891[8], i891[9], i891[10], i891[11])
  i890.m_SelectedColor = new pc.Color(i891[12], i891[13], i891[14], i891[15])
  i890.m_DisabledColor = new pc.Color(i891[16], i891[17], i891[18], i891[19])
  i890.m_ColorMultiplier = i891[20]
  i890.m_FadeDuration = i891[21]
  return i890
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'm_HighlightedSprite')
  request.r(i893[2], i893[3], 0, i892, 'm_PressedSprite')
  request.r(i893[4], i893[5], 0, i892, 'm_SelectedSprite')
  request.r(i893[6], i893[7], 0, i892, 'm_DisabledSprite')
  return i892
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i895 = data
  i894.m_NormalTrigger = i895[0]
  i894.m_HighlightedTrigger = i895[1]
  i894.m_PressedTrigger = i895[2]
  i894.m_SelectedTrigger = i895[3]
  i894.m_DisabledTrigger = i895[4]
  return i894
}

Deserializers["TimerProgress"] = function (request, data, root) {
  var i896 = root || request.c( 'TimerProgress' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'fillImageRed')
  request.r(i897[2], i897[3], 0, i896, 'fillImage')
  request.r(i897[4], i897[5], 0, i896, 'slider')
  i896.timer = i897[6]
  request.r(i897[7], i897[8], 0, i896, 'timerText')
  i896.haveTimer = !!i897[9]
  request.r(i897[10], i897[11], 0, i896, 'warningSprite')
  i896.timeWarning = i897[12]
  i896.warningSoundTimer = i897[13]
  i896.isFormatTimeMMSS = !!i897[14]
  return i896
}

Deserializers["BB10_LostScript"] = function (request, data, root) {
  var i898 = root || request.c( 'BB10_LostScript' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'scoreText')
  request.r(i899[2], i899[3], 0, i898, 'bestText')
  request.r(i899[4], i899[5], 0, i898, 'group')
  i898.isAuto = !!i899[6]
  request.r(i899[7], i899[8], 0, i898, 'cupShaker')
  request.r(i899[9], i899[10], 0, i898, 'listViewAdsPannel')
  return i898
}

Deserializers["BB10_PopupRate"] = function (request, data, root) {
  var i900 = root || request.c( 'BB10_PopupRate' )
  var i901 = data
  var i903 = i901[0]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_RateStar')))
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 1, i902, '')
  }
  i900.starList = i902
  request.r(i901[1], i901[2], 0, i900, 'submit')
  request.r(i901[3], i901[4], 0, i900, 'textRate')
  request.r(i901[5], i901[6], 0, i900, 'starOn')
  request.r(i901[7], i901[8], 0, i900, 'starOff')
  i900.starNumber = i901[9]
  request.r(i901[10], i901[11], 0, i900, 'popup')
  request.r(i901[12], i901[13], 0, i900, 'pannel')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i907 = data
  i906.ambientIntensity = i907[0]
  i906.reflectionIntensity = i907[1]
  i906.ambientMode = i907[2]
  i906.ambientLight = new pc.Color(i907[3], i907[4], i907[5], i907[6])
  i906.ambientSkyColor = new pc.Color(i907[7], i907[8], i907[9], i907[10])
  i906.ambientGroundColor = new pc.Color(i907[11], i907[12], i907[13], i907[14])
  i906.ambientEquatorColor = new pc.Color(i907[15], i907[16], i907[17], i907[18])
  i906.fogColor = new pc.Color(i907[19], i907[20], i907[21], i907[22])
  i906.fogEndDistance = i907[23]
  i906.fogStartDistance = i907[24]
  i906.fogDensity = i907[25]
  i906.fog = !!i907[26]
  request.r(i907[27], i907[28], 0, i906, 'skybox')
  i906.fogMode = i907[29]
  var i909 = i907[30]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i909[i + 0]) );
  }
  i906.lightmaps = i908
  i906.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i907[31], i906.lightProbes)
  i906.lightmapsMode = i907[32]
  i906.mixedBakeMode = i907[33]
  i906.environmentLightingMode = i907[34]
  i906.ambientProbe = new pc.SphericalHarmonicsL2(i907[35])
  i906.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i907[36])
  i906.useReferenceAmbientProbe = !!i907[37]
  request.r(i907[38], i907[39], 0, i906, 'customReflection')
  request.r(i907[40], i907[41], 0, i906, 'defaultReflection')
  i906.defaultReflectionMode = i907[42]
  i906.defaultReflectionResolution = i907[43]
  i906.sunLightObjectId = i907[44]
  i906.pixelLightCount = i907[45]
  i906.defaultReflectionHDR = !!i907[46]
  i906.hasLightDataAsset = !!i907[47]
  i906.hasManualGenerate = !!i907[48]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'lightmapColor')
  request.r(i913[2], i913[3], 0, i912, 'lightmapDirection')
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i914 = root || new UnityEngine.LightProbes()
  var i915 = data
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i923 = data
  var i925 = i923[0]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i925[i + 0]));
  }
  i922.ShaderCompilationErrors = i924
  i922.name = i923[1]
  i922.guid = i923[2]
  var i927 = i923[3]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i922.shaderDefinedKeywords = i926
  var i929 = i923[4]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i929[i + 0]) );
  }
  i922.passes = i928
  var i931 = i923[5]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i931[i + 0]) );
  }
  i922.usePasses = i930
  var i933 = i923[6]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i933[i + 0]) );
  }
  i922.defaultParameterValues = i932
  request.r(i923[7], i923[8], 0, i922, 'unityFallbackShader')
  i922.readDepth = !!i923[9]
  i922.isCreatedByShaderGraph = !!i923[10]
  i922.disableBatching = !!i923[11]
  i922.compiled = !!i923[12]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i937 = data
  i936.shaderName = i937[0]
  i936.errorMessage = i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i942 = root || new pc.UnityShaderPass()
  var i943 = data
  i942.id = i943[0]
  i942.subShaderIndex = i943[1]
  i942.name = i943[2]
  i942.passType = i943[3]
  i942.grabPassTextureName = i943[4]
  i942.usePass = !!i943[5]
  i942.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[6], i942.zTest)
  i942.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[7], i942.zWrite)
  i942.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[8], i942.culling)
  i942.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i943[9], i942.blending)
  i942.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i943[10], i942.alphaBlending)
  i942.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[11], i942.colorWriteMask)
  i942.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[12], i942.offsetUnits)
  i942.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[13], i942.offsetFactor)
  i942.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[14], i942.stencilRef)
  i942.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[15], i942.stencilReadMask)
  i942.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i943[16], i942.stencilWriteMask)
  i942.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i943[17], i942.stencilOp)
  i942.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i943[18], i942.stencilOpFront)
  i942.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i943[19], i942.stencilOpBack)
  var i945 = i943[20]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i945[i + 0]) );
  }
  i942.tags = i944
  var i947 = i943[21]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( i947[i + 0] );
  }
  i942.passDefinedKeywords = i946
  var i949 = i943[22]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i949[i + 0]) );
  }
  i942.passDefinedKeywordGroups = i948
  var i951 = i943[23]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i951[i + 0]) );
  }
  i942.variants = i950
  var i953 = i943[24]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i953[i + 0]) );
  }
  i942.excludedVariants = i952
  i942.hasDepthReader = !!i943[25]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i955 = data
  i954.val = i955[0]
  i954.name = i955[1]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i957 = data
  i956.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[0], i956.src)
  i956.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[1], i956.dst)
  i956.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[2], i956.op)
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i959 = data
  i958.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[0], i958.pass)
  i958.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[1], i958.fail)
  i958.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[2], i958.zFail)
  i958.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[3], i958.comp)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i963 = data
  i962.name = i963[0]
  i962.value = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i967 = data
  var i969 = i967[0]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i966.keywords = i968
  i966.hasDiscard = !!i967[1]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i973 = data
  i972.passId = i973[0]
  i972.subShaderIndex = i973[1]
  var i975 = i973[2]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i972.keywords = i974
  i972.vertexProgram = i973[3]
  i972.fragmentProgram = i973[4]
  i972.exportedForWebGl2 = !!i973[5]
  i972.readDepth = !!i973[6]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'shader')
  i978.pass = i979[2]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i983 = data
  i982.name = i983[0]
  i982.type = i983[1]
  i982.value = new pc.Vec4( i983[2], i983[3], i983[4], i983[5] )
  i982.textureValue = i983[6]
  i982.shaderPropertyFlag = i983[7]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i985 = data
  i984.name = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'texture')
  i984.aabb = i985[3]
  i984.vertices = i985[4]
  i984.triangles = i985[5]
  i984.textureRect = UnityEngine.Rect.MinMaxRect(i985[6], i985[7], i985[8], i985[9])
  i984.packedRect = UnityEngine.Rect.MinMaxRect(i985[10], i985[11], i985[12], i985[13])
  i984.border = new pc.Vec4( i985[14], i985[15], i985[16], i985[17] )
  i984.transparency = i985[18]
  i984.bounds = i985[19]
  i984.pixelsPerUnit = i985[20]
  i984.textureWidth = i985[21]
  i984.textureHeight = i985[22]
  i984.nativeSize = new pc.Vec2( i985[23], i985[24] )
  i984.pivot = new pc.Vec2( i985[25], i985[26] )
  i984.textureRectOffset = new pc.Vec2( i985[27], i985[28] )
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i987 = data
  i986.name = i987[0]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i989 = data
  i988.name = i989[0]
  i988.wrapMode = i989[1]
  i988.isLooping = !!i989[2]
  i988.length = i989[3]
  var i991 = i989[4]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i991[i + 0]) );
  }
  i988.curves = i990
  var i993 = i989[5]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i993[i + 0]) );
  }
  i988.events = i992
  i988.halfPrecision = !!i989[6]
  i988._frameRate = i989[7]
  i988.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i989[8], i988.localBounds)
  i988.hasMuscleCurves = !!i989[9]
  var i995 = i989[10]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i988.clipMuscleConstant = i994
  i988.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i989[11], i988.clipBindingConstant)
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i999 = data
  i998.path = i999[0]
  i998.hash = i999[1]
  i998.componentType = i999[2]
  i998.property = i999[3]
  i998.keys = i999[4]
  var i1001 = i999[5]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1001[i + 0]) );
  }
  i998.objectReferenceKeys = i1000
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1005 = data
  i1004.time = i1005[0]
  request.r(i1005[1], i1005[2], 0, i1004, 'value')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1009 = data
  i1008.functionName = i1009[0]
  i1008.floatParameter = i1009[1]
  i1008.intParameter = i1009[2]
  i1008.stringParameter = i1009[3]
  request.r(i1009[4], i1009[5], 0, i1008, 'objectReferenceParameter')
  i1008.time = i1009[6]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1011 = data
  i1010.center = new pc.Vec3( i1011[0], i1011[1], i1011[2] )
  i1010.extends = new pc.Vec3( i1011[3], i1011[4], i1011[5] )
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( i1017[i + 0] );
  }
  i1014.genericBindings = i1016
  var i1019 = i1015[1]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1014.pptrCurveMapping = i1018
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.ascent = i1021[1]
  i1020.originalLineHeight = i1021[2]
  i1020.fontSize = i1021[3]
  var i1023 = i1021[4]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1023[i + 0]) );
  }
  i1020.characterInfo = i1022
  request.r(i1021[5], i1021[6], 0, i1020, 'texture')
  i1020.originalFontSize = i1021[7]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1027 = data
  i1026.index = i1027[0]
  i1026.advance = i1027[1]
  i1026.bearing = i1027[2]
  i1026.glyphWidth = i1027[3]
  i1026.glyphHeight = i1027[4]
  i1026.minX = i1027[5]
  i1026.maxX = i1027[6]
  i1026.minY = i1027[7]
  i1026.maxY = i1027[8]
  i1026.uvBottomLeftX = i1027[9]
  i1026.uvBottomLeftY = i1027[10]
  i1026.uvBottomRightX = i1027[11]
  i1026.uvBottomRightY = i1027[12]
  i1026.uvTopLeftX = i1027[13]
  i1026.uvTopLeftY = i1027[14]
  i1026.uvTopRightX = i1027[15]
  i1026.uvTopRightY = i1027[16]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1029 = data
  i1028.name = i1029[0]
  var i1031 = i1029[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1031[i + 0]) );
  }
  i1028.layers = i1030
  var i1033 = i1029[2]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1033[i + 0]) );
  }
  i1028.parameters = i1032
  i1028.animationClips = i1029[3]
  i1028.avatarUnsupported = i1029[4]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1037 = data
  i1036.name = i1037[0]
  i1036.defaultWeight = i1037[1]
  i1036.blendingMode = i1037[2]
  i1036.avatarMask = i1037[3]
  i1036.syncedLayerIndex = i1037[4]
  i1036.syncedLayerAffectsTiming = !!i1037[5]
  i1036.syncedLayers = i1037[6]
  i1036.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1037[7], i1036.stateMachine)
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1039 = data
  i1038.id = i1039[0]
  i1038.name = i1039[1]
  i1038.path = i1039[2]
  var i1041 = i1039[3]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1041[i + 0]) );
  }
  i1038.states = i1040
  var i1043 = i1039[4]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1043[i + 0]) );
  }
  i1038.machines = i1042
  var i1045 = i1039[5]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1045[i + 0]) );
  }
  i1038.entryStateTransitions = i1044
  var i1047 = i1039[6]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1047[i + 0]) );
  }
  i1038.exitStateTransitions = i1046
  var i1049 = i1039[7]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1049[i + 0]) );
  }
  i1038.anyStateTransitions = i1048
  i1038.defaultStateId = i1039[8]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1053 = data
  i1052.id = i1053[0]
  i1052.name = i1053[1]
  i1052.cycleOffset = i1053[2]
  i1052.cycleOffsetParameter = i1053[3]
  i1052.cycleOffsetParameterActive = !!i1053[4]
  i1052.mirror = !!i1053[5]
  i1052.mirrorParameter = i1053[6]
  i1052.mirrorParameterActive = !!i1053[7]
  i1052.motionId = i1053[8]
  i1052.nameHash = i1053[9]
  i1052.fullPathHash = i1053[10]
  i1052.speed = i1053[11]
  i1052.speedParameter = i1053[12]
  i1052.speedParameterActive = !!i1053[13]
  i1052.tag = i1053[14]
  i1052.tagHash = i1053[15]
  i1052.writeDefaultValues = !!i1053[16]
  var i1055 = i1053[17]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 2, i1054, '')
  }
  i1052.behaviours = i1054
  var i1057 = i1053[18]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1057[i + 0]) );
  }
  i1052.transitions = i1056
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1063 = data
  i1062.fullPath = i1063[0]
  i1062.canTransitionToSelf = !!i1063[1]
  i1062.duration = i1063[2]
  i1062.exitTime = i1063[3]
  i1062.hasExitTime = !!i1063[4]
  i1062.hasFixedDuration = !!i1063[5]
  i1062.interruptionSource = i1063[6]
  i1062.offset = i1063[7]
  i1062.orderedInterruption = !!i1063[8]
  i1062.destinationStateId = i1063[9]
  i1062.isExit = !!i1063[10]
  i1062.mute = !!i1063[11]
  i1062.solo = !!i1063[12]
  var i1065 = i1063[13]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1065[i + 0]) );
  }
  i1062.conditions = i1064
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1071 = data
  i1070.destinationStateId = i1071[0]
  i1070.isExit = !!i1071[1]
  i1070.mute = !!i1071[2]
  i1070.solo = !!i1071[3]
  var i1073 = i1071[4]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1073[i + 0]) );
  }
  i1070.conditions = i1072
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1077 = data
  i1076.defaultBool = !!i1077[0]
  i1076.defaultFloat = i1077[1]
  i1076.defaultInt = i1077[2]
  i1076.name = i1077[3]
  i1076.nameHash = i1077[4]
  i1076.type = i1077[5]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.bytes64 = i1079[1]
  i1078.data = i1079[2]
  return i1078
}

Deserializers["Bricks_PattemTableObj"] = function (request, data, root) {
  var i1080 = root || request.c( 'Bricks_PattemTableObj' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('PattemInfor', i1083[i + 0]) );
  }
  i1080.listPattemsInfor = i1082
  var i1085 = i1081[1]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('LevelData', i1085[i + 0]) );
  }
  i1080.levelData = i1084
  return i1080
}

Deserializers["PattemInfor"] = function (request, data, root) {
  var i1088 = root || request.c( 'PattemInfor' )
  var i1089 = data
  i1088.type = i1089[0]
  var i1091 = i1089[1]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( !!i1091[i + 0] );
  }
  i1088.grid = i1090
  return i1088
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1096 = root || request.c( 'LevelData' )
  var i1097 = data
  i1096.level = i1097[0]
  i1096.Score = i1097[1]
  i1096.weight = i1097[2]
  return i1096
}

Deserializers["BB10_SpawnBlockData"] = function (request, data, root) {
  var i1098 = root || request.c( 'BB10_SpawnBlockData' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('SpawnGroup', i1101[i + 0]) );
  }
  i1098.spawnGroups = i1100
  return i1098
}

Deserializers["SpawnGroup"] = function (request, data, root) {
  var i1104 = root || request.c( 'SpawnGroup' )
  var i1105 = data
  i1104.block1 = i1105[0]
  i1104.block2 = i1105[1]
  i1104.block3 = i1105[2]
  return i1104
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'atlas')
  i1106.normalStyle = i1107[2]
  i1106.normalSpacingOffset = i1107[3]
  i1106.boldStyle = i1107[4]
  i1106.boldSpacing = i1107[5]
  i1106.italicStyle = i1107[6]
  i1106.tabSize = i1107[7]
  i1106.hashCode = i1107[8]
  request.r(i1107[9], i1107[10], 0, i1106, 'material')
  i1106.materialHashCode = i1107[11]
  i1106.m_Version = i1107[12]
  i1106.m_SourceFontFileGUID = i1107[13]
  request.r(i1107[14], i1107[15], 0, i1106, 'm_SourceFontFile_EditorRef')
  request.r(i1107[16], i1107[17], 0, i1106, 'm_SourceFontFile')
  i1106.m_AtlasPopulationMode = i1107[18]
  i1106.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1107[19], i1106.m_FaceInfo)
  var i1109 = i1107[20]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('UnityEngine.TextCore.Glyph', i1109[i + 0]));
  }
  i1106.m_GlyphTable = i1108
  var i1111 = i1107[21]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('TMPro.TMP_Character', i1111[i + 0]));
  }
  i1106.m_CharacterTable = i1110
  var i1113 = i1107[22]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 2, i1112, '')
  }
  i1106.m_AtlasTextures = i1112
  i1106.m_AtlasTextureIndex = i1107[23]
  i1106.m_IsMultiAtlasTexturesEnabled = !!i1107[24]
  i1106.m_ClearDynamicDataOnBuild = !!i1107[25]
  var i1115 = i1107[26]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('UnityEngine.TextCore.GlyphRect', i1115[i + 0]));
  }
  i1106.m_UsedGlyphRects = i1114
  var i1117 = i1107[27]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('UnityEngine.TextCore.GlyphRect', i1117[i + 0]));
  }
  i1106.m_FreeGlyphRects = i1116
  i1106.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1107[28], i1106.m_fontInfo)
  i1106.m_AtlasWidth = i1107[29]
  i1106.m_AtlasHeight = i1107[30]
  i1106.m_AtlasPadding = i1107[31]
  i1106.m_AtlasRenderMode = i1107[32]
  var i1119 = i1107[33]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('TMPro.TMP_Glyph', i1119[i + 0]));
  }
  i1106.m_glyphInfoList = i1118
  i1106.m_KerningTable = request.d('TMPro.KerningTable', i1107[34], i1106.m_KerningTable)
  i1106.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1107[35], i1106.m_FontFeatureTable)
  var i1121 = i1107[36]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 1, i1120, '')
  }
  i1106.fallbackFontAssets = i1120
  var i1123 = i1107[37]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1106.m_FallbackFontAssetTable = i1122
  i1106.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1107[38], i1106.m_CreationSettings)
  var i1125 = i1107[39]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('TMPro.TMP_FontWeightPair', i1125[i + 0]) );
  }
  i1106.m_FontWeightTable = i1124
  var i1127 = i1107[40]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('TMPro.TMP_FontWeightPair', i1127[i + 0]) );
  }
  i1106.fontWeights = i1126
  return i1106
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1129 = data
  i1128.m_FaceIndex = i1129[0]
  i1128.m_FamilyName = i1129[1]
  i1128.m_StyleName = i1129[2]
  i1128.m_PointSize = i1129[3]
  i1128.m_Scale = i1129[4]
  i1128.m_UnitsPerEM = i1129[5]
  i1128.m_LineHeight = i1129[6]
  i1128.m_AscentLine = i1129[7]
  i1128.m_CapLine = i1129[8]
  i1128.m_MeanLine = i1129[9]
  i1128.m_Baseline = i1129[10]
  i1128.m_DescentLine = i1129[11]
  i1128.m_SuperscriptOffset = i1129[12]
  i1128.m_SuperscriptSize = i1129[13]
  i1128.m_SubscriptOffset = i1129[14]
  i1128.m_SubscriptSize = i1129[15]
  i1128.m_UnderlineOffset = i1129[16]
  i1128.m_UnderlineThickness = i1129[17]
  i1128.m_StrikethroughOffset = i1129[18]
  i1128.m_StrikethroughThickness = i1129[19]
  i1128.m_TabWidth = i1129[20]
  return i1128
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1133 = data
  i1132.m_Index = i1133[0]
  i1132.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1133[1], i1132.m_Metrics)
  i1132.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1133[2], i1132.m_GlyphRect)
  i1132.m_Scale = i1133[3]
  i1132.m_AtlasIndex = i1133[4]
  i1132.m_ClassDefinitionType = i1133[5]
  return i1132
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1135 = data
  i1134.m_Width = i1135[0]
  i1134.m_Height = i1135[1]
  i1134.m_HorizontalBearingX = i1135[2]
  i1134.m_HorizontalBearingY = i1135[3]
  i1134.m_HorizontalAdvance = i1135[4]
  return i1134
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1137 = data
  i1136.m_X = i1137[0]
  i1136.m_Y = i1137[1]
  i1136.m_Width = i1137[2]
  i1136.m_Height = i1137[3]
  return i1136
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_Character' )
  var i1141 = data
  i1140.m_ElementType = i1141[0]
  i1140.m_Unicode = i1141[1]
  i1140.m_GlyphIndex = i1141[2]
  i1140.m_Scale = i1141[3]
  return i1140
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1145 = data
  i1144.Name = i1145[0]
  i1144.PointSize = i1145[1]
  i1144.Scale = i1145[2]
  i1144.CharacterCount = i1145[3]
  i1144.LineHeight = i1145[4]
  i1144.Baseline = i1145[5]
  i1144.Ascender = i1145[6]
  i1144.CapHeight = i1145[7]
  i1144.Descender = i1145[8]
  i1144.CenterLine = i1145[9]
  i1144.SuperscriptOffset = i1145[10]
  i1144.SubscriptOffset = i1145[11]
  i1144.SubSize = i1145[12]
  i1144.Underline = i1145[13]
  i1144.UnderlineThickness = i1145[14]
  i1144.strikethrough = i1145[15]
  i1144.strikethroughThickness = i1145[16]
  i1144.TabWidth = i1145[17]
  i1144.Padding = i1145[18]
  i1144.AtlasWidth = i1145[19]
  i1144.AtlasHeight = i1145[20]
  return i1144
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.x = i1149[1]
  i1148.y = i1149[2]
  i1148.width = i1149[3]
  i1148.height = i1149[4]
  i1148.xOffset = i1149[5]
  i1148.yOffset = i1149[6]
  i1148.xAdvance = i1149[7]
  i1148.scale = i1149[8]
  return i1148
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.KerningTable' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('TMPro.KerningPair', i1153[i + 0]));
  }
  i1150.kerningPairs = i1152
  return i1150
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.KerningPair' )
  var i1157 = data
  i1156.xOffset = i1157[0]
  i1156.m_FirstGlyph = i1157[1]
  i1156.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1157[2], i1156.m_FirstGlyphAdjustments)
  i1156.m_SecondGlyph = i1157[3]
  i1156.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1157[4], i1156.m_SecondGlyphAdjustments)
  i1156.m_IgnoreSpacingAdjustments = !!i1157[5]
  return i1156
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1161[i + 0]));
  }
  i1158.m_GlyphPairAdjustmentRecords = i1160
  return i1158
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1165 = data
  i1164.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1165[0], i1164.m_FirstAdjustmentRecord)
  i1164.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1165[1], i1164.m_SecondAdjustmentRecord)
  i1164.m_FeatureLookupFlags = i1165[2]
  return i1164
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1169 = data
  i1168.sourceFontFileName = i1169[0]
  i1168.sourceFontFileGUID = i1169[1]
  i1168.pointSizeSamplingMode = i1169[2]
  i1168.pointSize = i1169[3]
  i1168.padding = i1169[4]
  i1168.packingMode = i1169[5]
  i1168.atlasWidth = i1169[6]
  i1168.atlasHeight = i1169[7]
  i1168.characterSetSelectionMode = i1169[8]
  i1168.characterSequence = i1169[9]
  i1168.referencedFontAssetGUID = i1169[10]
  i1168.referencedTextAssetGUID = i1169[11]
  i1168.fontStyle = i1169[12]
  i1168.fontStyleModifier = i1169[13]
  i1168.renderMode = i1169[14]
  i1168.includeFontFeatures = !!i1169[15]
  return i1168
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1173 = data
  request.r(i1173[0], i1173[1], 0, i1172, 'regularTypeface')
  request.r(i1173[2], i1173[3], 0, i1172, 'italicTypeface')
  return i1172
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1174 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1175 = data
  i1174.useSafeMode = !!i1175[0]
  i1174.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1175[1], i1174.safeModeOptions)
  i1174.timeScale = i1175[2]
  i1174.unscaledTimeScale = i1175[3]
  i1174.useSmoothDeltaTime = !!i1175[4]
  i1174.maxSmoothUnscaledTime = i1175[5]
  i1174.rewindCallbackMode = i1175[6]
  i1174.showUnityEditorReport = !!i1175[7]
  i1174.logBehaviour = i1175[8]
  i1174.drawGizmos = !!i1175[9]
  i1174.defaultRecyclable = !!i1175[10]
  i1174.defaultAutoPlay = i1175[11]
  i1174.defaultUpdateType = i1175[12]
  i1174.defaultTimeScaleIndependent = !!i1175[13]
  i1174.defaultEaseType = i1175[14]
  i1174.defaultEaseOvershootOrAmplitude = i1175[15]
  i1174.defaultEasePeriod = i1175[16]
  i1174.defaultAutoKill = !!i1175[17]
  i1174.defaultLoopType = i1175[18]
  i1174.debugMode = !!i1175[19]
  i1174.debugStoreTargetId = !!i1175[20]
  i1174.showPreviewPanel = !!i1175[21]
  i1174.storeSettingsLocation = i1175[22]
  i1174.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1175[23], i1174.modules)
  i1174.createASMDEF = !!i1175[24]
  i1174.showPlayingTweens = !!i1175[25]
  i1174.showPausedTweens = !!i1175[26]
  return i1174
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1176 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1177 = data
  i1176.logBehaviour = i1177[0]
  i1176.nestedTweenFailureBehaviour = i1177[1]
  return i1176
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1178 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1179 = data
  i1178.showPanel = !!i1179[0]
  i1178.audioEnabled = !!i1179[1]
  i1178.physicsEnabled = !!i1179[2]
  i1178.physics2DEnabled = !!i1179[3]
  i1178.spriteEnabled = !!i1179[4]
  i1178.uiEnabled = !!i1179[5]
  i1178.textMeshProEnabled = !!i1179[6]
  i1178.tk2DEnabled = !!i1179[7]
  i1178.deAudioEnabled = !!i1179[8]
  i1178.deUnityExtendedEnabled = !!i1179[9]
  i1178.epoOutlineEnabled = !!i1179[10]
  return i1178
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_Settings' )
  var i1181 = data
  i1180.m_enableWordWrapping = !!i1181[0]
  i1180.m_enableKerning = !!i1181[1]
  i1180.m_enableExtraPadding = !!i1181[2]
  i1180.m_enableTintAllSprites = !!i1181[3]
  i1180.m_enableParseEscapeCharacters = !!i1181[4]
  i1180.m_EnableRaycastTarget = !!i1181[5]
  i1180.m_GetFontFeaturesAtRuntime = !!i1181[6]
  i1180.m_missingGlyphCharacter = i1181[7]
  i1180.m_warningsDisabled = !!i1181[8]
  request.r(i1181[9], i1181[10], 0, i1180, 'm_defaultFontAsset')
  i1180.m_defaultFontAssetPath = i1181[11]
  i1180.m_defaultFontSize = i1181[12]
  i1180.m_defaultAutoSizeMinRatio = i1181[13]
  i1180.m_defaultAutoSizeMaxRatio = i1181[14]
  i1180.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1181[15], i1181[16] )
  i1180.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1181[17], i1181[18] )
  i1180.m_autoSizeTextContainer = !!i1181[19]
  i1180.m_IsTextObjectScaleStatic = !!i1181[20]
  var i1183 = i1181[21]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 1, i1182, '')
  }
  i1180.m_fallbackFontAssets = i1182
  i1180.m_matchMaterialPreset = !!i1181[22]
  request.r(i1181[23], i1181[24], 0, i1180, 'm_defaultSpriteAsset')
  i1180.m_defaultSpriteAssetPath = i1181[25]
  i1180.m_enableEmojiSupport = !!i1181[26]
  i1180.m_MissingCharacterSpriteUnicode = i1181[27]
  i1180.m_defaultColorGradientPresetsPath = i1181[28]
  request.r(i1181[29], i1181[30], 0, i1180, 'm_defaultStyleSheet')
  i1180.m_StyleSheetsResourcePath = i1181[31]
  request.r(i1181[32], i1181[33], 0, i1180, 'm_leadingCharacters')
  request.r(i1181[34], i1181[35], 0, i1180, 'm_followingCharacters')
  i1180.m_UseModernHangulLineBreakingRules = !!i1181[36]
  return i1180
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1185 = data
  i1184.m_GlyphIndex = i1185[0]
  i1184.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1185[1], i1184.m_GlyphValueRecord)
  return i1184
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1187 = data
  i1186.m_XPlacement = i1187[0]
  i1186.m_YPlacement = i1187[1]
  i1186.m_XAdvance = i1187[2]
  i1186.m_YAdvance = i1187[3]
  return i1186
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'spriteSheet')
  var i1191 = i1189[2]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('TMPro.TMP_Sprite', i1191[i + 0]));
  }
  i1188.spriteInfoList = i1190
  var i1193 = i1189[3]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1188.fallbackSpriteAssets = i1192
  i1188.hashCode = i1189[4]
  request.r(i1189[5], i1189[6], 0, i1188, 'material')
  i1188.materialHashCode = i1189[7]
  i1188.m_Version = i1189[8]
  i1188.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1189[9], i1188.m_FaceInfo)
  var i1195 = i1189[10]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('TMPro.TMP_SpriteCharacter', i1195[i + 0]));
  }
  i1188.m_SpriteCharacterTable = i1194
  var i1197 = i1189[11]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.add(request.d('TMPro.TMP_SpriteGlyph', i1197[i + 0]));
  }
  i1188.m_SpriteGlyphTable = i1196
  return i1188
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1201 = data
  i1200.name = i1201[0]
  i1200.hashCode = i1201[1]
  i1200.unicode = i1201[2]
  i1200.pivot = new pc.Vec2( i1201[3], i1201[4] )
  request.r(i1201[5], i1201[6], 0, i1200, 'sprite')
  i1200.id = i1201[7]
  i1200.x = i1201[8]
  i1200.y = i1201[9]
  i1200.width = i1201[10]
  i1200.height = i1201[11]
  i1200.xOffset = i1201[12]
  i1200.yOffset = i1201[13]
  i1200.xAdvance = i1201[14]
  i1200.scale = i1201[15]
  return i1200
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1207 = data
  i1206.m_Name = i1207[0]
  i1206.m_HashCode = i1207[1]
  i1206.m_ElementType = i1207[2]
  i1206.m_Unicode = i1207[3]
  i1206.m_GlyphIndex = i1207[4]
  i1206.m_Scale = i1207[5]
  return i1206
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'sprite')
  i1210.m_Index = i1211[2]
  i1210.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1211[3], i1210.m_Metrics)
  i1210.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1211[4], i1210.m_GlyphRect)
  i1210.m_Scale = i1211[5]
  i1210.m_AtlasIndex = i1211[6]
  i1210.m_ClassDefinitionType = i1211[7]
  return i1210
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.TMP_Style', i1215[i + 0]));
  }
  i1212.m_StyleList = i1214
  return i1212
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_Style' )
  var i1219 = data
  i1218.m_Name = i1219[0]
  i1218.m_HashCode = i1219[1]
  i1218.m_OpeningDefinition = i1219[2]
  i1218.m_ClosingDefinition = i1219[3]
  i1218.m_OpeningTagArray = i1219[4]
  i1218.m_ClosingTagArray = i1219[5]
  i1218.m_OpeningTagUnicodeArray = i1219[6]
  i1218.m_ClosingTagUnicodeArray = i1219[7]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1223[i + 0]) );
  }
  i1220.files = i1222
  i1220.componentToPrefabIds = i1221[1]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1227 = data
  i1226.path = i1227[0]
  request.r(i1227[1], i1227[2], 0, i1226, 'unityObject')
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1229 = data
  var i1231 = i1229[0]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1231[i + 0]) );
  }
  i1228.scriptsExecutionOrder = i1230
  var i1233 = i1229[1]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1233[i + 0]) );
  }
  i1228.sortingLayers = i1232
  var i1235 = i1229[2]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1235[i + 0]) );
  }
  i1228.cullingLayers = i1234
  i1228.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1229[3], i1228.timeSettings)
  i1228.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1229[4], i1228.physicsSettings)
  i1228.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1229[5], i1228.physics2DSettings)
  i1228.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1229[6], i1228.qualitySettings)
  i1228.enableRealtimeShadows = !!i1229[7]
  i1228.enableAutoInstancing = !!i1229[8]
  i1228.enableStaticBatching = !!i1229[9]
  i1228.enableDynamicBatching = !!i1229[10]
  i1228.lightmapEncodingQuality = i1229[11]
  i1228.desiredColorSpace = i1229[12]
  var i1237 = i1229[13]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( i1237[i + 0] );
  }
  i1228.allTags = i1236
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.value = i1241[1]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1245 = data
  i1244.id = i1245[0]
  i1244.name = i1245[1]
  i1244.value = i1245[2]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1249 = data
  i1248.id = i1249[0]
  i1248.name = i1249[1]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1251 = data
  i1250.fixedDeltaTime = i1251[0]
  i1250.maximumDeltaTime = i1251[1]
  i1250.timeScale = i1251[2]
  i1250.maximumParticleTimestep = i1251[3]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1253 = data
  i1252.gravity = new pc.Vec3( i1253[0], i1253[1], i1253[2] )
  i1252.defaultSolverIterations = i1253[3]
  i1252.bounceThreshold = i1253[4]
  i1252.autoSyncTransforms = !!i1253[5]
  i1252.autoSimulation = !!i1253[6]
  var i1255 = i1253[7]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1255[i + 0]) );
  }
  i1252.collisionMatrix = i1254
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1259 = data
  i1258.enabled = !!i1259[0]
  i1258.layerId = i1259[1]
  i1258.otherLayerId = i1259[2]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1261 = data
  request.r(i1261[0], i1261[1], 0, i1260, 'material')
  i1260.gravity = new pc.Vec2( i1261[2], i1261[3] )
  i1260.positionIterations = i1261[4]
  i1260.velocityIterations = i1261[5]
  i1260.velocityThreshold = i1261[6]
  i1260.maxLinearCorrection = i1261[7]
  i1260.maxAngularCorrection = i1261[8]
  i1260.maxTranslationSpeed = i1261[9]
  i1260.maxRotationSpeed = i1261[10]
  i1260.baumgarteScale = i1261[11]
  i1260.baumgarteTOIScale = i1261[12]
  i1260.timeToSleep = i1261[13]
  i1260.linearSleepTolerance = i1261[14]
  i1260.angularSleepTolerance = i1261[15]
  i1260.defaultContactOffset = i1261[16]
  i1260.autoSimulation = !!i1261[17]
  i1260.queriesHitTriggers = !!i1261[18]
  i1260.queriesStartInColliders = !!i1261[19]
  i1260.callbacksOnDisable = !!i1261[20]
  i1260.reuseCollisionCallbacks = !!i1261[21]
  i1260.autoSyncTransforms = !!i1261[22]
  var i1263 = i1261[23]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1263[i + 0]) );
  }
  i1260.collisionMatrix = i1262
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1267 = data
  i1266.enabled = !!i1267[0]
  i1266.layerId = i1267[1]
  i1266.otherLayerId = i1267[2]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1271[i + 0]) );
  }
  i1268.qualityLevels = i1270
  var i1273 = i1269[1]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( i1273[i + 0] );
  }
  i1268.names = i1272
  i1268.shadows = i1269[2]
  i1268.anisotropicFiltering = i1269[3]
  i1268.antiAliasing = i1269[4]
  i1268.lodBias = i1269[5]
  i1268.shadowCascades = i1269[6]
  i1268.shadowDistance = i1269[7]
  i1268.shadowmaskMode = i1269[8]
  i1268.shadowProjection = i1269[9]
  i1268.shadowResolution = i1269[10]
  i1268.softParticles = !!i1269[11]
  i1268.softVegetation = !!i1269[12]
  i1268.activeColorSpace = i1269[13]
  i1268.desiredColorSpace = i1269[14]
  i1268.masterTextureLimit = i1269[15]
  i1268.maxQueuedFrames = i1269[16]
  i1268.particleRaycastBudget = i1269[17]
  i1268.pixelLightCount = i1269[18]
  i1268.realtimeReflectionProbes = !!i1269[19]
  i1268.shadowCascade2Split = i1269[20]
  i1268.shadowCascade4Split = new pc.Vec3( i1269[21], i1269[22], i1269[23] )
  i1268.streamingMipmapsActive = !!i1269[24]
  i1268.vSyncCount = i1269[25]
  i1268.asyncUploadBufferSize = i1269[26]
  i1268.asyncUploadTimeSlice = i1269[27]
  i1268.billboardsFaceCameraPosition = !!i1269[28]
  i1268.shadowNearPlaneOffset = i1269[29]
  i1268.streamingMipmapsMemoryBudget = i1269[30]
  i1268.maximumLODLevel = i1269[31]
  i1268.streamingMipmapsAddAllCameras = !!i1269[32]
  i1268.streamingMipmapsMaxLevelReduction = i1269[33]
  i1268.streamingMipmapsRenderersPerFrame = i1269[34]
  i1268.resolutionScalingFixedDPIFactor = i1269[35]
  i1268.streamingMipmapsMaxFileIORequests = i1269[36]
  i1268.currentQualityLevel = i1269[37]
  return i1268
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'm_ObjectArgument')
  i1276.m_ObjectArgumentAssemblyTypeName = i1277[2]
  i1276.m_IntArgument = i1277[3]
  i1276.m_FloatArgument = i1277[4]
  i1276.m_StringArgument = i1277[5]
  i1276.m_BoolArgument = !!i1277[6]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1281 = data
  i1280.mode = i1281[0]
  i1280.parameter = i1281[1]
  i1280.threshold = i1281[2]
  return i1280
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1283 = data
  i1282.xPlacement = i1283[0]
  i1282.yPlacement = i1283[1]
  i1282.xAdvance = i1283[2]
  i1282.yAdvance = i1283[3]
  return i1282
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.TextMesh":{"m_Alignment":0,"m_Anchor":1,"m_CharacterSize":2,"m_Font":3,"m_FontSize":5,"m_FontStyle":6,"m_LineSpacing":7,"m_OffsetZ":8,"m_RichText":9,"m_TabSize":10,"m_Text":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"32":[30],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[30],"16":[15],"97":[98],"99":[98],"41":[40],"100":[40],"101":[40],"44":[41],"46":[45,40],"102":[40],"43":[41],"103":[40],"104":[40],"105":[40],"106":[40],"107":[40],"108":[40],"109":[40],"110":[40],"111":[40],"112":[45,40],"113":[40],"114":[40],"115":[40],"55":[40],"116":[45,40],"117":[40],"118":[51],"119":[51],"52":[51],"120":[51],"121":[30],"122":[30],"123":[41],"124":[125],"126":[40],"127":[15,40],"38":[40,45],"128":[40],"129":[45,40],"130":[15],"131":[45,40],"132":[40],"133":[134],"135":[134],"136":[134]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","CompleteBlocks","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BB10_BrickCubeUnit","UnityEngine.GameObject","UnityEngine.BoxCollider2D","BB10_ColorControl","UnityEngine.MeshRenderer","UnityEngine.TextMesh","UnityEngine.Font","UnityEngine.Texture2D","BB10_MainObjControl","BB10_PattemCreater","BB10_NextViewerControl","BB10_Grid","BB10_PlaneView","BB10_GroundView","CameraScript","BB10_ScoreCtr","BB10_ShowHelpCtr","BB10_ScreenCtr","BB10_Tutorial","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.FlareLayer","MainAudio","Bricks_PattemTableObj","BB10_SpawnBlockData","BB10_NextViewer","GamePlayManager","TMPro.TextMeshProUGUI","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","BB10_MainCanvasUI","BB10_InGameScript","BB10_FaderHandler","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BB10_HomeController","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","TimerProgress","BB10_LostScript","BB10_PopupRate","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","LoadingTransition","BuiltInButtonTestSdk","UnityEngine.UI.Button","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "BlockPuzzle";

Deserializers.lunaInitializationTime = "03/12/2026 10:41:13";

Deserializers.lunaDaysRunning = "3.9";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "37420";

Deserializers.projectId = "8fb0e5c3e8de46d44924511e3d0b28a5";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1849";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4129";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.BlockPuzzle";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "2b54feb5-6c29-46f6-ad32-2a3ed06bec20";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

