function carregar() {
    let agora = new Date();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let horas = document.getElementById('horas');
    let img = document.getElementById('imagem');
    let corpo = document.body; 

    horas.innerText = `Agora são ${hora}:${minuto < 10 ? '0' + minuto : minuto}`;

    if (hora >= 6 && hora < 12) {
        horas.innerText += " - Bom dia!";
        img.src = 'estilo/manha.jpg'
        corpo.style.background = "#F6DABE"
    
    }
    else if(hora >=13 && hora <=18){
        horas.innerText += " - Boa Tarde!";
        img.src = "estilo/tarde.jpg"
        corpo.style.background = "#E67B3C"; 
    }
    else {
        horas.innerText += " - Boa noite!";
        img.src = "estilo/noite.jpg"
        corpo.style.background = "#373C7C"; 
    }
}
