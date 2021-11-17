const outputField = document.getElementById("output-field")

const runCode = () => {
    nice(randomNum, 55)
}

const randomNum = (num) => {
    outputField.innerHTML = num
}

function nice(callback, num) {
    callback(num);
}