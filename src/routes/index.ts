import express, { Application, Request, Response, NextFunction } from 'express';
const router = express.Router();

import { postsController } from '../controllers/posts.controller';

router.get('/', async (req: Request, res: Response) => {
  res.render('index');
});

router.route('/api').get(postsController.allPosts);

export default router;
