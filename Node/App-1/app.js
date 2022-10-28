const http = require('http');

const hostname = '127.0.0.1'; //localhost

const port = 3000; //3001, 3002

//Call back... definir que?
const server = http.createServer((req,resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type','text/plain');
    resp.end('Hola mundo');
});

server.listen(port,hostname, ()=> {

    console.log('Se esta corriendo el servidor');

});