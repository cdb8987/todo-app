const addTodo = document.getElementById('todoinputsubmit'); // create a pointer to the html form element #todoinput for later click event

let listDisplay = document.getElementById("todolist");

const addFunction = function () {
    let inputValue = document.querySelector("#todoinput").value;
    const inputHTML = `<p id="${inputValue}">` + inputValue + '</p>'  //this is the key element...we need to assign id, class and css options along with event listener
    listDisplay.innerHTML += inputHTML

    const newHTML = document.getElementById(`${inputValue}`)
    newHTML.addEventListener('click', () => {
        changeToCompleted(inputValue)
    })


}

addTodo.addEventListener('click', addFunction);

const changeToCompleted = function (inputValue) {
    console.log('changeToCompleted started', 'input value is', inputValue)
    pTag = document.getElementById(inputValue).innerText
    document.getElementById(inputValue).classList.add('complete')
    console.log('p tag is', pTag)
    document.getElementById('todoinput').innerText = ''
    console.log('changeToCompleted finished', 'input value is', inputValue)


}







