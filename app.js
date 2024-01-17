let info = document.querySelector(".info");
let currentPlayer="X";
let spaces = document.querySelectorAll(".space");
let winner=null;
let tieGame="false"
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

spaces.forEach(space => {
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
    info.innerHTML = `<p>Au tour de ${currentPlayer}</p>`}
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
        info.innerHTML =`<p>Joueur X, vous remportez la partie</p>`;
        console.log("Winner: X")
    } else if(winner==="O"){
        info.innerHTML =`<p>Joueur O, vous remportez la partie</p>`}
    else if(tieGame===true){
        info.innerHTML =`<p>Match nul</p>`
    } else{return}
}


