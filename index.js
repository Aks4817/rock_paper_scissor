console.log("ila");

const buttons=document.querySelectorAll('.btn')
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        alert(button.id);
    });
});

// const optio=["Rock","Paper","Scissors"];
// const score=[0,0];

// function compari(a,b){
//     if((a=="Rock"&& b=="Paper")||(a=="Scissors"&& b=="Rock")||(a=="Paper"&& b=="Scissors")){
//         score[1]++;
//         return "Won";
//     }
//     else if(a===b){
//         return "Drawed";
//     }
//     else{
//         score[0]++;
//         return "Lost";
//     }
// }
// function getComputerChoice() {
//     return optio[Math.floor(Math.random()*2)];
// }


// function playRound(){
//     let playerChoice=getPlayerChoice();
//     let temp=getComputerChoice();
//     let state=compari(playerChoice,temp);
//     console.log(`The computer played ${temp} and ${state}`);
    
// }

