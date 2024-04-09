// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'Apache') {
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'GPL') {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === 'BSD') {
        return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPL') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'BSD') {
        return 'https://opensource.org/licenses/BSD-3-Clause';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `## License
        ${license}
        `;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  ## License: ${renderLicenseBadge(data.license)}
    ${data.license}

  ## Description
    ${data.description}

  ## Install
    ${data.install}

  ## Usage
    ${data.usage}

  ## Contributors
    ${data.contribute}

  ## Testing
    ${data.test}

  ## Questions
    If you have any questions contact me at ${data.email} or you can reach me at www.github.com/${data.github}
`;
}

module.exports = generateMarkdown;

// const generateInstall = installText => {
//   if (!installText) {
//     return ''
//   } else {
//     return `## Installation
//   ${installText}
//   `
//   }
// }
// const generateContribute = contributeText => {
//   if (!contributeText) {
//     return ''
//   } else {
//     return `## Contributors 
//   ${contributeText}
//   `
//   }
// }
// const generateTesting = testText => {
//   if (!testText) {
//     return ''
//   } else {
//     return `## Testing
//   ${testText}
//   `
//   }
// }
// const installCheck = check => {
//   if (!check) {
//     return '';
//   } else {
//     return `* [Installation](#installation)`
//   }
// }
// const contributeCheck = check => {
//   if (!check) {
//     return '';
//   } else {
//     return `* [Contributions](#contributions)`
//   }
// }
// const testCheck = check => {
//   if (!check) {
//     return '';
//   } else {
//     return `* [Testing](#testing)`
//   }
// }



// // function to generate markdown for README
// function generateMarkdown(data) {
//   return `
//   ![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
//   # ${data.title}
//   ## Description
//   ${data.about}
//   ## Table of Contents
//   ${installCheck(data.install)}
//   * [Usage](#usage)
//   * [License](#license)
//   ${contributeCheck(data.contribution)}
//   ${testCheck(data.testing)}
//   * [Questions](#questions)
  
//   ${generateInstall(data.install)}
//   ## Usage
//   ${data.usage}
//   ## License
//   * This application is covered under the ${data.license} license
//   ${generateContribute(data.contribution)}
//   ${generateTesting(data.testing)}
//   ## Questions
//   Created by: [${data.githubUsername}](${data.gitLink})
  
//   If you have any further questions please feel free to contact me at [${data.email}](${data.email})
// `;
// }