// In questo esercizio dato un array di studenti:
// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.


const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];


studenti.forEach (students => console.log (students.nome))


const MagNovanta = studenti.find (students => students.voto >90 )
console.log(MagNovanta)


const sum = studenti.reduce((totale, studente) => totale + studente.voto, 0);
const average = sum / studenti.length;
console.log(average);


const upName = studenti.map(students => students.nome.toUpperCase());
console.log(upName)


const mag85 = studenti.filter(students => students.voto > 85);
console.log(mag85)

