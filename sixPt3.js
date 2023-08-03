// #11 Colocando em prática - Arrays
// Desafio01
var idade = [];
var altura = [];
var somaAlunos = 0;
var somaAlturas = 0;

for (let index = 0; index < 3; index++) {
    idade[index] = parseInt(prompt("Insira a " + (index + 1) + "° idade do aluno: "));
    altura[index] = parseFloat(prompt("Insira a " + (index + 1) + "° altura do aluno"));
    somaAlunos++;
    somaAlturas += altura[index];
}

var mediaAltura = somaAlturas / somaAlunos;
var condicao = 0;

for (let index = 0; index < 3; index++) {
    if (idade[index] > 13 && altura[index] < mediaAltura) {
        condicao++;
    }
}

console.log("Alunos com mais de 13 anos e altura menor que a média: " + condicao);

// Desafio02
var numeros = [];
var numerosPares = [];
var numerosImpares = [];

// Preenchendo o array de números
for (let index = 0; index < 10; index++)  {
    numeros[index] = parseInt(prompt("Digite o seu " + (index + 1) + "° numero"));
}

// Separando os números pares e ímpares
var contadorPar = 0;
var contadorImpar = 0;

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 == 0) {
        numerosPares[contadorPar] = numeros[index];
        contadorPar++;
    } else {
        numerosImpares[contadorImpar] = numeros[index];
        contadorImpar++;
    }
}

//Exibindo os três vetores
console.log("Array original: " + numeros);
console.log("Array números Pares: " + numerosPares);
console.log("Array números Impares: " + numerosImpares);


// Desafio03
var arrayA = [];
var arrayB = [];
var arrayC = [];
var contadorArrayC = 0;

// Preenchendo os arrays A e B com 10 elementos cada
for (let index = 0; index < 10; index++) {
    arrayA[index] = parseInt(prompt("Digite o número " + (index + 1) + " do arrayA: " ));
}

for (let index = 0; index < 10; index++) {
    arrayB[index] = parseInt(prompt("Digite o número " + (index + 1) + " do arrayB: "));
}

// Verificando os números que estão nos  dois primeiros arrays  e são maiores que 5
for (let index = 0; index < arrayA.length; index++) {
    for (let j = 0; j < arrayB.length; j++) {
        if (arrayB[j] == arrayA[index] && arrayA[index] > 5) {
            arrayC[contadorArrayC] = arrayA[index];
            contadorArrayC++;
        }   
    }
}

console.log("Array A: " + arrayA);
console.log("Array B: " + arrayB);
console.log("Array C: " + arrayC);