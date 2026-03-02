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
    let posicao = +window.getComputedStyle(mario).bottom.replace('px', ' ')
    console.log(`cano:`, posicaoCano, 'Mario:', posicaoMario);
})