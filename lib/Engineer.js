const Employee = require('./Employee');

// add class engineer and create element is unique for engineers
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;