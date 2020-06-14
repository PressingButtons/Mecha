const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const server = require(path.join(__dirname, '/server/js/$server.js'));
const PORT = process.env.PORT || 3000;

//execute server
server.run( PORT );
