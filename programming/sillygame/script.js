const Player = {
    element  : document.getElementById("player"),
    x        : 0,
    y        : 0,
    speed    : 5,
    updatePos: function() {
        this.element.style = "top: "+ this.y +"; left:"+ this.x +";";
    },
    moveRight: function() {
        this.x += this.speed;
        this.updatePos();
    }
}

window.addEventListener("keydown", decode);

function decode(input) {
    if (input.code == "KeyD" || input.code == "ArrowRight") {
        Player.moveRight()
    }
}