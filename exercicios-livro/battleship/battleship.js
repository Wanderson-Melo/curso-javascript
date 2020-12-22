//Declarando variáveis
var randomLoc = Math.floor(Math.random()*5); /*
    Math.random = gera um número randômico entre 0 e 0.999999...; Ex.: 0,38; 0,179; 0,667
    Math.floor = arredonda para baixo números reais para inteiros; Ex.: 4,98 => 4; 3,11 => 3
*/
var location1 = randomLoc; //Posição do navio //Por hora a posição será fixa em 3
var location2 = location1 + 1; //Posição do navio //Por hora a posição será fixa em 4
var location3 = location2 + 1; //Posição do navio //Por hora a posição será fixa em 5
var guess; //Palpite do jogador
var hits = 0; //Contador que observa a quantidade de acertos
var guesses = 0; //Contador do número de tentativas
var isSunk = false; //Verificador para observar se já holve 3 acertos

while(isSunk == false){
    guess = prompt('Pronto para atirar! \u{1F4A3} (digite um número entre 0 e 6)');
    if(guess < 0 || guess > 6){
        alert('Por favor digite valor válido \u{1F62A}');
    } else {
        guesses++;
        if(guess == location1 || guess == location2 || guess == location3){
            if(guess == location1){// || guess == location2 || guess == location3){
                alert('Parabéns, você acertou essa! \u{1F604}');
                hits++;
                location1 = 7; //bloqueando location1
            }
            if(guess == location2){
                alert('Parabéns, você acertou essa! \u{1F604}')
                hits++;
                location2 = 7; //bloquando location2
            }
            if(guess == location3){
                alert('Parabéns, você acertou essa! \u{1F604}')
                hits++;
                location3 = 7; //bloqueando location3
            }
            if(hits == 3){
                isSunk = true;
                alert('Você afundou o navio! \u{1F4A5}\u{1F6A2}\u{1F4A5}')
                alert(`Seu aproveitamento foi de ${(hits/guesses*100).toFixed(0)}% \u{1F631}`)
            }

        } else {
            alert('Você errou essa, tente novamente... \u{1F625}')
        }
    }
}
alert('Vamos jogar novamente! \u{1F609}')
