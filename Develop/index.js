// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a short description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please include any install instructions you have.",
    name: "instructions",
  },
  {
    type: "input",
    message: "Could you please explain the usage of this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "If someone were interested in contributing how would they do it?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Provide a test to users for your application",
    name: "test",
  },
  {
    type: "input",
    message: "Provide an email to contact you with questions",
    name: "contact",
  },
  {
    type: "input",
    message: "Github page URL",
    name: "gitHub",
  },
  {
    type: "list",
    message: "Please select a license",
    choices: ["Choice 1", "Choice 2"],
    name: "license",
  },
];

// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions).then(function (response) {
    // TODO: Create a function to write README file
    var md = `# ${response.title}
    
## Description
${response.description}

## Table of Contents
- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [Questions](#questions)






## Installation
${response.instructions}







## Usage
${response.usage}





## Contributors
${response.contribution}




## Test
${response.test}




## Questions
${response.contact} is my email, feel free to reach out to me!
${response.gitHub} Github Profile Link`;

    // function writeToFile(fileName, data) {
    fs.writeFile("readme.md", md, (err) => {
      if (err) throw err;
    });
  });
}
// Function call to initialize app
init();
