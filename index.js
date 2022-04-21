// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'Video',
            message: 'Run test on your application, make a video of you testing your App',
        },
        {
            type: 'input',
            name: 'Title',
            message: "Title of your project",
            },
        {
            type: 'input',
            name: 'Description',
            message: "What is this project about? What was your motivation? What did you learn?",
            },
        {
                type: 'input',
                name: 'Installation',
                message: 'What are the steps required to install your project?',
            },
        {
                type: 'input',
                name: 'Usage',
                message: 'Provide instruction and examples for use',
            },
        {
                type: 'input',
                name: 'Credits',
                message: 'List your collaborators',
            },  
        {
                type: 'checkbox',
                name: 'License',
                message: 'List of license',
                choices: [
                    'MIT',
                    'IBM',
                    'Mozilla',
                    'Perl',
                    'SIL',
                ]
            },
        {
                type: 'input',
                name: 'Contribute',
                message: 'Create application or package you would like to develop',
            },
        

])

.then((response) => {
    console.log(response);
    let badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` 
    let badge2 = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    let badge3 = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    let badge4 = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    let badge5 = `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`
    console.log(typeof response.description)
    let text = `## Video:
    ![alt text](${response.test}?raw=true)
    ${response.test}
## Title ${response.Title}
## Description: 
${response.Description}
## Installation:
    ${response.Installation}
## Usage:
    ${response.Usage}
## Credits:
    ${response.Credits}
## License: 
${badge}
${badge2}
${badge3}
${badge4}
${badge5}
    ${response.License}
## Contribute:
    ${response.Contribute}

    
`
;
    fs.writeFile("README.md", text, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

);

