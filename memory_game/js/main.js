var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var carOne = cards[0];
var cardTow = cards[2];

cardsInPlay.push(carOne);
cardsInPlay.push(cardTow);

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardId){

	console.log("User flipped "+ cards[cardId]);

	checkForMatch();

}



flipCard(0);
flipCard(2);

