document.addEventListener('DOMContentLoaded', function () {
    // Dodajte animacijsku klasu kada se stranica učita
    var firstImageContainer = document.getElementById('first-image-container');
    var imageText = document.querySelector('.image-text');

    // Dodajte klasu za fade-in teksta kada se stranica učita
    imageText.classList.add('text-fade-in');

    // Uklonite klasu za fade-in kada animacija završi
    imageText.addEventListener('transitionend', function () {
        imageText.classList.remove('text-fade-in');
        firstImageContainer.classList.add('is-visible');
    });
});
