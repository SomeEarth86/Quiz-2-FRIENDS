var readlineSync= require('readline-sync');

var userName= readlineSync.question("Hello There, Please Enter your name? ");

console.log(" Welcome,",userName,"to the F.R.I.E.N.D.S. quiz \n ");

var score=0;
function playQuiz(Question, Answer){

var userAnswer= readlineSync.question(Question);

if(userAnswer===Answer){
  score++;
  console.log(" Correct answer !!!!");
}

else{
  score--;
  console.log(" OOPS!! Wrong answer, The correct answer is ",Answer);
}

console.log(" Your current Score is ",score,"\n");

}

var questionSet= [{
  question:"How many Categories of Towels does Monica have? \n a: 11 \n b: 12 \n c: 10 \n d: 9 \n",
  answer:"a"
},
{
question:"What is the name of Rachel Hairless Cat ? \n a: Mrs. CottonTail \n b: Fluffy \n c: Mrs. Whiskerson \n d: Mrs. Kitty \n",
answer:"c"
},
{
question:"What is the Name of Chandler's Psycho Roommate who won't leave ? \n a: Paul \n b: Eddie \n c: Jeff \n d: Dan \n",
answer:"b"
},
{
  question:" What is the name of Phoebe's Alter ego? \n a: Felula Jane \n b: Monana Sprat \n c: Regina Phalange \n d: Jemma Puddleduck \n",
  answer:"c"
},
{
question:" Which of the Following Celebrities did not make their Cameo Role in the FRIENDS series ? \n a: Tom Cruise \n b: Bruce Willis \n c: Robin Williams \n d: Brad Pitt \n",
answer:"a"
},
{
  question:" What kind of Animal is Joey's Friend Hugsy ? \n a: Puppy \n b: Pigeon \n c: Panda \n d: Penguin \n "
},
{
  question:" What kind of Animal causes Phoebe to drop a bowl of lottery tickets off the Balcony? \n a: Duck \n b: Cat \n c: Pigeon \n d: A rat \n ",
  answer:"c"
},
{
question:" What are Ross and Monica's parent names ? \n a: Ted and Thelma \n b: Richard and Judy \n c: Jack and Judy \n d: Janine and Fred \n",
answer:"b"
},
{
  question:" What's the name of Joey and Chandler's favorite Basketball team? \n a: The Yankees \n b: The Knicks \n c: The Lakers \n d: The Celtics \n",
  answer:"b"
}]


for(var i=0;i<questionSet.length;i++){
  var currentQuestion=questionSet[i];
  console.log("Question ",i+1);
  playQuiz(currentQuestion.question,currentQuestion.answer);
}

console.log("The final Score is ",score);