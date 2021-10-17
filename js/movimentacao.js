(function () {
  const cnv = document.querySelector('#bordaArena');
  const ctx = cnv.getContext('2d');

  //Sprites
  var spritePlayer1 = new Image();
  var spritePlayer2 = new Image(); 

  spritePlayer1 = AnimationSpritesInicial(spritePlayer1, 1);
  spritePlayer2 = AnimationSpritesInicial(spritePlayer1, 2);

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

  // naves
  const player1 = new Naves(0, 0, 25, 25, spritePlayer1, 2);
  naves.push(player1);

  const player2 = new Naves(800, 220, 50, 50, spritePlayer2, 5);
  naves.push(player2);
 
  // pressionar as teclas
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;

    switch (nomeKey) {
      case 'ArrowLeft':
        esquerda = true;
        naves[0].img = AnimationSprites1(e.keyCode);
        break;
      case 'ArrowUp':
        cima = true;
        naves[0].img = AnimationSprites1(e.keyCode);
        break;
      case 'ArrowRight':
        direita = true;
        naves[0].img = AnimationSprites1(e.keyCode);
        break;
      case 'ArrowDown':
        baixo = true;
        naves[0].img = AnimationSprites1(e.keyCode);
        break;
    }
  });

//soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    switch (key) {
       case 'ArrowLeft':
         esquerda = false;
         break;
       case 'ArrowUp':
         cima = false;
         break;
       case 'ArrowRight': 
         direita = false;
         break;
       case 'ArrowDown':
         baixo = false;
         break;
     }
  });

  function moverSprites() {
    if (esquerda && !direita) {
      player1.posX -= player1.velocidade;
    }
    if (direita && !esquerda) {
      player1.posX += player1.velocidade;
    }
    if (cima && !baixo) {
      player1.posY -= player1.velocidade;
    }
    if (baixo && !cima) {
      player1.posY += player1.velocidade;
    }

   //fiixar na tela - NÃO SAI DO CANVAS
   player1.posX = Math.max(0, Math.min(cnv.width - player1.width, player1.posX));
   player1.posY = Math.max(0, Math.min(cnv.height - player1.height, player1.posY));
  }

  function exibirSprites() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (const i in naves) {
      const spr = naves[i];
      console.log(spr.img);
      ctx.drawImage(spr.img, spr.posX, spr.posY, spr.width, spr.height);
    }
  }

  function atualizaTela() {
    window.requestAnimationFrame(atualizaTela, cnv);
    moverSprites();
    exibirSprites();
  }
  atualizaTela();  
}());