function parImpar(n){
    if(n%2 == 0){
        return 'Par!';
    } else {
        return 'Impar!';
    }
}

var res = parImpar(17);
console.log(res);