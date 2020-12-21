//Declarando variáveis
var location1 = 3; //Posição do navio //Por hora a posição será fixa em 3
var location2 = 4; //Posição do navio //Por hora a posição será fixa em 4
var location3 = 5; //Posição do navio //Por hora a posição será fixa em 5
var guess; //Palpite do jogador
var hits = 0; //Contador que observa a quantidade de acertos
var guesses = 0; //Contador do número de tentativas
var isSunk = false; //Verificador para observar se já holve 3 acertos

while(isSunk == false){
    guess = prompt('Pronto para atirar! (digite um número entre 0 e 6)');
    if(guess > 6){
        alert('Por favor digite valor válido');
    } else {
        guesses++;
        if(guess == location1 || guess == location2 || guess == location3){
            hits++;
            if(hits == 3){
                isSunk = true;
                alert('Você afundou o navio!')
            }
        }
    }
}
alert('Vamos jogar novamente!')
