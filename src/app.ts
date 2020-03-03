import express from 'express';
import bodyParser from 'body-parser';
const cookieParser = require('cookie-parser');
const session = require('express-session');
import path from 'path';
import cors from 'cors';
import exphbs from 'express-handlebars';
import index from './routes/index';
import mailer from './routes/mailer';
import i18n from './routes/i18n';
import json from './routes/json';
import s3 from './routes/s3';

const app = express();

app.use(express.static(path.join(__dirname, 'public', 'img')));

const hbs = exphbs.create({ defaultLayout: 'main' });
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.engine);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(cors());

app.use('/', index);
app.use('/mailer', mailer);
app.use('/i18n', i18n);
app.use('/json', json);
app.use('/s3', s3);

export default app;
