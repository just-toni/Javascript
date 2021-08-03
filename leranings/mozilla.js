/*
change the name by clicking a button

ask user for name using the prompt
take the name and update it 

*/

let button = document.querySelector(".button")
let oldName = document.querySelector(".name")

button.addEventListener('click', function(){
    button.style.color = "blue"
    let newName = prompt("Hello, please input your name, Thank you!")
    oldName.textContent = newName
})

// let body = document.querySelector(".body")
// body.style.background = "blue"

// let main = document.querySelector(".second_div")
// main.style.background = "orange"