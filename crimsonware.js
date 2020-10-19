const Discord = require('discord.js');
const xml = require(XMLHttpRequest);

var request = require('request'),
    url = "https://www.mediawiki.org/w/api.php";


function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "WEBHOOK HERE");
    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        action: "query",
        meta: "tokens",
        type: "login",
        format: "json"
    };

    request.send(JSON.stringify(params));
}

request.get( { url: url, qs: params }, function( error, response, body ){
    body = JSON.parse( body );
    sendMessage();
});
