let numeros = [];
function adicionar() {
    let num = parseInt(document.getElementById("fnum").value);
    let lista = document.getElementById("flista");
    let res = document.getElementById("res");
    if (isNaN(num) || num < 1 || num > 100) {
        window.alert("Digite um número entre 1 e 100");
    } else if (!numeros.includes(num)) {
        numeros.push(num);
        let option = document.createElement("option");
        option.textContent = `Valor ${num} adicionado.`;
        lista.appendChild(option);
        res.innerHTML = "";
    } else {
        window.alert("Número já adicionado!");
    }
    document.getElementById("fnum").value = "";
}
function finalizar() {
    let res = document.getElementById("res");
    if (numeros.length == 0) {
        res.innerHTML = "<p>Adicione valores antes</p>";
        return;
    }
    let total = numeros.length;
    let maior = numeros[0];
    let menor = numeros[0];
    let soma = 0;
    for (let i = 0; i < total; i++) {
        let valor = numeros[i];
        if (valor > maior) {
            maior = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
        soma += valor;
    }
    let media = soma / total;
    res.innerHTML = `
        <p>Quantidade de números: <strong>${total}</strong></p>
        <p>Maior número: <strong>${maior}</strong></p>
        <p>Menor número: <strong>${menor}</strong></p>
        <p>Soma dos valores: <strong>${soma}</strong></p>
        <p>Média dos valores: <strong>${media.toFixed(2)}</strong></p>
    `;
}