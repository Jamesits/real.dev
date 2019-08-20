const http = require('http')

// The test suite feeds HTTP port via environment variable `PORT`. 

// var fs = require('fs');
// var path = require('path');
// var port = parseInt(
//   String(fs.readFileSync(path.join(process.cwd(), ".env")))
//     .split('\n')
//     .filter(s => s.startsWith("PORT"))[0]
//     .split("=")[1]
// );

var port = process.env.PORT;

const server = http.createServer((request, response) => {
  response.end('REAL WORLD')
})

server.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`server is listening on ${port}`)
})
