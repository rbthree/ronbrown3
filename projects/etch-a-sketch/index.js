const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

function createGrid(rows, cols) {
    for (i = 0; i < rows * cols; i++) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        const div = document.createElement('div');
        div.addEventListener('pointerenter', () => div.classList.add('hover'));
        container.appendChild(div).className = 'grid-item';
    }
}

createGrid(16, 16);

btn.addEventListener('click', () => {
    const input = prompt('Enter the new number of boxes per side');

    if (input > 100) {
        alert('Number may not be over 100');
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    input === null ? createGrid(16, 16) : createGrid(input, input);
});
