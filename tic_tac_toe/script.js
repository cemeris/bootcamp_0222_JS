const player1_sybmol = 'x'
const player2_sybmol = 'o'
const game_board = document.querySelector('.game_board')
const links = game_board.children
const message_element = document.querySelector('.message')

const game_template = {
    state: true,
    move_count: 0
}

let game = {}
Object.assign(game, game_template)

const win_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
]

game_board.onclick = function (event) {
    console.log(game)
    const cell = event.target
    let symbol = player1_sybmol
    if (cell.tagName == "A") {
        if (cell.textContent === '' && game.state === true) move: {
            determin_turn: {
                if (game.move_count % 2 == 1) {
                    symbol = player2_sybmol
                }
            }
            cell.textContent = symbol

            check_winner: {
                for (let combination of win_combinations) check_one_combination: {
                    let coord1 = combination[0]
                    let coord2 = combination[1]
                    let coord3 = combination[2]
                    if (
                        links[coord1].textContent === symbol &&
                        links[coord2].textContent === symbol &&
                        links[coord3].textContent === symbol
                    ) {
                        links[coord1].classList.add('win_move')
                        links[coord2].classList.add('win_move')
                        links[coord3].classList.add('win_move')
                        message_element.textContent = symbol + ' has won!'
                        game.state = false
                        break;
                    }
                }
            }
            game.move_count++;
        }
    }
}

document.querySelector('.reset').onclick = function(event) {
    message_element.textContent = ''
    for (const cell of links) {
        cell.textContent = ''
        cell.classList.remove('win_move')
    }
    Object.assign(game, game_template)
}



