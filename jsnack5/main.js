//chiedo all'utente un numero
var numero_utente = parseInt(prompt('inserisci un numero'))
//creo un ciclo for da 1 al numero dato dall'utente
for (var i = 1; i <= numero_utente ; i++) {
    //elevo al quadrato i numeri da 1 a n
    var quadrato = Math.pow(i,3)
    //stampo il risultato
    console.log(quadrato);
}
