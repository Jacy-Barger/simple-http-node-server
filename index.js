const fs = require('fs');
const http = require('http');
const port = 3000;


const writeFile = () => {
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;

    console.log('Success!')
  });
}

const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`)
};

const server = http.createServer(requestHandler);

writeFile();

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});
