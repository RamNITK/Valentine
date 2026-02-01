// Your Google Apps Script URL
const FORM_URL = "https://script.google.com/macros/s/AKfycbzoPWVZeTx8DZBMSftGqv--kAQvPt3c3avDOOsUwcL-voW8Uy2SFHVpY1HoWbgma1qy3Q/exec";

document.getElementById("fullForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const name = formData.get("visitorName").trim();

  if (!name) {
    alert("Please enter your name!");
    return;
  }

  // Send to Google Apps Script
  fetch(FORM_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(formData)
  });

  // Optional: show a thank you message
  localStorage.setItem("visitorName", name);
  document.getElementById("welcome-message").innerText = `Welcome, ${name}! 💖`;
  document.getElementById("name-overlay").style.display = "none";
});

// Love quotes
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
