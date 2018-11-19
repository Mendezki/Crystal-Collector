
var wins = 0;
var losses = 0;
var scoreTotal = 0;


//Create a random number to initialize the game
var randomNumber = Math.floor(Math.random() * 101) + 19;
$("#randomNumber").html(randomNumber);


//There are 4 crystals that will generate a random number automatically
var gem1 = Math.floor(Math.random() * 11) + 1;
var gem2 = Math.floor(Math.random() * 11) + 1;
var gem3 = Math.floor(Math.random() * 11) + 1;
var gem4 = Math.floor(Math.random() * 11) + 1;


$("#scoreWins").append(wins);
$("#scoreLosses").append(losses);


//Function will restart the game after a win or a loss
function restart() {
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").html(randomNumber);
    gem1 = Math.floor(Math.random() * 11) + 1;
    gem2 = Math.floor(Math.random() * 11) + 1;
    gem3 = Math.floor(Math.random() * 11) + 1;
    gem4 = Math.floor(Math.random() * 11) + 1;
    scoreTotal = 0;
    $("#gemTotal").html(scoreTotal);
}
console.log(win)

function win() {
    wins++;
    $("#scoreWins").html("Wins: " + wins);
    restart();
}

function loss() {
    losses++;
    $("#scoreLosses").html("Losses: " + losses);
    restart();
}

//when clicking on a crystal the number generated will be shown and added to the user's total score

$("#crystal1").on("click", function() {
    scoreTotal = scoreTotal + gem1;
    //console.log(this)
    //console.log(scoreTotal)
    $("#gemTotal").html(scoreTotal)
    if (scoreTotal === randomNumber) {
        win();
        //$("#results").text("You Win!");
    }
    else if (scoreTotal > randomNumber) {
        loss();
        //$("#results").text("You Lose!");
    }

})

$("#crystal2").on("click", function () {
    scoreTotal = scoreTotal + gem2;
    //console.log(this)
    //console.log(scoreTotal)
    $("#gemTotal").html(scoreTotal)
    if (scoreTotal === randomNumber) {
        win();
        //$("#results").text("You Win!");
    }
    else if(scoreTotal > randomNumber) {
        loss();
        //$("#results").text("You Lose!");
    }

})

$("#crystal3").on("click", function () {
    scoreTotal = scoreTotal + gem3;
    //console.log(this)
    //console.log(scoreTotal)
    $("#gemTotal").html(scoreTotal)
    if (scoreTotal === randomNumber) {
        win();
        //$("#results").text("You Win!");
    }
    else if(scoreTotal > randomNumber) {
        loss();
        //$("#results").text("You Lose!");
    }

})

$("#crystal4").on("click", function () {
    scoreTotal = scoreTotal + gem4;
    //console.log(this)
    //console.log(scoreTotal)
    $("#gemTotal").html(scoreTotal)
    //console.log(scoreTotal)
    if (scoreTotal === randomNumber) {
        win();
        //$("#results").append("You Win!");
    }
    else if(scoreTotal > randomNumber) {
        loss();
        //$("#results").append("You Lose!");
    }

})