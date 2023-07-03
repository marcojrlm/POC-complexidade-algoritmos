import fs from "fs";

// Elaborar um algoritmo que recebe um número de entrada e retorne true caso
// este número seja a some de quaisquer dois elementos em uma lista

const list = JSON.parse(fs.readFileSync("src/arrays/array_100000.json"));

function twoNumberSum(num) {

    const startsAt = Date.now();
    let hasSum = false;
    let count = 0;

    const hashTable = {};

    for (let i = 0; i < list.length; i++) {
        hashTable[list[i]] = true;
        count++;
    }

    for (let i = 0; i < list.length; i++) {

        let diff = num - list[i];

        if (diff === list[i]) {
            hasSum = true;
            break;
        }
    }

    const endsAt = Date.now();

    return {
        hasSum,
        time: endsAt - startsAt,
        count
    };
}

const answer = twoNumberSum(5);

console.log("existe a soma? ", answer.hasSum);
console.log("tempo: ", answer.time, "ms");
console.log("operações: ", answer.count);