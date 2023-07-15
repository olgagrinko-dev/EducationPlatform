import express from 'express';
import {getAllUser, createUser} from '../service/user.service';

const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllUser ();
    res.send(data);
})

route.post('/', async (req, res) => {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    res.send(data);
})

export default route;