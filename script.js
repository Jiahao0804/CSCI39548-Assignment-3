// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // table reference
    let grid = document.getElementById("grid");
    
    // insert a row into grid
    let rows = grid.insertRow(numRows);

    // if the number of column is 0, set it to 1
    if (numCols == 0)
    {
        numCols++;
    }

    // insert cell to each column to make a row
    for (let i = 0; i < numCols; i++)
    {   
        cell = rows.insertCell(i);
        cell.onclick=function(){
            this.style.backgroundColor = colorSelected;
        };
    }

    // increment of numRows
    numRows++;
}

// Add a column
function addC() {
    // table reference
    let grid = document.getElementById("grid");

    // if the number of row is 0, call addR() function to increment numRows
    if (numRows == 0)
    {   
        addR();
    }

    else
    {   
        // insert cell to each row to make a column
        for (let i = 0; i < numRows; i++)
        {
            cell = grid.rows[i].insertCell(numCols);
            cell.onclick=function(){
                this.style.backgroundColor = colorSelected;
            };
        }

        // increment of numCols
        numCols++;

    }

}


// Remove a row
function removeR() {
    // table reference
    let grid = document.getElementById("grid");

    // if there is no row to remove
    if (numRows == 0)
    {
        alert("There is no row to remove");
    }

    else
    {   
        // if numRow > 0
        grid.deleteRow(numRows - 1);
        numRows--;

        // if the numRows become 0 after remove, clean numCols(reset it to 0) -> clean the table reference
        if (numRows == 0)
        {
            numCols = 0;
        } 
    }

    /* not work
    // table reference
    let grid = document.getElementsById("grid");
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0)
    {
        alert("There is no row to remove");
        return;
    }

    // remove the last cell for each row
    let last_row_cell = grid.lastElementChild;
    grid.removeChild(last_row_cell);
    */
}

// Remove a column
function removeC() {
    // table reference
    let grid = document.getElementById("grid");

    // if there is no column to remove
    if (numCols == 0)
    {
        alert("There is no column to remove");
    }

    else
    {   
        // remove the last cell of each row
        for (let i = 0; i < numRows; i++)
        {
            grid.rows[i].deleteCell(numCols - 1);
        }

        numCols--;

        // if the numCols become 0 after remove, clean numRows(reset it to 0) -> clean the table reference
        if (numCols == 0)
        {
            numRows = 0;
            grid.innerHTML = "";    // remove all rows from the grid table
        }
    }

    /* not work
    // table reference
    let grid = document.getElementsById("grid");
    let rows = document.getElementsByTagName("tr");

    // if there is no row, there is no column that need to remove
    if (rows.length === 0)
    {
        alert("There is nothing to remove");
        return;
    }

    // otherwise, remove the last cell from each row -> remove a column
    for (let i = 0; i < rows.length; i++)
    {
        let col = rows[i].lastElementChild;
        rows[i].removeChild(col);
    }
    */
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
// use a for loop to check out if the cells contain color
// if it does not contain color, fill color for the uncolored cell
// this function won't be file color after you adding new row or column since the cell itself with the white background color
function fillU(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++)
    {
        if (cells.style.backgroundColor === "")
        {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    let cells = document.getElementsByTagName("td");

    // use a for loop to fill the same color for all cells
    for (let i = 0; i < cells.length; i++)
    {
        cells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){

    let cells = document.getElementsByTagName("td");

    // use a for loop to clean the color for all cells
    for (let i = 0; i < cells.length; i++)
    {
        cells[i].style.backgroundColor = "";
    }
}