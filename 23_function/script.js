function primeiraFuncao() {
    console.log('alo mundo das funçoes')
}
primeiraFuncao();

//

function dizerNome(nome) {
    console.log('o nome é: ' + nome);
}
dizerNome('Matheus');
dizerNome('Pedro');
dizerNome('Xavier');

var nomeDoBancoDeDados = 'João'; // passando como variavel o parametro da função
dizerNome(nomeDoBancoDeDados);

//

function soma(a, b) {
    var soma = a + b
    return soma
}
var somaUm = soma(2, 5) // return atribuido a uma varivel
console.log(somaUm)

console.log(soma(5,6))