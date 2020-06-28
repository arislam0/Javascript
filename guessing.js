var win = 0;
var lost = 0;
for (var x = 1; x <= 5; x++) {
    var guess = parseInt(prompt("Enter guessing: "));
    var ramdom = Math.floor(Math.random() * 5) + 1;
    if (guess == ramdom) {
        console.log("you win");
        win++;
    } else {
        console.log("You lost.");
        console.log("Ramdom number is: " + ramdom);
        lost++;
    }
}

document.write("you win: " + win + "<br>");
document.write("you lost: " + lost + "<br>");