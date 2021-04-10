//TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//Array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "projectTitle",
        message: "Project Title:",
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Project Description:",
      },
      {
        type: "list",
        name: "licenses",
        message: "Which kind of license does your project have?",
        choices: ["None", "MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
      },
      {
        type: "input",
        name: "installInstructions",
        message: "Installation Instructions:",
      },
      {
        type: "input",
        name: "usageGuide",
        message: "Usage Guide:",
      },
      {
        type: "input",
        name: "contributors",
        message: "Contributing Developers",      
      },
      {
        type: "input",
        name: "tests",
        message: "Tests",
      }
];

// TODO: Create a function to write README file
function writeMyFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.error(err) : console.log("SUCCESS!"));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const answers = generateMarkdown(data);
        writeMyFile("README.md", answers);
    })
}

// Function call to initialize app
init();