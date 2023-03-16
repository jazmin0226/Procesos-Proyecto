import express from 'express';
import api from './api/api.js';
import routes from './views/routes.js';

const app = express();

app.use('/', routes)
app.use('/api', api);
app.use(express.static('public'));


export default app;