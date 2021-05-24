const http = require('http');
const handle = require('./callbacks');

const server = http.createServer(handle);

server.listen(3000, () => {
  console.log('Servidor Rodando na Porta 3000!');
});
