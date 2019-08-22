
console.log("Ci-même, la molécule correspondante à la séquence d'ARN CCGUCGUUGCGCUACAGC");

let arn = "CCGUCGUUGCGCUACAGC";
// == code ARN à déchiffrer

function acid_amin(sent){
// fonction qui prend en entrée le code sous forme de string

	let array = sent.match(/.{1,3}/g);
// coupe le code toute les trois lettres et sort un array contenant les codons

	for(i = 0; i < array.length; i++){
// pour chaque index, regarde si le codon correspond à un acide aminé
// si oui, remplace le codon par son acide aminé correspondant

		if(["UCU" , "UCC" , "UCA" , "UCG" , "AGU" , "AGC"].includes(array[i])){
		// si l'index contient l'un de ces trois codons
			array.splice(i,1, 'Sérine');
			// remplace-le par 'Sérine'
		}else if(["CCU", "CCC" , "CCA" , "CCG"].includes(array[i])){
			array.splice(i,1, 'Proline');
		}else if(["UUA" , "UUG"].includes(array[i])){
			array.splice(i,1, 'Leucine');
		}else if(["UUU" , "UUC"].includes(array[i])){
			array.splice(i,1, 'Phénylalanine');
		}else if(["CGU" , "CGC" , "CGA" , "CGG" , "AGA" , "AGG"].includes(array[i])){
			array.splice(i,1, 'Arginine');
		}else if(["UAC" , "UAC"].includes(array[i])){
			array.splice(i,1, 'Tyrosine');
		}
	}
	console.log(array.join('-'));
}

acid_amin(arn);


//       #############
      // # Autre ARN #
      // #############


// console.log("Ci-même, la molécule correspondante à la séquence d'ARN CCUCGCCGGUACUUCUCG");
// let arn = "CCUCGCCGGUACUUCUCG";

// function acid_amin(sent){

// 	let array = sent.match(/.{1,3}/g);
// 	// console.log(array)

// 	for(i = 0; i < array.length; i++){
// 		if(["UCU" , "UCC" , "UCA" , "UCG" , "AGU" , "AGC"].includes(array[i])){
// 			array.splice(i,1, 'Sérine');
// 		}else if(["CCU", "CCC" , "CCA" , "CCG"].includes(array[i])){
// 			array.splice(i,1, 'Proline');
// 		}else if(["UUA" , "UUG"].includes(array[i])){
// 			array.splice(i,1, 'Leucine');
// 		}else if(["UUU" , "UUC"].includes(array[i])){
// 			array.splice(i,1, 'Phénylalanine');
// 		}else if(["CGU" , "CGC" , "CGA" , "CGG" , "AGA" , "AGG"].includes(array[i])){
// 			array.splice(i,1, 'Arginine');
// 		}else if(["UAC" , "UAC"].includes(array[i])){
// 			array.splice(i,1, 'Tyrosine');
// 		}
// 	}
// 	console.log(array.join('-'));
// }

// acid_amin(arn);
