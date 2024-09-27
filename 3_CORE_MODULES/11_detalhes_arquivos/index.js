import fs from 'fs'

fs.stat("novoarquivo.txt", function (err, stats) {
    if(err) {
        console.log(err)
        return
    }
    console.log(stats.ctime)
    console.log(stats.isFile())
})
