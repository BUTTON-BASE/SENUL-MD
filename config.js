const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "n84XnAqY#y4sUY6Uo4rMgLhRVzzuvW5CrlNggWAjll4Bmj_Pf1SE",
MONGODB: process.env.MONGODB || "mongodb://mongo:tZqOskNPFBvoJwXqFTbicqRdmVMzqKtt@autorack.proxy.rlwy.net:59140",
