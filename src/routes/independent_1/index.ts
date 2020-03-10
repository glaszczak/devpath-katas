import express, { Application, Request, Response, NextFunction } from 'express';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.render('independent_1/index');
});

router.get('/register', async (req: Request, res: Response) => {
  res.render('independent_1/register');
});

router.get('/login', async (req: Request, res: Response) => {
  res.render('independent_1/login');
});

router.get('/caching', async (req: Request, res: Response) => {
  res.render('independent_1/caching');
});

router.get('/uploadFiles', async (req: Request, res: Response) => {
  res.render('independent_1/uploadFiles');
});

export default router;
