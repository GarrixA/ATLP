const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes')

const app = express();


mongoose
.connect('mongodb://127.0.0.1:27017/first')
.then(()=>{
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'failed to connect to mongoDB'))
    db.once('open', ()=>{
        console.log('connected to mongoDB')
    });

    app.use(express.json())
    app.use('/api', routes)

    app.listen(3001, ()=>{
        console.log('server on 3001 port')
    })
})
.catch((error)=>{
    console.error('error connecting to DB', error)
})

