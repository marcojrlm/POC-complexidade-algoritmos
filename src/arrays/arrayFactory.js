import fs from "fs";

const array = Array.from({ length: 1000000 }, (_, i) => i);

const data = array;

const jsonData = JSON.stringify(data, null, 2);

fs.writeFile('array_1000000.json', jsonData, (err) => {
    if (err) {
        console.error('Ocorreu um erro ao gravar o arquivo JSON:', err);
        return;
    }

    console.log('Arquivo JSON gerado com sucesso!');
});