const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001 
const MONGO_URL = process.env.MONGO_URL

const server = http.createServer(app);

mongoose.connection.once('open',()=>{
    console.log(`MongoDB connection ready!`);
});

mongoose.connection.on('error',(err)=>{
    console.log(err,'Error');
})

async function startServer() {
    await mongoose.connect(MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

}
startServer()
.then(()=>{
    server.listen(PORT,()=>{
        console.log(`Server listening on ${PORT}`);
    })
})
.catch((err)=>{
    console.log('Error starting server',err);
})