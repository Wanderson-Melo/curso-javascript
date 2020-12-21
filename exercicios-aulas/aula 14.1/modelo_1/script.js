function contar(){
    //alert('funcionando');//teste botão //ok

    //Variáveis
    var $inicio = document.getElementById('inicio').value; //a entrada sempre vem como string
    var inicio = Number($inicio) //convertendo o value de $inicio em Number
    var $fim = document.getElementById('fim');
    var fim = Number($fim.value) //Neste caso converti a string de $fim em value e Number um uma só linha
    var $passo = document.getElementById('passo').value;
    var passo = Number($passo)
    var cont = document.getElementById('cont');
    var txtCont = document.getElementById('txtCont');
    //alert(passo)

    /*
    Condições:
    coleta dado do fim, menos do início e apresenta a contagem considerando o
    passo/intervalo determinado. Ex: inicio=2; fim=9; passo=2; resultado=2; 4; 6; 8
    fim do programa.
    
    Se não apresentar um início ou fim devesse apresentar uma mensagem de erro,
    solicitado para conferir os dados.
    
    Se não for informado o passo acionar um alert informando que o passo será
    atribuido como 1(um);
    Também devese escrever um emogi após cada número.
    */

    if($inicio.length == 0 || $fim.value.length == 0 || $passo.length == 0){
        alert('[ERRO] Faltam dados!')
    } else {
        if(passo <= 0){
            alert('O passo não pode ser igual a zero, iremos atribuir o valor de 1 ao passo');
            passo = 1;
        };
        cont.innerHTML = '';
        if(inicio < fim){
            //Contagem crescente
            while(inicio <= fim){
                cont.innerHTML += `${inicio} \u{1F449} `; //Unicode emoji list, código unicode só funciona entre crases.
                //alert(`teste White ${inicio}`);
                inicio += passo;
            };
        } else {
            //Contagem regressiva
            while(fim <= inicio){
                cont.innerHTML += `${inicio} \u{1F449} `;
                inicio -= passo;
            }
        }
        cont.innerHTML += `\u{1F3C1}` // a operação += contatena strings
        txtCont.innerHTML = 'Contando: '
        //cont.innerHTML = 'Teste'
        //contar() = Location.reload(true)
    }
}