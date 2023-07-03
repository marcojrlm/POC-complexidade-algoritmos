import fs from "fs";

const list = JSON.parse(fs.readFileSync("src/arrays/randomArray_1000000.json"));

function search(target) {
    let left = 0;
    let right = list.length - 1;
    let count = 0;
    let hasElement = false;
    const startsAt = Date.now();

    while (left <= right) {
        count++;

        //     abrir ao meio
        const middle = Math.floor((left + right)/2);
        const element = list[middle];

        //     comparar se o target é igual, se sim retor true
        if (target === element) {
            count++;
            hasElement = true;
            break;
        }

        //     Se o target for menor que o do meio => right = meio -1
        if (target < element) {
            count++;
            right = middle - 1;
        }

        //     Se o target for maior que o do meio => left = meio + 1
        if (target > element) {
            count++;
            left = middle + 1;
        }
    }

    const endsAt = Date.now();

    return {
        hasElement,
        time: endsAt - startsAt,
        count
    }
}

const answer = search(82419964);

console.log("alvo encontrado? ", answer.hasElement);
console.log("tempo: ", answer.time);
console.log("operações: ", answer.count);

//82419964, 99989038, 74047