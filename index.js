const outputField = document.getElementById("output-field")

const runCode = () => {
    cool(paintDom)
}

const paintDom = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + x + "," + y + "," + z + ")";
    outputField.style.background = randomColor;
}

function cool(paintCallback) {
    paintCallback();
}