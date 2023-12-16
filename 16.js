// Dati due oggetti, obj1 e obj2, crea un nuovo oggetto chiamato mergedObject utilizzando l'operatore
//  spread che combina le proprietà di entrambi gli oggetti. 
// Se sono presenti proprietà sovrapposte, i valori di obj2 dovrebbero sovrascrivere i valori di obj1.

const obj1 = { a: 2, b: 7 };
const obj2 = { b: 12, c: 34 };

const mergedObject = {
    ...obj1,
    ...obj2
}

console.log(mergedObject)