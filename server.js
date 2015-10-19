var express = require('express');
var httpProxy = require('http-proxy');

var apiForwardingUrl = 'http://api.open-notify.org/astros.json?';

var server = express();
server.set('port', 3000);
//server.use(express.static(__dirname + '/src'));

var apiProxy = httpProxy.createProxyServer();

console.log('Forwarding API requests to ' + apiForwardingUrl);

server.all("/space/*", function(req, res) {
    apiProxy.web(req, res, {target: apiForwardingUrl});
});

server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});

server.get('*', function(req, res) {
        res.sendfile(__dirname + '/dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

//'http://fs.to/search.aspx?f=quick_search&search=' + searchText + '&limit=10&section=video&subsection=serials&mod=item&callback=angular.callbacks._0';