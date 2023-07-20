import { createUserDB, getUserByEmailDB } from '../repository/api.repository';
import { iUser} from '../interfaces/index';
import bcrypt from 'bcrypt';

async function createUser(name: string, surname: string, email: string, pwd: string): Promise <iUser[]> {
    const foundUser = await getUserByEmailDB(email);
    if (foundUser.length > 0) throw new Error('такой email уже существует');    
    const hashedPassword = await bcrypt.hash(pwd, 2);
    const data = await createUserDB(name, surname, email, hashedPassword);
    return data;    
}

async function authorizationUser(email: string, pwd: string): Promise <iUser[]> {
    const foundUser = await getUserByEmailDB(email);
    if(!foundUser.length) throw new Error('Такого пользователя нету');
    const bool = await bcrypt.compare(pwd, foundUser[0].pwd);
    if(!bool) throw new Error('pwd не совпадают');
    return foundUser;
}

export { createUser, authorizationUser };