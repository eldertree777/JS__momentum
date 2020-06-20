const body = document.querySelector("body");
const IMG_NUMBER = 6;



function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    image.addEventListener("load",function(){
        body.prepend(image);
    });
    
}

function getRandom(){
    return Math.floor(Math.random()*999%IMG_NUMBER);
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();