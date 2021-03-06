// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//changed from function to const
//added the README text content
const generateMarkdown = answers => {
  return `
  
  # ${answers.title}

  ## Description
  ${answers.description}
  ![Read Me Image](./ReadMeExample.jpg)

  ## Table of contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [How To Contribute](#How-to-Contribute)
  - [License](#License)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}
  
  [Watch the video](https://drive.google.com/file/d/1BU3mawMrZc_rwoywFP3lGs-4a46dxI0x/view)
  

  ## How to Contribute 
  ${answers.contribute}
  
  ## License
  This project is licensed under ${answers.license}

  ## Tests
  ${answers.tests}

  ## Questions
  If you have any questions, please contact me at ${answers.email}. You can view my projects at https://github.com/${answers.github}.
`;
}

module.exports = generateMarkdown;
