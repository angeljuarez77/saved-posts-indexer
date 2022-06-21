import express from 'express';

const router = express.Router();

router.post('/v1/actions/reddit_saved_post', async (req, res) => {
  try {
    console.log(req.body);
  } catch(e) {
    console.error(e.message);
  }
});

export default router;