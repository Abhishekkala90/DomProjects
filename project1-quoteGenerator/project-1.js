//Variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: "Nelson Mandela",
  },
  {
    quote: `"The way to get started is to quit talking and begin doing."`,
    person: "Walt Disney",
  },
  {
    quote: `"If life were predictable it would cease to be life, and be without flavor. "`,
    person: "Eleanor Roosevelt",
  },
  {
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. "`,
    person: "James Cameron",
  },
  {
    quote: `"Life is what happens when you're busy making other plans."`,
    person: "John Lennon",
  },
  {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier. "`,
    person: "Mother Teresa",
  },
  {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person: "Aristotle",
  },
  {
    quote: `"ou will face many defeats in life, but never let yourself be defeated."`,
    person: "Maya Angelou",
  },
  {
    quote: `"Only a life lived for others is a life worthwhile."`,
    person: "Albert Einstein",
  },
  { quote: `"The purpose of our lives is to be happy."`, person: "Dalai Lama" },
  {
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking."`,
    person: "Steve Jobs",
  },
  {
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up. "`,
    person: "Thomas A. Edison",
  },
  {
    quote: `"If you really look closely, most overnight successes took a long time."`,
    person: "Steve Jobs",
  },
];
btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
