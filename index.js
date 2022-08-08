
const grid = document.querySelector('#grid')

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    grid.appendChild(square);

    square.addEventListener('mouseenter', () => {
        square.setAttribute('style', 'background-color: black;')
    })
}

const sizeBtn = document.querySelector('#sizing')

sizeBtn.addEventListener('click', () => {
    size = prompt('Enter a number for the rows and columns of your grid (max: 100)')
    if (size > 100) {
        alert('Size too large. Please enter a value less than or equal to 100.')
        return null;
    }
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, ${320 / size}px)`)

    for (let i = 0; i < Math.pow(size, 2); i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        grid.appendChild(square);
    
        square.addEventListener('mouseenter', () => {
            square.setAttribute('style', 'background-color: black;')
        })
    }
})