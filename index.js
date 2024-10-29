const container = document.querySelector("#general-container");
function generateGrid(number) {
    container.innerText = "";
    for (let i = 1; i <= number; i++) {
        const specificContainer = document.createElement("div");
        container.appendChild(specificContainer);
        specificContainer.classList.add("specific-container")
        for (let j = 1; j <= number; j++) {
            const square = document.createElement("div");
            specificContainer.appendChild(square);
            square.classList.add("div-square");
            square.addEventListener("mouseenter", () => { square.style.backgroundColor = "orange"; })
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
        alert("Max number 100, generating with 100 as the number")
    }
    generateGrid(number);
}

btn.addEventListener("click", updateGrid);