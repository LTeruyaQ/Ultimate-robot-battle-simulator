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

//tamanho da arena altura 5 e alrgura 11
