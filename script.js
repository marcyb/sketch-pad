function drawGrid(size = 16) {
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