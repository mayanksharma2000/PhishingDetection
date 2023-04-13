const express = require('express');
const dotenv  = require('dotenv');

dotenv.config();

const sequelize = require('./util/database');
const userRoutes = require('./routers/user');
const phishingRoutes = require('./routers/phishingDetection');

const app = express();

app.use('/user', userRoutes);
app.use('/checkUrl', phishingRoutes);

sequelize.sync().then(result => {
    app.listen(3000);
})
.catch(err=> {
    console.log(err);
})