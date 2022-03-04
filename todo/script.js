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
const Task = new TaskManager('.todo_list')
const Storage = new StorageManager('todo_list')

for(let task of Storage.data) {
    Task.addItem(task)
}

document.getElementById('todo_form').onsubmit = function (event) {
    const value = Form.getValue(event)
    Task.addItem(value)
    Storage.addItem(value)
}


//Form.submitHook
