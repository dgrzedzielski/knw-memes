import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const setInvalidMethodError = (
  res: NextApiResponse,
  allowedMethods: string[],
  method?: string
) => {
  res
    .setHeader('Allow', allowedMethods)
    .status(405)
    .json({ message: `HTTP method ${method} is not supported.` });
};

export const withMethodsGuard = (
  handler: NextApiHandler,
  ...allowedMethods: string[]
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    const isInvalidMethod = !method || !allowedMethods.includes(method);

    if (isInvalidMethod) {
      setInvalidMethodError(res, allowedMethods, method);
      return;
    }

    handler(req, res);
  };
};
