import { userMock } from '@/mock/user.mock';
import { User } from '@/types/User';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  console.log(req.query);
  res.status(200).json(userMock);
}
