import fs from 'fs'

fs.rename('arquivo.txt', 'novoArquivo.txt', function(err) {
    if(err) {
        console.log(err);
        return
    }
    console.log("Arquivo renomeado com sucesso.")
});