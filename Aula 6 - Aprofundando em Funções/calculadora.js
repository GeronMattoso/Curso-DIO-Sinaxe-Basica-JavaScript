console.log('Calculadora OK!!');

function calculadora() {

    const operacao = Number(prompt('Escolha uma Opcão:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão Real\n 5 - Divisão Inteira\n 6 - Potenciação\n 7 - Sair\n'));  

    if(!operacao|| operacao<1 || operacao>7){
        alert('Operação Inválida!!');
        calculadora();
    }else if (operacao == 7){
        sair();
    }else{
        let n1 = Number(prompt('Primeiro Valor'));
        let n2 = Number(prompt('Segundo Valor'));
        let resultado;
    
    function soma(n1, n2){
        resultado = n1 + n2;
        alert (`${n1} + ${n2} = ${resultado}`);
    }
    function subtracao(n1, n2){
        resultado = n1 - n2;
        alert (`${n1} - ${n2} = ${resultado}`);
    }
    function multiplicacao(n1, n2){
        resultado = n1 * n2;
        alert (`${n1} * ${n2} = ${resultado}`);
    }
    function divisaoReal(n1, n2){
        resultado = n1 / n2;
        alert (`${n1} / ${n2} = ${resultado}`);
    }
    function divisaoInteira(n1, n2){
        resultado = n1 % n2;
        alert (`${n1} % ${n2} = ${resultado}` + ' (Resto da divisão)');
    }
    function potenciacao(n1, n2){
        resultado = n1 ** n2;
        alert (`${n1} ** ${n2} = ${resultado}`);
    }
    
    function novaOperacao(){
    
        const opcao = Number(prompt('deseja fazer outra operacao? \n 1 - Sim\n 2 - Não'));
        
        switch (opcao) {
            case 1:
                calculadora();
                break;
            case 2:
                alert('Calculadora encerrada!!\nAté mais :)');
                break;
                
            default:
                alert('Opcão Invalida!');
                novaOperacao();
                break;
        }
    }

    function sair() {
        alert('Calculadora encerrada!!\nAté mais :)');
        console.log('Progrma finalizado');
    }
    
    switch (operacao) {
        case 1:
            soma(n1,n2);
            novaOperacao();
            break;
        case 2:
            subtracao(n1,n2);
            novaOperacao();
            break;
        case 3:
            multiplicacao(n1,n2);
            novaOperacao();
            break;
        case 4:
            divisaoReal(n1,n2);
            novaOperacao();
            break;
        case 5:
            divisaoInteira(n1,n2);
            novaOperacao();
            break;
        case 6:
            potenciacao(n1,n2);
            novaOperacao();
            break;
        default:
            alert('Opcao invalida!');
            novaOperacao();
            break;
        }


}
}

calculadora();