import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryConteiner = document.querySelector(`.gallery`);
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML(`beforeend`, cardsMarkup);

galleryConteiner.addEventListener("click", onGalleryConteinerClick);

function createGalleryCardsMarkup(alleryItems) {
  return galleryItems
    .map(({ preview, original, description } = {}) => {
      return `
        <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}

function onGalleryConteinerClick(evt) {
  evt.preventDefault();

  const isGalleryEl = evt.target.classList.contains("gallery__image");

  if (!isGalleryEl) {
    return;
  }
  const original = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
`);

  instance.show();
}
