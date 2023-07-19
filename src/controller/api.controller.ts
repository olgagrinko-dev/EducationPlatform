import express from 'express';
import { createUser, authorizationUser } from '../service/api.service';
import bildResponse from '../helper/bildresponse';

const route = express.Router();

route.post('/reg', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        bildResponse(res, 200, data);        
    } catch (error: any) {
        bildResponse(res, 404, error.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const data = await authorizationUser(email, pwd);
        bildResponse(res, 200, data);       
    } catch (error: any) {
        bildResponse(res, 404, error.message);
    }
})

export default route;