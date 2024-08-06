const container = document.querySelector('.container')

function createGrid(sizeOfGrid) {
   for (let i = 0; i < sizeOfGrid; i++) {
     let rowBoxes
     rowBoxes = document.createElement('div')
     rowBoxes.classList.add('rowBoxes')
     container.append(rowBoxes)
     for (let j = 0; j < sizeOfGrid; j++) {
        let colBoxes = document.createElement('div')
        colBoxes.classList.add('colBoxes')
        rowBoxes.append(colBoxes)
     }
    } 
}


//prompting to get the size of the grid
createGrid(prompt('Give the width of the grid in squares.'))


