const mongoose = require('mongoose')

console.log('opening db connection');
mongoose
    .connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db;