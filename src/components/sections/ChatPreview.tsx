import React, { useState } from 'react';

export default function ChatPreview() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'user',
      text: 'What can GPT Best do?',
    },
    {
      type: 'ai',
      text: 'I can answer questions, help with homework, generate ideas, write text, and support creative projects using AI.',
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { type: 'user', text: message },
        {
          type: 'ai',
          text: 'Thanks for your question! I\'m here to help you with any task you need assistance with.',
        },
      ]);
      setMessage('');
    }
  };

  return (
    <section id="chat" className="px-8 py-24">
      <div className="max-w-4xl mx-auto bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h3 className="text-4xl font-bold mb-8 text-center">AI Chat Preview</h3>

        <div className="space-y-4 mb-8 max-h-80 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.type === 'user'
                  ? 'bg-black/40 rounded-2xl p-5 ml-auto max-w-xs'
                  : 'bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-5 border border-white/10 max-w-xs'
              }
            >
              <p className="text-sm mb-2 font-semibold">
                {msg.type === 'user' ? '👤 You' : '🤖 GPT Best'}
              </p>
              <p className="leading-relaxed text-gray-100">{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
