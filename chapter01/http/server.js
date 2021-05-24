/**
 * Carregando módulo nativo http
 */
const http = require('http');

/**
 * Levantando um servidor e passando uma função de callback que será chamada ao receber uma requisição
 */
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  
  if (request.url === '/') {
    response.write("<h1>Página Principal</h1>");
  } else if (request.url === '/bem-vindo') {
    response.write("<h1>Página Bem-vindo</h1>");
  } else {
    response.write("<h1>Página não Encontrada!</h1>");
  }
  
  response.end();
});

/**
 * Configurando o servidor para ouvir na porta 3000 e passando uma função de callback que será chamada ao levantá-lo
 */
server.listen(3000, () => {
  console.log('Servidor Rodando!!!');
});
