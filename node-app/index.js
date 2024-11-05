const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const port = 4000
mongoose.connect('mongodb://localhost:27017/')


app.get('/', (req, res) => res.send('Hello, MERN!'));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
