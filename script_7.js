
question = prompt("Ecris ce que tu veux, morveux!")

function bot_answer(sent) {
	
	if(sent.slice(-1) === "?"){
	// prend le dernier charactère d'une string
		console.log("Ouais Ouais...");
	}
	else if(sent === sent.toUpperCase() && sent.trim() != ""){
	// .trim == si présence d'espace
		console.log("Pwa, calme-toi...");
	}
	else if(sent.toLowerCase().includes("fortnite")){
	// cas où fortnite est écrit avec un f majuscule
		console.log("on s' fait une partie soum-soum ?");
	}
	else if(sent === ""){
		console.log("t'es en PLS ?");
	}
	else{
		console.log("balek");
	}
}

bot_answer(question)