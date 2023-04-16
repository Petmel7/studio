const images = document.querySelectorAll('.gallery__image');

images.forEach(image => {
  image.addEventListener('click', () => {
    event.preventDefault();
    const source = image.dataset.source;
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const img = document.createElement('img');
    img.src = source;
    img.classList.add('overlay__image');

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});

