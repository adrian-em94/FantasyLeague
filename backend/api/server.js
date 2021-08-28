const express = require("express")
const dotenv = require('dotenv');
const notes = require("../data/notes");
const connectDB = require("../config/db");
const userRoutes = require('../routes/userRoutes');
const { notFound, errorHandler } = require("../middlewares/errorMiddleware");
const apiRoutes = require('../routes/apiRoutes');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running...")
});

//retrieve dummy notes
//  app.get('/api/notes', (req, res) => {
//    res.json(notes)
//  })


//created route for user login and register
app.use('/api/users', userRoutes)

//created route for database
app.use('/api/dbcalls', apiRoutes)

app.use(notFound)
app.use(errorHandler)
//get port number from .env file
const PORT = process.env.PORT || 4000

app.listen(PORT);
