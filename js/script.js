/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//This array stores all 5 quotes
const quotes = [
  {source: 'John Lennon', quote: "You may say Im a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."},
  
  {source:'James Cameron', quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."},
  
  {source: 'Steve Jobs', quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking."},
  
  {source:'Malcolm X', quote:"You don't have a peaceful revolution. You don't have a turn-the-cheek revolution. There's no such thing as a nonviolent revolution.", year:'1963', citation:"Message To the Grassroots (Speech)"},
  
  {source: 'Ralph Wldo Emerson', quote:"All I have seen teaches me to trust the Creator for all I have not seen."},
  ];


/***
 * `getRandomQuote` function
***/
//creates a random number, and uses that random number to return 1 of 5 random quote objects from the quotes array.
function getRandomQuote() {
 
  let randomNumber = Math.floor(Math.random() * quotes.length );
 
 
 let randoQuote = quotes[randomNumber]; 
  
  return randoQuote;
  
}
getRandomQuote() 
/***
 * `printQuote` function
***/

function printQuote(){
//Calls getRandomQuote function and prints the quote and its source.
//also stores getRandomQuote in a another variable.
  let newQuote = getRandomQuote();
  
  //Stores the dynamically generated html
  let benji = `
      <p class="quote">${newQuote.quote}</p>
      <p class="source">${newQuote.source} `;

     
  //conditionals below check for both a year and citation property
      if ("year" in newQuote) {
        benji += `<span class="year"> ${newQuote.year} </span>`;
        }
      
      if ("citation" in newQuote) {
        benji += `<span class="citation"> ${newQuote.citation} </span>`;
        }
    //closes the paragraph tag in the html  
  benji += '</p>';
      document.getElementById('quote-box').innerHTML = benji;






      
  }
  printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//loads a new quote upon click
document.getElementById('load-quote').addEventListener("click", printQuote, false);
