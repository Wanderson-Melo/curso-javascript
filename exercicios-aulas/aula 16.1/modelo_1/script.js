//Variáveis
var entrada = document.getElementById('entrada');
var vetor = [];
var respostas = document.getElementById('respostas');

function adicionar(){
    if(entrada.value.length == 0 || vetor.indexOf(Number(entrada.value)) != -1 || entrada.value < 1 || entrada.value > 100){
        alert('Valor inválido OU já encontrado na lista!')
    } else {
        respostas.innerHTML = '';
        let item = document.createElement('option');
        item.text = `Valor ${entrada.value} adicionado.`;
        lista.appendChild(item);
        vetor.push(Number(entrada.value));
        entrada.value = '';//Como apagar valor digitado pelo usuário?
        entrada.focus();
        //alert(vetor);
    }
}
function finalizar(){
    if(vetor.length == 0){
        alert('Por favor adicione valores antes de finalizar!')
    } else {
        let linha1 = document.createElement('p');
        linha1.innerText = `Ao todo, temos ${vetor.length} números cadastrados.`;
        respostas.appendChild(linha1);
        //
        let linha2 = document.createElement('p');
        vetor.sort();
        linha2.innerText = `O maior valor informado foi ${vetor[vetor.length-1]}.`;
        respostas.appendChild(linha2);
        //
        let linha3 = document.createElement('p');
        linha3.innerText = `O menor valor informado foi ${vetor[0]}.`;
        respostas.appendChild(linha3);
        //
        let linha4 = document.createElement('p');
        let soma = 0;
        for(let cont = vetor.length; cont > 0; cont--){
            soma = soma + vetor[(cont-1)];
        }
        linha4.innerText = `Somando todos os valores, temos ${soma}.`;
        respostas.appendChild(linha4);
        //
       let linha5 = document.createElement('p');
       linha5.innerText = `A média dos valores digitados é ${(soma/vetor.length).toFixed(1)}.`;
       respostas.appendChild(linha5);
       //
       //vetor = [];
    }
}