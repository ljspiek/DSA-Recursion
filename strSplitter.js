const strSplitter = (str, separator) => {
    let index = str.indexOf(separator)
    if(index < 0) {
        return [str]
    } else {
        return [str.slice(0, index)].concat(strSplitter(str.slice(index + separator.length), separator))
    }
}

console.log(strSplitter("02/20/2020", "/"))

