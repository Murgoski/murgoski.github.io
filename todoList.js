/*========== POPUP IMAGE SLIDER ==========*/

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

/*========== scroll reveal ==========*/

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.about-content h2, .about-img img, .heading2, .image-column img', { origin: 'left' });
ScrollReveal().reveal('.about-content, .gallery-description.active', { origin: 'right' });

/*========== GALLERY JS ==========*/

const images = [
    {
        src: 'images/asset1.jpg',
        descriptionId: 'description1'
    },
    {
        src:'images/asset2_blured.jpg',
        descriptionId: 'description2'
    },
    {
        src: 'images/asset4_blured.jpg',
        descriptionId: 'description3'
    },
    {
        src: 'images/asset3.jpg',
        descriptionId: 'description4'
    },
    {
        src: 'images/asset5.jpg',
        descriptionId: 'description5'
    }
];

let currentIndex = 0;

function updateGallery() {
    const imageElement = document.getElementById('gallery-image');
    const descriptions = document.querySelectorAll('.gallery-description');
    const currentIndexElement = document.getElementById('current-image');

    
    // Update the image source
    imageElement.src = images[currentIndex].src;
    
    // Update the active description
    descriptions.forEach(description => {
        description.classList.remove('active');
    });
    document.getElementById(images[currentIndex].descriptionId).classList.add('active');

    currentIndexElement.innerHTML = currentIndex + 1 + "/5";
}


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
}

window.onload = updateGallery;


