let mainContainer=document.querySelector(".main-container");
let winnerInfo = document.querySelector(".winner-info");
let replayInfo = document.querySelector(".replay-div");
let info = document.querySelector(".info");
let currentPlayer="X";
let spaces = document.querySelectorAll(".space");
let winner=null;
let tieGame="false";
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
winnerInfo.textContent = "Au tour de " + currentPlayer;

spaces.forEach(space => {
    space.addEventListener("mouseover", ()=>{
        space.style.border ="0.5px solid black"
    })
    space.addEventListener('mouseleave',()=>{
        space.style.border =""
    })
    space.addEventListener("click", ()=>{
        if (currentPlayer=="X"){
        space.textContent="X";} else{
            space.textContent="O"
        };
        checkForVictory();
        switchPlayer();
        determineTie();
        displayWinner();
    })
    
});


function switchPlayer(){
    if(winner==="X" || winner==="O" ||tieGame===true)
    {return} else{
    currentPlayer = currentPlayer==="X"?"O" : "X";
    winnerInfo.textContent = "Au tour de " + currentPlayer;
}
}

function checkForVictory() {
    for (let winningCombination of winningCombinations) {
        const [a, b, c] = winningCombination;
        if (spaces[a].textContent === "X" && spaces[b].textContent === "X" && spaces[c].textContent === "X") {

            return winner ="X"
        } else if (spaces[a].textContent === "O" && spaces[b].textContent === "O" && spaces[c].textContent === "O") {
            return winner="O"
        }
    }
}

function determineTie() {
    for (let i = 0; i < 9; i++) {
        if (spaces[i].textContent === " ") {
            return;
        }
    }
    return tieGame=true}

function displayWinner(){
    if(winner==="X"){
        winnerInfo.textContent ="Joueur X, vous remportez la partie";
        endGame();
    } else if(winner==="O"){
        winnerInfo.textContent ="Joueur O, vous remportez la partie";
        endGame();}
    else if(tieGame===true){
        winnerInfo.textContent ="Match nul";
        endGame();
    } else{return}
}

function endGame(){
    mainContainer.innerHTML=``
    info.style.backgroundColor="rgb(237, 210, 255)";
    info.style.color="black";
    info.style.display="flex"
}

