import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/router.js';
import 'dotenv/config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: '*',
  credentials: false,
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Application/json');
  next();
});

/* Please Note: app.use('/', router) must follow the app.use( cor(corsOptions) ) */
app.use('/api', router);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

