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
        mockUserCreate.mockResolvedValue([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '#ppp&njkkl'
            }
        ])
        const result = await createUser('TestName', 'TestSurname', 'test@gmail.com', '#ppp&njkkl');
        expect(mockUserByEmail).toHaveBeenCalled();
        expect(mockHash).toHaveBeenCalled();
        expect(mockUserCreate).toHaveBeenCalled();
        expect(result).toEqual([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '#ppp&njkkl'
            }
        ])
    })
    test(('2'), async () => {
        const mockUserByEmail = jest.spyOn(repository, 'getUserByEmailDB');
        mockUserByEmail.mockResolvedValue([]);
        try {
            await createUser('TestName', 'TestSurname', 'test@gmail.com', '#ppp&njkkl');
        } catch (error: any) {
            expect(mockUserByEmail).toHaveBeenCalled();
            expect(error.message).toBe('такой email уже есть');
        }
    })
})

describe('authorizationUser:', () => {
    test(('1'), async () => {
        const mockGetUserByEmailDB = jest.spyOn(repository, 'getUserByEmailDB');
        const hashMock = jest.spyOn(bcrypt, 'compare');
        mockGetUserByEmailDB.mockResolvedValue([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '#ppp&njkkl'
            }
        ]);
        hashMock.mockResolvedValue(true);
        const result = await authorizationUser('test@gmail.com', '#ppp&njkkl');
        expect(result).toEqual([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '#ppp&njkkl'
            }
        ])
        expect(mockGetUserByEmailDB).toHaveBeenCalled();
        expect(hashMock).toHaveBeenCalled();
    })
    test(('2'), async () => {
        const mockgetUserByEmail = jest.spyOn(repository, 'getUserByEmailDB');
        mockgetUserByEmail.mockResolvedValue([]);
        try {
            await authorizationUser('test@gmail.com', '#ppp&njkkl');
        } catch (error: any) {
            expect(mockgetUserByEmail).toHaveBeenCalled();
            expect(error.message).toBe('Такого пользователя нету');
        }
    })
    test(('3'), async () => {
        const mockgetUserByEmail = jest.spyOn(repository, 'getUserByEmailDB');
        const mockCompare = jest.spyOn(bcrypt, 'compare');
        mockgetUserByEmail.mockResolvedValue([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '#ppp&njkkl'
            }
        ]);
        mockCompare.mockResolvedValue(false);
        try {
            await authorizationUser('test@gmail.com', '#ppp&njkkl');
        } catch (error: any) {
            expect(mockgetUserByEmail).toHaveBeenCalled();
            expect(error.message).toBe('pwd не совпадают');
        }
    })
})

