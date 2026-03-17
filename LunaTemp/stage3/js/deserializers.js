var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointSpring' )
  var i737 = data
  i736.spring = i737[0]
  i736.damper = i737[1]
  i736.targetPosition = i737[2]
  return i736
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointMotor' )
  var i739 = data
  i738.m_TargetVelocity = i739[0]
  i738.m_Force = i739[1]
  i738.m_FreeSpin = i739[2]
  return i738
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointLimits' )
  var i741 = data
  i740.m_Min = i741[0]
  i740.m_Max = i741[1]
  i740.m_Bounciness = i741[2]
  i740.m_BounceMinVelocity = i741[3]
  i740.m_ContactDistance = i741[4]
  i740.minBounce = i741[5]
  i740.maxBounce = i741[6]
  return i740
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointDrive' )
  var i743 = data
  i742.m_PositionSpring = i743[0]
  i742.m_PositionDamper = i743[1]
  i742.m_MaximumForce = i743[2]
  i742.m_UseAcceleration = i743[3]
  return i742
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i745 = data
  i744.m_Spring = i745[0]
  i744.m_Damper = i745[1]
  return i744
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i747 = data
  i746.m_Limit = i747[0]
  i746.m_Bounciness = i747[1]
  i746.m_ContactDistance = i747[2]
  return i746
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i749 = data
  i748.m_ExtremumSlip = i749[0]
  i748.m_ExtremumValue = i749[1]
  i748.m_AsymptoteSlip = i749[2]
  i748.m_AsymptoteValue = i749[3]
  i748.m_Stiffness = i749[4]
  return i748
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i751 = data
  i750.m_LowerAngle = i751[0]
  i750.m_UpperAngle = i751[1]
  return i750
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i753 = data
  i752.m_MotorSpeed = i753[0]
  i752.m_MaximumMotorTorque = i753[1]
  return i752
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i755 = data
  i754.m_DampingRatio = i755[0]
  i754.m_Frequency = i755[1]
  i754.m_Angle = i755[2]
  return i754
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i757 = data
  i756.m_LowerTranslation = i757[0]
  i756.m_UpperTranslation = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i758 = root || new pc.UnityMaterial()
  var i759 = data
  i758.name = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'shader')
  i758.renderQueue = i759[3]
  i758.enableInstancing = !!i759[4]
  var i761 = i759[5]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i761[i + 0]) );
  }
  i758.floatParameters = i760
  var i763 = i759[6]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i763[i + 0]) );
  }
  i758.colorParameters = i762
  var i765 = i759[7]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i765[i + 0]) );
  }
  i758.vectorParameters = i764
  var i767 = i759[8]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i767[i + 0]) );
  }
  i758.textureParameters = i766
  var i769 = i759[9]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i769[i + 0]) );
  }
  i758.materialFlags = i768
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i773 = data
  i772.name = i773[0]
  i772.value = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i777 = data
  i776.name = i777[0]
  i776.value = new pc.Color(i777[1], i777[2], i777[3], i777[4])
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i781 = data
  i780.name = i781[0]
  i780.value = new pc.Vec4( i781[1], i781[2], i781[3], i781[4] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i785 = data
  i784.name = i785[0]
  request.r(i785[1], i785[2], 0, i784, 'value')
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i789 = data
  i788.name = i789[0]
  i788.enabled = !!i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i791 = data
  i790.name = i791[0]
  i790.width = i791[1]
  i790.height = i791[2]
  i790.mipmapCount = i791[3]
  i790.anisoLevel = i791[4]
  i790.filterMode = i791[5]
  i790.hdr = !!i791[6]
  i790.format = i791[7]
  i790.wrapMode = i791[8]
  i790.alphaIsTransparency = !!i791[9]
  i790.alphaSource = i791[10]
  i790.graphicsFormat = i791[11]
  i790.sRGBTexture = !!i791[12]
  i790.desiredColorSpace = i791[13]
  i790.wrapU = i791[14]
  i790.wrapV = i791[15]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i793 = data
  i792.position = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.scale = new pc.Vec3( i793[3], i793[4], i793[5] )
  i792.rotation = new pc.Quat(i793[6], i793[7], i793[8], i793[9])
  return i792
}

Deserializers["CompleteBlocks"] = function (request, data, root) {
  var i794 = root || request.c( 'CompleteBlocks' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'spriteRenderer')
  var i797 = i795[2]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('TextAndSound')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('TextAndSound', i797[i + 0]));
  }
  i794.listTextAndSound = i796
  return i794
}

Deserializers["TextAndSound"] = function (request, data, root) {
  var i800 = root || request.c( 'TextAndSound' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'sprite')
  request.r(i801[2], i801[3], 0, i800, 'audioClip')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'clip')
  request.r(i803[2], i803[3], 0, i802, 'outputAudioMixerGroup')
  i802.playOnAwake = !!i803[4]
  i802.loop = !!i803[5]
  i802.time = i803[6]
  i802.volume = i803[7]
  i802.pitch = i803[8]
  i802.enabled = !!i803[9]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i805 = data
  i804.color = new pc.Color(i805[0], i805[1], i805[2], i805[3])
  request.r(i805[4], i805[5], 0, i804, 'sprite')
  i804.flipX = !!i805[6]
  i804.flipY = !!i805[7]
  i804.drawMode = i805[8]
  i804.size = new pc.Vec2( i805[9], i805[10] )
  i804.tileMode = i805[11]
  i804.adaptiveModeThreshold = i805[12]
  i804.maskInteraction = i805[13]
  i804.spriteSortPoint = i805[14]
  i804.enabled = !!i805[15]
  request.r(i805[16], i805[17], 0, i804, 'sharedMaterial')
  var i807 = i805[18]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.sharedMaterials = i806
  i804.receiveShadows = !!i805[19]
  i804.shadowCastingMode = i805[20]
  i804.sortingLayerID = i805[21]
  i804.sortingOrder = i805[22]
  i804.lightmapIndex = i805[23]
  i804.lightmapSceneIndex = i805[24]
  i804.lightmapScaleOffset = new pc.Vec4( i805[25], i805[26], i805[27], i805[28] )
  i804.lightProbeUsage = i805[29]
  i804.reflectionProbeUsage = i805[30]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'animatorController')
  request.r(i811[2], i811[3], 0, i810, 'avatar')
  i810.updateMode = i811[4]
  i810.hasTransformHierarchy = !!i811[5]
  i810.applyRootMotion = !!i811[6]
  var i813 = i811[7]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.humanBones = i812
  i810.enabled = !!i811[8]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i817 = data
  i816.name = i817[0]
  i816.tagId = i817[1]
  i816.enabled = !!i817[2]
  i816.isStatic = !!i817[3]
  i816.layer = i817[4]
  return i816
}

Deserializers["BB10_BrickCubeUnit"] = function (request, data, root) {
  var i818 = root || request.c( 'BB10_BrickCubeUnit' )
  var i819 = data
  i818.thisType = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'viewer')
  request.r(i819[3], i819[4], 0, i818, 'render')
  i818.ID = i819[5]
  i818.row = i819[6]
  i818.col = i819[7]
  i818.indexRow = i819[8]
  i818.indexCol = i819[9]
  i818.scale = i819[10]
  i818.myData = request.d('BB10_ColorData', i819[11], i818.myData)
  i818.targetGray = i819[12]
  i818.durationDrop = i819[13]
  i818.dropScaleMin = new pc.Vec3( i819[14], i819[15], i819[16] )
  i818.ac = new pc.AnimationCurve( { keys_flow: i819[17] } )
  i818.speed = i819[18]
  i818.targetScale = i819[19]
  i818.durationScaleEffect = i819[20]
  i818.speedRotate = i819[21]
  request.r(i819[22], i819[23], 0, i818, 'shadowDropBlock')
  return i818
}

Deserializers["BB10_ColorData"] = function (request, data, root) {
  var i820 = root || request.c( 'BB10_ColorData' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'sprite')
  i820.ID = i821[2]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i823 = data
  i822.usedByComposite = !!i823[0]
  i822.autoTiling = !!i823[1]
  i822.size = new pc.Vec2( i823[2], i823[3] )
  i822.edgeRadius = i823[4]
  i822.enabled = !!i823[5]
  i822.isTrigger = !!i823[6]
  i822.usedByEffector = !!i823[7]
  i822.density = i823[8]
  i822.offset = new pc.Vec2( i823[9], i823[10] )
  request.r(i823[11], i823[12], 0, i822, 'material')
  return i822
}

Deserializers["BB10_ColorControl"] = function (request, data, root) {
  var i824 = root || request.c( 'BB10_ColorControl' )
  var i825 = data
  var i827 = i825[0]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('BB10_ColorData', i827[i + 0]) );
  }
  i824.sprites = i826
  var i829 = i825[1]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i824.spriteTexs = i828
  var i831 = i825[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
  var i833 = i831[i + 0]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
    i830.push( i832 );
  }
  i824.preloadSprite = i830
  i824.preload = i825[3]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'additionalVertexStreams')
  i844.enabled = !!i845[2]
  request.r(i845[3], i845[4], 0, i844, 'sharedMaterial')
  var i847 = i845[5]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sharedMaterials = i846
  i844.receiveShadows = !!i845[6]
  i844.shadowCastingMode = i845[7]
  i844.sortingLayerID = i845[8]
  i844.sortingOrder = i845[9]
  i844.lightmapIndex = i845[10]
  i844.lightmapSceneIndex = i845[11]
  i844.lightmapScaleOffset = new pc.Vec4( i845[12], i845[13], i845[14], i845[15] )
  i844.lightProbeUsage = i845[16]
  i844.reflectionProbeUsage = i845[17]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TextMesh"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TextMesh' )
  var i849 = data
  i848.m_Alignment = i849[0]
  i848.m_Anchor = i849[1]
  i848.m_CharacterSize = i849[2]
  request.r(i849[3], i849[4], 0, i848, 'm_Font')
  i848.m_FontSize = i849[5]
  i848.m_FontStyle = i849[6]
  i848.m_LineSpacing = i849[7]
  i848.m_OffsetZ = i849[8]
  i848.m_RichText = !!i849[9]
  i848.m_TabSize = i849[10]
  i848.m_Text = i849[11]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i851 = data
  i850.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i851[0], i850.main)
  i850.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i851[1], i850.colorBySpeed)
  i850.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i851[2], i850.colorOverLifetime)
  i850.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i851[3], i850.emission)
  i850.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i851[4], i850.rotationBySpeed)
  i850.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i851[5], i850.rotationOverLifetime)
  i850.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i851[6], i850.shape)
  i850.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i851[7], i850.sizeBySpeed)
  i850.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i851[8], i850.sizeOverLifetime)
  i850.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i851[9], i850.textureSheetAnimation)
  i850.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i851[10], i850.velocityOverLifetime)
  i850.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i851[11], i850.noise)
  i850.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i851[12], i850.inheritVelocity)
  i850.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i851[13], i850.forceOverLifetime)
  i850.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i851[14], i850.limitVelocityOverLifetime)
  i850.useAutoRandomSeed = !!i851[15]
  i850.randomSeed = i851[16]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemMain()
  var i853 = data
  i852.duration = i853[0]
  i852.loop = !!i853[1]
  i852.prewarm = !!i853[2]
  i852.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[3], i852.startDelay)
  i852.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[4], i852.startLifetime)
  i852.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[5], i852.startSpeed)
  i852.startSize3D = !!i853[6]
  i852.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[7], i852.startSizeX)
  i852.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[8], i852.startSizeY)
  i852.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[9], i852.startSizeZ)
  i852.startRotation3D = !!i853[10]
  i852.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[11], i852.startRotationX)
  i852.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[12], i852.startRotationY)
  i852.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[13], i852.startRotationZ)
  i852.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i853[14], i852.startColor)
  i852.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[15], i852.gravityModifier)
  i852.simulationSpace = i853[16]
  request.r(i853[17], i853[18], 0, i852, 'customSimulationSpace')
  i852.simulationSpeed = i853[19]
  i852.useUnscaledTime = !!i853[20]
  i852.scalingMode = i853[21]
  i852.playOnAwake = !!i853[22]
  i852.maxParticles = i853[23]
  i852.emitterVelocityMode = i853[24]
  i852.stopAction = i853[25]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i854 = root || new pc.MinMaxCurve()
  var i855 = data
  i854.mode = i855[0]
  i854.curveMin = new pc.AnimationCurve( { keys_flow: i855[1] } )
  i854.curveMax = new pc.AnimationCurve( { keys_flow: i855[2] } )
  i854.curveMultiplier = i855[3]
  i854.constantMin = i855[4]
  i854.constantMax = i855[5]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i856 = root || new pc.MinMaxGradient()
  var i857 = data
  i856.mode = i857[0]
  i856.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i857[1], i856.gradientMin)
  i856.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i857[2], i856.gradientMax)
  i856.colorMin = new pc.Color(i857[3], i857[4], i857[5], i857[6])
  i856.colorMax = new pc.Color(i857[7], i857[8], i857[9], i857[10])
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i859 = data
  i858.mode = i859[0]
  var i861 = i859[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i861[i + 0]) );
  }
  i858.colorKeys = i860
  var i863 = i859[2]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i863[i + 0]) );
  }
  i858.alphaKeys = i862
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i864 = root || new pc.ParticleSystemColorBySpeed()
  var i865 = data
  i864.enabled = !!i865[0]
  i864.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i865[1], i864.color)
  i864.range = new pc.Vec2( i865[2], i865[3] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i869 = data
  i868.color = new pc.Color(i869[0], i869[1], i869[2], i869[3])
  i868.time = i869[4]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i873 = data
  i872.alpha = i873[0]
  i872.time = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemColorOverLifetime()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i875[1], i874.color)
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemEmitter()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[1], i876.rateOverTime)
  i876.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[2], i876.rateOverDistance)
  var i879 = i877[3]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i879[i + 0]) );
  }
  i876.bursts = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemBurst()
  var i883 = data
  i882.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[0], i882.count)
  i882.cycleCount = i883[1]
  i882.minCount = i883[2]
  i882.maxCount = i883[3]
  i882.repeatInterval = i883[4]
  i882.time = i883[5]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemRotationBySpeed()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.x)
  i884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.y)
  i884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.z)
  i884.separateAxes = !!i885[4]
  i884.range = new pc.Vec2( i885[5], i885[6] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemRotationOverLifetime()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.x)
  i886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.y)
  i886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.z)
  i886.separateAxes = !!i887[4]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemShape()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.shapeType = i889[1]
  i888.randomDirectionAmount = i889[2]
  i888.sphericalDirectionAmount = i889[3]
  i888.randomPositionAmount = i889[4]
  i888.alignToDirection = !!i889[5]
  i888.radius = i889[6]
  i888.radiusMode = i889[7]
  i888.radiusSpread = i889[8]
  i888.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[9], i888.radiusSpeed)
  i888.radiusThickness = i889[10]
  i888.angle = i889[11]
  i888.length = i889[12]
  i888.boxThickness = new pc.Vec3( i889[13], i889[14], i889[15] )
  i888.meshShapeType = i889[16]
  request.r(i889[17], i889[18], 0, i888, 'mesh')
  request.r(i889[19], i889[20], 0, i888, 'meshRenderer')
  request.r(i889[21], i889[22], 0, i888, 'skinnedMeshRenderer')
  i888.useMeshMaterialIndex = !!i889[23]
  i888.meshMaterialIndex = i889[24]
  i888.useMeshColors = !!i889[25]
  i888.normalOffset = i889[26]
  i888.arc = i889[27]
  i888.arcMode = i889[28]
  i888.arcSpread = i889[29]
  i888.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[30], i888.arcSpeed)
  i888.donutRadius = i889[31]
  i888.position = new pc.Vec3( i889[32], i889[33], i889[34] )
  i888.rotation = new pc.Vec3( i889[35], i889[36], i889[37] )
  i888.scale = new pc.Vec3( i889[38], i889[39], i889[40] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemSizeBySpeed()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.separateAxes = !!i891[4]
  i890.range = new pc.Vec2( i891[5], i891[6] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemSizeOverLifetime()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.mode = i895[1]
  i894.animation = i895[2]
  i894.numTilesX = i895[3]
  i894.numTilesY = i895[4]
  i894.useRandomRow = !!i895[5]
  i894.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[6], i894.frameOverTime)
  i894.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[7], i894.startFrame)
  i894.cycleCount = i895[8]
  i894.rowIndex = i895[9]
  i894.flipU = i895[10]
  i894.flipV = i895[11]
  i894.spriteCount = i895[12]
  var i897 = i895[13]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i894.sprites = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.x)
  i898.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.y)
  i898.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.z)
  i898.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[4], i898.radial)
  i898.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[5], i898.speedModifier)
  i898.space = i899[6]
  i898.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[7], i898.orbitalX)
  i898.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[8], i898.orbitalY)
  i898.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[9], i898.orbitalZ)
  i898.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[10], i898.orbitalOffsetX)
  i898.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[11], i898.orbitalOffsetY)
  i898.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[12], i898.orbitalOffsetZ)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemNoise()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.separateAxes = !!i901[1]
  i900.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.strengthX)
  i900.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[3], i900.strengthY)
  i900.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[4], i900.strengthZ)
  i900.frequency = i901[5]
  i900.damping = !!i901[6]
  i900.octaveCount = i901[7]
  i900.octaveMultiplier = i901[8]
  i900.octaveScale = i901[9]
  i900.quality = i901[10]
  i900.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[11], i900.scrollSpeed)
  i900.scrollSpeedMultiplier = i901[12]
  i900.remapEnabled = !!i901[13]
  i900.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[14], i900.remapX)
  i900.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[15], i900.remapY)
  i900.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[16], i900.remapZ)
  i900.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[17], i900.positionAmount)
  i900.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[18], i900.rotationAmount)
  i900.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[19], i900.sizeAmount)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemInheritVelocity()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.mode = i903[1]
  i902.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.curve)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemForceOverLifetime()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[1], i904.x)
  i904.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.y)
  i904.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.z)
  i904.space = i905[4]
  i904.randomized = !!i905[5]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.limit)
  i906.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.limitX)
  i906.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.limitY)
  i906.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[4], i906.limitZ)
  i906.dampen = i907[5]
  i906.separateAxes = !!i907[6]
  i906.space = i907[7]
  i906.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[8], i906.drag)
  i906.multiplyDragByParticleSize = !!i907[9]
  i906.multiplyDragByParticleVelocity = !!i907[10]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'mesh')
  i908.meshCount = i909[2]
  i908.activeVertexStreamsCount = i909[3]
  i908.alignment = i909[4]
  i908.renderMode = i909[5]
  i908.sortMode = i909[6]
  i908.lengthScale = i909[7]
  i908.velocityScale = i909[8]
  i908.cameraVelocityScale = i909[9]
  i908.normalDirection = i909[10]
  i908.sortingFudge = i909[11]
  i908.minParticleSize = i909[12]
  i908.maxParticleSize = i909[13]
  i908.pivot = new pc.Vec3( i909[14], i909[15], i909[16] )
  request.r(i909[17], i909[18], 0, i908, 'trailMaterial')
  i908.applyActiveColorSpace = !!i909[19]
  i908.enabled = !!i909[20]
  request.r(i909[21], i909[22], 0, i908, 'sharedMaterial')
  var i911 = i909[23]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.sharedMaterials = i910
  i908.receiveShadows = !!i909[24]
  i908.shadowCastingMode = i909[25]
  i908.sortingLayerID = i909[26]
  i908.sortingOrder = i909[27]
  i908.lightmapIndex = i909[28]
  i908.lightmapSceneIndex = i909[29]
  i908.lightmapScaleOffset = new pc.Vec4( i909[30], i909[31], i909[32], i909[33] )
  i908.lightProbeUsage = i909[34]
  i908.reflectionProbeUsage = i909[35]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i913 = data
  i912.name = i913[0]
  i912.atlasId = i913[1]
  i912.mipmapCount = i913[2]
  i912.hdr = !!i913[3]
  i912.size = i913[4]
  i912.anisoLevel = i913[5]
  i912.filterMode = i913[6]
  var i915 = i913[7]
  var i914 = []
  for(var i = 0; i < i915.length; i += 4) {
    i914.push( UnityEngine.Rect.MinMaxRect(i915[i + 0], i915[i + 1], i915[i + 2], i915[i + 3]) );
  }
  i912.rects = i914
  i912.wrapU = i913[8]
  i912.wrapV = i913[9]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i919 = data
  i918.name = i919[0]
  i918.index = i919[1]
  i918.startup = !!i919[2]
  return i918
}

Deserializers["BB10_MainObjControl"] = function (request, data, root) {
  var i920 = root || request.c( 'BB10_MainObjControl' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'colorControl')
  request.r(i921[2], i921[3], 0, i920, 'pattemCreater')
  request.r(i921[4], i921[5], 0, i920, 'nextViewerCtr')
  request.r(i921[6], i921[7], 0, i920, 'grid')
  request.r(i921[8], i921[9], 0, i920, 'planeViewCrt')
  request.r(i921[10], i921[11], 0, i920, 'groundView')
  request.r(i921[12], i921[13], 0, i920, 'camScript')
  request.r(i921[14], i921[15], 0, i920, 'scoreCtr')
  request.r(i921[16], i921[17], 0, i920, 'helpCtr')
  request.r(i921[18], i921[19], 0, i920, 'screenCtr')
  request.r(i921[20], i921[21], 0, i920, 'tutorial')
  request.r(i921[22], i921[23], 0, i920, 'cam')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i923 = data
  i922.aspect = i923[0]
  i922.orthographic = !!i923[1]
  i922.orthographicSize = i923[2]
  i922.backgroundColor = new pc.Color(i923[3], i923[4], i923[5], i923[6])
  i922.nearClipPlane = i923[7]
  i922.farClipPlane = i923[8]
  i922.fieldOfView = i923[9]
  i922.depth = i923[10]
  i922.clearFlags = i923[11]
  i922.cullingMask = i923[12]
  i922.rect = i923[13]
  request.r(i923[14], i923[15], 0, i922, 'targetTexture')
  i922.usePhysicalProperties = !!i923[16]
  i922.focalLength = i923[17]
  i922.sensorSize = new pc.Vec2( i923[18], i923[19] )
  i922.lensShift = new pc.Vec2( i923[20], i923[21] )
  i922.gateFit = i923[22]
  i922.commandBufferCount = i923[23]
  i922.cameraType = i923[24]
  i922.enabled = !!i923[25]
  return i922
}

Deserializers["CameraScript"] = function (request, data, root) {
  var i924 = root || request.c( 'CameraScript' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'cam')
  return i924
}

Deserializers["CameraResponsive"] = function (request, data, root) {
  var i926 = root || request.c( 'CameraResponsive' )
  var i927 = data
  i926.orthoSizeV = i927[0]
  i926.orthoSizeVTall = i927[1]
  i926.orthoSizeH = i927[2]
  i926.orthoSizeTab = i927[3]
  return i926
}

Deserializers["MainAudio"] = function (request, data, root) {
  var i928 = root || request.c( 'MainAudio' )
  var i929 = data
  var i931 = i929[0]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('InputAudio', i931[i + 0]) );
  }
  i928.listInputAudio = i930
  i928.isMute = !!i929[1]
  return i928
}

Deserializers["InputAudio"] = function (request, data, root) {
  var i934 = root || request.c( 'InputAudio' )
  var i935 = data
  i934.type = i935[0]
  request.r(i935[1], i935[2], 0, i934, 'audioClip')
  i934.loop = !!i935[3]
  i934.volume = i935[4]
  return i934
}

Deserializers["BB10_Grid"] = function (request, data, root) {
  var i936 = root || request.c( 'BB10_Grid' )
  var i937 = data
  i936.numberCol = i937[0]
  i936.numberRow = i937[1]
  i936.waitDelete = i937[2]
  i936.waitPerUnit = i937[3]
  i936.durationGray = i937[4]
  i936.nonGray = i937[5]
  i936.halfGray = i937[6]
  i936.fullGray = i937[7]
  i936.waitUnit = i937[8]
  request.r(i937[9], i937[10], 0, i936, 'completeText')
  i936.score = i937[11]
  request.r(i937[12], i937[13], 0, i936, 'cellPrefab')
  request.r(i937[14], i937[15], 0, i936, 'parentGrid')
  i936.cellSize = i937[16]
  i936.isCreateCell = !!i937[17]
  return i936
}

Deserializers["BB10_PattemCreater"] = function (request, data, root) {
  var i938 = root || request.c( 'BB10_PattemCreater' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'cubePrefab')
  var i941 = i939[2]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i938.listCube = i940
  request.r(i939[3], i939[4], 0, i938, 'pattemDataSave')
  return i938
}

Deserializers["BB10_PlaneView"] = function (request, data, root) {
  var i944 = root || request.c( 'BB10_PlaneView' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'camera')
  i944.y = i945[2]
  i944.scale = i945[3]
  i944.scaleSmall = i945[4]
  i944.distanceTouch = i945[5]
  i944.duration = i945[6]
  request.r(i945[7], i945[8], 0, i944, 'cam')
  var i947 = i945[9]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 1, i946, '')
  }
  i944.listBlock = i946
  i944.selected = i945[10]
  i944.isScaling = !!i945[11]
  i944.groundAcepted = !!i945[12]
  i944.faceMousePos = new pc.Vec2( i945[13], i945[14] )
  i944.isAuto = !!i945[15]
  i944.state = i945[16]
  i944.speedMoveDrop = i945[17]
  return i944
}

Deserializers["BB10_GroundView"] = function (request, data, root) {
  var i948 = root || request.c( 'BB10_GroundView' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'groundPrefab')
  var i951 = i949[2]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 1, i950, '')
  }
  i948.listBlockRender = i950
  return i948
}

Deserializers["BB10_NextViewerControl"] = function (request, data, root) {
  var i954 = root || request.c( 'BB10_NextViewerControl' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'pattemTableObj')
  request.r(i955[2], i955[3], 0, i954, 'spawnData')
  var i957 = i955[4]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.listView = i956
  var i959 = i955[5]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 1, i958, '')
  }
  i954.listUnit0 = i958
  var i961 = i955[6]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i954.listUnit1 = i960
  var i963 = i955[7]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i954.listUnit2 = i962
  return i954
}

Deserializers["BB10_NextViewer"] = function (request, data, root) {
  var i966 = root || request.c( 'BB10_NextViewer' )
  var i967 = data
  i966.index = i967[0]
  i966.scale = i967[1]
  i966.durationLight = i967[2]
  i966.duration = i967[3]
  i966.durationIn = i967[4]
  i966.myType = i967[5]
  i966.rotateTime = i967[6]
  var i969 = i967[7]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i966.listBlock = i968
  i966.state = i967[8]
  i966.startPos1 = new pc.Vec2( i967[9], i967[10] )
  i966.startPos2 = new pc.Vec2( i967[11], i967[12] )
  i966.ac1 = new pc.AnimationCurve( { keys_flow: i967[13] } )
  i966.ac2 = new pc.AnimationCurve( { keys_flow: i967[14] } )
  return i966
}

Deserializers["BB10_ScoreCtr"] = function (request, data, root) {
  var i970 = root || request.c( 'BB10_ScoreCtr' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'scorePrefab')
  var i973 = i971[2]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextMesh')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i970.listText = i972
  i970.startColor = new pc.Color(i971[3], i971[4], i971[5], i971[6])
  i970.endColor = new pc.Color(i971[7], i971[8], i971[9], i971[10])
  request.r(i971[11], i971[12], 0, i970, 'mat')
  i970.speed0 = i971[13]
  i970.G = i971[14]
  i970.duration = i971[15]
  return i970
}

Deserializers["BB10_ShowHelpCtr"] = function (request, data, root) {
  var i976 = root || request.c( 'BB10_ShowHelpCtr' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'groundPrefab')
  var i979 = i977[2]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i976.listBlockDisable = i978
  var i981 = i977[3]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i976.listBlockActive = i980
  return i976
}

Deserializers["BB10_Tutorial"] = function (request, data, root) {
  var i984 = root || request.c( 'BB10_Tutorial' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'finger')
  request.r(i985[2], i985[3], 0, i984, 'circle')
  i984.durationMoveUp = i985[4]
  i984.durationMoveDown = i985[5]
  i984.durationScale = i985[6]
  i984.durationMoveShort = i985[7]
  i984.state = i985[8]
  return i984
}

Deserializers["BB10_ScreenCtr"] = function (request, data, root) {
  var i986 = root || request.c( 'BB10_ScreenCtr' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'BgUnit')
  request.r(i987[2], i987[3], 0, i986, 'topRec')
  request.r(i987[4], i987[5], 0, i986, 'bottomTrans')
  var i989 = i987[6]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.listPattemTrans = i988
  i986.defaultPattemY = i987[7]
  i986.defaultPattemUIY = i987[8]
  i986.orthographicSizeMin = i987[9]
  request.r(i987[10], i987[11], 0, i986, 'cam')
  i986.distanceEdge = i987[12]
  i986.durationFadeIn = i987[13]
  i986.distanceMoveFade = i987[14]
  i986.startAlpha = i987[15]
  i986.F = i987[16]
  i986.FUI = i987[17]
  request.r(i987[18], i987[19], 0, i986, 'BG')
  i986.targetAlpha = i987[20]
  request.r(i987[21], i987[22], 0, i986, 'partTop')
  request.r(i987[23], i987[24], 0, i986, 'partDown')
  request.r(i987[25], i987[26], 0, i986, 'partLeft')
  request.r(i987[27], i987[28], 0, i986, 'partRight')
  var i991 = i987[29]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i986.grid = i990
  i986.gridMoving = !!i987[30]
  i986.waitStep = i987[31]
  i986.durationScaleUp = i987[32]
  i986.acScale = new pc.AnimationCurve( { keys_flow: i987[33] } )
  request.r(i987[34], i987[35], 0, i986, 'parentCell')
  return i986
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i994 = root || request.c( 'GamePlayManager' )
  var i995 = data
  i994.score = i995[0]
  i994.target = i995[1]
  i994.totalClick = i995[2]
  i994.countClick = i995[3]
  request.r(i995[4], i995[5], 0, i994, 'textProScore')
  request.r(i995[6], i995[7], 0, i994, 'textProTarget')
  request.r(i995[8], i995[9], 0, i994, 'textScore')
  request.r(i995[10], i995[11], 0, i994, 'textTarget')
  request.r(i995[12], i995[13], 0, i994, 'win')
  request.r(i995[14], i995[15], 0, i994, 'lose')
  i994.isFinishGame = !!i995[16]
  return i994
}

Deserializers["ResponsiveManager"] = function (request, data, root) {
  var i996 = root || request.c( 'ResponsiveManager' )
  var i997 = data
  i996.screenType = i997[0]
  return i996
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i998 = root || request.c( 'TutorialManager' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'groundView')
  request.r(i999[2], i999[3], 0, i998, 'firstBlock')
  request.r(i999[4], i999[5], 0, i998, 'Hand')
  i998.idleTimer = i999[6]
  i998.idleTimeToShow = i999[7]
  request.r(i999[8], i999[9], 0, i998, 'blockTutorial')
  var i1001 = i999[10]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_NextViewer')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i998.nextViewers = i1000
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1005 = data
  i1004.type = i1005[0]
  i1004.color = new pc.Color(i1005[1], i1005[2], i1005[3], i1005[4])
  i1004.cullingMask = i1005[5]
  i1004.intensity = i1005[6]
  i1004.range = i1005[7]
  i1004.spotAngle = i1005[8]
  i1004.shadows = i1005[9]
  i1004.shadowNormalBias = i1005[10]
  i1004.shadowBias = i1005[11]
  i1004.shadowStrength = i1005[12]
  i1004.shadowResolution = i1005[13]
  i1004.lightmapBakeType = i1005[14]
  i1004.renderMode = i1005[15]
  request.r(i1005[16], i1005[17], 0, i1004, 'cookie')
  i1004.cookieSize = i1005[18]
  i1004.enabled = !!i1005[19]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1007 = data
  i1006.pivot = new pc.Vec2( i1007[0], i1007[1] )
  i1006.anchorMin = new pc.Vec2( i1007[2], i1007[3] )
  i1006.anchorMax = new pc.Vec2( i1007[4], i1007[5] )
  i1006.sizeDelta = new pc.Vec2( i1007[6], i1007[7] )
  i1006.anchoredPosition3D = new pc.Vec3( i1007[8], i1007[9], i1007[10] )
  i1006.rotation = new pc.Quat(i1007[11], i1007[12], i1007[13], i1007[14])
  i1006.scale = new pc.Vec3( i1007[15], i1007[16], i1007[17] )
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1009 = data
  i1008.planeDistance = i1009[0]
  i1008.referencePixelsPerUnit = i1009[1]
  i1008.isFallbackOverlay = !!i1009[2]
  i1008.renderMode = i1009[3]
  i1008.renderOrder = i1009[4]
  i1008.sortingLayerName = i1009[5]
  i1008.sortingOrder = i1009[6]
  i1008.scaleFactor = i1009[7]
  request.r(i1009[8], i1009[9], 0, i1008, 'worldCamera')
  i1008.overrideSorting = !!i1009[10]
  i1008.pixelPerfect = !!i1009[11]
  i1008.targetDisplay = i1009[12]
  i1008.overridePixelPerfect = !!i1009[13]
  i1008.enabled = !!i1009[14]
  return i1008
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1011 = data
  i1010.m_UiScaleMode = i1011[0]
  i1010.m_ReferencePixelsPerUnit = i1011[1]
  i1010.m_ScaleFactor = i1011[2]
  i1010.m_ReferenceResolution = new pc.Vec2( i1011[3], i1011[4] )
  i1010.m_ScreenMatchMode = i1011[5]
  i1010.m_MatchWidthOrHeight = i1011[6]
  i1010.m_PhysicalUnit = i1011[7]
  i1010.m_FallbackScreenDPI = i1011[8]
  i1010.m_DefaultSpriteDPI = i1011[9]
  i1010.m_DynamicPixelsPerUnit = i1011[10]
  i1010.m_PresetInfoIsWorld = !!i1011[11]
  return i1010
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1013 = data
  i1012.m_IgnoreReversedGraphics = !!i1013[0]
  i1012.m_BlockingObjects = i1013[1]
  i1012.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1013[2] )
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1015 = data
  i1014.cullTransparentMesh = !!i1015[0]
  return i1014
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.Image' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_Sprite')
  i1016.m_Type = i1017[2]
  i1016.m_PreserveAspect = !!i1017[3]
  i1016.m_FillCenter = !!i1017[4]
  i1016.m_FillMethod = i1017[5]
  i1016.m_FillAmount = i1017[6]
  i1016.m_FillClockwise = !!i1017[7]
  i1016.m_FillOrigin = i1017[8]
  i1016.m_UseSpriteMesh = !!i1017[9]
  i1016.m_PixelsPerUnitMultiplier = i1017[10]
  i1016.m_Maskable = !!i1017[11]
  request.r(i1017[12], i1017[13], 0, i1016, 'm_Material')
  i1016.m_Color = new pc.Color(i1017[14], i1017[15], i1017[16], i1017[17])
  i1016.m_RaycastTarget = !!i1017[18]
  i1016.m_RaycastPadding = new pc.Vec4( i1017[19], i1017[20], i1017[21], i1017[22] )
  return i1016
}

Deserializers["BB10_MainCanvasUI"] = function (request, data, root) {
  var i1018 = root || request.c( 'BB10_MainCanvasUI' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'inGameScript')
  request.r(i1019[2], i1019[3], 0, i1018, 'faderScript')
  i1018.OnDropPiece = request.d('System.Action', i1019[4], i1018.OnDropPiece)
  request.r(i1019[5], i1019[6], 0, i1018, 'blur')
  i1018.OnNeedStopAdBreak = request.d('System.Action', i1019[7], i1018.OnNeedStopAdBreak)
  return i1018
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1020 = root || request.c( 'System.Action' )
  var i1021 = data
  return i1020
}

Deserializers["ResponsiveWorld"] = function (request, data, root) {
  var i1022 = root || request.c( 'ResponsiveWorld' )
  var i1023 = data
  i1022.positionVertical = new pc.Vec3( i1023[0], i1023[1], i1023[2] )
  i1022.positionVerticalTall = new pc.Vec3( i1023[3], i1023[4], i1023[5] )
  i1022.positionHorizontal = new pc.Vec3( i1023[6], i1023[7], i1023[8] )
  i1022.positionTablet = new pc.Vec3( i1023[9], i1023[10], i1023[11] )
  return i1022
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.Text' )
  var i1025 = data
  i1024.m_FontData = request.d('UnityEngine.UI.FontData', i1025[0], i1024.m_FontData)
  i1024.m_Text = i1025[1]
  i1024.m_Maskable = !!i1025[2]
  request.r(i1025[3], i1025[4], 0, i1024, 'm_Material')
  i1024.m_Color = new pc.Color(i1025[5], i1025[6], i1025[7], i1025[8])
  i1024.m_RaycastTarget = !!i1025[9]
  i1024.m_RaycastPadding = new pc.Vec4( i1025[10], i1025[11], i1025[12], i1025[13] )
  return i1024
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'm_Font')
  i1026.m_FontSize = i1027[2]
  i1026.m_FontStyle = i1027[3]
  i1026.m_BestFit = !!i1027[4]
  i1026.m_MinSize = i1027[5]
  i1026.m_MaxSize = i1027[6]
  i1026.m_Alignment = i1027[7]
  i1026.m_AlignByGeometry = !!i1027[8]
  i1026.m_RichText = !!i1027[9]
  i1026.m_HorizontalOverflow = i1027[10]
  i1026.m_VerticalOverflow = i1027[11]
  i1026.m_LineSpacing = i1027[12]
  return i1026
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.UI.Button' )
  var i1029 = data
  i1028.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1029[0], i1028.m_OnClick)
  i1028.m_Navigation = request.d('UnityEngine.UI.Navigation', i1029[1], i1028.m_Navigation)
  i1028.m_Transition = i1029[2]
  i1028.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1029[3], i1028.m_Colors)
  i1028.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1029[4], i1028.m_SpriteState)
  i1028.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1029[5], i1028.m_AnimationTriggers)
  i1028.m_Interactable = !!i1029[6]
  request.r(i1029[7], i1029[8], 0, i1028, 'm_TargetGraphic')
  return i1028
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1031 = data
  i1030.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1031[0], i1030.m_PersistentCalls)
  return i1030
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('UnityEngine.Events.PersistentCall', i1035[i + 0]));
  }
  i1032.m_Calls = i1034
  return i1032
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'm_Target')
  i1038.m_TargetAssemblyTypeName = i1039[2]
  i1038.m_MethodName = i1039[3]
  i1038.m_Mode = i1039[4]
  i1038.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1039[5], i1038.m_Arguments)
  i1038.m_CallState = i1039[6]
  return i1038
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'm_ObjectArgument')
  i1040.m_ObjectArgumentAssemblyTypeName = i1041[2]
  i1040.m_IntArgument = i1041[3]
  i1040.m_FloatArgument = i1041[4]
  i1040.m_StringArgument = i1041[5]
  i1040.m_BoolArgument = !!i1041[6]
  return i1040
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1043 = data
  i1042.m_Mode = i1043[0]
  i1042.m_WrapAround = !!i1043[1]
  request.r(i1043[2], i1043[3], 0, i1042, 'm_SelectOnUp')
  request.r(i1043[4], i1043[5], 0, i1042, 'm_SelectOnDown')
  request.r(i1043[6], i1043[7], 0, i1042, 'm_SelectOnLeft')
  request.r(i1043[8], i1043[9], 0, i1042, 'm_SelectOnRight')
  return i1042
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1045 = data
  i1044.m_NormalColor = new pc.Color(i1045[0], i1045[1], i1045[2], i1045[3])
  i1044.m_HighlightedColor = new pc.Color(i1045[4], i1045[5], i1045[6], i1045[7])
  i1044.m_PressedColor = new pc.Color(i1045[8], i1045[9], i1045[10], i1045[11])
  i1044.m_SelectedColor = new pc.Color(i1045[12], i1045[13], i1045[14], i1045[15])
  i1044.m_DisabledColor = new pc.Color(i1045[16], i1045[17], i1045[18], i1045[19])
  i1044.m_ColorMultiplier = i1045[20]
  i1044.m_FadeDuration = i1045[21]
  return i1044
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'm_HighlightedSprite')
  request.r(i1047[2], i1047[3], 0, i1046, 'm_PressedSprite')
  request.r(i1047[4], i1047[5], 0, i1046, 'm_SelectedSprite')
  request.r(i1047[6], i1047[7], 0, i1046, 'm_DisabledSprite')
  return i1046
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1049 = data
  i1048.m_NormalTrigger = i1049[0]
  i1048.m_HighlightedTrigger = i1049[1]
  i1048.m_PressedTrigger = i1049[2]
  i1048.m_SelectedTrigger = i1049[3]
  i1048.m_DisabledTrigger = i1049[4]
  return i1048
}

Deserializers["CTAButton"] = function (request, data, root) {
  var i1050 = root || request.c( 'CTAButton' )
  var i1051 = data
  return i1050
}

Deserializers["ScaleElement"] = function (request, data, root) {
  var i1052 = root || request.c( 'ScaleElement' )
  var i1053 = data
  i1052.animationDuration = i1053[0]
  i1052.delay = i1053[1]
  i1052.targetScale = new pc.Vec3( i1053[2], i1053[3], i1053[4] )
  return i1052
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1055 = data
  i1054.m_hasFontAssetChanged = !!i1055[0]
  request.r(i1055[1], i1055[2], 0, i1054, 'm_baseMaterial')
  i1054.m_maskOffset = new pc.Vec4( i1055[3], i1055[4], i1055[5], i1055[6] )
  i1054.m_text = i1055[7]
  i1054.m_isRightToLeft = !!i1055[8]
  request.r(i1055[9], i1055[10], 0, i1054, 'm_fontAsset')
  request.r(i1055[11], i1055[12], 0, i1054, 'm_sharedMaterial')
  var i1057 = i1055[13]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1054.m_fontSharedMaterials = i1056
  request.r(i1055[14], i1055[15], 0, i1054, 'm_fontMaterial')
  var i1059 = i1055[16]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 2, i1058, '')
  }
  i1054.m_fontMaterials = i1058
  i1054.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1055[17], i1055[18], i1055[19], i1055[20])
  i1054.m_fontColor = new pc.Color(i1055[21], i1055[22], i1055[23], i1055[24])
  i1054.m_enableVertexGradient = !!i1055[25]
  i1054.m_colorMode = i1055[26]
  i1054.m_fontColorGradient = request.d('TMPro.VertexGradient', i1055[27], i1054.m_fontColorGradient)
  request.r(i1055[28], i1055[29], 0, i1054, 'm_fontColorGradientPreset')
  request.r(i1055[30], i1055[31], 0, i1054, 'm_spriteAsset')
  i1054.m_tintAllSprites = !!i1055[32]
  request.r(i1055[33], i1055[34], 0, i1054, 'm_StyleSheet')
  i1054.m_TextStyleHashCode = i1055[35]
  i1054.m_overrideHtmlColors = !!i1055[36]
  i1054.m_faceColor = UnityEngine.Color32.ConstructColor(i1055[37], i1055[38], i1055[39], i1055[40])
  i1054.m_fontSize = i1055[41]
  i1054.m_fontSizeBase = i1055[42]
  i1054.m_fontWeight = i1055[43]
  i1054.m_enableAutoSizing = !!i1055[44]
  i1054.m_fontSizeMin = i1055[45]
  i1054.m_fontSizeMax = i1055[46]
  i1054.m_fontStyle = i1055[47]
  i1054.m_HorizontalAlignment = i1055[48]
  i1054.m_VerticalAlignment = i1055[49]
  i1054.m_textAlignment = i1055[50]
  i1054.m_characterSpacing = i1055[51]
  i1054.m_wordSpacing = i1055[52]
  i1054.m_lineSpacing = i1055[53]
  i1054.m_lineSpacingMax = i1055[54]
  i1054.m_paragraphSpacing = i1055[55]
  i1054.m_charWidthMaxAdj = i1055[56]
  i1054.m_enableWordWrapping = !!i1055[57]
  i1054.m_wordWrappingRatios = i1055[58]
  i1054.m_overflowMode = i1055[59]
  request.r(i1055[60], i1055[61], 0, i1054, 'm_linkedTextComponent')
  request.r(i1055[62], i1055[63], 0, i1054, 'parentLinkedComponent')
  i1054.m_enableKerning = !!i1055[64]
  i1054.m_enableExtraPadding = !!i1055[65]
  i1054.checkPaddingRequired = !!i1055[66]
  i1054.m_isRichText = !!i1055[67]
  i1054.m_parseCtrlCharacters = !!i1055[68]
  i1054.m_isOrthographic = !!i1055[69]
  i1054.m_isCullingEnabled = !!i1055[70]
  i1054.m_horizontalMapping = i1055[71]
  i1054.m_verticalMapping = i1055[72]
  i1054.m_uvLineOffset = i1055[73]
  i1054.m_geometrySortingOrder = i1055[74]
  i1054.m_IsTextObjectScaleStatic = !!i1055[75]
  i1054.m_VertexBufferAutoSizeReduction = !!i1055[76]
  i1054.m_useMaxVisibleDescender = !!i1055[77]
  i1054.m_pageToDisplay = i1055[78]
  i1054.m_margin = new pc.Vec4( i1055[79], i1055[80], i1055[81], i1055[82] )
  i1054.m_isUsingLegacyAnimationComponent = !!i1055[83]
  i1054.m_isVolumetricText = !!i1055[84]
  i1054.m_Maskable = !!i1055[85]
  request.r(i1055[86], i1055[87], 0, i1054, 'm_Material')
  i1054.m_Color = new pc.Color(i1055[88], i1055[89], i1055[90], i1055[91])
  i1054.m_RaycastTarget = !!i1055[92]
  i1054.m_RaycastPadding = new pc.Vec4( i1055[93], i1055[94], i1055[95], i1055[96] )
  return i1054
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1060 = root || request.c( 'TMPro.VertexGradient' )
  var i1061 = data
  i1060.topLeft = new pc.Color(i1061[0], i1061[1], i1061[2], i1061[3])
  i1060.topRight = new pc.Color(i1061[4], i1061[5], i1061[6], i1061[7])
  i1060.bottomLeft = new pc.Color(i1061[8], i1061[9], i1061[10], i1061[11])
  i1060.bottomRight = new pc.Color(i1061[12], i1061[13], i1061[14], i1061[15])
  return i1060
}

Deserializers["BB10_InGameScript"] = function (request, data, root) {
  var i1062 = root || request.c( 'BB10_InGameScript' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'rec')
  request.r(i1063[2], i1063[3], 0, i1062, 'scoreTxt')
  request.r(i1063[4], i1063[5], 0, i1062, 'bestTxt')
  i1062.scoreInt = i1063[6]
  i1062.bestInt = i1063[7]
  request.r(i1063[8], i1063[9], 0, i1062, 'group')
  request.r(i1063[10], i1063[11], 0, i1062, 'blur_1')
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1065 = data
  i1064.m_Alpha = i1065[0]
  i1064.m_Interactable = !!i1065[1]
  i1064.m_BlocksRaycasts = !!i1065[2]
  i1064.m_IgnoreParentGroups = !!i1065[3]
  i1064.enabled = !!i1065[4]
  return i1064
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'm_FirstSelected')
  i1066.m_sendNavigationEvents = !!i1067[2]
  i1066.m_DragThreshold = i1067[3]
  return i1066
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1069 = data
  i1068.m_HorizontalAxis = i1069[0]
  i1068.m_VerticalAxis = i1069[1]
  i1068.m_SubmitButton = i1069[2]
  i1068.m_CancelButton = i1069[3]
  i1068.m_InputActionsPerSecond = i1069[4]
  i1068.m_RepeatDelay = i1069[5]
  i1068.m_ForceModuleActive = !!i1069[6]
  i1068.m_SendPointerHoverToParent = !!i1069[7]
  return i1068
}

Deserializers["BB10_FaderHandler"] = function (request, data, root) {
  var i1070 = root || request.c( 'BB10_FaderHandler' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'image')
  i1070.durationFade = i1071[2]
  i1070.durationFadeOut = i1071[3]
  i1070.durationSwich = i1071[4]
  return i1070
}

Deserializers["BB10_HomeController"] = function (request, data, root) {
  var i1072 = root || request.c( 'BB10_HomeController' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'group')
  return i1072
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'm_FillRect')
  request.r(i1075[2], i1075[3], 0, i1074, 'm_HandleRect')
  i1074.m_Direction = i1075[4]
  i1074.m_MinValue = i1075[5]
  i1074.m_MaxValue = i1075[6]
  i1074.m_WholeNumbers = !!i1075[7]
  i1074.m_Value = i1075[8]
  i1074.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1075[9], i1074.m_OnValueChanged)
  i1074.m_Navigation = request.d('UnityEngine.UI.Navigation', i1075[10], i1074.m_Navigation)
  i1074.m_Transition = i1075[11]
  i1074.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1075[12], i1074.m_Colors)
  i1074.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1075[13], i1074.m_SpriteState)
  i1074.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1075[14], i1074.m_AnimationTriggers)
  i1074.m_Interactable = !!i1075[15]
  request.r(i1075[16], i1075[17], 0, i1074, 'm_TargetGraphic')
  return i1074
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1077 = data
  i1076.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1077[0], i1076.m_PersistentCalls)
  return i1076
}

Deserializers["TimerProgress"] = function (request, data, root) {
  var i1078 = root || request.c( 'TimerProgress' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'fillImageRed')
  request.r(i1079[2], i1079[3], 0, i1078, 'fillImage')
  request.r(i1079[4], i1079[5], 0, i1078, 'slider')
  i1078.timer = i1079[6]
  request.r(i1079[7], i1079[8], 0, i1078, 'timerText')
  i1078.haveTimer = !!i1079[9]
  request.r(i1079[10], i1079[11], 0, i1078, 'warningSprite')
  i1078.timeWarning = i1079[12]
  i1078.warningSoundTimer = i1079[13]
  i1078.isFormatTimeMMSS = !!i1079[14]
  return i1078
}

Deserializers["UITweenElement"] = function (request, data, root) {
  var i1080 = root || request.c( 'UITweenElement' )
  var i1081 = data
  i1080.tweenData = request.d('TweenData', i1081[0], i1080.tweenData)
  i1080.playOnAwake = !!i1081[1]
  return i1080
}

Deserializers["TweenData"] = function (request, data, root) {
  var i1082 = root || request.c( 'TweenData' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'target')
  request.r(i1083[2], i1083[3], 0, i1082, 'configSO')
  i1082.custom = !!i1083[4]
  i1082.config = request.d('TweenConfig', i1083[5], i1082.config)
  i1082.OnCompleted = request.d('System.Action', i1083[6], i1082.OnCompleted)
  return i1082
}

Deserializers["TweenConfig"] = function (request, data, root) {
  var i1084 = root || request.c( 'TweenConfig' )
  var i1085 = data
  i1084.tweenType = i1085[0]
  i1084.from = i1085[1]
  i1084.to = i1085[2]
  i1084.mFrom = new pc.Vec3( i1085[3], i1085[4], i1085[5] )
  i1084.mTo = new pc.Vec3( i1085[6], i1085[7], i1085[8] )
  i1084.duration = i1085[9]
  i1084.delay = i1085[10]
  i1084.curve = new pc.AnimationCurve( { keys_flow: i1085[11] } )
  return i1084
}

Deserializers["TextMeshProController"] = function (request, data, root) {
  var i1086 = root || request.c( 'TextMeshProController' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'textMeshPro')
  i1086.useCurve = !!i1087[2]
  i1086.radius = i1087[3]
  i1086.arcAngle = i1087[4]
  i1086.playOnEnable = !!i1087[5]
  i1086.animDuration = i1087[6]
  i1086.delayBetweenChars = i1087[7]
  i1086.scaleCurve = new pc.AnimationCurve( { keys_flow: i1087[8] } )
  return i1086
}

Deserializers["BB10_LostScript"] = function (request, data, root) {
  var i1088 = root || request.c( 'BB10_LostScript' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'scoreText')
  request.r(i1089[2], i1089[3], 0, i1088, 'bestText')
  request.r(i1089[4], i1089[5], 0, i1088, 'group')
  i1088.isAuto = !!i1089[6]
  request.r(i1089[7], i1089[8], 0, i1088, 'cupShaker')
  request.r(i1089[9], i1089[10], 0, i1088, 'listViewAdsPannel')
  return i1088
}

Deserializers["BB10_PopupRate"] = function (request, data, root) {
  var i1090 = root || request.c( 'BB10_PopupRate' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_RateStar')))
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 1, i1092, '')
  }
  i1090.starList = i1092
  request.r(i1091[1], i1091[2], 0, i1090, 'submit')
  request.r(i1091[3], i1091[4], 0, i1090, 'textRate')
  request.r(i1091[5], i1091[6], 0, i1090, 'starOn')
  request.r(i1091[7], i1091[8], 0, i1090, 'starOff')
  i1090.starNumber = i1091[9]
  request.r(i1091[10], i1091[11], 0, i1090, 'popup')
  request.r(i1091[12], i1091[13], 0, i1090, 'pannel')
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1097 = data
  i1096.ambientIntensity = i1097[0]
  i1096.reflectionIntensity = i1097[1]
  i1096.ambientMode = i1097[2]
  i1096.ambientLight = new pc.Color(i1097[3], i1097[4], i1097[5], i1097[6])
  i1096.ambientSkyColor = new pc.Color(i1097[7], i1097[8], i1097[9], i1097[10])
  i1096.ambientGroundColor = new pc.Color(i1097[11], i1097[12], i1097[13], i1097[14])
  i1096.ambientEquatorColor = new pc.Color(i1097[15], i1097[16], i1097[17], i1097[18])
  i1096.fogColor = new pc.Color(i1097[19], i1097[20], i1097[21], i1097[22])
  i1096.fogEndDistance = i1097[23]
  i1096.fogStartDistance = i1097[24]
  i1096.fogDensity = i1097[25]
  i1096.fog = !!i1097[26]
  request.r(i1097[27], i1097[28], 0, i1096, 'skybox')
  i1096.fogMode = i1097[29]
  var i1099 = i1097[30]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1099[i + 0]) );
  }
  i1096.lightmaps = i1098
  i1096.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1097[31], i1096.lightProbes)
  i1096.lightmapsMode = i1097[32]
  i1096.mixedBakeMode = i1097[33]
  i1096.environmentLightingMode = i1097[34]
  i1096.ambientProbe = new pc.SphericalHarmonicsL2(i1097[35])
  i1096.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1097[36])
  i1096.useReferenceAmbientProbe = !!i1097[37]
  request.r(i1097[38], i1097[39], 0, i1096, 'customReflection')
  request.r(i1097[40], i1097[41], 0, i1096, 'defaultReflection')
  i1096.defaultReflectionMode = i1097[42]
  i1096.defaultReflectionResolution = i1097[43]
  i1096.sunLightObjectId = i1097[44]
  i1096.pixelLightCount = i1097[45]
  i1096.defaultReflectionHDR = !!i1097[46]
  i1096.hasLightDataAsset = !!i1097[47]
  i1096.hasManualGenerate = !!i1097[48]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'lightmapColor')
  request.r(i1103[2], i1103[3], 0, i1102, 'lightmapDirection')
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1104 = root || new UnityEngine.LightProbes()
  var i1105 = data
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1115[i + 0]));
  }
  i1112.ShaderCompilationErrors = i1114
  i1112.name = i1113[1]
  i1112.guid = i1113[2]
  var i1117 = i1113[3]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1112.shaderDefinedKeywords = i1116
  var i1119 = i1113[4]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1119[i + 0]) );
  }
  i1112.passes = i1118
  var i1121 = i1113[5]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1121[i + 0]) );
  }
  i1112.usePasses = i1120
  var i1123 = i1113[6]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1123[i + 0]) );
  }
  i1112.defaultParameterValues = i1122
  request.r(i1113[7], i1113[8], 0, i1112, 'unityFallbackShader')
  i1112.readDepth = !!i1113[9]
  i1112.isCreatedByShaderGraph = !!i1113[10]
  i1112.disableBatching = !!i1113[11]
  i1112.compiled = !!i1113[12]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1127 = data
  i1126.shaderName = i1127[0]
  i1126.errorMessage = i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1132 = root || new pc.UnityShaderPass()
  var i1133 = data
  i1132.id = i1133[0]
  i1132.subShaderIndex = i1133[1]
  i1132.name = i1133[2]
  i1132.passType = i1133[3]
  i1132.grabPassTextureName = i1133[4]
  i1132.usePass = !!i1133[5]
  i1132.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[6], i1132.zTest)
  i1132.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[7], i1132.zWrite)
  i1132.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[8], i1132.culling)
  i1132.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1133[9], i1132.blending)
  i1132.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1133[10], i1132.alphaBlending)
  i1132.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[11], i1132.colorWriteMask)
  i1132.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[12], i1132.offsetUnits)
  i1132.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[13], i1132.offsetFactor)
  i1132.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[14], i1132.stencilRef)
  i1132.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[15], i1132.stencilReadMask)
  i1132.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[16], i1132.stencilWriteMask)
  i1132.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1133[17], i1132.stencilOp)
  i1132.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1133[18], i1132.stencilOpFront)
  i1132.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1133[19], i1132.stencilOpBack)
  var i1135 = i1133[20]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1135[i + 0]) );
  }
  i1132.tags = i1134
  var i1137 = i1133[21]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1132.passDefinedKeywords = i1136
  var i1139 = i1133[22]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1139[i + 0]) );
  }
  i1132.passDefinedKeywordGroups = i1138
  var i1141 = i1133[23]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1141[i + 0]) );
  }
  i1132.variants = i1140
  var i1143 = i1133[24]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1143[i + 0]) );
  }
  i1132.excludedVariants = i1142
  i1132.hasDepthReader = !!i1133[25]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1145 = data
  i1144.val = i1145[0]
  i1144.name = i1145[1]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1147 = data
  i1146.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[0], i1146.src)
  i1146.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[1], i1146.dst)
  i1146.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[2], i1146.op)
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1149 = data
  i1148.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[0], i1148.pass)
  i1148.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[1], i1148.fail)
  i1148.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[2], i1148.zFail)
  i1148.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[3], i1148.comp)
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1153 = data
  i1152.name = i1153[0]
  i1152.value = i1153[1]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1156.keywords = i1158
  i1156.hasDiscard = !!i1157[1]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1163 = data
  i1162.passId = i1163[0]
  i1162.subShaderIndex = i1163[1]
  var i1165 = i1163[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1162.keywords = i1164
  i1162.vertexProgram = i1163[3]
  i1162.fragmentProgram = i1163[4]
  i1162.exportedForWebGl2 = !!i1163[5]
  i1162.readDepth = !!i1163[6]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'shader')
  i1168.pass = i1169[2]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1173 = data
  i1172.name = i1173[0]
  i1172.type = i1173[1]
  i1172.value = new pc.Vec4( i1173[2], i1173[3], i1173[4], i1173[5] )
  i1172.textureValue = i1173[6]
  i1172.shaderPropertyFlag = i1173[7]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1175 = data
  i1174.name = i1175[0]
  request.r(i1175[1], i1175[2], 0, i1174, 'texture')
  i1174.aabb = i1175[3]
  i1174.vertices = i1175[4]
  i1174.triangles = i1175[5]
  i1174.textureRect = UnityEngine.Rect.MinMaxRect(i1175[6], i1175[7], i1175[8], i1175[9])
  i1174.packedRect = UnityEngine.Rect.MinMaxRect(i1175[10], i1175[11], i1175[12], i1175[13])
  i1174.border = new pc.Vec4( i1175[14], i1175[15], i1175[16], i1175[17] )
  i1174.transparency = i1175[18]
  i1174.bounds = i1175[19]
  i1174.pixelsPerUnit = i1175[20]
  i1174.textureWidth = i1175[21]
  i1174.textureHeight = i1175[22]
  i1174.nativeSize = new pc.Vec2( i1175[23], i1175[24] )
  i1174.pivot = new pc.Vec2( i1175[25], i1175[26] )
  i1174.textureRectOffset = new pc.Vec2( i1175[27], i1175[28] )
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1177 = data
  i1176.name = i1177[0]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.wrapMode = i1179[1]
  i1178.isLooping = !!i1179[2]
  i1178.length = i1179[3]
  var i1181 = i1179[4]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1181[i + 0]) );
  }
  i1178.curves = i1180
  var i1183 = i1179[5]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1183[i + 0]) );
  }
  i1178.events = i1182
  i1178.halfPrecision = !!i1179[6]
  i1178._frameRate = i1179[7]
  i1178.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1179[8], i1178.localBounds)
  i1178.hasMuscleCurves = !!i1179[9]
  var i1185 = i1179[10]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( i1185[i + 0] );
  }
  i1178.clipMuscleConstant = i1184
  i1178.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1179[11], i1178.clipBindingConstant)
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1189 = data
  i1188.path = i1189[0]
  i1188.hash = i1189[1]
  i1188.componentType = i1189[2]
  i1188.property = i1189[3]
  i1188.keys = i1189[4]
  var i1191 = i1189[5]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1191[i + 0]) );
  }
  i1188.objectReferenceKeys = i1190
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1195 = data
  i1194.time = i1195[0]
  request.r(i1195[1], i1195[2], 0, i1194, 'value')
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1199 = data
  i1198.functionName = i1199[0]
  i1198.floatParameter = i1199[1]
  i1198.intParameter = i1199[2]
  i1198.stringParameter = i1199[3]
  request.r(i1199[4], i1199[5], 0, i1198, 'objectReferenceParameter')
  i1198.time = i1199[6]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1201 = data
  i1200.center = new pc.Vec3( i1201[0], i1201[1], i1201[2] )
  i1200.extends = new pc.Vec3( i1201[3], i1201[4], i1201[5] )
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1205 = data
  var i1207 = i1205[0]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1204.genericBindings = i1206
  var i1209 = i1205[1]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( i1209[i + 0] );
  }
  i1204.pptrCurveMapping = i1208
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.ascent = i1211[1]
  i1210.originalLineHeight = i1211[2]
  i1210.fontSize = i1211[3]
  var i1213 = i1211[4]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1213[i + 0]) );
  }
  i1210.characterInfo = i1212
  request.r(i1211[5], i1211[6], 0, i1210, 'texture')
  i1210.originalFontSize = i1211[7]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1217 = data
  i1216.index = i1217[0]
  i1216.advance = i1217[1]
  i1216.bearing = i1217[2]
  i1216.glyphWidth = i1217[3]
  i1216.glyphHeight = i1217[4]
  i1216.minX = i1217[5]
  i1216.maxX = i1217[6]
  i1216.minY = i1217[7]
  i1216.maxY = i1217[8]
  i1216.uvBottomLeftX = i1217[9]
  i1216.uvBottomLeftY = i1217[10]
  i1216.uvBottomRightX = i1217[11]
  i1216.uvBottomRightY = i1217[12]
  i1216.uvTopLeftX = i1217[13]
  i1216.uvTopLeftY = i1217[14]
  i1216.uvTopRightX = i1217[15]
  i1216.uvTopRightY = i1217[16]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1219 = data
  i1218.name = i1219[0]
  var i1221 = i1219[1]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1221[i + 0]) );
  }
  i1218.layers = i1220
  var i1223 = i1219[2]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1223[i + 0]) );
  }
  i1218.parameters = i1222
  i1218.animationClips = i1219[3]
  i1218.avatarUnsupported = i1219[4]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1227 = data
  i1226.name = i1227[0]
  i1226.defaultWeight = i1227[1]
  i1226.blendingMode = i1227[2]
  i1226.avatarMask = i1227[3]
  i1226.syncedLayerIndex = i1227[4]
  i1226.syncedLayerAffectsTiming = !!i1227[5]
  i1226.syncedLayers = i1227[6]
  i1226.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1227[7], i1226.stateMachine)
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1229 = data
  i1228.id = i1229[0]
  i1228.name = i1229[1]
  i1228.path = i1229[2]
  var i1231 = i1229[3]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1231[i + 0]) );
  }
  i1228.states = i1230
  var i1233 = i1229[4]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1233[i + 0]) );
  }
  i1228.machines = i1232
  var i1235 = i1229[5]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1235[i + 0]) );
  }
  i1228.entryStateTransitions = i1234
  var i1237 = i1229[6]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1237[i + 0]) );
  }
  i1228.exitStateTransitions = i1236
  var i1239 = i1229[7]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1239[i + 0]) );
  }
  i1228.anyStateTransitions = i1238
  i1228.defaultStateId = i1229[8]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1243 = data
  i1242.id = i1243[0]
  i1242.name = i1243[1]
  i1242.cycleOffset = i1243[2]
  i1242.cycleOffsetParameter = i1243[3]
  i1242.cycleOffsetParameterActive = !!i1243[4]
  i1242.mirror = !!i1243[5]
  i1242.mirrorParameter = i1243[6]
  i1242.mirrorParameterActive = !!i1243[7]
  i1242.motionId = i1243[8]
  i1242.nameHash = i1243[9]
  i1242.fullPathHash = i1243[10]
  i1242.speed = i1243[11]
  i1242.speedParameter = i1243[12]
  i1242.speedParameterActive = !!i1243[13]
  i1242.tag = i1243[14]
  i1242.tagHash = i1243[15]
  i1242.writeDefaultValues = !!i1243[16]
  var i1245 = i1243[17]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 2, i1244, '')
  }
  i1242.behaviours = i1244
  var i1247 = i1243[18]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1247[i + 0]) );
  }
  i1242.transitions = i1246
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1253 = data
  i1252.fullPath = i1253[0]
  i1252.canTransitionToSelf = !!i1253[1]
  i1252.duration = i1253[2]
  i1252.exitTime = i1253[3]
  i1252.hasExitTime = !!i1253[4]
  i1252.hasFixedDuration = !!i1253[5]
  i1252.interruptionSource = i1253[6]
  i1252.offset = i1253[7]
  i1252.orderedInterruption = !!i1253[8]
  i1252.destinationStateId = i1253[9]
  i1252.isExit = !!i1253[10]
  i1252.mute = !!i1253[11]
  i1252.solo = !!i1253[12]
  var i1255 = i1253[13]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1255[i + 0]) );
  }
  i1252.conditions = i1254
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1261 = data
  i1260.destinationStateId = i1261[0]
  i1260.isExit = !!i1261[1]
  i1260.mute = !!i1261[2]
  i1260.solo = !!i1261[3]
  var i1263 = i1261[4]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1263[i + 0]) );
  }
  i1260.conditions = i1262
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1267 = data
  i1266.defaultBool = !!i1267[0]
  i1266.defaultFloat = i1267[1]
  i1266.defaultInt = i1267[2]
  i1266.name = i1267[3]
  i1266.nameHash = i1267[4]
  i1266.type = i1267[5]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1269 = data
  i1268.name = i1269[0]
  i1268.bytes64 = i1269[1]
  i1268.data = i1269[2]
  return i1268
}

Deserializers["Bricks_PattemTableObj"] = function (request, data, root) {
  var i1270 = root || request.c( 'Bricks_PattemTableObj' )
  var i1271 = data
  var i1273 = i1271[0]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('PattemInfor', i1273[i + 0]) );
  }
  i1270.listPattemsInfor = i1272
  var i1275 = i1271[1]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('LevelData', i1275[i + 0]) );
  }
  i1270.levelData = i1274
  return i1270
}

Deserializers["PattemInfor"] = function (request, data, root) {
  var i1278 = root || request.c( 'PattemInfor' )
  var i1279 = data
  i1278.type = i1279[0]
  var i1281 = i1279[1]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( !!i1281[i + 0] );
  }
  i1278.grid = i1280
  return i1278
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1286 = root || request.c( 'LevelData' )
  var i1287 = data
  i1286.level = i1287[0]
  i1286.Score = i1287[1]
  i1286.weight = i1287[2]
  return i1286
}

Deserializers["BB10_SpawnBlockData"] = function (request, data, root) {
  var i1288 = root || request.c( 'BB10_SpawnBlockData' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('SpawnGroup', i1291[i + 0]) );
  }
  i1288.spawnGroups = i1290
  return i1288
}

Deserializers["SpawnGroup"] = function (request, data, root) {
  var i1294 = root || request.c( 'SpawnGroup' )
  var i1295 = data
  i1294.block1 = i1295[0]
  i1294.block2 = i1295[1]
  i1294.block3 = i1295[2]
  return i1294
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1297 = data
  request.r(i1297[0], i1297[1], 0, i1296, 'atlas')
  i1296.normalStyle = i1297[2]
  i1296.normalSpacingOffset = i1297[3]
  i1296.boldStyle = i1297[4]
  i1296.boldSpacing = i1297[5]
  i1296.italicStyle = i1297[6]
  i1296.tabSize = i1297[7]
  i1296.hashCode = i1297[8]
  request.r(i1297[9], i1297[10], 0, i1296, 'material')
  i1296.materialHashCode = i1297[11]
  i1296.m_Version = i1297[12]
  i1296.m_SourceFontFileGUID = i1297[13]
  request.r(i1297[14], i1297[15], 0, i1296, 'm_SourceFontFile_EditorRef')
  request.r(i1297[16], i1297[17], 0, i1296, 'm_SourceFontFile')
  i1296.m_AtlasPopulationMode = i1297[18]
  i1296.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1297[19], i1296.m_FaceInfo)
  var i1299 = i1297[20]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('UnityEngine.TextCore.Glyph', i1299[i + 0]));
  }
  i1296.m_GlyphTable = i1298
  var i1301 = i1297[21]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(request.d('TMPro.TMP_Character', i1301[i + 0]));
  }
  i1296.m_CharacterTable = i1300
  var i1303 = i1297[22]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 2, i1302, '')
  }
  i1296.m_AtlasTextures = i1302
  i1296.m_AtlasTextureIndex = i1297[23]
  i1296.m_IsMultiAtlasTexturesEnabled = !!i1297[24]
  i1296.m_ClearDynamicDataOnBuild = !!i1297[25]
  var i1305 = i1297[26]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.add(request.d('UnityEngine.TextCore.GlyphRect', i1305[i + 0]));
  }
  i1296.m_UsedGlyphRects = i1304
  var i1307 = i1297[27]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('UnityEngine.TextCore.GlyphRect', i1307[i + 0]));
  }
  i1296.m_FreeGlyphRects = i1306
  i1296.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1297[28], i1296.m_fontInfo)
  i1296.m_AtlasWidth = i1297[29]
  i1296.m_AtlasHeight = i1297[30]
  i1296.m_AtlasPadding = i1297[31]
  i1296.m_AtlasRenderMode = i1297[32]
  var i1309 = i1297[33]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('TMPro.TMP_Glyph', i1309[i + 0]));
  }
  i1296.m_glyphInfoList = i1308
  i1296.m_KerningTable = request.d('TMPro.KerningTable', i1297[34], i1296.m_KerningTable)
  i1296.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1297[35], i1296.m_FontFeatureTable)
  var i1311 = i1297[36]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 1, i1310, '')
  }
  i1296.fallbackFontAssets = i1310
  var i1313 = i1297[37]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1313.length; i += 2) {
  request.r(i1313[i + 0], i1313[i + 1], 1, i1312, '')
  }
  i1296.m_FallbackFontAssetTable = i1312
  i1296.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1297[38], i1296.m_CreationSettings)
  var i1315 = i1297[39]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('TMPro.TMP_FontWeightPair', i1315[i + 0]) );
  }
  i1296.m_FontWeightTable = i1314
  var i1317 = i1297[40]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('TMPro.TMP_FontWeightPair', i1317[i + 0]) );
  }
  i1296.fontWeights = i1316
  return i1296
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1319 = data
  i1318.m_FaceIndex = i1319[0]
  i1318.m_FamilyName = i1319[1]
  i1318.m_StyleName = i1319[2]
  i1318.m_PointSize = i1319[3]
  i1318.m_Scale = i1319[4]
  i1318.m_UnitsPerEM = i1319[5]
  i1318.m_LineHeight = i1319[6]
  i1318.m_AscentLine = i1319[7]
  i1318.m_CapLine = i1319[8]
  i1318.m_MeanLine = i1319[9]
  i1318.m_Baseline = i1319[10]
  i1318.m_DescentLine = i1319[11]
  i1318.m_SuperscriptOffset = i1319[12]
  i1318.m_SuperscriptSize = i1319[13]
  i1318.m_SubscriptOffset = i1319[14]
  i1318.m_SubscriptSize = i1319[15]
  i1318.m_UnderlineOffset = i1319[16]
  i1318.m_UnderlineThickness = i1319[17]
  i1318.m_StrikethroughOffset = i1319[18]
  i1318.m_StrikethroughThickness = i1319[19]
  i1318.m_TabWidth = i1319[20]
  return i1318
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1323 = data
  i1322.m_Index = i1323[0]
  i1322.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1323[1], i1322.m_Metrics)
  i1322.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1323[2], i1322.m_GlyphRect)
  i1322.m_Scale = i1323[3]
  i1322.m_AtlasIndex = i1323[4]
  i1322.m_ClassDefinitionType = i1323[5]
  return i1322
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1325 = data
  i1324.m_Width = i1325[0]
  i1324.m_Height = i1325[1]
  i1324.m_HorizontalBearingX = i1325[2]
  i1324.m_HorizontalBearingY = i1325[3]
  i1324.m_HorizontalAdvance = i1325[4]
  return i1324
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1327 = data
  i1326.m_X = i1327[0]
  i1326.m_Y = i1327[1]
  i1326.m_Width = i1327[2]
  i1326.m_Height = i1327[3]
  return i1326
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_Character' )
  var i1331 = data
  i1330.m_ElementType = i1331[0]
  i1330.m_Unicode = i1331[1]
  i1330.m_GlyphIndex = i1331[2]
  i1330.m_Scale = i1331[3]
  return i1330
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1335 = data
  i1334.Name = i1335[0]
  i1334.PointSize = i1335[1]
  i1334.Scale = i1335[2]
  i1334.CharacterCount = i1335[3]
  i1334.LineHeight = i1335[4]
  i1334.Baseline = i1335[5]
  i1334.Ascender = i1335[6]
  i1334.CapHeight = i1335[7]
  i1334.Descender = i1335[8]
  i1334.CenterLine = i1335[9]
  i1334.SuperscriptOffset = i1335[10]
  i1334.SubscriptOffset = i1335[11]
  i1334.SubSize = i1335[12]
  i1334.Underline = i1335[13]
  i1334.UnderlineThickness = i1335[14]
  i1334.strikethrough = i1335[15]
  i1334.strikethroughThickness = i1335[16]
  i1334.TabWidth = i1335[17]
  i1334.Padding = i1335[18]
  i1334.AtlasWidth = i1335[19]
  i1334.AtlasHeight = i1335[20]
  return i1334
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1339 = data
  i1338.id = i1339[0]
  i1338.x = i1339[1]
  i1338.y = i1339[2]
  i1338.width = i1339[3]
  i1338.height = i1339[4]
  i1338.xOffset = i1339[5]
  i1338.yOffset = i1339[6]
  i1338.xAdvance = i1339[7]
  i1338.scale = i1339[8]
  return i1338
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.KerningTable' )
  var i1341 = data
  var i1343 = i1341[0]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(request.d('TMPro.KerningPair', i1343[i + 0]));
  }
  i1340.kerningPairs = i1342
  return i1340
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.KerningPair' )
  var i1347 = data
  i1346.xOffset = i1347[0]
  i1346.m_FirstGlyph = i1347[1]
  i1346.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1347[2], i1346.m_FirstGlyphAdjustments)
  i1346.m_SecondGlyph = i1347[3]
  i1346.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1347[4], i1346.m_SecondGlyphAdjustments)
  i1346.m_IgnoreSpacingAdjustments = !!i1347[5]
  return i1346
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1349 = data
  var i1351 = i1349[0]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1351[i + 0]));
  }
  i1348.m_GlyphPairAdjustmentRecords = i1350
  return i1348
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1355 = data
  i1354.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1355[0], i1354.m_FirstAdjustmentRecord)
  i1354.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1355[1], i1354.m_SecondAdjustmentRecord)
  i1354.m_FeatureLookupFlags = i1355[2]
  return i1354
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1359 = data
  i1358.sourceFontFileName = i1359[0]
  i1358.sourceFontFileGUID = i1359[1]
  i1358.pointSizeSamplingMode = i1359[2]
  i1358.pointSize = i1359[3]
  i1358.padding = i1359[4]
  i1358.packingMode = i1359[5]
  i1358.atlasWidth = i1359[6]
  i1358.atlasHeight = i1359[7]
  i1358.characterSetSelectionMode = i1359[8]
  i1358.characterSequence = i1359[9]
  i1358.referencedFontAssetGUID = i1359[10]
  i1358.referencedTextAssetGUID = i1359[11]
  i1358.fontStyle = i1359[12]
  i1358.fontStyleModifier = i1359[13]
  i1358.renderMode = i1359[14]
  i1358.includeFontFeatures = !!i1359[15]
  return i1358
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'regularTypeface')
  request.r(i1363[2], i1363[3], 0, i1362, 'italicTypeface')
  return i1362
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1364 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1365 = data
  i1364.useSafeMode = !!i1365[0]
  i1364.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1365[1], i1364.safeModeOptions)
  i1364.timeScale = i1365[2]
  i1364.unscaledTimeScale = i1365[3]
  i1364.useSmoothDeltaTime = !!i1365[4]
  i1364.maxSmoothUnscaledTime = i1365[5]
  i1364.rewindCallbackMode = i1365[6]
  i1364.showUnityEditorReport = !!i1365[7]
  i1364.logBehaviour = i1365[8]
  i1364.drawGizmos = !!i1365[9]
  i1364.defaultRecyclable = !!i1365[10]
  i1364.defaultAutoPlay = i1365[11]
  i1364.defaultUpdateType = i1365[12]
  i1364.defaultTimeScaleIndependent = !!i1365[13]
  i1364.defaultEaseType = i1365[14]
  i1364.defaultEaseOvershootOrAmplitude = i1365[15]
  i1364.defaultEasePeriod = i1365[16]
  i1364.defaultAutoKill = !!i1365[17]
  i1364.defaultLoopType = i1365[18]
  i1364.debugMode = !!i1365[19]
  i1364.debugStoreTargetId = !!i1365[20]
  i1364.showPreviewPanel = !!i1365[21]
  i1364.storeSettingsLocation = i1365[22]
  i1364.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1365[23], i1364.modules)
  i1364.createASMDEF = !!i1365[24]
  i1364.showPlayingTweens = !!i1365[25]
  i1364.showPausedTweens = !!i1365[26]
  return i1364
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1366 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1367 = data
  i1366.logBehaviour = i1367[0]
  i1366.nestedTweenFailureBehaviour = i1367[1]
  return i1366
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1368 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1369 = data
  i1368.showPanel = !!i1369[0]
  i1368.audioEnabled = !!i1369[1]
  i1368.physicsEnabled = !!i1369[2]
  i1368.physics2DEnabled = !!i1369[3]
  i1368.spriteEnabled = !!i1369[4]
  i1368.uiEnabled = !!i1369[5]
  i1368.textMeshProEnabled = !!i1369[6]
  i1368.tk2DEnabled = !!i1369[7]
  i1368.deAudioEnabled = !!i1369[8]
  i1368.deUnityExtendedEnabled = !!i1369[9]
  i1368.epoOutlineEnabled = !!i1369[10]
  return i1368
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.TMP_Settings' )
  var i1371 = data
  i1370.m_enableWordWrapping = !!i1371[0]
  i1370.m_enableKerning = !!i1371[1]
  i1370.m_enableExtraPadding = !!i1371[2]
  i1370.m_enableTintAllSprites = !!i1371[3]
  i1370.m_enableParseEscapeCharacters = !!i1371[4]
  i1370.m_EnableRaycastTarget = !!i1371[5]
  i1370.m_GetFontFeaturesAtRuntime = !!i1371[6]
  i1370.m_missingGlyphCharacter = i1371[7]
  i1370.m_warningsDisabled = !!i1371[8]
  request.r(i1371[9], i1371[10], 0, i1370, 'm_defaultFontAsset')
  i1370.m_defaultFontAssetPath = i1371[11]
  i1370.m_defaultFontSize = i1371[12]
  i1370.m_defaultAutoSizeMinRatio = i1371[13]
  i1370.m_defaultAutoSizeMaxRatio = i1371[14]
  i1370.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1371[15], i1371[16] )
  i1370.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1371[17], i1371[18] )
  i1370.m_autoSizeTextContainer = !!i1371[19]
  i1370.m_IsTextObjectScaleStatic = !!i1371[20]
  var i1373 = i1371[21]
  var i1372 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1373.length; i += 2) {
  request.r(i1373[i + 0], i1373[i + 1], 1, i1372, '')
  }
  i1370.m_fallbackFontAssets = i1372
  i1370.m_matchMaterialPreset = !!i1371[22]
  request.r(i1371[23], i1371[24], 0, i1370, 'm_defaultSpriteAsset')
  i1370.m_defaultSpriteAssetPath = i1371[25]
  i1370.m_enableEmojiSupport = !!i1371[26]
  i1370.m_MissingCharacterSpriteUnicode = i1371[27]
  i1370.m_defaultColorGradientPresetsPath = i1371[28]
  request.r(i1371[29], i1371[30], 0, i1370, 'm_defaultStyleSheet')
  i1370.m_StyleSheetsResourcePath = i1371[31]
  request.r(i1371[32], i1371[33], 0, i1370, 'm_leadingCharacters')
  request.r(i1371[34], i1371[35], 0, i1370, 'm_followingCharacters')
  i1370.m_UseModernHangulLineBreakingRules = !!i1371[36]
  return i1370
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1375 = data
  i1374.m_GlyphIndex = i1375[0]
  i1374.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1375[1], i1374.m_GlyphValueRecord)
  return i1374
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1377 = data
  i1376.m_XPlacement = i1377[0]
  i1376.m_YPlacement = i1377[1]
  i1376.m_XAdvance = i1377[2]
  i1376.m_YAdvance = i1377[3]
  return i1376
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1379 = data
  request.r(i1379[0], i1379[1], 0, i1378, 'spriteSheet')
  var i1381 = i1379[2]
  var i1380 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.add(request.d('TMPro.TMP_Sprite', i1381[i + 0]));
  }
  i1378.spriteInfoList = i1380
  var i1383 = i1379[3]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1383.length; i += 2) {
  request.r(i1383[i + 0], i1383[i + 1], 1, i1382, '')
  }
  i1378.fallbackSpriteAssets = i1382
  i1378.hashCode = i1379[4]
  request.r(i1379[5], i1379[6], 0, i1378, 'material')
  i1378.materialHashCode = i1379[7]
  i1378.m_Version = i1379[8]
  i1378.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1379[9], i1378.m_FaceInfo)
  var i1385 = i1379[10]
  var i1384 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.add(request.d('TMPro.TMP_SpriteCharacter', i1385[i + 0]));
  }
  i1378.m_SpriteCharacterTable = i1384
  var i1387 = i1379[11]
  var i1386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.add(request.d('TMPro.TMP_SpriteGlyph', i1387[i + 0]));
  }
  i1378.m_SpriteGlyphTable = i1386
  return i1378
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.hashCode = i1391[1]
  i1390.unicode = i1391[2]
  i1390.pivot = new pc.Vec2( i1391[3], i1391[4] )
  request.r(i1391[5], i1391[6], 0, i1390, 'sprite')
  i1390.id = i1391[7]
  i1390.x = i1391[8]
  i1390.y = i1391[9]
  i1390.width = i1391[10]
  i1390.height = i1391[11]
  i1390.xOffset = i1391[12]
  i1390.yOffset = i1391[13]
  i1390.xAdvance = i1391[14]
  i1390.scale = i1391[15]
  return i1390
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1397 = data
  i1396.m_Name = i1397[0]
  i1396.m_HashCode = i1397[1]
  i1396.m_ElementType = i1397[2]
  i1396.m_Unicode = i1397[3]
  i1396.m_GlyphIndex = i1397[4]
  i1396.m_Scale = i1397[5]
  return i1396
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1400 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'sprite')
  i1400.m_Index = i1401[2]
  i1400.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1401[3], i1400.m_Metrics)
  i1400.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1401[4], i1400.m_GlyphRect)
  i1400.m_Scale = i1401[5]
  i1400.m_AtlasIndex = i1401[6]
  i1400.m_ClassDefinitionType = i1401[7]
  return i1400
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1402 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1403 = data
  var i1405 = i1403[0]
  var i1404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.add(request.d('TMPro.TMP_Style', i1405[i + 0]));
  }
  i1402.m_StyleList = i1404
  return i1402
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1408 = root || request.c( 'TMPro.TMP_Style' )
  var i1409 = data
  i1408.m_Name = i1409[0]
  i1408.m_HashCode = i1409[1]
  i1408.m_OpeningDefinition = i1409[2]
  i1408.m_ClosingDefinition = i1409[3]
  i1408.m_OpeningTagArray = i1409[4]
  i1408.m_ClosingTagArray = i1409[5]
  i1408.m_OpeningTagUnicodeArray = i1409[6]
  i1408.m_ClosingTagUnicodeArray = i1409[7]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1411 = data
  var i1413 = i1411[0]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1413[i + 0]) );
  }
  i1410.files = i1412
  i1410.componentToPrefabIds = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1417 = data
  i1416.path = i1417[0]
  request.r(i1417[1], i1417[2], 0, i1416, 'unityObject')
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1419 = data
  var i1421 = i1419[0]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1421[i + 0]) );
  }
  i1418.scriptsExecutionOrder = i1420
  var i1423 = i1419[1]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1423[i + 0]) );
  }
  i1418.sortingLayers = i1422
  var i1425 = i1419[2]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1425[i + 0]) );
  }
  i1418.cullingLayers = i1424
  i1418.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1419[3], i1418.timeSettings)
  i1418.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1419[4], i1418.physicsSettings)
  i1418.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1419[5], i1418.physics2DSettings)
  i1418.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1419[6], i1418.qualitySettings)
  i1418.enableRealtimeShadows = !!i1419[7]
  i1418.enableAutoInstancing = !!i1419[8]
  i1418.enableStaticBatching = !!i1419[9]
  i1418.enableDynamicBatching = !!i1419[10]
  i1418.lightmapEncodingQuality = i1419[11]
  i1418.desiredColorSpace = i1419[12]
  var i1427 = i1419[13]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( i1427[i + 0] );
  }
  i1418.allTags = i1426
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1431 = data
  i1430.name = i1431[0]
  i1430.value = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1435 = data
  i1434.id = i1435[0]
  i1434.name = i1435[1]
  i1434.value = i1435[2]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1439 = data
  i1438.id = i1439[0]
  i1438.name = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1441 = data
  i1440.fixedDeltaTime = i1441[0]
  i1440.maximumDeltaTime = i1441[1]
  i1440.timeScale = i1441[2]
  i1440.maximumParticleTimestep = i1441[3]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1443 = data
  i1442.gravity = new pc.Vec3( i1443[0], i1443[1], i1443[2] )
  i1442.defaultSolverIterations = i1443[3]
  i1442.bounceThreshold = i1443[4]
  i1442.autoSyncTransforms = !!i1443[5]
  i1442.autoSimulation = !!i1443[6]
  var i1445 = i1443[7]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1445[i + 0]) );
  }
  i1442.collisionMatrix = i1444
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1449 = data
  i1448.enabled = !!i1449[0]
  i1448.layerId = i1449[1]
  i1448.otherLayerId = i1449[2]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1451 = data
  request.r(i1451[0], i1451[1], 0, i1450, 'material')
  i1450.gravity = new pc.Vec2( i1451[2], i1451[3] )
  i1450.positionIterations = i1451[4]
  i1450.velocityIterations = i1451[5]
  i1450.velocityThreshold = i1451[6]
  i1450.maxLinearCorrection = i1451[7]
  i1450.maxAngularCorrection = i1451[8]
  i1450.maxTranslationSpeed = i1451[9]
  i1450.maxRotationSpeed = i1451[10]
  i1450.baumgarteScale = i1451[11]
  i1450.baumgarteTOIScale = i1451[12]
  i1450.timeToSleep = i1451[13]
  i1450.linearSleepTolerance = i1451[14]
  i1450.angularSleepTolerance = i1451[15]
  i1450.defaultContactOffset = i1451[16]
  i1450.autoSimulation = !!i1451[17]
  i1450.queriesHitTriggers = !!i1451[18]
  i1450.queriesStartInColliders = !!i1451[19]
  i1450.callbacksOnDisable = !!i1451[20]
  i1450.reuseCollisionCallbacks = !!i1451[21]
  i1450.autoSyncTransforms = !!i1451[22]
  var i1453 = i1451[23]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1453[i + 0]) );
  }
  i1450.collisionMatrix = i1452
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1457 = data
  i1456.enabled = !!i1457[0]
  i1456.layerId = i1457[1]
  i1456.otherLayerId = i1457[2]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1459 = data
  var i1461 = i1459[0]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1461[i + 0]) );
  }
  i1458.qualityLevels = i1460
  var i1463 = i1459[1]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( i1463[i + 0] );
  }
  i1458.names = i1462
  i1458.shadows = i1459[2]
  i1458.anisotropicFiltering = i1459[3]
  i1458.antiAliasing = i1459[4]
  i1458.lodBias = i1459[5]
  i1458.shadowCascades = i1459[6]
  i1458.shadowDistance = i1459[7]
  i1458.shadowmaskMode = i1459[8]
  i1458.shadowProjection = i1459[9]
  i1458.shadowResolution = i1459[10]
  i1458.softParticles = !!i1459[11]
  i1458.softVegetation = !!i1459[12]
  i1458.activeColorSpace = i1459[13]
  i1458.desiredColorSpace = i1459[14]
  i1458.masterTextureLimit = i1459[15]
  i1458.maxQueuedFrames = i1459[16]
  i1458.particleRaycastBudget = i1459[17]
  i1458.pixelLightCount = i1459[18]
  i1458.realtimeReflectionProbes = !!i1459[19]
  i1458.shadowCascade2Split = i1459[20]
  i1458.shadowCascade4Split = new pc.Vec3( i1459[21], i1459[22], i1459[23] )
  i1458.streamingMipmapsActive = !!i1459[24]
  i1458.vSyncCount = i1459[25]
  i1458.asyncUploadBufferSize = i1459[26]
  i1458.asyncUploadTimeSlice = i1459[27]
  i1458.billboardsFaceCameraPosition = !!i1459[28]
  i1458.shadowNearPlaneOffset = i1459[29]
  i1458.streamingMipmapsMemoryBudget = i1459[30]
  i1458.maximumLODLevel = i1459[31]
  i1458.streamingMipmapsAddAllCameras = !!i1459[32]
  i1458.streamingMipmapsMaxLevelReduction = i1459[33]
  i1458.streamingMipmapsRenderersPerFrame = i1459[34]
  i1458.resolutionScalingFixedDPIFactor = i1459[35]
  i1458.streamingMipmapsMaxFileIORequests = i1459[36]
  i1458.currentQualityLevel = i1459[37]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1469 = data
  i1468.mode = i1469[0]
  i1468.parameter = i1469[1]
  i1468.threshold = i1469[2]
  return i1468
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1470 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1471 = data
  i1470.xPlacement = i1471[0]
  i1470.yPlacement = i1471[1]
  i1470.xAdvance = i1471[2]
  i1470.yAdvance = i1471[3]
  return i1470
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.TextMesh":{"m_Alignment":0,"m_Anchor":1,"m_CharacterSize":2,"m_Font":3,"m_FontSize":5,"m_FontStyle":6,"m_LineSpacing":7,"m_OffsetZ":8,"m_RichText":9,"m_TabSize":10,"m_Text":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[85],"34":[32],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[95],"96":[95],"97":[95],"98":[95],"99":[95],"100":[95],"101":[95],"102":[95],"103":[95],"104":[95],"105":[95],"106":[95],"107":[95],"108":[32],"16":[15],"109":[110],"111":[110],"46":[45],"68":[59],"112":[45],"113":[45],"49":[46],"51":[50,45],"114":[45],"48":[46],"115":[45],"116":[45],"117":[45],"118":[45],"119":[45],"120":[45],"121":[45],"122":[45],"123":[45],"124":[50,45],"125":[45],"126":[45],"127":[45],"65":[45],"41":[50,45],"128":[45],"129":[62],"130":[62],"63":[62],"131":[62],"132":[32],"133":[32],"134":[46],"135":[56],"136":[45],"137":[15,45],"59":[45,50],"138":[45],"139":[50,45],"140":[15],"141":[50,45],"142":[45],"143":[144],"145":[144],"146":[144]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","CompleteBlocks","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BB10_BrickCubeUnit","UnityEngine.GameObject","UnityEngine.BoxCollider2D","BB10_ColorControl","UnityEngine.MeshRenderer","UnityEngine.TextMesh","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","BB10_MainObjControl","BB10_PattemCreater","BB10_NextViewerControl","BB10_Grid","BB10_PlaneView","BB10_GroundView","CameraScript","BB10_ScoreCtr","BB10_ShowHelpCtr","BB10_ScreenCtr","BB10_Tutorial","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.FlareLayer","CameraResponsive","MainAudio","Bricks_PattemTableObj","BB10_SpawnBlockData","BB10_NextViewer","GamePlayManager","UnityEngine.UI.Text","ResponsiveManager","TutorialManager","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","BB10_MainCanvasUI","BB10_InGameScript","BB10_FaderHandler","ResponsiveWorld","UnityEngine.UI.Button","CTAButton","ScaleElement","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BB10_HomeController","UnityEngine.UI.Slider","TimerProgress","UITweenElement","TextMeshProController","BB10_LostScript","BB10_PopupRate","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","LoadingTransition","BuiltInButtonTestSdk","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "BlockPuzzle";

Deserializers.lunaInitializationTime = "03/12/2026 10:41:13";

Deserializers.lunaDaysRunning = "4.8";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "Basic1";

Deserializers.lunaAppID = "37856";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1709";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4723";

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

Deserializers.buildID = "85442ce8-d64e-439d-92b3-adce1c45c88f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

