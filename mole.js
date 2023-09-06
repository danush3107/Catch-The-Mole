let currMoleTile;
let currPlantTile;
let score = 0;
let timeLimit = 60; // 60 seconds
let timer;
let gameOver = false;

window.onload = function() {
    setGame();
    startTimer();
}

function setGame() {
    // Set up the grid in HTML
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); // Every 1 second call setMole
    setInterval(setPlant, 2000); // Every 2 seconds call setPlant
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (this == currPlantTile) {
        endGame();
    }
}

function startTimer() {
    timer = setInterval(updateTimer, 1000); // Update timer every second
}

function updateTimer() {
    if (timeLimit > 0) {
        timeLimit--;
        document.getElementById("timer").innerText = "Time: " + timeLimit + "s";
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    gameOver = true;
    document.getElementById("score").innerText = "GAME OVER: " + score.toString();
    // You can also display a game over screen here and offer a restart option.
}




    
  