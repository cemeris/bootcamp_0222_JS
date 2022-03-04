class StorageManager {
    constructor (storage_name) {
        this.name = storage_name
        const data_string = localStorage.getItem(this.name)

        if (data_string != null) {
            this.data = JSON.parse(data_string)
        }
        else {
            this.data = []
        }
    }

    addItem(task) {
        this.data.push(task)
        localStorage.setItem(this.name, JSON.stringify(this.data))
    }
}

/**
 - LocalStorage pēc lapas pārlādēšanas
    pieveino tikai pēdējo vērtību

    localStorage.getItem(this.name)
    JSON.parse()
 */