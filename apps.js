const input = document.getElementById("input")
const addButton = document.getElementById("addButton")
const deleteButton = document.getElementById("deleteButton")
const editButton = document.getElementById("editButton")
const lista = document.getElementById("lista")



function addItem(){
    let listItems = document.createElement("li")
    let delButton = document.createElement("button")
    let editButton = document.createElement("button")
    let buttonDiv = document.createElement("div")

    buttonDiv.appendChild(delButton)
    buttonDiv.appendChild(editButton)

    editButton.innerHTML = "Edit"
    delButton.innerHTML = "Delete"

    listItems.className = "itemWrapper"
    buttonDiv.className = "buttons"
    editButton.className = "editButton"
    delButton.className = "deleteButton"
    

    listItems.innerHTML = input.value
    listItems.appendChild(buttonDiv)
    lista.appendChild(listItems)



    delButton.addEventListener("click", function(){
        listItems.style.display = "none"
    })


   editButton.addEventListener("click", function(){
    buttonDiv.style.display = "none"


    let confirmButton = document.createElement("button")
    confirmButton.innerHTML = "Confirm"
    confirmButton.className = "confirmButton"

    let editInput = document.createElement("input")
    editInput.className = "editInput"

    listItems.appendChild(editInput)
    listItems.appendChild(confirmButton)

    
    confirmButton.addEventListener("click", function(){
       
        listItems.innerHTML = editInput.value
        buttonDiv.appendChild(delButton)
        buttonDiv.appendChild(editButton)
        buttonDiv.style.display = "flex"
        listItems.appendChild(buttonDiv)
    })
   })

}

addButton.addEventListener("click", function(){
    console.log(input.value)
    addItem()
    input.value = ""
   
})



