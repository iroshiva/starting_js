
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
//Filtre dans cette liste les entrepreneurs qui sont nés dans les années70 //########################################################################

		// METHODE forEach

console.log("Voici la liste des entreprenaurs nés dans les années 70!")

entrepreneurs.forEach(entrepreneur => {
// pour chaque entrepreneur du tableau entreprneurs

	if (1970 < entrepreneur.year && entrepreneur.year < 1980)
  // si année de naissance est comprise entre 1970 et 1980

	console.log(`${entrepreneur.first} ${entrepreneur.last}`)
  // sort le nom et prénom de l'entrepreneur
})



//#####################################################################
// Sors un array qui contient le prénom et le nom des entrepreneurs  #
//#####################################################################


console.log("Sors un array qui contient le prénom et le nom des entrepreneurs")

let new_array = new Array;
// création d'un nouvel array != Array.new de ruby !!!!!!!!

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
// variable dont la valeur == 2019

entrepreneurs.forEach(entrepreneur =>{
	let age = actual_year - entrepreneur.year
	console.log(`Aujourdhui, ${entrepreneur.first} ${entrepreneur.last} aurait ${age}ans!` )
})


//##################################################################
// Trie les entrepreneurs par ordre alphabétique du nom de famille.#
//##################################################################

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")

let new_arr = new Array;
// création d'un nouvel array dans lequel on va mettre les noms de chaque entrepreneur

entrepreneurs.forEach(entrepreneur =>{
	new_arr.push(entrepreneur.last)
})
	
let tri = new_arr.sort();
//.sort == tri par odre alphabétique

console.log(tri.join());
// permet de sortir l'array en string


