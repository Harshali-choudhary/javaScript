let gameNum=25;
let UserNum=prompt("Guess the game number : ");
while(UserNum != gameNum)
    {
        UserNum=prompt("You entered the wrong number, guess the correct number : ");
    }
    console.log("Congraulation, you enterd the right number .");