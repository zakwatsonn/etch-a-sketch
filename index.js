const container = document.querySelector('.container')


function createGrid(sizeOfGrid) {
   for (let i = 0; i < sizeOfGrid*sizeOfGrid; i++) {
    let gridBoxes = document.createElement('div');
    gridBoxes.classList.add('gridBoxes')
    container.append(gridBoxes)
} 
}

