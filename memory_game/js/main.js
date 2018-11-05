var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var cardOne =cards[0];

cardsInPlay.push(cardOne);
var cardTow = cards[2];
cardsInPlay.push(cardTow);

console.log("User flipped queen  ");
console.log("User flipped king  ");

if(cardsInPlay.length === 2){
	 	console.log("True")


}

if(cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
 }else{
	alert("Sorry, try again.");
 }
