// Fatorial de 5 => 5! = 5*4*3*2*1

function fatorial(n){
    let fat = 1;
    for(let cont = n; cont > 0; cont--){
        fat = fat*cont; //se n = 5; teremos 1*5=5 /-> 5*4 = 20 /-> 20*3 = 60 /-> 60*2 = 120 /-> 120*1 = 120 = !5 //resposta
        //fat *= cont //maneira comprimida
    }
    return fat;
}

var res = fatorial(9);
console.log(res);