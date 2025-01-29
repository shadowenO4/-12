import { checkForName } from '../js/nameChecker';

describe('checkForName', () => {
    test('should alert "Welcome, Captain!" for valid names', () => {
        checkForName('Picard');
        expect(window.alert).toHaveBeenCalledWith('Welcome, Captain!');
    });

    test('should not alert for invalid names', () => {
        checkForName('InvalidName');
        expect(window.alert).not.toHaveBeenCalled();
    });

    test('should alert "Welcome, Captain!" for valid names', () => {
        checkForName('Janeway');
        expect(window.alert).toHaveBeenCalledWith('Welcome, Captain!');
    });

    test('should alert "Welcome, Captain!" for valid names', () => {
        checkForName('Kirk');
        expect(window.alert).toHaveBeenCalledWith('Welcome, Captain!');
    });

    test('should alert "Welcome, Captain!" for valid names', () => {
        checkForName('Archer');
        expect(window.alert).toHaveBeenCalledWith('Welcome, Captain!');
    });

    test('should alert "Welcome, Captain!" for valid names', () => {
        checkForName('Georgiou');
        expect(window.alert).toHaveBeenCalledWith('Welcome, Captain!');
    });

    test('should not alert for invalid names', () => {
        checkForName('InvalidName');
        expect(window.alert).not.toHaveBeenCalled();
    });

    beforeEach(() => {
        document.body.innerHTML = '<div id="result"></div>';
        window.alert = jest.fn(); // Mock alert
    });

    test('should alert "Welcome, Captain!" for valid names', () => {
        checkForName('Picard');
        expect(window.alert).toHaveBeenCalledWith('Welcome, Captain!');
    });

    test('should not alert for invalid names', () => {
        checkForName('InvalidName');
        expect(window.alert).not.toHaveBeenCalled();
    });
});
