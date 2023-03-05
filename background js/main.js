const button = document.getElementById('btn')
const color = document.querySelector('span')

const mix = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'F',
    'J',
    
]
button.addEventListener('click', () => {
    let mixColor = generateMix()
    document.body.style.backgroundColor = mixColor
    color.textContent = mixColor

})

function generateMix() {
    let mixColor = '#'
    for (let i = 0; i < 6; i++) {
        mixColor += mix [getRandomNumber()]
    }
    
    return mixColor
}

function getRandomNumber() {
    return Math.floor(Math.random() * mix.length)
}