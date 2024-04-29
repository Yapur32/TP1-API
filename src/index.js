const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/usuarios');

const app = express();
const port = process.env.PORT || 3000

//middleware
app.use(express.json())
app.use('/api', userRoutes)

//routes
app.get('/', (req, res) => {
    res.send('API');
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conexión establecida con el servidor')).catch(err => console.error(err))
app.listen(port, () => console.log('server listening on port ' , port));

