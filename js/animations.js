//Animações das teclas
//Animações das teclas wasd
//precionando
document.addEventListener('keydown', function (event) {

  if (event.keyCode == '87') {
    document.getElementById('w').style.backgroundImage = "url(../img/controles/wasd/w-selected.png)";
  }

  if (event.keyCode == '65') {
    document.getElementById('a').style.backgroundImage = "url(../img/controles/wasd/a-selected.png)";
  }

  if (event.keyCode == "83") {
    document.getElementById('s').style.backgroundImage = "url(../img/controles/wasd/s-selected.png)";
  }

  if (event.keyCode == "68") {
    document.getElementById('d').style.backgroundImage = "url(../img/controles/wasd/d-selected.png)";
  }
});

//soltando
document.addEventListener('keyup', function (event) {

  if (event.keyCode == "87") {
    document.getElementById('w').style.backgroundImage = "url(../img/controles/wasd/w.png)";
  }

  if (event.keyCode == "65") {
    document.getElementById('a').style.backgroundImage = "url(../img/controles/wasd/a.png)";
  }

  if (event.keyCode == "83") {
    document.getElementById('s').style.backgroundImage = "url(../img/controles/wasd/s.png)";
  }

  if (event.keyCode == "68") {
    document.getElementById('d').style.backgroundImage = "url(../img/controles/wasd/d.png)";
  }

});

//Animações das teclas wasd
//precionando
document.addEventListener('keydown', function (event) {

  if (event.keyCode == '38') {
    document.getElementById('cima').style.backgroundImage = "url(../img/controles/setas/cima-selected.png)";
  }

  if (event.keyCode == '37') {
    document.getElementById('esquerda').style.backgroundImage = "url(../img/controles/setas/esquerda-selected.png)";
  }

  if (event.keyCode == '40') {
    document.getElementById('baixo').style.backgroundImage = "url(../img/controles/setas/baixo-selected.png)"
  }

  if (event.keyCode == '39') {
    document.getElementById('direita').style.backgroundImage = "url(../img/controles/setas/direita-selected.png)";
  }
});

//soltando
document.addEventListener('keyup', function (event) {

  if (event.keyCode == '38') {
    document.getElementById('cima').style.backgroundImage = "url(../img/controles/setas/cima.png)";
  }

  if (event.keyCode == '37') {
    document.getElementById('esquerda').style.backgroundImage = "url(../img/controles/setas/esquerda.png)";
  }

  if (event.keyCode == '40') {
    document.getElementById('baixo').style.backgroundImage = "url(../img/controles/setas/baixo.png)"
  }

  if (event.keyCode == '39') {
    document.getElementById('direita').style.backgroundImage = "url(../img/controles/setas/direita.png)";
  }
});

//Animações da nave

//Posição Inicial
function AnimationSpritesInicial(tipo) {

  var sprite = new Image();

  if (tipo == 1) {
    sprite.src = "../img/players/nave1/esquerda.png";
  }
  if (tipo == 2) {
    sprite.src = "../img/players/nave2/direita.png";
  }

  return sprite;
}

//sprites da na)ve1
function AnimationSprites1(keyCode) {

  var sprite = new Image();

  if (keyCode == '38') {
    sprite.src = "../img/players/nave1/cima.png";
    return sprite;
  }

  if (keyCode == '37') {
    sprite.src = "../img/players/nave1/esquerda.png";
    return sprite;
  }

  if (keyCode == "40") {
    sprite.src = "../img/players/nave1/baixo.png";
    return sprite;
  }

  if (keyCode == "39") {
    sprite.src = "../img/players/nave1/direita.png";
    return sprite;
  }
};

//sprites na diagonal da nave1
function AnimationDiagonalSprites1(keyCode1, keyCode2) {

  var sprite = new Image();

  if (keyCode1 == '38' && keyCode2 == '37') {
    sprite.src = "../img/players/nave1/diagonalEsquerdaSuperior.png";
    return sprite;
  }

  else if (keyCode1 == '37' && keyCode2 == "40") {
    sprite.src = "../img/players/nave1/diagonalEsquerdaInferior.png";
    return sprite;
  }

  else if (keyCode1 == "40" && keyCode2 == "39") {
    sprite.src = "../img/players/nave1/diagonalDireitaInferior.png";
    return sprite;
  }

  else if (keyCode1 == "39" && keyCode2 == '38') {
    sprite.src = "../img/players/nave1/diagonalDireitaSuperior.png";
    return sprite;
  }
};

//sprites da nave2
function AnimationSprites2(keyCode) {

  var sprite = new Image();

  if (keyCode == '87') {
    sprite.src = "../img/players/nave2/cima.png";
    return sprite;
  }

  if (keyCode == '65') {
    sprite.src = "../img/players/nave2/esquerda.png";
    return sprite;
  }

  if (keyCode == "83") {
    sprite.src = "../img/players/nave2/baixo.png";
    return sprite;
  }

  if (keyCode == "68") {
    sprite.src = "../img/players/nave2/direita.png";
    return sprite;
  }
};

//sprites na diagonal da nave2
function AnimationDiagonalSprites2(keyCode1, keyCode2) {

  var sprite = new Image();

  if (keyCode1 == '87' && keyCode2 == '65') {
    sprite.src = "../img/players/nave2/diagonalEsquerdaSuperior.png";
    return sprite;
  }

  else if (keyCode1 == '65' && keyCode2 == "83") {
    sprite.src = "../img/players/nave2/diagonalEsquerdaInferior.png";
    return sprite;
  }

  else if (keyCode1 == "83" && keyCode2 == "68") {
    sprite.src = "../img/players/nave2/diagonalDireitaInferior.png";
    return sprite;
  }

  else if (keyCode1 == "68" && keyCode2 == '87') {
    sprite.src = "../img/players/nave2/diagonalDireitaSuperior.png";
    return sprite;
  }
};

//Animação Hit Points
function AtualizaVida(vida1, vida2) {

console.log(vida1);
console.log(vida2);

  if (vida1 <= 0) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida1 >= 10 && vida1 < 20) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida1 >= 20 && vida1 < 20) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida1 >= 30 && vida1 < 40) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida1 >= 40 && vida1 < 50) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida1 >= 50 && vida1 < 60) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida1 >= 60 && vida1 < 70) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida1 >= 70 && vida1 < 80) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida1 >= 80 && vida1 < 90) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida1 >= 90) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
  }
  else if (vida1 == 100) {
    document.getElementById(`ht1-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht5-1`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
  }
  
  //   //Animação dos corações do player 2

  if (vida2 <= 0) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida2 >= 10 && vida2 < 20) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida2 >= 20 && vida2 < 30) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida2 >= 30 && vida2 < 40) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida2 >= 40 && vida2 < 50) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida2 >= 50 && vida2 < 60) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida2 >= 60 && vida2 <= 70) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida2 >= 70 && vida2 < 80) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida2 >= 80 && vida2 < 90) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/emptyHeart.png)";
  }
  else if (vida2 >= 90) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/halfHeart.png)";
  }
  else if (vida2 == 100) {
    document.getElementById(`ht1-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht2-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht3-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht4-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
    document.getElementById(`ht5-2`).style.backgroundImage = "url(../img/players/hitPoints/fullHeart.png)";
  }
};

