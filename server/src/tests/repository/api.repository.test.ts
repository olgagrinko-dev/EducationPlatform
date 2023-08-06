import { createUserDB, getUserByEmailDB } from '../../repository/api.repository';

const client = { query: jest.fn() };

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) }
    return {
        Pool: jest.fn(() => pool)
    }
})

describe('createUserDB:', () => {
    test('1', async () => {
        client.query.mockResolvedValue({
            rows: [{
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }]
        })
        const result = await createUserDB('TestName', 'TestSurname', 'test@gmail.com', '123');
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

describe('getUserByEmailDB:', () => {
    test('1', async () => {
        client.query.mockResolvedValue({
            rows: [{
                id: '1',
                name: 'TestName',
                surname: 'TestSurname',
                email: 'test@gmail.com',
                pwd: '123'
            }]
        })
        const result = await getUserByEmailDB('test@gmail.com');
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

