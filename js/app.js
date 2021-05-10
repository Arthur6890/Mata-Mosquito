
// ajustando tamanho tela
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 100;
let criaMosquitoTempo = 1500; 
let nivel = window.location.search.replace('?','')


if(nivel === 'normal'){
    criaMosquitoTempo = criaMosquitoTempo

}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000

}else if(nivel === 'impossivel'){
    criaMosquitoTempo = 500
    
}

// musica de fundo primeira tela


// setando tamanho da tela para tudo acontecer dentro da tela do usuario
function ajustaTamanhoPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(`essas sao as alturas e larguras ${altura}, ${largura}`)
}

ajustaTamanhoPalco();

// setando tempo
let cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 1){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "vitoria.html"
    }
    document.getElementById('cronometro').innerHTML = tempo
    
}, 1000)
// criando mosquito em posição aletaroria
function posicaoRandomica(){

    // setando vidas
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = "game_over.html"
        }else{
            document.getElementById(`v${vidas}`).src = "img/coracao_vazio.png";
            vidas++
        }
        
    }

    // setando coordenadas
    let positionX = Math.floor(Math.random() * largura) - 100;
    let positionY = Math.floor(Math.random() * altura) - 100;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(`essas sao as coordenadas ${positionY}, ${positionX}`)


    // propriedades do mosquito
    let mosquito = document.createElement("img")
    mosquito.src = "img/mosca.png"
    mosquito.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`
    mosquito.style.left = `${positionX}px`
    mosquito.style.top = `${positionY}px`
    mosquito.style.position = `absolute`
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}

// setando tamanho do mosquito
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

    }
}

// setando espelhamento do mosquito
function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'


    }
}
