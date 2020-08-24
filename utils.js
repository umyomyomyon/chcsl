const  isModRow = (text) => {
    const initialChar = text[0]
    const isMod = initialChar === '+'
    return isMod
}

const isChunkHeaderRow = (text) => {
    const initialChar = text[0]
    const secondChar = text[1]
    const isChunkHeader = initialChar === "@" && secondChar === "@"
    return isChunkHeader
}

const textToRows = (text) => {
    return text.split('\n')
}
