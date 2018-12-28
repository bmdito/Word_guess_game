

var letterSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wordSetArr = ["explain", "orchestra", "spectrum", "delivery"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongGuesses = [];
var userGuesses = [];
var chosenWord;
var chosenWord = wordSetArr[Math.floor(Math.random() * wordSetArr.length)];

answerArray = [];


//function 
function startGame(){

// var chosenWord = wordSetArr[Math.floor(Math.random() * wordSetArr.length)];
 console.log(chosenWord);
 alert("Press any key to get started!!");

for (var i =0; i < chosenWord.length; i++)
    {
    answerArray.push("_");
    }  
    // creates underscores
    document.getElementById("theWord").textContent = answerArray.join("  ");

    //reset game

    var wrongGuesses = [];
    var guessesLeft = 9;
    
    
}

function winOrLose () {
    if (guessesLeft === 0) 
    { 
        alert("You Lose!");
        
    } 
    
}

document.onkeyup = function(event)
{

    userGuesses = event.key;
    console.log(userGuesses);

    
    
    if(chosenWord.indexOf(userGuesses) > -1)
        {
            for (i=0; i<chosenWord.length; i++) 
            {
                if (chosenWord[i] === userGuesses)
                {
                    answerArray[i] = userGuesses;
                    console.log(answerArray);
                    document.getElementById("theWord").textContent = answerArray;
                }
            }
        }
    else
        {
            console.log("no");
            wrongGuesses.push(userGuesses);
            console.log(wrongGuesses);
            guessesLeft--;
            console.log(guessesLeft);  
            winOrLose();
        }
    
}
    

//main 
startGame();


