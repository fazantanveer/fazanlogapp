const express = require('express');
const app = express();
const db = require('./db');
const port = 5002;
const cors = require('cors');
app.use(cors());

const authcontroller = require('./controller/authcontroller');
app.use('/api/auth',authcontroller);

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
