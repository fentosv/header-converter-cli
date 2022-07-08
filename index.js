const fs = require('fs');
const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');
const { clear } = require('console');

clear();

console.log(
    chalk.red(
        figlet.textSync('Header', {
            horizontalLayout: 'default',
            font: "ogre",
            whitespaceBreak: true
        }))
);

console.log(
    chalk.red(
        figlet.textSync('               converter', {
            horizontalLayout: 'default',
            font: "ogre",
            whitespaceBreak: true
        }))
);


console.log(chalk.red("Desarrollado por Unworking.\n\n"));

console.log(chalk.green('[INSTRUCCIONES]\n'));
console.log(chalk.green('Introduce los headers en la misma carpeta que este script, con el nombre "headers.txt".\n\n\n'));


inquirer.prompt([
    {
        name: 'outputType',
        type: 'list',
        message: 'Elige una de las formas de visualización de los headers:\n\n',
        choices: ["'Encabezado' : 'Valor'", "Encabezado : 'Valor'"],
        default: 0,
        prefix: chalk.red(">>>"),
    }]).then((answers) => {

        const url = "./headers.txt"
        const data = fs.readFileSync(url, 'utf-8').trim().split("\n");

        if (answers.outputType === "'Encabezado' : 'Valor'") {
            //Leemos txt, quitamos espacios en blanco y hacemos array (cada línea es un elemento)
            console.log("\n");

            for (const line of data) {

                if (data.indexOf(line) < data.length - 1) {
                    console.log(`'${line.split(":")[0]}' : '${line.split(":")[1].trim()}',`);

                } else {
                    console.log(`'${line.split(":")[0]}' : '${line.split(":")[1].trim()}'`)
                }
            }

        } else {
            for (const line of data) {

                if (data.indexOf(line) < data.length - 1) {
                    console.log(`${line.split(":")[0]} : '${line.split(":")[1].trim()}',`);

                } else {
                    console.log(`${line.split(":")[0]} : '${line.split(":")[1].trim()}'`)
                }

            }
        }

    });



