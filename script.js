// Declaração das variáveis
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// Atualizando valores
salgados = salgados - 5; // Vendendo 5 salgados
let totalVendido = 5 * precoSalgado; // Calculando o total vendido

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

// Testando o escopo das variáveis
if (true) {
    var testeVar = "Sou var"; 
    let testeLet = "Sou let"; 
    console.log(testeVar); // Funciona dentro do bloco
    console.log(testeLet); // Funciona dentro do bloco
} 

console.log(testeVar); // Funciona, pois 'var' tem escopo global
// console.log(testeLet); // Vai gerar erro, pois 'testeLet' tem escopo de bloco

