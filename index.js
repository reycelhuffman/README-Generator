// TODO: Include packages needed for this application



// TODO: Create an array of questions for user input
const questions = require(questions);
    const fs = [];

    const questions = [
        {
            type: 'input',
            name: 'tvShow',
            message: "What's your favorite TV show?",
        },
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Want to enter another TV show favorite (just hit enter for YES)?',
            default: true,
        },
    ];

    function ask() {
        inquirer.prompt(questions).then((answers) => {
            output.push(answers.tvShow);
            if (answers.askAgain) {
                ask();
            } else {
                console.log('Your favorite TV Shows:', output.join(', '));
            }
        });
    }

    ask();

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
