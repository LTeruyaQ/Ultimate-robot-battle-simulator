//Variaveis
var player1HitPoints = 12, player2HitPoints = 12;
var vencedor;

if(vencedor != null)
document.getElementById("winner").innerHTML = `Vitoria do ${vencedor}!`;

function collision(x1, y1, h1, w1, x2, y2, h2, w2) {

    if (x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        y1 + h1 > y2) {

        Damage();
        return true;
    }

};


function Damage(){

    let damage1 = Math.floor(Math.random()*6);
    let damage2 = Math.floor(Math.random()*6);

    player1HitPoints -= damage1; 
    player2HitPoints -= damage2;

    Victory();
}

function Victory(){
    
    if(player1HitPoints <= 0 || player2HitPoints <= 0){

        if(player1HitPoints <= 0 && player2HitPoints >= 0)
        vencedor = "player 2";

        if(player2HitPoints <= 0 && player1HitPoints >= 0)
        vencedor = "player 1";

        window.location.href = "../victory.html";
    }
    
}