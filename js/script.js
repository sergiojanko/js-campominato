/* 
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
*/

//  * Functions declaration

function getRandomNumber(min, max, isMaxIncluded){
    if (isMaxIncluded) {
    max++;
    }
    return Math.floor(Math.random() * (max - min) + min);
}

// Genero un array di 16 numeri da 1 a 100 tutti diversi tra loro

function bombGenerator(numBomb) {
    let listBomb = [];
    for (let i = 0; i < numBomb; i++) {
        do {
            var num = getRandomNumber(1, 100, true);
        } while (listBomb.includes(num));
        listBomb.push(num);
        
    }
    return listBomb;
}

function checkNumber() {
    do {
        num = parseInt(prompt("Inserisci un numero da 1 a 100"));
    } while (!num || num < 1 || num > 100 || alreadyUsed.includes(num));
}

//  * Variables declaration
const numBomb = 16;
const bombList = bombGenerator(numBomb);
let alreadyUsed = [];
let num;
let lost = false;

console.table(bombList);

// Finchè non vengono indovinati tutti i numeri buoni o finchè non trovo una bomba

while ((alreadyUsed.length < 100 - numBomb) && (!lost)) {
    do {
        num = parseInt(prompt("Inserisci un numero da 1 a 100"));
    } while (!num || num < 1 || num > 100 || alreadyUsed.includes(num));
    if (!bombList.includes(num)) {
        alreadyUsed.push(num); 
        console.log("+1")   
    } else {
        lost = true;
    }
}

// * output risultato

if (lost) {
    alert("Hai perso, hai ottenuto " + alreadyUsed.length + " punti");
} else {
    alert("Hai Vinto");
}
