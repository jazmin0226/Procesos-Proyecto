import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import app from './app/app.js';

const server = express();

server.use(cors());
server.use(helmet());
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(bodyParser.json());
server.use(morgan('dev'));

server.use('/animatecss', express.static('node_modules/animate.css'));
server.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
server.use('/shared', express.static('app/views/shared'));
server.use('/logic', express.static('app/views/logic'));

server.use(app);

server.listen(process.env.PORT, () => console.log('done'));