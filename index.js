var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = "amzn1.ask.skill.eea0e1a2-78ae-4b49-a204-3fead1de1484";
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {

    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

    'callSusiApi': function () {
        this.emit(':tell', 'Hello World!');
    }
};