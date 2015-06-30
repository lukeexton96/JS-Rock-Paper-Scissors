startGame();

var compare = function (choice1, choice2){
       if (choice1 === choice2){
           console.log("The result is a tie! Choose again.");
           startGame();
       } else if (choice1 === "rock"){
            if (choice2 === "paper"){
            return "Paper Wins";
            } else {
            return "Rock Wins";   
            }
       } else if (choice1 === "paper"){
            if(choice2 === "rock"){
             return "Paper Wins";   
            } else {
             return "Scissors Wins";   
            }
       } else if (choice1 === "scissors"){
            if(choice2 === "paper"){
             return "Scissors Win";   
            } else { 
             return "Rock Wins";   
            }
       } else { 
            return "Your Entry Was Invalid";   
       }
}

var startGame = function() {
    var userChoice = prompt("Do you choose rock, paper or scissors?");

    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
	    computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
    } else {
	    computerChoice = "scissors";
    } console.log("Computer: " + computerChoice);

    var userChoiceLower = userChoice.toLowerCase();
    var computerChoiceLower = computerChoice.toLowerCase();

    compare(userChoiceLower, computerChoiceLower);
}
