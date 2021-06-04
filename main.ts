namespace SpriteKind {
    export const background = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const PowerUp1 = SpriteKind.create()
    export const PowerUp2 = SpriteKind.create()
    export const PowerUp3 = SpriteKind.create()
    export const PowerUp4 = SpriteKind.create()
    export const PowerUp5 = SpriteKind.create()
    export const PowerUp6 = SpriteKind.create()
    export const PowerUp7 = SpriteKind.create()
    export const Shield = SpriteKind.create()
    export const HeatSeeker = SpriteKind.create()
    export const BouncyBlueberry = SpriteKind.create()
    export const BouncyOrange = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp2, function (sprite, otherSprite) {
    otherSprite.destroy()
    controller.moveSprite(mySprite, 50, 50)
    pause(10000)
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy4, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Enemy4, SpriteKind.Shield, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(10)
})
sprites.onCreated(SpriteKind.BouncyOrange, function (sprite) {
    sprite.setVelocity(-50, 25)
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Shield, function (sprite, otherSprite) {
    sprite.destroy()
    Boss_Lives = 3
    info.changeScoreBy(4)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (BackAttack == 4) {
        if (bTime == 0) {
            bTime = 72
            projectile = sprites.createProjectileFromSprite(assets.image`Space Monke Projectile`, mySprite, -120, 0)
            projectile = sprites.createProjectileFromSprite(assets.image`Space Monke Projectile`, mySprite, -120, 25)
            projectile = sprites.createProjectileFromSprite(assets.image`Space Monke Projectile`, mySprite, -120, -25)
        }
    } else {
        if (BackAttack == 3) {
            if (bTime == 0) {
                bTime = 72
                projectile = sprites.createProjectileFromSprite(assets.image`Tiny Pizza`, mySprite, -120, 0)
            }
        } else {
            if (BackAttack == 2) {
                if (bTime == 0) {
                    bTime = 72
                    for (let index = 0; index < 3; index++) {
                        projectile = sprites.createProjectileFromSprite(img`
                            .............beebbbb............
                            ............eebbbb4bb...........
                            ............eb344bb4bb..........
                            ............e44334bb4bb.........
                            ............eb433344b4be........
                            ............4eb43344444be.......
                            ...........bd4eb43333344bb......
                            ..........b455d4443333444bb.....
                            ..........4d5555d444333444bb....
                            .........4555555dd4b4443444be...
                            ........bd5555d555d4bb444444ee..
                            ........b55ddd665555bb4b44444ee.
                            .......bd5555677655554ebb44444eb
                            .......43222558855555d4eeb44b4ee
                            ......b422332ddd555222d4eebbb4be
                            ......be22232ed55522332db4ebbbbe
                            .....bde22222e555e22232edd4bbbbe
                            .....b52e222e3555e22222eddd4ebee
                            ....bd552eee355552e222e355544eee
                            ....665dd5555555552eee355dd4deee
                            ...6776555555555555555551554d4ee
                            ...4885222555dddd6655551544d4eee
                            ..b45522332555dd677611d444ddeee.
                            ..4d5222232e55555881d44ddd4eee..
                            .bdd5e22222e555115114d54d4ee....
                            .b55d2e222e351144d1d55eeee......
                            bd5ddd2eee3d444555dd4e..........
                            b555115dddd55d544eede...........
                            4511d444d5544ee...4de...........
                            41d4555d4ee........44...........
                            41554eede.......................
                            44ee...4e.......................
                            `, mySprite, -120, 0)
                    }
                }
            } else {
                if (BackAttack == 1) {
                    if (bTime == 0) {
                        bTime = 36
                        projectile = sprites.createProjectileFromSprite(assets.image`Speed Pizza`, mySprite, -240, 0)
                    }
                } else {
                    if (BackAttack == 0) {
                        if (bTime == 0) {
                            bTime = 72
                            projectile = sprites.createProjectileFromSprite(assets.image`Space Monke Projectile`, mySprite, -120, 0)
                        }
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BouncyOrange, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onCreated(SpriteKind.Boss, function (sprite) {
    sprite.setVelocity(-25, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Attack == 4) {
        if (aTime == 0) {
            aTime = 36
            projectile = sprites.createProjectileFromSprite(assets.image`Space Monke Projectile`, mySprite, 60, 0)
            projectile = sprites.createProjectileFromSprite(assets.image`Space Monke Projectile`, mySprite, 60, 25)
            projectile = sprites.createProjectileFromSprite(assets.image`Space Monke Projectile`, mySprite, 60, -25)
        }
    } else {
        if (Attack == 3) {
            if (aTime == 0) {
                aTime = 36
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . e . . . 
                    . . 4 e e e . . 
                    . 4 5 5 e e e . 
                    . 4 5 2 5 e e e 
                    4 5 5 5 5 5 e . 
                    5 5 5 5 2 5 4 . 
                    5 2 5 5 5 4 . . 
                    5 5 5 4 4 . . . 
                    `, mySprite, 60, 0)
            }
        } else {
            if (Attack == 2) {
                if (aTime == 0) {
                    aTime = 36
                    for (let index = 0; index < 3; index++) {
                        projectile = sprites.createProjectileFromSprite(assets.image`Big Pizza`, mySprite, 60, 0)
                    }
                }
            } else {
                if (Attack == 1) {
                    if (aTime == 0) {
                        aTime = 18
                        projectile = sprites.createProjectileFromSprite(assets.image`Speed Pizza`, mySprite, 120, 0)
                    }
                } else {
                    if (Attack == 0) {
                        if (aTime == 0) {
                            aTime = 36
                            projectile = sprites.createProjectileFromSprite(assets.image`Space Monke Projectile`, mySprite, 60, 0)
                        }
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BouncyOrange, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp1, function (sprite, otherSprite) {
    otherSprite.destroy()
    controller.moveSprite(mySprite, 150, 150)
    pause(10000)
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    Boss_Lives += 1
    if (Boss_Lives == 3) {
        otherSprite.destroy()
        info.changeScoreBy(4)
    }
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp3, function (sprite, otherSprite) {
    otherSprite.destroy()
    Attack = 1
    BackAttack = 1
    pause(10000)
    Attack = 0
    BackAttack = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp5, function (sprite, otherSprite) {
    otherSprite.destroy()
    Attack = 3
    BackAttack = 3
    pause(10000)
    Attack = 0
    BackAttack = 0
})
sprites.onCreated(SpriteKind.Enemy4, function (sprite) {
    sprite.setVelocity(-50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HeatSeeker, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onCreated(SpriteKind.Enemy2, function (sprite) {
    sprite.setVelocity(-100, 0)
})
sprites.onOverlap(SpriteKind.BouncyOrange, SpriteKind.Shield, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy4, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.HeatSeeker, SpriteKind.Shield, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.HeatSeeker, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Shield, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp4, function (sprite, otherSprite) {
    otherSprite.destroy()
    Attack = 2
    BackAttack = 2
    pause(10000)
    Attack = 0
    BackAttack = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp6, function (sprite, otherSprite) {
    otherSprite.destroy()
    Attack = 4
    BackAttack = 4
    pause(10000)
    Attack = 0
    BackAttack = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp7, function (sprite, otherSprite) {
    otherSprite.destroy()
    Shield = sprites.create(assets.image`Shield`, SpriteKind.Shield)
    Shield.follow(mySprite, 150)
    mySprite.setStayInScreen(true)
    pause(5000)
    Shield.destroy()
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Shield, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Power_Up_7: Sprite = null
let Power_Up_6: Sprite = null
let Power_Up_5: Sprite = null
let Power_Up_4: Sprite = null
let Power_Up_3: Sprite = null
let Power_Up_2: Sprite = null
let Power_Up_1: Sprite = null
let enemySprite: Sprite = null
let speedSprite: Sprite = null
let mySprite3: Sprite = null
let richSprite: Sprite = null
let HeatSeeker: Sprite = null
let Bouncy_Orange: Sprite = null
let Shield: Sprite = null
let projectile: Sprite = null
let Boss_Lives = 0
let BackAttack = 0
let Attack = 0
let bTime = 0
let aTime = 0
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(assets.image`space monke`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
aTime = 0
bTime = 0
mySprite.setFlag(SpriteFlag.AutoDestroy, true)
mySprite.setStayInScreen(true)
Attack = 0
BackAttack = 0
Boss_Lives = 3
info.setLife(3)
game.onUpdateInterval(1000, function () {
    if (randint(1, 15) == 15) {
        Bouncy_Orange = sprites.create(assets.image`Bouncy Orange`, SpriteKind.BouncyOrange)
        Bouncy_Orange.setPosition(randint(125, 160), randint(0, 100))
        Bouncy_Orange.setBounceOnWall(true)
    } else {
        if (randint(1, 10) == 10) {
            HeatSeeker = sprites.create(assets.image`Heat Seeker`, SpriteKind.HeatSeeker)
            HeatSeeker.setPosition(randint(125, 160), randint(0, 100))
            HeatSeeker.follow(mySprite, 100)
        } else {
            if (randint(1, 45) == 45) {
                richSprite = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . c . . . . . . 
                    . . . . . . . . c c . . . . . . 
                    . . . . . . . . c . . . . . . . 
                    . . . . . c c c c c c . . . . . 
                    . . f c c 5 5 c c 5 5 c c f . . 
                    . . c f f f 5 5 5 5 f f f c . . 
                    . . c 1 1 1 5 5 5 5 1 1 1 c . . 
                    . . c 1 f 1 5 5 5 5 1 f 1 c . . 
                    . . c 1 f 1 5 5 5 5 1 f 1 c . . 
                    . . c 1 1 1 5 5 5 5 1 1 1 c . . 
                    . . . c 5 5 f f f f 5 5 c . . . 
                    . . . c 5 f 5 5 5 5 f 5 c . . . 
                    . . . . c 5 5 5 5 5 5 c . . . . 
                    . . . . . c c c c c c . . . . . 
                    `, SpriteKind.Enemy4)
                richSprite.setPosition(randint(125, 160), randint(0, 100))
            } else {
                if (randint(1, 15) == 15) {
                    if (Boss_Lives == 3) {
                        mySprite3 = sprites.create(assets.image`Boss`, SpriteKind.Boss)
                        mySprite3.setPosition(randint(125, 160), randint(0, 100))
                        Boss_Lives = 0
                    }
                } else {
                    if (randint(1, 14) == 14) {
                        speedSprite = sprites.create(assets.image`Speed carrot`, SpriteKind.Enemy2)
                        speedSprite.setPosition(randint(125, 160), randint(0, 100))
                    } else {
                        enemySprite = sprites.create(assets.image`broccoli`, SpriteKind.Enemy)
                        enemySprite.setPosition(randint(125, 160), randint(0, 100))
                    }
                }
            }
        }
    }
})
game.onUpdateInterval(1, function () {
    if (aTime > 0) {
        aTime = aTime - 1
    }
    if (bTime > 0) {
        bTime = bTime - 1
    }
})
forever(function () {
    music.playMelody("C5 B - A - B C5 - ", 250)
})
game.onUpdateInterval(20000, function () {
    if (game.runtime() > 20000) {
        if (Math.percentChance(14.29)) {
            Power_Up_1 = sprites.create(assets.image`Power Up 1`, SpriteKind.PowerUp1)
            Power_Up_1.setPosition(randint(10, 150), randint(10, 90))
        } else {
            if (Math.percentChance(16.6)) {
                Power_Up_2 = sprites.create(assets.image`Bad Power Up 1`, SpriteKind.PowerUp2)
                Power_Up_2.setPosition(randint(10, 150), randint(10, 90))
            } else {
                if (Math.percentChance(20)) {
                    Power_Up_3 = sprites.create(img`
                        .....77777777.....
                        ...77cccbbbbb77...
                        ..7ccb444444bbb7..
                        .7cc4444454444bc7.
                        .7e444444444544e7.
                        7eb454454444444bc7
                        7eb4444444444544e7
                        7ebb44444444444be7
                        .7eb4444454444be7.
                        787eeb444444bee687
                        7872eeeeeeeeee2787
                        7e6622222222226ce7
                        7ec67667776676cce7
                        7ebe88cc88ccc8ebe7
                        7eebecceeeeecebee7
                        .7eebb44444444ee7.
                        ..77ccccceeeee77..
                        ....7777777777....
                        `, SpriteKind.PowerUp3)
                    Power_Up_3.setPosition(randint(10, 150), randint(10, 90))
                } else {
                    if (Math.percentChance(25)) {
                        Power_Up_4 = sprites.create(img`
                            ......777777777...
                            .....733b33dd337..
                            ....7311d3d111137.
                            ...73d111d111d3137
                            ..73dd111dd1113337
                            .7311d1111dd11b77.
                            .73111d11111d1137.
                            .7bd111d111111137.
                            .74b1111dd1111d37.
                            .744d111111dddbb7.
                            .74dbd1111111137..
                            74dd5bd111111137..
                            745d55bbd1111d37..
                            7455d55dbbbdd37...
                            74555dddd44b37....
                            .745554447777.....
                            ..7444777.........
                            ...777............
                            `, SpriteKind.PowerUp4)
                        Power_Up_4.setPosition(randint(10, 150), randint(10, 90))
                    } else {
                        if (Math.percentChance(33.33)) {
                            Power_Up_5 = sprites.create(img`
                                .222..22222.......
                                2444224444422.....
                                24554455555442....
                                2b4551511155542...
                                .2b5555115511542..
                                .2bd5555555511542.
                                2b455555555551542.
                                2cd555555555555542
                                2cd455555555551542
                                2c4555d55555555542
                                2c4d545d5555555542
                                .2c45555ddd55555b2
                                .2c4d545d44d5554c2
                                ..2c44d44444dd5dc2
                                ...2c4444444455542
                                ....2ccb444bb45442
                                .....22ccccccbb42.
                                .......222222222..
                                `, SpriteKind.PowerUp5)
                            Power_Up_5.setPosition(randint(10, 150), randint(10, 90))
                        } else {
                            if (Math.percentChance(50)) {
                                Power_Up_6 = sprites.create(assets.image`Power Up 6`, SpriteKind.PowerUp6)
                                Power_Up_6.setPosition(randint(10, 150), randint(10, 90))
                            } else {
                                Power_Up_7 = sprites.create(img`
                                    . . . . . . . 7 7 7 7 . . . . . 
                                    . . . . . 7 7 4 5 5 5 7 7 . . . 
                                    . . . . 7 4 5 6 2 2 7 6 6 7 . . 
                                    . . . 7 5 6 6 7 2 2 6 4 4 4 7 . 
                                    . . 7 5 2 2 7 6 6 4 5 5 5 5 7 . 
                                    . 7 5 6 2 2 8 8 5 5 5 5 5 4 5 7 
                                    . 7 5 6 7 7 8 5 4 5 4 5 5 5 5 7 
                                    7 4 5 8 6 6 5 5 5 5 5 5 4 5 5 7 
                                    7 5 c e 8 5 5 5 4 5 5 5 5 5 5 7 
                                    7 5 c c e 5 4 5 5 5 4 5 5 5 7 . 
                                    7 5 c c 5 5 5 5 5 5 5 5 4 7 . . 
                                    7 5 e c 5 4 5 4 5 5 5 7 7 . . . 
                                    7 5 e e 5 5 5 5 5 4 7 . . . . . 
                                    7 5 4 e 5 5 5 5 7 7 . . . . . . 
                                    . 7 5 4 5 5 4 7 . . . . . . . . 
                                    . . 7 7 7 7 7 . . . . . . . . . 
                                    `, SpriteKind.PowerUp7)
                                Power_Up_7.setPosition(randint(10, 150), randint(10, 90))
                            }
                        }
                    }
                }
            }
        }
    }
})
