const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

let toDos = [];
const TODOS_KEY = "toDos"

function deleteToDo(event){
     const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id!== parseInt(li.id));
    li.remove();
    saveToDo(toDos);
}

function saveToDo(toDos) {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function paintToDo(newTd) {
    const lk = document.createElement('li');
    lk.id = newTd.id;
    const ssp = document.createElement('span');
    ssp.innerText = newTd.text;
    const button = document.createElement('button');
    button.innerText = "X";
    button.addEventListener('click', deleteToDo);
    lk.appendChild(ssp);
    lk.appendChild(button);
    toDoList.appendChild(lk);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTd = {text: toDoInput.value, id:Date.now()};
    toDos.push(newTd);
    paintToDo(newTd);
    toDoInput.value = '';
    saveToDo(toDos);
}

toDoForm.addEventListener('submit', handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 
