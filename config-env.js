const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,"PRABATH-MD~g68CXbLI#E2EkJgI1qOb1lYNubEt9qjqmHmFf5WBJ3dj-y-6TCPs"
BOT_NUMBER: process.env.BOT_NUMBER,94765600495,
GITHUB_USERNAME: process.env.GITHUB_USERNAME,",Chathuracp"
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN,
};
