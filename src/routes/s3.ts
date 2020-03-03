import express, { Application, Request, Response, NextFunction } from 'express';
import { S3Service } from '../services/s3';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.render('katas/s3');
});

router.get('/showAllObjects', async (req: Request, res: Response) => {
  const s3Response = await S3Service.showAllObjects();
  res.send(s3Response);
});

router.get('/uploadFile', async (req: Request, res: Response) => {
  await S3Service.uploadFile();

  const s3Response = await S3Service.showAllObjects();
  res.send(s3Response);
});

router.get('/deleteFile', async (req: Request, res: Response) => {
  await S3Service.deleteFile();

  const s3Response = await S3Service.showAllObjects();
  res.send(s3Response);
});

router.get('/getUrl', async (req: Request, res: Response) => {
  const url = await S3Service.getUrl();

  res.render('katas/s3', { url: url });
});
export default router;
