//Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6
function setup(){

    var randomNumber1 = Math.floor(random(1,7));
    var randomNumber2 = Math.floor(random(1,7));

    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";

    var randomImageSource1 = "images/" + randomDiceImage1;
    var randomImageSource2 = "images/" + randomDiceImage2;

    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src", randomImageSource1);
    image2.setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🏆Player 1 Is The Winner!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Is The Winner!🏆";
    }
    else {
        document.querySelector("h1").innerHTML = "🎲It Is A Tie!";
    }

}
