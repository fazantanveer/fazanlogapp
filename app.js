const express = require('express');
const app = express();
const db = require('./db');
const port = 5002;
const cors = require('cors');
app.use(cors());

const authController = require('./Controller/authController');
app.use('/api/auth',authController);

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
