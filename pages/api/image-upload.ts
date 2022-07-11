import { NextApiRequest, NextApiResponse } from 'next';

import { decode } from 'base64-arraybuffer';
import { nanoid } from 'nanoid';

import { withLastResortErrorHandler } from '~/middleware/with-last-resort-error-handler';
import { withMethodsGuard } from '~/middleware/with-methods-guard';
import { getRequiredEnv } from '~/utils/get-env';
import { supabase } from '~/utils/supabase-client';

const buildFilePath = (contentType: string) => {
  const fileName = nanoid();
  const extension = contentType.split('/')[1];

  return `${fileName}.${extension}`;
};

const uploadImage = async (image: any, res: NextApiResponse) => {
  if (!image || typeof image !== 'string') {
    return res.status(500).json({ message: 'No image provided' });
  }

  const contentType = image.match(/data:(.*);base64/)?.[1];
  const base64FileData = image.split('base64,')?.[1];

  if (!contentType || !base64FileData) {
    return res.status(500).json({ message: 'Image data not valid' });
  }

  const path = buildFilePath(contentType);

  const { data, error: uploadError } = await supabase.storage
    .from(getRequiredEnv('SUPABASE_BUCKET'))
    .upload(path, decode(base64FileData), {
      contentType,
      upsert: true,
    });

  if (uploadError || !data) {
    return res.status(500).json({ message: 'No image provided' });
  }

  return `${getRequiredEnv('NEXT_SUPABASE_URL')}/storage/v1/object/public/${
    data.Key
  }`;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { image } = req.body;

  const url = await uploadImage(image, res);
  res.status(200).json({ url });
}

export default withMethodsGuard(withLastResortErrorHandler(handler), 'POST');
