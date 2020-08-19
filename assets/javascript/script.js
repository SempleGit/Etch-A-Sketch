const container = document.querySelector("#container");
const gridSize = 600;
const a = prompt("Size of grid?")
console.log(container);
createGrid(a);

function createGrid(a = 16) {
    const mainGrid = document.createElement("div");
    for (let row = 0; row < a; row++) {
        const rowDiv = document.createElement("div");
        for (let col = 0; col < a; col++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = gridSize / a + 'px';
            box.style.height = gridSize / a + 'px';
            box.addEventListener("mouseover", fillbox);
            rowDiv.appendChild(box);
        }
        container.appendChild(rowDiv);
    }
}

function fillbox(e) {
    if (!e.target.classList.contains("filledBox")) {
        e.target.classList.add("filledBox");
    }
}