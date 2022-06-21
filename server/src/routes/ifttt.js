import express from 'express';

const router = express.Router();

router.post('/v1/actions/reddit_saved_post/fields/title/options', async (req, res) => {
  try {
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    console.log(req);
    console.log('----------------------------------------------');
    console.log(req.body);
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    res.json(req.body);
  } catch(e) {
    console.error(e.message);
  }
});

export default router;