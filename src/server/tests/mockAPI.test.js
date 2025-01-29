const mockAPIResponse = require('../mockAPI');

describe('Mock API Response', () => {
    test('should have the expected structure and content', () => {
        expect(mockAPIResponse).toEqual({
            title: 'test json response',
            message: 'this is a message',
            time: 'now'
        });
    });

    // New test cases
    test('should handle missing fields', () => {
        const incompleteResponse = { title: 'test json response' }; // Missing message and time
        expect(incompleteResponse).not.toHaveProperty('message');
        expect(incompleteResponse).not.toHaveProperty('time');
    });

    test('should handle unexpected values', () => {
        const unexpectedResponse = { title: 'test json response', message: 123, time: 'now' }; // Message should be a string
        expect(typeof unexpectedResponse.message).toBe('string');
    });
});
