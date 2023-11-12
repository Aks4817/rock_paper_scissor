// console.log("ila");

const buttons=document.querySelectorAll('.btn')
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        playRound(button.id);
    });
});

function symbol(word){
    if(word=="Rock") return '✊';
    else if(word=="Paper")return '🖐️';
    else return'✌️';
}
const optio=["Rock","Paper","Scissors"];

const score=[0,0];

function compari(a,b){
    if((a=="Rock"&& b=="Paper")||(a=="Scissors"&& b=="Rock")||(a=="Paper"&& b=="Scissors")){
        score[1]++;
        return "Won";
    }
    else if(a===b){
        return "Tie";
    }
    else{
        score[0]++;
        return "Lost";
    }
}

function getComputerChoice() {
    return optio[Math.floor(Math.random()*3)];
}


function playRound(playerChoice){
    let temp=getComputerChoice();
    let state=compari(playerChoice,temp);   //won if computer won
    // console.log(`The computer played ${temp} and ${state}`);

    const computer_score=document.querySelector('#computer_score');
    computer_score.textContent=score[1];

    const player_score=document.querySelector('#player_score');
    player_score.textContent=score[0];

    const player_choice=document.querySelector('#player_choice');
    player_choice.textContent=symbol(playerChoice);
    
    const computer_choice=document.querySelector('#computer_choice');
    computer_choice.textContent=symbol(temp);
    
    const round_result=document.querySelector('#round_result');
    const round_desc=document.querySelector('.result_desc');

    if(state=="Won"){
        round_result.textContent="You Lost !";
        round_desc.textContent=`${temp} beats ${playerChoice}`;
    }
    else if(state=="Tie"){
        round_result.textContent="It's a Tie !";
        round_desc.textContent=`${temp} ties ${playerChoice}`;
    }
    else{
        round_result.textContent="You Won! ";
        round_desc.textContent=`${playerChoice} beats ${temp}`;
        
    }

    if(score[1]==5){
        alert("Computer Won.Play Again?? ");
        location.reload();
    }
    if(score[0]==5){
        alert("Player won.Play Again??");
        location.reload();
    }
    
}

