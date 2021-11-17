const outputField = document.getElementById("output-field")

const runCode = () => {
    nice(paintDom)
}

const paintDom = (colorInput) => {
    let Color = colorInput
    outputField.style.background = Color;
}

function nice(paintCallback) {
    paintCallback("red");
}