let galleryImages = [];
let galleryIndex = 0;

function openGallery(images) {
    galleryImages = images;
    galleryIndex = 0;
    renderGalleryImage();
    document.getElementById('gallery-modal').style.display = 'flex';
}

function renderGalleryImage() {
    const container = document.getElementById('gallery-images');
    container.innerHTML = `<img src="${galleryImages[galleryIndex]}" alt="Project screenshot">`;
    document.getElementById('gallery-counter').textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
}

function nextImage() {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    renderGalleryImage();
}

function prevImage() {
    galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
    renderGalleryImage();
}

function closeGallery() {
    document.getElementById('gallery-modal').style.display = 'none';
}