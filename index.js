const outputField = document.getElementById("output-field")

const runCode = () => {
    setInterval(randomArrayMaker, 1000)
}

const randomArrayMaker = () => {
    randomArray = []
    for (let i = 0; i < 100; i++){
        randomNum = Math.floor((Math.random() * 100) + 1);
        randomArray.push(randomNum)
    }
    outputField.innerHTML = randomArray
}