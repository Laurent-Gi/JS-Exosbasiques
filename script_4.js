/* 2.3. Analyses de données
 2.3.1. Startup Nation */

// Réalise un script script_4.js qui affichera dans la console les questions suivantes et leur réponses :
// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
// Sors une array qui contient le prénom et le nom des entrepreneurs ;
// Quel âge aurait chaque inventeur aujourd'hui ?
// Trie les entrepreneurs par ordre alphabétique du nom de famille.

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("1/ Voici les entrepreneurs qui sont nés dans les années 70 :");
/* Pour chaque entrepreneur : */
entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur['year'] >= 1970 && entrepreneur['year'] < 1980) {
    console.log(entrepreneur['first'] + " " + entrepreneur['last'] + " né en " + entrepreneur['year']);
    }
});

console.log("2/ Voici le tableau qui contient le prénom et le nom des entrepreneurs");
let array_fullname = [];
// array_melting = []; /* Vu que la consigne n'est pas claire j'ajoute ça */
entrepreneurs.forEach(entrepreneur => {
  array_fullname.push(entrepreneur['first'] + " " + entrepreneur['last']);
  // array_melting.push(entrepreneur['first']);
  // array_melting.push(entrepreneur['last']);
});
// console.log(array_melting);
console.log(array_fullname);

console.log("3/ Voici l'âge qu'aurait chaque inventeur aujourd'hui :");

let age = 0;

entrepreneurs.forEach(entrepreneur => {
  age = 2020 - entrepreneur['year']
    console.log(entrepreneur['first'] + " " + entrepreneur['last'] + " aurait " + age + " ans");
});

console.log("les entrepreneurs par ordre alphabétique du nom de famille.");
console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));