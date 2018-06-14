var wordlib = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"];


// Randomly chose a word from array 
var gameword = wordlib[Math.floor(Math.random() * wordlib.length)];

// keeping track of whether the word letters are guessed, initial values

var notfound1 = true;
var notfound2 = true;
var notfound3 = true;
var notfound4 = true;
var notfound5 = true;
var notfound6 = true;
var notfound7 = true;
var notfound8 = true;

// guesses remaining initial value
var grem = 13;
// number of games won
var gwon = 0;
// array of the letters guessed
var lguessed = [];
// how many letters have been guessed
var guesscount=0;


//function to reset some variables back to initial
function resetToInit() {
    notfound1 = true;
    notfound2 = true;
    notfound3 = true;
    notfound4 = true;
    notfound5 = true;
    notfound6 = true;
    notfound7 = true;
    notfound8 = true;
    grem = 13;
    lguessed = [];
    guesscount=0;
    gameword = wordlib[Math.floor(Math.random() * wordlib.length)];
}


// Check if word fully guessed
function fullguess() {

    switch(gameword.length) {

    case 4:
    if (!notfound1 && !notfound2 && !notfound3 && !notfound4){
        return true;
    }
     else {
        return false;
    }
    break;
    case 5:
    if (!notfound1 && !notfound2 && !notfound3 && !notfound4 && !notfound5){
        return true;
    }
     else {
        return false;
    }
    break;
    case 6:
    if (!notfound1 && !notfound2 && !notfound3 && !notfound4 && !notfound5 && !notfound6){
        return true;
    }
     else {
        return false;
    }
    break;
    case 7:
    if (!notfound1 && !notfound2 && !notfound3 && !notfound4 && !notfound5 && !notfound6 && !notfound7){
        return true;
    }
     else {
        return false;
    }
    break;
    case 8:
    if (!notfound1 && !notfound2 && !notfound3 && !notfound4 && !notfound5 && !notfound6 && !notfound7 && !notfound8){
        return true;
    }
     else {
        return false;
    }
    break;
    }
}


// Start engines when a key is pressed

document.onkeyup = function(event) {

    console.log(gameword);

    // Determines which key was pressed.
    var userGuess = event.key;
    //decrement guesses remaining if letter was not previously guessed
    if (lguessed.indexOf(userGuess) < 0) {
        grem--;
    };
    // Array of letters guessed
    if (lguessed.indexOf(userGuess) < 0) {
    lguessed[guesscount] = userGuess;
    guesscount++;
    };

    // variable of the word to be guessed, starting as underscore and revealing letters as guessed
    var displayword = "";

        if ( (notfound1 === false) ) {
            displayword = displayword + gameword.charAt(0) +" ";
        }
        else if ( (userGuess === gameword.charAt(0)) && notfound1){
            displayword = displayword + gameword.charAt(0) +" ";
            notfound1=false;
        }
        else {
            displayword = displayword + "_ ";
        }

        if ( (notfound2 === false)) {
            displayword = displayword + gameword.charAt(1) +" ";
        }      
        else if ( (userGuess === gameword.charAt(1)) && notfound2){
            displayword = displayword + gameword.charAt(1) +" ";
            notfound2=false;
        }
        else {
            displayword = displayword + "_ ";
        }

        if ( (notfound3 === false)) {
            displayword = displayword + gameword.charAt(2) +" ";
        }      
        else if ( (userGuess === gameword.charAt(2)) && notfound3){
            displayword = displayword + gameword.charAt(2) +" ";
            notfound3=false;
        }
        else if (gameword.length >2) {
            displayword = displayword + "_ ";
        }

        if ( (notfound4 === false)) {
            displayword = displayword + gameword.charAt(3) +" ";
        }      
        else if ( (userGuess === gameword.charAt(3)) && notfound4){
            displayword = displayword + gameword.charAt(3) +" ";
            notfound4=false;
        }
        else if (gameword.length >3) {
            displayword = displayword + "_ ";
        }

        if ( (notfound5 === false)) {
            displayword = displayword + gameword.charAt(4) +" ";
        }      
        else if ( (userGuess === gameword.charAt(4)) && notfound5){
            displayword = displayword + gameword.charAt(4) +" ";
            notfound5=false;
        }
        else if (gameword.length >4) {
            displayword = displayword + "_ ";
        }

        if ( (notfound6 === false)) {
            displayword = displayword + gameword.charAt(5) +" ";
        }      
        else if ( (userGuess === gameword.charAt(5)) && notfound6){
            displayword = displayword + gameword.charAt(5) +" ";
            notfound6=false;
        }
        else if (gameword.length >5){
            displayword = displayword + "_ ";
        }

        if ( (notfound7 === false)) {
            displayword = displayword + gameword.charAt(6) +" ";
        }      
        else if ( (userGuess === gameword.charAt(6)) && notfound7){
            displayword = displayword + gameword.charAt(6) +" ";
            notfound7=false;
        }
        else if (gameword.length >6) {
            displayword = displayword + "_ ";
        }

        if ( (notfound8 === false)) {
            displayword = displayword + gameword.charAt(7) +" ";
        }      
        else if ( (userGuess === gameword.charAt(7)) && notfound8){
            displayword = displayword + gameword.charAt(7) +" ";
            notfound8=false;
        }
        else if (gameword.length >7) {
            displayword = displayword + "_ ";
        }
    

    // call function to see if word has been fully guessed
    if(fullguess()) {
        alert("You Win!");
        gwon++;
        resetToInit();
    }
    // check if any guesses remain
    if (grem === 0) {
        alert("That was your last guess =(");
        resetToInit();
    }
    // Display the underscores and letters guessed
    document.getElementById("gameword").innerHTML = displayword;
    // Display the games remaining value
    document.getElementById("grem").innerHTML = grem;
    // Display the games won value
    document.getElementById("gwon").innerHTML = gwon;
    // Display the letters user has guessed so far
    document.getElementById("letdisp").innerHTML = lguessed.toString();


}