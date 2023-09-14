const axios = require('axios');

const fetchRandomQuote = async () => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const { content, author } = response.data;
    console.log(`"${content}" - ${author}`);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

fetchRandomQuote();