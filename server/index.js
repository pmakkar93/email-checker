const express = require('express')
const bodyParser = require('body-parser');
const logic = require('./logic');

const app = express();
app.use(bodyParser.json());

// Setup server port
var port = process.env.PORT || 8080;

app.get('/emailCheck/:input', function (req, res) {
    res.status(200).send(logic.isWordPyramid(req.params.input, req.body.input));
});

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running Fetch Reward Exercise on port http://localhost:" + port);
});
