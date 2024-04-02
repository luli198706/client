import app from './index';
import server from './index';
const request = require("supertest");

describe('GET /users', () => {

    afterAll((done) => {
        server.close(done);//close server.listen after unit test
    });

    it('should get the user info which is matching the requested surname and response 200 OK', async () => {
        const response = await request(app).get('/users?surName=Harris');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { surName: 'Harris', firstName: 'Dava', emailAddress: 'dava.ha@demo.com' }
        ]);
    });

    it('should response 400 if surname is not provided', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(400);
    });
});