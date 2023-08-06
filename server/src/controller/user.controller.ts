import express from 'express';
import bildResponse from '../helper/bildresponse';
import { getAllUser, getUserId, createUser, upDataUser, deleteUserById } from '../service/user.service';

const route = express.Router();

route.get('/', async (req, res): Promise<void> => {
    try {
        const data = await getAllUser();
        bildResponse(res, 200, data);
    } catch (error: any) {
        bildResponse(res, 404, error.message);
    }
})

route.get('/:id', async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getUserId(id);
        bildResponse(res, 200, data);
    } catch (error: any) {
        bildResponse(res, 404, error.message);
    }
})

route.post('/', async (req, res): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        bildResponse(res, 200, data);
    } catch (error: any) {
        bildResponse(res, 404, error.message);
    }
})

route.put('/:id', async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = await upDataUser(id, name, surname, email, pwd);
        bildResponse(res, 200, data);
    } catch (error: any) {
        bildResponse(res, 404, error.message);
    }
})

route.delete('/:id', async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteUserById(id);
        bildResponse(res, 200, data);
    } catch (error: any) {
        bildResponse(res, 404, error.message);
    }
})

export default route;