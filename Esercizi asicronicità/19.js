// In questo esercizio andremo a simulare il caricamento di moduli di un veicolo spaziale in
// modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!
// La funzione "caricaModulo" ritorna una promise simulando il caricamento di un 
// modulo con un ritardo di 2 secondi!
// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza
// la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento
// di ciascuna operazione prima di passare alla successiva.
// Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console
// "Veicolo spaziale pronto per il lancio!".

function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

// implementa la funzione asincrona "lanciaVeicoloSpaziale"

async function lanciaVeicoloSpaziale() {
    try {
      // Carica il modulo A
      const moduloA = await caricaModulo("A");
      console.log(moduloA);
  
      // Carica il modulo B dopo il modulo A
      const moduloB = await caricaModulo("B");
      console.log(moduloB);
  
      // Carica il modulo C dopo il modulo B
      const moduloC = await caricaModulo("C");
      console.log(moduloC);
  
      // Se tutti i moduli sono stati caricati con successo, stampa il messaggio di pronto per il lancio
      console.log("Veicolo spaziale pronto per il lancio!");
    } catch (errore) {
      console.error("Si è verificato un errore durante il caricamento dei moduli:", errore);
    }
  }
  
  // Chiamiamo la funzione lanciaVeicoloSpaziale
  lanciaVeicoloSpaziale();