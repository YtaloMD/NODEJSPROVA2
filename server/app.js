var express = require('express');
const path = require('path');

var app = express();

app.get('/', function (req, res) {//req ha tutte le impostazioni che arrivano dal client, res ha tutte le impostazioni che dovremmo rispondere noi 
    res.sendFile(path.join(__dirname, 'views/index.html'));
});//quando arrivi in get in "app.js" ('/'), tu fa questa funzione


app.get('/pagina1', function (req, res) {//req ha tutte le impostazioni che arrivano dal client, res ha tutte le impostazioni che dovremmo rispondere noi 
    res.send("<h1>ciao bell il mondo</h1>");
});//quando arrivi in get in "app.js" ('/'), tu fa questa funzione


app.get('/pagina2', function (req, res) {//req ha tutte le impostazioni che arrivano dal client, res ha tutte le impostazioni che dovremmo rispondere noi 
    res.send("<h1>non è vero?</h1>");
});//quando arrivi in get in "app.js" ('/'), tu fa questa funzione


app.listen(3000, function () {
    console.log("server attivo sulla porta 3000");

});//secondo paramentro opzionale, si attiva quando si accende il server





/*ALT+SHIFT+F indenta da solo*/