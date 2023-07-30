import { getAllUserDB, getUserIdDB, createUserDB, upDataUserDB, deleteUserByIdDB } from '../../repository/user.repository';

const client = { query: jest.fn() };

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) }
    return {
        Pool: jest.fn(() => pool)
    }
})

describe('getAllUserDB', () => {
    test('1', async () => {
        client.query.mockResolvedValue({
            rows: [
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
            ]
        })
        const result = await getAllUserDB();
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([{
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
        }])
        expect(result.length).toBe(2);
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
    })
})

describe('getUserIdDB', () => {
    test('1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    id: '1',
                    name: 'TestName',
                    surname: 'TestSurname',
                    email: 'test@gmail.com',
                    pwd: '123'
                }
            ]
        })
        const result = await getUserIdDB('1');
        expect(client.query).toHaveBeenCalled();
        expect(result).toEqual([
            {
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }
        ])
        expect(result.length).toBe(1);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('TestName');
        expect(result[0].surname).toBe('TestSurname');
        expect(result[0].email).toBe('test@gmail.com');
        expect(result[0].pwd).toBe('123');
    })
})