const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput  = form.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}

function paintToDo(text) {

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDInput.value;
    paintToDo(turrentvalue);
}
function init() {
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit);
}

init();