
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


//########################################################################
//Filtre dans cette liste les entrepreneurs qui sont nés dans les années70 ##########################################################################
	
	// METHODE AVEC BOURCLE FOR

// let number_object = entrepreneurs.length;
// // == nbre d'entrepreneur dans l'array

// for (let i = 0; i < number_object; i++){
// 		// def d'un itérateur pour parcourir les index du tableau
// 		// i < number_object == les index commencent à 0

// 	if (1970 < entrepreneurs[i].year && entrepreneurs[i].year < 1980){
// 		console.log(entrepreneurs[i]);
// 	} 
// }

		// METHODE forEach

console.log("Voici la liste des entreprenaurs nés dans les années 70!")

entrepreneurs.forEach(entrepreneur => {
	if (1970 < entrepreneur.year && entrepreneur.year < 1980)
	console.log(`${entrepreneur.first} ${entrepreneur.last}`)
})



//#####################################################################
// Sors une array qui contient le prénom et le nom des entrepreneurs  #
//#####################################################################

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")
let new_array = new Array;
// création d'un nouvel array != ruby !!!!!!!!
// == new Array

entrepreneurs.forEach(entrepreneur =>{
	new_array.push(entrepreneur.first + "" + entrepreneur.last)
	// .push == << de ruby == ajoute à l'array
})

console.log(new_array);
// sort l'array avec nom et prénom des entrepreneurs



//#################################################
// Quel âge aurait chaque inventeur aujourd'hui?  #
//#################################################

console.log("Quel âge aurait chaque inventeur aujourd'hui?")

let actual_year = 2019

entrepreneurs.forEach(entrepreneur =>{

	let age = actual_year - entrepreneur.year

	console.log(`Aujourdhui, ${entrepreneur.first} ${entrepreneur.last} aurait ${age}ans!` )
})


//##################################################################
// Trie les entrepreneurs par ordre alphabétique du nom de famille.#
//##################################################################


let new_array = new Array;
// création d'un nouvel array dans lequel on va mettre les Nom de chaque entrepreneur

entrepreneurs.forEach(entrepreneur =>{
	new_array.push(entrepreneur.last)
})
	
let tri = new_array.sort();
//.sort == tri par odre alphabétique

console.log(tri.join());
// permet de sortir l'array en string


