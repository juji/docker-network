// content of index.js
const fs = require('fs');
const http = require('http')  
const port = 3000
var hostname = fs.readFileSync('/etc/hostname');

const requestHandler = (request, response) => {    
	response.end(hostname);	  
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
