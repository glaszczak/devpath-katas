import express, { Application, Request, Response, NextFunction } from 'express';
const camelcaseKeys = require('camelcase-keys');

const router = express.Router();

const exampleJSON = [
  {
    'user-first-name': 'User 1 Name',
    'user-last-name': 'User 1 Last Name',
  },
  {
    'user-first-name': 'User 2 Name',
    'user-last-name': 'User 2 Last Name',
  },
  {
    'user-first-name': 'User 3 Name',
    'user-last-name': 'User 3 Last Name',
  },
];

// ---------- JSON ----------
router.get('/jsonSrc', async (req: Request, res: Response) => {
  res.send(exampleJSON);
});

router.get('/jsonConverted', async (req: Request, res: Response) => {
  res.send(camelcaseKeys(exampleJSON));
});

export default router;
