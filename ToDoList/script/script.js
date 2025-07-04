class ItemList {
    constructor(text, state) {
        this.text = text
        this.state = state
    }
}

var list = [
    {
        text: "Exemplo 1",
        state: "to-do"
    },
    {
        text: "Exemplo 2",
        state: "to-do"
    }
]


function addItem() {

    const newItem = new ItemList

    newItem.text = ""
    newItem.state = "to-do"

    list.push(newItem)

    createElement();
}

function deleteItem() {
    console.log(list)
}
    
function createElement() {
    var listRegion = document.getElementById('todo-list');

    let li = document.createElement('li')

    let checkbox = document.createElement('input')
    checkbox.classList.add('checkbox')
    checkbox.type = "checkbox"

    let textField = document.createElement('input')
    textField.classList.add('text')
    textField.type = "text"

    let trashIcon = document.createElement('i')
    trashIcon.classList.add('bi')
    trashIcon.classList.add('bi-trash-fill')
    trashIcon.setAttribute('onclick', 'deleteItem()')

    listRegion.appendChild(li)

    li.appendChild(checkbox)
    li.appendChild(textField)
    li.appendChild(trashIcon)
}