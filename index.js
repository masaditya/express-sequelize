const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const path = require('path');

app.use(express.json());
app.use(cors());

// include router /admin
app.use("/v1/pegawai", require("./routes/pegawaiRoutes"));

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})



// start server
server.listen(3000, function () {
    console.log("server running");
});
