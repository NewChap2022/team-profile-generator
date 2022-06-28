const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./utils/generate-site.js');

const promptStartApp = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmRunApp',
            message: "Would you like to create a Html file for your team?",
            default: true
        }
    ])
        .then(answer => {
            if (answer.confirmRunApp) {
                Promise.resolve();
            } else {
                throw new Error("See you again soon!");
            }
        })
};

const promptManagerInfo = employeeInfo => {
    if (!employeeInfo) {
        employeeInfo = {};
        employeeInfo.managers = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name of this team?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },

        {
            type: 'number',
            name: 'id',
            message: "What is the ID of this manager?",
            validate: id => {
                if (!id) {
                    console.log(".   Please enter a number");
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is this manager's email address?",
            validate: emailInput => {
                let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (emailInput && valid) {
                    return true;
                } else if (emailInput && !valid) {
                    console.log('.  Please enter a valid email');
                    return false;
                } else {
                    console.log("Please enter this manager's email address!");
                    return false;
                }
            }
        },

        {
            type: 'number',
            name: 'officeNumber',
            message: "What is the office number of this manager?",
            validate: id => {
                if (!id) {
                    console.log(".   Please enter a number");
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAnotherManager',
            message: "Do you need to enter another manager's information?",
            default: false
        },
    ])
        .then(managerData => {
            employeeInfo.managers.push(new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber));
            if (managerData.confirmAnotherManager) {
                return promptManagerInfo(employeeInfo);
            } else {
                console.log(employeeInfo);
                return employeeInfo;
            }
        })
};

const promptOtherEmpInfo = employeeInfo => {
    if (!employeeInfo.engineers) {
        employeeInfo.engineers = [];
    }

    if (!employeeInfo.interns) {
        employeeInfo.interns = [];
    }

    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'typeOfEmployee',
            message: "What role does this employee have?",
            choices: ['Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },

        {
            type: 'number',
            name: 'id',
            message: "What is the ID of this employee?",
            validate: id => {
                if (!id) {
                    console.log(".   Please enter a number");
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?",
            validate: emailInput => {
                let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (emailInput && valid) {
                    return true;
                } else if (emailInput && !valid) {
                    console.log('.  Please enter a valid email');
                    return false;
                } else {
                    console.log("Please enter this employee's email address!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: "What is the GitHub username of this employee?",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter the employee's GitHub username!");
                    return false;
                }
            },
            when: ({ typeOfEmployee }) => {
                if (typeOfEmployee === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: "What is the school of this employee?",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter the employee's GitHub username!");
                    return false;
                }
            },
            when: ({ typeOfEmployee }) => {
                if (typeOfEmployee === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAnotherEmployee',
            message: "Do you need to enter another employee's information?",
            default: true
        },
    ])
        .then(employeeData => {
            console.log(employeeData);
            if (employeeData.typeOfEmployee === 'Engineer') {
                employeeInfo.engineers.push(new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github));
            } else {
                employeeInfo.interns.push(new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school))
            };

            if (employeeData.confirmAnotherEmployee) {
                return promptOtherEmpInfo(employeeInfo);
            } else {
                console.log(employeeInfo);
                return employeeInfo;
            }
        })

}

const init = () => {
    promptStartApp()
        .then(promptManagerInfo)
        .then(promptOtherEmpInfo)
        .then(employeeData => {
            return generatePage(employeeData);
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => {
            console.log(err.message);
        })
}

init()