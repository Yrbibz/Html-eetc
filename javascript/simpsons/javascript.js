function verificar() {
    let inputData = document.getElementById("data").value;
    let img = document.getElementById("imagem"); 
    let resp = document.getElementById("resp"); 

    if (!inputData) { 
        alert("Por favor, insira sua data de nascimento.");
        return;
    }

    let dataNascimento = new Date(inputData); 
    let anoNascimento = dataNascimento.getFullYear(); 
    let anoAtual = new Date().getFullYear(); 
    let idade = anoAtual - anoNascimento; 
    let genero = document.querySelector('input[name="sexo"]:checked').id; 

    if (idade <= 2) {
        if (genero === "sfem") {
            img.src = "imgs/maggie.jpg"; 
        } else {
            img.src = "imgs/bebe.jpg"; 
        }
        img.style.display = "block"; 
        resp.innerText = "Você é bebê!";
    } else if (idade >= 3 && idade <= 13) {
        if (genero === "sfem") {
            img.src = "imgs/lisa.jpg"; 
        } else {
            img.src = "imgs/bart.jpg"; 
        }
        resp.innerText = "Você é criança!";
    } else if (idade >= 14 && idade <= 17) {
        if (genero === "sfem") {
            img.src = "imgs/shauna.webp"; 
        } else {
            img.src = "imgs/jimbo.png"; 
        }
        resp.innerText = "Você é adolescente!";
    } else if (idade >= 18 && idade <= 59) {
        if (genero === "sfem") {
            img.src = "imgs/marge.jpg"; 
        } else {
            img.src = "imgs/homer.jpg"; 
        }
        resp.innerText = "Você é adulto!";
    } else if (idade >= 60) {
        if (genero === "sfem") {
            img.src = "imgs/veia.jpg"; 
        } else {
            img.src = "imgs/abe.jpg"; 
        }
        resp.innerText = "Você é idoso!";
    }
    

}

