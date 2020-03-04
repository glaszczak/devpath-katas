import express, { Application, Request, Response, NextFunction } from 'express';

import session from 'express-session';
import i18n from 'i18n';
import cookieParser from 'cookie-parser';

import hbs from 'hbs';
const helper = require('handlebars-helper-i18n');

const router = express.Router();

i18n.configure({
  locales: ['en', 'de', 'pl'],
  directory: __dirname + '/locales',
  defaultLocale: 'pl',
  cookie: 'i18n',
});
router.use(cookieParser('i18n_demo'));
router.use(
  session({
    secret: 'i18n_demo',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  }),
);
router.use(i18n.init);

hbs.registerHelper('i18n', helper.i18n);

router.get('/', async (req: Request, res: Response) => {
  res.render('junior_2/i18n', {
    i18n: res,
  });
});

// router.get('/i18n', async (req: Request, res: Response) => {
//   res.render('katas/i18n', {});
// });

router.get('/pl', async (req: Request, res: Response) => {
  // res.cookie('i18n', 'pl');
  res.render('junior_2/i18n');
});

router.get('/de', async (req: Request, res: Response) => {
  res.render('junior_2/i18n');
});

router.get('/en', async (req: Request, res: Response) => {
  res.render('junior_2/i18n');
});

export default router;
