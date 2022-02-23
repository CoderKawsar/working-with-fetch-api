const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => showQuote(data));
};

function showQuote(data) {
  const quoteContainer = document.getElementById("quote");
  quoteContainer.innerText = data.quote;
}
