import { Request, Response } from "express";

export const postsController = {
	allPosts: async (req: Request, res: Response) => {
		res.status(200).json({
			data: "response"
		});
	}
};
