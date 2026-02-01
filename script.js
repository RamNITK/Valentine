const quotes = [
  "You stole my heart, but I'll let you keep it 💘",
  "Roses are red, violets are blue, this Valentine’s Day, I choose you ❤️",
  "Love is in the air — or is that just chocolate? 🍫",
  "You make my heart pop like bubble wrap 💥",
  "Can I tie your shoes? Because I don't want you falling for anyone else 😉"
];

function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerText = quote;
}

function enterSite() {
  const name = document.getElementById('visitorName').value.trim();
  if (!name) {
    alert("Please enter your name to continue.");
    return;
  }

  // Optional: store name for personalization
  localStorage.setItem('visitorName', name);

  // Update greeting if needed
  document.getElementById('welcome-message').innerText = `Welcome, ${name}! 💖`;

  // Hide overlay
  document.getElementById('name-overlay').style.display = 'none';
}
