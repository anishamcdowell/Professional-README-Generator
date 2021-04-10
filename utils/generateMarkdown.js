// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description
${data.projectDescription}

## Table of Contents
        * [Licenses](#licenses)
        * [Installation Instructions](#Installation Instructions)
        * [Usage Guide](#Usage Guide)
        * [Contributing Developers](#Contributors)
        * [Tests](#Tests);

## Licenses
${data.licenses}

## Installation
${data.installationInstructions}

## Usage
${data.usageGuide}

## Contributing Developers
${data.contributors}

## Tests
${data.tests}

## Contact
${data.username} | ${data.email}`;
}


module.exports = generateMarkdown;
