// Your Google Apps Script URL
const FORM_URL = "https://script.google.com/macros/s/AKfycbzoPWVZeTx8DZBMSftGqv--kAQvPt3c3avDOOsUwcL-voW8Uy2SFHVpY1HoWbgma1qy3Q/exec";

// Handle Name Entry (Step 1)
document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("visitorName").value.trim();
  if (!name) {
    alert("Please enter your name!");
    return;
  }

  // Send only name to Sheet
  fetch(FORM_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({ visitorName: name })
  });

  localStorage.setItem("visitorName", name);
  document.getElementById("welcome-message").innerText = `Welcome, ${name}! 💖`;
  document.getElementById("name-overlay").style.display = "none";
});

// Handle Interest Form (Step 2)
document.getElementById("interestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = localStorage.getItem("visitorName");
  const formData = new FormData(e.target);
  const insta = formData.get("instagram").trim();
  const phone = formData.get("phone")?.trim();

  if (!name || !insta) {
    alert("Instagram is required. Name must be set.");
    return;
  }

  // Send name + instagram + phone to update same row
  fetch(FORM_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({
      visitorName: name,
      instagram: insta,
      phone: phone || ""
    })
  });

  alert("Thank you! Your info was sent 💖");
  e.target.reset();
});

// Love Quotes
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

