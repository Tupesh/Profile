const quote = '"Life is what happens when you\'re busy making other plans."';
const quoteElement = document.getElementById("quote");

let i = 0;
const typeWriter = () => {
  if (i < quote.length) {
    quoteElement.innerHTML += quote.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // change the delay (in ms) to adjust typing speed
  } else {
    // Don't remove the .typing class so the quote stays visible
  }
};

quoteElement.classList.add("typing"); // add the typing class to start the animation
typeWriter();
