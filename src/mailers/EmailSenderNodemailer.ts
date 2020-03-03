// configured to test sending email by mailcatcher, on port 1025
// Steps: on terminal type 'mailcatcher'; browse to http://127.0.0.1:1080/ to get mailcatche email inbox; send an email
import nodemailer from 'nodemailer';

const sendEmailNodemailer = async function(
  to: string,
  subject: string,
  message: string,
) {
  const from = '"Test Sender" <testSender@example.com>';
  const html = `<h3>${message}</h3>`;

  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false,
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const info = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject, // Subject line
    text: message,
    html: html,
  });

  console.log('Message sent: %s', info.messageId);
};

module.exports = { sendEmailNodemailer };
