var cards = 
[
  { 
  	rank: "gueen" ,
  	suit: "hearts",
  	cardImage:"images/queen-of-hearts.png"},
   {
  	rank: "gueen" ,
  	suit: "diamonds",
  	cardImage:"images/queen-of-diamonds.png"},
  {	
  	rank: "king" ,
  	suit: "hearts",
  	cardImage:"images/king-of-hearts.png"},
  {	
  	rank: "king" ,
  	suit: "diamonds",
  	cardImage:"images/king-of-diamonds.png"}
  ];
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

	console.log("User flipped "+ cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	checkForMatch();

}



flipCard(0);
flipCard(2);

