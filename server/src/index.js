import express from 'express';
import bodyParser from 'body-parser';
import reddit from './routes/reddit';
import meili from './routes/meili';
import ifttt from './routes/ifttt';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/reddit', reddit);
app.use('/meili', meili);
app.use('/ifttt', ifttt);

app.get('/', async (req, res) => {
  try {
    res.json({ message: 'Hello, World!' });
  } catch(e) {
    console.error(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`);
});

export default app;