import  express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/route';

dotenv.config();

const app = express();
const PORT = 4040

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})

app.use('/', router);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

export default app;