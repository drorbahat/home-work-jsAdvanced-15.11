const outputField = document.getElementById("output-field")

const runCode = () => {
    amazing(randomColorBackround)
}

const randomColorBackround = (x, y, z) => {
    let colorList = [x, y, z]
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    outputField.style.background = randomColor
    return randomColor
}

function amazing(paintCallback) {
    const paintedColor = paintCallback("Red", "Green", "Blue");
    outputField.innerHTML = "Painted Color: " + paintedColor;
}