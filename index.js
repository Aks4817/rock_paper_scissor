
const optio=["Rock","Paper","Scissors"];

const score=[0,0];
function compari(a,b){
    if((a=="Rock"&& b=="Paper")||(a=="Scissors"&& b=="Rock")||(a=="Paper"&& b=="Scissors")){
        score[1]++;
        return "Won";
    }
    else if(a===b){
        return "Drawed";
    }
    else{
        score[0]++;
        return "Lost";
    }
}
function getComputerChoice() {
    return optio[Math.floor(Math.random()*2)];
}

function playRound(){
    let playerChoice=prompt("Rock , Paper , Scissors ?");
    let temp=getComputerChoice();
    let state=compari(playerChoice,temp);
    console.log(`The computer played ${temp} and ${state}`);
    
}

for (let i = 0; i < 5; i++) {
    playRound();  
}
if(score[0]>score[1]){
    console.log(`You Won by ${score[0]}- ${score[1]}`);
}
else if(score[0]<score[1]){
    console.log(`Computer Won by ${score[0]}- ${score[1]}`);
}
else{
    console.log("The match was a draw");
}