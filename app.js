const express = require('express');
const app = express();
const db = require('./db');
const port = 5002;
const cors = require('cors');
app.use(cors());

const AuthController = require('./Controller/AuthController');
app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
