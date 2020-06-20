const toDoForm = document.querySelector(".js-toDoForm"),
 toDoInput = toDoForm.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];



function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const i = document.createElement("i");
    const a = document.createElement("a");
    const newId = toDos.length + 1;
    i.classList.add("fas", "fa-times");
    // i.addEventListener("click",function(event){
    //     event.preventDefault(); 
    // });
    //delBtn.innerHTML = `<i class="fas fa-times"></i>`;
    delBtn.appendChild(i);
    a.appendChild(delBtn);
    a.addEventListener("click",deleteToDo);
    span.innerText = ` ${text}`;
    li.appendChild(a);
    li.appendChild(span);
    li.id = newId
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""
}

function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if( loadToDos !== null){
        const paesedToDos = JSON.parse(loadToDos);
        paesedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

 function init(){
     loadToDos();
     toDoForm.addEventListener("submit",handleSubmit);
}
init();
 