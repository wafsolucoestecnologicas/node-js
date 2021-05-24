const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  // Realizando parse da url obtida através da requisição do cliente
  const parse = url.parse(request.url, true);
  
  let html = `
    <!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>URL's</title>
      </head>
      <body>
        <header>
          <h1>URL's</h1>
        </header>
        
        <main>
          <header>
            <h2>Query String</h2>
          </header>
  `;
  
  response.writeHead(200, { "Content-Type": "text/html" });
  
  // Percorrendo as query strings da url
  for (const key in parse.query) {
    html += `<p><strong>${key}</strong> : ${parse.query[key]}</p>`;
  }
  
  // Exibindo o pathname da url
  html += `
    <header>
      <h2>Path</h2>
    </header>
    
    <p>${parse.pathname}</p>
  `;
  
  html += `
      </main>
    </body>
    </html>
  `;
  
  response.write(html);
  response.end();
});

server.listen(3000, () => {
  console.log('Servidor Rodando na Porta 3000!');
});
