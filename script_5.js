// 2.3.2. Bibliothécaire

// Réalise un script script_5.js qui affichera dans la console les questions suivantes et leurs réponses :

// Est-ce que tous les livres ont été au moins empruntés une fois ?
// Quel est livre le plus emprunté ?
// Quel est le livre le moins emprunté ?
// Trouve le livre avec l'ID: 873495 ;
// Supprime le livre avec l'ID: 133712 ;
// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// checks whether an element book is rented once or more
const rented_once = (book) => book.rented > 0;
if ( books.every(rented_once) ){
  console.log("1/ Oui, tous les livres ont été au moins empruntés une fois !");
} else {
  console.log("1/ Non, il y a au moins un livres qui n'a pas été empruntés une seule fois !");
}


let livre_plus = "";
let livre_moins = "";


// On doit donner une valeur initiale le premier book (=books[0]) pour que tous les éléments soient parcourus
// book_max = l'accumulateur cad le book de la valeur maxi trouvée, book la valeur courante parcourue
// console.log(books.reduce((book_max, book) => book_max.rented < book.rented ? book : book_max, books[0]));
livre_plus = books.reduce((book_max, book) => book_max.rented < book.rented ? book : book_max, books[0]).title;
console.log(`2/ Le livre le plus emprunté est "${livre_plus}"`);

// console.log(books.reduce((book_min, book) => book_min.rented > book.rented ? book : book_min, books[0]));
livre_moins = books.reduce((book_min, book) => book_min.rented > book.rented ? book : book_min, books[0]).title;
console.log(`3/ Alors que le livre le moins emprunté est "${livre_moins}"`);


console.log(`4/ le livre avec l'ID: 873495 est ${books.find(book => book.id === 873495).title}`);

// 5/ Supprime le livre avec l'ID: 133712 : On a besoin de l'index
const index = books.findIndex(book => book.id === 133712);
console.log(`5/ Je supprime le livre avec l\'ID: 133712 : il occupait la place ${index}`);
console.log(`   et c'était "${books[index].title}"`);
books.splice(index,1) // On suprime le livre dont on a trouvé l'index (1 pour 1 seul à partir de l'index)

// 6/ Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
console.log(`6/ Et voici le tableau trié par ordre alphabétique des titres de livre :"`);
console.log(books.sort((a, b) => a.title.localeCompare(b.title)));



//
// Je conserve ma première version où le return ne faisait pas sortir de la fonction à cause
// de l'utilisation de forEach !!!! bon à savoir !!!
//
// Avec ma fonction + boucle for... (Ma première version ) -------------------------------------
// =======================================================
function rented_at_least_one_time(books){
  for (const book of books) {
    if ( book['rented'] <= 0 ) {
      console.log(`Le livre ${book['title']} n\'a pas été emprunté !'}`);
      return false;
    }
  }  
  return true;
}
// if ( rented_at_least_one_time(books) ){
//   console.log("1bis/ Oui, tous les livres ont été au moins empruntés une fois !");
// } else {
//   console.log("1bis/ Non, il y a au moins un livres qui n'a pas été empruntés une seule fois !");
// }
// -------------------------------------------------------------------------------------------
