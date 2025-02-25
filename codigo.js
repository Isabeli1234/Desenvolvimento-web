//Função para verificar se o número é primo//

{
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
    var numero=4;

    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        alert("É par");
    } else {
        alert("É ímpar");
    }

    // Verifica se o número é primo
    if (verificarPrimo(numero)) {
        
        alert("É primo");
    } else {
        alert("Não é primo");
    }
