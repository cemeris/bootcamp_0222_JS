const four_in_line = document.querySelector('.four_in_line')
const template = document.createElement('a')
template.setAttribute('href', '#')
let move_count = 0
let data = {}

for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
        const cell = template.cloneNode()
        four_in_line.append(cell)

        cell.onclick = function (event) {
            if (this.textContent !== '') {
                return
            }
            if (
                r == 9 ||
                (data.hasOwnProperty(r+1) && data[r+1].hasOwnProperty(c))
            ) {
                let symbol = (move_count % 2 === 1) ? 'o' : 'x'
                this.textContent = symbol
                if (!data.hasOwnProperty(r)) {
                    data[r] = {}
                }
                data[r][c] = symbol

                if (checkWinner(r, c, symbol)) {
                    document.querySelector('.message').textContent = "We have a winner!"
                }

                move_count++
            }
        }
    }
}


function checkWinner(r, c, symbol) {
    let counter = 0
    for (let i = 0; i <= 2; i++) {
        if (data[r][--c] === symbol) {
            counter++
        }
    }

    if (counter == 3) {
        return true
    }
    return false
}