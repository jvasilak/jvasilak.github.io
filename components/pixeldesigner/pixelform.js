let xCoord = 0;
let yCoord = 0;
let xMax = 200;
let yMax = 200;
let gridPresent = false;
var grid = document.createElement("div");
let selectedColor = "rgb(0, 0, 0)";
let isMouseDown = false;

generateInstructions();
generateForm();
generateColorSelector();

document.addEventListener('mousedown', (event) => {
      isMouseDown = true;
});
  
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

function generateInstructions() {
    var instructionsDiv = document.createElement("div");
    instructionsDiv.className = "instructions";
    instructionsDiv.textContent = "This is tool I created to easily make pixel art for myself without having to use third party software. Please select a length/width/starting color to begin. Once a grid is generated, feel free to change the selected color and "
    + "and click on individual tiles to change them to the newly selected color. If you wish to change the length or width, just change the values in the form and resubmit it."
    + " You can also reset the grid's color by selecting the default color again and submitting the form. Currently length and width values are limited to 200 by 200."
    + " This page is still very much a work in progress, and I am planning to expand this to be more useful to me in the future.";
    document.body.appendChild(instructionsDiv);
}

function generateForm() {
    var formDiv = document.getElementById("formScript");
    formDiv.className = "pixelForm";
    var form = document.createElement("form");

    var lineBreak1 = document.createElement("br");
    var lineBreak2 = document.createElement("br");
    var lineBreak3 = document.createElement("br");
    var lineBreak4 = document.createElement("br");

    var xLabel = document.createElement("label");
    xLabel.textContent = "X value:";

    var xEntry = document.createElement("input");
    xEntry.type = 'text';
    xEntry.name = 'xCoord';

    var yLabel = document.createElement("label");
    yLabel.textContent = "Y value:";

    var yEntry = document.createElement("input");
    yEntry.type = 'text';
    yEntry.name = 'yCoord';

    var submitButton = document.createElement("input");
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    
    form.appendChild(xLabel);
    form.appendChild(lineBreak1);
    form.appendChild(xEntry);
    form.appendChild(lineBreak2);
    form.appendChild(yLabel);
    form.appendChild(lineBreak3);
    form.appendChild(yEntry);
    form.appendChild(lineBreak4);
    form.appendChild(submitButton);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        coordinates = readInput(xEntry.value, yEntry.value);
        generateGrid(coordinates[0], coordinates[1]);
    });

    formDiv.appendChild(form);
}

function readInput(x, y) {
    xInt = parseInt(x);
    yInt = parseInt(y);
    if(xInt > xMax) {
        xInt = xMax;
    }
    if(yInt > yMax) {
        yInt = yMax;
    }
    return [xInt, yInt];
}

function generateGrid(x, y) {
    if(gridPresent) {
        document.body.removeChild(grid);
        gridPresent = false;
    }

    grid = document.createElement("div");
    grid.className = "grid";
    document.documentElement.style.setProperty('--columns', x);
    for(let i = 0; i < (x * y); i++) {
        const square = document.createElement('div');
        square.className = "square";
        square.style.backgroundColor = selectedColor;
        square.addEventListener('mousemove', () => {
            if (isMouseDown) {
                square.style.backgroundColor = selectedColor;
            }
        });
        grid.appendChild(square);
    }

    if(!gridPresent) {
        document.body.appendChild(grid);
        gridPresent = true;
    }
}

function generateColorSelector() {
    var formDiv = document.getElementById("formScript");
    var colorForm = document.createElement("form");
    var label = document.createElement("label");
    label.textContent = "Select color:";
    var lineBreak = document.createElement("br");
    var input = document.createElement("input");
    input.type = "color";
    colorForm.appendChild(label);
    colorForm.appendChild(lineBreak);
    colorForm.appendChild(input);
    colorForm.addEventListener("change", function(event) {
        event.preventDefault();
        selectedColor = input.value;
      });
    formDiv.appendChild(colorForm);
}