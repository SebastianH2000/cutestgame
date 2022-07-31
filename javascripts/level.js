var levelsUnlocked = 1;
var levelTimer = 0;
var currentLevel = 1;

function loadLevel (levelNum) {
    let levelCan = document.getElementById('levelCan' + (levelNum + 1));
    let levelCtx = levelCan.getContext('2d');
    levelCan.width = levels[levelNum].width*tileSize;
    levelCan.height = levels[levelNum].height*tileSize;

    levelCtx.fillStyle = 'black';
    for (let i = 0; i < levels[levelNum].world.length; i++) {
        let xPos = levels[levelNum].world[i].xPos;
        let yPos = levels[levelNum].world[i].yPos;
        let width = levels[levelNum].world[i].width;
        let height = levels[levelNum].world[i].height;

        levelCtx.globalAlpha = 0.2;
        for (let jx = 0; jx < width; jx++) {
            for (let jy = 0; jy < height; jy++) {
                levelCtx.globalAlpha = 1;
                levelCtx.fillRect((xPos + jx)*tileSize, (yPos + jy)*tileSize, tileSize, tileSize);
                levelCtx.globalAlpha = 0.2;
                rotateByImage(levelCtx, document.getElementById('wallType0001'), (xPos + jx)*tileSize, (yPos + jy)*tileSize, tileSize, tileSize, (Math.floor(Math.random()*4)/4)*360);
            }
        }
        levelCtx.globalAlpha = 1;
    }
    levelCtx.globalAlpha = 0.25;
    levelCtx.fillStyle = 'green';
    levelCtx.fillRect(levels[levelNum].victory[0].xPos*tileSize, levels[levelNum].victory[0].yPos*tileSize, levels[levelNum].victory[0].width*tileSize, levels[levelNum].victory[0].height*tileSize);
    levelCtx.fillStyle = 'black';
    levelCtx.globalAlpha = 1;



    for (let i = 0; i < levels[levelNum].walls.length; i++) {
        let xPos = levels[levelNum].walls[i].xPos;
        let yPos = levels[levelNum].walls[i].yPos;
        let width = levels[levelNum].walls[i].width;
        let height = levels[levelNum].walls[i].height;

        for (let jx = 0; jx < width; jx++) {
            for (let jy = 0; jy < height; jy++) {
                levelCtx.fillRect((xPos + jx)*tileSize, (yPos + jy)*tileSize, tileSize, tileSize);
                rotateByImage(levelCtx, document.getElementById('wallType0001'), (xPos + jx)*tileSize, (yPos + jy)*tileSize, tileSize, tileSize, (Math.floor(Math.random()*4)/4)*360);
            }
        }
    }
    levelCtx.strokeStyle = 'red';
    levelCtx.lineWidth = 10;
    let highlightVal = 7;
    //levelCtx.strokeRect(levels[levelNum].walls[highlightVal].xPos*tileSize,levels[levelNum].walls[highlightVal].yPos*tileSize,levels[levelNum].walls[highlightVal].width*tileSize,levels[levelNum].walls[highlightVal].height*tileSize);
}
