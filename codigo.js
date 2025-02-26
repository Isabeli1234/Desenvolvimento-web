 var n = prompt("Digite um número;")
 var cont = 0;
 var divisores=0;
 var i;

 if (n % 2 == 0){
    console.log('O número digitado é par.');
 } else {
    console.log('O número digitado é ímpar.');
 }

 for (i=1; i <= n; i++){
    if( n % i == 0){
        divisores++;
    } 
 }
if(i == 2){
    console.log('O número digitaso é primo.');
} else { 
    console.log('O número digitado não é primo.');
}

console.log('==============================')
var n = prompt("Digite a posição na sequência de Fibonacci:");
var a = 0;
var b = 1;

if (n === 0) {
    console.log(a);
}
else if (n === 1) {
    console.log(b);
}
else {
    for (var i = 2; i <= n; i++) {
        var Fibonacci = a + b;
        a = b;
        b = Fibonacci;
    }
    console.log(b);
}
console.log('==============================')

var num1 = prompt("Digite o primeiro número inteiro:");
var num2 = prompt("Digite o segundo número inteiro:");

var operacao = prompt("Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Potenciação");
var resultado;
if (operacao == 1) {
    resultado = num1 + num2;
} else if (operacao == 2) {
    resultado = num1 - num2;
} else if (operacao == 3) {
    resultado = num1 * num2;
} else if (operacao == 4) {
    if (num2 !== 0) {
        resultado = num1 / num2; 
    } else {
        resultado = "Erro! Não pode ser dividido por zero."; 
    }
} else if (operacao == 5) {
    resultado = Math.pow(num1, num2); 
} else {
    resultado = "Operação inválida!";
}
console.log("Resultado:", resultado);
console.log('==============================')
var nome = prompt("Digite o seu nome:");
var idade = prompt("Digite a sua idade:");
var salario =prompt("Digite o seu salário:");
var sexo = prompt("Digite o seu sexo ('f' para feminino ou 'm' para masculino):");
var estadoCivil = prompt("Digite o seu estado civil ('s' para solteiro, 'c' para casado, 'd' para divorciado ou 'v' para viúvo):");

if (nome == 0) {
    console.log("Nome inválido!");
} else if (idade < 18) {
    console.log("Idade inválida!");
} else if (salario <= 0) {
    console.log("Salário inválido!");
} else if (sexo !== 'f' && sexo !== 'm') {
    console.log("Sexo inválido!");
} else if (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'd' && estadoCivil !== 'v') {
    console.log("Estado civil inválido!");
} else {
    console.log("Dados validados com sucesso!");
    console.log(`Nome: {nome}`);
    console.log('Idade:{idade}');
    console.log('Salário:{salario}');
    console.log('Sexo: {sexo}');
    console.log('Estado Civil: {estadoCivil}');}