import express from 'express';
import bodyParser from 'body-parser';
const cookieParser = require('cookie-parser');
const session = require('express-session');
import path from 'path';
import cors from 'cors';
import exphbs from 'express-handlebars';
import Handlebars from 'handlebars';
import index from './routes/index';
import index_j1 from './routes/junior_1/index';
import index_j2 from './routes/junior_2/index';
import mailer from './routes/junior_2/mailer';
import i18n from './routes/junior_2/i18n';
import json from './routes/junior_2/json';
import s3 from './routes/junior_2/s3';
import index_i1 from './routes/independent_1/index';
import asyncProc from './routes/independent_1/asyncProc';

const app = express();

const hbs = exphbs.create({ defaultLayout: 'main' });
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.engine);
Handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public', 'img')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(cors());

app.use('/', index);
app.use('/junior_1/', index_j1);
app.use('/junior_2/', index_j2);
app.use('/junior_2/mailer', mailer);
app.use('/junior_2/i18n', i18n);
app.use('/junior_2/json', json);
app.use('/junior_2/s3', s3);
app.use('/independent_1/', index_i1);
app.use('/independent_1/asyncProc', asyncProc);

export default app;
