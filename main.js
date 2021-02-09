var lastxposition;
var lastyposition;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
colour="blue";
linewidth = 2;
var width= screen.width;
if (width<992) {
    document.getElementById("mycanvas").width=screen.width-70;
    document.getElementById("mycanvas").height=screen.height-300;
    document.body.style.overflow = "hidden";
}
window.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    colour=document.getElementById("getcolour").value;
   linewidth=document.getElementById("getwidth").value;
   lastxposition=e.touches[0].clientX-canvas.offsetLeft;
   lastyposition=e.touches[0].clientY-canvas.offsetTop;
}
window.addEventListener("touchmove",my_touchmove)
function my_touchmove(e) {
    presentxposition=e.touches[0].clientX-canvas.offsetLeft;
    presentyposition=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=linewidth;
    ctx.moveTo(lastxposition,lastyposition);
    ctx.lineTo(presentxposition,presentyposition);
    ctx.stroke();
 lastxposition=presentxposition;
 lastyposition=presentyposition;
}
function cleararea()  {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
