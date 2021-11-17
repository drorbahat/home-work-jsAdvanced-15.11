const outputField = document.getElementById("output-field")

const runCode = () => {
    cool(randomNum)
}

const randomNum = () => {
    num = Math.floor((Math.random() * 100) + 1)
    outputField.innerHTML = num
}

function cool(callback) {
    callback()
}