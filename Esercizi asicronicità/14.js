// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi.
//  -Utilizzare setTimeout per simulare un'operazione asincrona.

function dataName() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve({ name : "Claudio" });
            } else {
                reject(new Error("Errore nel recupero dati..."));
            }
        },2000)
    }
 )}

 dataName()
 .then((name) => {
    console.log(name)
 })
 .catch((error) =>{
    console.log(error)
 })