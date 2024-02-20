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
        name: 'sections',
        message: "What sections do you want in your README file?",
        choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'ontributing', 'Tests', 'Questions']
    }

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
