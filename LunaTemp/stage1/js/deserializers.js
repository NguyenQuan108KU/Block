var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5284 = root || request.c( 'UnityEngine.JointSpring' )
  var i5285 = data
  i5284.spring = i5285[0]
  i5284.damper = i5285[1]
  i5284.targetPosition = i5285[2]
  return i5284
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5286 = root || request.c( 'UnityEngine.JointMotor' )
  var i5287 = data
  i5286.m_TargetVelocity = i5287[0]
  i5286.m_Force = i5287[1]
  i5286.m_FreeSpin = i5287[2]
  return i5286
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5288 = root || request.c( 'UnityEngine.JointLimits' )
  var i5289 = data
  i5288.m_Min = i5289[0]
  i5288.m_Max = i5289[1]
  i5288.m_Bounciness = i5289[2]
  i5288.m_BounceMinVelocity = i5289[3]
  i5288.m_ContactDistance = i5289[4]
  i5288.minBounce = i5289[5]
  i5288.maxBounce = i5289[6]
  return i5288
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5290 = root || request.c( 'UnityEngine.JointDrive' )
  var i5291 = data
  i5290.m_PositionSpring = i5291[0]
  i5290.m_PositionDamper = i5291[1]
  i5290.m_MaximumForce = i5291[2]
  i5290.m_UseAcceleration = i5291[3]
  return i5290
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5292 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5293 = data
  i5292.m_Spring = i5293[0]
  i5292.m_Damper = i5293[1]
  return i5292
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5294 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5295 = data
  i5294.m_Limit = i5295[0]
  i5294.m_Bounciness = i5295[1]
  i5294.m_ContactDistance = i5295[2]
  return i5294
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5296 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5297 = data
  i5296.m_ExtremumSlip = i5297[0]
  i5296.m_ExtremumValue = i5297[1]
  i5296.m_AsymptoteSlip = i5297[2]
  i5296.m_AsymptoteValue = i5297[3]
  i5296.m_Stiffness = i5297[4]
  return i5296
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5298 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5299 = data
  i5298.m_LowerAngle = i5299[0]
  i5298.m_UpperAngle = i5299[1]
  return i5298
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5300 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5301 = data
  i5300.m_MotorSpeed = i5301[0]
  i5300.m_MaximumMotorTorque = i5301[1]
  return i5300
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5302 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5303 = data
  i5302.m_DampingRatio = i5303[0]
  i5302.m_Frequency = i5303[1]
  i5302.m_Angle = i5303[2]
  return i5302
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5304 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5305 = data
  i5304.m_LowerTranslation = i5305[0]
  i5304.m_UpperTranslation = i5305[1]
  return i5304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5306 = root || new pc.UnityMaterial()
  var i5307 = data
  i5306.name = i5307[0]
  request.r(i5307[1], i5307[2], 0, i5306, 'shader')
  i5306.renderQueue = i5307[3]
  i5306.enableInstancing = !!i5307[4]
  var i5309 = i5307[5]
  var i5308 = []
  for(var i = 0; i < i5309.length; i += 1) {
    i5308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5309[i + 0]) );
  }
  i5306.floatParameters = i5308
  var i5311 = i5307[6]
  var i5310 = []
  for(var i = 0; i < i5311.length; i += 1) {
    i5310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5311[i + 0]) );
  }
  i5306.colorParameters = i5310
  var i5313 = i5307[7]
  var i5312 = []
  for(var i = 0; i < i5313.length; i += 1) {
    i5312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5313[i + 0]) );
  }
  i5306.vectorParameters = i5312
  var i5315 = i5307[8]
  var i5314 = []
  for(var i = 0; i < i5315.length; i += 1) {
    i5314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5315[i + 0]) );
  }
  i5306.textureParameters = i5314
  var i5317 = i5307[9]
  var i5316 = []
  for(var i = 0; i < i5317.length; i += 1) {
    i5316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5317[i + 0]) );
  }
  i5306.materialFlags = i5316
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5321 = data
  i5320.name = i5321[0]
  i5320.value = i5321[1]
  return i5320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5325 = data
  i5324.name = i5325[0]
  i5324.value = new pc.Color(i5325[1], i5325[2], i5325[3], i5325[4])
  return i5324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5329 = data
  i5328.name = i5329[0]
  i5328.value = new pc.Vec4( i5329[1], i5329[2], i5329[3], i5329[4] )
  return i5328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5333 = data
  i5332.name = i5333[0]
  request.r(i5333[1], i5333[2], 0, i5332, 'value')
  return i5332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5337 = data
  i5336.name = i5337[0]
  i5336.enabled = !!i5337[1]
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5339 = data
  i5338.name = i5339[0]
  i5338.width = i5339[1]
  i5338.height = i5339[2]
  i5338.mipmapCount = i5339[3]
  i5338.anisoLevel = i5339[4]
  i5338.filterMode = i5339[5]
  i5338.hdr = !!i5339[6]
  i5338.format = i5339[7]
  i5338.wrapMode = i5339[8]
  i5338.alphaIsTransparency = !!i5339[9]
  i5338.alphaSource = i5339[10]
  i5338.graphicsFormat = i5339[11]
  i5338.sRGBTexture = !!i5339[12]
  i5338.desiredColorSpace = i5339[13]
  i5338.wrapU = i5339[14]
  i5338.wrapV = i5339[15]
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5341 = data
  i5340.position = new pc.Vec3( i5341[0], i5341[1], i5341[2] )
  i5340.scale = new pc.Vec3( i5341[3], i5341[4], i5341[5] )
  i5340.rotation = new pc.Quat(i5341[6], i5341[7], i5341[8], i5341[9])
  return i5340
}

Deserializers["CompleteBlocks"] = function (request, data, root) {
  var i5342 = root || request.c( 'CompleteBlocks' )
  var i5343 = data
  request.r(i5343[0], i5343[1], 0, i5342, 'spriteRenderer')
  var i5345 = i5343[2]
  var i5344 = new (System.Collections.Generic.List$1(Bridge.ns('TextAndSound')))
  for(var i = 0; i < i5345.length; i += 1) {
    i5344.add(request.d('TextAndSound', i5345[i + 0]));
  }
  i5342.listTextAndSound = i5344
  return i5342
}

Deserializers["TextAndSound"] = function (request, data, root) {
  var i5348 = root || request.c( 'TextAndSound' )
  var i5349 = data
  request.r(i5349[0], i5349[1], 0, i5348, 'sprite')
  request.r(i5349[2], i5349[3], 0, i5348, 'audioClip')
  return i5348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5351 = data
  request.r(i5351[0], i5351[1], 0, i5350, 'clip')
  request.r(i5351[2], i5351[3], 0, i5350, 'outputAudioMixerGroup')
  i5350.playOnAwake = !!i5351[4]
  i5350.loop = !!i5351[5]
  i5350.time = i5351[6]
  i5350.volume = i5351[7]
  i5350.pitch = i5351[8]
  i5350.enabled = !!i5351[9]
  return i5350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5353 = data
  i5352.color = new pc.Color(i5353[0], i5353[1], i5353[2], i5353[3])
  request.r(i5353[4], i5353[5], 0, i5352, 'sprite')
  i5352.flipX = !!i5353[6]
  i5352.flipY = !!i5353[7]
  i5352.drawMode = i5353[8]
  i5352.size = new pc.Vec2( i5353[9], i5353[10] )
  i5352.tileMode = i5353[11]
  i5352.adaptiveModeThreshold = i5353[12]
  i5352.maskInteraction = i5353[13]
  i5352.spriteSortPoint = i5353[14]
  i5352.enabled = !!i5353[15]
  request.r(i5353[16], i5353[17], 0, i5352, 'sharedMaterial')
  var i5355 = i5353[18]
  var i5354 = []
  for(var i = 0; i < i5355.length; i += 2) {
  request.r(i5355[i + 0], i5355[i + 1], 2, i5354, '')
  }
  i5352.sharedMaterials = i5354
  i5352.receiveShadows = !!i5353[19]
  i5352.shadowCastingMode = i5353[20]
  i5352.sortingLayerID = i5353[21]
  i5352.sortingOrder = i5353[22]
  i5352.lightmapIndex = i5353[23]
  i5352.lightmapSceneIndex = i5353[24]
  i5352.lightmapScaleOffset = new pc.Vec4( i5353[25], i5353[26], i5353[27], i5353[28] )
  i5352.lightProbeUsage = i5353[29]
  i5352.reflectionProbeUsage = i5353[30]
  return i5352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5359 = data
  request.r(i5359[0], i5359[1], 0, i5358, 'animatorController')
  request.r(i5359[2], i5359[3], 0, i5358, 'avatar')
  i5358.updateMode = i5359[4]
  i5358.hasTransformHierarchy = !!i5359[5]
  i5358.applyRootMotion = !!i5359[6]
  var i5361 = i5359[7]
  var i5360 = []
  for(var i = 0; i < i5361.length; i += 2) {
  request.r(i5361[i + 0], i5361[i + 1], 2, i5360, '')
  }
  i5358.humanBones = i5360
  i5358.enabled = !!i5359[8]
  return i5358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5365 = data
  i5364.name = i5365[0]
  i5364.tagId = i5365[1]
  i5364.enabled = !!i5365[2]
  i5364.isStatic = !!i5365[3]
  i5364.layer = i5365[4]
  return i5364
}

Deserializers["BB10_BrickCubeUnit"] = function (request, data, root) {
  var i5366 = root || request.c( 'BB10_BrickCubeUnit' )
  var i5367 = data
  i5366.thisType = i5367[0]
  request.r(i5367[1], i5367[2], 0, i5366, 'viewer')
  request.r(i5367[3], i5367[4], 0, i5366, 'render')
  i5366.ID = i5367[5]
  i5366.row = i5367[6]
  i5366.col = i5367[7]
  i5366.indexRow = i5367[8]
  i5366.indexCol = i5367[9]
  i5366.scale = i5367[10]
  i5366.myData = request.d('BB10_ColorData', i5367[11], i5366.myData)
  i5366.targetGray = i5367[12]
  i5366.durationDrop = i5367[13]
  i5366.dropScaleMin = new pc.Vec3( i5367[14], i5367[15], i5367[16] )
  i5366.ac = new pc.AnimationCurve( { keys_flow: i5367[17] } )
  i5366.speed = i5367[18]
  i5366.targetScale = i5367[19]
  i5366.durationScaleEffect = i5367[20]
  i5366.speedRotate = i5367[21]
  request.r(i5367[22], i5367[23], 0, i5366, 'shadowDropBlock')
  return i5366
}

Deserializers["BB10_ColorData"] = function (request, data, root) {
  var i5368 = root || request.c( 'BB10_ColorData' )
  var i5369 = data
  request.r(i5369[0], i5369[1], 0, i5368, 'sprite')
  i5368.ID = i5369[2]
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i5370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i5371 = data
  i5370.usedByComposite = !!i5371[0]
  i5370.autoTiling = !!i5371[1]
  i5370.size = new pc.Vec2( i5371[2], i5371[3] )
  i5370.edgeRadius = i5371[4]
  i5370.enabled = !!i5371[5]
  i5370.isTrigger = !!i5371[6]
  i5370.usedByEffector = !!i5371[7]
  i5370.density = i5371[8]
  i5370.offset = new pc.Vec2( i5371[9], i5371[10] )
  request.r(i5371[11], i5371[12], 0, i5370, 'material')
  return i5370
}

Deserializers["BB10_ColorControl"] = function (request, data, root) {
  var i5372 = root || request.c( 'BB10_ColorControl' )
  var i5373 = data
  var i5375 = i5373[0]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( request.d('BB10_ColorData', i5375[i + 0]) );
  }
  i5372.sprites = i5374
  var i5377 = i5373[1]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 2) {
  request.r(i5377[i + 0], i5377[i + 1], 2, i5376, '')
  }
  i5372.spriteTexs = i5376
  var i5379 = i5373[2]
  var i5378 = []
  for(var i = 0; i < i5379.length; i += 1) {
  var i5381 = i5379[i + 0]
  var i5380 = []
  for(var i = 0; i < i5381.length; i += 2) {
  request.r(i5381[i + 0], i5381[i + 1], 2, i5380, '')
  }
    i5378.push( i5380 );
  }
  i5372.preloadSprite = i5378
  i5372.preload = i5373[3]
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5393 = data
  request.r(i5393[0], i5393[1], 0, i5392, 'additionalVertexStreams')
  i5392.enabled = !!i5393[2]
  request.r(i5393[3], i5393[4], 0, i5392, 'sharedMaterial')
  var i5395 = i5393[5]
  var i5394 = []
  for(var i = 0; i < i5395.length; i += 2) {
  request.r(i5395[i + 0], i5395[i + 1], 2, i5394, '')
  }
  i5392.sharedMaterials = i5394
  i5392.receiveShadows = !!i5393[6]
  i5392.shadowCastingMode = i5393[7]
  i5392.sortingLayerID = i5393[8]
  i5392.sortingOrder = i5393[9]
  i5392.lightmapIndex = i5393[10]
  i5392.lightmapSceneIndex = i5393[11]
  i5392.lightmapScaleOffset = new pc.Vec4( i5393[12], i5393[13], i5393[14], i5393[15] )
  i5392.lightProbeUsage = i5393[16]
  i5392.reflectionProbeUsage = i5393[17]
  return i5392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TextMesh"] = function (request, data, root) {
  var i5396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TextMesh' )
  var i5397 = data
  i5396.m_Alignment = i5397[0]
  i5396.m_Anchor = i5397[1]
  i5396.m_CharacterSize = i5397[2]
  request.r(i5397[3], i5397[4], 0, i5396, 'm_Font')
  i5396.m_FontSize = i5397[5]
  i5396.m_FontStyle = i5397[6]
  i5396.m_LineSpacing = i5397[7]
  i5396.m_OffsetZ = i5397[8]
  i5396.m_RichText = !!i5397[9]
  i5396.m_TabSize = i5397[10]
  i5396.m_Text = i5397[11]
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5399 = data
  i5398.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5399[0], i5398.main)
  i5398.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5399[1], i5398.colorBySpeed)
  i5398.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5399[2], i5398.colorOverLifetime)
  i5398.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5399[3], i5398.emission)
  i5398.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5399[4], i5398.rotationBySpeed)
  i5398.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5399[5], i5398.rotationOverLifetime)
  i5398.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5399[6], i5398.shape)
  i5398.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5399[7], i5398.sizeBySpeed)
  i5398.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5399[8], i5398.sizeOverLifetime)
  i5398.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5399[9], i5398.textureSheetAnimation)
  i5398.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5399[10], i5398.velocityOverLifetime)
  i5398.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5399[11], i5398.noise)
  i5398.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5399[12], i5398.inheritVelocity)
  i5398.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5399[13], i5398.forceOverLifetime)
  i5398.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5399[14], i5398.limitVelocityOverLifetime)
  i5398.useAutoRandomSeed = !!i5399[15]
  i5398.randomSeed = i5399[16]
  return i5398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5400 = root || new pc.ParticleSystemMain()
  var i5401 = data
  i5400.duration = i5401[0]
  i5400.loop = !!i5401[1]
  i5400.prewarm = !!i5401[2]
  i5400.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[3], i5400.startDelay)
  i5400.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[4], i5400.startLifetime)
  i5400.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[5], i5400.startSpeed)
  i5400.startSize3D = !!i5401[6]
  i5400.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[7], i5400.startSizeX)
  i5400.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[8], i5400.startSizeY)
  i5400.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[9], i5400.startSizeZ)
  i5400.startRotation3D = !!i5401[10]
  i5400.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[11], i5400.startRotationX)
  i5400.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[12], i5400.startRotationY)
  i5400.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[13], i5400.startRotationZ)
  i5400.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5401[14], i5400.startColor)
  i5400.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5401[15], i5400.gravityModifier)
  i5400.simulationSpace = i5401[16]
  request.r(i5401[17], i5401[18], 0, i5400, 'customSimulationSpace')
  i5400.simulationSpeed = i5401[19]
  i5400.useUnscaledTime = !!i5401[20]
  i5400.scalingMode = i5401[21]
  i5400.playOnAwake = !!i5401[22]
  i5400.maxParticles = i5401[23]
  i5400.emitterVelocityMode = i5401[24]
  i5400.stopAction = i5401[25]
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5402 = root || new pc.MinMaxCurve()
  var i5403 = data
  i5402.mode = i5403[0]
  i5402.curveMin = new pc.AnimationCurve( { keys_flow: i5403[1] } )
  i5402.curveMax = new pc.AnimationCurve( { keys_flow: i5403[2] } )
  i5402.curveMultiplier = i5403[3]
  i5402.constantMin = i5403[4]
  i5402.constantMax = i5403[5]
  return i5402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5404 = root || new pc.MinMaxGradient()
  var i5405 = data
  i5404.mode = i5405[0]
  i5404.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5405[1], i5404.gradientMin)
  i5404.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5405[2], i5404.gradientMax)
  i5404.colorMin = new pc.Color(i5405[3], i5405[4], i5405[5], i5405[6])
  i5404.colorMax = new pc.Color(i5405[7], i5405[8], i5405[9], i5405[10])
  return i5404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5407 = data
  i5406.mode = i5407[0]
  var i5409 = i5407[1]
  var i5408 = []
  for(var i = 0; i < i5409.length; i += 1) {
    i5408.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5409[i + 0]) );
  }
  i5406.colorKeys = i5408
  var i5411 = i5407[2]
  var i5410 = []
  for(var i = 0; i < i5411.length; i += 1) {
    i5410.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5411[i + 0]) );
  }
  i5406.alphaKeys = i5410
  return i5406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5412 = root || new pc.ParticleSystemColorBySpeed()
  var i5413 = data
  i5412.enabled = !!i5413[0]
  i5412.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5413[1], i5412.color)
  i5412.range = new pc.Vec2( i5413[2], i5413[3] )
  return i5412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5417 = data
  i5416.color = new pc.Color(i5417[0], i5417[1], i5417[2], i5417[3])
  i5416.time = i5417[4]
  return i5416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5421 = data
  i5420.alpha = i5421[0]
  i5420.time = i5421[1]
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5422 = root || new pc.ParticleSystemColorOverLifetime()
  var i5423 = data
  i5422.enabled = !!i5423[0]
  i5422.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5423[1], i5422.color)
  return i5422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5424 = root || new pc.ParticleSystemEmitter()
  var i5425 = data
  i5424.enabled = !!i5425[0]
  i5424.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5425[1], i5424.rateOverTime)
  i5424.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5425[2], i5424.rateOverDistance)
  var i5427 = i5425[3]
  var i5426 = []
  for(var i = 0; i < i5427.length; i += 1) {
    i5426.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5427[i + 0]) );
  }
  i5424.bursts = i5426
  return i5424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5430 = root || new pc.ParticleSystemBurst()
  var i5431 = data
  i5430.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5431[0], i5430.count)
  i5430.cycleCount = i5431[1]
  i5430.minCount = i5431[2]
  i5430.maxCount = i5431[3]
  i5430.repeatInterval = i5431[4]
  i5430.time = i5431[5]
  return i5430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5432 = root || new pc.ParticleSystemRotationBySpeed()
  var i5433 = data
  i5432.enabled = !!i5433[0]
  i5432.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5433[1], i5432.x)
  i5432.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5433[2], i5432.y)
  i5432.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5433[3], i5432.z)
  i5432.separateAxes = !!i5433[4]
  i5432.range = new pc.Vec2( i5433[5], i5433[6] )
  return i5432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5434 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5435 = data
  i5434.enabled = !!i5435[0]
  i5434.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5435[1], i5434.x)
  i5434.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5435[2], i5434.y)
  i5434.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5435[3], i5434.z)
  i5434.separateAxes = !!i5435[4]
  return i5434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5436 = root || new pc.ParticleSystemShape()
  var i5437 = data
  i5436.enabled = !!i5437[0]
  i5436.shapeType = i5437[1]
  i5436.randomDirectionAmount = i5437[2]
  i5436.sphericalDirectionAmount = i5437[3]
  i5436.randomPositionAmount = i5437[4]
  i5436.alignToDirection = !!i5437[5]
  i5436.radius = i5437[6]
  i5436.radiusMode = i5437[7]
  i5436.radiusSpread = i5437[8]
  i5436.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5437[9], i5436.radiusSpeed)
  i5436.radiusThickness = i5437[10]
  i5436.angle = i5437[11]
  i5436.length = i5437[12]
  i5436.boxThickness = new pc.Vec3( i5437[13], i5437[14], i5437[15] )
  i5436.meshShapeType = i5437[16]
  request.r(i5437[17], i5437[18], 0, i5436, 'mesh')
  request.r(i5437[19], i5437[20], 0, i5436, 'meshRenderer')
  request.r(i5437[21], i5437[22], 0, i5436, 'skinnedMeshRenderer')
  i5436.useMeshMaterialIndex = !!i5437[23]
  i5436.meshMaterialIndex = i5437[24]
  i5436.useMeshColors = !!i5437[25]
  i5436.normalOffset = i5437[26]
  i5436.arc = i5437[27]
  i5436.arcMode = i5437[28]
  i5436.arcSpread = i5437[29]
  i5436.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5437[30], i5436.arcSpeed)
  i5436.donutRadius = i5437[31]
  i5436.position = new pc.Vec3( i5437[32], i5437[33], i5437[34] )
  i5436.rotation = new pc.Vec3( i5437[35], i5437[36], i5437[37] )
  i5436.scale = new pc.Vec3( i5437[38], i5437[39], i5437[40] )
  return i5436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5438 = root || new pc.ParticleSystemSizeBySpeed()
  var i5439 = data
  i5438.enabled = !!i5439[0]
  i5438.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5439[1], i5438.x)
  i5438.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5439[2], i5438.y)
  i5438.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5439[3], i5438.z)
  i5438.separateAxes = !!i5439[4]
  i5438.range = new pc.Vec2( i5439[5], i5439[6] )
  return i5438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5440 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5441 = data
  i5440.enabled = !!i5441[0]
  i5440.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5441[1], i5440.x)
  i5440.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5441[2], i5440.y)
  i5440.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5441[3], i5440.z)
  i5440.separateAxes = !!i5441[4]
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5442 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5443 = data
  i5442.enabled = !!i5443[0]
  i5442.mode = i5443[1]
  i5442.animation = i5443[2]
  i5442.numTilesX = i5443[3]
  i5442.numTilesY = i5443[4]
  i5442.useRandomRow = !!i5443[5]
  i5442.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5443[6], i5442.frameOverTime)
  i5442.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5443[7], i5442.startFrame)
  i5442.cycleCount = i5443[8]
  i5442.rowIndex = i5443[9]
  i5442.flipU = i5443[10]
  i5442.flipV = i5443[11]
  i5442.spriteCount = i5443[12]
  var i5445 = i5443[13]
  var i5444 = []
  for(var i = 0; i < i5445.length; i += 2) {
  request.r(i5445[i + 0], i5445[i + 1], 2, i5444, '')
  }
  i5442.sprites = i5444
  return i5442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5446 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5447 = data
  i5446.enabled = !!i5447[0]
  i5446.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[1], i5446.x)
  i5446.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[2], i5446.y)
  i5446.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[3], i5446.z)
  i5446.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[4], i5446.radial)
  i5446.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[5], i5446.speedModifier)
  i5446.space = i5447[6]
  i5446.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[7], i5446.orbitalX)
  i5446.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[8], i5446.orbitalY)
  i5446.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[9], i5446.orbitalZ)
  i5446.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[10], i5446.orbitalOffsetX)
  i5446.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[11], i5446.orbitalOffsetY)
  i5446.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5447[12], i5446.orbitalOffsetZ)
  return i5446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5448 = root || new pc.ParticleSystemNoise()
  var i5449 = data
  i5448.enabled = !!i5449[0]
  i5448.separateAxes = !!i5449[1]
  i5448.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[2], i5448.strengthX)
  i5448.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[3], i5448.strengthY)
  i5448.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[4], i5448.strengthZ)
  i5448.frequency = i5449[5]
  i5448.damping = !!i5449[6]
  i5448.octaveCount = i5449[7]
  i5448.octaveMultiplier = i5449[8]
  i5448.octaveScale = i5449[9]
  i5448.quality = i5449[10]
  i5448.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[11], i5448.scrollSpeed)
  i5448.scrollSpeedMultiplier = i5449[12]
  i5448.remapEnabled = !!i5449[13]
  i5448.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[14], i5448.remapX)
  i5448.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[15], i5448.remapY)
  i5448.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[16], i5448.remapZ)
  i5448.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[17], i5448.positionAmount)
  i5448.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[18], i5448.rotationAmount)
  i5448.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5449[19], i5448.sizeAmount)
  return i5448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5450 = root || new pc.ParticleSystemInheritVelocity()
  var i5451 = data
  i5450.enabled = !!i5451[0]
  i5450.mode = i5451[1]
  i5450.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5451[2], i5450.curve)
  return i5450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5452 = root || new pc.ParticleSystemForceOverLifetime()
  var i5453 = data
  i5452.enabled = !!i5453[0]
  i5452.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5453[1], i5452.x)
  i5452.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5453[2], i5452.y)
  i5452.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5453[3], i5452.z)
  i5452.space = i5453[4]
  i5452.randomized = !!i5453[5]
  return i5452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5454 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5455 = data
  i5454.enabled = !!i5455[0]
  i5454.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5455[1], i5454.limit)
  i5454.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5455[2], i5454.limitX)
  i5454.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5455[3], i5454.limitY)
  i5454.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5455[4], i5454.limitZ)
  i5454.dampen = i5455[5]
  i5454.separateAxes = !!i5455[6]
  i5454.space = i5455[7]
  i5454.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5455[8], i5454.drag)
  i5454.multiplyDragByParticleSize = !!i5455[9]
  i5454.multiplyDragByParticleVelocity = !!i5455[10]
  return i5454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5457 = data
  request.r(i5457[0], i5457[1], 0, i5456, 'mesh')
  i5456.meshCount = i5457[2]
  i5456.activeVertexStreamsCount = i5457[3]
  i5456.alignment = i5457[4]
  i5456.renderMode = i5457[5]
  i5456.sortMode = i5457[6]
  i5456.lengthScale = i5457[7]
  i5456.velocityScale = i5457[8]
  i5456.cameraVelocityScale = i5457[9]
  i5456.normalDirection = i5457[10]
  i5456.sortingFudge = i5457[11]
  i5456.minParticleSize = i5457[12]
  i5456.maxParticleSize = i5457[13]
  i5456.pivot = new pc.Vec3( i5457[14], i5457[15], i5457[16] )
  request.r(i5457[17], i5457[18], 0, i5456, 'trailMaterial')
  i5456.applyActiveColorSpace = !!i5457[19]
  i5456.enabled = !!i5457[20]
  request.r(i5457[21], i5457[22], 0, i5456, 'sharedMaterial')
  var i5459 = i5457[23]
  var i5458 = []
  for(var i = 0; i < i5459.length; i += 2) {
  request.r(i5459[i + 0], i5459[i + 1], 2, i5458, '')
  }
  i5456.sharedMaterials = i5458
  i5456.receiveShadows = !!i5457[24]
  i5456.shadowCastingMode = i5457[25]
  i5456.sortingLayerID = i5457[26]
  i5456.sortingOrder = i5457[27]
  i5456.lightmapIndex = i5457[28]
  i5456.lightmapSceneIndex = i5457[29]
  i5456.lightmapScaleOffset = new pc.Vec4( i5457[30], i5457[31], i5457[32], i5457[33] )
  i5456.lightProbeUsage = i5457[34]
  i5456.reflectionProbeUsage = i5457[35]
  return i5456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5461 = data
  i5460.name = i5461[0]
  i5460.atlasId = i5461[1]
  i5460.mipmapCount = i5461[2]
  i5460.hdr = !!i5461[3]
  i5460.size = i5461[4]
  i5460.anisoLevel = i5461[5]
  i5460.filterMode = i5461[6]
  var i5463 = i5461[7]
  var i5462 = []
  for(var i = 0; i < i5463.length; i += 4) {
    i5462.push( UnityEngine.Rect.MinMaxRect(i5463[i + 0], i5463[i + 1], i5463[i + 2], i5463[i + 3]) );
  }
  i5460.rects = i5462
  i5460.wrapU = i5461[8]
  i5460.wrapV = i5461[9]
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5467 = data
  i5466.name = i5467[0]
  i5466.index = i5467[1]
  i5466.startup = !!i5467[2]
  return i5466
}

Deserializers["BB10_MainObjControl"] = function (request, data, root) {
  var i5468 = root || request.c( 'BB10_MainObjControl' )
  var i5469 = data
  request.r(i5469[0], i5469[1], 0, i5468, 'colorControl')
  request.r(i5469[2], i5469[3], 0, i5468, 'pattemCreater')
  request.r(i5469[4], i5469[5], 0, i5468, 'nextViewerCtr')
  request.r(i5469[6], i5469[7], 0, i5468, 'grid')
  request.r(i5469[8], i5469[9], 0, i5468, 'planeViewCrt')
  request.r(i5469[10], i5469[11], 0, i5468, 'groundView')
  request.r(i5469[12], i5469[13], 0, i5468, 'sG_Block_EffectCtr')
  request.r(i5469[14], i5469[15], 0, i5468, 'camScript')
  request.r(i5469[16], i5469[17], 0, i5468, 'scoreCtr')
  request.r(i5469[18], i5469[19], 0, i5468, 'helpCtr')
  request.r(i5469[20], i5469[21], 0, i5468, 'screenCtr')
  request.r(i5469[22], i5469[23], 0, i5468, 'tutorial')
  request.r(i5469[24], i5469[25], 0, i5468, 'cam')
  return i5468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5471 = data
  i5470.aspect = i5471[0]
  i5470.orthographic = !!i5471[1]
  i5470.orthographicSize = i5471[2]
  i5470.backgroundColor = new pc.Color(i5471[3], i5471[4], i5471[5], i5471[6])
  i5470.nearClipPlane = i5471[7]
  i5470.farClipPlane = i5471[8]
  i5470.fieldOfView = i5471[9]
  i5470.depth = i5471[10]
  i5470.clearFlags = i5471[11]
  i5470.cullingMask = i5471[12]
  i5470.rect = i5471[13]
  request.r(i5471[14], i5471[15], 0, i5470, 'targetTexture')
  i5470.usePhysicalProperties = !!i5471[16]
  i5470.focalLength = i5471[17]
  i5470.sensorSize = new pc.Vec2( i5471[18], i5471[19] )
  i5470.lensShift = new pc.Vec2( i5471[20], i5471[21] )
  i5470.gateFit = i5471[22]
  i5470.commandBufferCount = i5471[23]
  i5470.cameraType = i5471[24]
  i5470.enabled = !!i5471[25]
  return i5470
}

Deserializers["CameraScript"] = function (request, data, root) {
  var i5472 = root || request.c( 'CameraScript' )
  var i5473 = data
  request.r(i5473[0], i5473[1], 0, i5472, 'cam')
  return i5472
}

Deserializers["CameraResponsive"] = function (request, data, root) {
  var i5474 = root || request.c( 'CameraResponsive' )
  var i5475 = data
  i5474.orthoSizeV = i5475[0]
  i5474.orthoSizeVTall = i5475[1]
  i5474.orthoSizeH = i5475[2]
  i5474.orthoSizeTab = i5475[3]
  return i5474
}

Deserializers["MainAudio"] = function (request, data, root) {
  var i5476 = root || request.c( 'MainAudio' )
  var i5477 = data
  var i5479 = i5477[0]
  var i5478 = []
  for(var i = 0; i < i5479.length; i += 1) {
    i5478.push( request.d('InputAudio', i5479[i + 0]) );
  }
  i5476.listInputAudio = i5478
  i5476.isMute = !!i5477[1]
  return i5476
}

Deserializers["InputAudio"] = function (request, data, root) {
  var i5482 = root || request.c( 'InputAudio' )
  var i5483 = data
  i5482.type = i5483[0]
  request.r(i5483[1], i5483[2], 0, i5482, 'audioClip')
  i5482.loop = !!i5483[3]
  i5482.volume = i5483[4]
  return i5482
}

Deserializers["BB10_Grid"] = function (request, data, root) {
  var i5484 = root || request.c( 'BB10_Grid' )
  var i5485 = data
  i5484.numberCol = i5485[0]
  i5484.numberRow = i5485[1]
  i5484.waitDelete = i5485[2]
  i5484.waitPerUnit = i5485[3]
  i5484.durationGray = i5485[4]
  i5484.nonGray = i5485[5]
  i5484.halfGray = i5485[6]
  i5484.fullGray = i5485[7]
  i5484.waitUnit = i5485[8]
  request.r(i5485[9], i5485[10], 0, i5484, 'completeText')
  i5484.score = i5485[11]
  request.r(i5485[12], i5485[13], 0, i5484, 'cellPrefab')
  request.r(i5485[14], i5485[15], 0, i5484, 'parentGrid')
  i5484.cellSize = i5485[16]
  i5484.isCreateCell = !!i5485[17]
  request.r(i5485[18], i5485[19], 0, i5484, 'saveData')
  return i5484
}

Deserializers["BB10_PattemCreater"] = function (request, data, root) {
  var i5486 = root || request.c( 'BB10_PattemCreater' )
  var i5487 = data
  request.r(i5487[0], i5487[1], 0, i5486, 'cubePrefab')
  var i5489 = i5487[2]
  var i5488 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i5489.length; i += 2) {
  request.r(i5489[i + 0], i5489[i + 1], 1, i5488, '')
  }
  i5486.listCube = i5488
  request.r(i5487[3], i5487[4], 0, i5486, 'pattemDataSave')
  return i5486
}

Deserializers["BB10_PlaneView"] = function (request, data, root) {
  var i5492 = root || request.c( 'BB10_PlaneView' )
  var i5493 = data
  request.r(i5493[0], i5493[1], 0, i5492, 'camera')
  i5492.y = i5493[2]
  i5492.scale = i5493[3]
  i5492.scaleSmall = i5493[4]
  i5492.distanceTouch = i5493[5]
  i5492.duration = i5493[6]
  request.r(i5493[7], i5493[8], 0, i5492, 'cam')
  var i5495 = i5493[9]
  var i5494 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i5495.length; i += 2) {
  request.r(i5495[i + 0], i5495[i + 1], 1, i5494, '')
  }
  i5492.listBlock = i5494
  i5492.selected = i5493[10]
  i5492.isScaling = !!i5493[11]
  i5492.groundAcepted = !!i5493[12]
  i5492.faceMousePos = new pc.Vec2( i5493[13], i5493[14] )
  i5492.isAuto = !!i5493[15]
  i5492.state = i5493[16]
  i5492.speedMoveDrop = i5493[17]
  return i5492
}

Deserializers["BB10_GroundView"] = function (request, data, root) {
  var i5496 = root || request.c( 'BB10_GroundView' )
  var i5497 = data
  request.r(i5497[0], i5497[1], 0, i5496, 'groundPrefab')
  var i5499 = i5497[2]
  var i5498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i5499.length; i += 2) {
  request.r(i5499[i + 0], i5499[i + 1], 1, i5498, '')
  }
  i5496.listBlockRender = i5498
  return i5496
}

Deserializers["BB10_NextViewerControl"] = function (request, data, root) {
  var i5502 = root || request.c( 'BB10_NextViewerControl' )
  var i5503 = data
  request.r(i5503[0], i5503[1], 0, i5502, 'pattemTableObj')
  request.r(i5503[2], i5503[3], 0, i5502, 'spawnData')
  var i5505 = i5503[4]
  var i5504 = []
  for(var i = 0; i < i5505.length; i += 2) {
  request.r(i5505[i + 0], i5505[i + 1], 2, i5504, '')
  }
  i5502.listView = i5504
  var i5507 = i5503[5]
  var i5506 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i5507.length; i += 2) {
  request.r(i5507[i + 0], i5507[i + 1], 1, i5506, '')
  }
  i5502.listUnit0 = i5506
  var i5509 = i5503[6]
  var i5508 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i5509.length; i += 2) {
  request.r(i5509[i + 0], i5509[i + 1], 1, i5508, '')
  }
  i5502.listUnit1 = i5508
  var i5511 = i5503[7]
  var i5510 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i5511.length; i += 2) {
  request.r(i5511[i + 0], i5511[i + 1], 1, i5510, '')
  }
  i5502.listUnit2 = i5510
  return i5502
}

Deserializers["BB10_NextViewer"] = function (request, data, root) {
  var i5514 = root || request.c( 'BB10_NextViewer' )
  var i5515 = data
  i5514.index = i5515[0]
  i5514.scale = i5515[1]
  i5514.durationLight = i5515[2]
  i5514.duration = i5515[3]
  i5514.durationIn = i5515[4]
  i5514.myType = i5515[5]
  i5514.rotateTime = i5515[6]
  var i5517 = i5515[7]
  var i5516 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_BrickCubeUnit')))
  for(var i = 0; i < i5517.length; i += 2) {
  request.r(i5517[i + 0], i5517[i + 1], 1, i5516, '')
  }
  i5514.listBlock = i5516
  i5514.state = i5515[8]
  i5514.startPos1 = new pc.Vec2( i5515[9], i5515[10] )
  i5514.startPos2 = new pc.Vec2( i5515[11], i5515[12] )
  i5514.ac1 = new pc.AnimationCurve( { keys_flow: i5515[13] } )
  i5514.ac2 = new pc.AnimationCurve( { keys_flow: i5515[14] } )
  return i5514
}

Deserializers["BB10_ScoreCtr"] = function (request, data, root) {
  var i5518 = root || request.c( 'BB10_ScoreCtr' )
  var i5519 = data
  request.r(i5519[0], i5519[1], 0, i5518, 'scorePrefab')
  var i5521 = i5519[2]
  var i5520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextMesh')))
  for(var i = 0; i < i5521.length; i += 2) {
  request.r(i5521[i + 0], i5521[i + 1], 1, i5520, '')
  }
  i5518.listText = i5520
  i5518.startColor = new pc.Color(i5519[3], i5519[4], i5519[5], i5519[6])
  i5518.endColor = new pc.Color(i5519[7], i5519[8], i5519[9], i5519[10])
  request.r(i5519[11], i5519[12], 0, i5518, 'mat')
  i5518.speed0 = i5519[13]
  i5518.G = i5519[14]
  i5518.duration = i5519[15]
  return i5518
}

Deserializers["BB10_ShowHelpCtr"] = function (request, data, root) {
  var i5524 = root || request.c( 'BB10_ShowHelpCtr' )
  var i5525 = data
  request.r(i5525[0], i5525[1], 0, i5524, 'groundPrefab')
  var i5527 = i5525[2]
  var i5526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5527.length; i += 2) {
  request.r(i5527[i + 0], i5527[i + 1], 1, i5526, '')
  }
  i5524.listBlockDisable = i5526
  var i5529 = i5525[3]
  var i5528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5529.length; i += 2) {
  request.r(i5529[i + 0], i5529[i + 1], 1, i5528, '')
  }
  i5524.listBlockActive = i5528
  return i5524
}

Deserializers["BB10_Tutorial"] = function (request, data, root) {
  var i5532 = root || request.c( 'BB10_Tutorial' )
  var i5533 = data
  request.r(i5533[0], i5533[1], 0, i5532, 'finger')
  request.r(i5533[2], i5533[3], 0, i5532, 'circle')
  i5532.durationMoveUp = i5533[4]
  i5532.durationMoveDown = i5533[5]
  i5532.durationScale = i5533[6]
  i5532.durationMoveShort = i5533[7]
  i5532.state = i5533[8]
  return i5532
}

Deserializers["BB10_ScreenCtr"] = function (request, data, root) {
  var i5534 = root || request.c( 'BB10_ScreenCtr' )
  var i5535 = data
  request.r(i5535[0], i5535[1], 0, i5534, 'BgUnit')
  request.r(i5535[2], i5535[3], 0, i5534, 'topRec')
  request.r(i5535[4], i5535[5], 0, i5534, 'bottomTrans')
  var i5537 = i5535[6]
  var i5536 = []
  for(var i = 0; i < i5537.length; i += 2) {
  request.r(i5537[i + 0], i5537[i + 1], 2, i5536, '')
  }
  i5534.listPattemTrans = i5536
  i5534.defaultPattemY = i5535[7]
  i5534.defaultPattemUIY = i5535[8]
  i5534.orthographicSizeMin = i5535[9]
  request.r(i5535[10], i5535[11], 0, i5534, 'cam')
  i5534.distanceEdge = i5535[12]
  i5534.durationFadeIn = i5535[13]
  i5534.distanceMoveFade = i5535[14]
  i5534.startAlpha = i5535[15]
  i5534.F = i5535[16]
  i5534.FUI = i5535[17]
  request.r(i5535[18], i5535[19], 0, i5534, 'BG')
  i5534.targetAlpha = i5535[20]
  request.r(i5535[21], i5535[22], 0, i5534, 'partTop')
  request.r(i5535[23], i5535[24], 0, i5534, 'partDown')
  request.r(i5535[25], i5535[26], 0, i5534, 'partLeft')
  request.r(i5535[27], i5535[28], 0, i5534, 'partRight')
  var i5539 = i5535[29]
  var i5538 = []
  for(var i = 0; i < i5539.length; i += 2) {
  request.r(i5539[i + 0], i5539[i + 1], 2, i5538, '')
  }
  i5534.grid = i5538
  i5534.gridMoving = !!i5535[30]
  i5534.waitStep = i5535[31]
  i5534.durationScaleUp = i5535[32]
  i5534.acScale = new pc.AnimationCurve( { keys_flow: i5535[33] } )
  request.r(i5535[34], i5535[35], 0, i5534, 'parentCell')
  return i5534
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i5542 = root || request.c( 'GamePlayManager' )
  var i5543 = data
  i5542.score = i5543[0]
  i5542.target = i5543[1]
  i5542.totalClick = i5543[2]
  i5542.countClick = i5543[3]
  request.r(i5543[4], i5543[5], 0, i5542, 'textProScore')
  request.r(i5543[6], i5543[7], 0, i5542, 'textProTarget')
  request.r(i5543[8], i5543[9], 0, i5542, 'textScore')
  request.r(i5543[10], i5543[11], 0, i5542, 'textTarget')
  request.r(i5543[12], i5543[13], 0, i5542, 'win')
  request.r(i5543[14], i5543[15], 0, i5542, 'lose')
  request.r(i5543[16], i5543[17], 0, i5542, 'buttonDownload')
  i5542.isFinishGame = !!i5543[18]
  return i5542
}

Deserializers["ResponsiveManager"] = function (request, data, root) {
  var i5544 = root || request.c( 'ResponsiveManager' )
  var i5545 = data
  i5544.screenType = i5545[0]
  return i5544
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i5546 = root || request.c( 'TutorialManager' )
  var i5547 = data
  request.r(i5547[0], i5547[1], 0, i5546, 'groundView')
  request.r(i5547[2], i5547[3], 0, i5546, 'firstBlock')
  request.r(i5547[4], i5547[5], 0, i5546, 'Hand')
  request.r(i5547[6], i5547[7], 0, i5546, 'TextTut')
  i5546.idleTimer = i5547[8]
  i5546.idleTimeToShow = i5547[9]
  request.r(i5547[10], i5547[11], 0, i5546, 'blockTutorial')
  var i5549 = i5547[12]
  var i5548 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_NextViewer')))
  for(var i = 0; i < i5549.length; i += 2) {
  request.r(i5549[i + 0], i5549[i + 1], 1, i5548, '')
  }
  i5546.nextViewers = i5548
  i5546.r = i5547[13]
  i5546.c = i5547[14]
  return i5546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5553 = data
  i5552.pivot = new pc.Vec2( i5553[0], i5553[1] )
  i5552.anchorMin = new pc.Vec2( i5553[2], i5553[3] )
  i5552.anchorMax = new pc.Vec2( i5553[4], i5553[5] )
  i5552.sizeDelta = new pc.Vec2( i5553[6], i5553[7] )
  i5552.anchoredPosition3D = new pc.Vec3( i5553[8], i5553[9], i5553[10] )
  i5552.rotation = new pc.Quat(i5553[11], i5553[12], i5553[13], i5553[14])
  i5552.scale = new pc.Vec3( i5553[15], i5553[16], i5553[17] )
  return i5552
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i5554 = root || request.c( 'TMPro.TextMeshPro' )
  var i5555 = data
  i5554._SortingLayer = i5555[0]
  i5554._SortingLayerID = i5555[1]
  i5554._SortingOrder = i5555[2]
  i5554.m_hasFontAssetChanged = !!i5555[3]
  request.r(i5555[4], i5555[5], 0, i5554, 'm_renderer')
  i5554.m_maskType = i5555[6]
  i5554.m_text = i5555[7]
  i5554.m_isRightToLeft = !!i5555[8]
  request.r(i5555[9], i5555[10], 0, i5554, 'm_fontAsset')
  request.r(i5555[11], i5555[12], 0, i5554, 'm_sharedMaterial')
  var i5557 = i5555[13]
  var i5556 = []
  for(var i = 0; i < i5557.length; i += 2) {
  request.r(i5557[i + 0], i5557[i + 1], 2, i5556, '')
  }
  i5554.m_fontSharedMaterials = i5556
  request.r(i5555[14], i5555[15], 0, i5554, 'm_fontMaterial')
  var i5559 = i5555[16]
  var i5558 = []
  for(var i = 0; i < i5559.length; i += 2) {
  request.r(i5559[i + 0], i5559[i + 1], 2, i5558, '')
  }
  i5554.m_fontMaterials = i5558
  i5554.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5555[17], i5555[18], i5555[19], i5555[20])
  i5554.m_fontColor = new pc.Color(i5555[21], i5555[22], i5555[23], i5555[24])
  i5554.m_enableVertexGradient = !!i5555[25]
  i5554.m_colorMode = i5555[26]
  i5554.m_fontColorGradient = request.d('TMPro.VertexGradient', i5555[27], i5554.m_fontColorGradient)
  request.r(i5555[28], i5555[29], 0, i5554, 'm_fontColorGradientPreset')
  request.r(i5555[30], i5555[31], 0, i5554, 'm_spriteAsset')
  i5554.m_tintAllSprites = !!i5555[32]
  request.r(i5555[33], i5555[34], 0, i5554, 'm_StyleSheet')
  i5554.m_TextStyleHashCode = i5555[35]
  i5554.m_overrideHtmlColors = !!i5555[36]
  i5554.m_faceColor = UnityEngine.Color32.ConstructColor(i5555[37], i5555[38], i5555[39], i5555[40])
  i5554.m_fontSize = i5555[41]
  i5554.m_fontSizeBase = i5555[42]
  i5554.m_fontWeight = i5555[43]
  i5554.m_enableAutoSizing = !!i5555[44]
  i5554.m_fontSizeMin = i5555[45]
  i5554.m_fontSizeMax = i5555[46]
  i5554.m_fontStyle = i5555[47]
  i5554.m_HorizontalAlignment = i5555[48]
  i5554.m_VerticalAlignment = i5555[49]
  i5554.m_textAlignment = i5555[50]
  i5554.m_characterSpacing = i5555[51]
  i5554.m_wordSpacing = i5555[52]
  i5554.m_lineSpacing = i5555[53]
  i5554.m_lineSpacingMax = i5555[54]
  i5554.m_paragraphSpacing = i5555[55]
  i5554.m_charWidthMaxAdj = i5555[56]
  i5554.m_enableWordWrapping = !!i5555[57]
  i5554.m_wordWrappingRatios = i5555[58]
  i5554.m_overflowMode = i5555[59]
  request.r(i5555[60], i5555[61], 0, i5554, 'm_linkedTextComponent')
  request.r(i5555[62], i5555[63], 0, i5554, 'parentLinkedComponent')
  i5554.m_enableKerning = !!i5555[64]
  i5554.m_enableExtraPadding = !!i5555[65]
  i5554.checkPaddingRequired = !!i5555[66]
  i5554.m_isRichText = !!i5555[67]
  i5554.m_parseCtrlCharacters = !!i5555[68]
  i5554.m_isOrthographic = !!i5555[69]
  i5554.m_isCullingEnabled = !!i5555[70]
  i5554.m_horizontalMapping = i5555[71]
  i5554.m_verticalMapping = i5555[72]
  i5554.m_uvLineOffset = i5555[73]
  i5554.m_geometrySortingOrder = i5555[74]
  i5554.m_IsTextObjectScaleStatic = !!i5555[75]
  i5554.m_VertexBufferAutoSizeReduction = !!i5555[76]
  i5554.m_useMaxVisibleDescender = !!i5555[77]
  i5554.m_pageToDisplay = i5555[78]
  i5554.m_margin = new pc.Vec4( i5555[79], i5555[80], i5555[81], i5555[82] )
  i5554.m_isUsingLegacyAnimationComponent = !!i5555[83]
  i5554.m_isVolumetricText = !!i5555[84]
  i5554.m_Maskable = !!i5555[85]
  request.r(i5555[86], i5555[87], 0, i5554, 'm_Material')
  i5554.m_Color = new pc.Color(i5555[88], i5555[89], i5555[90], i5555[91])
  i5554.m_RaycastTarget = !!i5555[92]
  i5554.m_RaycastPadding = new pc.Vec4( i5555[93], i5555[94], i5555[95], i5555[96] )
  return i5554
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5560 = root || request.c( 'TMPro.VertexGradient' )
  var i5561 = data
  i5560.topLeft = new pc.Color(i5561[0], i5561[1], i5561[2], i5561[3])
  i5560.topRight = new pc.Color(i5561[4], i5561[5], i5561[6], i5561[7])
  i5560.bottomLeft = new pc.Color(i5561[8], i5561[9], i5561[10], i5561[11])
  i5560.bottomRight = new pc.Color(i5561[12], i5561[13], i5561[14], i5561[15])
  return i5560
}

Deserializers["ScaleElement"] = function (request, data, root) {
  var i5562 = root || request.c( 'ScaleElement' )
  var i5563 = data
  i5562.animationDuration = i5563[0]
  i5562.delay = i5563[1]
  i5562.targetScale = new pc.Vec3( i5563[2], i5563[3], i5563[4] )
  return i5562
}

Deserializers["SG_Block_EffectCtr"] = function (request, data, root) {
  var i5564 = root || request.c( 'SG_Block_EffectCtr' )
  var i5565 = data
  var i5567 = i5565[0]
  var i5566 = []
  for(var i = 0; i < i5567.length; i += 2) {
  request.r(i5567[i + 0], i5567[i + 1], 2, i5566, '')
  }
  i5564.particlePrefabs = i5566
  var i5569 = i5565[1]
  var i5568 = []
  for(var i = 0; i < i5569.length; i += 1) {
  var i5571 = i5569[i + 0]
  var i5570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i5571.length; i += 2) {
  request.r(i5571[i + 0], i5571[i + 1], 1, i5570, '')
  }
    i5568.push( i5570 );
  }
  i5564.listParticlesDisable = i5568
  i5564.preload = i5565[2]
  return i5564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5579 = data
  i5578.type = i5579[0]
  i5578.color = new pc.Color(i5579[1], i5579[2], i5579[3], i5579[4])
  i5578.cullingMask = i5579[5]
  i5578.intensity = i5579[6]
  i5578.range = i5579[7]
  i5578.spotAngle = i5579[8]
  i5578.shadows = i5579[9]
  i5578.shadowNormalBias = i5579[10]
  i5578.shadowBias = i5579[11]
  i5578.shadowStrength = i5579[12]
  i5578.shadowResolution = i5579[13]
  i5578.lightmapBakeType = i5579[14]
  i5578.renderMode = i5579[15]
  request.r(i5579[16], i5579[17], 0, i5578, 'cookie')
  i5578.cookieSize = i5579[18]
  i5578.enabled = !!i5579[19]
  return i5578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5581 = data
  i5580.planeDistance = i5581[0]
  i5580.referencePixelsPerUnit = i5581[1]
  i5580.isFallbackOverlay = !!i5581[2]
  i5580.renderMode = i5581[3]
  i5580.renderOrder = i5581[4]
  i5580.sortingLayerName = i5581[5]
  i5580.sortingOrder = i5581[6]
  i5580.scaleFactor = i5581[7]
  request.r(i5581[8], i5581[9], 0, i5580, 'worldCamera')
  i5580.overrideSorting = !!i5581[10]
  i5580.pixelPerfect = !!i5581[11]
  i5580.targetDisplay = i5581[12]
  i5580.overridePixelPerfect = !!i5581[13]
  i5580.enabled = !!i5581[14]
  return i5580
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5582 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5583 = data
  i5582.m_UiScaleMode = i5583[0]
  i5582.m_ReferencePixelsPerUnit = i5583[1]
  i5582.m_ScaleFactor = i5583[2]
  i5582.m_ReferenceResolution = new pc.Vec2( i5583[3], i5583[4] )
  i5582.m_ScreenMatchMode = i5583[5]
  i5582.m_MatchWidthOrHeight = i5583[6]
  i5582.m_PhysicalUnit = i5583[7]
  i5582.m_FallbackScreenDPI = i5583[8]
  i5582.m_DefaultSpriteDPI = i5583[9]
  i5582.m_DynamicPixelsPerUnit = i5583[10]
  i5582.m_PresetInfoIsWorld = !!i5583[11]
  return i5582
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5584 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5585 = data
  i5584.m_IgnoreReversedGraphics = !!i5585[0]
  i5584.m_BlockingObjects = i5585[1]
  i5584.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5585[2] )
  return i5584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5587 = data
  i5586.cullTransparentMesh = !!i5587[0]
  return i5586
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5588 = root || request.c( 'UnityEngine.UI.Image' )
  var i5589 = data
  request.r(i5589[0], i5589[1], 0, i5588, 'm_Sprite')
  i5588.m_Type = i5589[2]
  i5588.m_PreserveAspect = !!i5589[3]
  i5588.m_FillCenter = !!i5589[4]
  i5588.m_FillMethod = i5589[5]
  i5588.m_FillAmount = i5589[6]
  i5588.m_FillClockwise = !!i5589[7]
  i5588.m_FillOrigin = i5589[8]
  i5588.m_UseSpriteMesh = !!i5589[9]
  i5588.m_PixelsPerUnitMultiplier = i5589[10]
  i5588.m_Maskable = !!i5589[11]
  request.r(i5589[12], i5589[13], 0, i5588, 'm_Material')
  i5588.m_Color = new pc.Color(i5589[14], i5589[15], i5589[16], i5589[17])
  i5588.m_RaycastTarget = !!i5589[18]
  i5588.m_RaycastPadding = new pc.Vec4( i5589[19], i5589[20], i5589[21], i5589[22] )
  return i5588
}

Deserializers["BB10_MainCanvasUI"] = function (request, data, root) {
  var i5590 = root || request.c( 'BB10_MainCanvasUI' )
  var i5591 = data
  request.r(i5591[0], i5591[1], 0, i5590, 'inGameScript')
  request.r(i5591[2], i5591[3], 0, i5590, 'faderScript')
  i5590.OnDropPiece = request.d('System.Action', i5591[4], i5590.OnDropPiece)
  request.r(i5591[5], i5591[6], 0, i5590, 'blur')
  i5590.OnNeedStopAdBreak = request.d('System.Action', i5591[7], i5590.OnNeedStopAdBreak)
  return i5590
}

Deserializers["System.Action"] = function (request, data, root) {
  var i5592 = root || request.c( 'System.Action' )
  var i5593 = data
  return i5592
}

Deserializers["ResponsiveWorld"] = function (request, data, root) {
  var i5594 = root || request.c( 'ResponsiveWorld' )
  var i5595 = data
  i5594.positionVertical = new pc.Vec3( i5595[0], i5595[1], i5595[2] )
  i5594.positionVerticalTall = new pc.Vec3( i5595[3], i5595[4], i5595[5] )
  i5594.positionHorizontal = new pc.Vec3( i5595[6], i5595[7], i5595[8] )
  i5594.positionTablet = new pc.Vec3( i5595[9], i5595[10], i5595[11] )
  return i5594
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5596 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5597 = data
  i5596.m_hasFontAssetChanged = !!i5597[0]
  request.r(i5597[1], i5597[2], 0, i5596, 'm_baseMaterial')
  i5596.m_maskOffset = new pc.Vec4( i5597[3], i5597[4], i5597[5], i5597[6] )
  i5596.m_text = i5597[7]
  i5596.m_isRightToLeft = !!i5597[8]
  request.r(i5597[9], i5597[10], 0, i5596, 'm_fontAsset')
  request.r(i5597[11], i5597[12], 0, i5596, 'm_sharedMaterial')
  var i5599 = i5597[13]
  var i5598 = []
  for(var i = 0; i < i5599.length; i += 2) {
  request.r(i5599[i + 0], i5599[i + 1], 2, i5598, '')
  }
  i5596.m_fontSharedMaterials = i5598
  request.r(i5597[14], i5597[15], 0, i5596, 'm_fontMaterial')
  var i5601 = i5597[16]
  var i5600 = []
  for(var i = 0; i < i5601.length; i += 2) {
  request.r(i5601[i + 0], i5601[i + 1], 2, i5600, '')
  }
  i5596.m_fontMaterials = i5600
  i5596.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5597[17], i5597[18], i5597[19], i5597[20])
  i5596.m_fontColor = new pc.Color(i5597[21], i5597[22], i5597[23], i5597[24])
  i5596.m_enableVertexGradient = !!i5597[25]
  i5596.m_colorMode = i5597[26]
  i5596.m_fontColorGradient = request.d('TMPro.VertexGradient', i5597[27], i5596.m_fontColorGradient)
  request.r(i5597[28], i5597[29], 0, i5596, 'm_fontColorGradientPreset')
  request.r(i5597[30], i5597[31], 0, i5596, 'm_spriteAsset')
  i5596.m_tintAllSprites = !!i5597[32]
  request.r(i5597[33], i5597[34], 0, i5596, 'm_StyleSheet')
  i5596.m_TextStyleHashCode = i5597[35]
  i5596.m_overrideHtmlColors = !!i5597[36]
  i5596.m_faceColor = UnityEngine.Color32.ConstructColor(i5597[37], i5597[38], i5597[39], i5597[40])
  i5596.m_fontSize = i5597[41]
  i5596.m_fontSizeBase = i5597[42]
  i5596.m_fontWeight = i5597[43]
  i5596.m_enableAutoSizing = !!i5597[44]
  i5596.m_fontSizeMin = i5597[45]
  i5596.m_fontSizeMax = i5597[46]
  i5596.m_fontStyle = i5597[47]
  i5596.m_HorizontalAlignment = i5597[48]
  i5596.m_VerticalAlignment = i5597[49]
  i5596.m_textAlignment = i5597[50]
  i5596.m_characterSpacing = i5597[51]
  i5596.m_wordSpacing = i5597[52]
  i5596.m_lineSpacing = i5597[53]
  i5596.m_lineSpacingMax = i5597[54]
  i5596.m_paragraphSpacing = i5597[55]
  i5596.m_charWidthMaxAdj = i5597[56]
  i5596.m_enableWordWrapping = !!i5597[57]
  i5596.m_wordWrappingRatios = i5597[58]
  i5596.m_overflowMode = i5597[59]
  request.r(i5597[60], i5597[61], 0, i5596, 'm_linkedTextComponent')
  request.r(i5597[62], i5597[63], 0, i5596, 'parentLinkedComponent')
  i5596.m_enableKerning = !!i5597[64]
  i5596.m_enableExtraPadding = !!i5597[65]
  i5596.checkPaddingRequired = !!i5597[66]
  i5596.m_isRichText = !!i5597[67]
  i5596.m_parseCtrlCharacters = !!i5597[68]
  i5596.m_isOrthographic = !!i5597[69]
  i5596.m_isCullingEnabled = !!i5597[70]
  i5596.m_horizontalMapping = i5597[71]
  i5596.m_verticalMapping = i5597[72]
  i5596.m_uvLineOffset = i5597[73]
  i5596.m_geometrySortingOrder = i5597[74]
  i5596.m_IsTextObjectScaleStatic = !!i5597[75]
  i5596.m_VertexBufferAutoSizeReduction = !!i5597[76]
  i5596.m_useMaxVisibleDescender = !!i5597[77]
  i5596.m_pageToDisplay = i5597[78]
  i5596.m_margin = new pc.Vec4( i5597[79], i5597[80], i5597[81], i5597[82] )
  i5596.m_isUsingLegacyAnimationComponent = !!i5597[83]
  i5596.m_isVolumetricText = !!i5597[84]
  i5596.m_Maskable = !!i5597[85]
  request.r(i5597[86], i5597[87], 0, i5596, 'm_Material')
  i5596.m_Color = new pc.Color(i5597[88], i5597[89], i5597[90], i5597[91])
  i5596.m_RaycastTarget = !!i5597[92]
  i5596.m_RaycastPadding = new pc.Vec4( i5597[93], i5597[94], i5597[95], i5597[96] )
  return i5596
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5602 = root || request.c( 'UnityEngine.UI.Button' )
  var i5603 = data
  i5602.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5603[0], i5602.m_OnClick)
  i5602.m_Navigation = request.d('UnityEngine.UI.Navigation', i5603[1], i5602.m_Navigation)
  i5602.m_Transition = i5603[2]
  i5602.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5603[3], i5602.m_Colors)
  i5602.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5603[4], i5602.m_SpriteState)
  i5602.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5603[5], i5602.m_AnimationTriggers)
  i5602.m_Interactable = !!i5603[6]
  request.r(i5603[7], i5603[8], 0, i5602, 'm_TargetGraphic')
  return i5602
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5604 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5605 = data
  i5604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5605[0], i5604.m_PersistentCalls)
  return i5604
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5606 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5607 = data
  var i5609 = i5607[0]
  var i5608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5609.length; i += 1) {
    i5608.add(request.d('UnityEngine.Events.PersistentCall', i5609[i + 0]));
  }
  i5606.m_Calls = i5608
  return i5606
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5612 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5613 = data
  request.r(i5613[0], i5613[1], 0, i5612, 'm_Target')
  i5612.m_TargetAssemblyTypeName = i5613[2]
  i5612.m_MethodName = i5613[3]
  i5612.m_Mode = i5613[4]
  i5612.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5613[5], i5612.m_Arguments)
  i5612.m_CallState = i5613[6]
  return i5612
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5614 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5615 = data
  request.r(i5615[0], i5615[1], 0, i5614, 'm_ObjectArgument')
  i5614.m_ObjectArgumentAssemblyTypeName = i5615[2]
  i5614.m_IntArgument = i5615[3]
  i5614.m_FloatArgument = i5615[4]
  i5614.m_StringArgument = i5615[5]
  i5614.m_BoolArgument = !!i5615[6]
  return i5614
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5616 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5617 = data
  i5616.m_Mode = i5617[0]
  i5616.m_WrapAround = !!i5617[1]
  request.r(i5617[2], i5617[3], 0, i5616, 'm_SelectOnUp')
  request.r(i5617[4], i5617[5], 0, i5616, 'm_SelectOnDown')
  request.r(i5617[6], i5617[7], 0, i5616, 'm_SelectOnLeft')
  request.r(i5617[8], i5617[9], 0, i5616, 'm_SelectOnRight')
  return i5616
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5618 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5619 = data
  i5618.m_NormalColor = new pc.Color(i5619[0], i5619[1], i5619[2], i5619[3])
  i5618.m_HighlightedColor = new pc.Color(i5619[4], i5619[5], i5619[6], i5619[7])
  i5618.m_PressedColor = new pc.Color(i5619[8], i5619[9], i5619[10], i5619[11])
  i5618.m_SelectedColor = new pc.Color(i5619[12], i5619[13], i5619[14], i5619[15])
  i5618.m_DisabledColor = new pc.Color(i5619[16], i5619[17], i5619[18], i5619[19])
  i5618.m_ColorMultiplier = i5619[20]
  i5618.m_FadeDuration = i5619[21]
  return i5618
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5620 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5621 = data
  request.r(i5621[0], i5621[1], 0, i5620, 'm_HighlightedSprite')
  request.r(i5621[2], i5621[3], 0, i5620, 'm_PressedSprite')
  request.r(i5621[4], i5621[5], 0, i5620, 'm_SelectedSprite')
  request.r(i5621[6], i5621[7], 0, i5620, 'm_DisabledSprite')
  return i5620
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5622 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5623 = data
  i5622.m_NormalTrigger = i5623[0]
  i5622.m_HighlightedTrigger = i5623[1]
  i5622.m_PressedTrigger = i5623[2]
  i5622.m_SelectedTrigger = i5623[3]
  i5622.m_DisabledTrigger = i5623[4]
  return i5622
}

Deserializers["CTAButton"] = function (request, data, root) {
  var i5624 = root || request.c( 'CTAButton' )
  var i5625 = data
  return i5624
}

Deserializers["BB10_InGameScript"] = function (request, data, root) {
  var i5626 = root || request.c( 'BB10_InGameScript' )
  var i5627 = data
  request.r(i5627[0], i5627[1], 0, i5626, 'rec')
  request.r(i5627[2], i5627[3], 0, i5626, 'scoreTxt')
  request.r(i5627[4], i5627[5], 0, i5626, 'bestTxt')
  i5626.scoreInt = i5627[6]
  i5626.bestInt = i5627[7]
  request.r(i5627[8], i5627[9], 0, i5626, 'group')
  request.r(i5627[10], i5627[11], 0, i5626, 'blur_1')
  return i5626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5629 = data
  i5628.m_Alpha = i5629[0]
  i5628.m_Interactable = !!i5629[1]
  i5628.m_BlocksRaycasts = !!i5629[2]
  i5628.m_IgnoreParentGroups = !!i5629[3]
  i5628.enabled = !!i5629[4]
  return i5628
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5630 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5631 = data
  request.r(i5631[0], i5631[1], 0, i5630, 'm_FirstSelected')
  i5630.m_sendNavigationEvents = !!i5631[2]
  i5630.m_DragThreshold = i5631[3]
  return i5630
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5632 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5633 = data
  i5632.m_HorizontalAxis = i5633[0]
  i5632.m_VerticalAxis = i5633[1]
  i5632.m_SubmitButton = i5633[2]
  i5632.m_CancelButton = i5633[3]
  i5632.m_InputActionsPerSecond = i5633[4]
  i5632.m_RepeatDelay = i5633[5]
  i5632.m_ForceModuleActive = !!i5633[6]
  i5632.m_SendPointerHoverToParent = !!i5633[7]
  return i5632
}

Deserializers["BB10_FaderHandler"] = function (request, data, root) {
  var i5634 = root || request.c( 'BB10_FaderHandler' )
  var i5635 = data
  request.r(i5635[0], i5635[1], 0, i5634, 'image')
  i5634.durationFade = i5635[2]
  i5634.durationFadeOut = i5635[3]
  i5634.durationSwich = i5635[4]
  return i5634
}

Deserializers["BB10_HomeController"] = function (request, data, root) {
  var i5636 = root || request.c( 'BB10_HomeController' )
  var i5637 = data
  request.r(i5637[0], i5637[1], 0, i5636, 'group')
  return i5636
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i5638 = root || request.c( 'UnityEngine.UI.Slider' )
  var i5639 = data
  request.r(i5639[0], i5639[1], 0, i5638, 'm_FillRect')
  request.r(i5639[2], i5639[3], 0, i5638, 'm_HandleRect')
  i5638.m_Direction = i5639[4]
  i5638.m_MinValue = i5639[5]
  i5638.m_MaxValue = i5639[6]
  i5638.m_WholeNumbers = !!i5639[7]
  i5638.m_Value = i5639[8]
  i5638.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i5639[9], i5638.m_OnValueChanged)
  i5638.m_Navigation = request.d('UnityEngine.UI.Navigation', i5639[10], i5638.m_Navigation)
  i5638.m_Transition = i5639[11]
  i5638.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5639[12], i5638.m_Colors)
  i5638.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5639[13], i5638.m_SpriteState)
  i5638.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5639[14], i5638.m_AnimationTriggers)
  i5638.m_Interactable = !!i5639[15]
  request.r(i5639[16], i5639[17], 0, i5638, 'm_TargetGraphic')
  return i5638
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i5640 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i5641 = data
  i5640.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5641[0], i5640.m_PersistentCalls)
  return i5640
}

Deserializers["TimerProgress"] = function (request, data, root) {
  var i5642 = root || request.c( 'TimerProgress' )
  var i5643 = data
  request.r(i5643[0], i5643[1], 0, i5642, 'fillImageRed')
  request.r(i5643[2], i5643[3], 0, i5642, 'fillImage')
  request.r(i5643[4], i5643[5], 0, i5642, 'slider')
  i5642.timer = i5643[6]
  request.r(i5643[7], i5643[8], 0, i5642, 'timerText')
  i5642.haveTimer = !!i5643[9]
  request.r(i5643[10], i5643[11], 0, i5642, 'warningSprite')
  i5642.timeWarning = i5643[12]
  i5642.warningSoundTimer = i5643[13]
  i5642.isFormatTimeMMSS = !!i5643[14]
  return i5642
}

Deserializers["UITweenElement"] = function (request, data, root) {
  var i5644 = root || request.c( 'UITweenElement' )
  var i5645 = data
  i5644.tweenData = request.d('TweenData', i5645[0], i5644.tweenData)
  i5644.playOnAwake = !!i5645[1]
  return i5644
}

Deserializers["TweenData"] = function (request, data, root) {
  var i5646 = root || request.c( 'TweenData' )
  var i5647 = data
  request.r(i5647[0], i5647[1], 0, i5646, 'target')
  request.r(i5647[2], i5647[3], 0, i5646, 'configSO')
  i5646.custom = !!i5647[4]
  i5646.config = request.d('TweenConfig', i5647[5], i5646.config)
  i5646.OnCompleted = request.d('System.Action', i5647[6], i5646.OnCompleted)
  return i5646
}

Deserializers["TweenConfig"] = function (request, data, root) {
  var i5648 = root || request.c( 'TweenConfig' )
  var i5649 = data
  i5648.tweenType = i5649[0]
  i5648.from = i5649[1]
  i5648.to = i5649[2]
  i5648.mFrom = new pc.Vec3( i5649[3], i5649[4], i5649[5] )
  i5648.mTo = new pc.Vec3( i5649[6], i5649[7], i5649[8] )
  i5648.duration = i5649[9]
  i5648.delay = i5649[10]
  i5648.curve = new pc.AnimationCurve( { keys_flow: i5649[11] } )
  return i5648
}

Deserializers["TextMeshProController"] = function (request, data, root) {
  var i5650 = root || request.c( 'TextMeshProController' )
  var i5651 = data
  request.r(i5651[0], i5651[1], 0, i5650, 'textMeshPro')
  i5650.useCurve = !!i5651[2]
  i5650.radius = i5651[3]
  i5650.arcAngle = i5651[4]
  i5650.playOnEnable = !!i5651[5]
  i5650.animDuration = i5651[6]
  i5650.delayBetweenChars = i5651[7]
  i5650.scaleCurve = new pc.AnimationCurve( { keys_flow: i5651[8] } )
  return i5650
}

Deserializers["BB10_LostScript"] = function (request, data, root) {
  var i5652 = root || request.c( 'BB10_LostScript' )
  var i5653 = data
  request.r(i5653[0], i5653[1], 0, i5652, 'scoreText')
  request.r(i5653[2], i5653[3], 0, i5652, 'bestText')
  request.r(i5653[4], i5653[5], 0, i5652, 'group')
  i5652.isAuto = !!i5653[6]
  request.r(i5653[7], i5653[8], 0, i5652, 'cupShaker')
  request.r(i5653[9], i5653[10], 0, i5652, 'listViewAdsPannel')
  return i5652
}

Deserializers["BB10_PopupRate"] = function (request, data, root) {
  var i5654 = root || request.c( 'BB10_PopupRate' )
  var i5655 = data
  var i5657 = i5655[0]
  var i5656 = new (System.Collections.Generic.List$1(Bridge.ns('BB10_RateStar')))
  for(var i = 0; i < i5657.length; i += 2) {
  request.r(i5657[i + 0], i5657[i + 1], 1, i5656, '')
  }
  i5654.starList = i5656
  request.r(i5655[1], i5655[2], 0, i5654, 'submit')
  request.r(i5655[3], i5655[4], 0, i5654, 'textRate')
  request.r(i5655[5], i5655[6], 0, i5654, 'starOn')
  request.r(i5655[7], i5655[8], 0, i5654, 'starOff')
  i5654.starNumber = i5655[9]
  request.r(i5655[10], i5655[11], 0, i5654, 'popup')
  request.r(i5655[12], i5655[13], 0, i5654, 'pannel')
  return i5654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5661 = data
  i5660.ambientIntensity = i5661[0]
  i5660.reflectionIntensity = i5661[1]
  i5660.ambientMode = i5661[2]
  i5660.ambientLight = new pc.Color(i5661[3], i5661[4], i5661[5], i5661[6])
  i5660.ambientSkyColor = new pc.Color(i5661[7], i5661[8], i5661[9], i5661[10])
  i5660.ambientGroundColor = new pc.Color(i5661[11], i5661[12], i5661[13], i5661[14])
  i5660.ambientEquatorColor = new pc.Color(i5661[15], i5661[16], i5661[17], i5661[18])
  i5660.fogColor = new pc.Color(i5661[19], i5661[20], i5661[21], i5661[22])
  i5660.fogEndDistance = i5661[23]
  i5660.fogStartDistance = i5661[24]
  i5660.fogDensity = i5661[25]
  i5660.fog = !!i5661[26]
  request.r(i5661[27], i5661[28], 0, i5660, 'skybox')
  i5660.fogMode = i5661[29]
  var i5663 = i5661[30]
  var i5662 = []
  for(var i = 0; i < i5663.length; i += 1) {
    i5662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5663[i + 0]) );
  }
  i5660.lightmaps = i5662
  i5660.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5661[31], i5660.lightProbes)
  i5660.lightmapsMode = i5661[32]
  i5660.mixedBakeMode = i5661[33]
  i5660.environmentLightingMode = i5661[34]
  i5660.ambientProbe = new pc.SphericalHarmonicsL2(i5661[35])
  i5660.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5661[36])
  i5660.useReferenceAmbientProbe = !!i5661[37]
  request.r(i5661[38], i5661[39], 0, i5660, 'customReflection')
  request.r(i5661[40], i5661[41], 0, i5660, 'defaultReflection')
  i5660.defaultReflectionMode = i5661[42]
  i5660.defaultReflectionResolution = i5661[43]
  i5660.sunLightObjectId = i5661[44]
  i5660.pixelLightCount = i5661[45]
  i5660.defaultReflectionHDR = !!i5661[46]
  i5660.hasLightDataAsset = !!i5661[47]
  i5660.hasManualGenerate = !!i5661[48]
  return i5660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5667 = data
  request.r(i5667[0], i5667[1], 0, i5666, 'lightmapColor')
  request.r(i5667[2], i5667[3], 0, i5666, 'lightmapDirection')
  return i5666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5668 = root || new UnityEngine.LightProbes()
  var i5669 = data
  return i5668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5677 = data
  var i5679 = i5677[0]
  var i5678 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5679.length; i += 1) {
    i5678.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5679[i + 0]));
  }
  i5676.ShaderCompilationErrors = i5678
  i5676.name = i5677[1]
  i5676.guid = i5677[2]
  var i5681 = i5677[3]
  var i5680 = []
  for(var i = 0; i < i5681.length; i += 1) {
    i5680.push( i5681[i + 0] );
  }
  i5676.shaderDefinedKeywords = i5680
  var i5683 = i5677[4]
  var i5682 = []
  for(var i = 0; i < i5683.length; i += 1) {
    i5682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5683[i + 0]) );
  }
  i5676.passes = i5682
  var i5685 = i5677[5]
  var i5684 = []
  for(var i = 0; i < i5685.length; i += 1) {
    i5684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5685[i + 0]) );
  }
  i5676.usePasses = i5684
  var i5687 = i5677[6]
  var i5686 = []
  for(var i = 0; i < i5687.length; i += 1) {
    i5686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5687[i + 0]) );
  }
  i5676.defaultParameterValues = i5686
  request.r(i5677[7], i5677[8], 0, i5676, 'unityFallbackShader')
  i5676.readDepth = !!i5677[9]
  i5676.isCreatedByShaderGraph = !!i5677[10]
  i5676.disableBatching = !!i5677[11]
  i5676.compiled = !!i5677[12]
  return i5676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5691 = data
  i5690.shaderName = i5691[0]
  i5690.errorMessage = i5691[1]
  return i5690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5696 = root || new pc.UnityShaderPass()
  var i5697 = data
  i5696.id = i5697[0]
  i5696.subShaderIndex = i5697[1]
  i5696.name = i5697[2]
  i5696.passType = i5697[3]
  i5696.grabPassTextureName = i5697[4]
  i5696.usePass = !!i5697[5]
  i5696.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5697[6], i5696.zTest)
  i5696.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5697[7], i5696.zWrite)
  i5696.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5697[8], i5696.culling)
  i5696.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5697[9], i5696.blending)
  i5696.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5697[10], i5696.alphaBlending)
  i5696.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5697[11], i5696.colorWriteMask)
  i5696.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5697[12], i5696.offsetUnits)
  i5696.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5697[13], i5696.offsetFactor)
  i5696.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5697[14], i5696.stencilRef)
  i5696.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5697[15], i5696.stencilReadMask)
  i5696.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5697[16], i5696.stencilWriteMask)
  i5696.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5697[17], i5696.stencilOp)
  i5696.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5697[18], i5696.stencilOpFront)
  i5696.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5697[19], i5696.stencilOpBack)
  var i5699 = i5697[20]
  var i5698 = []
  for(var i = 0; i < i5699.length; i += 1) {
    i5698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5699[i + 0]) );
  }
  i5696.tags = i5698
  var i5701 = i5697[21]
  var i5700 = []
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.push( i5701[i + 0] );
  }
  i5696.passDefinedKeywords = i5700
  var i5703 = i5697[22]
  var i5702 = []
  for(var i = 0; i < i5703.length; i += 1) {
    i5702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5703[i + 0]) );
  }
  i5696.passDefinedKeywordGroups = i5702
  var i5705 = i5697[23]
  var i5704 = []
  for(var i = 0; i < i5705.length; i += 1) {
    i5704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5705[i + 0]) );
  }
  i5696.variants = i5704
  var i5707 = i5697[24]
  var i5706 = []
  for(var i = 0; i < i5707.length; i += 1) {
    i5706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5707[i + 0]) );
  }
  i5696.excludedVariants = i5706
  i5696.hasDepthReader = !!i5697[25]
  return i5696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5709 = data
  i5708.val = i5709[0]
  i5708.name = i5709[1]
  return i5708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5711 = data
  i5710.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5711[0], i5710.src)
  i5710.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5711[1], i5710.dst)
  i5710.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5711[2], i5710.op)
  return i5710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5713 = data
  i5712.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5713[0], i5712.pass)
  i5712.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5713[1], i5712.fail)
  i5712.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5713[2], i5712.zFail)
  i5712.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5713[3], i5712.comp)
  return i5712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5717 = data
  i5716.name = i5717[0]
  i5716.value = i5717[1]
  return i5716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5721 = data
  var i5723 = i5721[0]
  var i5722 = []
  for(var i = 0; i < i5723.length; i += 1) {
    i5722.push( i5723[i + 0] );
  }
  i5720.keywords = i5722
  i5720.hasDiscard = !!i5721[1]
  return i5720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5727 = data
  i5726.passId = i5727[0]
  i5726.subShaderIndex = i5727[1]
  var i5729 = i5727[2]
  var i5728 = []
  for(var i = 0; i < i5729.length; i += 1) {
    i5728.push( i5729[i + 0] );
  }
  i5726.keywords = i5728
  i5726.vertexProgram = i5727[3]
  i5726.fragmentProgram = i5727[4]
  i5726.exportedForWebGl2 = !!i5727[5]
  i5726.readDepth = !!i5727[6]
  return i5726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5733 = data
  request.r(i5733[0], i5733[1], 0, i5732, 'shader')
  i5732.pass = i5733[2]
  return i5732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5737 = data
  i5736.name = i5737[0]
  i5736.type = i5737[1]
  i5736.value = new pc.Vec4( i5737[2], i5737[3], i5737[4], i5737[5] )
  i5736.textureValue = i5737[6]
  i5736.shaderPropertyFlag = i5737[7]
  return i5736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5739 = data
  i5738.name = i5739[0]
  request.r(i5739[1], i5739[2], 0, i5738, 'texture')
  i5738.aabb = i5739[3]
  i5738.vertices = i5739[4]
  i5738.triangles = i5739[5]
  i5738.textureRect = UnityEngine.Rect.MinMaxRect(i5739[6], i5739[7], i5739[8], i5739[9])
  i5738.packedRect = UnityEngine.Rect.MinMaxRect(i5739[10], i5739[11], i5739[12], i5739[13])
  i5738.border = new pc.Vec4( i5739[14], i5739[15], i5739[16], i5739[17] )
  i5738.transparency = i5739[18]
  i5738.bounds = i5739[19]
  i5738.pixelsPerUnit = i5739[20]
  i5738.textureWidth = i5739[21]
  i5738.textureHeight = i5739[22]
  i5738.nativeSize = new pc.Vec2( i5739[23], i5739[24] )
  i5738.pivot = new pc.Vec2( i5739[25], i5739[26] )
  i5738.textureRectOffset = new pc.Vec2( i5739[27], i5739[28] )
  return i5738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5741 = data
  i5740.name = i5741[0]
  return i5740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5743 = data
  i5742.name = i5743[0]
  i5742.wrapMode = i5743[1]
  i5742.isLooping = !!i5743[2]
  i5742.length = i5743[3]
  var i5745 = i5743[4]
  var i5744 = []
  for(var i = 0; i < i5745.length; i += 1) {
    i5744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5745[i + 0]) );
  }
  i5742.curves = i5744
  var i5747 = i5743[5]
  var i5746 = []
  for(var i = 0; i < i5747.length; i += 1) {
    i5746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5747[i + 0]) );
  }
  i5742.events = i5746
  i5742.halfPrecision = !!i5743[6]
  i5742._frameRate = i5743[7]
  i5742.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5743[8], i5742.localBounds)
  i5742.hasMuscleCurves = !!i5743[9]
  var i5749 = i5743[10]
  var i5748 = []
  for(var i = 0; i < i5749.length; i += 1) {
    i5748.push( i5749[i + 0] );
  }
  i5742.clipMuscleConstant = i5748
  i5742.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5743[11], i5742.clipBindingConstant)
  return i5742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5753 = data
  i5752.path = i5753[0]
  i5752.hash = i5753[1]
  i5752.componentType = i5753[2]
  i5752.property = i5753[3]
  i5752.keys = i5753[4]
  var i5755 = i5753[5]
  var i5754 = []
  for(var i = 0; i < i5755.length; i += 1) {
    i5754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5755[i + 0]) );
  }
  i5752.objectReferenceKeys = i5754
  return i5752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5759 = data
  i5758.time = i5759[0]
  request.r(i5759[1], i5759[2], 0, i5758, 'value')
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5763 = data
  i5762.functionName = i5763[0]
  i5762.floatParameter = i5763[1]
  i5762.intParameter = i5763[2]
  i5762.stringParameter = i5763[3]
  request.r(i5763[4], i5763[5], 0, i5762, 'objectReferenceParameter')
  i5762.time = i5763[6]
  return i5762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5765 = data
  i5764.center = new pc.Vec3( i5765[0], i5765[1], i5765[2] )
  i5764.extends = new pc.Vec3( i5765[3], i5765[4], i5765[5] )
  return i5764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5769 = data
  var i5771 = i5769[0]
  var i5770 = []
  for(var i = 0; i < i5771.length; i += 1) {
    i5770.push( i5771[i + 0] );
  }
  i5768.genericBindings = i5770
  var i5773 = i5769[1]
  var i5772 = []
  for(var i = 0; i < i5773.length; i += 1) {
    i5772.push( i5773[i + 0] );
  }
  i5768.pptrCurveMapping = i5772
  return i5768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5775 = data
  i5774.name = i5775[0]
  i5774.ascent = i5775[1]
  i5774.originalLineHeight = i5775[2]
  i5774.fontSize = i5775[3]
  var i5777 = i5775[4]
  var i5776 = []
  for(var i = 0; i < i5777.length; i += 1) {
    i5776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5777[i + 0]) );
  }
  i5774.characterInfo = i5776
  request.r(i5775[5], i5775[6], 0, i5774, 'texture')
  i5774.originalFontSize = i5775[7]
  return i5774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5781 = data
  i5780.index = i5781[0]
  i5780.advance = i5781[1]
  i5780.bearing = i5781[2]
  i5780.glyphWidth = i5781[3]
  i5780.glyphHeight = i5781[4]
  i5780.minX = i5781[5]
  i5780.maxX = i5781[6]
  i5780.minY = i5781[7]
  i5780.maxY = i5781[8]
  i5780.uvBottomLeftX = i5781[9]
  i5780.uvBottomLeftY = i5781[10]
  i5780.uvBottomRightX = i5781[11]
  i5780.uvBottomRightY = i5781[12]
  i5780.uvTopLeftX = i5781[13]
  i5780.uvTopLeftY = i5781[14]
  i5780.uvTopRightX = i5781[15]
  i5780.uvTopRightY = i5781[16]
  return i5780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5783 = data
  i5782.name = i5783[0]
  var i5785 = i5783[1]
  var i5784 = []
  for(var i = 0; i < i5785.length; i += 1) {
    i5784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5785[i + 0]) );
  }
  i5782.layers = i5784
  var i5787 = i5783[2]
  var i5786 = []
  for(var i = 0; i < i5787.length; i += 1) {
    i5786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5787[i + 0]) );
  }
  i5782.parameters = i5786
  i5782.animationClips = i5783[3]
  i5782.avatarUnsupported = i5783[4]
  return i5782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5791 = data
  i5790.name = i5791[0]
  i5790.defaultWeight = i5791[1]
  i5790.blendingMode = i5791[2]
  i5790.avatarMask = i5791[3]
  i5790.syncedLayerIndex = i5791[4]
  i5790.syncedLayerAffectsTiming = !!i5791[5]
  i5790.syncedLayers = i5791[6]
  i5790.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5791[7], i5790.stateMachine)
  return i5790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5793 = data
  i5792.id = i5793[0]
  i5792.name = i5793[1]
  i5792.path = i5793[2]
  var i5795 = i5793[3]
  var i5794 = []
  for(var i = 0; i < i5795.length; i += 1) {
    i5794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5795[i + 0]) );
  }
  i5792.states = i5794
  var i5797 = i5793[4]
  var i5796 = []
  for(var i = 0; i < i5797.length; i += 1) {
    i5796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5797[i + 0]) );
  }
  i5792.machines = i5796
  var i5799 = i5793[5]
  var i5798 = []
  for(var i = 0; i < i5799.length; i += 1) {
    i5798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5799[i + 0]) );
  }
  i5792.entryStateTransitions = i5798
  var i5801 = i5793[6]
  var i5800 = []
  for(var i = 0; i < i5801.length; i += 1) {
    i5800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5801[i + 0]) );
  }
  i5792.exitStateTransitions = i5800
  var i5803 = i5793[7]
  var i5802 = []
  for(var i = 0; i < i5803.length; i += 1) {
    i5802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5803[i + 0]) );
  }
  i5792.anyStateTransitions = i5802
  i5792.defaultStateId = i5793[8]
  return i5792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5807 = data
  i5806.id = i5807[0]
  i5806.name = i5807[1]
  i5806.cycleOffset = i5807[2]
  i5806.cycleOffsetParameter = i5807[3]
  i5806.cycleOffsetParameterActive = !!i5807[4]
  i5806.mirror = !!i5807[5]
  i5806.mirrorParameter = i5807[6]
  i5806.mirrorParameterActive = !!i5807[7]
  i5806.motionId = i5807[8]
  i5806.nameHash = i5807[9]
  i5806.fullPathHash = i5807[10]
  i5806.speed = i5807[11]
  i5806.speedParameter = i5807[12]
  i5806.speedParameterActive = !!i5807[13]
  i5806.tag = i5807[14]
  i5806.tagHash = i5807[15]
  i5806.writeDefaultValues = !!i5807[16]
  var i5809 = i5807[17]
  var i5808 = []
  for(var i = 0; i < i5809.length; i += 2) {
  request.r(i5809[i + 0], i5809[i + 1], 2, i5808, '')
  }
  i5806.behaviours = i5808
  var i5811 = i5807[18]
  var i5810 = []
  for(var i = 0; i < i5811.length; i += 1) {
    i5810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5811[i + 0]) );
  }
  i5806.transitions = i5810
  return i5806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5817 = data
  i5816.fullPath = i5817[0]
  i5816.canTransitionToSelf = !!i5817[1]
  i5816.duration = i5817[2]
  i5816.exitTime = i5817[3]
  i5816.hasExitTime = !!i5817[4]
  i5816.hasFixedDuration = !!i5817[5]
  i5816.interruptionSource = i5817[6]
  i5816.offset = i5817[7]
  i5816.orderedInterruption = !!i5817[8]
  i5816.destinationStateId = i5817[9]
  i5816.isExit = !!i5817[10]
  i5816.mute = !!i5817[11]
  i5816.solo = !!i5817[12]
  var i5819 = i5817[13]
  var i5818 = []
  for(var i = 0; i < i5819.length; i += 1) {
    i5818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5819[i + 0]) );
  }
  i5816.conditions = i5818
  return i5816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5825 = data
  i5824.destinationStateId = i5825[0]
  i5824.isExit = !!i5825[1]
  i5824.mute = !!i5825[2]
  i5824.solo = !!i5825[3]
  var i5827 = i5825[4]
  var i5826 = []
  for(var i = 0; i < i5827.length; i += 1) {
    i5826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5827[i + 0]) );
  }
  i5824.conditions = i5826
  return i5824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5831 = data
  i5830.defaultBool = !!i5831[0]
  i5830.defaultFloat = i5831[1]
  i5830.defaultInt = i5831[2]
  i5830.name = i5831[3]
  i5830.nameHash = i5831[4]
  i5830.type = i5831[5]
  return i5830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5833 = data
  i5832.name = i5833[0]
  i5832.bytes64 = i5833[1]
  i5832.data = i5833[2]
  return i5832
}

Deserializers["GridSaveData"] = function (request, data, root) {
  var i5834 = root || request.c( 'GridSaveData' )
  var i5835 = data
  var i5837 = i5835[0]
  var i5836 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5837.length; i += 1) {
    i5836.add(i5837[i + 0]);
  }
  i5834.gridData = i5836
  var i5839 = i5835[1]
  var i5838 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5839.length; i += 1) {
    i5838.add(i5839[i + 0]);
  }
  i5834.gridSprites = i5838
  return i5834
}

Deserializers["Bricks_PattemTableObj"] = function (request, data, root) {
  var i5842 = root || request.c( 'Bricks_PattemTableObj' )
  var i5843 = data
  var i5845 = i5843[0]
  var i5844 = []
  for(var i = 0; i < i5845.length; i += 1) {
    i5844.push( request.d('PattemInfor', i5845[i + 0]) );
  }
  i5842.listPattemsInfor = i5844
  var i5847 = i5843[1]
  var i5846 = []
  for(var i = 0; i < i5847.length; i += 1) {
    i5846.push( request.d('LevelData', i5847[i + 0]) );
  }
  i5842.levelData = i5846
  return i5842
}

Deserializers["PattemInfor"] = function (request, data, root) {
  var i5850 = root || request.c( 'PattemInfor' )
  var i5851 = data
  i5850.type = i5851[0]
  var i5853 = i5851[1]
  var i5852 = []
  for(var i = 0; i < i5853.length; i += 1) {
    i5852.push( !!i5853[i + 0] );
  }
  i5850.grid = i5852
  return i5850
}

Deserializers["LevelData"] = function (request, data, root) {
  var i5858 = root || request.c( 'LevelData' )
  var i5859 = data
  i5858.level = i5859[0]
  i5858.Score = i5859[1]
  i5858.weight = i5859[2]
  return i5858
}

Deserializers["BB10_SpawnBlockData"] = function (request, data, root) {
  var i5860 = root || request.c( 'BB10_SpawnBlockData' )
  var i5861 = data
  var i5863 = i5861[0]
  var i5862 = []
  for(var i = 0; i < i5863.length; i += 1) {
    i5862.push( request.d('SpawnGroup', i5863[i + 0]) );
  }
  i5860.spawnGroups = i5862
  return i5860
}

Deserializers["SpawnGroup"] = function (request, data, root) {
  var i5866 = root || request.c( 'SpawnGroup' )
  var i5867 = data
  i5866.block1 = i5867[0]
  i5866.block2 = i5867[1]
  i5866.block3 = i5867[2]
  return i5866
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5868 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5869 = data
  request.r(i5869[0], i5869[1], 0, i5868, 'atlas')
  i5868.normalStyle = i5869[2]
  i5868.normalSpacingOffset = i5869[3]
  i5868.boldStyle = i5869[4]
  i5868.boldSpacing = i5869[5]
  i5868.italicStyle = i5869[6]
  i5868.tabSize = i5869[7]
  i5868.hashCode = i5869[8]
  request.r(i5869[9], i5869[10], 0, i5868, 'material')
  i5868.materialHashCode = i5869[11]
  i5868.m_Version = i5869[12]
  i5868.m_SourceFontFileGUID = i5869[13]
  request.r(i5869[14], i5869[15], 0, i5868, 'm_SourceFontFile_EditorRef')
  request.r(i5869[16], i5869[17], 0, i5868, 'm_SourceFontFile')
  i5868.m_AtlasPopulationMode = i5869[18]
  i5868.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5869[19], i5868.m_FaceInfo)
  var i5871 = i5869[20]
  var i5870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5871.length; i += 1) {
    i5870.add(request.d('UnityEngine.TextCore.Glyph', i5871[i + 0]));
  }
  i5868.m_GlyphTable = i5870
  var i5873 = i5869[21]
  var i5872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5873.length; i += 1) {
    i5872.add(request.d('TMPro.TMP_Character', i5873[i + 0]));
  }
  i5868.m_CharacterTable = i5872
  var i5875 = i5869[22]
  var i5874 = []
  for(var i = 0; i < i5875.length; i += 2) {
  request.r(i5875[i + 0], i5875[i + 1], 2, i5874, '')
  }
  i5868.m_AtlasTextures = i5874
  i5868.m_AtlasTextureIndex = i5869[23]
  i5868.m_IsMultiAtlasTexturesEnabled = !!i5869[24]
  i5868.m_ClearDynamicDataOnBuild = !!i5869[25]
  var i5877 = i5869[26]
  var i5876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5877.length; i += 1) {
    i5876.add(request.d('UnityEngine.TextCore.GlyphRect', i5877[i + 0]));
  }
  i5868.m_UsedGlyphRects = i5876
  var i5879 = i5869[27]
  var i5878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5879.length; i += 1) {
    i5878.add(request.d('UnityEngine.TextCore.GlyphRect', i5879[i + 0]));
  }
  i5868.m_FreeGlyphRects = i5878
  i5868.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5869[28], i5868.m_fontInfo)
  i5868.m_AtlasWidth = i5869[29]
  i5868.m_AtlasHeight = i5869[30]
  i5868.m_AtlasPadding = i5869[31]
  i5868.m_AtlasRenderMode = i5869[32]
  var i5881 = i5869[33]
  var i5880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5881.length; i += 1) {
    i5880.add(request.d('TMPro.TMP_Glyph', i5881[i + 0]));
  }
  i5868.m_glyphInfoList = i5880
  i5868.m_KerningTable = request.d('TMPro.KerningTable', i5869[34], i5868.m_KerningTable)
  i5868.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5869[35], i5868.m_FontFeatureTable)
  var i5883 = i5869[36]
  var i5882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5883.length; i += 2) {
  request.r(i5883[i + 0], i5883[i + 1], 1, i5882, '')
  }
  i5868.fallbackFontAssets = i5882
  var i5885 = i5869[37]
  var i5884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5885.length; i += 2) {
  request.r(i5885[i + 0], i5885[i + 1], 1, i5884, '')
  }
  i5868.m_FallbackFontAssetTable = i5884
  i5868.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5869[38], i5868.m_CreationSettings)
  var i5887 = i5869[39]
  var i5886 = []
  for(var i = 0; i < i5887.length; i += 1) {
    i5886.push( request.d('TMPro.TMP_FontWeightPair', i5887[i + 0]) );
  }
  i5868.m_FontWeightTable = i5886
  var i5889 = i5869[40]
  var i5888 = []
  for(var i = 0; i < i5889.length; i += 1) {
    i5888.push( request.d('TMPro.TMP_FontWeightPair', i5889[i + 0]) );
  }
  i5868.fontWeights = i5888
  return i5868
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5890 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5891 = data
  i5890.m_FaceIndex = i5891[0]
  i5890.m_FamilyName = i5891[1]
  i5890.m_StyleName = i5891[2]
  i5890.m_PointSize = i5891[3]
  i5890.m_Scale = i5891[4]
  i5890.m_UnitsPerEM = i5891[5]
  i5890.m_LineHeight = i5891[6]
  i5890.m_AscentLine = i5891[7]
  i5890.m_CapLine = i5891[8]
  i5890.m_MeanLine = i5891[9]
  i5890.m_Baseline = i5891[10]
  i5890.m_DescentLine = i5891[11]
  i5890.m_SuperscriptOffset = i5891[12]
  i5890.m_SuperscriptSize = i5891[13]
  i5890.m_SubscriptOffset = i5891[14]
  i5890.m_SubscriptSize = i5891[15]
  i5890.m_UnderlineOffset = i5891[16]
  i5890.m_UnderlineThickness = i5891[17]
  i5890.m_StrikethroughOffset = i5891[18]
  i5890.m_StrikethroughThickness = i5891[19]
  i5890.m_TabWidth = i5891[20]
  return i5890
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5894 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5895 = data
  i5894.m_Index = i5895[0]
  i5894.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5895[1], i5894.m_Metrics)
  i5894.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5895[2], i5894.m_GlyphRect)
  i5894.m_Scale = i5895[3]
  i5894.m_AtlasIndex = i5895[4]
  i5894.m_ClassDefinitionType = i5895[5]
  return i5894
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5896 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5897 = data
  i5896.m_Width = i5897[0]
  i5896.m_Height = i5897[1]
  i5896.m_HorizontalBearingX = i5897[2]
  i5896.m_HorizontalBearingY = i5897[3]
  i5896.m_HorizontalAdvance = i5897[4]
  return i5896
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5898 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5899 = data
  i5898.m_X = i5899[0]
  i5898.m_Y = i5899[1]
  i5898.m_Width = i5899[2]
  i5898.m_Height = i5899[3]
  return i5898
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5902 = root || request.c( 'TMPro.TMP_Character' )
  var i5903 = data
  i5902.m_ElementType = i5903[0]
  i5902.m_Unicode = i5903[1]
  i5902.m_GlyphIndex = i5903[2]
  i5902.m_Scale = i5903[3]
  return i5902
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5906 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5907 = data
  i5906.Name = i5907[0]
  i5906.PointSize = i5907[1]
  i5906.Scale = i5907[2]
  i5906.CharacterCount = i5907[3]
  i5906.LineHeight = i5907[4]
  i5906.Baseline = i5907[5]
  i5906.Ascender = i5907[6]
  i5906.CapHeight = i5907[7]
  i5906.Descender = i5907[8]
  i5906.CenterLine = i5907[9]
  i5906.SuperscriptOffset = i5907[10]
  i5906.SubscriptOffset = i5907[11]
  i5906.SubSize = i5907[12]
  i5906.Underline = i5907[13]
  i5906.UnderlineThickness = i5907[14]
  i5906.strikethrough = i5907[15]
  i5906.strikethroughThickness = i5907[16]
  i5906.TabWidth = i5907[17]
  i5906.Padding = i5907[18]
  i5906.AtlasWidth = i5907[19]
  i5906.AtlasHeight = i5907[20]
  return i5906
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5910 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5911 = data
  i5910.id = i5911[0]
  i5910.x = i5911[1]
  i5910.y = i5911[2]
  i5910.width = i5911[3]
  i5910.height = i5911[4]
  i5910.xOffset = i5911[5]
  i5910.yOffset = i5911[6]
  i5910.xAdvance = i5911[7]
  i5910.scale = i5911[8]
  return i5910
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5912 = root || request.c( 'TMPro.KerningTable' )
  var i5913 = data
  var i5915 = i5913[0]
  var i5914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5915.length; i += 1) {
    i5914.add(request.d('TMPro.KerningPair', i5915[i + 0]));
  }
  i5912.kerningPairs = i5914
  return i5912
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5918 = root || request.c( 'TMPro.KerningPair' )
  var i5919 = data
  i5918.xOffset = i5919[0]
  i5918.m_FirstGlyph = i5919[1]
  i5918.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5919[2], i5918.m_FirstGlyphAdjustments)
  i5918.m_SecondGlyph = i5919[3]
  i5918.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5919[4], i5918.m_SecondGlyphAdjustments)
  i5918.m_IgnoreSpacingAdjustments = !!i5919[5]
  return i5918
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5920 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5921 = data
  var i5923 = i5921[0]
  var i5922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5923.length; i += 1) {
    i5922.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5923[i + 0]));
  }
  i5920.m_GlyphPairAdjustmentRecords = i5922
  return i5920
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5926 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5927 = data
  i5926.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5927[0], i5926.m_FirstAdjustmentRecord)
  i5926.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5927[1], i5926.m_SecondAdjustmentRecord)
  i5926.m_FeatureLookupFlags = i5927[2]
  return i5926
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5930 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5931 = data
  i5930.sourceFontFileName = i5931[0]
  i5930.sourceFontFileGUID = i5931[1]
  i5930.pointSizeSamplingMode = i5931[2]
  i5930.pointSize = i5931[3]
  i5930.padding = i5931[4]
  i5930.packingMode = i5931[5]
  i5930.atlasWidth = i5931[6]
  i5930.atlasHeight = i5931[7]
  i5930.characterSetSelectionMode = i5931[8]
  i5930.characterSequence = i5931[9]
  i5930.referencedFontAssetGUID = i5931[10]
  i5930.referencedTextAssetGUID = i5931[11]
  i5930.fontStyle = i5931[12]
  i5930.fontStyleModifier = i5931[13]
  i5930.renderMode = i5931[14]
  i5930.includeFontFeatures = !!i5931[15]
  return i5930
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5934 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5935 = data
  request.r(i5935[0], i5935[1], 0, i5934, 'regularTypeface')
  request.r(i5935[2], i5935[3], 0, i5934, 'italicTypeface')
  return i5934
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5937 = data
  i5936.useSafeMode = !!i5937[0]
  i5936.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5937[1], i5936.safeModeOptions)
  i5936.timeScale = i5937[2]
  i5936.unscaledTimeScale = i5937[3]
  i5936.useSmoothDeltaTime = !!i5937[4]
  i5936.maxSmoothUnscaledTime = i5937[5]
  i5936.rewindCallbackMode = i5937[6]
  i5936.showUnityEditorReport = !!i5937[7]
  i5936.logBehaviour = i5937[8]
  i5936.drawGizmos = !!i5937[9]
  i5936.defaultRecyclable = !!i5937[10]
  i5936.defaultAutoPlay = i5937[11]
  i5936.defaultUpdateType = i5937[12]
  i5936.defaultTimeScaleIndependent = !!i5937[13]
  i5936.defaultEaseType = i5937[14]
  i5936.defaultEaseOvershootOrAmplitude = i5937[15]
  i5936.defaultEasePeriod = i5937[16]
  i5936.defaultAutoKill = !!i5937[17]
  i5936.defaultLoopType = i5937[18]
  i5936.debugMode = !!i5937[19]
  i5936.debugStoreTargetId = !!i5937[20]
  i5936.showPreviewPanel = !!i5937[21]
  i5936.storeSettingsLocation = i5937[22]
  i5936.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5937[23], i5936.modules)
  i5936.createASMDEF = !!i5937[24]
  i5936.showPlayingTweens = !!i5937[25]
  i5936.showPausedTweens = !!i5937[26]
  return i5936
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5938 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5939 = data
  i5938.logBehaviour = i5939[0]
  i5938.nestedTweenFailureBehaviour = i5939[1]
  return i5938
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5940 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5941 = data
  i5940.showPanel = !!i5941[0]
  i5940.audioEnabled = !!i5941[1]
  i5940.physicsEnabled = !!i5941[2]
  i5940.physics2DEnabled = !!i5941[3]
  i5940.spriteEnabled = !!i5941[4]
  i5940.uiEnabled = !!i5941[5]
  i5940.textMeshProEnabled = !!i5941[6]
  i5940.tk2DEnabled = !!i5941[7]
  i5940.deAudioEnabled = !!i5941[8]
  i5940.deUnityExtendedEnabled = !!i5941[9]
  i5940.epoOutlineEnabled = !!i5941[10]
  return i5940
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5942 = root || request.c( 'TMPro.TMP_Settings' )
  var i5943 = data
  i5942.m_enableWordWrapping = !!i5943[0]
  i5942.m_enableKerning = !!i5943[1]
  i5942.m_enableExtraPadding = !!i5943[2]
  i5942.m_enableTintAllSprites = !!i5943[3]
  i5942.m_enableParseEscapeCharacters = !!i5943[4]
  i5942.m_EnableRaycastTarget = !!i5943[5]
  i5942.m_GetFontFeaturesAtRuntime = !!i5943[6]
  i5942.m_missingGlyphCharacter = i5943[7]
  i5942.m_warningsDisabled = !!i5943[8]
  request.r(i5943[9], i5943[10], 0, i5942, 'm_defaultFontAsset')
  i5942.m_defaultFontAssetPath = i5943[11]
  i5942.m_defaultFontSize = i5943[12]
  i5942.m_defaultAutoSizeMinRatio = i5943[13]
  i5942.m_defaultAutoSizeMaxRatio = i5943[14]
  i5942.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5943[15], i5943[16] )
  i5942.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5943[17], i5943[18] )
  i5942.m_autoSizeTextContainer = !!i5943[19]
  i5942.m_IsTextObjectScaleStatic = !!i5943[20]
  var i5945 = i5943[21]
  var i5944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5945.length; i += 2) {
  request.r(i5945[i + 0], i5945[i + 1], 1, i5944, '')
  }
  i5942.m_fallbackFontAssets = i5944
  i5942.m_matchMaterialPreset = !!i5943[22]
  request.r(i5943[23], i5943[24], 0, i5942, 'm_defaultSpriteAsset')
  i5942.m_defaultSpriteAssetPath = i5943[25]
  i5942.m_enableEmojiSupport = !!i5943[26]
  i5942.m_MissingCharacterSpriteUnicode = i5943[27]
  i5942.m_defaultColorGradientPresetsPath = i5943[28]
  request.r(i5943[29], i5943[30], 0, i5942, 'm_defaultStyleSheet')
  i5942.m_StyleSheetsResourcePath = i5943[31]
  request.r(i5943[32], i5943[33], 0, i5942, 'm_leadingCharacters')
  request.r(i5943[34], i5943[35], 0, i5942, 'm_followingCharacters')
  i5942.m_UseModernHangulLineBreakingRules = !!i5943[36]
  return i5942
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5946 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5947 = data
  i5946.m_GlyphIndex = i5947[0]
  i5946.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5947[1], i5946.m_GlyphValueRecord)
  return i5946
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5948 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5949 = data
  i5948.m_XPlacement = i5949[0]
  i5948.m_YPlacement = i5949[1]
  i5948.m_XAdvance = i5949[2]
  i5948.m_YAdvance = i5949[3]
  return i5948
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5950 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5951 = data
  request.r(i5951[0], i5951[1], 0, i5950, 'spriteSheet')
  var i5953 = i5951[2]
  var i5952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5953.length; i += 1) {
    i5952.add(request.d('TMPro.TMP_Sprite', i5953[i + 0]));
  }
  i5950.spriteInfoList = i5952
  var i5955 = i5951[3]
  var i5954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5955.length; i += 2) {
  request.r(i5955[i + 0], i5955[i + 1], 1, i5954, '')
  }
  i5950.fallbackSpriteAssets = i5954
  i5950.hashCode = i5951[4]
  request.r(i5951[5], i5951[6], 0, i5950, 'material')
  i5950.materialHashCode = i5951[7]
  i5950.m_Version = i5951[8]
  i5950.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5951[9], i5950.m_FaceInfo)
  var i5957 = i5951[10]
  var i5956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5957.length; i += 1) {
    i5956.add(request.d('TMPro.TMP_SpriteCharacter', i5957[i + 0]));
  }
  i5950.m_SpriteCharacterTable = i5956
  var i5959 = i5951[11]
  var i5958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5959.length; i += 1) {
    i5958.add(request.d('TMPro.TMP_SpriteGlyph', i5959[i + 0]));
  }
  i5950.m_SpriteGlyphTable = i5958
  return i5950
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5962 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5963 = data
  i5962.name = i5963[0]
  i5962.hashCode = i5963[1]
  i5962.unicode = i5963[2]
  i5962.pivot = new pc.Vec2( i5963[3], i5963[4] )
  request.r(i5963[5], i5963[6], 0, i5962, 'sprite')
  i5962.id = i5963[7]
  i5962.x = i5963[8]
  i5962.y = i5963[9]
  i5962.width = i5963[10]
  i5962.height = i5963[11]
  i5962.xOffset = i5963[12]
  i5962.yOffset = i5963[13]
  i5962.xAdvance = i5963[14]
  i5962.scale = i5963[15]
  return i5962
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5968 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5969 = data
  i5968.m_Name = i5969[0]
  i5968.m_HashCode = i5969[1]
  i5968.m_ElementType = i5969[2]
  i5968.m_Unicode = i5969[3]
  i5968.m_GlyphIndex = i5969[4]
  i5968.m_Scale = i5969[5]
  return i5968
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5972 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5973 = data
  request.r(i5973[0], i5973[1], 0, i5972, 'sprite')
  i5972.m_Index = i5973[2]
  i5972.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5973[3], i5972.m_Metrics)
  i5972.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5973[4], i5972.m_GlyphRect)
  i5972.m_Scale = i5973[5]
  i5972.m_AtlasIndex = i5973[6]
  i5972.m_ClassDefinitionType = i5973[7]
  return i5972
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5974 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5975 = data
  var i5977 = i5975[0]
  var i5976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5977.length; i += 1) {
    i5976.add(request.d('TMPro.TMP_Style', i5977[i + 0]));
  }
  i5974.m_StyleList = i5976
  return i5974
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5980 = root || request.c( 'TMPro.TMP_Style' )
  var i5981 = data
  i5980.m_Name = i5981[0]
  i5980.m_HashCode = i5981[1]
  i5980.m_OpeningDefinition = i5981[2]
  i5980.m_ClosingDefinition = i5981[3]
  i5980.m_OpeningTagArray = i5981[4]
  i5980.m_ClosingTagArray = i5981[5]
  i5980.m_OpeningTagUnicodeArray = i5981[6]
  i5980.m_ClosingTagUnicodeArray = i5981[7]
  return i5980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5983 = data
  var i5985 = i5983[0]
  var i5984 = []
  for(var i = 0; i < i5985.length; i += 1) {
    i5984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5985[i + 0]) );
  }
  i5982.files = i5984
  i5982.componentToPrefabIds = i5983[1]
  return i5982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5989 = data
  i5988.path = i5989[0]
  request.r(i5989[1], i5989[2], 0, i5988, 'unityObject')
  return i5988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5991 = data
  var i5993 = i5991[0]
  var i5992 = []
  for(var i = 0; i < i5993.length; i += 1) {
    i5992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5993[i + 0]) );
  }
  i5990.scriptsExecutionOrder = i5992
  var i5995 = i5991[1]
  var i5994 = []
  for(var i = 0; i < i5995.length; i += 1) {
    i5994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5995[i + 0]) );
  }
  i5990.sortingLayers = i5994
  var i5997 = i5991[2]
  var i5996 = []
  for(var i = 0; i < i5997.length; i += 1) {
    i5996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5997[i + 0]) );
  }
  i5990.cullingLayers = i5996
  i5990.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5991[3], i5990.timeSettings)
  i5990.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5991[4], i5990.physicsSettings)
  i5990.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5991[5], i5990.physics2DSettings)
  i5990.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5991[6], i5990.qualitySettings)
  i5990.enableRealtimeShadows = !!i5991[7]
  i5990.enableAutoInstancing = !!i5991[8]
  i5990.enableStaticBatching = !!i5991[9]
  i5990.enableDynamicBatching = !!i5991[10]
  i5990.lightmapEncodingQuality = i5991[11]
  i5990.desiredColorSpace = i5991[12]
  var i5999 = i5991[13]
  var i5998 = []
  for(var i = 0; i < i5999.length; i += 1) {
    i5998.push( i5999[i + 0] );
  }
  i5990.allTags = i5998
  return i5990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6003 = data
  i6002.name = i6003[0]
  i6002.value = i6003[1]
  return i6002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6007 = data
  i6006.id = i6007[0]
  i6006.name = i6007[1]
  i6006.value = i6007[2]
  return i6006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6011 = data
  i6010.id = i6011[0]
  i6010.name = i6011[1]
  return i6010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6013 = data
  i6012.fixedDeltaTime = i6013[0]
  i6012.maximumDeltaTime = i6013[1]
  i6012.timeScale = i6013[2]
  i6012.maximumParticleTimestep = i6013[3]
  return i6012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6015 = data
  i6014.gravity = new pc.Vec3( i6015[0], i6015[1], i6015[2] )
  i6014.defaultSolverIterations = i6015[3]
  i6014.bounceThreshold = i6015[4]
  i6014.autoSyncTransforms = !!i6015[5]
  i6014.autoSimulation = !!i6015[6]
  var i6017 = i6015[7]
  var i6016 = []
  for(var i = 0; i < i6017.length; i += 1) {
    i6016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6017[i + 0]) );
  }
  i6014.collisionMatrix = i6016
  return i6014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6021 = data
  i6020.enabled = !!i6021[0]
  i6020.layerId = i6021[1]
  i6020.otherLayerId = i6021[2]
  return i6020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6023 = data
  request.r(i6023[0], i6023[1], 0, i6022, 'material')
  i6022.gravity = new pc.Vec2( i6023[2], i6023[3] )
  i6022.positionIterations = i6023[4]
  i6022.velocityIterations = i6023[5]
  i6022.velocityThreshold = i6023[6]
  i6022.maxLinearCorrection = i6023[7]
  i6022.maxAngularCorrection = i6023[8]
  i6022.maxTranslationSpeed = i6023[9]
  i6022.maxRotationSpeed = i6023[10]
  i6022.baumgarteScale = i6023[11]
  i6022.baumgarteTOIScale = i6023[12]
  i6022.timeToSleep = i6023[13]
  i6022.linearSleepTolerance = i6023[14]
  i6022.angularSleepTolerance = i6023[15]
  i6022.defaultContactOffset = i6023[16]
  i6022.autoSimulation = !!i6023[17]
  i6022.queriesHitTriggers = !!i6023[18]
  i6022.queriesStartInColliders = !!i6023[19]
  i6022.callbacksOnDisable = !!i6023[20]
  i6022.reuseCollisionCallbacks = !!i6023[21]
  i6022.autoSyncTransforms = !!i6023[22]
  var i6025 = i6023[23]
  var i6024 = []
  for(var i = 0; i < i6025.length; i += 1) {
    i6024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6025[i + 0]) );
  }
  i6022.collisionMatrix = i6024
  return i6022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6029 = data
  i6028.enabled = !!i6029[0]
  i6028.layerId = i6029[1]
  i6028.otherLayerId = i6029[2]
  return i6028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6031 = data
  var i6033 = i6031[0]
  var i6032 = []
  for(var i = 0; i < i6033.length; i += 1) {
    i6032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6033[i + 0]) );
  }
  i6030.qualityLevels = i6032
  var i6035 = i6031[1]
  var i6034 = []
  for(var i = 0; i < i6035.length; i += 1) {
    i6034.push( i6035[i + 0] );
  }
  i6030.names = i6034
  i6030.shadows = i6031[2]
  i6030.anisotropicFiltering = i6031[3]
  i6030.antiAliasing = i6031[4]
  i6030.lodBias = i6031[5]
  i6030.shadowCascades = i6031[6]
  i6030.shadowDistance = i6031[7]
  i6030.shadowmaskMode = i6031[8]
  i6030.shadowProjection = i6031[9]
  i6030.shadowResolution = i6031[10]
  i6030.softParticles = !!i6031[11]
  i6030.softVegetation = !!i6031[12]
  i6030.activeColorSpace = i6031[13]
  i6030.desiredColorSpace = i6031[14]
  i6030.masterTextureLimit = i6031[15]
  i6030.maxQueuedFrames = i6031[16]
  i6030.particleRaycastBudget = i6031[17]
  i6030.pixelLightCount = i6031[18]
  i6030.realtimeReflectionProbes = !!i6031[19]
  i6030.shadowCascade2Split = i6031[20]
  i6030.shadowCascade4Split = new pc.Vec3( i6031[21], i6031[22], i6031[23] )
  i6030.streamingMipmapsActive = !!i6031[24]
  i6030.vSyncCount = i6031[25]
  i6030.asyncUploadBufferSize = i6031[26]
  i6030.asyncUploadTimeSlice = i6031[27]
  i6030.billboardsFaceCameraPosition = !!i6031[28]
  i6030.shadowNearPlaneOffset = i6031[29]
  i6030.streamingMipmapsMemoryBudget = i6031[30]
  i6030.maximumLODLevel = i6031[31]
  i6030.streamingMipmapsAddAllCameras = !!i6031[32]
  i6030.streamingMipmapsMaxLevelReduction = i6031[33]
  i6030.streamingMipmapsRenderersPerFrame = i6031[34]
  i6030.resolutionScalingFixedDPIFactor = i6031[35]
  i6030.streamingMipmapsMaxFileIORequests = i6031[36]
  i6030.currentQualityLevel = i6031[37]
  return i6030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6041 = data
  i6040.mode = i6041[0]
  i6040.parameter = i6041[1]
  i6040.threshold = i6041[2]
  return i6040
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6042 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6043 = data
  i6042.xPlacement = i6043[0]
  i6042.yPlacement = i6043[1]
  i6042.xAdvance = i6043[2]
  i6042.yAdvance = i6043[3]
  return i6042
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.TextMesh":{"m_Alignment":0,"m_Anchor":1,"m_CharacterSize":2,"m_Font":3,"m_FontSize":5,"m_FontStyle":6,"m_LineSpacing":7,"m_OffsetZ":8,"m_RichText":9,"m_TabSize":10,"m_Text":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"35":[33],"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[89],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[97],"105":[97],"106":[97],"107":[97],"108":[97],"109":[97],"110":[33],"16":[15],"111":[112],"113":[112],"52":[46],"70":[43],"114":[46],"115":[46],"54":[52],"56":[55,46],"116":[46],"53":[52],"117":[46],"118":[46],"119":[46],"120":[46],"121":[46],"122":[46],"123":[46],"124":[46],"125":[46],"126":[55,46],"127":[46],"128":[46],"129":[46],"67":[46],"130":[55,46],"131":[46],"132":[64],"133":[64],"65":[64],"134":[64],"135":[33],"136":[33],"137":[52],"138":[61],"139":[46],"48":[15,46],"43":[46,55],"140":[46],"141":[55,46],"142":[15],"143":[55,46],"144":[46],"145":[146],"147":[146],"148":[146]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","CompleteBlocks","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BB10_BrickCubeUnit","UnityEngine.GameObject","UnityEngine.BoxCollider2D","BB10_ColorControl","UnityEngine.MeshRenderer","UnityEngine.TextMesh","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","BB10_MainObjControl","BB10_PattemCreater","BB10_NextViewerControl","BB10_Grid","BB10_PlaneView","BB10_GroundView","SG_Block_EffectCtr","CameraScript","BB10_ScoreCtr","BB10_ShowHelpCtr","BB10_ScreenCtr","BB10_Tutorial","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.FlareLayer","CameraResponsive","MainAudio","GridSaveData","Bricks_PattemTableObj","BB10_SpawnBlockData","BB10_NextViewer","GamePlayManager","TMPro.TextMeshProUGUI","ResponsiveManager","TutorialManager","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshPro","TMPro.TMP_FontAsset","ScaleElement","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","BB10_MainCanvasUI","BB10_InGameScript","BB10_FaderHandler","ResponsiveWorld","UnityEngine.UI.Button","CTAButton","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BB10_HomeController","UnityEngine.UI.Slider","TimerProgress","UITweenElement","TextMeshProController","BB10_LostScript","BB10_PopupRate","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","LoadingTransition","BuiltInButtonTestSdk","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "BlockPuzzle";

Deserializers.lunaInitializationTime = "03/12/2026 10:41:13";

Deserializers.lunaDaysRunning = "5.8";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "Basic";

Deserializers.lunaAppID = "37895";

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

Deserializers.buildID = "7ebee607-dc17-4643-a0a5-f2af0ffc5724";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

