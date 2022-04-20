// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'title',
            message: "Title of your project",
            },
        {
            type: 'input',
            name: 'description',
            message: "What is this project about? What was your motivation? What did you learn?",
            },
        {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project?',
            },
        {
                type: 'input',
                name: 'usage',
                message: 'Provide instruction and examples for use',
            },
        {
                type: 'input',
                name: 'credits',
                message: 'List your collaborators',
            },  
        {
                type: 'checkbox',
                name: 'license',
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
                name: 'feature',
                message: 'List of features',
            },
        {
                type: 'input',
                name: 'contribute',
                message: 'Create application or package you would like to develop',
            },
        {
                type: 'input',
                name: 'test',
                message: 'Run test on your application, make a video of you testing your App',
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
    let text = `## title ${response.Title}
## description: 
${response.description}
## installation:
    ${response.installation}
## usage:
    ${response.usage}
## credits:
    ${response.credits}
## license: 
${badge}
${badge2}
${badge3}
${badge4}
${badge5}
    ${response.license}
## feature:
    ${response.feature}
## contribute:
    ${response.contribute}
## test:
![alt text](${response.test}?raw=true)
    ${response.test}

    
`
;
    fs.writeFile("README.md", text, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

);


    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) { }
    // FileSystem.writeToFile('README.md', `
    // # READ ME Generator
    // ![GitHub license](https:)
    
    // ## Description
    
    // lorem ipsum
    
    // ## Table of Contents 
    
    
    // ` , (err) =>
    // // TODO: Create a function to initialize app
    // function init() { }

    // // Function call to initialize app
    // init();
