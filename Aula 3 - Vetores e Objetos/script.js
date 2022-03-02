//como declarar um array

//array normal
let array = ['string', 1, true];
console.log(array);

//array com outros arrays dentro
let arrayDados = ['string', 1, true, ['array1'],['array2'],['array3']] ;
console.log(arrayDados);

//acessar indices do array
console.log("arrayDados[0]:",arrayDados[0]);
console.log("arrayDados[0]:"+arrayDados[0]);


// manipulacao do array

//forEach = intera para cada item do array
array.forEach(function(item, index){
    console.log(item, index);
});

//push adiciona um item no final do array
array.push('novo item')
console.log(array);

//pop remove um item do final do array
array.pop();
console.log(array);

//shift remove um item no inicio do array
array.shift()
console.log(array);

//unshift adiciona no inicio do array
array.unshift('novo item no inicio')
console.log(array);

//indexOf retorna o indice de um valor
console.log(array.indexOf(true));

//splice remove ou substitui um item pelo indice
array.splice(0,3);
console.log(array);

//slice retorna uma parte de um array existente
let novoArray = arrayDados.slice(2,5);
console.log(novoArray);


//-------------------------------------------------
//Objetos
let object = {string: 'string do objeto', number:7, boolean: true, array:["array"], objectInterno:{objectInterno:'objeto interno item'}};
console.log(object);//objeto todo

console.log(object.number);//numero

console.log(object.objectInterno.objectInterno);//objeto dentro do objeto

var string = object.string;// retirar uma info do objeto
console.log(string,'\n\n');

var {string, boolean, number, objectInterno} = object;// retirar varias itens juntos
console.log(string, boolean, number, objectInterno);