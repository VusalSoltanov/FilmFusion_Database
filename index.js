//      index.js

const express = require('express');
const app = express();
const { db } = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
db.connect();
app.use(express.json());
app.use("/api/movies", movieRoutes);
app.use("/api/categories", categoryRoutes);
app.listen(8080, () => {
    console.log('Server is running...');
});
