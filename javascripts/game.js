var fps = 50;
var fpsInv = 1000/fps;

var lastPageX = 0;
var lastPageY = 0;

var gameState = 'menu';
var level = 1;

var tileSize = 40;

var cameraX = 0;
var cameraY = 0;
var playerX = 0;
var playerY = 0;
var playerVelX = 0;
var playerVelY = 0;
var pressUp = false;
var pressRight = false;
var pressDown = false;
var pressLeft = false;

var highlights = false;

var deathTimer = 0;
var deathTimerSet = 2.5;
var deathXPos = 0;
var deathYPos = 0;
var levelTimerDeath = 0;
var playState = 'playing';



function startGame (value) {
    if (value <= levelsUnlocked) {
        gameState = 'play';
        levelTimer = 0;
        currentLevel = value;
        loadLevel(value-1);
        cameraX = levels[value-1].spawnX;
        cameraY = levels[value-1].spawnY;
        playerX = levels[value-1].spawnX;
        playerY = levels[value-1].spawnY;
        playState = 'playing';
    }
}
//levelWon(1);
//startGame(1);

function levelWon(levelNum) {
    document.getElementById('levelBtn' + (levelNum + 1)).classList.add('unlocked');
    if ((levelNum + 1) > levelsUnlocked) {
        levelsUnlocked = (levelNum + 1);
    }
    gameState = 'menu';
}

function changeDifficulty(difficultyNum) {
    if (difficultyNum === 1) {
        difficulty = 1;
        document.getElementById('normalBtn').classList.add('selected');
        document.getElementById('hardBtn').classList.remove('selected');
        document.getElementById('impossibleBtn').classList.remove('selected');
    }
    else if (difficultyNum === 2) {
        difficulty = 2;
        document.getElementById('normalBtn').classList.remove('selected');
        document.getElementById('hardBtn').classList.add('selected');
        document.getElementById('impossibleBtn').classList.remove('selected');
    }
    else if (difficultyNum === 3) {
        difficulty = 3;
        document.getElementById('normalBtn').classList.remove('selected');
        document.getElementById('hardBtn').classList.remove('selected');
        document.getElementById('impossibleBtn').classList.add('selected');
    }
}


function movePlayer(xVal,yVal) {
    playerX += xVal;
    playerY += yVal;

    let topSide = 0;
    let rightSide = 0;
    let bottomSide = 0;
    let leftSide = 0;

    for (let i = 0; i < levels[currentLevel - 1].walls.length; i++) {
        let currentWall = levels[currentLevel - 1].walls[i];
        topSide = currentWall.yPos;
        rightSide = currentWall.xPos+currentWall.width;
        bottomSide = currentWall.yPos+currentWall.height;
        leftSide = currentWall.xPos;
        //if (playerX+0.5 > leftSide && playerX-0.5 < rightSide && playerY+0.5 > bottomSide && playerY-0.5 < topSide) {
        //playerX+0.5 > leftSide && playerX-0.5 < rightSide
        if (playerX+0.5 > leftSide && playerX-0.5 < rightSide && playerY-0.5 < bottomSide && playerY+0.5 > topSide) {
            if (!((xVal > 0 || xVal < 0) && (yVal > 0 || yVal < 0))) {
                if (xVal > 0) {
                    playerX = leftSide-0.51;
                }
                if (xVal < 0) {
                    playerX = rightSide+0.51;
                }

                if (yVal > 0) {
                    playerY = topSide-0.51;
                }
                if (yVal < 0) {
                    playerY = bottomSide+0.51;
                }
            }

            else {

                if (xVal > 0) {
                    if (playerX+0.5-xVal < leftSide) {
                        playerX = leftSide-0.51;
                    }
                }
                else {
                    if (playerX-0.5-xVal > rightSide) {
                        playerX = rightSide+0.51;
                    }
                }

                if (yVal > 0) {
                    if (playerY+0.5-yVal < topSide) {
                        playerY = topSide-0.51;
                    }
                }
                else {
                    if (playerY-0.5-yVal > bottomSide) {
                        playerY = bottomSide+0.51;
                    }
                }
            }
        }
    }

    let topSideWin = levels[currentLevel - 1].victory[0].yPos;
    let rightSideWin = levels[currentLevel - 1].victory[0].xPos+levels[currentLevel - 1].victory[0].width;
    let bottomSideWin = levels[currentLevel - 1].victory[0].yPos+levels[currentLevel - 1].victory[0].height;
    let leftSideWin = levels[currentLevel - 1].victory[0].xPos;
    if (playerX+0.5 > leftSideWin && playerX-0.5 < rightSideWin && playerY-0.5 < bottomSideWin && playerY+0.5 > topSideWin) {
        levelWon(currentLevel);
    }
}

function mainLoop() {
    window.scrollTo(0, 0);
    if (gameState === 'play') {
        if (map[27]) {
            gameState = 'menu';
        }
    }

    if (gameState === 'play') {
        document.getElementById('myCanvas').style.display = '';
        document.getElementById('gameMenuDiv').style.display = 'none';

        let win = window,
            doc = document,
            docElem = doc.documentElement,
            body = doc.getElementsByTagName('body')[0],
            x = win.innerWidth || docElem.clientWidth || body.clientWidth,
            y = win.innerHeight || docElem.clientHeight || body.clientHeight;
        if ((lastPageX !== 0 && lastPageX !== x) || (lastPageY !== 0 && lastPageY !== y)) {
            scaleWindow();
        }

        let cornerX = 0-(canX/screenScale)/2;
        let cornerY = 0-(canY/screenScale)/2;

        ctx.fillStyle = "black";
        ctx.fillRect(cornerX, cornerY, canX/screenScale, canY/screenScale);
        

        if (playState === 'playing') {
            //controls
            if (map[87] || map[38]) {
                pressUp = true;
            }
            else {
                pressUp = false;
            }
            if (map[68] || map[39]) {
                pressRight = true;
            }
            else {
                pressRight = false;
            }
            if (map[83] || map[40]) {
                pressDown = true;
            }
            else {
                pressDown = false;
            }
            if (map[65] || map[37]) {
                pressLeft = true;
            }
            else {
                pressLeft = false;
            }

            if (pressUp && !pressDown && ((!pressLeft && !pressRight) || (pressLeft && pressRight))) {
                //playerY -= 0.15;
                movePlayer(0,-0.15);
            }
            else if (!pressUp && pressDown && ((!pressLeft && !pressRight) || (pressLeft && pressRight))) {
                //playerY += 0.15;
                movePlayer(0,0.15);
            }
            else if (((!pressUp && !pressDown) || (pressUp && pressDown)) && !pressLeft && pressRight) {
                //playerX += 0.15;
                movePlayer(0.15,0);
            }
            else if (((!pressUp && !pressDown) || (pressUp && pressDown)) && pressLeft && !pressRight) {
                //playerX -= 0.15;
                movePlayer(-0.15,0);
            }

            else if (pressUp && !pressDown && !pressLeft && pressRight) {
                //playerY -= 0.15*0.707;
                //playerX += 0.15*0.707;
                movePlayer(0.15*0.707,-(0.15*0.707));
            }
            else if (pressUp && !pressDown && pressLeft && !pressRight) {
                //playerY -= 0.15*0.707;
                //playerX -= 0.15*0.707;
                movePlayer(-(0.15*0.707),-(0.15*0.707));
            }
            else if (!pressUp && pressDown && !pressLeft && pressRight) {
                //playerY += 0.15*0.707;
                //playerX += 0.15*0.707;
                movePlayer(0.15*0.707,0.15*0.707);
            }
            else if (!pressUp && pressDown && pressLeft && !pressRight) {
                //playerY += 0.15*0.707;
                //playerX -= 0.15*0.707;
                movePlayer(-(0.15*0.707),0.15*0.707);
            }




            levelTimer += fpsInv/1000;

            cameraX = playerX;
            cameraY = playerY;
        }
        else if (playState === 'dying') {
            deathTimer -= 1/(fps*deathTimerSet);
            if (deathTimer <= 0) {
                playState = 'playing';
                levelTimer = 0;
                deathTimer = 0;
            }
            else {
                cameraX = lerp(deathXPos,levels[currentLevel - 1].spawnX,1-(deathTimer*2));
                cameraY = lerp(deathYPos,levels[currentLevel - 1].spawnY,1-(deathTimer*2));
                playerX = lerp(deathXPos,levels[currentLevel - 1].spawnX,1-(deathTimer*2));
                playerY = lerp(deathYPos,levels[currentLevel - 1].spawnY,1-(deathTimer*2));
                levelTimer = lerp(levelTimerDeath,levels[currentLevel - 1].loopers[difficulty - 1],1-(deathTimer*2));
            }
        }



        let cameraXOff = cameraX*tileSize;
        let cameraYOff = cameraY*tileSize;

        ctx.drawImage(document.getElementById('levelCan' + currentLevel),0-cameraXOff,0-cameraYOff,levels[currentLevel - 1].width*tileSize,levels[currentLevel - 1].height*tileSize);

        if (playState === 'dying') {
            ctx.globalAlpha = 0.5;
        }
        ctx.fillStyle = 'red';
        for (let i = 0; i < levels[(currentLevel - 1)].enemyAmt[difficulty - 1]; i++) {
            levels[currentLevel - 1].enemies[difficulty - 1][i].move();
            //ctx.fillRect(((levels[0].enemies[i].xPos*tileSize) - 20)-cameraXOff, ((levels[0].enemies[i].yPos*tileSize) - 20)-cameraYOff, tileSize, tileSize);
            ctx.drawImage(document.getElementById('enemyType0001'), ((levels[currentLevel - 1].enemies[difficulty - 1][i].xPos*tileSize) - 20)-cameraXOff, ((levels[currentLevel - 1].enemies[difficulty - 1][i].yPos*tileSize) - 20)-cameraYOff, tileSize, tileSize);

            if ((playerX < levels[currentLevel - 1].enemies[difficulty - 1][i].xPos+0.98 &&  playerX > levels[currentLevel - 1].enemies[difficulty - 1][i].xPos-0.98) && (playerY < levels[currentLevel - 1].enemies[difficulty - 1][i].yPos+0.98 &&  playerY > levels[currentLevel - 1].enemies[difficulty - 1][i].yPos-0.98) && playState === 'playing') {
                playState = 'dying';
                deathTimer = 0.5;
                deathXPos = playerX;
                deathYPos = playerY;
                levelTimerDeath = absMod(levelTimer, levels[currentLevel - 1].loopers[difficulty - 1]);
            }
        }
        if (playState === 'dying') {
            ctx.globalAlpha = 1;
        }

        if (highlights) {
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 10;
            let highlightVal = Math.floor((levelTimer*2) % levels[currentLevel-1].walls.length);
            //let highlightVal = 1;
            ctx.strokeRect(levels[currentLevel-1].walls[highlightVal].xPos*tileSize-cameraXOff,levels[currentLevel-1].walls[highlightVal].yPos*tileSize-cameraYOff,levels[currentLevel-1].walls[highlightVal].width*tileSize,levels[currentLevel-1].walls[highlightVal].height*tileSize);
        }
        

        if (playState === 'dying') {
            ctx.globalAlpha = 0.5;
        }
        //ctx.drawImage(document.getElementById('playerCharacter1'),-20,-20,tileSize,tileSize);
        ctx.drawImage(document.getElementById('playerCharacter1'),-20-cameraXOff+(playerX*tileSize),-20-cameraYOff+(playerY*tileSize),tileSize,tileSize);
        if (playState === 'dying') {
            ctx.globalAlpha = 1;
        }

        lastPageX = x;
        lastPageY = y;
    }



    else if (gameState === 'menu') {
        document.getElementById('myCanvas').style.display = 'none';
        document.getElementById('gameMenuDiv').style.display = 'flex';
        document.getElementsByTagName('body')[0].style.transform = "scale(1)";

        lastPageX = 10;
        lastPageY = 10;
    }
}

setInterval(mainLoop, fpsInv);


var map = {}; // You could also use an array
//wsad
map[87] = false;
map[83] = false;
map[65] = false;
map[68] = false;

//^v<>
map[38] = false;
map[40] = false;
map[37] = false;
map[39] = false;

map[32] = false;
map[27] = false;

onkeydown = onkeyup = function(e){
  e = e || event; // to deal with IE
  map[e.keyCode] = e.type == 'keydown';
  /* insert conditional here */
}
