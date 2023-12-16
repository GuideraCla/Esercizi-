// Crea una funzione chiamata somma che accetta un numero qualsiasi
//  di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function sum (...numbers) {
    return numbers.reduce((a,number) => a + number,0);
}

const mysum = sum (4,6,7,8,9,6,3,56,7);

console.log(mysum)
