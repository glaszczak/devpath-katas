import express, { Application, Request, Response, NextFunction } from 'express';
const router = express.Router();

const report = {
  date: Date.now(),
  data: [
    { user: 'User 1', name: 'User name 1' },
    { user: 'User 2', name: 'User name 2' },
    { user: 'User 3', name: 'User name 3' },
    { user: 'User 4', name: 'User name 4' },
    { user: 'User 5', name: 'User name 5' },
    { user: 'User 6', name: 'User name 6' },
    { user: 'User 7', name: 'User name 7' },
    { user: 'User 8', name: 'User name 8' },
    { user: 'User 9', name: 'User name 9' },
    { user: 'User 10', name: 'User name 10' },
  ],
};

router.get('/', async (req: Request, res: Response) => {
  res.render('independent_1/asyncProc');
});

router.get('/runInTheBackground', async (req: Request, res: Response) => {
  const time = 5000;
  setTimeout(() => {
    res.render('independent_1/backgroundJob', { report, time: time / 1000 });
  }, time);
});

export default router;
