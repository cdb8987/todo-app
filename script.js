console.log('script loaded');
let toDoList = [];
const newToDo = document.getElementById('todoinput').innerText;
const logArrayButton = document.getElementById('logarray');
console.log('NewTodo Before function is ', newToDo)
const addFunction = function () {
    console.log('addFunction RAN');
    toDoList.push(newToDo);
    console.log('newToDo in function is:', newToDo)
    console.log(toDoList);
}

logArrayButton.addEventListener('click', addFunction);





