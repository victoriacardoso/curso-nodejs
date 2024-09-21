import readline from 'readline'

const i = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
i.question("Qual sua linguagem preferida? ", (language) => {
    console.log(`A minha linguagem preferida é: ${language}`)
    i.close()
})