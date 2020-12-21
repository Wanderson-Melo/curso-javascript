//Estrutura de repetição com teste lógico no início
//nesta estrutura a condicional é avaliada antes da execução do bloco
/*var count = 1;
while(count <= 15){ 
    console.log(`Passo ${count}`);
    count++;
};*/

//Estrutura de repetição com teste lógico no final
//nesta estrutura a condicional é avalia depois da execução do bloco
var count = 1;
do{
    console.log(`Passo ${count}`);
    count++;
}while(count <= 15);