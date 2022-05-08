// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {delay} from "../../util/delay";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await delay(1000);
  const date = new Date().toLocaleString();
  res.status(200).json({ name: `John Doe ${date}` });
}
