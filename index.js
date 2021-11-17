const outputField = document.getElementById("output-field")

const runCode = () => {
    amazing(randomNum)
}

function amazing(callback) {
    const num = callback(42, 128, 37, 81, 66);
    outputField.innerHTML = "Num: " + num
}

const randomNum = (x, y, z, t, r) => {
    let numlist = [x, y, z, t, r]
    let randomNum = numlist[Math.floor(Math.random() * numlist.length)];
    return randomNum
}