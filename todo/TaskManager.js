class TaskManager {
    constructor (selector, callback = function () {}) {
        this.selector = selector
        this.task_list = document.querySelector(selector)
        this.template = this.task_list.querySelector('.template')
        this.callback = callback
    }
    addItem(id, text) {
        const task_item = this.template.cloneNode(true)
        task_item.classList.remove('template')
        task_item.setAttribute('data-id', id)
        task_item.querySelector(this.selector +'__text').textContent = text
        task_item.querySelector(this.selector + '__remove_btn').onclick = this.removeItem.bind(this)
        task_item.querySelector(this.selector + '__edit_btn').onclick = function (event) {
            
        }
        this.task_list.append(task_item)
    }

    removeItem (event) {
        event.preventDefault()
        const task_item = event.target.parentNode
        const current_id = task_item.getAttribute('data-id')
        task_item.remove()
        this.callback(current_id)
    }
}