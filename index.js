const outputField = document.getElementById("output-field")

const runCode = () => {
    setInterval(randomNumber, 1000)
}

const randomNumber = () => {
    let randomNum = Math.floor(Math.random() * 100);
    outputField.innerHTML = randomNum
}