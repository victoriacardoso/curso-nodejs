import fs from 'fs'

console.log("Início")

fs.writeFileSync("arquivo.txt", "oi")

console.log("fim")