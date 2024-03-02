const dotenv=require("dotenv");
dotenv.config();

module.exports={
    accountSid:process.env.ACCOUNT_SID,
    authToken:process.env.AUTH_TOKEN,
    PORT:process.env.PORT
}