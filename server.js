const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Blog application." });
});


require("./app/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});