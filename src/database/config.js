// mongoose connection
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// function async db connection
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser:    true,
            useUnifiedTopoLogy: true,
            //strictQuery:        true
        });
        console.log('Database connected successfully!');

    } catch (error) {
        console.log(error);
        throw new Error('Database not connected!');
    }
}

module.exports = {
    dbConnection
}