const quotes = [
    {
        quote: "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
        author: "Aristotle",
    },
    {
        quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Your happiness is defined by what makes your spirit sing.",
        author: "Nancy Sullivan",
    },
    {
        quote: "The only true happiness comes from squandering ourselves for a purpose.",
        author: "William Cowper",
    },
    {
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle",
    },
    {
        quote: "Most folks are about as happy as they make up their minds to be.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Blessedness is not the reward of virtue but virtue itself.",
        author: "Baruch Spinoza",
    },
    {
        quote: "Everything in your world is created by what you think.",
        author: "Oprah Winfrey",
    },
    {
        quote: "When you have a dream, you're got to grab it and never let go.",
        author: "Carol Burnett",
    },
    {
        quote: "That some achieve great success, is proof to all that others can achieve it as well.",
        author: "Abraham Lincoln",
    },
    
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;