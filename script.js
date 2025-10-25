const countInput = document.getElementById('input')
const increaseBtn = document.getElementById('increase-btn')
const reduceBtn = document.getElementById('reduce-btn')

let currentValue = Number(countInput.value)

//functions
let increaseByOne = () => {
    currentValue++
}

let reduceByOne = () => {
    if (currentValue > 0) {
        currentValue--
    }
}

let renderValue = () => {
    countInput.value = currentValue
}

//listeners
increaseBtn.addEventListener('click', () => {
    increaseByOne()
    renderValue()
})

reduceBtn.addEventListener('click', () => {
    reduceByOne()
    renderValue()
})
