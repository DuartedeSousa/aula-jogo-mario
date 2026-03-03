//JOFO DO MARIO
//===========================================
//Criação de variáveis para encontrar classes.
let mario = document.querySelector('.mario'); //Encontrar o Mario
let cano = document.querySelector('.cano'); //Encontra o cano
let nuvem = document.querySelector('.nuvem'); //Encontra a nuvem
let telaFim = document.querySelector('.fim'); //Encontra a tela de game over
let botaoReiniciar = document.querySelector('.reiniciar'); //Encontra o botão

console.log('=== PARADA 01 ===');
console.log('Mario:', mario);
console.log('Cano:', cano);
console.log('Nuvem:', nuvem);
console.log('Tela de Fim:', telaFim);
console.log('Botão:',botaoReiniciar);

function pular(){
    mario.classList.add('pular')

    //setTimeout - espera um tempo e depois exacuta algo
    setTimeout (function(){
        //desta forma o Mario volta ao normal depois do pulo
        mario.classList.remove('pular')
    }, 500) //500 milissegundos = 0,5 segundos
}

document.addEventListener('keydown', function(){
    //Mostra no console quando a tecla é pressionada
    console.log(`Tecla pressionada chamando função pular()`)

    //Qual function devo chamar?
    pular();
});

//Faça funcionar com um clique na tela
document.addEventListener('click', function(){
    console.log(`Tecla pressionada chamando função pular()`)
    pular();
});

console.log(`====== INICIANDO O LOOP DO JOGO ======`);
console.log(`Agora o jogo vai começar a verificar a colisão....`)

let loopDoJogo = setInterval(function(){

    //offsetLeft: Distância do elemento até a borda esquerda da tela
    let posicaoCano = cano.offsetLeft;

    // getComputeStyle = pega o estilo atual do elemento
    // replace tira o 'px' do valor e o + na frente transforma em número

    //---> +window.getComputedStyle(mario)
    //---> Pergunta ao navegador: "Qual é a posição atual do Mario na tela"
    //---> .bottom
    //---> Pega a distância do Mario (em pixels)
    //---> .replace
    //---> Tira o px, deixando só o número:"120"
    //---> +window, só o +
    //---> transforma o "120" no número 120, para o JS fazer contas
    let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', ' ');

    //console.log(`cano:`, posicaoCano, 'Mario:', posicaoMario);

    //CONDIÇÔES DE COLISÃO
    // O if pergunta 3 coisas AO MESMO TEMPO:
    // 1. O cano está perto do Mario? (posicaoCano <= 100)
    // 2. O cano ainda está na tela? (posicaoCano > 0)
    // 3. O Merio está no chão? (posicaoMario < 60 - não pulou)
    //Se TODAS as 3 forem verdade, o Mario bateu!
    
    if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 60) {
        console.log(`=== COLISÃO DETECTADA! ===`);
        console.log(`Cano na posição`, posicaoCano);
        console.log(`Mario na posição`, posicaoMario);
        console.log('Fim de Jogo');

        //Agora que o Mario bateu, precisamos:
        // 1. Parar o cano (animation = 'none')
        // 2. Parar o Mario (animation = 'none')
        // 3. Trocar a imagem do Mario
        // 4. Mostrar a tela de game over
        // 5. Parar o loop (clearInterval)

        //PARA O CANO
        cano.style.animation = `none`
        cano.style.left = posicaoCano + `px`;

        //PARA O MARIO
        mario.style.animation = `none`
        mario.style.left = posicaoMario + `px`;

        //TROCA A IMAGM DO MARIO PARA GAME OVER
        mario.src = `./img/game-over.png`;
        mario.style.width = `70px`;

        //MOSTRAR A TELA DE GAME OVER
        telaFim.style.visibility = 'visible';
        //Parar o loop
        clearInterval(loopDoJogo);

    }
}, 10) //10 milissegundos







//FUNÇÃO PARA REINICIAR
function reiniciarJogo(){
    console.log('=== REINICIANDO JOGO ===');

    //ESCONDER A TELA DE GAME OVER
    telaFim.styel.visibility = `hidden`;

    //RESTAURAR O CANO
    cano.style.animation = `mexexCano 1.5s infinite linear`;
    cano.style.left = ``;

    //RESTAURA O MARIO
    mario.src = `mario.gif`;
    mario.style.width = `130px`;
    mario.style.bottom = `0px`;
    mario.style.animation = ``; //remove qualquer animação fixa


    //===============================
    // >> CRIAR UM NOVO LOOP <<
    //===============================

    loopJogo = setInterval(function(){
        let posicaoCano = cano.offsetLeft;
        let posicaoMario = +window.getComputedStyle(mario).bottom.replace(`px`,``)

        //A MESMA CONDIÇÃO DE COLISÃO
        if (posicaoCano <=100 && posicaoCano > 0 && posicaoMario < 60){
            console.log(`===== COLISÃO NO JOGO REINICIANDO`);

            cano.style.animation = `none`;
            cano.style.left = posicaoCano + `px`;

            mario.style.animation = `none`;
            mario.style.bottom = posicaoMario + `px`;
            mario.src = `./img/game-over.png`;
            mario.style.width = `70px`;

            telaFim.style.visibility = `visible`;

            clearInterval(loopDoJogo);

        }
    }, 10);

    //FAZER O BOTÃO DE REINICIAR
    botaoReiniciar.addEventListener(`click`, function(){
        console.log(`Botão Reiniciar Clicado!`);
        reiniciarJogo();
    });
}