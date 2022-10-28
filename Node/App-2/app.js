//Módulo nodejs
var http = require('http');

//Módulo por Felipe
var calc = require('./calculadora.js');

var moment = require('moment');

var servidor = http.createServer(function(req,resp){
    //He escrito el encabezado
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write(`
        <html>
            <head>
            <meta charset="utf-8">
            </head>
            <body>
                <p>
                    El resultado de la operación es:
                    ${calc.sumar(7,3)}
                    <br>
                    ${calc.multiplicar(7,3)}
                    <br>
                    <strong>
                    ${moment().format('MMMM Do YYYY, h:mm:ss a')}
                    </strong>
                </p>
            </body>
        </html>
    `);
    resp.end();
})

servidor.listen(8000);

console.log('Servidor iniciado en el puerto 8000');