http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type':'text/html'}); res.end('<h1>Home Page</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type':'text/html'}); res.end('<h1>About Us</h1>');
  } else {
    res.writeHead(404, {'Content-Type':'text/plain'}); res.end('404 - Page Not Found');
  }
}).listen(3000);