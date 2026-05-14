import React from 'react';

export default function About() {
  return (
    <section id="about" className="px-8 py-20 bg-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8">About GPT Best</h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          GPT Best is a futuristic AI concept focused on modern design,
          intelligent conversations, and powerful tools for creativity and learning.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold mb-2">Our Mission</h4>
            <p className="text-gray-400 text-sm">
              Make AI accessible to everyone
            </p>
          </div>

          <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">💡</div>
            <h4 className="font-bold mb-2">Innovation</h4>
            <p className="text-gray-400 text-sm">
              Cutting-edge technology & design
            </p>
          </div>

          <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">🌍</div>
            <h4 className="font-bold mb-2">Global Impact</h4>
            <p className="text-gray-400 text-sm">
              Helping millions around the world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
