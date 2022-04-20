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
        message: 'What is this project about?',
        },
    {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?',
        },
    {
            type: 'input',
            name: 'projectReasoning',
            message: 'Why did you build this project?',
        },
    {
            type: 'input',
            name: 'solve',
            message: 'What problem does it solve?',
        },  
    {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?',
        },
    ]);
    .then((response) => {
        console.log(response);
        let text = `## ${response.title}
        ## ${response.description}
        ## ${response.motivation}
        ## ${response.projectReasoning}
        ## ${response.solve}
        ## ${response.learn}
        
        ${generateText(response)}`
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
