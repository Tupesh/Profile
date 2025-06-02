// Typing quote animation for the profile
const quote = `"All events have a cause, although the validity of the cause may be flawed."`;
const quoteElement = document.getElementById("quote");

let i = 0;

function typeWriter() {
  if (i < quote.length) {
    quoteElement.innerHTML += quote.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // adjust typing speed here
  }
}

// Start animation after page loads
window.addEventListener("DOMContentLoaded", () => {
  quoteElement.classList.add("typing"); // make quote visible
  typeWriter();
});
