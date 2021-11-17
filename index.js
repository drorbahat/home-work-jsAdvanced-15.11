const outputField = document.getElementById("output-field")

const runCode = () => {
    setInterval(randomBackgroundColor, 1000)
}

const randomBackgroundColor = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor
}