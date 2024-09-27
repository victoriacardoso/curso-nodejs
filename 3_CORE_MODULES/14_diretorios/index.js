import fs from 'fs'

if (!fs.existsSync('./minhapasta')) {
    console.log("Não existe")
    fs.mkdirSync("minhapasta")

}
if (fs.existsSync('./minhapasta')) {
    console.log("existe")
}