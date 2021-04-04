var express = require('express');
var app = express();

// use express to import whole directory
app.use(express.static(__dirname));

// use express to listen for server requests
var server = app.listen(3000, () => {
    console.log('Server listenting at port', server.address().port);
});

// test if message posts to '/messages' page
var testMessage = [
    { name:'Tiffany', email:'me@email.com', message: 'Hey There'},
    { name:'A Name', email:'no@email.com', message: 'Hey There'}
]

app.get('/messages', (req, res) => {
    res.send(testMessage);
});

app.post('/messages', (req, res) => {
    console.log(printMessages(req.body));
    textMessage.push(req.body);
    res.sendStatus(300);
});

function printMessages(message){
    for (i in message){
        console.log('Name: ' + message[i]['name']);
        console.log('Email: ' + message[i]['email']);
        console.log('Message: ' + message[i]['message']);
        console.log();
    }
}

// function displayMessagesOnPage(message){}