import http from 'http'
import fs from 'fs'
import url from 'url'

const port = 3000
const server = http.createServer((req, res) => {
    const urlInfo = url.parse(req.url, true)
    const fileName = urlInfo.pathname.substring(1)
    if (fileName.includes('html')) {
        if (fs.existsSync(fileName)) {
            fs.readFile(fileName, function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        }
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})