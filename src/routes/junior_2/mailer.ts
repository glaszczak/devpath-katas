import express, { Application, Request, Response, NextFunction } from 'express';
// import { EmailSender } from '../mailers/EmailSender';
// const camelcaseKeys = require('camelcase-keys');

const sesClient = require('../../mailers/EmailSenderSES');
const nodemailerClient = require('../../mailers/EmailSenderNodemailer');

const router = express.Router();

// ---------- SEND EMAIL SES ----------
router.get('/sendEmail', async (req: Request, res: Response) => {
  res.render('junior_2/sendEmail');
});

router.post('/sendEmail', async (req: Request, res: Response) => {
  const { to, subject, textArea } = req.body;

  sesClient.sendEmail(to, subject, textArea);

  res.render('junior_2/sendEmail'),
    {
      to,
      subject,
      textArea,
    };
});

// ---------- SEND EMAIL NODEMAILER ----------
router.get('/sendEmailNodemailer', async (req: Request, res: Response) => {
  res.render('junior_2/sendEmailNodemailer');
});

router.post('/sendEmailNodemailer', async (req: Request, res: Response) => {
  const { to, subject, textArea } = req.body;

  nodemailerClient.sendEmailNodemailer(to, subject, textArea);

  res.render('junior_2/sendEmailNodemailer'),
    {
      to,
      subject,
      textArea,
    };
});

export default router;
