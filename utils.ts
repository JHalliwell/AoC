const readFileAsArray = (file: string, split: string): string[] => {
    var fs = require('fs')
    var text: string = fs.readFileSync(file).toString('utf-8')
    return text.split(split)
}

export const utils = { readFileAsArray }