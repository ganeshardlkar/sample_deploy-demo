import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import { connect } from './config/database.js';
import apiRoutes from './routes/index.js';
import { passportAuth } from './config/jwt-middleware.js';

import { UserRepository, TweetRepository } from './repository/index.js';
import LikeService from './services/like-service.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(3000, async () => {
    console.log('Server listening on port 3000');

    await connect();

    console.log('Mongodb connected');

    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0, 10);
    // const user = await userRepo.getAll();

    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id, 'Tweet', user[0].id);

});