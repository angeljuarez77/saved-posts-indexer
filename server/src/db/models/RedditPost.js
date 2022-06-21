import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://angeljuarez@localhost:5432/saved_posts_indexer', { ssl: true });

const RedditPost = sequelize.define('reddit_post', {
  reddit_post_id: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false,
    get() { return this.getDataValue('reddit_post_id') }
  },
  permalink: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false,
    get() { return this.getDataValue('permalink') }
  },
  clickable_permalink: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false,
    get() { return this.getDataValue('clickable_permalink') }
  },
  over_18: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    get() { return this.getDataValue('over_18') }
  },
  title: {
    type: DataTypes.TEXT,
    defaultValue: 'missing',
    get() { return this.getDataValue('title') }
  },
  url: {
    type: DataTypes.TEXT,
    defaultValue: 'missing',
    get() { return this.getDataValue('url') }
  },
  subreddit: {
    type: DataTypes.TEXT,
    defaultValue: 'missing',
    get() { return this.getDataValue('subreddit') }
  },
  subreddit_name_prefixed: {
    type: DataTypes.TEXT,
    defaultValue: 'missing',
    get() { return this.getDataValue('subreddit_name_prefixed') }
  }
});

export default RedditPost;