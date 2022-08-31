const numberText = document.querySelector('#counts')
const previousEntry = document.querySelector('.data')


let counts = 0;

function update() {
    numberText.textContent = counts;
}

function clear() {
    counts = 0
    update()
}

function increment() {
    counts += 1
    update()
}

function Delete() {
    if (counts > 0) {
        counts -= 1
        update()
    }
}

function save() {
    let data =  numberText.textContent + ' - ';
    if(numberText.textContent > 0) {
        previousEntry.textContent +=  data;
    }
    clear()
}