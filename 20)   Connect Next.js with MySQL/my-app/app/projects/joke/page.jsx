'use client';

import { useEffect, useState } from 'react';
import { ArrowsRightLeftIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
export default function JokePage() {
  const [joke, setJoke] = useState(null);
  const [showPunch, setShowPunch] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    setShowPunch(false);
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      setJoke({ setup: data.setup, punchline: data.punchline });
    } catch {
      setJoke({ setup: 'Oops!', punchline: 'Could not load a joke.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="relative w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 text-center">
        {/* Decorative emoji */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg">
          <FaceSmileIcon className="w-7 h-7" />
        </div>

        <h1 className="text-2xl font-bold text-blue-900 mb-5">Random Joke</h1>

        <p className="text-lg text-gray-800 mb-6 leading-relaxed">{joke?.setup}</p>

        {showPunch && (
          <p className="text-green-600 font-semibold text-xl mb-6 animate-fade-in">{joke?.punchline}</p>
        )}

        <div className="flex justify-center gap-3">
          {!showPunch && (
            <button
              onClick={() => setShowPunch(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow hover:shadow-lg transition"
            >
              Show Punchline
            </button>
          )}
          <button
            onClick={fetchJoke}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium shadow hover:shadow-lg transition"
          >
            <ArrowsRightLeftIcon className="w-5 h-5" /> Next Joke
          </button>
        </div>
      </div>
    </main>
  );
}
