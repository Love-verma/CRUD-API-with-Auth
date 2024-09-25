const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes')
const { errorHandler } = require('./middleware/errorHandler');
const logger = require('./middleware/logger');


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(logger);


app.use('/api/auth',authRoutes);
app.use('/api/data', dataRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 3000;


app.listen(PORT ,()=>{
    console.log(`Server is running on Port ${PORT}`);
});