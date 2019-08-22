
// CALCULS RAPIDES


let number = prompt("Balance un chiffre ou un nombre et je te donnerai sa factorielle!");

let result = 1

for (i = 1; i <= number ; i++){

	result = i * result;
}

console.log(`La factorielle de ${number} est: ${result}`);



