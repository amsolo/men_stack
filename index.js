const http = require('http')
const server = http.createServer((req, res)=>{
    if (res.url === '/about'){
        res.end('the about page')
    } if (res.url === '/contact') {
        res.end('the contact page')
    } else {
        res.writeHead(404)
        res.end('page not found')
    }
})
server.listen(3000)