let info = document.querySelector(".info");

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

let currentPlayer="X"
let spaces =document.querySelectorAll(".space");


function switchPlayer(){
    currentPlayer = currentPlayer==="X"?"O" : "X";
    info.innerHTML = `<p>Au tour de ${currentPlayer}</p>`
}

spaces.forEach(space => {
    space.addEventListener("click", ()=>{
        if (currentPlayer=="X"){
        space.textContent="X";} else{
            space.textContent="O"
        }
        switchPlayer()
    })
    
});