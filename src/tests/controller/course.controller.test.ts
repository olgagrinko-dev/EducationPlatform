import request from 'supertest';
import app from '../../app';

test('POST:', async () => {
    const res = await request(app).post('/course').send({ course: 'integrtest' });
    console.log(res);

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})