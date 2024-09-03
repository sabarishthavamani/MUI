const express = require('express');
const mongoose = require('mongoose');
const router = require('./view/router');
const cors = require('cors'); 

const app = express();

app.use(cors());

app.use(express.json());
app.use('/ADMIN', router); // http://localhost:5000/ADMIN

mongoose.connect('mongodb://localhost:27017/MUI')
  .then(() => {
    console.log('DB Connected');
    app.listen(5000);
  });
