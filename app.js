const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const request = require('request');
const path = require('path');
const port = process.env.PORT || 8081;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/build', express.static(path.join(__dirname, 'vr/build')));


// Add headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.listen(port, () => {
  console.log('app listening on port 1337!')
});