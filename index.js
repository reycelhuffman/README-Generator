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
                type: 'input',
                name: 'license',
                message: 'List of license',
            },
        {
                type: 'input',
                name: 'badges',
                message: 'List of badges',
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
    let text = `## title
${response.Title}
## decription: 
${response.description}
## installation:
    ${response.installation}
## usage:
    ${response.usage}
## credits:
    ${response.credits}
## license:
    ${response.license}
## badges:
    ${response.badges}
## feature:
    ${response.feature}
## contribute:
    ${response.contribute}
## test:
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
