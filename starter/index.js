const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project"
    },
    {
        type: "input",
        name: 'description',
        message: "What is the Description of your project?",
    },
    {
        type: "input",
        name: 'contents',
        message: "Please mention a 'Table of Contents' for your project",
    },
    {
        type: "input",
        name: 'installation',
        message: "Please mention installation steps for your project",
    },
    {
        type: "input",
        name: 'usage',
        message: "Please mention usage guidelines for your project",
    },
    {
        type: "input",
        name: 'license',
        message: "What type of license did you use?",
    },
    {
        type: "input",
        name: 'contributions',
        message: "How can someone contribute to your project?",
    },
    {
        type: "input",
        name: 'tests',
        message: "What type of testing was conducted?",
    },
    {
        type: "input",
        name: 'questions',
        message: "Please contact below if you have any questions for the project",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(__dirname, fileName)
    fs.writeFileSync(filePath, data);
}

// function to initialize program
function init() {
    try {
        inquirer
            .prompt(questions)
            .then(answers => {
                const markdown = generateMarkdown(answers);
                const result = writeToFile('README.md', markdown)


            })

    } catch (error) {
        console.log("An error has occured: ", error);
    }

}

// function call to initialize program
init();
