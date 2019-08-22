
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


//##################################################################
//Est-ce que tous les livres ont été au moins empruntés une fois ? #
//##################################################################


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

let all_rented = true;
// on fixe une variable qui dit que tous les livres sont loués

books.forEach(book =>{
  if (book.rented < 1){
  // si un bouquin n'est pas loué on passe la variable à false
     all_rented = false;
  } 
})

console.log(all_rented)


//###################################
//Quel est livre le plus emprunté ? #
//###################################

console.log("Quel est livre le plus emprunté ?");

let book_rented = new Array;

books.forEach(book =>{
   book_rented.push(book.rented)
})

let id = book_rented.indexOf(Math.max.apply(Math, book_rented));
// fonction trouvé sur le net :)

console.log(books[id].title);
// on sort le titre du bouquin


//       ##################
      // # Autre solution #
      // ##################


// NE MARCHE PAS, JE NE SAIS PAS POURQUOI, ME SORT LE MOINS EMPRUNTÉ.... SI TU PEUX ME DIRE POURQUOI! ;)

// function indexOfMax(books) {

//   let max = books[0].rented;
//   // variable max imposée à la valeur de rented de l'index 0

//   let maxIndex = 0;
//   // maxIndex initialisée à 0

//  for (let i = 1; i < books.length; i++){
//  // pour chaque valeur de rented de l'index
//   if (books[i].rented > max){
//   // si la valeur de rented est supérieure à celle de l'élément précédent

//     maxIndex = i;
//     // la valeur de l'index devient celle de l'index 

//     max = books[i].rented;
//     // dit que la valeur du rented de cette index est le plus élevé
//   }
//  }

// console.log(books[maxIndex].title);
// }

// indexOfMax(books)


//########################################
// Quel est le livre le moins emprunté ? #
//########################################


console.log("Quel est livre le moins emprunté ?");

let arr_rented = new Array;

books.forEach(book =>{
 arr_rented.push(book.rented)
})

let index = arr_rented.indexOf(Math.min.apply(Math, arr_rented));

console.log(books[index].title);

//       ##################
      // # Autre solution #
      // ##################


function indexOfMin(books) {

 let min = books[0].rented;
 let minIndex = 0;

 for (let i = 1; i < books.length; i++){
  if (books[i].rented < min){
    minIndex = i;
    min = books[i].rented;
   }
  }
 console.log(books[minIndex].title);
}

indexOfMin(books)


//####################################
// Trouve le livre avec l'ID: 873495 #
//####################################


console.log("Trouve le livre avec l'ID: 873495");

books.forEach(book =>{
// pour chaque bouquin
 if (book.id === 873495){
 // si l'id correspond
  console.log(book.title);
  // sort le titre du bouquin
 }
})


//######################################
// Supprime le livre avec l'ID: 133712 #
//######################################

console.log("Supprime le livre avec l'ID: 133712");

function delete_id(array){
  for(let i = 0; i < array.length; i++){
    if (array[i].id === 133712){
      console.log(array.splice(i,1));
      // .splice == ici: à l'index corrspondant, enlève cette index
    }};
  }

delete_id(books);

console.log(books);


//######################################################################
// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 # 
//car il est supprimé).                                                #
//######################################################################

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712, car il est supprimé).");

let new_array = new Array;
// création d'un nouvel array dans lequel on va mettre les Nom de chaque entrepreneur

books.forEach(book =>{
  new_array.push(book.title)
})
  
let tri = new_array.sort();
//.sort == tri par odre alphabétique

console.log(tri.join());
// permet de sortir l'array en string

