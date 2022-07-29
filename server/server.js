const express = require('express');
const routes = require('./routes');
const db = require('./db');
const logger = require('morgan');
const cors = require('cors');

// MIDDLEWARE
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.options('*', cors());
app.use(express.json());
app.use(logger(`dev`));
app.use(express.static(`${__dirname}/client/build`));

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//=============get===================

app.get('/*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
