const buttonContainer = document.querySelector("#buttonContainer");
const container = document.querySelector("#container");
const gridSize = 600;
let enableColor = false;
addButtons();
createGrid();

function addButtons() {
    const resetButton = document.createElement('button');
    const enableColors = document.createElement('button');

    enableColors.addEventListener('click', () => {
        enableColor = !enableColor
        alert(`Color changing: ${enableColor}`)});
        
    resetButton.addEventListener('click', clearGrid);

    enableColors.textContent = 'Enable Color Change';
    resetButton.textContent = 'Clear Grid';

    buttonContainer.appendChild(resetButton);
    buttonContainer.appendChild(enableColors);

}

function createGrid(a = 16) {
    const mainGrid = document.createElement("div");
    for (let row = 0; row < a; row++) {
        const rowDiv = document.createElement("div");
        for (let col = 0; col < a; col++) {

            const box = document.createElement('div', {
                is: 'grid-box'
            });
            
            box.classList.add("box");
            box.style.width = gridSize / a + 'px';
            box.style.height = gridSize / a + 'px';
            box.addEventListener("mouseenter", fillbox);
            box.addEventListener("touchmove", fillbox);
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
    const input = prompt("Size of new grid?");
    a = input > 128 ? 128 : input;
    createGrid(a);
}

function fillbox(e) {
    this.count++;
    if (!e.target.classList.contains("filledBox")) {
        e.target.classList.add("filledBox");
    }
    if (enableColor && this.count >= 3) {
        e.target.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

class Box extends HTMLDivElement {   
    constructor() {
        super();
        this.count = 0;
    }
}

customElements.define('grid-box', Box, {
    extends: "div"
});