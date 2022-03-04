class FormManager {
    constructor () {
        
    }

    getValue(event) {
        event.preventDefault()
        const input = event.target.querySelector('input')
        const value = input.value
        input.value = ''
        return value
    }
}