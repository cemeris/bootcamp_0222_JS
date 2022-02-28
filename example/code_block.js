output("Guess number X!")

const number_x = Math.round(Math.random() * 10)

function inputEvent() {
    let value = getInputValue()
    resetOutput()

    if (value == number_x) {
        output(value + " equals X")
        output("Congratulations, you guesed the number!")
    }
    else {
        if (value < number_x) {
            output(value + " is smaller than X")
        }
        else {
            output(value + " is larger than X")
        }
        output("Try again!")
    }
}


for (let i = 0; i < 10; i+=1) {
    console.log(i)
    console.log('--------------')
}


const words_block = document.querySelector('.words')
const word_list = ['hello', 'sveiki', 'привет'];

for (let word of word_list) {
    words_block.append(word + " --|-- ")
}


const fruit_list = {
    first: 'apple',
    second: 'banana',
    third: 'kivi'
}

fruit_list['second']

for (let fruit_key in fruit_list) {
    words_block.append(fruit_list[fruit_key] + " --|-- ")
}


