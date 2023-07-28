import { createUser, authorizationUser } from '../../service/api.service';
import * as repository from '../../repository/api.repository';
import bcrypt from 'bcrypt';

describe('createUser:', () => {
    test(('1'), async () => {
        const mockUserCreate = jest.spyOn(repository, 'createUserDB');
        const mockHash = jest.spyOn(bcrypt, 'hash');
        const mockUserByEmail = jest.spyOn(repository, 'getUserByEmailDB');
       mockUserByEmail.mockResolvedValue([]);
       mockHash.mockResolvedValue('#ppp&njkkl');
       mockUserCreate.mockResolvedValue([{
        id: '1',
        name: 'TestName',
        surname: 'TestSurname',
        email: 'test@gmail.com',
        pwd: '#ppp&njkkl'
    }])
const result = await createUser('TestName', 'TestSurname', 'test@gmail.com', '#ppp&njkkl');
expect(mockUserByEmail).toHaveBeenCalled();
expect(mockHash).toHaveBeenCalled();
expect(mockUserCreate).toHaveBeenCalled();
expect(result).toEqual([{
    id: '1',
    name: 'TestName',
    surname: 'TestSurname',
    email: 'test@gmail.com',
    pwd: '#ppp&njkkl'
}])

    })
})


// describe('authorizationUser:', () => {
//     test(('1'), async () => {
       
//     })
// })