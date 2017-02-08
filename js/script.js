var quotes = [
  "It is vain to do with more what can be done with less. ―William of Occam",
  "Those who cannot change their minds cannot change anything. -George Bernard Shaw",
  "Being deeply loved by someone gives you strength. -Lao Tzu",
  "Well done is better than well said. -Benjamin Franklin"
];

var selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("selectedQuote").innerHTML = 
  '<p>' + selectedQuote + '</p>';
// Twitter
document.getElementById('twitter').onclick = function() {
    var twtLink = 'http://twitter.com/home?status=' +selectedQuote;
    window.open(twtLink,'_blank')
};
  
document.getElementById('button').onclick = function() {
  var selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("selectedQuote").innerHTML = 
  '<p>' + selectedQuote + '</p>';
  // Twitter
  document.getElementById('twitter').onclick = function() {
    var twtLink = 'http://twitter.com/home?status=' +selectedQuote;
    window.open(twtLink,'_blank')
  };
};

