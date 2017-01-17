var canvasId,canvas,canvasHeight,canvasWidth,ctx,image,imageHeight,imageWidth;
function getCanvasHeight(){
    return canvasHeight;
}
function getCanvasWidth(){
    return canvasWidth;
}
function getImageHeight(){
    return imageHeight;
}
function getImageWidth(){
    return imageWidth;
}
function getPixel(canvasId,x,y){
    setCanvas(canvasId);
    var pixel = ctx.getImageData(x, y, 1, 1);
    return pixel.data;
}
function setCanvas(canvasId){
    canvasId=canvasId;
    canvas = document.getElementById(canvasId);
    canvasHeight = canvas.height;
    canvasWidth = canvas.width;
    ctx = canvas.getContext("2d");
}
function setImage(canvasId,x,y,imageSrc){
    setCanvas(canvasId);
    image = new Image();
    image.src = imageSrc;
    imageHeight=image.height;
    imageWidth=image.width;
    image.onload = function() {
        ctx.drawImage(image, x, y);
    };
}
function setPixel(canvasId,x,y,color){
    setCanvas(canvasId);
    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    var index = (x + y * canvasWidth) * 4;
    canvasData.data[index + 0] = color[0];
    canvasData.data[index + 1] = color[1];
    canvasData.data[index + 2] = color[2];
    canvasData.data[index + 3] = color[3];
    ctx.putImageData(canvasData, 0, 0);
}
