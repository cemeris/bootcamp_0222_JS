class StorageManeger {
    constructor (storage_name) {
        this.storage_name = storage_name
        const item_string = localStorage.getItem(storage_name)

        if (item_string == null) {
            this.data = {}
        }
        else {
            this.data = JSON.parse(item_string)
        }
    }
    saveMove(r, c, symbol) {
        if (!this.data.hasOwnProperty(r)) {
            this.data[r] = {}
        }
        this.data[r][c] = symbol
        localStorage.setItem(this.storage_name, JSON.stringify(this.data))
    }

    resetData() {
        this.data = {}
        localStorage.removeItem(this.storage_name)
    }

    entryExists (r, c) {
        return (this.data.hasOwnProperty(r) && this.data[r].hasOwnProperty(c))
    }

    getEntry(r, c) {
        return this.data[r][c]
    }
}