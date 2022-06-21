import express from 'express';
import bodyParser from 'body-parser';
import redditRoutes from './routes/reddit.js';
import meiliRoutes from './routes/meili.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/reddit', redditRoutes);
app.use('/meili', meiliRoutes);

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