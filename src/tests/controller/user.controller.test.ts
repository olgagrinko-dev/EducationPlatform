import request from 'supertest';
import app from '../../app';

let id

test('POST:', async () => {
    const res = await request(app).post(`/user`).send({ name: 'Olga', surname: 'Grinko', email: '1234nnn@mail.ru', pwd: '1234' });
    id = res.body[0].id;

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})

test('GET:', async () => {
    const res = await request(app).get('/user');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

test('GETById:', async () => {
    const res = await request(app).get(`/user/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})

test('PUT:', async () => {
    const res = await request(app).put(`/user/${id}`).send({ name: 'Olga', surname: 'Grinko', email: '1234nnn@mail.ru', pwd: '1234' });

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})

test('DELETE:', async () => {
    const res = await request(app).delete(`/user/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})