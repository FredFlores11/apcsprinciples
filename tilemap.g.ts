// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e001e0007060606060606060606060606060606060606060606060606060606060502010101010101010101010101010101010101010101010101010101010802010a0101010101010101010101010101010101010101010101010a0108020101010101010101010101010101010101010101010101010101010108020101010101010101010101010101010101010101010101010101010108020101010101010101010101010101010101010101010101010101010108020101010101010101010101010101010101010101010101010101010108020101010101010101010101010101010101010101010101010101010108020101010101010101010101010101010101010101010101010b0b0b0b0b020101010101010101010101010101010101010101010101010d0101010802010101010101010101010a01010101010101010a010101010c01010108020101010101010101010101010101010101010101010101010c01010108020101010101010101010101010101010101010101010101010c01010108020101010101010101010101010101010101010101010101010b01010108020101010101010101010101010101010101010101010101010b01010108020101010101010101010101010101010101010101010101010b01010108020101010101010101010101010101010101010101010101010b01010108020101010101010101010101010101010101010101010101010b01010108020101010101010101010101010101010101010101010101010b0b0b0c0c0201010101010101010101010101010101010101010101010101010b010802010101010101010101010a01010101010101010a0101010101010b01080201010101010101010101010101010101010101010101010101010b0108020101010101010101010101010101010101010101010101010b0b0b0108020101010101010101010101010101010101010101010101010b010101080201010101010101010101010101010101010101010b0b0b0b0b0101010802010a0101010101010101010101010101010101010b01010101010a01080201010101010101010101010101010101010101010b01010101010101080201010101010101010101010101010101010101010c01010101010101080201010101010101010101010101010101010101010c01010101010101080309090909090909090909090909090909090909090c0909090909090904`, img`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
.........................22222
..............................
.........................2....
.........................2....
.........................2....
.........................2....
.........................2....
.........................2....
.........................2....
.........................2....
.........................22222
...........................2..
...........................2..
...........................2..
.........................222..
.........................2....
.....................22222....
.....................2........
.....................2........
.....................2........
.....................2........
.....................2........
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
