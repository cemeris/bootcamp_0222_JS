const square = document.querySelector('.square')

console.log(square)

square.onmouseover = function (event) {
    this.style.background = "gold"
}

square.onmouseleave = function (event) {
    this.style.background = "red"
}

document.querySelector('.color_value').oninput = function (event) {
    square.style.background = this.value
}

window.onkeyup = function (event) {
    console.log(event.key)
    document.querySelector('#output').value += event.key
}
/*
1. Saprast uzdevumu. (Saprast kāds būs rezultāts no lietojamības puses)
2. Jautājumi un idejas. Kur? Kas?
    Q: Kā pievienot jaunu DIV izmantojot JS ?


3. Sadalīt apakšuzdevumos.
    * ✅ Pārtvērt klikšķa notikumu uz pogu un izvadīt console.log('test')
    * Pievienot DIV elementu
        I: ✅ Sākumā nodefinēt DIV elementu.
        I: ✅ Nodublētu elementu
        I: Ievietotu nodublēto
*/

const template = document.querySelector('.template')
const basket = document.querySelector('.basket')

document.querySelector('.add_element').onclick = function(event) {
    let copy = template.cloneNode()
    copy.classList.remove('template')
    basket.append(copy)
}





