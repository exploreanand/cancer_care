'use client';
import { useState, useEffect } from 'react';

export default function QuoteSection() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch quote", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full bg-rose-50 py-12 text-center px-4">
      <h3 className="text-xl font-semibold text-rose-600 mb-4">Daily Inspiration</h3>
      {loading ? (
        <p className="text-gray-500 animate-pulse">Finding a quote for you...</p>
      ) : (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-rose-100">
          <p className="text-lg italic text-gray-800">"{quote?.quote}"</p>
          <p className="text-sm font-bold text-gray-500 mt-2">— {quote?.author}</p>
        </div>
      )}
    </section>
  );
}