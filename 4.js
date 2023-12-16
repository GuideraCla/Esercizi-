// Implementare la funzione nicknameMap che, dato un array di persone, crea un array di nickname.
//  Il nickname deve essere formato in questa modo: <name>-<age>.
// // function nicknameMap(persons) {
// //   // ...
// }

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

function nicknameMap  (persons) {
    return persons.map (nicknames => nicknames.name + "-" + nicknames.age )
}


const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);