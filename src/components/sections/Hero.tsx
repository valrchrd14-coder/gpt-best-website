import React from 'react';

export default function Hero() {
  return (
    <section className="px-8 pt-32 pb-20 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
          <span>🚀</span>
          <span className="text-sm text-gray-300">Future AI Platform</span>
        </div>

        <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">
          The Future of
          <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-blue-500 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h2>

        <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          GPT Best is your modern AI assistant that helps you write, learn,
          create ideas, and explore the future with powerful technology.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl">
            Start Now
          </button>

          <button className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-2xl text-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
