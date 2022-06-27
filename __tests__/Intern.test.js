const Intern = require('../lib/intern');

test("Creates a intern object", () => {
    const intern = new Intern('Andy', '1', 'andy@example.com', 'Coding School');

    expect(intern.school).toBe('Coding School');
});

test("Gets intern's school", () => {
    const intern = new Intern('Andy', '1', 'andy@example.com', 'Coding School');

    expect(intern.getSchool()).toBe('Coding School');
});

test("Gets intern's role", () => {
    const intern = new Intern('Andy', '1', 'andy@example.com', 'Coding School');

    expect(intern.getRole()).toBe('Intern');
});