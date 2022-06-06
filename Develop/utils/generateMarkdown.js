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
const generateMarkdown = data => {
  return `# ${data.title}

  ##Description
  ${data.description}

  ##Table of contents
  * [Installation] (#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## How To Install
  ${data.install}

  ##Usage
  ${data.usage}

  ## How to Contribute 
  ${data.contribute}
  
  ##License
  This project is licensed under ${data.license}

  ## Questions
  If you have any questions, please contact me at ${data.email}. You can view my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
