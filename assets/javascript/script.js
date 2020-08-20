const container = document.querySelector("#container");
const gridSize = 600;
console.log(container);
createGrid();

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
            box.addEventListener("click", fillbox);
            rowDiv.appendChild(box);
        }
        container.appendChild(rowDiv);
    }
}

function clearGrid() {

    while (container.firstElementChild) { 
        container.removeChild(container.firstElementChild); 
    }
    
    // const filledBoxes = document.querySelectorAll(".filledBox");
    // filledBoxes.forEach(box => box.classList.remove("filledBox"));
    const a = prompt("Size of new grid?");
    createGrid(a);
}

function fillbox(e) {
    if (!e.target.classList.contains("filledBox")) {
        e.target.classList.add("filledBox");
    }
}