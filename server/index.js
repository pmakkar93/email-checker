const express = require('express')
const bodyParser = require('body-parser');
const logic = require('./logic');

const app = express();
app.use(bodyParser.json());

// Setup server port
var port = process.env.PORT || 8080;

app.get('/email-check', function (req, res) {
    try{
        let response = logic.emailChecker(req.body);
        if (response.result === -1) {
            res.status(400);
        }
        res.send(response);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running Fetch Rewards Coding Assessment on http://localhost:" + port);
});
