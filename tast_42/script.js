/*
const button = document.querySelector('.template')
button.cloneNode()
button.classList.remove('template')
*/

const container = document.querySelector('.container')
let last_number = 42
for (let i = 1; i <= last_number; i++) {
    addButton(i)
}

document.querySelector('.plus').onclick = function (event) {
    addButton(++last_number)
}

document.querySelector('.minus').onclick = function (event) {
    if (last_number >= 1) {
        container.children[--last_number].remove()    
    }
}

function addButton (number) {
    const button = document.createElement('button')
    button.textContent = number

    if (number % 2 === 0) {
        button.style.background = 'yellow'
    }
    if (number % 3 === 0) {
        button.onclick = function (event) {
            button.textContent = ++number
        }
    }
    if (number % 3 === 1) {
        button.onclick = function (event) {
            button.textContent = --number
        }
    }

    container.append(button)
}

/*
    ✅ Katra poga kas nākošā aiz pogas kas dalās ar 3
    uz tās uzklikšķinot
    lai tas skaitlis samazinās par 1

    0 -> 1
    1 -> 4
    2 -> 7

*/

/*
let buvnieks = {
    plans: [],
    veiktPlanosanu: function () {
        plans.push('300x400')
        //.....
    },
    uzbuvetEku: function (budzetu, stavuSkaitu) {
        plans
        //.....
    },
    uzbuvetMaju: function (budzetu, stavuSkaitu) {
        plans
        //.....
    }
}


let musu_alga = 1000
let musu_budzets = musu_alga*12 + uzkrajums

buvnieks.veiktPlanosanu()
buvnieks.uzbuvetEku(musu_budzets, 12)
buvnieks.uzbuvetEku(50000, 2)
*/
