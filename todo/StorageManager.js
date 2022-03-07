class StorageManager {
    // storage_name = 'todo_list'
    constructor (storage_name) {
        this.name = storage_name
        const data_string = localStorage.getItem(this.name)

        if (data_string != null) {
            this.data = JSON.parse(data_string)
        }
        else {
            this.data = {
                next_id: 1,
                items: {}
            }
        }
    }

    getItems() {
        return this.data.items
    }

    addItem(text) {
        const id = this.data.next_id
        this.data.items[this.data.next_id++] = text
        localStorage.setItem(this.name, JSON.stringify(this.data))

        return id
    }

    removeItem(id) {
        delete this.data.items[id]
        localStorage.setItem(this.name, JSON.stringify(this.data))
    }
}

/**
 - LocalStorage pēc lapas pārlādēšanas
    pieveino tikai pēdējo vērtību

    localStorage.getItem(this.name)
    JSON.parse()
 */