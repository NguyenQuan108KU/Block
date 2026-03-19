var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointSpring' )
  var i755 = data
  i754.spring = i755[0]
  i754.damper = i755[1]
  i754.targetPosition = i755[2]
  return i754
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointMotor' )
  var i757 = data
  i756.m_TargetVelocity = i757[0]
  i756.m_Force = i757[1]
  i756.m_FreeSpin = i757[2]
  return i756
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.JointLimits' )
  var i759 = data
  i758.m_Min = i759[0]
  i758.m_Max = i759[1]
  i758.m_Bounciness = i759[2]
  i758.m_BounceMinVelocity = i759[3]
  i758.m_ContactDistance = i759[4]
  i758.minBounce = i759[5]
  i758.maxBounce = i759[6]
  return i758
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointDrive' )
  var i761 = data
  i760.m_PositionSpring = i761[0]
  i760.m_PositionDamper = i761[1]
  i760.m_MaximumForce = i761[2]
  i760.m_UseAcceleration = i761[3]
  return i760
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i763 = data
  i762.m_Spring = i763[0]
  i762.m_Damper = i763[1]
  return i762
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i765 = data
  i764.m_Limit = i765[0]
  i764.m_Bounciness = i765[1]
  i764.m_ContactDistance = i765[2]
  return i764
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i767 = data
  i766.m_ExtremumSlip = i767[0]
  i766.m_ExtremumValue = i767[1]
  i766.m_AsymptoteSlip = i767[2]
  i766.m_AsymptoteValue = i767[3]
  i766.m_Stiffness = i767[4]
  return i766
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i769 = data
  i768.m_LowerAngle = i769[0]
  i768.m_UpperAngle = i769[1]
  return i768
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i771 = data
  i770.m_MotorSpeed = i771[0]
  i770.m_MaximumMotorTorque = i771[1]
  return i770
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i773 = data
  i772.m_DampingRatio = i773[0]
  i772.m_Frequency = i773[1]
  i772.m_Angle = i773[2]
  return i772
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i775 = data
  i774.m_LowerTranslation = i775[0]
  i774.m_UpperTranslation = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i776 = root || new pc.UnityMaterial()
  var i777 = data
  i776.name = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'shader')
  i776.renderQueue = i777[3]
  i776.enableInstancing = !!i777[4]
  var i779 = i777[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i779[i + 0]) );
  }
  i776.floatParameters = i778
  var i781 = i777[6]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i781[i + 0]) );
  }
  i776.colorParameters = i780
  var i783 = i777[7]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i783[i + 0]) );
  }
  i776.vectorParameters = i782
  var i785 = i777[8]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i785[i + 0]) );
  }
  i776.textureParameters = i784
  var i787 = i777[9]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i787[i + 0]) );
  }
  i776.materialFlags = i786
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i791 = data
  i790.name = i791[0]
  i790.value = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i795 = data
  i794.name = i795[0]
  i794.value = new pc.Color(i795[1], i795[2], i795[3], i795[4])
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i799 = data
  i798.name = i799[0]
  i798.value = new pc.Vec4( i799[1], i799[2], i799[3], i799[4] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i803 = data
  i802.name = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'value')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i807 = data
  i806.name = i807[0]
  i806.enabled = !!i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i809 = data
  i808.name = i809[0]
  i808.width = i809[1]
  i808.height = i809[2]
  i808.mipmapCount = i809[3]
  i808.anisoLevel = i809[4]
  i808.filterMode = i809[5]
  i808.hdr = !!i809[6]
  i808.format = i809[7]
  i808.wrapMode = i809[8]
  i808.alphaIsTransparency = !!i809[9]
  i808.alphaSource = i809[10]
  i808.graphicsFormat = i809[11]
  i808.sRGBTexture = !!i809[12]
  i808.desiredColorSpace = i809[13]
  i808.wrapU = i809[14]
  i808.wrapV = i809[15]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i811 = data
  i810.position = new pc.Vec3( i811[0], i811[1], i811[2] )
  i810.scale = new pc.Vec3( i811[3], i811[4], i811[5] )
  i810.rotation = new pc.Quat(i811[6], i811[7], i811[8], i811[9])
  return i810
}

Deserializers["CompleteBlocks"] = function (request, data, root) {
  var i812 = root || request.c( 'CompleteBlocks' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'spriteRenderer')
  var i815 = i813[2]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TextAndSound')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('TextAndSound', i815[i + 0]));
  }
  i812.listTextAndSound = i814
  return i812
}

Deserializers["TextAndSound"] = function (request, data, root) {
  var i818 = root || request.c( 'TextAndSound' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'sprite')
  request.r(i819[2], i819[3], 0, i818, 'audioClip')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'clip')
  request.r(i821[2], i821[3], 0, i820, 'outputAudioMixerGroup')
  i820.playOnAwake = !!i821[4]
  i820.loop = !!i821[5]
  i820.time = i821[6]
  i820.volume = i821[7]
  i820.pitch = i821[8]
  i820.enabled = !!i821[9]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i823 = data
  i822.color = new pc.Color(i823[0], i823[1], i823[2], i823[3])
  request.r(i823[4], i823[5], 0, i822, 'sprite')
  i822.flipX = !!i823[6]
  i822.flipY = !!i823[7]
  i822.drawMode = i823[8]
  i822.size = new pc.Vec2( i823[9], i823[10] )
  i822.tileMode = i823[11]
  i822.adaptiveModeThreshold = i823[12]
  i822.maskInteraction = i823[13]
  i822.spriteSortPoint = i823[14]
  i822.enabled = !!i823[15]
  request.r(i823[16], i823[17], 0, i822, 'sharedMaterial')
  var i825 = i823[18]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.sharedMaterials = i824
  i822.receiveShadows = !!i823[19]
  i822.shadowCastingMode = i823[20]
  i822.sortingLayerID = i823[21]
  i822.sortingOrder = i823[22]
  i822.lightmapIndex = i823[23]
  i822.lightmapSceneIndex = i823[24]
  i822.lightmapScaleOffset = new pc.Vec4( i823[25], i823[26], i823[27], i823[28] )
  i822.lightProbeUsage = i823[29]
  i822.reflectionProbeUsage = i823[30]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'animatorController')
  request.r(i829[2], i829[3], 0, i828, 'avatar')
  i828.updateMode = i829[4]
  i828.hasTransformHierarchy = !!i829[5]
  i828.applyRootMotion = !!i829[6]
  var i831 = i829[7]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.humanBones = i830
  i828.enabled = !!i829[8]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i835 = data
  i834.name = i835[0]
  i834.tagId = i835[1]
  i834.enabled = !!i835[2]
  i834.isStatic = !!i835[3]
  i834.layer = i835[4]
  return i834
}

Deserializers["BB10_BrickCubeUnit"] = function (request, data, root) {
  var i836 = root || request.c( 'BB10_BrickCubeUnit' )
  var i837 = data
  i836.thisType = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'viewer')
  request.r(i837[3], i837[4], 0, i836, 'render')
  i836.ID = i837[5]
  i836.row = i837[6]
  i836.col = i837[7]
  i836.indexRow = i837[8]
  i836.indexCol = i837[9]
  i836.scale = i837[10]
  i836.myData = request.d('BB10_ColorData', i837[11], i836.myData)
  i836.targetGray = i837[12]
  i836.durationDrop = i837[13]
  i836.dropScaleMin = new pc.Vec3( i837[14], i837[15], i837[16] )
  i836.ac = new pc.AnimationCurve( { keys_flow: i837[17] } )
  i836.speed = i837[18]
  i836.targetScale = i837[19]
  i836.durationScaleEffect = i837[20]
  i836.speedRotate = i837[21]
  request.r(i837[22], i837[23], 0, i836, 'shadowDropBlock')
  return i836
}

Deserializers["BB10_ColorData"] = function (request, data, root) {
  var i838 = root || request.c( 'BB10_ColorData' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'sprite')
  i838.ID = i839[2]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i841 = data
  i840.usedByComposite = !!i841[0]
  i840.autoTiling = !!i841[1]
  i840.size = new pc.Vec2( i841[2], i841[3] )
  i840.edgeRadius = i841[4]
  i840.enabled = !!i841[5]
  i840.isTrigger = !!i841[6]
  i840.usedByEffector = !!i841[7]
  i840.density = i841[8]
  i840.offset = new pc.Vec2( i841[9], i841[10] )
  request.r(i841[11], i841[12], 0, i840, 'material')
  return i840
}

Deserializers["BB10_ColorControl"] = function (request, data, root) {
  var i842 = root || request.c( 'BB10_ColorControl' )
  var i843 = data
  var i845 = i843[0]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('BB10_ColorData', i845[i + 0]) );
  }
  i842.sprites = i844
  var i847 = i843[1]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i842.spriteTexs = i846
  var i849 = i843[2]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
  var i851 = i849[i + 0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
    i848.push( i850 );
  }
  i842.preloadSprite = i848
  i842.preload = i843[3]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'additionalVertexStreams')
  i862.enabled = !!i863[2]
  request.r(i863[3], i863[4], 0, i862, 'sharedMaterial')
  var i865 = i863[5]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.sharedMaterials = i864
  i862.receiveShadows = !!i863[6]
  i862.shadowCastingMode = i863[7]
  i862.sortingLayerID = i863[8]
  i862.sortingOrder = i863[9]
  i862.lightmapIndex = i863[10]
  i862.lightmapSceneIndex = i863[11]
  i862.lightmapScaleOffset = new pc.Vec4( i863[12], i863[13], i863[14], i863[15] )
  i862.lightProbeUsage = i863[16]
  i862.reflectionProbeUsage = i863[17]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TextMesh"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TextMesh' )
  var i867 = data
  i866.m_Alignment = i867[0]
  i866.m_Anchor = i867[1]
  i866.m_CharacterSize = i867[2]
  request.r(i867[3], i867[4], 0, i866, 'm_Font')
  i866.m_FontSize = i867[5]
  i866.m_FontStyle = i867[6]
  i866.m_LineSpacing = i867[7]
  i866.m_OffsetZ = i867[8]
  i866.m_RichText = !!i867[9]
  i866.m_TabSize = i867[10]
  i866.m_Text = i867[11]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i869 = data
  i868.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i869[0], i868.main)
  i868.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i869[1], i868.colorBySpeed)
  i868.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i869[2], i868.colorOverLifetime)
  i868.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i869[3], i868.emission)
  i868.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i869[4], i868.rotationBySpeed)
  i868.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i869[5], i868.rotationOverLifetime)
  i868.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i869[6], i868.shape)
  i868.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i869[7], i868.sizeBySpeed)
  i868.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i869[8], i868.sizeOverLifetime)
  i868.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i869[9], i868.textureSheetAnimation)
  i868.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i869[10], i868.velocityOverLifetime)
  i868.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i869[11], i868.noise)
  i868.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i869[12], i868.inheritVelocity)
  i868.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i869[13], i868.forceOverLifetime)
  i868.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i869[14], i868.limitVelocityOverLifetime)
  i868.useAutoRandomSeed = !!i869[15]
  i868.randomSeed = i869[16]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemMain()
  var i871 = data
  i870.duration = i871[0]
  i870.loop = !!i871[1]
  i870.prewarm = !!i871[2]
  i870.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[3], i870.startDelay)
  i870.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[4], i870.startLifetime)
  i870.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[5], i870.startSpeed)
  i870.startSize3D = !!i871[6]
  i870.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[7], i870.startSizeX)
  i870.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[8], i870.startSizeY)
  i870.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[9], i870.startSizeZ)
  i870.startRotation3D = !!i871[10]
  i870.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[11], i870.startRotationX)
  i870.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[12], i870.startRotationY)
  i870.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[13], i870.startRotationZ)
  i870.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i871[14], i870.startColor)
  i870.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[15], i870.gravityModifier)
  i870.simulationSpace = i871[16]
  request.r(i871[17], i871[18], 0, i870, 'customSimulationSpace')
  i870.simulationSpeed = i871[19]
  i870.useUnscaledTime = !!i871[20]
  i870.scalingMode = i871[21]
  i870.playOnAwake = !!i871[22]
  i870.maxParticles = i871[23]
  i870.emitterVelocityMode = i871[24]
  i870.stopAction = i871[25]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i872 = root || new pc.MinMaxCurve()
  var i873 = data
  i872.mode = i873[0]
  i872.curveMin = new pc.AnimationCurve( { keys_flow: i873[1] } )
  i872.curveMax = new pc.AnimationCurve( { keys_flow: i873[2] } )
  i872.curveMultiplier = i873[3]
  i872.constantMin = i873[4]
  i872.constantMax = i873[5]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i874 = root || new pc.MinMaxGradient()
  var i875 = data
  i874.mode = i875[0]
  i874.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i875[1], i874.gradientMin)
  i874.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i875[2], i874.gradientMax)
  i874.colorMin = new pc.Color(i875[3], i875[4], i875[5], i875[6])
  i874.colorMax = new pc.Color(i875[7], i875[8], i875[9], i875[10])
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i877 = data
  i876.mode = i877[0]
  var i879 = i877[1]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i879[i + 0]) );
  }
  i876.colorKeys = i878
  var i881 = i877[2]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i881[i + 0]) );
  }
  i876.alphaKeys = i880
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemColorBySpeed()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i883[1], i882.color)
  i882.range = new pc.Vec2( i883[2], i883[3] )
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i887 = data
  i886.color = new pc.Color(i887[0], i887[1], i887[2], i887[3])
  i886.time = i887[4]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i891 = data
  i890.alpha = i891[0]
  i890.time = i891[1]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemColorOverLifetime()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i893[1], i892.color)
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemEmitter()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[1], i894.rateOverTime)
  i894.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[2], i894.rateOverDistance)
  var i897 = i895[3]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i897[i + 0]) );
  }
  i894.bursts = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemBurst()
  var i901 = data
  i900.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[0], i900.count)
  i900.cycleCount = i901[1]
  i900.minCount = i901[2]
  i900.maxCount = i901[3]
  i900.repeatInterval = i901[4]
  i900.time = i901[5]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemRotationBySpeed()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.x)
  i902.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.y)
  i902.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.z)
  i902.separateAxes = !!i903[4]
  i902.range = new pc.Vec2( i903[5], i903[6] )
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemRotationOverLifetime()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[1], i904.x)
  i904.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.y)
  i904.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.z)
  i904.separateAxes = !!i905[4]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemShape()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.shapeType = i907[1]
  i906.randomDirectionAmount = i907[2]
  i906.sphericalDirectionAmount = i907[3]
  i906.randomPositionAmount = i907[4]
  i906.alignToDirection = !!i907[5]
  i906.radius = i907[6]
  i906.radiusMode = i907[7]
  i906.radiusSpread = i907[8]
  i906.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[9], i906.radiusSpeed)
  i906.radiusThickness = i907[10]
  i906.angle = i907[11]
  i906.length = i907[12]
  i906.boxThickness = new pc.Vec3( i907[13], i907[14], i907[15] )
  i906.meshShapeType = i907[16]
  request.r(i907[17], i907[18], 0, i906, 'mesh')
  request.r(i907[19], i907[20], 0, i906, 'meshRenderer')
  request.r(i907[21], i907[22], 0, i906, 'skinnedMeshRenderer')
  i906.useMeshMaterialIndex = !!i907[23]
  i906.meshMaterialIndex = i907[24]
  i906.useMeshColors = !!i907[25]
  i906.normalOffset = i907[26]
  i906.arc = i907[27]
  i906.arcMode = i907[28]
  i906.arcSpread = i907[29]
  i906.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[30], i906.arcSpeed)
  i906.donutRadius = i907[31]
  i906.position = new pc.Vec3( i907[32], i907[33], i907[34] )
  i906.rotation = new pc.Vec3( i907[35], i907[36], i907[37] )
  i906.scale = new pc.Vec3( i907[38], i907[39], i907[40] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemSizeBySpeed()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.separateAxes = !!i909[4]
  i908.range = new pc.Vec2( i909[5], i909[6] )
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemSizeOverLifetime()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[1], i910.x)
  i910.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.y)
  i910.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.z)
  i910.separateAxes = !!i911[4]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.mode = i913[1]
  i912.animation = i913[2]
  i912.numTilesX = i913[3]
  i912.numTilesY = i913[4]
  i912.useRandomRow = !!i913[5]
  i912.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[6], i912.frameOverTime)
  i912.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[7], i912.startFrame)
  i912.cycleCount = i913[8]
  i912.rowIndex = i913[9]
  i912.flipU = i913[10]
  i912.flipV = i913[11]
  i912.spriteCount = i913[12]
  var i915 = i913[13]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.sprites = i914
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[1], i916.x)
  i916.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[2], i916.y)
  i916.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[3], i916.z)
  i916.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[4], i916.radial)
  i916.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[5], i916.speedModifier)
  i916.space = i917[6]
  i916.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[7], i916.orbitalX)
  i916.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[8], i916.orbitalY)
  i916.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[9], i916.orbitalZ)
  i916.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[10], i916.orbitalOffsetX)
  i916.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[11], i916.orbitalOffsetY)
  i916.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[12], i916.orbitalOffsetZ)
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemNoise()
  var i919 = data
  i918.enabled = !!i919[0]
  i918.separateAxes = !!i919[1]
  i918.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[2], i918.strengthX)
  i918.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[3], i918.strengthY)
  i918.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[4], i918.strengthZ)
  i918.frequency = i919[5]
  i918.damping = !!i919[6]
  i918.octaveCount = i919[7]
  i918.octaveMultiplier = i919[8]
  i918.octaveScale = i919[9]
  i918.quality = i919[10]
  i918.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[11], i918.scrollSpeed)
  i918.scrollSpeedMultiplier = i919[12]
  i918.remapEnabled = !!i919[13]
  i918.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[14], i918.remapX)
  i918.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[15], i918.remapY)
  i918.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[16], i918.remapZ)
  i918.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[17], i918.positionAmount)
  i918.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[18], i918.rotationAmount)
  i918.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[19], i918.sizeAmount)
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemInheritVelocity()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.mode = i921[1]
  i920.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[2], i920.curve)
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemForceOverLifetime()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[1], i922.x)
  i922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.y)
  i922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.z)
  i922.space = i923[4]
  i922.randomized = !!i923[5]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[1], i924.limit)
  i924.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[2], i924.limitX)
  i924.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[3], i924.limitY)
  i924.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[4], i924.limitZ)
  i924.dampen = i925[5]
  i924.separateAxes = !!i925[6]
  i924.space = i925[7]
  i924.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[8], i924.drag)
  i924.multiplyDragByParticleSize = !!i925[9]
  i924.multiplyDragByParticleVelocity = !!i925[10]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'mesh')
  i926.meshCount = i927[2]
  i926.activeVertexStreamsCount = i927[3]
  i926.alignment = i927[4]
  i926.renderMode = i927[5]
  i926.sortMode = i927[6]
  i926.lengthScale = i927[7]
  i926.velocityScale = i927[8]
  i926.cameraVelocityScale = i927[9]
  i926.normalDirection = i927[10]
  i926.sortingFudge = i927[11]
  i926.minParticleSize = i927[12]
  i926.maxParticleSize = i927[13]
  i926.pivot = new pc.Vec3( i927[14], i927[15], i927[16] )
  request.r(i927[17], i927[18], 0, i926, 'trailMaterial')
  i926.applyActiveColorSpace = !!i927[19]
  i926.enabled = !!i927[20]
  request.r(i927[21], i927[22], 0, i926, 'sharedMaterial')
  var i929 = i927[23]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.sharedMaterials = i928
  i926.receiveShadows = !!i927[24]
  i926.shadowCastingMode = i927[25]
  i926.sortingLayerID = i927[26]
  i926.sortingOrder = i927[27]
  i926.lightmapIndex = i927[28]
  i926.lightmapSceneIndex = i927[29]
  i926.lightmapScaleOffset = new pc.Vec4( i927[30], i927[31], i927[32], i927[33] )
  i926.lightProbeUsage = i927[34]
  i926.reflectionProbeUsage = i927[35]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i931 = data
  i930.name = i931[0]
  i930.atlasId = i931[1]
  i930.mipmapCount = i931[2]
  i930.hdr = !!i931[3]
  i930.size = i931[4]
  i930.anisoLevel = i931[5]
  i930.filterMode = i931[6]
  var i933 = i931[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 4) {
    i932.push( UnityEngine.Rect.MinMaxRect(i933[i + 0], i933[i + 1], i933[i + 2], i933[i + 3]) );
  }
  i930.rects = i932
  i930.wrapU = i931[8]
  i930.wrapV = i931[9]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i937 = data
  i936.name = i937[0]
  i936.index = i937[1]
  i936.startup = !!i937[2]
  return i936
}

Deserializers["BB10_MainObjControl"] = function (request, data, root) {
  var i938 = root || request.c( 'BB10_MainObjControl' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'colorControl')
  request.r(i939[2], i939[3], 0, i938, 'pattemCreater')
  request.r(i939[4], i939[5], 0, i938, 'nextViewerCtr')
  request.r(i939[6], i939[7], 0, i938, 'grid')
  request.r(i939[8], i939[9], 0, i938, 'planeViewCrt')
  request.r(i939[10], i939[11], 0, i938, 'groundView')
  request.r(i939[12], i939[13], 0, i938, 'sG_Block_EffectCtr')
  request.r(i939[14], i939[15], 0, i938, 'camScript')
  request.r(i939[16], i939[17], 0, i938, 'scoreCtr')
  request.r(i939[18], i939[19], 0, i938, 'helpCtr')
  request.r(i939[20], i939[21], 0, i938, 'screenCtr')
  request.r(i939[22], i939[23], 0, i938, 'tutorial')
  request.r(i939[24], i939[25], 0, i938, 'cam')
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i941 = data
  i940.aspect = i941[0]
  i940.orthographic = !!i941[1]
  i940.orthographicSize = i941[2]
  i940.backgroundColor = new pc.Color(i941[3], i941[4], i941[5], i941[6])
  i940.nearClipPlane = i941[7]
  i940.farClipPlane = i941[8]
  i940.fieldOfView = i941[9]
  i940.depth = i941[10]
  i940.clearFlags = i941[11]
  i940.cullingMask = i941[12]
  i940.rect = i941[13]
  request.r(i941[14], i941[15], 0, i940, 'targetTexture')
  i940.usePhysicalProperties = !!i941[16]
  i940.focalLength = i941[17]
  i940.sensorSize = new pc.Vec2( i941[18], i941[19] )
  i940.lensShift = new pc.Vec2( i941[20], i941[21] )
  i940.gateFit = i941[22]
  i940.commandBufferCount = i941[23]
  i940.cameraType = i941[24]
  i940.enabled = !!i941[25]
  return i940
}

Deserializers["CameraScript"] = function (request, data, root) {
  var i942 = root || request.c( 'CameraScript' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'cam')
  return i942
}

Deserializers["CameraResponsive"] = function (request, data, root) {
  var i944 = root || request.c( 'CameraResponsive' )
  var i945 = data
  i944.orthoSizeV = i945[0]
  i944.orthoSizeVTall = i945[1]
  i944.orthoSizeH = i945[2]
  i944.orthoSizeTab = i945[3]
  return i944
}

Deserializers["MainAudio"] = function (request, data, root) {
  var i946 = root || request.c( 'MainAudio' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('InputAudio', i949[i + 0]) );
  }
  i946.listInputAudio = i948
  i946.isMute = !!i947[1]
  return i946
}

Deserializers["InputAudio"] = function (request, data, root) {
  var i952 = root || request.c( 'InputAudio' )
  var i953 = data
  i952.type = i953[0]
  request.r(i953[1], i953[2], 0, i952, 'audioClip')
  i952.loop = !!i953[3]
  i952.volume = i953[4]
  return i952
}

Deserializers["BB10_Grid"] = function (request, data, root) {
  var i954 = root || request.c( 'BB10_Grid' )
  var i955 = data
  i954.numberCol = i955[0]
  i954.numberRow = i955[1]
  i954.waitDelete = i955[2]
  i954.waitPerUnit = i955[3]
  i954.durationGray = i955[4]
  i954.nonGray = i955[5]
  i954.halfGray = i955[6]
  i954.fullGray = i955[7]
  i954.waitUnit = i955[8]
  request.r(i955[9], i955[10], 0, i954, 'completeText')
  i954.score = i955[11]
  request.r(i955[12], i955[13], 0, i954, 'cellPrefab')
  request.r(i955[14], i955[15], 0, i954, 'parentGrid')
  i954.cellSize = i955[16]
  i954.isCreateCell = !!i955[17]
  request.r(i955[18], i955[19], 0, i954, 'saveData')
  return i954
}

Deserializers["BB10_PattemCreater"] = function (request, data, root) {
  var i956 = root || request.c( 'BB10_PattemCreater' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'cubePrefab')
  var i959 = i957[2]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 1, i958, '')
  }
  i956.listCube = i958
  request.r(i957[3], i957[4], 0, i956, 'pattemDataSave')
  return i956
}

Deserializers["BB10_PlaneView"] = function (request, data, root) {
  var i962 = root || request.c( 'BB10_PlaneView' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'camera')
  i962.y = i963[2]
  i962.scale = i963[3]
  i962.scaleSmall = i963[4]
  i962.distanceTouch = i963[5]
  i962.duration = i963[6]
  request.r(i963[7], i963[8], 0, i962, 'cam')
  var i965 = i963[9]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i962.listBlock = i964
  i962.selected = i963[10]
  i962.isScaling = !!i963[11]
  i962.groundAcepted = !!i963[12]
  i962.faceMousePos = new pc.Vec2( i963[13], i963[14] )
  i962.isAuto = !!i963[15]
  i962.state = i963[16]
  i962.speedMoveDrop = i963[17]
  return i962
}

Deserializers["BB10_GroundView"] = function (request, data, root) {
  var i966 = root || request.c( 'BB10_GroundView' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'groundPrefab')
  var i969 = i967[2]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i966.listBlockRender = i968
  return i966
}

Deserializers["BB10_NextViewerControl"] = function (request, data, root) {
  var i972 = root || request.c( 'BB10_NextViewerControl' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'pattemTableObj')
  request.r(i973[2], i973[3], 0, i972, 'spawnData')
  var i975 = i973[4]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i972.listView = i974
  var i977 = i973[5]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i972.listUnit0 = i976
  var i979 = i973[6]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i972.listUnit1 = i978
  var i981 = i973[7]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i972.listUnit2 = i980
  return i972
}

Deserializers["BB10_NextViewer"] = function (request, data, root) {
  var i984 = root || request.c( 'BB10_NextViewer' )
  var i985 = data
  i984.index = i985[0]
  i984.scale = i985[1]
  i984.durationLight = i985[2]
  i984.duration = i985[3]
  i984.durationIn = i985[4]
  i984.myType = i985[5]
  i984.rotateTime = i985[6]
  var i987 = i985[7]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 1, i986, '')
  }
  i984.listBlock = i986
  i984.state = i985[8]
  i984.startPos1 = new pc.Vec2( i985[9], i985[10] )
  i984.startPos2 = new pc.Vec2( i985[11], i985[12] )
  i984.ac1 = new pc.AnimationCurve( { keys_flow: i985[13] } )
  i984.ac2 = new pc.AnimationCurve( { keys_flow: i985[14] } )
  return i984
}

Deserializers["BB10_ScoreCtr"] = function (request, data, root) {
  var i988 = root || request.c( 'BB10_ScoreCtr' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'scorePrefab')
  var i991 = i989[2]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextMesh')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i988.listText = i990
  i988.startColor = new pc.Color(i989[3], i989[4], i989[5], i989[6])
  i988.endColor = new pc.Color(i989[7], i989[8], i989[9], i989[10])
  request.r(i989[11], i989[12], 0, i988, 'mat')
  i988.speed0 = i989[13]
  i988.G = i989[14]
  i988.duration = i989[15]
  return i988
}

Deserializers["BB10_ShowHelpCtr"] = function (request, data, root) {
  var i994 = root || request.c( 'BB10_ShowHelpCtr' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'groundPrefab')
  var i997 = i995[2]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 1, i996, '')
  }
  i994.listBlockDisable = i996
  var i999 = i995[3]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i994.listBlockActive = i998
  return i994
}

Deserializers["BB10_Tutorial"] = function (request, data, root) {
  var i1002 = root || request.c( 'BB10_Tutorial' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'finger')
  request.r(i1003[2], i1003[3], 0, i1002, 'circle')
  i1002.durationMoveUp = i1003[4]
  i1002.durationMoveDown = i1003[5]
  i1002.durationScale = i1003[6]
  i1002.durationMoveShort = i1003[7]
  i1002.state = i1003[8]
  return i1002
}

Deserializers["BB10_ScreenCtr"] = function (request, data, root) {
  var i1004 = root || request.c( 'BB10_ScreenCtr' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'BgUnit')
  request.r(i1005[2], i1005[3], 0, i1004, 'topRec')
  request.r(i1005[4], i1005[5], 0, i1004, 'bottomTrans')
  var i1007 = i1005[6]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i1004.listPattemTrans = i1006
  i1004.defaultPattemY = i1005[7]
  i1004.defaultPattemUIY = i1005[8]
  i1004.orthographicSizeMin = i1005[9]
  request.r(i1005[10], i1005[11], 0, i1004, 'cam')
  i1004.distanceEdge = i1005[12]
  i1004.durationFadeIn = i1005[13]
  i1004.distanceMoveFade = i1005[14]
  i1004.startAlpha = i1005[15]
  i1004.F = i1005[16]
  i1004.FUI = i1005[17]
  request.r(i1005[18], i1005[19], 0, i1004, 'BG')
  i1004.targetAlpha = i1005[20]
  request.r(i1005[21], i1005[22], 0, i1004, 'partTop')
  request.r(i1005[23], i1005[24], 0, i1004, 'partDown')
  request.r(i1005[25], i1005[26], 0, i1004, 'partLeft')
  request.r(i1005[27], i1005[28], 0, i1004, 'partRight')
  var i1009 = i1005[29]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1004.grid = i1008
  i1004.gridMoving = !!i1005[30]
  i1004.waitStep = i1005[31]
  i1004.durationScaleUp = i1005[32]
  i1004.acScale = new pc.AnimationCurve( { keys_flow: i1005[33] } )
  request.r(i1005[34], i1005[35], 0, i1004, 'parentCell')
  return i1004
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i1012 = root || request.c( 'GamePlayManager' )
  var i1013 = data
  i1012.score = i1013[0]
  i1012.target = i1013[1]
  i1012.totalClick = i1013[2]
  i1012.countClick = i1013[3]
  request.r(i1013[4], i1013[5], 0, i1012, 'textProScore')
  request.r(i1013[6], i1013[7], 0, i1012, 'textProTarget')
  request.r(i1013[8], i1013[9], 0, i1012, 'textScore')
  request.r(i1013[10], i1013[11], 0, i1012, 'textTarget')
  request.r(i1013[12], i1013[13], 0, i1012, 'win')
  request.r(i1013[14], i1013[15], 0, i1012, 'lose')
  request.r(i1013[16], i1013[17], 0, i1012, 'buttonDownload')
  i1012.isFinishGame = !!i1013[18]
  return i1012
}

Deserializers["ResponsiveManager"] = function (request, data, root) {
  var i1014 = root || request.c( 'ResponsiveManager' )
  var i1015 = data
  i1014.screenType = i1015[0]
  return i1014
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1016 = root || request.c( 'TutorialManager' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'groundView')
  request.r(i1017[2], i1017[3], 0, i1016, 'firstBlock')
  request.r(i1017[4], i1017[5], 0, i1016, 'Hand')
  request.r(i1017[6], i1017[7], 0, i1016, 'TextTut')
  i1016.idleTimer = i1017[8]
  i1016.idleTimeToShow = i1017[9]
  request.r(i1017[10], i1017[11], 0, i1016, 'blockTutorial')
  var i1019 = i1017[12]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_NextViewer')))
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 1, i1018, '')
  }
  i1016.nextViewers = i1018
  i1016.r = i1017[13]
  i1016.c = i1017[14]
  return i1016
}

Deserializers["SG_Block_EffectCtr"] = function (request, data, root) {
  var i1022 = root || request.c( 'SG_Block_EffectCtr' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1022.particlePrefabs = i1024
  var i1027 = i1023[1]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
  var i1029 = i1027[i + 0]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 1, i1028, '')
  }
    i1026.push( i1028 );
  }
  i1022.listParticlesDisable = i1026
  i1022.preload = i1023[2]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1037 = data
  i1036.type = i1037[0]
  i1036.color = new pc.Color(i1037[1], i1037[2], i1037[3], i1037[4])
  i1036.cullingMask = i1037[5]
  i1036.intensity = i1037[6]
  i1036.range = i1037[7]
  i1036.spotAngle = i1037[8]
  i1036.shadows = i1037[9]
  i1036.shadowNormalBias = i1037[10]
  i1036.shadowBias = i1037[11]
  i1036.shadowStrength = i1037[12]
  i1036.shadowResolution = i1037[13]
  i1036.lightmapBakeType = i1037[14]
  i1036.renderMode = i1037[15]
  request.r(i1037[16], i1037[17], 0, i1036, 'cookie')
  i1036.cookieSize = i1037[18]
  i1036.enabled = !!i1037[19]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1039 = data
  i1038.pivot = new pc.Vec2( i1039[0], i1039[1] )
  i1038.anchorMin = new pc.Vec2( i1039[2], i1039[3] )
  i1038.anchorMax = new pc.Vec2( i1039[4], i1039[5] )
  i1038.sizeDelta = new pc.Vec2( i1039[6], i1039[7] )
  i1038.anchoredPosition3D = new pc.Vec3( i1039[8], i1039[9], i1039[10] )
  i1038.rotation = new pc.Quat(i1039[11], i1039[12], i1039[13], i1039[14])
  i1038.scale = new pc.Vec3( i1039[15], i1039[16], i1039[17] )
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1041 = data
  i1040.planeDistance = i1041[0]
  i1040.referencePixelsPerUnit = i1041[1]
  i1040.isFallbackOverlay = !!i1041[2]
  i1040.renderMode = i1041[3]
  i1040.renderOrder = i1041[4]
  i1040.sortingLayerName = i1041[5]
  i1040.sortingOrder = i1041[6]
  i1040.scaleFactor = i1041[7]
  request.r(i1041[8], i1041[9], 0, i1040, 'worldCamera')
  i1040.overrideSorting = !!i1041[10]
  i1040.pixelPerfect = !!i1041[11]
  i1040.targetDisplay = i1041[12]
  i1040.overridePixelPerfect = !!i1041[13]
  i1040.enabled = !!i1041[14]
  return i1040
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1043 = data
  i1042.m_UiScaleMode = i1043[0]
  i1042.m_ReferencePixelsPerUnit = i1043[1]
  i1042.m_ScaleFactor = i1043[2]
  i1042.m_ReferenceResolution = new pc.Vec2( i1043[3], i1043[4] )
  i1042.m_ScreenMatchMode = i1043[5]
  i1042.m_MatchWidthOrHeight = i1043[6]
  i1042.m_PhysicalUnit = i1043[7]
  i1042.m_FallbackScreenDPI = i1043[8]
  i1042.m_DefaultSpriteDPI = i1043[9]
  i1042.m_DynamicPixelsPerUnit = i1043[10]
  i1042.m_PresetInfoIsWorld = !!i1043[11]
  return i1042
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1045 = data
  i1044.m_IgnoreReversedGraphics = !!i1045[0]
  i1044.m_BlockingObjects = i1045[1]
  i1044.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1045[2] )
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1047 = data
  i1046.cullTransparentMesh = !!i1047[0]
  return i1046
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.Image' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'm_Sprite')
  i1048.m_Type = i1049[2]
  i1048.m_PreserveAspect = !!i1049[3]
  i1048.m_FillCenter = !!i1049[4]
  i1048.m_FillMethod = i1049[5]
  i1048.m_FillAmount = i1049[6]
  i1048.m_FillClockwise = !!i1049[7]
  i1048.m_FillOrigin = i1049[8]
  i1048.m_UseSpriteMesh = !!i1049[9]
  i1048.m_PixelsPerUnitMultiplier = i1049[10]
  i1048.m_Maskable = !!i1049[11]
  request.r(i1049[12], i1049[13], 0, i1048, 'm_Material')
  i1048.m_Color = new pc.Color(i1049[14], i1049[15], i1049[16], i1049[17])
  i1048.m_RaycastTarget = !!i1049[18]
  i1048.m_RaycastPadding = new pc.Vec4( i1049[19], i1049[20], i1049[21], i1049[22] )
  return i1048
}

Deserializers["BB10_MainCanvasUI"] = function (request, data, root) {
  var i1050 = root || request.c( 'BB10_MainCanvasUI' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'inGameScript')
  request.r(i1051[2], i1051[3], 0, i1050, 'faderScript')
  i1050.OnDropPiece = request.d('System.Action', i1051[4], i1050.OnDropPiece)
  request.r(i1051[5], i1051[6], 0, i1050, 'blur')
  i1050.OnNeedStopAdBreak = request.d('System.Action', i1051[7], i1050.OnNeedStopAdBreak)
  return i1050
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1052 = root || request.c( 'System.Action' )
  var i1053 = data
  return i1052
}

Deserializers["ResponsiveWorld"] = function (request, data, root) {
  var i1054 = root || request.c( 'ResponsiveWorld' )
  var i1055 = data
  i1054.positionVertical = new pc.Vec3( i1055[0], i1055[1], i1055[2] )
  i1054.positionVerticalTall = new pc.Vec3( i1055[3], i1055[4], i1055[5] )
  i1054.positionHorizontal = new pc.Vec3( i1055[6], i1055[7], i1055[8] )
  i1054.positionTablet = new pc.Vec3( i1055[9], i1055[10], i1055[11] )
  return i1054
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1057 = data
  i1056.m_hasFontAssetChanged = !!i1057[0]
  request.r(i1057[1], i1057[2], 0, i1056, 'm_baseMaterial')
  i1056.m_maskOffset = new pc.Vec4( i1057[3], i1057[4], i1057[5], i1057[6] )
  i1056.m_text = i1057[7]
  i1056.m_isRightToLeft = !!i1057[8]
  request.r(i1057[9], i1057[10], 0, i1056, 'm_fontAsset')
  request.r(i1057[11], i1057[12], 0, i1056, 'm_sharedMaterial')
  var i1059 = i1057[13]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 2, i1058, '')
  }
  i1056.m_fontSharedMaterials = i1058
  request.r(i1057[14], i1057[15], 0, i1056, 'm_fontMaterial')
  var i1061 = i1057[16]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 2, i1060, '')
  }
  i1056.m_fontMaterials = i1060
  i1056.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1057[17], i1057[18], i1057[19], i1057[20])
  i1056.m_fontColor = new pc.Color(i1057[21], i1057[22], i1057[23], i1057[24])
  i1056.m_enableVertexGradient = !!i1057[25]
  i1056.m_colorMode = i1057[26]
  i1056.m_fontColorGradient = request.d('TMPro.VertexGradient', i1057[27], i1056.m_fontColorGradient)
  request.r(i1057[28], i1057[29], 0, i1056, 'm_fontColorGradientPreset')
  request.r(i1057[30], i1057[31], 0, i1056, 'm_spriteAsset')
  i1056.m_tintAllSprites = !!i1057[32]
  request.r(i1057[33], i1057[34], 0, i1056, 'm_StyleSheet')
  i1056.m_TextStyleHashCode = i1057[35]
  i1056.m_overrideHtmlColors = !!i1057[36]
  i1056.m_faceColor = UnityEngine.Color32.ConstructColor(i1057[37], i1057[38], i1057[39], i1057[40])
  i1056.m_fontSize = i1057[41]
  i1056.m_fontSizeBase = i1057[42]
  i1056.m_fontWeight = i1057[43]
  i1056.m_enableAutoSizing = !!i1057[44]
  i1056.m_fontSizeMin = i1057[45]
  i1056.m_fontSizeMax = i1057[46]
  i1056.m_fontStyle = i1057[47]
  i1056.m_HorizontalAlignment = i1057[48]
  i1056.m_VerticalAlignment = i1057[49]
  i1056.m_textAlignment = i1057[50]
  i1056.m_characterSpacing = i1057[51]
  i1056.m_wordSpacing = i1057[52]
  i1056.m_lineSpacing = i1057[53]
  i1056.m_lineSpacingMax = i1057[54]
  i1056.m_paragraphSpacing = i1057[55]
  i1056.m_charWidthMaxAdj = i1057[56]
  i1056.m_enableWordWrapping = !!i1057[57]
  i1056.m_wordWrappingRatios = i1057[58]
  i1056.m_overflowMode = i1057[59]
  request.r(i1057[60], i1057[61], 0, i1056, 'm_linkedTextComponent')
  request.r(i1057[62], i1057[63], 0, i1056, 'parentLinkedComponent')
  i1056.m_enableKerning = !!i1057[64]
  i1056.m_enableExtraPadding = !!i1057[65]
  i1056.checkPaddingRequired = !!i1057[66]
  i1056.m_isRichText = !!i1057[67]
  i1056.m_parseCtrlCharacters = !!i1057[68]
  i1056.m_isOrthographic = !!i1057[69]
  i1056.m_isCullingEnabled = !!i1057[70]
  i1056.m_horizontalMapping = i1057[71]
  i1056.m_verticalMapping = i1057[72]
  i1056.m_uvLineOffset = i1057[73]
  i1056.m_geometrySortingOrder = i1057[74]
  i1056.m_IsTextObjectScaleStatic = !!i1057[75]
  i1056.m_VertexBufferAutoSizeReduction = !!i1057[76]
  i1056.m_useMaxVisibleDescender = !!i1057[77]
  i1056.m_pageToDisplay = i1057[78]
  i1056.m_margin = new pc.Vec4( i1057[79], i1057[80], i1057[81], i1057[82] )
  i1056.m_isUsingLegacyAnimationComponent = !!i1057[83]
  i1056.m_isVolumetricText = !!i1057[84]
  i1056.m_Maskable = !!i1057[85]
  request.r(i1057[86], i1057[87], 0, i1056, 'm_Material')
  i1056.m_Color = new pc.Color(i1057[88], i1057[89], i1057[90], i1057[91])
  i1056.m_RaycastTarget = !!i1057[92]
  i1056.m_RaycastPadding = new pc.Vec4( i1057[93], i1057[94], i1057[95], i1057[96] )
  return i1056
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.VertexGradient' )
  var i1063 = data
  i1062.topLeft = new pc.Color(i1063[0], i1063[1], i1063[2], i1063[3])
  i1062.topRight = new pc.Color(i1063[4], i1063[5], i1063[6], i1063[7])
  i1062.bottomLeft = new pc.Color(i1063[8], i1063[9], i1063[10], i1063[11])
  i1062.bottomRight = new pc.Color(i1063[12], i1063[13], i1063[14], i1063[15])
  return i1062
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.Button' )
  var i1065 = data
  i1064.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1065[0], i1064.m_OnClick)
  i1064.m_Navigation = request.d('UnityEngine.UI.Navigation', i1065[1], i1064.m_Navigation)
  i1064.m_Transition = i1065[2]
  i1064.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1065[3], i1064.m_Colors)
  i1064.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1065[4], i1064.m_SpriteState)
  i1064.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1065[5], i1064.m_AnimationTriggers)
  i1064.m_Interactable = !!i1065[6]
  request.r(i1065[7], i1065[8], 0, i1064, 'm_TargetGraphic')
  return i1064
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1067 = data
  i1066.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1067[0], i1066.m_PersistentCalls)
  return i1066
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1069 = data
  var i1071 = i1069[0]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.add(request.d('UnityEngine.Events.PersistentCall', i1071[i + 0]));
  }
  i1068.m_Calls = i1070
  return i1068
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'm_Target')
  i1074.m_TargetAssemblyTypeName = i1075[2]
  i1074.m_MethodName = i1075[3]
  i1074.m_Mode = i1075[4]
  i1074.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1075[5], i1074.m_Arguments)
  i1074.m_CallState = i1075[6]
  return i1074
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'm_ObjectArgument')
  i1076.m_ObjectArgumentAssemblyTypeName = i1077[2]
  i1076.m_IntArgument = i1077[3]
  i1076.m_FloatArgument = i1077[4]
  i1076.m_StringArgument = i1077[5]
  i1076.m_BoolArgument = !!i1077[6]
  return i1076
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1079 = data
  i1078.m_Mode = i1079[0]
  i1078.m_WrapAround = !!i1079[1]
  request.r(i1079[2], i1079[3], 0, i1078, 'm_SelectOnUp')
  request.r(i1079[4], i1079[5], 0, i1078, 'm_SelectOnDown')
  request.r(i1079[6], i1079[7], 0, i1078, 'm_SelectOnLeft')
  request.r(i1079[8], i1079[9], 0, i1078, 'm_SelectOnRight')
  return i1078
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1081 = data
  i1080.m_NormalColor = new pc.Color(i1081[0], i1081[1], i1081[2], i1081[3])
  i1080.m_HighlightedColor = new pc.Color(i1081[4], i1081[5], i1081[6], i1081[7])
  i1080.m_PressedColor = new pc.Color(i1081[8], i1081[9], i1081[10], i1081[11])
  i1080.m_SelectedColor = new pc.Color(i1081[12], i1081[13], i1081[14], i1081[15])
  i1080.m_DisabledColor = new pc.Color(i1081[16], i1081[17], i1081[18], i1081[19])
  i1080.m_ColorMultiplier = i1081[20]
  i1080.m_FadeDuration = i1081[21]
  return i1080
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'm_HighlightedSprite')
  request.r(i1083[2], i1083[3], 0, i1082, 'm_PressedSprite')
  request.r(i1083[4], i1083[5], 0, i1082, 'm_SelectedSprite')
  request.r(i1083[6], i1083[7], 0, i1082, 'm_DisabledSprite')
  return i1082
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1085 = data
  i1084.m_NormalTrigger = i1085[0]
  i1084.m_HighlightedTrigger = i1085[1]
  i1084.m_PressedTrigger = i1085[2]
  i1084.m_SelectedTrigger = i1085[3]
  i1084.m_DisabledTrigger = i1085[4]
  return i1084
}

Deserializers["CTAButton"] = function (request, data, root) {
  var i1086 = root || request.c( 'CTAButton' )
  var i1087 = data
  return i1086
}

Deserializers["ScaleElement"] = function (request, data, root) {
  var i1088 = root || request.c( 'ScaleElement' )
  var i1089 = data
  i1088.animationDuration = i1089[0]
  i1088.delay = i1089[1]
  i1088.targetScale = new pc.Vec3( i1089[2], i1089[3], i1089[4] )
  return i1088
}

Deserializers["BB10_InGameScript"] = function (request, data, root) {
  var i1090 = root || request.c( 'BB10_InGameScript' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'rec')
  request.r(i1091[2], i1091[3], 0, i1090, 'scoreTxt')
  request.r(i1091[4], i1091[5], 0, i1090, 'bestTxt')
  i1090.scoreInt = i1091[6]
  i1090.bestInt = i1091[7]
  request.r(i1091[8], i1091[9], 0, i1090, 'group')
  request.r(i1091[10], i1091[11], 0, i1090, 'blur_1')
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1093 = data
  i1092.m_Alpha = i1093[0]
  i1092.m_Interactable = !!i1093[1]
  i1092.m_BlocksRaycasts = !!i1093[2]
  i1092.m_IgnoreParentGroups = !!i1093[3]
  i1092.enabled = !!i1093[4]
  return i1092
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'm_FirstSelected')
  i1094.m_sendNavigationEvents = !!i1095[2]
  i1094.m_DragThreshold = i1095[3]
  return i1094
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1097 = data
  i1096.m_HorizontalAxis = i1097[0]
  i1096.m_VerticalAxis = i1097[1]
  i1096.m_SubmitButton = i1097[2]
  i1096.m_CancelButton = i1097[3]
  i1096.m_InputActionsPerSecond = i1097[4]
  i1096.m_RepeatDelay = i1097[5]
  i1096.m_ForceModuleActive = !!i1097[6]
  i1096.m_SendPointerHoverToParent = !!i1097[7]
  return i1096
}

Deserializers["BB10_FaderHandler"] = function (request, data, root) {
  var i1098 = root || request.c( 'BB10_FaderHandler' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'image')
  i1098.durationFade = i1099[2]
  i1098.durationFadeOut = i1099[3]
  i1098.durationSwich = i1099[4]
  return i1098
}

Deserializers["BB10_HomeController"] = function (request, data, root) {
  var i1100 = root || request.c( 'BB10_HomeController' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'group')
  return i1100
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'm_FillRect')
  request.r(i1103[2], i1103[3], 0, i1102, 'm_HandleRect')
  i1102.m_Direction = i1103[4]
  i1102.m_MinValue = i1103[5]
  i1102.m_MaxValue = i1103[6]
  i1102.m_WholeNumbers = !!i1103[7]
  i1102.m_Value = i1103[8]
  i1102.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1103[9], i1102.m_OnValueChanged)
  i1102.m_Navigation = request.d('UnityEngine.UI.Navigation', i1103[10], i1102.m_Navigation)
  i1102.m_Transition = i1103[11]
  i1102.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1103[12], i1102.m_Colors)
  i1102.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1103[13], i1102.m_SpriteState)
  i1102.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1103[14], i1102.m_AnimationTriggers)
  i1102.m_Interactable = !!i1103[15]
  request.r(i1103[16], i1103[17], 0, i1102, 'm_TargetGraphic')
  return i1102
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1105 = data
  i1104.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1105[0], i1104.m_PersistentCalls)
  return i1104
}

Deserializers["TimerProgress"] = function (request, data, root) {
  var i1106 = root || request.c( 'TimerProgress' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'fillImageRed')
  request.r(i1107[2], i1107[3], 0, i1106, 'fillImage')
  request.r(i1107[4], i1107[5], 0, i1106, 'slider')
  i1106.timer = i1107[6]
  request.r(i1107[7], i1107[8], 0, i1106, 'timerText')
  i1106.haveTimer = !!i1107[9]
  request.r(i1107[10], i1107[11], 0, i1106, 'warningSprite')
  i1106.timeWarning = i1107[12]
  i1106.warningSoundTimer = i1107[13]
  i1106.isFormatTimeMMSS = !!i1107[14]
  return i1106
}

Deserializers["UITweenElement"] = function (request, data, root) {
  var i1108 = root || request.c( 'UITweenElement' )
  var i1109 = data
  i1108.tweenData = request.d('TweenData', i1109[0], i1108.tweenData)
  i1108.playOnAwake = !!i1109[1]
  return i1108
}

Deserializers["TweenData"] = function (request, data, root) {
  var i1110 = root || request.c( 'TweenData' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'target')
  request.r(i1111[2], i1111[3], 0, i1110, 'configSO')
  i1110.custom = !!i1111[4]
  i1110.config = request.d('TweenConfig', i1111[5], i1110.config)
  i1110.OnCompleted = request.d('System.Action', i1111[6], i1110.OnCompleted)
  return i1110
}

Deserializers["TweenConfig"] = function (request, data, root) {
  var i1112 = root || request.c( 'TweenConfig' )
  var i1113 = data
  i1112.tweenType = i1113[0]
  i1112.from = i1113[1]
  i1112.to = i1113[2]
  i1112.mFrom = new pc.Vec3( i1113[3], i1113[4], i1113[5] )
  i1112.mTo = new pc.Vec3( i1113[6], i1113[7], i1113[8] )
  i1112.duration = i1113[9]
  i1112.delay = i1113[10]
  i1112.curve = new pc.AnimationCurve( { keys_flow: i1113[11] } )
  return i1112
}

Deserializers["TextMeshProController"] = function (request, data, root) {
  var i1114 = root || request.c( 'TextMeshProController' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'textMeshPro')
  i1114.useCurve = !!i1115[2]
  i1114.radius = i1115[3]
  i1114.arcAngle = i1115[4]
  i1114.playOnEnable = !!i1115[5]
  i1114.animDuration = i1115[6]
  i1114.delayBetweenChars = i1115[7]
  i1114.scaleCurve = new pc.AnimationCurve( { keys_flow: i1115[8] } )
  return i1114
}

Deserializers["BB10_LostScript"] = function (request, data, root) {
  var i1116 = root || request.c( 'BB10_LostScript' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'scoreText')
  request.r(i1117[2], i1117[3], 0, i1116, 'bestText')
  request.r(i1117[4], i1117[5], 0, i1116, 'group')
  i1116.isAuto = !!i1117[6]
  request.r(i1117[7], i1117[8], 0, i1116, 'cupShaker')
  request.r(i1117[9], i1117[10], 0, i1116, 'listViewAdsPannel')
  return i1116
}

Deserializers["BB10_PopupRate"] = function (request, data, root) {
  var i1118 = root || request.c( 'BB10_PopupRate' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_RateStar')))
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 1, i1120, '')
  }
  i1118.starList = i1120
  request.r(i1119[1], i1119[2], 0, i1118, 'submit')
  request.r(i1119[3], i1119[4], 0, i1118, 'textRate')
  request.r(i1119[5], i1119[6], 0, i1118, 'starOn')
  request.r(i1119[7], i1119[8], 0, i1118, 'starOff')
  i1118.starNumber = i1119[9]
  request.r(i1119[10], i1119[11], 0, i1118, 'popup')
  request.r(i1119[12], i1119[13], 0, i1118, 'pannel')
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1125 = data
  i1124.ambientIntensity = i1125[0]
  i1124.reflectionIntensity = i1125[1]
  i1124.ambientMode = i1125[2]
  i1124.ambientLight = new pc.Color(i1125[3], i1125[4], i1125[5], i1125[6])
  i1124.ambientSkyColor = new pc.Color(i1125[7], i1125[8], i1125[9], i1125[10])
  i1124.ambientGroundColor = new pc.Color(i1125[11], i1125[12], i1125[13], i1125[14])
  i1124.ambientEquatorColor = new pc.Color(i1125[15], i1125[16], i1125[17], i1125[18])
  i1124.fogColor = new pc.Color(i1125[19], i1125[20], i1125[21], i1125[22])
  i1124.fogEndDistance = i1125[23]
  i1124.fogStartDistance = i1125[24]
  i1124.fogDensity = i1125[25]
  i1124.fog = !!i1125[26]
  request.r(i1125[27], i1125[28], 0, i1124, 'skybox')
  i1124.fogMode = i1125[29]
  var i1127 = i1125[30]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1127[i + 0]) );
  }
  i1124.lightmaps = i1126
  i1124.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1125[31], i1124.lightProbes)
  i1124.lightmapsMode = i1125[32]
  i1124.mixedBakeMode = i1125[33]
  i1124.environmentLightingMode = i1125[34]
  i1124.ambientProbe = new pc.SphericalHarmonicsL2(i1125[35])
  i1124.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1125[36])
  i1124.useReferenceAmbientProbe = !!i1125[37]
  request.r(i1125[38], i1125[39], 0, i1124, 'customReflection')
  request.r(i1125[40], i1125[41], 0, i1124, 'defaultReflection')
  i1124.defaultReflectionMode = i1125[42]
  i1124.defaultReflectionResolution = i1125[43]
  i1124.sunLightObjectId = i1125[44]
  i1124.pixelLightCount = i1125[45]
  i1124.defaultReflectionHDR = !!i1125[46]
  i1124.hasLightDataAsset = !!i1125[47]
  i1124.hasManualGenerate = !!i1125[48]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'lightmapColor')
  request.r(i1131[2], i1131[3], 0, i1130, 'lightmapDirection')
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1132 = root || new UnityEngine.LightProbes()
  var i1133 = data
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1141 = data
  var i1143 = i1141[0]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1143[i + 0]));
  }
  i1140.ShaderCompilationErrors = i1142
  i1140.name = i1141[1]
  i1140.guid = i1141[2]
  var i1145 = i1141[3]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( i1145[i + 0] );
  }
  i1140.shaderDefinedKeywords = i1144
  var i1147 = i1141[4]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1147[i + 0]) );
  }
  i1140.passes = i1146
  var i1149 = i1141[5]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1149[i + 0]) );
  }
  i1140.usePasses = i1148
  var i1151 = i1141[6]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1151[i + 0]) );
  }
  i1140.defaultParameterValues = i1150
  request.r(i1141[7], i1141[8], 0, i1140, 'unityFallbackShader')
  i1140.readDepth = !!i1141[9]
  i1140.isCreatedByShaderGraph = !!i1141[10]
  i1140.disableBatching = !!i1141[11]
  i1140.compiled = !!i1141[12]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1155 = data
  i1154.shaderName = i1155[0]
  i1154.errorMessage = i1155[1]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1160 = root || new pc.UnityShaderPass()
  var i1161 = data
  i1160.id = i1161[0]
  i1160.subShaderIndex = i1161[1]
  i1160.name = i1161[2]
  i1160.passType = i1161[3]
  i1160.grabPassTextureName = i1161[4]
  i1160.usePass = !!i1161[5]
  i1160.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[6], i1160.zTest)
  i1160.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[7], i1160.zWrite)
  i1160.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[8], i1160.culling)
  i1160.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1161[9], i1160.blending)
  i1160.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1161[10], i1160.alphaBlending)
  i1160.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[11], i1160.colorWriteMask)
  i1160.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[12], i1160.offsetUnits)
  i1160.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[13], i1160.offsetFactor)
  i1160.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[14], i1160.stencilRef)
  i1160.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[15], i1160.stencilReadMask)
  i1160.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[16], i1160.stencilWriteMask)
  i1160.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1161[17], i1160.stencilOp)
  i1160.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1161[18], i1160.stencilOpFront)
  i1160.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1161[19], i1160.stencilOpBack)
  var i1163 = i1161[20]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1163[i + 0]) );
  }
  i1160.tags = i1162
  var i1165 = i1161[21]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1160.passDefinedKeywords = i1164
  var i1167 = i1161[22]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1167[i + 0]) );
  }
  i1160.passDefinedKeywordGroups = i1166
  var i1169 = i1161[23]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1169[i + 0]) );
  }
  i1160.variants = i1168
  var i1171 = i1161[24]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1171[i + 0]) );
  }
  i1160.excludedVariants = i1170
  i1160.hasDepthReader = !!i1161[25]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1173 = data
  i1172.val = i1173[0]
  i1172.name = i1173[1]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1175 = data
  i1174.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[0], i1174.src)
  i1174.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[1], i1174.dst)
  i1174.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[2], i1174.op)
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1177 = data
  i1176.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[0], i1176.pass)
  i1176.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[1], i1176.fail)
  i1176.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[2], i1176.zFail)
  i1176.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[3], i1176.comp)
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1181 = data
  i1180.name = i1181[0]
  i1180.value = i1181[1]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1185 = data
  var i1187 = i1185[0]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( i1187[i + 0] );
  }
  i1184.keywords = i1186
  i1184.hasDiscard = !!i1185[1]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1191 = data
  i1190.passId = i1191[0]
  i1190.subShaderIndex = i1191[1]
  var i1193 = i1191[2]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( i1193[i + 0] );
  }
  i1190.keywords = i1192
  i1190.vertexProgram = i1191[3]
  i1190.fragmentProgram = i1191[4]
  i1190.exportedForWebGl2 = !!i1191[5]
  i1190.readDepth = !!i1191[6]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'shader')
  i1196.pass = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1201 = data
  i1200.name = i1201[0]
  i1200.type = i1201[1]
  i1200.value = new pc.Vec4( i1201[2], i1201[3], i1201[4], i1201[5] )
  i1200.textureValue = i1201[6]
  i1200.shaderPropertyFlag = i1201[7]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1203 = data
  i1202.name = i1203[0]
  request.r(i1203[1], i1203[2], 0, i1202, 'texture')
  i1202.aabb = i1203[3]
  i1202.vertices = i1203[4]
  i1202.triangles = i1203[5]
  i1202.textureRect = UnityEngine.Rect.MinMaxRect(i1203[6], i1203[7], i1203[8], i1203[9])
  i1202.packedRect = UnityEngine.Rect.MinMaxRect(i1203[10], i1203[11], i1203[12], i1203[13])
  i1202.border = new pc.Vec4( i1203[14], i1203[15], i1203[16], i1203[17] )
  i1202.transparency = i1203[18]
  i1202.bounds = i1203[19]
  i1202.pixelsPerUnit = i1203[20]
  i1202.textureWidth = i1203[21]
  i1202.textureHeight = i1203[22]
  i1202.nativeSize = new pc.Vec2( i1203[23], i1203[24] )
  i1202.pivot = new pc.Vec2( i1203[25], i1203[26] )
  i1202.textureRectOffset = new pc.Vec2( i1203[27], i1203[28] )
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1205 = data
  i1204.name = i1205[0]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1207 = data
  i1206.name = i1207[0]
  i1206.wrapMode = i1207[1]
  i1206.isLooping = !!i1207[2]
  i1206.length = i1207[3]
  var i1209 = i1207[4]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1209[i + 0]) );
  }
  i1206.curves = i1208
  var i1211 = i1207[5]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1211[i + 0]) );
  }
  i1206.events = i1210
  i1206.halfPrecision = !!i1207[6]
  i1206._frameRate = i1207[7]
  i1206.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1207[8], i1206.localBounds)
  i1206.hasMuscleCurves = !!i1207[9]
  var i1213 = i1207[10]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( i1213[i + 0] );
  }
  i1206.clipMuscleConstant = i1212
  i1206.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1207[11], i1206.clipBindingConstant)
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1217 = data
  i1216.path = i1217[0]
  i1216.hash = i1217[1]
  i1216.componentType = i1217[2]
  i1216.property = i1217[3]
  i1216.keys = i1217[4]
  var i1219 = i1217[5]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1219[i + 0]) );
  }
  i1216.objectReferenceKeys = i1218
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1223 = data
  i1222.time = i1223[0]
  request.r(i1223[1], i1223[2], 0, i1222, 'value')
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1227 = data
  i1226.functionName = i1227[0]
  i1226.floatParameter = i1227[1]
  i1226.intParameter = i1227[2]
  i1226.stringParameter = i1227[3]
  request.r(i1227[4], i1227[5], 0, i1226, 'objectReferenceParameter')
  i1226.time = i1227[6]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1229 = data
  i1228.center = new pc.Vec3( i1229[0], i1229[1], i1229[2] )
  i1228.extends = new pc.Vec3( i1229[3], i1229[4], i1229[5] )
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1233 = data
  var i1235 = i1233[0]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( i1235[i + 0] );
  }
  i1232.genericBindings = i1234
  var i1237 = i1233[1]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( i1237[i + 0] );
  }
  i1232.pptrCurveMapping = i1236
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1239 = data
  i1238.name = i1239[0]
  i1238.ascent = i1239[1]
  i1238.originalLineHeight = i1239[2]
  i1238.fontSize = i1239[3]
  var i1241 = i1239[4]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1241[i + 0]) );
  }
  i1238.characterInfo = i1240
  request.r(i1239[5], i1239[6], 0, i1238, 'texture')
  i1238.originalFontSize = i1239[7]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1245 = data
  i1244.index = i1245[0]
  i1244.advance = i1245[1]
  i1244.bearing = i1245[2]
  i1244.glyphWidth = i1245[3]
  i1244.glyphHeight = i1245[4]
  i1244.minX = i1245[5]
  i1244.maxX = i1245[6]
  i1244.minY = i1245[7]
  i1244.maxY = i1245[8]
  i1244.uvBottomLeftX = i1245[9]
  i1244.uvBottomLeftY = i1245[10]
  i1244.uvBottomRightX = i1245[11]
  i1244.uvBottomRightY = i1245[12]
  i1244.uvTopLeftX = i1245[13]
  i1244.uvTopLeftY = i1245[14]
  i1244.uvTopRightX = i1245[15]
  i1244.uvTopRightY = i1245[16]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1247 = data
  i1246.name = i1247[0]
  var i1249 = i1247[1]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1249[i + 0]) );
  }
  i1246.layers = i1248
  var i1251 = i1247[2]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1251[i + 0]) );
  }
  i1246.parameters = i1250
  i1246.animationClips = i1247[3]
  i1246.avatarUnsupported = i1247[4]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1255 = data
  i1254.name = i1255[0]
  i1254.defaultWeight = i1255[1]
  i1254.blendingMode = i1255[2]
  i1254.avatarMask = i1255[3]
  i1254.syncedLayerIndex = i1255[4]
  i1254.syncedLayerAffectsTiming = !!i1255[5]
  i1254.syncedLayers = i1255[6]
  i1254.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1255[7], i1254.stateMachine)
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1257 = data
  i1256.id = i1257[0]
  i1256.name = i1257[1]
  i1256.path = i1257[2]
  var i1259 = i1257[3]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1259[i + 0]) );
  }
  i1256.states = i1258
  var i1261 = i1257[4]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1261[i + 0]) );
  }
  i1256.machines = i1260
  var i1263 = i1257[5]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1263[i + 0]) );
  }
  i1256.entryStateTransitions = i1262
  var i1265 = i1257[6]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1265[i + 0]) );
  }
  i1256.exitStateTransitions = i1264
  var i1267 = i1257[7]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1267[i + 0]) );
  }
  i1256.anyStateTransitions = i1266
  i1256.defaultStateId = i1257[8]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1271 = data
  i1270.id = i1271[0]
  i1270.name = i1271[1]
  i1270.cycleOffset = i1271[2]
  i1270.cycleOffsetParameter = i1271[3]
  i1270.cycleOffsetParameterActive = !!i1271[4]
  i1270.mirror = !!i1271[5]
  i1270.mirrorParameter = i1271[6]
  i1270.mirrorParameterActive = !!i1271[7]
  i1270.motionId = i1271[8]
  i1270.nameHash = i1271[9]
  i1270.fullPathHash = i1271[10]
  i1270.speed = i1271[11]
  i1270.speedParameter = i1271[12]
  i1270.speedParameterActive = !!i1271[13]
  i1270.tag = i1271[14]
  i1270.tagHash = i1271[15]
  i1270.writeDefaultValues = !!i1271[16]
  var i1273 = i1271[17]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 2, i1272, '')
  }
  i1270.behaviours = i1272
  var i1275 = i1271[18]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1275[i + 0]) );
  }
  i1270.transitions = i1274
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1281 = data
  i1280.fullPath = i1281[0]
  i1280.canTransitionToSelf = !!i1281[1]
  i1280.duration = i1281[2]
  i1280.exitTime = i1281[3]
  i1280.hasExitTime = !!i1281[4]
  i1280.hasFixedDuration = !!i1281[5]
  i1280.interruptionSource = i1281[6]
  i1280.offset = i1281[7]
  i1280.orderedInterruption = !!i1281[8]
  i1280.destinationStateId = i1281[9]
  i1280.isExit = !!i1281[10]
  i1280.mute = !!i1281[11]
  i1280.solo = !!i1281[12]
  var i1283 = i1281[13]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1283[i + 0]) );
  }
  i1280.conditions = i1282
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1289 = data
  i1288.destinationStateId = i1289[0]
  i1288.isExit = !!i1289[1]
  i1288.mute = !!i1289[2]
  i1288.solo = !!i1289[3]
  var i1291 = i1289[4]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1291[i + 0]) );
  }
  i1288.conditions = i1290
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1295 = data
  i1294.defaultBool = !!i1295[0]
  i1294.defaultFloat = i1295[1]
  i1294.defaultInt = i1295[2]
  i1294.name = i1295[3]
  i1294.nameHash = i1295[4]
  i1294.type = i1295[5]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1297 = data
  i1296.name = i1297[0]
  i1296.bytes64 = i1297[1]
  i1296.data = i1297[2]
  return i1296
}

Deserializers["GridSaveData"] = function (request, data, root) {
  var i1298 = root || request.c( 'GridSaveData' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(i1301[i + 0]);
  }
  i1298.gridData = i1300
  var i1303 = i1299[1]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(i1303[i + 0]);
  }
  i1298.gridSprites = i1302
  return i1298
}

Deserializers["Bricks_PattemTableObj"] = function (request, data, root) {
  var i1306 = root || request.c( 'Bricks_PattemTableObj' )
  var i1307 = data
  var i1309 = i1307[0]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('PattemInfor', i1309[i + 0]) );
  }
  i1306.listPattemsInfor = i1308
  var i1311 = i1307[1]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('LevelData', i1311[i + 0]) );
  }
  i1306.levelData = i1310
  return i1306
}

Deserializers["PattemInfor"] = function (request, data, root) {
  var i1314 = root || request.c( 'PattemInfor' )
  var i1315 = data
  i1314.type = i1315[0]
  var i1317 = i1315[1]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( !!i1317[i + 0] );
  }
  i1314.grid = i1316
  return i1314
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1322 = root || request.c( 'LevelData' )
  var i1323 = data
  i1322.level = i1323[0]
  i1322.Score = i1323[1]
  i1322.weight = i1323[2]
  return i1322
}

Deserializers["BB10_SpawnBlockData"] = function (request, data, root) {
  var i1324 = root || request.c( 'BB10_SpawnBlockData' )
  var i1325 = data
  var i1327 = i1325[0]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('SpawnGroup', i1327[i + 0]) );
  }
  i1324.spawnGroups = i1326
  return i1324
}

Deserializers["SpawnGroup"] = function (request, data, root) {
  var i1330 = root || request.c( 'SpawnGroup' )
  var i1331 = data
  i1330.block1 = i1331[0]
  i1330.block2 = i1331[1]
  i1330.block3 = i1331[2]
  return i1330
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'atlas')
  i1332.normalStyle = i1333[2]
  i1332.normalSpacingOffset = i1333[3]
  i1332.boldStyle = i1333[4]
  i1332.boldSpacing = i1333[5]
  i1332.italicStyle = i1333[6]
  i1332.tabSize = i1333[7]
  i1332.hashCode = i1333[8]
  request.r(i1333[9], i1333[10], 0, i1332, 'material')
  i1332.materialHashCode = i1333[11]
  i1332.m_Version = i1333[12]
  i1332.m_SourceFontFileGUID = i1333[13]
  request.r(i1333[14], i1333[15], 0, i1332, 'm_SourceFontFile_EditorRef')
  request.r(i1333[16], i1333[17], 0, i1332, 'm_SourceFontFile')
  i1332.m_AtlasPopulationMode = i1333[18]
  i1332.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1333[19], i1332.m_FaceInfo)
  var i1335 = i1333[20]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(request.d('UnityEngine.TextCore.Glyph', i1335[i + 0]));
  }
  i1332.m_GlyphTable = i1334
  var i1337 = i1333[21]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.TMP_Character', i1337[i + 0]));
  }
  i1332.m_CharacterTable = i1336
  var i1339 = i1333[22]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 2) {
  request.r(i1339[i + 0], i1339[i + 1], 2, i1338, '')
  }
  i1332.m_AtlasTextures = i1338
  i1332.m_AtlasTextureIndex = i1333[23]
  i1332.m_IsMultiAtlasTexturesEnabled = !!i1333[24]
  i1332.m_ClearDynamicDataOnBuild = !!i1333[25]
  var i1341 = i1333[26]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('UnityEngine.TextCore.GlyphRect', i1341[i + 0]));
  }
  i1332.m_UsedGlyphRects = i1340
  var i1343 = i1333[27]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(request.d('UnityEngine.TextCore.GlyphRect', i1343[i + 0]));
  }
  i1332.m_FreeGlyphRects = i1342
  i1332.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1333[28], i1332.m_fontInfo)
  i1332.m_AtlasWidth = i1333[29]
  i1332.m_AtlasHeight = i1333[30]
  i1332.m_AtlasPadding = i1333[31]
  i1332.m_AtlasRenderMode = i1333[32]
  var i1345 = i1333[33]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('TMPro.TMP_Glyph', i1345[i + 0]));
  }
  i1332.m_glyphInfoList = i1344
  i1332.m_KerningTable = request.d('TMPro.KerningTable', i1333[34], i1332.m_KerningTable)
  i1332.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1333[35], i1332.m_FontFeatureTable)
  var i1347 = i1333[36]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1332.fallbackFontAssets = i1346
  var i1349 = i1333[37]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1349.length; i += 2) {
  request.r(i1349[i + 0], i1349[i + 1], 1, i1348, '')
  }
  i1332.m_FallbackFontAssetTable = i1348
  i1332.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1333[38], i1332.m_CreationSettings)
  var i1351 = i1333[39]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('TMPro.TMP_FontWeightPair', i1351[i + 0]) );
  }
  i1332.m_FontWeightTable = i1350
  var i1353 = i1333[40]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('TMPro.TMP_FontWeightPair', i1353[i + 0]) );
  }
  i1332.fontWeights = i1352
  return i1332
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1355 = data
  i1354.m_FaceIndex = i1355[0]
  i1354.m_FamilyName = i1355[1]
  i1354.m_StyleName = i1355[2]
  i1354.m_PointSize = i1355[3]
  i1354.m_Scale = i1355[4]
  i1354.m_UnitsPerEM = i1355[5]
  i1354.m_LineHeight = i1355[6]
  i1354.m_AscentLine = i1355[7]
  i1354.m_CapLine = i1355[8]
  i1354.m_MeanLine = i1355[9]
  i1354.m_Baseline = i1355[10]
  i1354.m_DescentLine = i1355[11]
  i1354.m_SuperscriptOffset = i1355[12]
  i1354.m_SuperscriptSize = i1355[13]
  i1354.m_SubscriptOffset = i1355[14]
  i1354.m_SubscriptSize = i1355[15]
  i1354.m_UnderlineOffset = i1355[16]
  i1354.m_UnderlineThickness = i1355[17]
  i1354.m_StrikethroughOffset = i1355[18]
  i1354.m_StrikethroughThickness = i1355[19]
  i1354.m_TabWidth = i1355[20]
  return i1354
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1359 = data
  i1358.m_Index = i1359[0]
  i1358.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1359[1], i1358.m_Metrics)
  i1358.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1359[2], i1358.m_GlyphRect)
  i1358.m_Scale = i1359[3]
  i1358.m_AtlasIndex = i1359[4]
  i1358.m_ClassDefinitionType = i1359[5]
  return i1358
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1361 = data
  i1360.m_Width = i1361[0]
  i1360.m_Height = i1361[1]
  i1360.m_HorizontalBearingX = i1361[2]
  i1360.m_HorizontalBearingY = i1361[3]
  i1360.m_HorizontalAdvance = i1361[4]
  return i1360
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1363 = data
  i1362.m_X = i1363[0]
  i1362.m_Y = i1363[1]
  i1362.m_Width = i1363[2]
  i1362.m_Height = i1363[3]
  return i1362
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_Character' )
  var i1367 = data
  i1366.m_ElementType = i1367[0]
  i1366.m_Unicode = i1367[1]
  i1366.m_GlyphIndex = i1367[2]
  i1366.m_Scale = i1367[3]
  return i1366
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1371 = data
  i1370.Name = i1371[0]
  i1370.PointSize = i1371[1]
  i1370.Scale = i1371[2]
  i1370.CharacterCount = i1371[3]
  i1370.LineHeight = i1371[4]
  i1370.Baseline = i1371[5]
  i1370.Ascender = i1371[6]
  i1370.CapHeight = i1371[7]
  i1370.Descender = i1371[8]
  i1370.CenterLine = i1371[9]
  i1370.SuperscriptOffset = i1371[10]
  i1370.SubscriptOffset = i1371[11]
  i1370.SubSize = i1371[12]
  i1370.Underline = i1371[13]
  i1370.UnderlineThickness = i1371[14]
  i1370.strikethrough = i1371[15]
  i1370.strikethroughThickness = i1371[16]
  i1370.TabWidth = i1371[17]
  i1370.Padding = i1371[18]
  i1370.AtlasWidth = i1371[19]
  i1370.AtlasHeight = i1371[20]
  return i1370
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1375 = data
  i1374.id = i1375[0]
  i1374.x = i1375[1]
  i1374.y = i1375[2]
  i1374.width = i1375[3]
  i1374.height = i1375[4]
  i1374.xOffset = i1375[5]
  i1374.yOffset = i1375[6]
  i1374.xAdvance = i1375[7]
  i1374.scale = i1375[8]
  return i1374
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.KerningTable' )
  var i1377 = data
  var i1379 = i1377[0]
  var i1378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.add(request.d('TMPro.KerningPair', i1379[i + 0]));
  }
  i1376.kerningPairs = i1378
  return i1376
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.KerningPair' )
  var i1383 = data
  i1382.xOffset = i1383[0]
  i1382.m_FirstGlyph = i1383[1]
  i1382.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1383[2], i1382.m_FirstGlyphAdjustments)
  i1382.m_SecondGlyph = i1383[3]
  i1382.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1383[4], i1382.m_SecondGlyphAdjustments)
  i1382.m_IgnoreSpacingAdjustments = !!i1383[5]
  return i1382
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1385 = data
  var i1387 = i1385[0]
  var i1386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1387[i + 0]));
  }
  i1384.m_GlyphPairAdjustmentRecords = i1386
  return i1384
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1391 = data
  i1390.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1391[0], i1390.m_FirstAdjustmentRecord)
  i1390.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1391[1], i1390.m_SecondAdjustmentRecord)
  i1390.m_FeatureLookupFlags = i1391[2]
  return i1390
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1394 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1395 = data
  i1394.sourceFontFileName = i1395[0]
  i1394.sourceFontFileGUID = i1395[1]
  i1394.pointSizeSamplingMode = i1395[2]
  i1394.pointSize = i1395[3]
  i1394.padding = i1395[4]
  i1394.packingMode = i1395[5]
  i1394.atlasWidth = i1395[6]
  i1394.atlasHeight = i1395[7]
  i1394.characterSetSelectionMode = i1395[8]
  i1394.characterSequence = i1395[9]
  i1394.referencedFontAssetGUID = i1395[10]
  i1394.referencedTextAssetGUID = i1395[11]
  i1394.fontStyle = i1395[12]
  i1394.fontStyleModifier = i1395[13]
  i1394.renderMode = i1395[14]
  i1394.includeFontFeatures = !!i1395[15]
  return i1394
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1398 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1399 = data
  request.r(i1399[0], i1399[1], 0, i1398, 'regularTypeface')
  request.r(i1399[2], i1399[3], 0, i1398, 'italicTypeface')
  return i1398
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1401 = data
  i1400.useSafeMode = !!i1401[0]
  i1400.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1401[1], i1400.safeModeOptions)
  i1400.timeScale = i1401[2]
  i1400.unscaledTimeScale = i1401[3]
  i1400.useSmoothDeltaTime = !!i1401[4]
  i1400.maxSmoothUnscaledTime = i1401[5]
  i1400.rewindCallbackMode = i1401[6]
  i1400.showUnityEditorReport = !!i1401[7]
  i1400.logBehaviour = i1401[8]
  i1400.drawGizmos = !!i1401[9]
  i1400.defaultRecyclable = !!i1401[10]
  i1400.defaultAutoPlay = i1401[11]
  i1400.defaultUpdateType = i1401[12]
  i1400.defaultTimeScaleIndependent = !!i1401[13]
  i1400.defaultEaseType = i1401[14]
  i1400.defaultEaseOvershootOrAmplitude = i1401[15]
  i1400.defaultEasePeriod = i1401[16]
  i1400.defaultAutoKill = !!i1401[17]
  i1400.defaultLoopType = i1401[18]
  i1400.debugMode = !!i1401[19]
  i1400.debugStoreTargetId = !!i1401[20]
  i1400.showPreviewPanel = !!i1401[21]
  i1400.storeSettingsLocation = i1401[22]
  i1400.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1401[23], i1400.modules)
  i1400.createASMDEF = !!i1401[24]
  i1400.showPlayingTweens = !!i1401[25]
  i1400.showPausedTweens = !!i1401[26]
  return i1400
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1402 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1403 = data
  i1402.logBehaviour = i1403[0]
  i1402.nestedTweenFailureBehaviour = i1403[1]
  return i1402
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1404 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1405 = data
  i1404.showPanel = !!i1405[0]
  i1404.audioEnabled = !!i1405[1]
  i1404.physicsEnabled = !!i1405[2]
  i1404.physics2DEnabled = !!i1405[3]
  i1404.spriteEnabled = !!i1405[4]
  i1404.uiEnabled = !!i1405[5]
  i1404.textMeshProEnabled = !!i1405[6]
  i1404.tk2DEnabled = !!i1405[7]
  i1404.deAudioEnabled = !!i1405[8]
  i1404.deUnityExtendedEnabled = !!i1405[9]
  i1404.epoOutlineEnabled = !!i1405[10]
  return i1404
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_Settings' )
  var i1407 = data
  i1406.m_enableWordWrapping = !!i1407[0]
  i1406.m_enableKerning = !!i1407[1]
  i1406.m_enableExtraPadding = !!i1407[2]
  i1406.m_enableTintAllSprites = !!i1407[3]
  i1406.m_enableParseEscapeCharacters = !!i1407[4]
  i1406.m_EnableRaycastTarget = !!i1407[5]
  i1406.m_GetFontFeaturesAtRuntime = !!i1407[6]
  i1406.m_missingGlyphCharacter = i1407[7]
  i1406.m_warningsDisabled = !!i1407[8]
  request.r(i1407[9], i1407[10], 0, i1406, 'm_defaultFontAsset')
  i1406.m_defaultFontAssetPath = i1407[11]
  i1406.m_defaultFontSize = i1407[12]
  i1406.m_defaultAutoSizeMinRatio = i1407[13]
  i1406.m_defaultAutoSizeMaxRatio = i1407[14]
  i1406.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1407[15], i1407[16] )
  i1406.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1407[17], i1407[18] )
  i1406.m_autoSizeTextContainer = !!i1407[19]
  i1406.m_IsTextObjectScaleStatic = !!i1407[20]
  var i1409 = i1407[21]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1409.length; i += 2) {
  request.r(i1409[i + 0], i1409[i + 1], 1, i1408, '')
  }
  i1406.m_fallbackFontAssets = i1408
  i1406.m_matchMaterialPreset = !!i1407[22]
  request.r(i1407[23], i1407[24], 0, i1406, 'm_defaultSpriteAsset')
  i1406.m_defaultSpriteAssetPath = i1407[25]
  i1406.m_enableEmojiSupport = !!i1407[26]
  i1406.m_MissingCharacterSpriteUnicode = i1407[27]
  i1406.m_defaultColorGradientPresetsPath = i1407[28]
  request.r(i1407[29], i1407[30], 0, i1406, 'm_defaultStyleSheet')
  i1406.m_StyleSheetsResourcePath = i1407[31]
  request.r(i1407[32], i1407[33], 0, i1406, 'm_leadingCharacters')
  request.r(i1407[34], i1407[35], 0, i1406, 'm_followingCharacters')
  i1406.m_UseModernHangulLineBreakingRules = !!i1407[36]
  return i1406
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1410 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1411 = data
  i1410.m_GlyphIndex = i1411[0]
  i1410.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1411[1], i1410.m_GlyphValueRecord)
  return i1410
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1413 = data
  i1412.m_XPlacement = i1413[0]
  i1412.m_YPlacement = i1413[1]
  i1412.m_XAdvance = i1413[2]
  i1412.m_YAdvance = i1413[3]
  return i1412
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'spriteSheet')
  var i1417 = i1415[2]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.add(request.d('TMPro.TMP_Sprite', i1417[i + 0]));
  }
  i1414.spriteInfoList = i1416
  var i1419 = i1415[3]
  var i1418 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1419.length; i += 2) {
  request.r(i1419[i + 0], i1419[i + 1], 1, i1418, '')
  }
  i1414.fallbackSpriteAssets = i1418
  i1414.hashCode = i1415[4]
  request.r(i1415[5], i1415[6], 0, i1414, 'material')
  i1414.materialHashCode = i1415[7]
  i1414.m_Version = i1415[8]
  i1414.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1415[9], i1414.m_FaceInfo)
  var i1421 = i1415[10]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.add(request.d('TMPro.TMP_SpriteCharacter', i1421[i + 0]));
  }
  i1414.m_SpriteCharacterTable = i1420
  var i1423 = i1415[11]
  var i1422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.add(request.d('TMPro.TMP_SpriteGlyph', i1423[i + 0]));
  }
  i1414.m_SpriteGlyphTable = i1422
  return i1414
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1426 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1427 = data
  i1426.name = i1427[0]
  i1426.hashCode = i1427[1]
  i1426.unicode = i1427[2]
  i1426.pivot = new pc.Vec2( i1427[3], i1427[4] )
  request.r(i1427[5], i1427[6], 0, i1426, 'sprite')
  i1426.id = i1427[7]
  i1426.x = i1427[8]
  i1426.y = i1427[9]
  i1426.width = i1427[10]
  i1426.height = i1427[11]
  i1426.xOffset = i1427[12]
  i1426.yOffset = i1427[13]
  i1426.xAdvance = i1427[14]
  i1426.scale = i1427[15]
  return i1426
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1432 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1433 = data
  i1432.m_Name = i1433[0]
  i1432.m_HashCode = i1433[1]
  i1432.m_ElementType = i1433[2]
  i1432.m_Unicode = i1433[3]
  i1432.m_GlyphIndex = i1433[4]
  i1432.m_Scale = i1433[5]
  return i1432
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'sprite')
  i1436.m_Index = i1437[2]
  i1436.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1437[3], i1436.m_Metrics)
  i1436.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1437[4], i1436.m_GlyphRect)
  i1436.m_Scale = i1437[5]
  i1436.m_AtlasIndex = i1437[6]
  i1436.m_ClassDefinitionType = i1437[7]
  return i1436
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1438 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1439 = data
  var i1441 = i1439[0]
  var i1440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.add(request.d('TMPro.TMP_Style', i1441[i + 0]));
  }
  i1438.m_StyleList = i1440
  return i1438
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.TMP_Style' )
  var i1445 = data
  i1444.m_Name = i1445[0]
  i1444.m_HashCode = i1445[1]
  i1444.m_OpeningDefinition = i1445[2]
  i1444.m_ClosingDefinition = i1445[3]
  i1444.m_OpeningTagArray = i1445[4]
  i1444.m_ClosingTagArray = i1445[5]
  i1444.m_OpeningTagUnicodeArray = i1445[6]
  i1444.m_ClosingTagUnicodeArray = i1445[7]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1447 = data
  var i1449 = i1447[0]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1449[i + 0]) );
  }
  i1446.files = i1448
  i1446.componentToPrefabIds = i1447[1]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1453 = data
  i1452.path = i1453[0]
  request.r(i1453[1], i1453[2], 0, i1452, 'unityObject')
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1455 = data
  var i1457 = i1455[0]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1457[i + 0]) );
  }
  i1454.scriptsExecutionOrder = i1456
  var i1459 = i1455[1]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1459[i + 0]) );
  }
  i1454.sortingLayers = i1458
  var i1461 = i1455[2]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1461[i + 0]) );
  }
  i1454.cullingLayers = i1460
  i1454.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1455[3], i1454.timeSettings)
  i1454.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1455[4], i1454.physicsSettings)
  i1454.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1455[5], i1454.physics2DSettings)
  i1454.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1455[6], i1454.qualitySettings)
  i1454.enableRealtimeShadows = !!i1455[7]
  i1454.enableAutoInstancing = !!i1455[8]
  i1454.enableStaticBatching = !!i1455[9]
  i1454.enableDynamicBatching = !!i1455[10]
  i1454.lightmapEncodingQuality = i1455[11]
  i1454.desiredColorSpace = i1455[12]
  var i1463 = i1455[13]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( i1463[i + 0] );
  }
  i1454.allTags = i1462
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.value = i1467[1]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1471 = data
  i1470.id = i1471[0]
  i1470.name = i1471[1]
  i1470.value = i1471[2]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1475 = data
  i1474.id = i1475[0]
  i1474.name = i1475[1]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1477 = data
  i1476.fixedDeltaTime = i1477[0]
  i1476.maximumDeltaTime = i1477[1]
  i1476.timeScale = i1477[2]
  i1476.maximumParticleTimestep = i1477[3]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1479 = data
  i1478.gravity = new pc.Vec3( i1479[0], i1479[1], i1479[2] )
  i1478.defaultSolverIterations = i1479[3]
  i1478.bounceThreshold = i1479[4]
  i1478.autoSyncTransforms = !!i1479[5]
  i1478.autoSimulation = !!i1479[6]
  var i1481 = i1479[7]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1481[i + 0]) );
  }
  i1478.collisionMatrix = i1480
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1485 = data
  i1484.enabled = !!i1485[0]
  i1484.layerId = i1485[1]
  i1484.otherLayerId = i1485[2]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, 'material')
  i1486.gravity = new pc.Vec2( i1487[2], i1487[3] )
  i1486.positionIterations = i1487[4]
  i1486.velocityIterations = i1487[5]
  i1486.velocityThreshold = i1487[6]
  i1486.maxLinearCorrection = i1487[7]
  i1486.maxAngularCorrection = i1487[8]
  i1486.maxTranslationSpeed = i1487[9]
  i1486.maxRotationSpeed = i1487[10]
  i1486.baumgarteScale = i1487[11]
  i1486.baumgarteTOIScale = i1487[12]
  i1486.timeToSleep = i1487[13]
  i1486.linearSleepTolerance = i1487[14]
  i1486.angularSleepTolerance = i1487[15]
  i1486.defaultContactOffset = i1487[16]
  i1486.autoSimulation = !!i1487[17]
  i1486.queriesHitTriggers = !!i1487[18]
  i1486.queriesStartInColliders = !!i1487[19]
  i1486.callbacksOnDisable = !!i1487[20]
  i1486.reuseCollisionCallbacks = !!i1487[21]
  i1486.autoSyncTransforms = !!i1487[22]
  var i1489 = i1487[23]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1489[i + 0]) );
  }
  i1486.collisionMatrix = i1488
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1493 = data
  i1492.enabled = !!i1493[0]
  i1492.layerId = i1493[1]
  i1492.otherLayerId = i1493[2]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1495 = data
  var i1497 = i1495[0]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1497[i + 0]) );
  }
  i1494.qualityLevels = i1496
  var i1499 = i1495[1]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( i1499[i + 0] );
  }
  i1494.names = i1498
  i1494.shadows = i1495[2]
  i1494.anisotropicFiltering = i1495[3]
  i1494.antiAliasing = i1495[4]
  i1494.lodBias = i1495[5]
  i1494.shadowCascades = i1495[6]
  i1494.shadowDistance = i1495[7]
  i1494.shadowmaskMode = i1495[8]
  i1494.shadowProjection = i1495[9]
  i1494.shadowResolution = i1495[10]
  i1494.softParticles = !!i1495[11]
  i1494.softVegetation = !!i1495[12]
  i1494.activeColorSpace = i1495[13]
  i1494.desiredColorSpace = i1495[14]
  i1494.masterTextureLimit = i1495[15]
  i1494.maxQueuedFrames = i1495[16]
  i1494.particleRaycastBudget = i1495[17]
  i1494.pixelLightCount = i1495[18]
  i1494.realtimeReflectionProbes = !!i1495[19]
  i1494.shadowCascade2Split = i1495[20]
  i1494.shadowCascade4Split = new pc.Vec3( i1495[21], i1495[22], i1495[23] )
  i1494.streamingMipmapsActive = !!i1495[24]
  i1494.vSyncCount = i1495[25]
  i1494.asyncUploadBufferSize = i1495[26]
  i1494.asyncUploadTimeSlice = i1495[27]
  i1494.billboardsFaceCameraPosition = !!i1495[28]
  i1494.shadowNearPlaneOffset = i1495[29]
  i1494.streamingMipmapsMemoryBudget = i1495[30]
  i1494.maximumLODLevel = i1495[31]
  i1494.streamingMipmapsAddAllCameras = !!i1495[32]
  i1494.streamingMipmapsMaxLevelReduction = i1495[33]
  i1494.streamingMipmapsRenderersPerFrame = i1495[34]
  i1494.resolutionScalingFixedDPIFactor = i1495[35]
  i1494.streamingMipmapsMaxFileIORequests = i1495[36]
  i1494.currentQualityLevel = i1495[37]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1505 = data
  i1504.mode = i1505[0]
  i1504.parameter = i1505[1]
  i1504.threshold = i1505[2]
  return i1504
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1506 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1507 = data
  i1506.xPlacement = i1507[0]
  i1506.yPlacement = i1507[1]
  i1506.xAdvance = i1507[2]
  i1506.yAdvance = i1507[3]
  return i1506
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.TextMesh":{"m_Alignment":0,"m_Anchor":1,"m_CharacterSize":2,"m_Font":3,"m_FontSize":5,"m_FontStyle":6,"m_LineSpacing":7,"m_OffsetZ":8,"m_RichText":9,"m_TabSize":10,"m_Text":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[86],"35":[33],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[96],"97":[96],"98":[96],"99":[96],"100":[96],"101":[96],"102":[96],"103":[96],"104":[96],"105":[96],"106":[96],"107":[96],"108":[96],"109":[33],"16":[15],"110":[111],"112":[111],"48":[47],"69":[43],"113":[47],"114":[47],"51":[48],"53":[52,47],"115":[47],"50":[48],"116":[47],"117":[47],"118":[47],"119":[47],"120":[47],"121":[47],"122":[47],"123":[47],"124":[47],"125":[52,47],"126":[47],"127":[47],"128":[47],"66":[47],"129":[52,47],"130":[47],"131":[63],"132":[63],"64":[63],"133":[63],"134":[33],"135":[33],"136":[48],"137":[59],"138":[47],"139":[15,47],"43":[47,52],"140":[47],"141":[52,47],"142":[15],"143":[52,47],"144":[47],"145":[146],"147":[146],"148":[146]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","CompleteBlocks","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BB10_BrickCubeUnit","UnityEngine.GameObject","UnityEngine.BoxCollider2D","BB10_ColorControl","UnityEngine.MeshRenderer","UnityEngine.TextMesh","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","BB10_MainObjControl","BB10_PattemCreater","BB10_NextViewerControl","BB10_Grid","BB10_PlaneView","BB10_GroundView","SG_Block_EffectCtr","CameraScript","BB10_ScoreCtr","BB10_ShowHelpCtr","BB10_ScreenCtr","BB10_Tutorial","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.FlareLayer","CameraResponsive","MainAudio","GridSaveData","Bricks_PattemTableObj","BB10_SpawnBlockData","BB10_NextViewer","GamePlayManager","TMPro.TextMeshProUGUI","ResponsiveManager","TutorialManager","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","BB10_MainCanvasUI","BB10_InGameScript","BB10_FaderHandler","ResponsiveWorld","TMPro.TMP_FontAsset","UnityEngine.UI.Button","CTAButton","ScaleElement","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BB10_HomeController","UnityEngine.UI.Slider","TimerProgress","UITweenElement","TextMeshProController","BB10_LostScript","BB10_PopupRate","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","LoadingTransition","BuiltInButtonTestSdk","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "BlockPuzzle";

Deserializers.lunaInitializationTime = "03/12/2026 10:41:13";

Deserializers.lunaDaysRunning = "6.7";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "Basic1";

Deserializers.lunaAppID = "37940";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1702";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4867";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

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

Deserializers.buildID = "75c071cb-0373-4f92-aadb-8fdc4b2477b3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

