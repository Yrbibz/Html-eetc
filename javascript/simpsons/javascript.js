function verificar() {
    let data = document.getElementById("data").value;
    let img = document.getElementById("imagem"); 
    let resp = document.getElementById("resp"); 

    if (!data) { 
        alert("Por favor, insira sua data de nascimento.");
        return;
    }

    let dataNascimento = new Date(data);
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    let mes = hoje.getMonth() - dataNascimento.getMonth();
    let dia = hoje.getDate() - dataNascimento.getDate();

    
    if (mes < 0 || (mes === 0 && dia < 0)) {
        idade--;
    }

    let generoRadio = document.querySelector('input[name="sexo"]:checked');
    let genero = generoRadio ? generoRadio.id : null; 

    let imagemSrc = "";
    let mensagem = "";

    if (idade <= 2) {
        imagemSrc = genero === "sfem" ? "imgs/maggie.jpg" : "imgs/bebe.jpg";
        mensagem = "Você é um bebê!";
    } else if (idade >= 3 && idade <= 13) {
        imagemSrc = genero === "sfem" ? "imgs/lisa.jpg" : "imgs/bart.jpg";
        mensagem = "Você é uma criança!";
    } else if (idade >= 14 && idade <= 17) {
        imagemSrc = genero === "sfem" ? "imgs/shauna.jpg" : "imgs/jimbo.png";
        mensagem = "Você é um adolescente!";
    } else if (idade >= 18 && idade <= 59) {
        imagemSrc = genero === "sfem" ? "imgs/marge.jpg" : "imgs/homer.jpg";
        mensagem = "Você é um adulto!";
    } else {
        imagemSrc = genero === "sfem" ? "imgs/veia.jpg" : "imgs/abe.jpg";
        mensagem = "Você é um idoso!";
    }

    img.src = imagemSrc;
    img.style.display = "block";
    resp.innerText = mensagem;
}
