import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

/*
  crypto para gerar um nome valido em hexadecimal 
  pois evitar que no banco tenha o arquivo com msm nome ou caracteres estranhos
  extname para pegar somente a extensao do arquivo exemplo .jpg
 */

export default {
  storge: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
