const showHelp = string => {
    return `How to use this program: \n\t1. When you input a new string with more than 1 space the program will sanitize it. \n\t2. If you typed the name of a city without capitalization the program will capitalize it. \n\t3. If you included a Capitalized letter inside the wrong place of your string the program will sanitize it. \n${string}`
}

module.exports = showHelp