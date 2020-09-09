const choices = document.querySelectorAll('.choice');
const userScoreDiv = document.getElementById('user-score');
const compScoreDiv = document.getElementById('computer-score');
const resultPara = document.querySelector('.result p');
let userScore = 0;
let compScore = 0;


// choosing the computer move 
function CompChoice(){
    const choice = ['rock', 'paper', 'scissors'];
    let n = Math.floor(Math.random() * 3);
    return choice[n];
}


// results and DOM
function draw(userNewChoice, compNewChoice){
    resultPara.innerHTML = `${userNewChoice} Equals ${compNewChoice}. It's a DRAW`;
}
function win(userNewChoice, compNewChoice){
    resultPara.innerHTML = `${userNewChoice} beats ${compNewChoice}. You WIN`;
    userScore++;
    userScoreDiv.innerHTML = userScore;
}
function lose(userNewChoice, compNewChoice){
    resultPara.innerHTML = `${userNewChoice} lost to ${compNewChoice}. You lost`;
    compScore++;
    compScoreDiv.innerHTML = compScore;
}


// user choices 
function userRock(){
    let compNewChoice = CompChoice();
    let userNewChoice = 'rock'
    if(compNewChoice == userNewChoice){
        draw(userNewChoice, compNewChoice);
    }else if(compNewChoice == 'paper'){
        lose(userNewChoice, compNewChoice);
    }else {
        win(userNewChoice, compNewChoice);
    }
}

function userPaper(){
    let compNewChoice = CompChoice();
    let userNewChoice = 'paper'
    if(compNewChoice == userNewChoice){
        draw(userNewChoice, compNewChoice);
    }else if(compNewChoice == 'rock'){
        win(userNewChoice, compNewChoice)
    }else{
        lose(userNewChoice, compNewChoice);
    }
}

function userScissors(){
    let compNewChoice = CompChoice();
    let userNewChoice = 'scissors'
    if(compNewChoice == userNewChoice){
        draw(userNewChoice, compNewChoice);
    }else if(compNewChoice == 'rock'){
        lose(userNewChoice, compNewChoice);
    }else{
        win(userNewChoice, compNewChoice);
    }
}

rock.addEventListener('click', userRock);
paper.addEventListener('click', userPaper);
scissors.addEventListener('click', userScissors);
