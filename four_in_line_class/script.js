const four_in_line = document.querySelector('.four_in_line')
const template = document.createElement('a')
const message_header = document.querySelector('.message')
template.setAttribute('href', '#')
let move_count = 0

const fourInLineStorage = new StorageManeger('for_in_line_storage')

for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
        const cell = template.cloneNode()
        if (fourInLineStorage.entryExists(r, c)) {
            cell.textContent = fourInLineStorage.getEntry(r, c)
            move_count++;
        }

        four_in_line.append(cell)

        cell.onclick = function (event) {
            if (this.textContent !== '') {
                return
            }
            if (
                r == 9 || fourInLineStorage.entryExists(r+1, c)
            ) {
                let symbol = (move_count % 2 === 1) ? 'o' : 'x'
                this.textContent = symbol
                fourInLineStorage.saveMove(r,c, symbol)

                if (checkWinner(r, c, symbol)) {
                    message_header.textContent = symbol + " has won the game!"
                }
                move_count++
            }
        }
    }
}

document.querySelector('.reset').onclick = function(event) {
    const cells = four_in_line.children
    for(let r in fourInLineStorage.data) {
        let row = fourInLineStorage.data[r]
        for (let c in row) {
            cells[10*r + Number(c)].textContent = ''
        }
    }
    move_count = 0
    message_header.textContent = ""
    fourInLineStorage.resetData()
}

function checkWinner(r, c, symbol) {
    let counter
    const left = -1,
          right = 1,
          up = -1,
          down = 1

    const lines = [
        // horizontal
        [[0, left], [0, right]],
        // vertical
        [[down, 0]],
        // diogonal (up right)
        [[down, left],[up, right]],
        // diogonal (down right)
        [[up, left],[down, right]]
    ]

    for (let line of lines) {
        counter = 0
        for (let direction of line) {
            counter += countInDirection(r, c, symbol, direction)
        }
        if (counter >= 3) {
            return true
        }
    }

    return false
}

/**
 * Counts matches in single direction
 * 
 * @param int r
 * @param int c 
 * @param string symbol 
 * @param array direction - [diff_r, diff_c]
 * @returns 
 */
function countInDirection(r, c, symbol, direction) {
    let counter = 0
    for (let i = 0; i <= 2; i++) {
        r = r + direction[0]
        c = c + direction[1]
        if (
            fourInLineStorage.entryExists(r,c) &&
            fourInLineStorage.getEntry(r,c) === symbol
        ) {
            counter++
        }
        else {
            break
        }
    }

    return counter
}
