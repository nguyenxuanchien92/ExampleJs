let imgCat;
let btClick;
btClick = document.getElementById("btClickMe");
imgCat = document.getElementById("imgCat");

function init(){
    imgCat.style.position = "relative";
    imgCat.style.marginLeft= "0px";
}

window.onload = init;

function move() {
    imgCat.style.marginLeft = parseInt(imgCat.style.marginLeft) + 10 + "px";
}

btClick.addEventListener("click",move)