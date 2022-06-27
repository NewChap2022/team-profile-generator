const Manager = require('../lib/Manager');

test("creates a Manager object", () => {
    const manager = new Manager('Andy', '1', 'andy@example.com', '1');

    expect(manager.officeNumber).toBe('1');
});

test("Gets manager's office number", () => {
    const manager = new Manager('Andy', '1', 'andy@example.com', '1');

    expect(manager.getOfficeNumber()).toBe('1');
});

test("Gets manager's role", () => {
    const manager = new Manager('Andy', '1', 'andy@example.com', '1');

    expect(manager.getRole()).toBe('Manager');
});