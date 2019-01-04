
var wordSetArr = ["explain", "orchestra", "spectrum", "delivery", "exploit", "struggle", "confusion", "crumble" , "magnify", "fistbump", "vaporize"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongGuesses = [];
var userGuesses = [];
var chosenWord;
var guessBank = [];
// var chosenWord = wordSetArr[Math.floor(Math.random() * wordSetArr.length)];
var winCounter = 0;
answerArray = [];



function startGame(){

var chosenWord = wordSetArr[Math.floor(Math.random() * wordSetArr.length)];
 console.log(chosenWord);
 alert("Press any key to get started!!");
 answerArray = [];
 

for (var i =0; i < chosenWord.length; i++)
    {
    answerArray.push("_");
    }  
    // creates underscores
    document.getElementById("theWord").textContent = answerArray.join(" ");

    //reset game

    
    // document.getElementById("badGuess").innerHTML = wrongGuesses;
    
    wrongGuesses = [];
    guessesLeft = 10;
    winCounter = 0;
    guessBank = [];

    function winOrLose () {
        if (guessesLeft === 0) 
        { 
            alert("You Lose!");
            losses++;
            document.getElementById("lossCount").innerHTML = losses;
            startGame();
            
        } 
        
        if (winCounter === chosenWord.length){
            document.getElementById("theWord").textContent = answerArray;  
            alert("OMG YOU WON! " + "the word was " + chosenWord);
            wins++;
            document.getElementById("winCount").innerHTML = wins;
            console.log(wins);
            startGame();
        }
    }

  
    document.onkeyup = function(event)
    {
        
        userGuesses = event.key;
        console.log(userGuesses);
        
         
        // guess letter //
        
        if(chosenWord.indexOf(userGuesses) > -1)
            {
                    if (guessBank.indexOf(userGuesses) < 0) 
                {
                    for (i=0; i<chosenWord.length; i++) 
                    {
                        if (chosenWord[i] === userGuesses)
                        {
                            answerArray[i] = userGuesses;
                            console.log(answerArray);
                            document.getElementById("theWord").textContent = answerArray;
                            winCounter++;
                            guessBank.push(userGuesses);
                            console.log("guessBank "+guessBank);
                            winOrLose();
                            
                            
                        }
                    }
                } else 
                    {
                        alert("You already guessed " +userGuesses+ "!");
                    }
            }
        else
            {
                if(wrongGuesses.indexOf(userGuesses) >-1)
                {
                    alert("you already guessed " + userGuesses + "!");
                }
                else 
                {
                
                // console.log("no");
                wrongGuesses.push(userGuesses);
                document.getElementById("badGuess").innerHTML = wrongGuesses;
                guessesLeft--;
                document.getElementById("remainGuesses").innerHTML = guessesLeft;
                
                winOrLose();
                }
            }

            
        
    }    
        

}


startGame();

