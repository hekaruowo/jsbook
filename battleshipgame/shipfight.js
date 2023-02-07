let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

alert(randomLoc)

while (isSunk == false) {
    guess = prompt("Reade, aim, fire! (enter a number(0-6)): ");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses += 1;
    }
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!")
            hits += 1;
        } else {
            alert("miss");
        }
            if (hits == 3){
                isSunk = true;
                alert("U sank my ship!")
            }
}
let stats = "U took " + guesses + " guesses to sink yhe ship, " + "which means ur shooting accuracy was " + (3/guesses);
alert(stats)
