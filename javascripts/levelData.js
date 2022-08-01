var levels = new Array(3);
var difficulty = 1;

//level 1
levels[0] = {
    width: 49,
    height: 20,
    goalAmt: 0,
    enemyAmt: [5,8,12],
    spawnX: 3.5,
    spawnY: 8.5,
    enemies: [[],[],[]],

    world: [{
        xPos: 1,
        yPos: 7,
        width: 5,
        height: 3
    },
    {
        xPos: 6,
        yPos: 1,
        width: 29,
        height: 15
    },
    {
        xPos: 35,
        yPos: 7,
        width: 5,
        height: 3
    }],

    walls: [{
        xPos: 0,
        yPos: 6,
        width: 6,
        height: 1
    },
    {
        xPos: 5,
        yPos: 1,
        width: 1,
        height: 5
    },
    {
        xPos: 5,
        yPos: 0,
        width: 31,
        height: 1
    },
    {
        xPos: 35,
        yPos: 1,
        width: 1,
        height: 5
    },
    {
        xPos: 35,
        yPos: 6,
        width: 6,
        height: 1
    },
    {
        xPos: 40,
        yPos: 7,
        width: 1,
        height: 3
    },
    {
        xPos: 35,
        yPos: 10,
        width: 6,
        height: 1
    },
    {
        xPos: 35,
        yPos: 11,
        width: 1,
        height: 4
    },
    {
        xPos: 5,
        yPos: 15,
        width: 31,
        height: 1
    },
    {
        xPos: 5,
        yPos: 11,
        width: 1,
        height: 4
    },
    {
        xPos: 0,
        yPos: 10,
        width: 6,
        height: 1
    },
    {
        xPos: 0,
        yPos: 7,
        width: 1,
        height: 3
    }],

    victory: [{
        xPos: 35,
        yPos: 7,
        width: 5,
        height: 3
    }],
}

//level 2
levels[1] = {
    width: 56,
    height: 20,
    goalAmt: 0,
    enemyAmt: [13,15,22],
    spawnX: 4.5,
    spawnY: 14.5,
    enemies: [[],[],[]],

    world: [{
        xPos: 1,
        yPos: 10,
        width: 29,
        height: 9
    },
    {
        xPos: 20,
        yPos: 1,
        width: 29,
        height: 9
    },
    {
        xPos: 49,
        yPos: 4,
        width: 6,
        height: 3
    }],

    walls: [{
        xPos: 0,
        yPos: 9,
        width: 20,
        height: 1
    },
    {
        xPos: 19,
        yPos: 1,
        width: 1,
        height: 8
    },
    {
        xPos: 19,
        yPos: 0,
        width: 31,
        height: 1
    },
    {
        xPos: 49,
        yPos: 1,
        width: 1,
        height: 2
    },
    {
        xPos: 49,
        yPos: 3,
        width: 7,
        height: 1
    },
    {
        xPos: 55,
        yPos: 4,
        width: 1,
        height: 3
    },
    {
        xPos: 49,
        yPos: 7,
        width: 7,
        height: 1
    },
    {
        xPos: 49,
        yPos: 8,
        width: 1,
        height: 2
    },
    {
        xPos: 30,
        yPos: 10,
        width: 20,
        height: 1
    },
    {
        xPos: 30,
        yPos: 11,
        width: 1,
        height: 8
    },
    {
        xPos: 0,
        yPos: 19,
        width: 31,
        height: 1
    },
    {
        xPos: 0,
        yPos: 10,
        width: 1,
        height: 9
    },],

    victory: [{
        xPos: 49,
        yPos: 4,
        width: 6,
        height: 3
    }],
}

//level 3
levels[2] = {
    width: 60,
    height: 8,
    goalAmt: 0,
    enemyAmt: [8,12,16],
    spawnX: 3.5,
    spawnY: 5,
    enemies: [[],[],[]],

    world: [{
        xPos: 6,
        yPos: 1,
        width: 41,
        height: 1
    },
    {
        xPos: 6,
        yPos: 2,
        width: 1,
        height: 1
    },
    {
        xPos: 1,
        yPos: 3,
        width: 52,
        height: 4
    },
    {
        xPos: 53,
        yPos: 4,
        width: 6,
        height: 2
    },
    {
        xPos: 46,
        yPos: 2,
        width: 1,
        height: 1
    }],

    walls: [{
        xPos: 0,
        yPos: 2,
        width: 6,
        height: 1
    },
    {
        xPos: 5,
        yPos: 1,
        width: 1,
        height: 1
    },
    {
        xPos: 5,
        yPos: 0,
        width: 43,
        height: 1
    },
    {
        xPos: 47,
        yPos: 1,
        width: 1,
        height: 1
    },
    {
        xPos: 47,
        yPos: 2,
        width: 7,
        height: 1
    },
    {
        xPos: 53,
        yPos: 3,
        width: 7,
        height: 1
    },
    {
        xPos: 59,
        yPos: 4,
        width: 1,
        height:2
    },
    {
        xPos: 53,
        yPos: 6,
        width: 7,
        height: 1
    },
    {
        xPos: 0,
        yPos: 7,
        width: 54,
        height: 1
    },
    {
        xPos: 0,
        yPos: 3,
        width: 1,
        height: 4
    },
    {
        xPos: 7,
        yPos: 2,
        width: 39,
        height: 1
    }],

    victory: [{
        xPos: 53,
        yPos: 4,
        width: 6,
        height: 2
    }],
}
