const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// Iniciando o App
const app = express();

// Permitir JSON
app.use(express.json());

app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/api', { useNewUrlParser: true });

requireDir('./src/models');

const Profile = mongoose.model('Profile');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3000);