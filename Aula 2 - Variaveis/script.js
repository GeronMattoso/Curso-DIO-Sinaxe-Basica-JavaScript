//---------------------------------------------------
console.log('\nTipos Primitivos:');

//booleanos
var vOuF = false;
console.log(vOuF); //console.log(typeof(VouF)); retorna o tipo dessa variavel

//number 
var numeroQualquer = 7;
console.log(numeroQualquer);

//String
var nome = 'Geron'
console.log(nome);

//---------------------------------------------------

console.log('\n\nComo Declarar:');

//tipo var
var variavel;
console.log(variavel); // vai retornar undefined
var variavel = 'GeronVar';
variavel = 'GeronVar2'
console.log(variavel); // tipo string

//tipo let - escopo local e inicia null
let variavel2 = 'Geronlet';
console.log(variavel2);

//tipo const - nao pode ser alterada
const variavel3 = 'Geroso';
console.log(variavel3);


//---------------------------------------------------
console.log('\n\nEscopo\n');

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}
escopoLocal();

//---------------------------------------------------
console.log('\n\nAtribuicao e Comparacao\n');

//atribuicao
var atribuicao = 'Geroso'; //atribuicao basica

//comparação
var comparacao = '0' == 0;
console.log(comparacao);
//comparacao identica - compara nao só o valor mas tbm o tipo
var comparacaoIdentica  = '0' === 0;
console.log(comparacaoIdentica);

//---------------------------------------------------
console.log('\n\nOperadores aritmeticos\n');

var adicao = 1 + 1; //2

var subtracao = 2 - 1; //1

var multiplicacao = 2 * 3;//6

var divisaoReal = 6 / 2;//3

var divisaoInteira = 5 % 2;//1

var potenciacao = 2 ** 10;//1024

//---------------------------------------------------
console.log('\n\nOperadores relacionais\n');

var maiorQue = 5 > 2; //true

var menorQue = 5 < 2; //false

var maiorOuIgual = 5 >= 2; //true
//console.log(maiorOuIgual);
var menorOuIgual = 5 <= 2; //false

//---------------------------------------------------
console.log('\n\nOperadores Logicos\n');

var e = true && false; 
var ou = true || false;
var nao = !true;