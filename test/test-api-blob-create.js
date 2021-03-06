var request = require('request');
var http = require('http');
var api = require('../api');
var util = require('util');
var queuelib = require('queuelib');
var express = require('express');
var q = new queuelib;

var log = function(obj) {
    console.log(util.inspect(obj, { showHidden: true, depth: null }));
}

var app = express();

app.use(express.json());
app.use(express.urlencoded());


var server = http.createServer(app);
app.post('/blob/create',api.blob.create);

server.listen(5050);

q.series([
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: {foo:'bar'}},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { blob_id :'bar'}},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { blob_id : 'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A'}},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { 
        username : 'b',
        blob_id : 'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A'}},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { 
        username : 'bb--',
        blob_id : 'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A'}},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { 
        username : 'bb--bb',
        blob_id : 'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A'}},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { 
        username : 'bob',
        blob_id : 'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A'}},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { 
        username : 'bob',
        auth_secret :'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A',
        blob_id : 'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A'}},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { 
        username : 'bob',
        auth_secret :'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A',
        blob_id : 'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A',
        data : 'foo' 
        }},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { 
        username : 'bob',
        auth_secret :'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A',
        blob_id : 'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A',
        data : 'foo' ,
        address : 'r24242'
        }},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    },
    function(lib) {
    request.post({
        url:'http://localhost:5050/blob/create',
        json: { 
        username : 'bob',
        auth_secret :'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A',
        blob_id : 'FFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0AFFFF0A0A',
        data : 'foo' ,
        address : 'r24242',
        email: 'bob@foo.com'
        }},
        function(err, resp, body) {
            log(body);
            lib.done();
        }
    );
    }
]);
