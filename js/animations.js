document.addEventListener('keydown', function(event) {

  if(event.keyCode == '87'){
    document.getElementById('w').style.backgroundImage = "url(../img/Controles/wasd/w-selected.png)";
  }

  if(event.keyCode == '65'){
    document.getElementById('a').style.backgroundImage = "url(../img/Controles/wasd/a-selected.png)";
  }

  if(event.keyCode == "83"){
    document.getElementById('s').style.backgroundImage = "url(../img/Controles/wasd/s-selected.png)";
  }

  if(event.keyCode == "68"){
    document.getElementById('d').style.backgroundImage = "url(../img/Controles/wasd/d-selected.png)";
  }
});

document.addEventListener('keyup', function(event) {

  if(event.keyCode == "87"){
  document.getElementById('w').style.backgroundImage = "url(../img/Controles/wasd/w.png)";
  }

  if(event.keyCode == "65"){
    document.getElementById('a').style.backgroundImage = "url(../img/Controles/wasd/a.png)";
  }

  if(event.keyCode == "83"){
    document.getElementById('s').style.backgroundImage = "url(../img/Controles/wasd/s.png)";
  }

  if(event.keyCode == "68"){
    document.getElementById('d').style.backgroundImage = "url(../img/Controles/wasd/d.png)";
  }

});

document.addEventListener('keydown', function(event) {

  if(event.keyCode == '38'){
    document.getElementById('cima').style.backgroundImage = "url(../img/Controles/setas/cima-selected.png)";
  }

  if(event.keyCode == '37'){
    document.getElementById('esquerda').style.backgroundImage = "url(../img/Controles/setas/esquerda-selected.png)";
  }

  if(event.keyCode == '40'){
    document.getElementById('baixo').style.backgroundImage = "url(../img/Controles/setas/baixo-selected.png)"
  }

  if(event.keyCode == '39'){
    document.getElementById('direita').style.backgroundImage = "url(../img/Controles/setas/direita-selected.png)";
  }
});

document.addEventListener('keyup', function(event) {

  if(event.keyCode == '38'){
    document.getElementById('cima').style.backgroundImage = "url(../img/Controles/setas/cima.png)";
  }

  if(event.keyCode == '37'){
    document.getElementById('esquerda').style.backgroundImage = "url(../img/Controles/setas/esquerda.png)";
  }

  if(event.keyCode == '40'){
    document.getElementById('baixo').style.backgroundImage = "url(../img/Controles/setas/baixo.png)"
  }

  if(event.keyCode == '39'){
    document.getElementById('direita').style.backgroundImage = "url(../img/Controles/setas/direita.png)";
  }
});

//Animações da nave

function AnimationSpritesInicial (sprite, tipo){
if(sprite.src == "" && tipo == 1){
  sprite.src = "../img/Players/nave1/cima.png";
}
if(sprite.src == "" && tipo == 1){
  sprite.src = "../img/Players/nave2/cima.png";
}
return sprite;
}

function AnimationSprites1 (keyCode){

  var sprite = new Image();

  if(keyCode == '38'){
    sprite.src = "../img/Players/nave1/cima.png";
    return sprite;
  }

  if(keyCode == '37'){
    sprite.src = "../img/Players/nave1/esquerda.png";
    return sprite;
  }

  if(keyCode == "40"){
    sprite.src = "../img/Players/nave1/baixo.png";
    return sprite;
  }

  if(keyCode == "39"){
    sprite.src = "../img/Players/nave1/direita.png";
    return sprite;
  }

  if(keyCode == '87' && keyCode == '65'){
    sprite.src = "../img/Players/nave1/diagonalEsquerdaSuperior.png";
    return sprite;
  }

  else if(keyCode == '65' && keyCode == "83"){
    sprite.src = "../img/Players/nave1/diagonalEsquerdaInferior.png";
    return sprite;
  }

  else if(keyCode == "83" && keyCode == "68" ){
    sprite.src = "../img/Players/nave1/diagonalDireitaInferior.png";
    return sprite;
  }

  else if(keyCode == "68" && keyCode == '87'){
    sprite.src = "../img/Players/nave1/diagonalDireitaSuperior.png";
    return sprite;
  }
};


function AnimationSprites2 (keyCode, sprite){

  if(keyCode == '87'){
    sprite.src = "../img/Players/nave2/cima.png";
    return sprite;
  }

  if(keyCode == '65'){
    sprite.src = "../img/Players/nave2/esquerda.png";
    return sprite;
  }

  if(keyCode == "83"){
    sprite.src = "../img/Players/nave2/baixo.png";
    return sprite;
  }

  if(keyCode == "68"){
    sprite.src = "../img/Players/nave2/direita.png";
    return sprite;
  }

  if(keyCode == '87' && keyCode == '65'){
    sprite.src = "../img/Players/nave2/diagonalEsquerdaSuperior.png";
    return sprite;
  }

  else if(keyCode == '65' && keyCode == "83"){
    sprite.src = "../img/Players/nave2/diagonalEsquerdaInferior.png";
    return sprite;
  }

  else if(keyCode == "83" && keyCode == "68" ){
    sprite.src = "../img/Players/nave2/diagonalDireitaInferior.png";
    return sprite;
  }

  else if(keyCode == "68" && keyCode == '87'){
    sprite.src = "../img/Players/nave2/diagonalDireitaSuperior.png";
    return sprite;
  }
};
