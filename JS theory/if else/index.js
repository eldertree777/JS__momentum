// if(10 === 5){
//     console.log("hi");
// }else if("10"===10){

// }else{
//     console.log("bye");
// }

//const age = prompt("hello jewon");

const title = document.querySelector("#title");
const CLICKED_CLASS ="clicked";
const BASE_COLOR = "white";
const OTHER_COLOR = "#2c3e50";

function handleClick(){
    // const currentClass = title.className;
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // } else{
    //     title.classList.add(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
    //파라미터 값을 기준으로 on/off처럼 더하고 뺌
}

function handleResize(event){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
    console.log(event);
}

function init(){
    //title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

// function hi(){
//     console.log("hihihihi");
// }
// function bye(){
//     console.log("byebyebye");
// }

// window.addEventListener("offline",hi);
// window.addEventListener("online",hi);