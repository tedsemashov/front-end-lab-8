let randomNumber = confirm('Do you want to play a game?');

function LVL() {
   for (let i = 0; i < 3; i++) {
      let figureUser = +prompt(' Enter a number from 0 to 5' + '\n Attempts left: '+ attemps + '\n Total prize: ' + prize + '$' + '\n Possible prize on current attempt: ' + possiblePrize + '$');

      if (figureUser == false) {
         break;
      }

      if (figure == figureUser) {

         if (attemps == 3) {
            console.log('WIN 10$');
            prize = 10;
            gameTwo = confirm('Do you want to continue?');

            if (gameTwo == true) {
               LVLTWO();
            }
            break;
         } else if (attemps == 2) {
            console.log('WIN 5$');
            prize = 5;
            gameTwo = confirm('Do you want to continue?');

            if (gameTwo == true) {
               LVLTWO();
            }
            break;
         } else if (attemps == 1) {
            console.log('WIN 2$');
            prize = 2;
            gameTwo = confirm('Do you want to continue?');

            if (gameTwo == true) {
               LVLTWO();
            }
            break;
         }
      } else if (figure !== figureUser) {
         --attemps;

         if (attemps == 3) {
            possiblePrize = 10;
         } else if (attemps == 2) {
            possiblePrize = 5;
         } else if (attemps == 1) {
            possiblePrize = 2;
         }
      }

      if (attemps == 0) {
         console.log('Game over');
      }
   }
}

function LVLTWO() {
   figure = Math.floor(Math.random()*11);
   console.log('Lucky figure: ' + figure);
   attemps = 3;
   possiblePrize = 30;

   for (let i = 0; i < 3; i++) {
      let figureUser = +prompt(' Enter a number from 0 to 10' + '\n Attempts left: '+ attemps + '\n Total prize: ' + prize + '$' + '\n Possible prize on current attempt: ' + possiblePrize + '$');

      if (figureUser == false) {
         break;
      }

      if (figure == figureUser) {

         if (attemps == 3) {
            console.log('WIN 30$');
            prize2 = 30;
            break;
         } else if (attemps == 2) {
            console.log('WIN 15$');
            prize2 = 15;
            break;
         } else if (attemps == 1) {
            console.log('WIN 7$');
            prize2 = 7;
            break;
         }
      } else if (figure !== figureUser) {
         --attemps;

         if (attemps == 3) {
            possiblePrize = 30;
         } else if (attemps == 2) {
            possiblePrize = 15;
         } else if (attemps == 1) {
            possiblePrize = 7;
         }
      }

      if (attemps == 0) {
         prize = 0;
         prize2 = 0;
         console.log('Game over');
      }
   }
}

if (randomNumber == true) {
   var figure = Math.floor(Math.random()*6);
   console.log('Lucky figure: ' + figure);
   var attemps = 3;
   var prize = 0;
   var prize2 = 0;
   var possiblePrize = 10;
   var gameTwo;

   LVL();
   let playAgain = confirm('Do you want play again?');
   let prizeTotal = prize + prize2;

   if (playAgain == true) {
      figure = Math.floor(Math.random()*6);
      attemps = 3;
      prize = 0;
      possiblePrize = 10;
      console.log('Lucky figure: ' + figure);
      LVL();
      console.log('Thank you for a game. Your prize is: ' + prizeTotal + '$');
   } else {
      console.log('Thank you for a game. Your prize is: ' + prizeTotal + '$');
   }
} else {
   console.log('You did not become a millionaire.')
}


