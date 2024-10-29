function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector("#general-container");

function generateGrid(number) {
    container.innerText = "";
    for (let i = 1; i <= number; i++) {
        const specificContainer = document.createElement("div");
        container.appendChild(specificContainer);
        specificContainer.classList.add("specific-container");

        for (let j = 1; j <= number; j++) {
            const square = document.createElement("div");
            specificContainer.appendChild(square);
            square.classList.add("div-square");

            const innerSquare = document.createElement("div");
            innerSquare.classList.add("inner-square");
            square.appendChild(innerSquare);

            innerSquare.style.opacity = "0";

            function updateSquare() {
                innerSquare.style.backgroundColor = getRandomColor();
                const currentOpacity = parseFloat(window.getComputedStyle(innerSquare).opacity);
                const newOpacity = Math.min(currentOpacity + 0.1, 1);
                innerSquare.style.opacity = newOpacity.toString();
            }

            innerSquare.addEventListener("mouseenter", updateSquare);

            square.style.width = `calc(min(100vw, 100vh) / ${number})`;
            square.style.height = `calc(min(100vw, 100vh) / ${number})`;
        }
    }
}

generateGrid(16);

const btn = document.querySelector("button");
const inputObject = document.querySelector("input");

function updateGrid() {
    let number = inputObject.value;
    if (number > 100) {
        number = 100;
        alert("Max number 100, generating with 100 as the number");
    }
    generateGrid(number);
}

btn.addEventListener("click", updateGrid);
