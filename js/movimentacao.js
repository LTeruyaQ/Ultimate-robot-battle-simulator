(function () {
  const cnv = document.querySelector('#bordaArena');
  const ctx = cnv.getContext('2d');

  //Sprites
  var spritePlayer1 = new Image();
  var spritePlayer2 = new Image();

  spritePlayer1 = AnimationSpritesInicial(spritePlayer1, 1);
  spritePlayer2 = AnimationSpritesInicial(spritePlayer2, 2);

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

  //sistema para detectar mais de uma tecla pressionada
  var map = [];
  onkeydown = onkeyup = function (e) {
    e = e || event;
    map[e.keyCode] = e.type == 'keydown';
  }

  // naves
  const player1 = new Naves(275, 60, 25, 25, spritePlayer1, 2);
  naves.push(player1);

  const player2 = new Naves(0, 60, 25, 25, spritePlayer2, 2);
  naves.push(player2);

  // Movimentação da nave 1
  // pressionar as teclas

  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;

    switch (nomeKey) {
      case 'ArrowLeft':
        esquerda = true;
        break;
      case 'ArrowUp':
        cima = true;
        break;
      case 'ArrowRight':
        direita = true;
        break;
      case 'ArrowDown':
        baixo = true;
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

  //Animações
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;

    if (map[38] && map[37]) {
      naves[0].img = AnimationDiagonalSprites1('38', '37');
    } else if (map[37] && map[40]) {
      naves[0].img = AnimationDiagonalSprites1('37', '40');
    } else if (map[40] && map[39]) {
      naves[0].img = AnimationDiagonalSprites1('40', '39');
    } else if (map[39] && map[38]) {
      naves[0].img = AnimationDiagonalSprites1('39', '38');
    } else if (map[38]) {
      naves[0].img = AnimationSprites1('38');
    } else if (map[37]) {
      naves[0].img = AnimationSprites1('37');
    } else if (map[40]) {
      naves[0].img = AnimationSprites1('40');
    } else if (map[39]) {
      naves[0].img = AnimationSprites1('39');
    }
  });

  //Movimenta nave1
  function moverSprites1() {
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

    player1.posX = Math.max(0, Math.min(cnv.width - player1.width, player1.posX));
    player1.posY = Math.max(0, Math.min(cnv.height - player1.height, player1.posY));
  }

  //Movimentação da nave 2
  // pressionar as teclas
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;

    switch (nomeKey) {
      case 'w':
        w = true;
        break;
      case 'a':
        a = true;
        break;
      case 's':
        s = true;
        break;
      case 'd':
        d = true;
        break;
    }
  });

//soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    switch (key) {
      case 'w':
        w = false;
        break;
      case 'a':
        a = false;
        break;
      case 's':
        s = false;
        break;
      case 'd':
        d = false;
        break;
    }
  });

  //Animação
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;

    if (map[87] && map[65]) { 
      naves[1].img = AnimationDiagonalSprites2('87', '65');
    } else if (map[65] && map[83]) {
      naves[1].img = AnimationDiagonalSprites2('65', '83');
    } else if (map[83] && map[68]) {
      naves[1].img = AnimationDiagonalSprites2('83', '68');
    } else if (map[68] && map[87]) {
      naves[1].img = AnimationDiagonalSprites2('68', '87');
    } else if (map[87]) {
      naves[1].img = AnimationSprites2('87');
    } else if (map[65]) {
      naves[1].img = AnimationSprites2('65');
    } else if (map[83]) {
      naves[1].img = AnimationSprites2('83');
    } else if (map[68]) {
      naves[1].img = AnimationSprites2('68');
    }
  });

  //movimenta as nave2
  function moverSprites2() {
    if (a && !d) {
      player2.posX -= player2.velocidade;
    }
    if (d && !a) {
      player2.posX += player2.velocidade;
    }
    if (w && !s) {
      player2.posY -= player2.velocidade;
    }
    if (s && !w) {
      player2.posY += player2.velocidade;
    }

    player2.posX = Math.max(0, Math.min(cnv.width - player2.width, player2.posX));
    player2.posY = Math.max(0, Math.min(cnv.height - player2.height, player2.posY));
  }

  //Exibição
  function exibirSprites() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (const i in naves) {
      const spr = naves[i];
      ctx.drawImage(spr.img, spr.posX, spr.posY, spr.width, spr.height);
    }
  }

  function atualizaTela() {
    window.requestAnimationFrame(atualizaTela, cnv);
    moverSprites1();
    moverSprites2();
    exibirSprites();
  }
  atualizaTela();
}());