import { describe, expect, test, it } from '@jest/globals';
import request from 'supertest';
import app from '../src/index';

describe('Root endpoint', () => {
  test('GET - /', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => {
        expect(res.body).toEqual({ message: 'Hello, World!' });
      })
      .end((e, res) => {
        if(e) return done(e);
        return done();
      });
  });
});

describe('Test Reddit - /reddit', () => {
  test('GET - /reddit/saved', (done) => {
    request(app)
      .get('/reddit/saved')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveProperty('count');
        expect(res.body).toHaveProperty('posts');
      })
      .end((e, res) => {
        if(e) return done(e);
        return done();
      });
  });
  /*
   * get posts from snoowrap - shouldn't test snoowrap
   * iterate through each post
   * if there are any posts that aren't in the db
   * insert them into the db
   * return a string that tells you how many posts have been inserted into the db
  */
  test('POST - /reddit/saved', (done) => {
    request(app)
      .post('/reddit/saved')
      .expect(200)
      expect(res => {
        const posts = [{  }]
      })
  })
});