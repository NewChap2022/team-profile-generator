const Engineer = require('../lib/Engineer');

test("Creates a Engineer object", () => {
    const engineer = new Engineer('Andy', 1, 'andy@example.com', 'andySuper');

    expect(engineer.github).toBe('andySuper');
});

test("Gets engineer's GitHub Url", () => {
    const engineer = new Engineer('Andy', 1, 'andy@example.com', 'andySuper');

    expect(engineer.getGithub()).toBe('andySuper');
});

test("Gets engineer's role", () => {
    const engineer = new Engineer('Andy', 1, 'andy@example.com', 'andySuper');

    expect(engineer.getRole()).toBe('Engineer');
});