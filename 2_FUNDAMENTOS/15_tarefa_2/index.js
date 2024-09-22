import inquirer from "inquirer"
import chalk from 'chalk'

inquirer.prompt([{
    name: 'nome',
    message: 'Qual o seu nome?',
},
{
    name: 'idade',
    message: 'Qual a sua idade?',
}
]).then((answer) => {
    console.log(chalk.bgYellow.black(`Seu nome é ${answer.nome} e sua idade é ${answer.idade}`))
}).catch(err => console.log(err))