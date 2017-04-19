var http = require('http'); // get a module -- NODE MODULE
var output = require('./outputaccountbalance'); // REPRESENTS OUR OBJECT

// PROBABLY WILL NEVER USE CODE BELOW AGAIN BECAUSE OF EXPRESS
http.createServer(function (req, res) { // http is a built-in module
  // createServer is a built-in method

  res.writeHead(200); // HEAD --> data about what we are sending
  res.write(output.account());
  res.write(output.converted()); // BODY
  res.end(); // done writing response, server okay to send back to client
}).listen(3000);
