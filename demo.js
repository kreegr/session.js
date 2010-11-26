var http = require('http'), 
    session = require('./lib/core').session, 
    eyes = require('eyes');

// let's create a basic http server!
http.createServer(function (request, response) {


  eyes.inspect(session);
  // before we process any part of the request, let's give it a session!
  session(request, response, function(request, response){

    // output the current Cookie and session
    console.log(request.session);
    
    // after the session middleware has executed, let's finish processing the request
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello, i know nodejitsu. \n' + 'the current session for this request looks like: \n' + JSON.stringify(request.session, 2, true));
    response.end();
    
  });

}).listen(8080);

/* server started */  
console.log('> hello world running on port 8080');
