const rockbtn=document.getElementById('rock-btn')
const paperbtn=document.getElementById('paper-btn')
const scissorbtn=document.getElementById('scissor-btn')

const userchoice= document.getElementById('user-choice')
const computerchoice= document.getElementById('computer-choice')
const result= document.getElementById('result')

const userScore = document.getElementById('user-score')
const computerScore = document.getElementById('computer-score')

let usrScore = 0;
let cmprScore = 0;

const increment = (string) => {
    if (string==="Computer"){
        cmprScore++;
        computerScore.innerHTML=cmprScore;
    }
    else if(string ==='User'){
       usrScore++;
       userScore.innerHTML=usrScore;
    }
};
const runGame = (name) =>{
const userInput = (name);
const values = ['Rock', 'Paper', 'Scissor'];
const randomNumber = Math.floor(Math.random() * 3); 
const computerInput = values[randomNumber];
userchoice.innerHTML= "You Choosed " + userInput;
computerchoice.innerHTML= "Computer Choosed " + computerInput; 
if (userInput === "Rock"){
    if(computerInput==="Rock"){
        result.innerHTML="Draw";
    }
    else if(computerInput==="Paper"){
    result.innerHTML="You Loose";
    increment('Computer')
    }
 
else{
    result.innerHTML="You Win";
    increment('User')

}
 if (userInput === "Paper"){
    if(computerInput==="Rock"){
        result.innerHTML="You Win";
      increment('User')
    }
    else if(computerInput==="Paper"){
    result.innerHTML="Draw";
    }
 
else{
    result.innerHTML="You Loose";
    increment('Computer')
}
}
}
 if (userInput === "Scissor"){
    if(computerInput==="Rock"){
        result.innerHTML="You Loose";
        increment('Computer')
    }
else if(computerInput==="Paper"){
    result.innerHTML="You Win";
    increment('User')
    }
 
else{
    result.innerHTML="You Loose";
}
}
}
rockbtn.addEventListener('click', ()=>{
    runGame('Rock')
})
paperbtn.addEventListener('click', ()=>{
    runGame('Paper')
})
scissorbtn.addEventListener('click', ()=>{
    runGame('Scissor')
}
)