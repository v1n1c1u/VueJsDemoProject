require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const port = 3400;

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);

app.get('/', (req, res) => {
    res.send("Control API is running!");
});

app.listen(port, () => console.log(`API running on port ${port}`));