function calcular(){
    let $numero = document.getElementById('numero');
    let numero = Number($numero.value);
    let tabuada = document.getElementById('tabuada');

    if($numero.value.length == 0){
        alert("Por favor insira um número");
    } else {
        tabuada.innerHTML = ''
        for(let count = 0; count <= 10; count++){
            let item = document.createElement('option')
            item.text = `${numero} x ${count} = ${numero*count}`
            item.value = `tabuada${count}`//valor de cada linha da tabuada informação para PHP ou outro software Back-End
            tabuada.appendChild(item);
        }
    }
}

let $numero = document.getElementById('numero');
let numero = Number($numero.value);
let tabuada = document.getElementById('tabuada');

tabuada.style.marginTop = '10px'
$numero.style.width = '50px'