// BACKTICK - `

// SELEZIONI

// Selezionare il bottone
let myButton = document.querySelector('.my-space');

// Seleziono il box principale
let myBox = document.querySelector('.my-box');

// Selezione della sezione dei filtri
let sectionFilters = document.querySelector('.section-filters');

// Tutti gli input-slider
let grayscale = document.getElementById('grayscale');
let saturate = document.getElementById('saturate');
let sepia = document.getElementById('sepia');
let invert = document.getElementById('invert');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let Blur = document.getElementById('blur');
let hue_rotate = document.getElementById('hue_rotate');

/* -------------------------------------------------------------------------------------------- */

// Fare apparire la sezione dei filtri
myButton.addEventListener('click', function () {

    // Faccio comparire la sezione dei filtri
    sectionFilters.classList.remove('d-none');

    // Si aggiunge anche l'immagine di lorem picsum:
    // dentro il box si fa apparire l'img con la classe my-space
    myBox.innerHTML = `
        <img class="my-space" src="https://picsum.photos/600/350" alt="foto">
    `;

    // Seleziono l'img
    let img = document.querySelector('img');

    // Tutti gli oninput
    grayscale.oninput = function () {
        img.style.filter = "grayscale(" + this.value + "%)";
    }
    saturate.oninput = function () {
        img.style.filter = "saturate(" + this.value + "%)";
    }
    sepia.oninput = function () {
        img.style.filter = "sepia(" + this.value + "%)";
    }
    invert.oninput = function () {
        img.style.filter = "invert(" + this.value + "%)";
    }
    contrast.oninput = function () {
        img.style.filter = "contrast(" + this.value + "%)";
    }
    brightness.oninput = function () {
        img.style.filter = "brightness(" + this.value + "%)";
    }
    Blur.oninput = function () {
        img.style.filter = "blur(" + this.value + "px)";
    }
    hue_rotate.oninput = function () {
        img.style.filter = "hue-rotate(" + this.value + "deg)";
    }
});