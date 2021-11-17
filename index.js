const outputField = document.getElementById("output-field")
let counter = 0

const runCode = () => {
    outputField.innerHTML = ''
    let input = document.getElementById("code-box").value
    doWork(checkForNum, input)
}

const checkForNum = (input) => {
    try {
        if (isNaN(input)) {
            outputField.innerHTML = "לא מספר!"
        } else {
            outputField.innerHTML = input
        }
    } catch (e) {
    }

}

const doWork = (callBack, input) => {
    callBack(input)
}