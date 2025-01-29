import { handleSubmit } from '../js/formHandler';
import * as nameChecker from '../js/nameChecker'; // Import the entire module

jest.mock('../js/nameChecker'); // Mock the entire module

describe('handleSubmit', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="test-form">
                <input id="name" type="text" value="Picard">
                <button type="submit">Submit</button>
            </form>
            <div id="results"></div>
        `;
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve({ message: 'Success' })
        }));
    });

    test('should prevent default form submission', () => {
        const event = { preventDefault: jest.fn() };
        handleSubmit(event);
        expect(event.preventDefault).toHaveBeenCalled();
    });

    test('should call checkForName with the correct input', () => {
        const event = { preventDefault: jest.fn() };
        handleSubmit(event);
        expect(nameChecker.checkForName).toHaveBeenCalledWith('Picard'); // Use the imported module
    });

    test('should fetch data from the API and update the DOM', async () => {
        const event = { preventDefault: jest.fn() };
        await handleSubmit(event);
        expect(document.getElementById('results').innerHTML).toBe('Success');
    });

    // New test cases
    test('should handle different valid names', async () => {
        const names = ['Janeway', 'Kirk', 'Archer', 'Georgiou'];
        for (const name of names) {
            document.getElementById('name').value = name;
            const event = { preventDefault: jest.fn() };
            await handleSubmit(event);
            expect(nameChecker.checkForName).toHaveBeenCalledWith(name);
        }
    });

    test('should handle API fetch failure', async () => {
        window.fetch.mockImplementationOnce(() => Promise.reject('API is down'));
        const event = { preventDefault: jest.fn() };
        await handleSubmit(event);
        expect(document.getElementById('results').innerHTML).toBe(''); // Assuming no update on failure
    });
});
