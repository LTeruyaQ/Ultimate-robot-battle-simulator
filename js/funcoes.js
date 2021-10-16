(function () {
  const cnv = document.querySelector('#bordaArena');
  const ctx = cnv.getContext('2d');

  //movimentos
  //setas
  let esquerda = false;
  let cima = false;
  let direita = false;
  let baixo = false;

  //wasd
  let a = false;
  let w = false;
  let d = false;
  let s = false;

  // arrays
  const naves = [];
  const teste = [];

  // naves


  teste.push(document.getElementById("player1")) 

  
  const player1 = new naves(20, 10, 100, 100, document.getElementById("player1"), 5);
  naves.push(player1);

  const player2 = new naves(800, 220, 50, 50, texturas("../img/Players/nave2.png"), 0);
  naves.push(player2);

  const quadrado3 = new Quadrado(300, 300, 90, 90, "#0f6", 0);
  quadrados.push(quadrado3);
 
  // pressionar as teclas
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;
    console.log(nomeKey);
    switch (nomeKey) {
      case 'ArrowLeft':
        moveLeft = true;
        break;
      case 'ArrowUp':
        moveUp = true;
        break;
      case 'ArrowRight':
        moveRight = true;
        break;
      case 'ArrowDown':
        moveDown = true;
        break;
    }
  });

//soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    switch (key) {
       case 'ArrowLeft':
         moveLeft = false;
         break;
       case 'ArrowUp':
         moveUp = false;
         break;
       case 'ArrowRight':
         moveRight = false;
         break;
       case 'ArrowDown':
         moveDown = false;
         break;
     }
  });

  function moverQuadrados() {
    if (moveLeft && !moveRight) {
      quadrado1.posX -= quadrado1.velocidade;
    }
    if (moveRight && !moveLeft) {
      quadrado1.posX += quadrado1.velocidade;
    }
    if (moveUp && !moveDown) {
      quadrado1.posY -= quadrado1.velocidade;
    }
    if (moveDown && !moveUp) {
      quadrado1.posY += quadrado1.velocidade;
    }

   //fiixar na tela - NÃO SAI DO CANVAS
    quadrado1.posX = Math.max(0, Math.min(cnv.width - quadrado1.width, quadrado1.posX));
    quadrado1.posY = Math.max(0, Math.min(cnv.height - quadrado1.height, quadrado1.posY));
  }


  function exibirQuadrados() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (const i in quadrados) {
      const spr = quadrados[i];
      ctx.fillStyle = spr.color
      ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
    }
  }
  //solicitar uma animação ao browser e chamar a função
  //que é a propria função atualizarTela
  function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, cnv);
    moverQuadrados();
    exibirQuadrados();
  }
  atualizarTela();  

  
  imgPlayer1 = document.createElement("player1").src = "../img/Players/nave2.png";

}());