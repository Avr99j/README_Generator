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
        name: 'installation',
        message: "Please mention installation steps for your project",
    },
    {
        type: "input",
        name: 'usage',
        message: "Please mention usage guidelines for your project",
    },
    {
        type: "checkbox",
        name: 'license',
        message: "What type of license did you use?",
        choices: ['Apache', 'Boost', 'BSD', 'CC0', 'Eclipse', 'GNU', 'MIT']
    },
    {
        type: "input",
        name: 'contributing',
        message: "How can someone contribute to your project?",
    },
    {
        type: "input",
        name: 'tests',
        message: "What type of testing was conducted?",
    },
    // {
    //     type: "input",
    //     name: 'questions',
    //     message: "Please contact below if you have any questions for the project",
    // },
    {
        type: "input",
        name: 'github',
        message: "Please enter your GitHub handle",
    },
    {
        type: "input",
        name: 'email',
        message: "Please enter your email address",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, fileName)
    fs.writeFileSync(filePath, data);
}

// functions to generate licence badges
function getLicenseBadges(license) {
    const licenseBadges = {
        Apache: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
        Boost: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
        BSD: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
        CC0: "https://licensebuttons.net/l/zero/1.0/80x15.png",
        Eclipse: "https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0",
        GNU: "https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0",
        MIT: "https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT",
    }
    return licenseBadges[license];
}

// function to initialize program
function init() {
    try {
        inquirer
            .prompt(questions)
            .then(answers => {
                const markdown = generateMarkdown(answers);
                console.log("The README.md file is successfully generated/updated")
                // let readingContent = `${answers.title}`;
                let licenseInfo = getLicenseBadges(answers.license);
                const badgeMarkdown = `[![License](${licenseInfo})] \n \n`
                const markdownWithBadge = badgeMarkdown + markdown;
                writeToFile('README.md', markdownWithBadge);
            })

    } catch (error) {
        console.log("An error has occured: ", error);
    }
}

// function call to initialize program
init();



// const inquirer = require('inquirer');
// const path = require('path');
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown')

// //array of questions for user

// async function userInput() {
//     try {
//         const answers = await inquirer.prompt([{
//             type: "input",
//             name: "title",
//             message: "What is the title of your project"
//         },
//         {
//             type: "input",
//             name: 'description',
//             message: "What is the Description of your project?",
//         },
//         {
//             type: "input",
//             name: 'contents',
//             message: "Please mention a 'Table of Contents' for your project",
//         },
//         {
//             type: "input",
//             name: 'installation',
//             message: "Please mention installation steps for your project",
//         },
//         {
//             type: "input",
//             name: 'usage',
//             message: "Please mention usage guidelines for your project",
//         },
//         {
//             type: "input",
//             name: 'license',
//             message: "What type of license did you use?",
//         },
//         {
//             type: "input",
//             name: 'contributions',
//             message: "How can someone contribute to your project?",
//         },
//         {
//             type: "input",
//             name: 'tests',
//             message: "What type of testing was conducted?",
//         },
//         {
//             type: "input",
//             name: 'questions',
//             message: "Please contact below if you have any questions for the project",
//         },

//         ])
//         return answers;

//     } catch (error) {
//         console.log("An error has occured: ", error);
//     }
// }


// // function to write README file
// async function writeToFile(answers) {
//     try {
//         const markdown = generateMarkdown(answers);
//         const __dirname = path.resolve();
//         const filepath = path.join(__dirname, 'README.md');
//         await fs.writeFileSync(filepath, markdown);

//     } catch (error) {
//         console.log("An error occured writing to file: ", error)
//     }
// }
// // function to initialize program

// async function init() {
//     try {
//         const answers = await userInput();
//         await writeToFile(answers);

//     } catch (error) {
//         console.log("An error has occured: ", error)
//     }
// }

// init()