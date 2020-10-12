

function moveSelection(evt) {
    switch (evt.key) {
        case "ArrowLeft":
            leftArrowPressed();
            break;
        case "ArrowRight":
            rightArrowPressed();
            break;
        case "ArrowUp":
            upArrowPressed();
            break;
        case "ArrowDown":
            downArrowPressed();
            break;
    }
}

function upArrowPressed() {
    let element = document.getElementById("imgCat");
    element.style.top = parseInt(element.style.top) - 10 + 'px';
}

function downArrowPressed() {
    let element = document.getElementById("imgCat");
    element.style.top = parseInt(element.style.top) + 10 + 'px';
}

function leftArrowPressed() {
    let element = document.getElementById("imgCat");
    element.style.left = parseInt(element.style.left) - 10 + 'px';
}

function rightArrowPressed() {
    let element = document.getElementById("imgCat");
    element.style.left = parseInt(element.style.left) + 10 + 'px';

}

function docReady() {
    window.addEventListener('keydown', moveSelection);
}