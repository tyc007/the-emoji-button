const EMOJI_STARTING_UNICODE = '1F600';
const EMOJI_ENDING_UNICODE = '1F64F';
const EMOJI_CODEPOINT_ARRAY = [];
const EMOJI_ARRAY = [];

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getUnicodeFromCodePoint(codePoint) {
    return String.fromCodePoint(parseInt(codePoint,16));
}

function getCodePointDifference(a,b){
    return (parseInt(a,16) - parseInt(b,16)) + 1;
}

function populateEmojiList(){
    let emojiCodePoint = EMOJI_STARTING_UNICODE;
    let emojiCodePointRange = getCodePointDifference(EMOJI_ENDING_UNICODE,EMOJI_STARTING_UNICODE);
    for (let i = 0; i < emojiCodePointRange; i++) {
        EMOJI_CODEPOINT_ARRAY.push(emojiCodePoint);
        EMOJI_ARRAY.push(getUnicodeFromCodePoint(emojiCodePoint));
        emojiCodePoint = (parseInt(emojiCodePoint, 16) + 1).toString(16).toUpperCase();
    }
}

function randomizeEmoji(element){
    let range = getCodePointDifference(EMOJI_ENDING_UNICODE,EMOJI_STARTING_UNICODE);
    let random = getRandomNumber(range);
    element.textContent = EMOJI_ARRAY[random];
}

populateEmojiList();
let emojiElement = document.getElementById("emoji-display");
randomizeEmoji(emojiElement);

let theEmojiButton = document.getElementById("the-emoji-button");
theEmojiButton.addEventListener("click", function(){
    randomizeEmoji(emojiElement);
}); 



