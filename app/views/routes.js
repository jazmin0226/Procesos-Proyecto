import express from 'express';

const routes = express();

routes.set('views', './app/views');
routes.set('view engine', 'pug')

routes.get('/', (req, res) => {
  res.render('pages/home', {
    pageTitle: 'Desarrollo con ChatGPT',
    active: true
  });
});

routes.get('/free', (req, res) => {
  res.render('pages/free', {
    pageTitle: 'Pregúntale a ChatGPT',
    active: false
  });
});

export default routes;