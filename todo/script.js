/*
1. Uzdevuma formulējums. Kam jābūt rezultātā?

2. Idejas un jautājumi. Kas jāraksta? Kur jāraksta? ...

3. Sadalīt uzdevumu apakšuzdevumos
 - pogu uzspiežot pieveinos jaunais uzdevums
    - jānolasa input lauka vērtība
    - Ievadīt lauka vērtību uzdevumā sarakstā <div class="todo_list"
 - Edit pogas funkcionalitāte
 - Elementa izdzēšana pie "remove" pogas uzpiešanas
 - Ierakstīšanu lokālajā atmiņā
*/

const Form = new FormManager()
const Storage = new StorageManager('todo_list')
const Task = new TaskManager('.todo_list', function (id) {
    Storage.removeItem(id)
})

const items = Storage.getItems()
for (let id in items) {
    Task.addItem(id, items[id])
}

document.getElementById('todo_form').onsubmit = function (event) {
    const value = Form.getValue(event)
    const id = Storage.addItem(value)
    Task.addItem(id, value)
}


/*
  Uzlikšķinot uz edit pogu. +
  1. edit tekstam ir jāsaimainās uz save
  2. un teksta elementam ".todo_list__text" ir jāpieliek atribūts "contenteditable"
  3. elementam ".todo_list__edit_btn" ir jāpieliek klase save



  setAttribute('contenteditable', true)
*/