const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('./middlewares/errorHandler');
const postRoutes = require('./routes/allRoutes');

const app = express();

app.use(cors());

require('dotenv/config');



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // for users application to serve static files

app.use('', postRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Started listening on PORT: ${process.env.PORT}`);
});