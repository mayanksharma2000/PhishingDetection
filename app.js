const express = require('express');
const dotenv  = require('dotenv');
const cors = require('cors');

dotenv.config();

const sequelize = require('./util/database');
const userRoutes = require('./routers/user');
const phishingRoutes = require('./routers/phishingDetection');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/checkUrl', phishingRoutes);

sequelize.sync().then(result => {
    app.listen(3000);
})
.catch(err=> {
    console.log(err);
})