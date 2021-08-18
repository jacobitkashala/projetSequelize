const express = require('express');
const Cors = require('cors');
const routes = require('./routes');
const sequelize=require('sequelize');
const app = express();

app.use(Cors())
app.use(express.json());

routes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Our server is listening on the ${PORT} port`);
});