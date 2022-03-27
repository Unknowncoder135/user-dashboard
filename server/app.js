const express  = require('express');
const app      = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const PostRouter = require('./routes/posts');
const cors = require('cors');


dotenv.config()

app.use(cors())
app.use(express.json());

app.use('/posts', PostRouter);

app.get('/', (req, res) => {
    res.send('we are live')
})

mongoose.connect(process.env.DB_CONNECTION,() => {
    console.log('connected to mongoose')
})

app.listen(5000,()=>console.log('server running on port 5000'));
