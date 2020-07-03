// Author: Eric J. Frank
// Assign color picker
var colorInput = document.getElementById("colorPicker");
// Assign canvas
var designCanvas = document.getElementById("pixelCanvas");
// Assign height input
var gridHeight = document.getElementById("inputHeight");
// Assign width input
var gridWidth = document.getElementById("inputWidth");
// Assign picker
var sizePicker = document.getElementById("sizePicker");

// Add a listener to color picker
colorInput.addEventListener("click", function(){});
// Color the box
function colorBox(event) {
    var color = colorInput.value;
    event.target.style.backgroundColor = color
};
// Build the grid
function makeGrid() {
    for (var i = 0; i < gridHeight.value; i++) {
        var row = designCanvas.insertRow(i);
        for (var j = 0; j < gridWidth.value; j++) {
            var cell = row.insertCell(j);
            cell.addEventListener("click", colorBox);
        };
    };
};
// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function(event){
    event.preventDefault();
    //Clear out beforehand
    designCanvas.innerHTML = "";
    makeGrid();
};
