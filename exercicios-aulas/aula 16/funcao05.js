//Recursividade

/*
Se !5 = 5*4*3*2*1 e !4 = 4*3*2*1 logo !5 = 5*(4*3*2*1) = 5*!4
Desta forma podemos dizer que o fatorial de um número é igual e ele mesmo vezes o fatorial dele menos um;
ou que o fatorial de n é iqual a n vezes n-1
portanto !n = n*!(n-1) EXETO! o fatorial de !1 = 1
*/

function fatorial(n){
    if(n == 1){
        return n*n;
    } else {
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5));