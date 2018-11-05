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
var count = 0;

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

	
	for (var i = 0; i < cards.length; i++) {
	    var newListItem = document.createElement('img')
	     newListItem.setAttribute("src","images/back.png");
	     newListItem.setAttribute("id",i);
	    document.getElementById("game-board").appendChild(newListItem);
	}

	document.getElementById("0").addEventListener("click", function(){
			cardsInPlay.push(cards[0].rank);
			document.getElementById("0").src="images/queen-of-hearts.png";		
			count++;			

		if(count > 1){
			checkForMatch()


		}
		
	});	

	document.getElementById("1").addEventListener("click", function(){
			cardsInPlay.push(cards[1].rank);
			document.getElementById("1").src="images/queen-of-diamonds.png";		
			count++;
		if(count > 1){
			checkForMatch()


		}
		});

	document.getElementById("2").addEventListener("click", function(){
			cardsInPlay.push(cards[2].rank);
			document.getElementById("2").src="images/king-of-hearts.png";		
			count++;
		if(count > 1){
			checkForMatch()


		}
		});

	document.getElementById("3").addEventListener("click", function(){
			cardsInPlay.push(cards[3].rank);
			document.getElementById("3").src="images/king-of-diamonds.png";		
			count++;
		if(count > 1){
			checkForMatch()


		}

		});



