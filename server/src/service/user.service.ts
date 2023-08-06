import { getAllUserDB, getUserIdDB, createUserDB, upDataUserDB, deleteUserByIdDB } from '../repository/user.repository';
import {iUser} from '../interfaces/index';

async function getAllUser(): Promise <iUser[]> {
    const data = await getAllUserDB();
    if (data.length == 0) throw new Error('БД не заполнена');
    return data;
}

async function getUserId(id: string): Promise <iUser[]> {
    const data = await getUserIdDB(id);
    if(data.length == 0) throw new Error('Такого id нет');
    return data;
}

async function createUser(name: string, surname: string, email: string, pwd: string): Promise <iUser[]> {
    const data = await createUserDB(name, surname, email, pwd);
    if(data.length == 0) throw new Error('Данные не сохранены');
    return data;
}

async function upDataUser(id: string, name: string, surname: string, email: string, pwd: string): Promise <iUser[]> {
    const data = await upDataUserDB(id, name, surname, email, pwd);
    if(data.length == 0) throw new Error('Такого id нет');
    return data;
}

async function deleteUserById(id: string): Promise <iUser[]> {
    const data = await deleteUserByIdDB(id);
    if(data.length == 0) throw new Error('Такого id нет');
    return data;
}

export { getAllUser, getUserId, createUser, upDataUser, deleteUserById };