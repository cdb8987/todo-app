const addTodo = document.getElementById('todoinputsubmit'); // create a pointer to the html element #todoinput for later click event

let listDisplay = document.getElementById("todolist");

const addFunction = function () {
    let inputValue = document.querySelector("#todoinput").value;
    const inputHTML = `<p id="${inputValue}">` + inputValue + '</p>'  //this is the key element...we need to assign id, class and css options along with event listener
    listDisplay.innerHTML += inputHTML

    newHTML = document.getElementById(`${inputValue}`)
    newHTML.addEventListener('click', () => {
        changeToCompleted(inputValue)
    })

    inputValue = ''
    console.log('addFunction Ran')
    console.log(inputHTML)
}

addTodo.addEventListener('click', addFunction);

const changeToCompleted = function (inputValue) {
    console.log('changeToCompleted started')
    pTag = document.getElementById(inputValue)
    console.log('p tag is', pTag)
    console.log('changeToCompleted finished')

}







