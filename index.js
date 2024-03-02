const express = require("express");
const message = require("./message");
const {PORT} = require("./config");

const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/sendSMS", (req, res) => {
    try {
        const numbers = req.body.numbers;
        const msg = req.body.message;
        numbers.forEach(number => {
            message(msg, number);
        });
        return res.status(200).send({
            err:{},
            message:"message sent successfully",
            success:true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            err:"error",
            message:"not able to send a message",
            success:false
        });
    }
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});


module.exports = app;