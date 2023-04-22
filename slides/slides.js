let images = [
  { id: "https://picsum.photos/2546/340?random=1", url: "https://picsum.photos/2546/1280?random=1" },
  { id: "https://picsum.photos/2546/340?random=2", url: "https://picsum.photos/2546/1280?random=2" },
  { id: "https://picsum.photos/2546/340?random=3", url: "https://picsum.photos/2546/1280?random=3" },
  { id: "https://picsum.photos/2546/340?random=4", url: "https://picsum.photos/2546/1280?random=4" },
  { id: "https://picsum.photos/2546/340?random=5", url: "https://picsum.photos/2546/1280?random=5" },
  { id: "https://picsum.photos/2546/340?random=6", url: "https://picsum.photos/2546/1280?random=6" },
  { id: "https://picsum.photos/2546/340?random=7", url: "https://picsum.photos/2546/1280?random=7" },
  { id: "https://picsum.photos/2546/340?random=8", url: "https://picsum.photos/2546/1280?random=8" },
  { id: "https://picsum.photos/2546/340?random=9", url: "https://picsum.photos/2546/1280?random=9" }
];

const galleryContainer = document.querySelector('.js-gallery');

const cardsMarkup = createImagesMarkup(images);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

console.log(createImagesMarkup(images));

function createImagesMarkup (images) {
  return images.map(({id, url}) => {
    return `
     <li class="gallery__item">
      <a class="gallery__link" 
        href="${url}">
        <img class="gallery__image" src="${url}" 
        data-source="${url}" alt="Tulips"/>
       </a>
      </li>
      `;
    })

  .join('');

  // console.log(markup[0]);
}

// const imagesModals = document.querySelectorAll('.gallery__image');

// images.forEach(image => {
//   image.addEventListener('click', () => {
//     event.preventDefault();
//     const source = image.dataset.source;
//     const overlay = document.createElement('div');
//     overlay.classList.add('overlay');

//     const img = document.createElement('img');
//     img.src = source;
//     img.classList.add('overlay__image');

//     overlay.appendChild(img);
//     document.body.appendChild(overlay);

//     overlay.addEventListener('click', () => {
//       overlay.remove();
//     });
//   });
// });

