const EMOJI_STARTING_UNICODE = '1F600'
const EMOJI_ENDING_UNICODE = '1F64F'
 
function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}

function getUnicodeFromCodePoint(codePoint) {
    return String.fromCodePoint(parseInt(codePoint,16));
}

function getCodePointDifference(a,b){
    return (parseInt(a,16) - parseInt(b,16)) + 1
}

console.log(getUnicodeFromCodePoint('1F64F'))
console.log(getCodePointDifference(EMOJI_ENDING_UNICODE,EMOJI_STARTING_UNICODE))