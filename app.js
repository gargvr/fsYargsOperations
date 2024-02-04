const fs = require('fs');
const arguments = require('yargs').argv;

//Save filename using yargs
let fileName = arguments.filename;

//check for file if already exists
fs.stat(`./data/${fileName}`, (err, res) => {
    if (err) {
        addFileNames();
    } else {
        console.log(`File ${fileName} already exists! Please give a new file.`)
    }
})

//save filenames in a different file
function addFileNames() {
    fs.appendFile('./data/fileNames.txt', `${fileName}\n`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Filename added");
            createNewFile();
        }
    })
}

//Create new file if not exists
function createNewFile() {
    fs.writeFile(`./data/${fileName}`, 'You are awesome', (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`The ${fileName} has been created.`);
        }
    })
};