const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const http = require('http');
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    let filepath = '';

    // Write the response content
    res.write('<h1>Hello, Node.js HTTP Server!</h1>');

    // set filepath to html page when page rerouted
    if (req.url === '/') {
        filepath = path.join(__dirname, '../frontend/', 'index.html');
        console.log(filepath);
    } else if (req.url === '/login') {
        filepath = path.join(__dirname, '../frontend/', 'login.html');
        res.write('Login here');
    } else if (req.url === '/subscriptions') {
        filepath = path.join(__dirname, '../frontend/', 'subscription.html');
        res.write('Subscribe here');
        if (req.method === 'POST') {
            // examine this for sending data to backend
        }
    } else {
        filepath = path.join(__dirname, '../frontend/', '404error.html');
    }

    // serve html path with filepath
    fs.readFile(filepath, (err, content) => {
        if (err) {
            res.end('Server Error');
            return;
        } else {
            res.end(content);
        }

    });


});

// start server on port 3000
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});




// setTimeout(); call a function after a number delay
// clearTimeout();
// setInterval(); repeatedly call a function after a delay
// clearInterval(); stop a function from being called repeatedly

// - node is a runtime environment for js to execute code outside of a browser,
// which gives js the capability to write more comprehensive code.
// - node is defaultly asynchronous, meaning it can service many threads at
// once, which optimises server efficiency.
// - node handles operation orders for us by monitoring event queues and
// performing operations as needed.
// - because node allows us to operate with javascript outside of a browser, we
// do not have the 'window' object of a browser, and instead have objects like
// 'os', 'fs', 'http', etc. In place of 'window', we have 'global'.
// - because two functions or objects of the same name can override each other
// in the global scope, we need modularity to write maintainable code.
// 

/*
let pathObj = path.parse(__filename);
console.log(pathObj);
console.log(os.freemem());

const files = fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

const emitter = new EventEmitter();




// listener checks for emit of messageLogged event, performs callback function.
// listener must be created before event is raised.
emitter.on('messageLogged', (arg) => { // same as emitter.addListener()
    console.log('Listener called', arg);
});

// raise an event
emitter.emit('messageLogged', {id: 1}); // signals that an event has happened.

emitter.emit('logging', {data: 'message'});

// '/' means localhost:3000 page
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello, World.');
        res.end();
    }

    // '/api/courses' means localhost:3000/api/courses page
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
}); // http extends event emitter

server.listen(3000);

console.log('listening on port 3000');
*/