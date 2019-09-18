require('dotenv').config();
const express = require('express');
const handle = require('./handlers/index');
const db = require('./models/index');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req , res) => res.json({hello:'world'}));

app.use(handle.notFound);
app.use(handle.errors);

app.listen(port , console.log(`server start at port ${port}`));