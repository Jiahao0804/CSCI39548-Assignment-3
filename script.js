// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // table
    let grid = document.getElementById("grid");

    let rows = document.getElementsByTagName("tr");


    
}

// Add a column
function addC() {
    
}

// Remove a row
function removeR() {

}

// Remove a column
function removeC() {
    
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++)
    {
        if (cells.style.backgroundColor == "")
        {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++)
    {
        cells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){

    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++)
    {
        cells[i].style.backgroundColor = "";
    }
}