
question = prompt("Ecris ce que tu veux, morveux!")

function bot_answer(sent) {
	
	if(sent.slice(-1) === "?"){
		console.log("Ouais Ouais...");
	}
	else if(sent === sent.toUpperCase() && sent.trim() != ""){
		console.log("Pwa, calme-toi...");
	}
	else if(sent.toLowerCase().includes("fortnite")){
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