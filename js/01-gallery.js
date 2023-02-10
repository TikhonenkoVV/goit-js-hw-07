import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryItems.reduce(
    (html, el) =>
        html +
        `<div class="gallery__item">
        <a class="gallery__link" href="${el.original}">
            <img
            class="gallery__image"
            src="${el.preview}"
            data-source="${el.original}"
            alt="Image description"
            />
        </a>
        </div>`,
    ''
);

const onImageClick = e => {
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    e.preventDefault();

    const onEscape = e => {
        const keyCode = 'Escape';
        // console.log(e.code);
        if (e.code === keyCode) {
            instance.close();
        }
    };

    const instance = basicLightbox.create(
        `<img class="gallery__image"
            src="${e.target.dataset.source}"
            alt="Image description"
            />`,
        {
            onShow: () => window.addEventListener('keydown', onEscape),
            onClose: () => window.removeEventListener('keydown', onEscape)
        }
    );
    instance.show();
};

galleryContainer.addEventListener('click', onImageClick);
