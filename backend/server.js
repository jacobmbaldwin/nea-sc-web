require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const scholarshipRequestsRouter = require('./routes/scholarshipRequests');
app.use('/scholarshipRequests', scholarshipRequestsRouter);

const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter);

app.listen(3000, () =>  console.log('Server Started') );