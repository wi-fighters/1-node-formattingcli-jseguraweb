const formatString = string => string.trim().replace(/\s+/g, ' ')

const capitalizeInitial = string => string.split(' ').map(word => word.charAt(0).toLocaleUpperCase().concat(word.substring(1).toLocaleLowerCase())).join(' ')

module.exports = { formatString, capitalizeInitial }