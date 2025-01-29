const app = require('./src/server/index'); // Import the app from index.js

let server;

beforeAll((done) => {
    server = app.listen(0, () => { // Listen on a random available port
        done();
    });
});

afterAll((done) => {
    server.close(done); // Close the server after tests
});
