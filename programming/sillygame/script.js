// player object
const Player = {
    element    : document.getElementById("player"),
    x          : 0,
    y          : 0,
    speed      : 5,
    score      : 0,
    updatePos  : function() {
        this.element.style = "top: "+ this.y +"px; left: "+ this.x +"px;";
    },
    updateScore: function() {
        this.element.innerHTML = this.score;
    }
}

// coin object
const Coin = {
    element: document.getElementById("coin"),
    x      : 0,
    y      : 0,
    newPos : function() {
        this.x = Math.floor(Math.random() * 461);
        this.y = Math.floor(Math.random() * 461);
        this.element.style = "top: "+ this.y +"px; left: "+ this.x +"px;";
    }
}

// some functions that need to be called at the start
Coin.newPos();
Player.updateScore();

// checks if player is touching coin enough, updates score and resets coin position
function checkForCoin() {
    if (((Coin.x - Player.x < 5) && (Coin.x - Player.x > -45)) && ((Coin.y - Player.y < 5) && (Coin.y - Player.y > -45))) {
        Player.score += 1;
        Player.updateScore();
        Coin.newPos();
    }
}

// player movement
window.addEventListener("keydown", function(input) {
    if ((input.code == "KeyD") || (input.code == "ArrowRight")) {
        if (Player.x < 460) {
            Player.x += Player.speed;
        }
    } else if ((input.code == "KeyA") || (input.code == "ArrowLeft")) {
        if (Player.x > 0) {
            Player.x -= Player.speed;
        }
    } else if ((input.code == "KeyW") || (input.code == "ArrowUp")) {
        if (Player.y > 0) {
            Player.y -= Player.speed;
        }
    } else if ((input.code == "KeyS") || (input.code == "ArrowDown")) {
        if (Player.y < 460) {
            Player.y += Player.speed;
        }
    }
    Player.updatePos();
    checkForCoin();
});