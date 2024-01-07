// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una
//  migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
      console.log ("Recupero dati in corso...")
      setTimeout(() => {
        if (false === true) {
            resolve ("name jhon , age: 30");
         } else {
            reject ("false");
         }
    },1000)
})
}

fetchDataFromAPI()
  .then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log(error)
  })

