var num = [ 1, 4, 5, 6, 7, 9 ];
//for(elementVetor = 0; elementVetor <= num.length; elementVetor++){
//    console.log(num[elementVetor])};

/*
var elementVetor = 0;
while(elementVetor <= num.length-1){ //o length retorna o comprimento do vetor, porém para retornar todas as posições
                                    //é necessário começar de zero(0) assim sendo preciso tir 1 unidade do vertor para
                                    //que essa função seja executada corretamente.
    console.log(`A posição [${elementVetor}] do vetor vale ${num[elementVetor]}`);
    elementVetor++;
};
*/

//Médoto mais simplificado/otimizado => for( in ){}
/*
for(let elementVetor in num){
    console.log(num[elementVetor]);
}
*/

console.log(num.indexOf(6));
console.log(num.indexOf(3));
