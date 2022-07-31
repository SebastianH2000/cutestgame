var levels = new Array(2);
var difficulty = 1;

//level 1
levels[0] = {
    width: 50,
    height: 20,
    goalAmt: 0,
    enemyAmt: 5,
    spawnX: 7,
    spawnY: 10,
    enemies: [{
        type: 0,
        xPos: 15,
        yPos: 15,
        move: function () {
            this.yPos = Math.sin(levelTimer)*7.5 + 10;
        }
    },
    {
        type: 0,
        xPos: 20,
        yPos: 15,
        move: function () {
            this.yPos = Math.sin(levelTimer+Math.PI)*7.5 + 10;
        }
    },
    {
        type: 0,
        xPos: 25,
        yPos: 15,
        move: function () {
            this.yPos = Math.sin(levelTimer)*7.5 + 10;
        }
    },
    {
        type: 0,
        xPos: 30,
        yPos: 15,
        move: function () {
            this.yPos = Math.sin(levelTimer+Math.PI)*7.5 + 10;
        }
    },
    {
        type: 0,
        xPos: 35,
        yPos: 15,
        move: function () {
            this.yPos = Math.sin(levelTimer)*7.5 + 10;
        }
    }],

    world: [{
        xPos: 4,
        yPos: 8,
        width: 6,
        height: 4
    },
    {
        xPos: 10,
        yPos: 2,
        width: 30,
        height: 16
    },
    {
        xPos: 40,
        yPos: 8,
        width: 6,
        height: 4
    }],

    walls: [{
        xPos: 3,
        yPos: 7,
        width: 7,
        height: 1
    },
    {
        xPos: 9,
        yPos: 2,
        width: 1,
        height: 5
    },
    {
        xPos: 9,
        yPos: 1,
        width: 32,
        height: 1
    },
    {
        xPos: 40,
        yPos: 2,
        width: 1,
        height: 5
    },
    {
        xPos: 40,
        yPos: 7,
        width: 7,
        height: 1
    },
    {
        xPos: 46,
        yPos: 8,
        width: 1,
        height: 4
    },
    {
        xPos: 40,
        yPos: 12,
        width: 7,
        height: 1
    },
    {
        xPos: 40,
        yPos: 13,
        width: 1,
        height: 5
    },
    {
        xPos: 9,
        yPos: 18,
        width: 32,
        height: 1
    },
    {
        xPos: 9,
        yPos: 13,
        width: 1,
        height: 5
    },
    {
        xPos: 3,
        yPos: 12,
        width: 7,
        height: 1
    },
    {
        xPos: 3,
        yPos: 8,
        width: 1,
        height: 4
    }],

    victory: [{
        xPos: 40,
        yPos: 8,
        width: 6,
        height: 4
    }],
}

//level 2
levels[1] = {
    width: 56,
    height: 20,
    goalAmt: 0,
    enemyAmt: 13,
    spawnX: 5.5,
    spawnY: 14.5,
    enemies: [{
        type: 0,
        xPos: 8.5,
        yPos: 14.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5)*4 + 14.5;
        }
    },
    {
        type: 0,
        xPos: 12.5,
        yPos: 14.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5+Math.PI)*4 + 14.5;
        }
    },
    {
        type: 0,
        xPos: 16.5,
        yPos: 14.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5)*4 + 14.5;
        }
    },
    {
        type: 0,
        xPos: 19.5,
        yPos: 14.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5+Math.PI)*4 + 14.5;
        }
    },

    {
        type: 0,
        xPos: 25,
        yPos: 10.5,
        move: function () {
            this.xPos = Math.sin(levelTimer*1.5)*4.5 + 25;
        }
    },
    {
        type: 0,
        xPos: 25,
        yPos: 9.5,
        move: function () {
            this.xPos = Math.sin(levelTimer*1.5+Math.PI)*4.5 + 25;
        }
    },

    {
        type: 0,
        xPos: 30.5,
        yPos: 4.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5)*4 + 5.5;
        }
    },
    {
        type: 0,
        xPos: 33.5,
        yPos: 4.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5+Math.PI)*4 + 5.5;
        }
    },
    {
        type: 0,
        xPos: 36.5,
        yPos: 4.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5)*4 + 5.5;
        }
    },
    {
        type: 0,
        xPos: 39.5,
        yPos: 4.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5+Math.PI)*4 + 5.5;
        }
    },

    {
        type: 0,
        xPos: 46.5,
        yPos: 4.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5)*4 + 5.5;
        }
    },
    {
        type: 0,
        xPos: 47.5,
        yPos: 4.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5)*3 + 5.5;
        }
    },
    {
        type: 0,
        xPos: 48.5,
        yPos: 4.5,
        move: function () {
            this.yPos = Math.sin(levelTimer*1.5)*2 + 5.5;
        }
    },],

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

enemyTypes = [{
    size: 1,
},
{

}]
