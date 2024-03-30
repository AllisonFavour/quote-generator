window.onload = () => {
  // getting my elements from html
  const wrapper = document.querySelector('.wrapper');
  const quoteP = document.getElementById('generator');
  const genButton = document.querySelector('#gen-btn');
  const body = document.querySelector('body');
  const modeButton = document.querySelector('#light-dark-btn');


  // getting local storage mode
  const storedMode = localStorage.getItem('mode');

  if (storedMode === 'dark') {
    activateDarkMode();
  } else {
    activatedLightMode();
  }

  modeButton.addEventListener('click', () => {
    // modeButton.classList.toggle('light')

    if (wrapper.classList.toggle('dark')) {
      activateDarkMode();
      // modeButton.innerHTML = 'Light Mode';
      // modeButton.style.color = 'white';
      // modeButton.style.border = 'none';
      // body.style.background = 'black';
      // body.style.color = 'white';
      localStorage.setItem('mode', 'dark');
    } else {
      activatedLightMode();
      // modeButton.innerHTML = 'Dark Mode'
      // modeButton.style.color = 'black'
      // modeButton.style.border = 'none';
      // body.style.background = 'white';
      // body.style.color = 'black';
      localStorage.setItem('mode', 'light');
    }

    // localStorage.setItem('lastMode', randomQuoteText);
  })


  genButton.addEventListener('click', () => {
    let randomQuoteText = randomQuote();

    quoteP.innerHTML = randomQuoteText;

    localStorage.setItem('lastQuote', randomQuoteText);

  })
  


  const lastDisplayedQuote = localStorage.getItem('lastQuote');
  if (lastDisplayedQuote) {
      quoteP.innerHTML = lastDisplayedQuote;
  }

  let randomQuote = (quotes, random) => {
    quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The only source of knowledge is experience. - Albert Einstein",
    "In three words I can sum up everything I've learned about life: It goes on. - Robert Frost",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "The mind is everything. What you think you become. - Buddha",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only thing we know about the future is that it will be different. - Peter Drucker",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi"
    ];
    random = Math.floor(Math.random() * quotes.length);

    return quotes[random]
  };

  function activatedLightMode() {
    modeButton.innerHTML = 'Light Mode';
    modeButton.style.color = 'white';
    modeButton.style.border = 'none';
    body.style.background = 'black';
    body.style.color = 'white';
  }
  
  function activateDarkMode() {
    modeButton.innerHTML = 'Dark Mode'
    modeButton.style.color = 'black'
    modeButton.style.border = 'none';
    body.style.background = 'white';
    body.style.color = 'black';
  }

}