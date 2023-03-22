import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
        headers: { 'X-Api-Key': process.env.REACT_APP_QUOTE_API_KEY },
        contentType: 'application/json',
      });
      if (!response.ok) {
        throw Error('could not fetch data. Please check API key');
      }
      return response.json();
    };
    fetchQuote()
      .then((data) => {
        setQuote(data[0].quote);
        setIsLoading(false);
        setErrMessage(null);
      })
      .catch((err) => {
        setQuote(null);
        setIsLoading(false);
        setErrMessage(err.message);
      });
  }, []);

  return (
    <div className="quote">
      {isLoading && <div>Loading...</div>}
      {quote && <div>{quote}</div>}
      {errMessage && <div>{errMessage}</div>}
    </div>
  );
}

export default Quote;
