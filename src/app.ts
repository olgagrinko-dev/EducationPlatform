import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import user from './controller/user.controller';
import course from './controller/course.controller';
import api from './controller/api.controller';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/user', user);
app.use('/course', course);
app.use('/api', api);
app.use((error, req, res, next_) => res.send(error.massage));


export default app;