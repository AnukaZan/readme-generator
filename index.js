// add inquirer
const inquirer = require('inquirer');

//add FS
const fs = require('fs');

const generateMarkdown = require('./Develop/utils/generateMarkdown'); //link to page with generate code

//an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Are there any guidelines on how to contribute?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which is your project licensed under?',
            choices: ['MIT', 'Apache', 'GNU GLPv2', 'GNU GLPv3', 'ISC', 'Open-source']
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests are there? Provide examples on how to run them'
        },
        {
            type: 'input',
            name: 'github',
            message: "Input your GitHub username:",
            validate: userName => {
                if (userName){
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input your email address:',
            validate: emailName => {
                if (emailName){
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err){
            console.log(err);
        }
         //throw err; //if error then stop execution of code

        console.log("HOORAY! Your README has been generated")
    })
};

promptUser() //show questions
    .then(promptAnswers => { return generateMarkdown(promptAnswers);}) //use generateMarkDown function on the answer results
    .then(data => { return writeToFile(data)}); //create ReadMe with answer data