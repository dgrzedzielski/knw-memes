import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const withLastResortErrorHandler = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
};
