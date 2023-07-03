import fs from "fs";

const array = JSON.parse(fs.readFileSync("src/arrays/array_1000.json"));
// const array = JSON.parse(fs.readFileSync("src/arrays/array_100000.json"));
// const array = JSON.parse(fs.readFileSync("src/arrays/array_1000000.json"));

const startsAt = Date.now();

let counter = 0;

for (let i = 0; i < array.length; i++) {
    counter++;
}

let endsAt = Date.now();

console.log("Operações: ", counter);
console.log("Tempo: ", (endsAt - startsAt), "ms");
console.log("Execuções: ", (endsAt - startsAt), "ms");