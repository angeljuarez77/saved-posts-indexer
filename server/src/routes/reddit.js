import express from 'express';
import dotenv from 'dotenv';
import RedditPost from '../db/models/RedditPost.js';
import Snoowrap from 'snoowrap';

dotenv.config();
const {
  REDDIT_CLIENT_ID,
  REDDIT_CLIENT_SECRET,
  REDDIT_USERNAME,
  REDDIT_PASSWORD
} = process.env;
const router = express.Router();
const r = new Snoowrap({
  userAgent: 'random-user-agent',
  clientId: REDDIT_CLIENT_ID,
  clientSecret: REDDIT_CLIENT_SECRET,
  username: REDDIT_USERNAME,
  password: REDDIT_PASSWORD
});

router.get('/saved', async (req, res) => {
  try {
    const posts = await RedditPost.findAll();
    res.json({ count: posts.length, posts });
  } catch(e) {
    console.error(e.message);
  }
});

router.post('/saved', async (req, res) => {
  try {
    const limit = 100;
    const posts = await r.getMe().getSavedContent({ limit });
    posts.forEach(async (post) => {
      const { subreddit, subreddit_name_prefixed, title, over_18, id, permalink, url } = post;

      const finalObject = {
        clickable_permalink: 'https:www.reddit.com' + permalink,
        subreddit: subreddit.display_name,
        subreddit_name_prefixed,
        title,
        over_18,
        reddit_post_id: id,
        permalink,
        url
      };
      
      const resultInDB = await RedditPost.findOne({
        where: {
          reddit_post_id: id
        }
      });

      if(!resultInDB) {
        await RedditPost.create(finalObject);
      }
    });

    res.send(`Last ${limit} posts should be up to date`);
  } catch(e) {
    console.error(e.message);
  }
});

export default router;