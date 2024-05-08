// BACKTICK - `

// Selezionare il bottone
let myButton = document.querySelector('.my-space');

// Seleziono il box principale
let myBox = document.querySelector('.my-box');

// Seleziono lo slider
let slider = document.querySelector('.slider');

// Al click delle label devo vedere lo slider
let label = document.querySelector('label');
label.addEventListener('click', function () {
    slider.classList.toggle('d-none');
});

// Valore dell'output
let valueOutput = slider.value;

// Click del pulsante
myButton.addEventListener('click', function(){
    
    // Faccio scomparire il bottone
    this.classList.add('d-none');  
    
    // E aggiungo l'immagine
    myBox.innerHTML += `
        <img id="img" src="https://picsum.photos/600/350" class="my-space" alt="foto">
    `;
});

// Quando lo slider è on input, mi assegno il valore
slider.oninput = function() {
    valueOutput = this.value;

    // Seleziono l'img 
    let img = document.getElementById('img');

    // Aggiungo lo stile
    img.style.filter = "grayscale(" + valueOutput + "%)";
}