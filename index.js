const { formatString, capitalizeInitial } = require('./formatting.js')
const showHelp = require('./messaging.js')
const helpMessage = '--help'

let args = process.argv.slice(2)

// console.log(args);

let [string, help] = args;

(() => {
    string = capitalizeInitial(formatString(string))
    if (help === helpMessage) {
        console.log(showHelp(string));
    } else {
        console.log(string);
    }
})()

// Example 1: node index.js 'kuAlA luMPur'
// Example 2: node index.js ' mIAMi   vice'
// Example 3: node index.js 'kuAlA luMPur' --help
// Example 4: node index.js ' mIAMi   vice' --help