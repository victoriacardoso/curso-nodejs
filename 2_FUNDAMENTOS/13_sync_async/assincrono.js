import fs from 'fs'
console.log("Início")

fs.writeFile("arquivo.txt", "oi", function(err) {
    setTimeout(function() {
        console.log("arquivo criado")
    }, 1000)
})

console.log("fim")