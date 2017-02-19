var builder = require('botbuilder');

var connector = new builder.ChatConnector({
    appId: "",
    appPassword: "YourAppSecret"
});

var bot = new builder.UniversalBot(connector);  
bot.dialog('/', function (session) {
    session.send('Hello World');
});

bot.dialog("/", [
    function(session){
        builder.Prompts.text("Hello, what your name?");
    },
    function(session, results){
        session.send("Hello " + results.response);
    }
]);