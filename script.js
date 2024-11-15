
const newQuote = document.getElementById("new-quote");
const quote = document.getElementById("text");
const author = document.getElementById("author");

const quoteArr = [{
  quote: ""The greatest glory in living lies not in never falling, but in rising every time we fall."",
  author: "-Nelson Mandela"
},
                     {
  quote: ""If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success"",
  author: "-James Cameron"
},
                     {
  quote: ""Do not go where the path may lead, go instead where there is no path and leave a trail."",
  author: "-Ralph Waldo Emerson"
},
                     {
  quote: "“Well done is better than well said.”",
  author: "-Benjamin Franklin"
},
                     {
  quote: ""You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."",
  author: "-Dr. Suess"
},
                     {
  quote: "“You only live once, but if you do it right, once is enough.”",
  author: "-Mae West"
}]
const getRandomQuote = () => {
 }let randomQuote = quoteArr[Math.ciel(Math.random() * 6];

console.log(randomQuote);
getRandomQuote();
console.log("hi");
