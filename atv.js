function main() {
    let numUm, numDois, contador;
    alert("Irei mostrar todos os números entre o primeiro e o segundo número digitado:");
    numUm = Number(prompt("Digite o primeiro número:"));
    numDois = Number(prompt("Digite o segundo número:"));

    if (numUm > numDois) {
        prompt("O primeiro número tem que ser menor que o segundo! Escreva-os novamente:");
        numUm = Number(prompt("Digite o primeiro número:"));
        numDois = Number(prompt("Digite o segundo número:"));
    }
    else {
        let resultadoCompleto = ""; // String que acumula tudo
        
        for (contador = numUm + 1; contador < numDois; contador++) {
            // Operador ternário - ChatGPT - If/Else em uma linha
            //condição ? valor_se_verdadeiro : valor_se_falso - Leitura: Se contador é par? Se sim, 'PAR', senão 'ÍMPAR'"
            const tipoNumero = (contador % 2 === 0) ? "PAR" : "ÍMPAR";
            
            // Template string com formatação consistente
            const linhaFormatada = `${contador} - ${tipoNumero}\n`;
            
            // Acumula
            resultadoCompleto += linhaFormatada;//???
            console.log(linhaFormatada.trim()); //??? .trim() remove \n para o console
        }
        
        // Mostra tudo de uma vez
        alert(resultadoCompleto);
    }

}
main();