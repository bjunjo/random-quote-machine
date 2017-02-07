var quotes = [
  "It is vain to do with more what can be done with less. ―William of Occam",
  "Progress is impossible without change, and those who cannot change their minds cannot change anything. -George Bernard Shaw",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. -Lao Tzu",
  "Well done is better than well said. -Benjamin Franklin"
];

var selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("selectedQuote").innerHTML = 
  '<p>' + selectedQuote + '</p>';
  
document.getElementById('button').onclick = function() {
  var selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("selectedQuote").innerHTML = 
  '<p>' + selectedQuote + '</p>';
};