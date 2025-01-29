function calcular() {
   
    let idade = document.getElementById("idade").value;
    let resposta = document.getElementById("resp");
 
   
    if (idade <16 ) {
        resposta.innerHTML = '<p>Você não pode votar</p>';
    } else if(idade >=16 && idade<18 || idade>64) {
        resposta.innerHTML = '<p>Você pode votar</p>';
    }
    else {
        resposta.innerHTML = '<p>Você deve votar</p>';
    }
}