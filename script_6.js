
// let arn = "CCGUCGUUGCGCUACAGC";

// // var arn_codon = arn.match(/.{3}|.{1,2}/g);


// // console.log(arn_codon);

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



let arn = "CCUCGCCGGUACUUCUCG";

function acid_amin(sent){

	let array = sent.match(/.{1,3}/g);
	// console.log(array)

	for(i = 0; i < array.length; i++){
		if(["UCU" , "UCC" , "UCA" , "UCG" , "AGU" , "AGC"].includes(array[i])){
			array.splice(i,1, 'Sérine');
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
