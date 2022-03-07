// sakums || galerija || kontakti

let menu_items = document.querySelectorAll('.menu_item')

for (let item of menu_items) {
    item.onclick = function (event) {
        //....
    }
}

//*** */

let element = document.querySelector('body')

element.onclick = function (event) {
    if (event.target.classList.contains('todo_list__text')) {
        console.log('clicked on the text', event.target)
    }
    else {
        console.log('clicked elsewhere')
    }
}