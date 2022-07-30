/*
    Full Emoji list at https://unicode.org/emoji/charts/full-emoji-list.html
    
*/
//Emoticons 
const EMOTICONS_STARTING_UNICODE_CODEPOINT = '1F600';
const EMOTICONS_ENDING_UNICODE_CODEPOINT = '1F64F';
const TRANSPORT_AND_MAP_STARTING_UNICODE_CODEPOINT = '1F680';
const TRANSPORT_AND_MAP_ENDING_UNICODE_CODEPOINT = '1F6C0';
const OTHER_STARTING_UNICODE_CODEPOINT = '1F300';
const OTHER_ENDING_UNICODE_CODEPOINT = '1F9FF';
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

function populateEmojiList(emojiStartingCodePoint,emojiEndingCodePoint){
    let emojiCodePoint = emojiStartingCodePoint;
    let emojiCodePointRange = getCodePointDifference(emojiEndingCodePoint,emojiStartingCodePoint);
    for (let i = 0; i < emojiCodePointRange; i++) {
        EMOJI_CODEPOINT_ARRAY.push(emojiCodePoint);
        EMOJI_ARRAY.push(getUnicodeFromCodePoint(emojiCodePoint));
        emojiCodePoint = (parseInt(emojiCodePoint, 16) + 1).toString(16).toUpperCase();
    }
}

function randomizeEmoji(element){
    let range = EMOJI_ARRAY.length;
    let random = getRandomNumber(range);
    element.textContent = EMOJI_ARRAY[random];
    console.log(EMOJI_ARRAY[random], EMOJI_CODEPOINT_ARRAY[random])
}

populateEmojiList(EMOTICONS_STARTING_UNICODE_CODEPOINT, EMOTICONS_ENDING_UNICODE_CODEPOINT);
populateEmojiList(TRANSPORT_AND_MAP_STARTING_UNICODE_CODEPOINT, TRANSPORT_AND_MAP_ENDING_UNICODE_CODEPOINT);
populateEmojiList(OTHER_STARTING_UNICODE_CODEPOINT, OTHER_ENDING_UNICODE_CODEPOINT);
let emojiElement = document.getElementById("emoji-display");
randomizeEmoji(emojiElement);

let theEmojiButton = document.getElementById("the-emoji-button");
theEmojiButton.addEventListener("click", () => randomizeEmoji(emojiElement));



