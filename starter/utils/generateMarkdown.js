// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
 

  ## Installation 
  ${data.installation}


  ## Usage
  ${data.usage}


  ## License
  This project is licensed under the ${data.license} license.


  ## Contributing
  ${data.contributing}


  ## Tests
  ${data.tests}
  

  ## Questions
  If you have any questions, please reach me at:
  GitHub : [${data.github}](https://github.com/${data.github})\n
  Email: [${data.email}](mailto: ${data.email})\n`;
}

module.exports = generateMarkdown;
