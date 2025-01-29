const request = require('supertest');
const app = require('../index'); // Import the app from index.js

describe('GET /', () => {
    it('should serve the index.html file', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toEqual(expect.stringContaining('html'));
    });
});

describe('GET /testAPI', () => {
    it('should return the mock API response', async () => {
        const response = await request(app).get('/testAPI');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            title: 'test json response',
            message: 'this is a message',
            time: 'now'
        });
    });
});

// New test cases for additional endpoints
describe('GET /nonexistent', () => {
    it('should return 404 for nonexistent endpoints', async () => {
        const response = await request(app).get('/nonexistent');
        expect(response.status).toBe(404);
    });
});
