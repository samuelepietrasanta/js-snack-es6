/**
 * SNACK 1
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
 */



/*   SVOLGIMENTO

let biciclette = [
    {
        nome : 'graziella',
        peso : 480,
    },
    {
        nome : 'bestbici',
        peso : 250,
    }
]

console.log(biciclette[0].nome)


if (biciclette[0].peso < biciclette[1].peso){
    document.write("la bici più leggera è: " + biciclette[0].nome);
}else if (biciclette[0].peso > biciclette[1].peso){
    document.write("la bici più leggera è: " + biciclette[1].nome);
}else{
    document.write("le bici hanno lo stesso peso")
} 



*/


/**   SNACK 2
 * 
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
    Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
 */

    
let squadre = [
    {
        nome: 'inter',
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: 'juventus',
        puntiFatti : 0,
        falliSubiti: 0,
    },
    {
        nome: 'milan',
        puntiFatti : 0,
        falliSubiti: 0,
    },
    {
        nome: 'roma',
        puntiFatti : 0,
        falliSubiti:0,
    },
    {
        nome: 'napoli',
        puntiFatti : 0,
        falliSubiti:0,
    },
    {
        nome: 'lazio',
        puntiFatti : 0,
        falliSubiti: 0,
    }
]


for (let i = 0; i<squadre.length; i++){
    squadraAttuale = squadre[i];
    squadraAttuale.falliSubiti = randomInteger(0,50);
    squadraAttuale.puntiFatti = randomInteger(20,85)
}

console.table(squadre)




function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }







/**  SNACK 3
 *  
 *  Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
 * 
 *  La funzione ritornerà un nuovo array con i valori che hanno
 *  la posizione (indice) compresa tra i due numeri specificati.
 * 
 *  Usiamo i nuovi metodi degli array forEach() o filter().
 * 
 *
 */


let prova = ['anna' , 'dai' , 'capelli', 'rossi' , 'va', 'chissa', 'dove' , 'va'];





console.log(FunzioneEsercizio(prova , 2, 5))


function FunzioneEsercizio( latualista , a , b){
    const valoreDiRitorno = latualista.filter((elemento, index) => {
            return (index >= a && index<=b);
    });
    return valoreDiRitorno
}