const http = require('http');
const hostname = '127.0.0.2';
const port = '1337';
var u = require("url");
var qs = require("querystring");
const Bot = require('./DialogFlow.js');
const bot = new Bot('iulove-pdih','./iulove-pdih-9667dc6c4830.json')
var server = http.createServer(function(req,res){
    var url = req.url;
    var structedUrl =  u.parse(url);
    var query = qs.parse(structedUrl.query);
    console.log(query);
    console.log(query.text);
    bot.sendToDialogflow(query.text,'test-session-id').then(res=>{
    console.log(res[0].queryResult.fulfillmentText);
    req.responseText = res[0].queryResult.fulfillmentText;
    res.end();
    }).catch(e=>{
      console.log(e);  
    });
})

server.listen(30000,function(){
    console.log("Server Listening..");
})

