import React from 'react';

const features = [
  {
    icon: '💬',
    title: 'AI Chat',
    description: 'Chat with a smart AI assistant that answers questions and helps with daily tasks.',
  },
  {
    icon: '🧠',
    title: 'Learning',
    description: 'Understand school subjects, coding, languages, and creative ideas faster.',
  },
  {
    icon: '⚡',
    title: 'Fast & Modern',
    description: 'Built with a futuristic design and optimized for all devices.',
  },
];

export default function Features() {
  return (
    <section id="features" className="px-8 py-20 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-16">Features</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-3xl border border-white/10 hover:scale-105 transition cursor-pointer group hover:bg-white/20"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
