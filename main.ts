scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    PLayerSprite.sayText("I must run through the wall")
    pause(50)
    if (controller.A.isPressed() && Math.percentChance(0.01)) {
        tiles.setWallAt(tiles.getTileLocation(28, 18), false)
        tiles.setWallAt(tiles.getTileLocation(29, 18), false)
        PLayerSprite.sayText("BOOM")
        info.changeLifeBy(-1)
    }
})
function SpawnEnemies (num: number) {
    if (num == 1) {
        for (let index = 0; index <= randint(5, 10); index++) {
            tiles.placeOnRandomTile(myEnemy._pickRandom(), sprites.dungeon.darkGroundCenter)
        }
    } else if (num == 2) {
    	
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, PLayerSprite, 50, 50)
})
function Breakwall (mySprite: Sprite) {
	
}
info.onCountdownEnd(function () {
    tiles.setWallAt(tiles.getTileLocation(28, 18), true)
    tiles.setWallAt(tiles.getTileLocation(29, 18), true)
})
let projectile: Sprite = null
let myEnemy: Sprite[] = []
let PLayerSprite: Sprite = null
PLayerSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f f . 
    . . e f e 4 d d d d 4 e f f d f 
    . . e 4 d d e 2 2 2 2 f e f b f 
    . . . e d d e 2 2 2 2 f 4 f b f 
    . . . . e e f 5 5 4 4 f . f c f 
    . . . . . f f f f f f f . f f . 
    . . . . . . . . . f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(PLayerSprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(PLayerSprite)
myEnemy = [
sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy),
sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy),
sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Enemy),
sprites.create(img`
    . . . . c c c c c . . . . . . . 
    . . c c 5 5 5 5 5 c . . . . . . 
    . c 5 5 5 5 1 f 5 5 c . . . . . 
    c 5 5 5 5 5 f f 5 5 5 c . . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 c . . . 
    c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . c 5 5 5 5 b 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c . . 
    . c b b c 5 5 b b d d d d c c c 
    . c c c c c c d d d d d d d d c 
    . . . . c c c b 5 5 b d d d c . 
    . . . . . c d 5 5 b b c c c . . 
    . . . . c c c c c c c . . . . . 
    . . . . c b b b c . . . . . . . 
    `, SpriteKind.Player)
]
SpawnEnemies(game.askForNumber("Difficulty? 1-easy 2-hard", 1))
scene.cameraShake(8, 1000)
