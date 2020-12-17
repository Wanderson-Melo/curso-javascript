function carregar(){
    var msg = window.document.getElementById('msg');
    var imag = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    //var hora = 0 // LINHA PARA TESTAR PROGRAMA
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 5 && hora < 12){
        //FOTO DA MANHÃ
        imag.src = "_imagens/manha_pexels-edward-eyer-2228889.jpg"
        document.body.style.background = '#b68051'
    } else if (hora >= 12 && hora < 19){
        //FOTO TARDE
        imag.src = "_imagens/tarde_pexels-james-wheeler-1486974.jpg"
        document.body.style.background = '#8d6b83'
    } else {
        //FOTO NOITE
        imag.src = "_imagens/noite_pexels-james-wheeler-414612.jpg"
        document.body.style.background = '#1870b0'
    }
}
