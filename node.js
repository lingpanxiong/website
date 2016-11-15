var http=require('http');
var url=require('url');

http.createServer(function onRequest(request,response) {
	var pathname=url.parse(request.url).pathname;
	console.log("Request for"+pathname+"Received.");

	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write(pathname);
	response.end();

	

}).listen(8888);
console.log('server running at http://127.0.0.1:88888/');
