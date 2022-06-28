const Employee = require('../lib/Employee');

test("creates an Employee object", () => {
    const employee = new Employee('Andy', 1, 'andy@example.com');

    expect(employee.name).toBe('Andy');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('andy@example.com');
});

test("Gets employee's name", () => {
    const employee = new Employee('Andy', 1, 'andy@example.com');

    expect(employee.getName()).toBe('Andy');
});

test("Gets employee's id", () => {
    const employee = new Employee('Andy', 1, 'andy@example.com');

    expect(employee.getId()).toBe(1);
});

test("Gets employee's id", () => {
    const employee = new Employee('Andy', 1, 'andy@example.com');

    expect(employee.getEmail()).toBe('andy@example.com');
});

test("Gets employee's role", () => {
    const employee = new Employee('Andy', 1, 'andy@example.com');

    expect(employee.getRole()).toBe('Employee');
});