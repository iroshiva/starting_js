
//##################
// CALCULS RAPIDES #
//##################

let number = prompt("Balance un chiffre ou un nombre et je te donnerai sa factorielle!");

let result = 1
// début du factoriel
// ex: 5! = 1x2x3x4x5
//ex: 3! = 1x2x3

for (i = 1; i <= number ; i++){
// itérateur de la boucle i = 1, va jusqu'au chiffre rentré par l'utilisatuer, incrémentation de +1 à chaque tour

	result = i * result;
}

console.log(`La factorielle de ${number} est: ${result}`);



