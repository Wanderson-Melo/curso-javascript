function verificar(){
    //window.alert('Oi, é um teste') //alert para teste do verificar
    //Declaração de variáveis
    var date = new Date();
    var anoAtual = date.getFullYear();
    var anoNasc = window.document.getElementById('txtano');
    //window.alert(anoNasc.value)
    //var anoNasc = 1988;//Linha de código para teste
    var idade = anoAtual - Number(anoNasc.value);
    //window.alert(idade) //Calculo idade
    var fsex = document.getElementsByName('sex');
            if(fsex[0].checked){
    var genero = 'masculino';
            } else if (fsex[1].checked){
    var genero = 'feminino'
            }
    //alert(genero);//checando variável genero
    var msg = document.getElementById('msg');
    //var imag = window.document.getElementById('imagem');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    //Lógica
    if(idade < 0 || idade > 150 || genero == undefined){
        //alert('[ERRO] por favor verifique os dados novamente!');
        msg.innerHTML = `Por favor verifique os dados!`;
        //imag.src = "_images/surpresa_pexels-mohamed-abdelgaffar-764340.jpg"
    } else {
        if(genero == 'feminino'){ //Mensagens e imagens para mulheres
            if(idade < 12){
                msg.innerHTML = `Detectamos uma menina de ${idade} anos`;
                img.setAttribute('src', '_images/menina_pexels-andrea-piacquadio-3755494.jpg');
                //imag.src = "_images/menina_pexels-andrea-piacquadio-3755494.jpg";
            } else if(idade < 18){
                msg.innerHTML = `Detectamos uma garota de ${idade} anos`;
                img.setAttribute('src', '_images/garota_pexels-daniel-xavier-1102341.jpg');
                //imag.src = "_images/garota_pexels-daniel-xavier-1102341.jpg";
            } else if(idade < 65){
                msg.innerHTML = `Detectamos uma mulher de ${idade} anos`;
                img.setAttribute('src', '_images/mulher_pexels-cottonbro-4781409.jpg');
                //imag.src = "_images/mulher_pexels-cottonbro-4781409.jpg";
            } else {
                msg.innerHTML = `Detectamos uma jovem senhora de ${idade} anos`;
                img.setAttribute('src', '_images/idoda_pexels-edu-carvalho-2050994.jpg');
                //imag.src = "_images/idoda_pexels-edu-carvalho-2050994.jpg";
            }
        } else if(genero == 'masculino'){ //Mensagem e imagens para homens
            if(idade < 12 ){
                msg.innerHTML = `Detectamos um menino de ${idade} anos`;
                img.setAttribute('src', '_images/menino_pexels-luna-lovegood-1104007.jpg');
                //imag.src = "_images/menino_pexels-luna-lovegood-1104007.jpg";
            } else if(idade < 18){
                msg.innerHTML = `Detectamos um garoto de ${idade} anos`;
                img.setAttribute('src', '_images/garoto_pexels-jc-laurio-1288182.jpg');
                //imag.src = "_images/garoto_pexels-jc-laurio-1288182.jpg";
            } else if(idade < 65){
                msg.innerHTML = `Detectamos um homem de ${idade} anos`;
                img.setAttribute('src', '_images/homem_pexels-italo-melo-2379005.jpg');
                //imag.src = "_images/homem_pexels-italo-melo-2379005.jpg";
            } else {
                msg.innerHTML = `Detectamos um jovem senhor de ${idade} anos`;
                img.setAttribute('src', '_images/idoso_pexels-marllon-cristhian-barbosa-3110392.jpg');
                //imag.src = "_images/idoso_pexels-marllon-cristhian-barbosa-3110392.jpg";
            }
        }
    }
    msg.appendChild(img)
    img.style.borderRadius = '50%'
    img.style.marginTop = '20px'
}
document.body.style.background = '#000000'

console.log(anoAtual);
console.log(typeof anoNasc);
console.log(anoNasc);
console.log(idade);