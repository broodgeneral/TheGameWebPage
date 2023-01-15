var diceList = ["images/dice1.png", 
                "images/dice2.png",
                "images/dice3.png",
                "images/dice4.png",
                "images/dice5.png",
                "images/dice6.png",]
var randDiceOne = Math.floor(Math.random() * diceList.length);
var randDiceTwo = Math.floor(Math.random() * diceList.length);
document.querySelector("#diceOne").setAttribute("src", diceList[randDiceOne]);
document.querySelector("#diceTwo").setAttribute("src", diceList[randDiceTwo]);

if(randDiceOne > randDiceTwo){
    document.querySelector(".container h1").textContent = "🚩Player 1 Wins!"
}else if(randDiceOne === randDiceTwo){
    document.querySelector(".container h1").textContent = "Draw!"
}else{
    document.querySelector(".container h1").textContent = "Player 2 Wins!🚩"
}
