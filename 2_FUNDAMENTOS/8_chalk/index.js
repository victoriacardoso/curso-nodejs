//personalizando a saída no console

import chalk from 'chalk'

const nota = 5

if(nota >= 7) {
    console.log(chalk.green.bold("Parabéns! Você está aprovado."))
}
else{
    console.log(chalk.red.bold("Que pena! Você está reprovado."))
}

