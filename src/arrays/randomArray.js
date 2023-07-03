import fs from 'fs';

// Função para gerar um número aleatório único entre dois limites
function generateUniqueRandomNumber(min, max, existingNumbers) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (existingNumbers.has(randomNumber));
    return randomNumber;
}

// Gera a matriz de elementos aleatórios não repetidos
const array = new Set();
while (array.size < 1000) {
    const randomNumber = generateUniqueRandomNumber(0, 100000000 - 1, array);
    array.add(randomNumber);
}

// Converte a matriz para um array e ordena em ordem crescente
const sortedArray = [...array].sort((a, b) => a - b);

// Cria o objeto contendo a matriz
const data = sortedArray;

// Converte o objeto em formato JSON
const jsonData = JSON.stringify(data);

// Escreve o JSON em um arquivo
fs.writeFile('randomArray_1000.json', jsonData, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Arquivo randomArray_1000.json criado com sucesso.');
});
