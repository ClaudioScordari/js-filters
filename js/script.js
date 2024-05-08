// BACKTICK - `

// Selezionare il bottone
let myButton = document.querySelector('.my-space');

// Seleziono il box principale
let myBox = document.querySelector('.my-box');

// Click del pulsante
myButton.addEventListener('click', function(){

    // Faccio scomparire il bottone
    this.classList.add('d-none');  
    
    // E aggiungo l'immagine
    myBox.innerHTML += `
        <img src="https://picsum.photos/600/350" class="my-space" alt="foto">
    `;
});