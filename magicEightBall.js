/* Program to generate a magic eight ball response.  
You can insert your own name in the userName variable */


var userName = " ";
userName ? console.log("Hello, " + userName) : console.log("Hello!");

var userQuestion = "what does my future look like? ";
console.log(userName + "would like to know " + userQuestion);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = " ";

switch(randomNumber) {
  case(0):
    eightBall = console.log('It is certain');
    break;
  case(1):
    eightBall = console.log('It is decidedly so');
    break;
  case(2):
    eightBall = console.log('Reply hazy try again');
    break;
  case(3):
    eightBall = console.log('Cannot predict now');
    break;
  case(4):
    eightBall = console.log('Do not count on it');
    break;
  case(5):
    eightBall = console.log('My sources say no');
    break;
  case(6):
    eightBall = console.log('Outlook not so good');
    break;
  case(7):
    eightBall = console.log('Signs point to yes');
    break;
}
console.log(' and your lucky number is ' + randomNumber);



