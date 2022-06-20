import {
  Table,
  Column,
  Model,
  Unique,
  AllowNull,
  Default,
  DataType
} from 'sequelize-typescript'

@Table({ tableName: 'reddit_posts'})
class RedditPost extends Model {
  @Unique
  @AllowNull
  @Column(DataType.TEXT)
  declare reddit_post_id: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.TEXT)
  declare permalink: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.TEXT)
  declare clickable_permalink: string;

  @Column(DataType.BOOLEAN)
  declare over_18: boolean;

  @Default('missing')
  @Column(DataType.TEXT)
  declare title: string;

  @Default('missing')
  @Column(DataType.TEXT)
  declare url: string;

  @Default('missing')
  @Column(DataType.TEXT)
  declare subreddit: string;

  @Default('missing')
  @Column(DataType.TEXT)
  declare subreddit_name_prefixed: string;
}

export default RedditPost;