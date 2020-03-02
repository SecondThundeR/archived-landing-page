'use strict';
let fourZeroFourWords = [
    "There is probably something here, but there is only this error",
    "Hey! Looking for something? Sorry to upset you, but this error is here",
    "It seems ... there is nothing here :(",
    "Not so fast! You obviously turned the wrong way, but we do not blame you for this",
    'Aristotle once said: "If you wrote the wrong link, then you will definitely see the 404 error" But we are not sure exactly whether he said it or not',
    "Hi, this is me - error 404!. I'm glad to meet you, but probably you are not very happy :(",
    "Emptiness ... This is what you feel here, isn't it? But this is not forever :)",
    "We can endlessly look at 3 things: how the fire burns, how the water flows and how this error looks on this page",
    "404 - these 3 numbers mean a lot. In this case, it means that you went to a non-existing page"
];

function testFun() {
    let randomWord = Math.floor(Math.random() * fourZeroFourWords.length);
    let text = document.getElementById('quotes');
    text.innerHTML = fourZeroFourWords[randomWord];
}

testFun();
