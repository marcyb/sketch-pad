function darkenPixel(pixel) {
  const color = pixel.style.backgroundColor;
  if (color === '') {
    pixel.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  }
  else if (color.startsWith('rgba')) {
    const alpha = parseFloat(color.slice(-4, -1));
    if (alpha < 1) {
      pixel.style.backgroundColor = `rgba(0, 0, 0, ${alpha + 0.1})`;
    }
  }
}

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
      darkenPixel(newPixel);
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