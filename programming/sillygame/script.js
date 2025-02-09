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
        if ((score == 10) || (score == 20)) {
            Sped.show();
        }
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

const Sped = {
    element: document.getElementById("sped"),
    x      : 0,
    y      : 0,
    visible: false,
    show   : function() {
        this.x = Math.floor(Math.random() * 461);
        this.y = Math.floor(Math.random() * 461);
        this.visible = true;
        this.element.style = "top: "+ this.y +"px; left: "+ this.x +"px; display: initial;";
    },
    hide   : function() {
        this.element.style = "display: none;";
        this.visible = false;
    }
}

// some functions that need to be called at the start
Coin.newPos();
Player.updateScore();

// checks if player is touching coin enough, updates score and resets coin position
function checkForCoin() {
    if (((Coin.x - Player.x < 40) && (Coin.x - Player.x > -40)) && ((Coin.y - Player.y < 40) && (Coin.y - Player.y > -40))) {
        Player.score += 1;
        Player.updateScore();
        Coin.newPos();
    }
}

// checks if player is touching sped enough and sped is actually visible, updates speed and hides sped
function checkForSped() {
    if (((Sped.x - Player.x < 40) && (Sped.x - Player.x > -40)) && ((Sped.y - Player.y < 40) && (Sped.y - Player.y > -40)) && (Sped.visible = true)) {
        Player.speed *= 2;
        Sped.hide();
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
    checkForSped();
});