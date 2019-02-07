var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

net.createServer(function(sock) {

    let round = 0;
    let ans = Math.floor(Math.random() * 21);

   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   
   sock.on('data', function(data) {
       if (round == 0) {
           sock.write('OK');
       } else {
           if (data == ans) {
               sock.write('BINGO');
               sock.destroy();
           } else {
               sock.write('WRONG');
           }
       }
       round++;
       if (round==5)
        sock.destroy();
   });

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);