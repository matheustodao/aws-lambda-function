import jwt from 'jsonwebtoken';
import { randomUUID } from 'node:crypto'

import { response } from './utils/response.mjs';

export async function handler(event) {
  const id = randomUUID();

  const token = jwt.sign(
    { sub: id },
    process.env.JWT_SECRET,
  )

  return response({
    users: [
      {
        id: id,
        name: 'Matheus',
        token,
      }
    ]
  })
}