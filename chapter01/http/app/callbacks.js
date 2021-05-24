const url = require('url');
const html = require('./html');

module.exports = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  
  const parse = url.parse(request.url, true);
  
  for (const key in parse.query) {
    console.log(key, parse.query[key]);
  }
  
  switch (request.url) {
    case '/':
      response.write(html.HOME_PAGE_HTML());
    break;
    
    case '/users':
      response.write(html.USERS_HTML());
    break;
    
    case '/contacts':
      response.write(html.CONTACTS_HTML());
    break;
    
    default:
      response.write(html.PAGE_NOT_FOUND_HTML());
    break;
  };
  
  response.end();
};
