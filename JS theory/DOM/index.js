//const title = document.getElementById("title");
const title = document.querySelector("#title");
console.log(title);

title.innerHTML = "HI! from JS!";
//title.style.color= "red";
console.dir(title);
document.title = "hi DOM";

function handleResize(event){
    //console.log(event);
    //console.log("I have been resized");
    title.style.color = "red";
}
window.addEventListener("resize", handleResize);
title.addEventListener("click", handleResize);