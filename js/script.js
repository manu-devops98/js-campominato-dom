/* CONSEGNA:
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b. */

// Prendo container in html 
const container = document.querySelector('.container');
const button = document.getElementById('play-button');
// console.log(button);
const select = document.getElementById('difficulty');
// console.log(select);

let row = 0;
let col = 0;

button.addEventListener('click',
function () {

    container.innerHTML = '';
    if (select.value == 'easy') {
        row = 10;
        col = 10;
    } else if (select.value == 'hard') {
        row = 9;
        col = 9;
    } else if (select.value == 'crazy') {
        row = 7;
        col = 7;
    }
    
    const numberBox = row * col;
    let bomb = [];

    while (bomb.length < 16) {
        let numberRand = getRndInteger(1,numberBox);
        while (!(bomb.includes(numberRand))) {
            bomb.push(numberRand);
        }
    }
    console.log(bomb);

    for (let i = 0; i < numberBox; i++) {
        const square = document.createElement('div');
        square.classList.add('box');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(i + 1);
        container.append(square); 
        
        square.addEventListener('click', function () {
            if (bomb.includes(i + 1)) {
                for (let x = 0; x < numberBox; x++) { 
                    if (bomb.includes(x + 1)) {    
                        square.classList.add('box-red');
                    }   
                }
            } else {
                square.classList.add('clicked');
            }
        });
    }
});


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}