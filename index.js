const outputField = document.getElementById("output-field")

const runCode = () => {
    nice(paintDom)
}

const paintDom = (colorInput) => {
    let Color = colorInput
    outputField.style.background = Color;
}

function amazing(paintCallback) {
    const paintedColor = paintCallback("Red", "Green", "Blue");
    document.write("Painted Color: " + paintedColor);
}