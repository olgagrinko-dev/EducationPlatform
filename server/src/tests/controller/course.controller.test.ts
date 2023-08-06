import request from 'supertest';
import app from '../../app';

let id;

test('POST:', async () => {
    const res = await request(app).post(`/course`).send({ course: 'integrtest' });
    id = res.body[0].id;

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})

test('GET:', async () => {
    const res = await request(app).get(`/course`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

test('GETById:', async () => {
    const res = await request(app).get(`/course/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

test('PUT:', async () => {
    const res = await request(app).put(`/course/${id}`).send({ course: 'integrtest' });

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})

test('DELETE:', async () => {
    const res = await request(app).delete(`/course/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})