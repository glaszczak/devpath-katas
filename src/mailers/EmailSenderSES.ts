const AWS = require('aws-sdk');
import dotenv from 'dotenv';
dotenv.config();

const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

AWS.config.update({
  // https://www.youtube.com/watch?v=vO88HHM9oY4
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: 'eu-central-1',
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });
const sendEmail = (
  to: string,
  subject: string,
  message: string,
  from: string,
) => {
  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: message,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
    ReturnPath: from
      ? from
      : '"Grzegorz.Laszczak@gmail.com" <grzegorz.laszczak@gmail.com>',
    Source: from
      ? from
      : '"Grzegorz.Laszczak@gmail.com" <grzegorz.laszczak@gmail.com>',
  };

  ses.sendEmail(params, (err: any, data: any) => {
    if (err) {
      return console.log(err, err.stack);
    } else {
      console.log('Email sent.', data);
    }
  });
};

module.exports = { sendEmail };
