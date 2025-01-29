function verifica() {
    let numero = document.getElementById("num").value;
    numero = Number(numero);
    let resposta = document.getElementById("resp");

    let num;

    switch (numero) {
        case 1:
            num = "pato";
            break;
        case 2:
            num = "doninha";
            break;
        case 3:
            num = "cachorro";
            break;
        case 4:
            num = "gato";
            break;
        case 5:
            num = "leopardo";
            break;
        case 6:
            num = "coelho";
            break;
        case 7:
            num = "raposa";
            break;
        default:
            num = null;
            break;
    }

    if (num) {
        resposta.innerHTML = `<p style="color: blue;">O correspondente é <strong>${num}</strong>.</p>`;
    } else {
        resposta.innerHTML = `<p style="color: red;">Por favor, digite um número entre 1 e 7.</p>`;
    }
}
 