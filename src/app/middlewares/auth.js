import jwt from 'jsonwebtoken';
// O PROMISIFY É UMA FUNÇÃO QUE TRANSFORMA UMA FUNÇÃO ESPECÍFICA DE CALLBACK, EM UMA FUNÇÃO QUE UTILIZA ASYNC/AWAIT
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
