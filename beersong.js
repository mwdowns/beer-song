function beerChecker(numOfVerse) {
    if (numOfVerse == 0) {
        return "beer";
    }
    if (numOfVerse % 5 == 0 && numOfVerse % 7 == 0) {
        return "Slap Fight";
    }
    else if (numOfVerse % 5 == 0) {
        return "Fu Man Brew";
    }
    else if (numOfVerse % 7 == 0) {
        return "Drafty Kilt";
    }
    else {
        return "beer";
    }
}

function beerSong(numOfVerses) {
    var firstPart = " Bottles of ";
    var secondPart = " on the wall. ";
    var thirdPart = " Bottles of ";
    var fourthPart = ". Take one down, pass it around. ";
    var fifthPart = " bottles of ";
    var sixthPart = " on the wall.";
    function sing(n) {
        if (n - 1 == 1 ) {
            fifthPart = " bottle of ";
        }
        if (n == 1) {
            firstPart = " Bottle of ";
            thirdPart = " Bottle of ";
            fifthPart = " bottles of ";
        }
        var line = n.toString() + firstPart + beerChecker(n) + secondPart + n.toString() + thirdPart + beerChecker(n) + fourthPart + (n - 1).toString() + fifthPart + beerChecker(n - 1) + sixthPart;
        if (n <= 1) {
            return line + "\nNo bottles of beer on the wall. No bottles of beer. Go to the store. Buy some more. 99 bottles of beer on the wall!";
        } else {
            console.log(line);
            return sing(n - 1);
        }    
    }
    return sing(numOfVerses);
}
console.log(beerSong(5));