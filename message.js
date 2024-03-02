const {accountSid,authToken} = require("./config");

const client = require('twilio')(accountSid, authToken);

function message(body,to){
    client.messages
    .create({
        body: body,
        from: '+16184485849',
        to: to
    })
    .then(message => console.log(message.sid));
}

module.exports=message;