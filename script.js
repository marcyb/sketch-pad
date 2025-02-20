function drawGrid(size = 16) {
  if (size > 100) {
    size = 100;
  }

  const container = document.getElementById('container');
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.style.width = `${100 / size}%`;
  pixel.style.height = `${100 / size}%`;
  for (let i = 0; i < size * size; i++) {
    const newPixel = pixel.cloneNode();
    newPixel.addEventListener('mouseover', () => {
      newPixel.style.backgroundColor = 'black';
    });
    container.appendChild(newPixel);
  }
}

onload = () => {
  drawGrid();
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  const container = document.getElementById('container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  drawGrid(prompt('Enter the size of the grid (max 100):'));
});