// player object
const Player = {
    element  : document.getElementById("player"),
    x        : 0,
    y        : 0,
    speed    : 5,
    updatePos: function() {
        this.element.style = "top: "+ this.y +"px; left:"+ this.x +"px;";
    },
    moveRight: function() {
        if (this.x < 500) {
            this.x += this.speed;
        }
        this.updatePos();
    }
}

// movement
window.addEventListener("keydown", function(input) {
    if ((input.code == "KeyD") || (input.code == "ArrowRight")) {
        if (Player.x < 500) {
            Player.x += Player.speed;
        }
    } else if ((input.code == "KeyA") || (input.code == "ArrowLeft")) {
        if (Player.x > 0) {
            Player.x += Player.speed;
        }
    }
    Player.updatePos();
});