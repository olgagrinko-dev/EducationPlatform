import { getAllUserDB, getUserIdDB, createUserDB, upDataUserDB, deleteUserByIdDB } from '../repository/user.repository';
import {iUser} from '../interfaces/index';

async function getAllUser(): Promise <iUser[]> {
    const data = await getAllUserDB();
    return data;
}

async function getUserId(id: string): Promise <iUser[]> {
    const data = await getUserIdDB(id);
    return data;
}

async function createUser(name: string, surname: string, email: string, pwd: string): Promise <iUser[]> {
    const data = await createUserDB(name, surname, email, pwd);
    return data;
}

async function upDataUser(id: string, name: string, surname: string, email: string, pwd: string): Promise <iUser[]> {
    const data = await upDataUserDB(id, name, surname, email, pwd);
    return data;
}

async function deleteUserById(id: string): Promise <iUser[]> {
    const data = await deleteUserByIdDB(id);
    return data;
}

export { getAllUser, getUserId, createUser, upDataUser, deleteUserById };