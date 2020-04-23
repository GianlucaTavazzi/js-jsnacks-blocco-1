//creo un ciglo che vada da 0 ad un numero casuale molto elevato
for (var i = 0; i < 10000; i++) {
    //creo una variabile il cui risultato è uguale a due elevato alla n
    var quadrato = Math.pow(2,i)
    //stampo solo i risultati minori di 1000
    if (quadrato < 1000) {
        console.log(quadrato);
    }
}
