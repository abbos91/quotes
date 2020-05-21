const simpleQuotes = [
    {
        name: 'Stephen King',
        quote: 'Get Busy living or get busy dying'
    },
    {
        name: 'Abraham Lincoln',
        quote: 'I am success today because i had a friend who belived in me and i did not have the heart to let him down '
    },
    {
        name: 'john Kennedy',
        quote: 'those who dare to fail miserably can achieve greatly' 
    },
    {
        name: 'Leo Tolstoy',
        quote: 'if you want to be happy, be'
    }
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*simpleQuotes.length);
    quoteAuthor.innerHTML = simpleQuotes[number].name;
    quote.innerHTML = simpleQuotes[number].quote;
}