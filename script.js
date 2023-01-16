const addTodo = document.getElementById('todoinputsubmit'); // create a pointer to the html form element #todoinput for later click event

let listDisplay = document.getElementById("todolist");

const addFunction = function () {  //this fires every time 'add' is clicked
    let inputValue = document.querySelector("#todoinput").value;
    const inputHTML = `<p id="${inputValue}">` + inputValue + '</p>'  //this is the key element...we need to assign id, class and css options along with event listener
    listDisplay.innerHTML += inputHTML
    const pTags = listDisplay.querySelectorAll('p');
    pTags.forEach((p) => {
        p.addEventListener('click', () => {
            p.style['text-decoration'] = 'line-through'
            if (p.className != 'crossedoff') {
                p.className = 'crossedoff'
                p.innerHTML += '<button>X</button>'
                const pButton = p.getElementsByTagName('button')[0]
                console.log('PBUTTON IS', pButton)
                pButton.addEventListener('click', () => {
                    p.style['display'] = 'none'
                })
            }

        })
    })


}

addTodo.addEventListener('click', addFunction);








