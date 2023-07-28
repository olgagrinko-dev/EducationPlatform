import { getAllUser, getUserId, createUser, upDataUser, deleteUserById } from '../../service/user.service';
import * as repository from '../../repository/user.repository';

describe('getAllUser:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'getAllUserDB');
        repoFunction.mockResolvedValue([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            },
            {
                id: '2',
                name: 'TestName2',
                surname: 'TestSurname2',
                email: 'test2@gmail.com',
                pwd: '456'
            }
        ]);
        const result = await getAllUser();
        expect(repoFunction).toHaveBeenCalled();
        expect(result).toEqual([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            },
            {
                id: '2',
                name: 'TestName2',
                surname: 'TestSurname2',
                email: 'test2@gmail.com',
                pwd: '456'
            }
        ]);
        expect(result[0].id).toBe('1');
        expect(result[1].id).toBe('2');
        expect(result[0].name).toBe('TestName');
        expect(result[1].name).toBe('TestName2');
        expect(result[0].surname).toBe('TestSurname');
        expect(result[1].surname).toBe('TestSurname2');
        expect(result[0].email).toBe('test@gmail.com');
        expect(result[1].email).toBe('test2@gmail.com');
        expect(result[0].pwd).toBe('123');
        expect(result[1].pwd).toBe('456');
        expect(result.length).toBe(2);
        expect(result).toHaveLength(2);;
        expect(result.length).toBe(2);;
    })
})

describe('getUserId:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'getUserIdDB');
        repoFunction.mockResolvedValue([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }
        ]);
        const result = await getUserId('1');
        expect(repoFunction).toHaveBeenCalled();
        expect(result.length).toBe(1);
        expect(result).toEqual([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }
        ]);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('TestName');
        expect(result[0].surname).toBe('TestSurname');
        expect(result[0].email).toBe('test@gmail.com');
        expect(result[0].pwd).toBe('123');
        expect(result.length).toBe(1);
    })
})

describe('createUser:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'createUserDB');
        repoFunction.mockResolvedValue([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }
        ]);
        const result = await createUser('name', 'surname', 'email', 'pwd');
        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].name).toBe('TestName');
        expect(result[0].surname).toBe('TestSurname');
        expect(result[0].email).toBe('test@gmail.com');
        expect(result[0].pwd).toBe('123');
        expect(result).toHaveLength(1);
        expect(result.length).toBe(1);
        expect(result).toEqual([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }
        ]);
    })
})

describe('upDataUser:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'upDataUserDB');
        repoFunction.mockResolvedValue([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }
        ]);
        const result = await upDataUser('1', 'TestName', 'TestSurname', 'test@gmail.com', '123');
        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('TestName');
        expect(result[0].surname).toBe('TestSurname');
        expect(result[0].email).toBe('test@gmail.com');
        expect(result[0].pwd).toBe('123');
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result).toEqual([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }
        ]);
    })
})

describe('deleteUserById:', () => {
    test(('1'), async () => {
        const repoFunction = jest.spyOn(repository, 'deleteUserByIdDB');
        repoFunction.mockResolvedValue([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }
        ]);
        const result = await deleteUserById('1');
        expect(repoFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toEqual([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }
        ]);
    })
})