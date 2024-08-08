const container = document.querySelector('.container')

function createGrid(sizeOfGrid) {
    if (sizeOfGrid > 100) {
        error('Please choose a maximum of 100 pixels for the width of the grid')
    } 

   for (let i = 0; i < sizeOfGrid; i++) {
     let rowBoxes = document.createElement('div')
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

//adding event listeners for the hover effect
const listenerNodes = document.querySelectorAll('.colBoxes')
listenerNodes.forEach((currentNode) => {
    currentNode.addEventListener('mouseenter', () => {
        currentNode.style.backgroundColor = 'lightblue'
    })
})

//adding functionality for the reset button
const resetButton = document.querySelector('#resetButton')
resetButton.addEventListener('click', () => {
    listenerNodes.forEach((currentNode) => {
        currentNode.style.backgroundColor = 'grey'
    })
})


