const express = require('express');
const { dbConnection } = require('../database/config');

class Server {
    constructor (){
        this.app  = express();
        this.port = process.env.PORT;
        this.connectDB();

        this.usersPath = '/users'

        this.routes();
    }

    async connectDB (){
        await dbConnection();
    }

    routes (){

        // Read and write body
        this.app.use(express.json ());

        // Path configuration
        this.app.use(this.usersPath, require('../routes/user'));
    }

    listen (){
        this.app.listen(this.port, () => {
            console.log(`Server running on the port: ${this.port}`);
        });
    }
}

module.exports = Server;