import express from "express";
import { MeiliSearch } from "meilisearch";
import dotenv from 'dotenv';
import RedditPost from "../db/models/RedditPost.js";

dotenv.config();
const router = express.Router();
const client = new MeiliSearch({ host: process.env.MEILI_HOST || 'http://localhost:7700' });

router.get('/index', async (req, res) => {
  try {
    const indexes = await client.getIndexes();
    res.json({ indexes });
  } catch(e) {
    console.error(e.message);
  }
});

router.post('/reddit', async (req, res) => {
  try {
    const posts = await RedditPost.findAll();
    const response = await client.index('reddit_posts').updateDocuments(posts);
    res.json({ response, message: 'Posts updated' });
  } catch(e) {
    console.error(e.message);
  }
});

router.delete('/index/:uid', async (req, res) => {
  try {
    const response = await client.deleteIndex(req.params.uid);
    res.json({ response });
  } catch(e) {
    console.error(e.message);
  }
});

export default router;