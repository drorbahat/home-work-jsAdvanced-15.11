const outputField = document.getElementById("output-field")

const runCode = () => {
    outputField.innerHTML = ''
    doWork(showName)
}

const showName = () => {
    outputField.innerHTML = "Dror Bahat"
}

const doWork = (callBack) => {
    callBack()
}