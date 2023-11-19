let inputText = document.getElementById("inputText")
let addToDo = document.getElementById("addToDo")
let clearToDo = document.getElementById("clearToDo")
let todoContainer = document.getElementById("todoContainer")

addToDo.addEventListener("click",function(){
    let paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-styling")
    todoContainer.appendChild(paragraph)
    paragraph.innerHTML = inputText.value
    inputText.value = ""
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener("dblclick",function (){
        todoContainer.removeChild(paragraph)
    })
    clearToDo.addEventListener("click", function (){
        paragraph.remove()
    })
})