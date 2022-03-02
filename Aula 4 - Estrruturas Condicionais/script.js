//----------------------------------------
// Estruturas Condicionais
console.log("\n\nEstruturas condicionais");
var jogador1 = -1, jogador2 = 0;
var placar;

console.log(jogador1, jogador2, placar);

//if->else if->if
if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto!!');
}else if(jogador2 > 0){
    console.log('Jogador 2 marcou ponto!!');
}else{
    console.log('Ninguem marcou ponto!!');
}

//if-> if-> else    aninhamento de if
if ((jogador1 != -1 )&&(jogador2 != -1)){
    
    if (jogador1 > 0){
        console.log('Jogador 1 marcou ponto!!');
    }else if(jogador2 > 0){
        console.log('Jogador 2 marcou ponto!!');
    }else{
        console.log('Ninguem marcou ponto!!');
    }
    
}

//if-> if-> else    if ternario

jogador1 != -1 && jogador2 != -1 ? console.log('jogadores sao validos') : console.log('jogadores sao invalidos');
    
    if (jogador1 > 0 && jogador2 == 0){
        console.log('Jogador 1 marcou ponto!!');
        placar = jogador1>jogador2;
    }else if(jogador2 > 0 && jogador1 == 0){
        console.log('Jogador 2 marcou ponto!!');
        placar = jogador2>jogador1;
    }else{
        console.log('Ninguem marcou ponto!!');
        placar = jogador1 == jogador2;
    }


//switch case

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("placar : 1|0");        
        break;
    case placar = jogador1 > jogador2:
        console.log("placar : 0|1");        
        break;
    
    case placar = jogador1 == jogador2:
        console.log("placar : 0|0");           
        break;
   
    default:
        console.log("jogadores invalidos ninguem ganhou");  
    break;
}

//----------------------------------------
// Estruturas de Repeticao
console.log("\n\nEstruturas de Repeticao");
let array = ['valor1','valor2','valor3','valor4','valor5'];

let object = {propriedade1: 'valor6', propriedade1: 'valor7', propriedade1: 'valor8'};

//For
for (let index = 0; index < array.length; index++) {
    console.log(index, array[index]);
}

//For/in
for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i);
}

//For/of
for (i of array) {
    console.log(i);
}
for (i of object.propriedade1) {
    console.log(i);
}

//While
var a = 0;
while (a < 147) {
    a = a+7;
    console.log(a);
}
//Do/While
var a = 0;
do{
    a = a+7;
    console.log(a);
}while (a < 147); 