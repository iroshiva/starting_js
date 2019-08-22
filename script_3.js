// MARIO PYRAMIDES

let number = prompt("Balance un chiffre ou un nombre! On va construire une pyramide!");

let space = " ";
// variable space == nbre d'espace

let hashtag = "#";
// variable hashtag == nbre de hashtag

for (let i = 1; i <= number; i++){
	// définition d'un itérateur i == 1, qui va jusqu'au chiffre de l'utilisatuer, qui s'incrémente de 1 à chaque tour

	line = space.repeat(number-i) + "" + hashtag.repeat(i);
	// à chague ligne == nbre d'espace + nbre de hashtag

	console.log(line);
	// sort chaque ligne
}

