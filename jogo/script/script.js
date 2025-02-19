var altura = 0;
var largura = 0;

function ajustarPalco() {
    //Guardando valores de altura e largura da tela
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log("Largura:", largura, "Altura:", altura)

}

ajustarPalco();

function posRandomica(){

    //remover o papaleguas caso ja exista
    if(document.getElementById('tempoPL)')){ 
        document.getElementById('tempoPL').remove();

    document.getElementById("v1").src = "imgs/coracaovazio.png";
}

    //Randomizando posição do papaleguas na tela
    var posx = Math.floor(Math.random() * largura)-100;
    var posy = Math.floor(Math.random() * altura)-100;

    //Validador para que não tenha posições negativas
    posx = posx < 0 ? 0: posx;
    posy = posy < 0 ? 0: posy;
    console.log(posx, posy);

    //Criando o elemento na tela
    var papaleguas = document.createElement('img');
    papaleguas.src = "imgs/papaleguas.png";

    //Inserindo elemento na tela
    document.body.appendChild(papaleguas);


    papaleguas.className = tamanhoPapaleguas()+ ' '+ ladoAleatorio();
    papaleguas.style.left = `${posx}px`;
    papaleguas.style.top = `${posy}px`;
    papaleguas.style.position = 'absolute';
    papaleguas. ='tempoPL';

    console.log(ladoAleatorio());

    papaleguas.onclick = function() {
        this.remove();
    }
}



function tamanhoPapaleguas(){
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return "pl1";
        case 1:
            return "pl2";
        case 2:
            return "pl3";
    }
}

function ladoAleatorio(){
    var classe=Math.floor(Math.random()*2);
    
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}