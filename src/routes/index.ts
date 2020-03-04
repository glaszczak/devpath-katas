import express, { Application, Request, Response, NextFunction } from 'express';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.render('index');
});

export default router;
