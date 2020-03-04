import express, { Application, Request, Response, NextFunction } from 'express';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.render('independent_1/index');
});

router.get('/register', (req: Request, res: Response) => {
  res.render('independent_1/register');
});

router.get('/login', (req: Request, res: Response) => {
  res.render('independent_1/login');
});

router.get('/caching', (req: Request, res: Response) => {
  res.render('independent_1/caching');
});

router.get('/asyncProc', (req: Request, res: Response) => {
  res.render('independent_1/asyncProc');
});

router.get('/uploadFiles', (req: Request, res: Response) => {
  res.render('independent_1/uploadFiles');
});

export default router;
