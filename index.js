const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');

// TODO: Include packages needed for this application
// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter your Github username.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter your email address.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository or project?',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter a title for your repository or project.';
            }
            return true;
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None'],
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please select a license for your repository or project.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your repository or project.',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter a description for your repository or project.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions for your repository or project.',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter installation instructions for your repository or project.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your repository or project? Provide instructions and examples for use',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter usage information for your repository or project.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter contribution guidelines for and how to contribute to your repository or project.',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter contribution guidelines for your repository or project.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions for your repository or project.',
        validate: function (input) {
            if (input.trim() === '') {
                return 'Please enter test instructions for your repository or project.';
            }
            return true;
        },
    }
    // Rest of the questions...
];

// Invoke inquirer prompt on the array of questions
inquirer.prompt(questions)
    .then(data => {
        return generateMarkdown(data);
    })
    .then(markdown => {
        fs.writeFile('README.md', markdown, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('File created!');
            }
        });
    });

// Rest of the code...
