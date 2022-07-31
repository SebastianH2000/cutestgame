function scaleWindow() {
    document.body.style.transform = "scale(1)";
    let win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight || docElem.clientHeight || body.clientHeight;
    document.body.style.transform = "scale(" + Math.min(x / canX, y / canY) + ")";
    document.body.style.height = y + "px";
    scaleFactor = Math.min(x / canX, y / canY);

    /*if (x/canX < y/canY) {
      document.body.style.margin = (((y - (canY*scaleFactor))/2) + "px 0px 0px 0px");
    }
    else {
      document.body.style.margin = (((y - (canY*scaleFactor))/2) + "px 0px 0px 0px");
    }*/
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(can.width / 2, can.height / 2);
    ctx.scale(1 * screenScale, 1 * screenScale);
    canObj = can.getBoundingClientRect();
    if (x / canX > y / canY) {
        bigSide = 'x';
        //sideOffset = ((x*scaleFactor) - canX * scaleFactor)*scaleFactor;
        sideOffset = canObj.left / scaleFactor;
        //sideOffset = x-((canX/2)*scaleFactor);
        //sideOffset = 178;
    }
    else {
        bigSide = 'y';
        //sideOffset = y-(canY*scaleFactor);
        sideOffset = canObj.top / scaleFactor;
    }
}
window.onload = function () {
    scaleWindow();
}