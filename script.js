let toDoList = [];  //create empty array

const submitTodo = document.getElementById('todoinputsubmit'); // create a pointer to the html element #todoinput for later click event


const addFunction = function () {
    const inputValue = document.querySelector("#todoinput").value
    toDoList.push(inputValue)
    document.querySelector("#todoinput").value = '' //resets form to empty string
    displayList()
}
const displayList = function () {
    for (let index = 0; index < toDoList.length; index++) {
        let element = toDoList[index];
        element = '<li>' + element + '</li>';
        toDoList[index] = element

    }
    document.getElementById('todolist').innerHTML = toDoList
}

submitTodo.addEventListener('click', addFunction);






