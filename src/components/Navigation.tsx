import React from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          GPT Best
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#features" className="hover:text-orange-400 transition">
            Features
          </a>
          <a href="#chat" className="hover:text-orange-400 transition">
            Chat
          </a>
          <a href="#about" className="hover:text-orange-400 transition">
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black border-b border-white/10 p-4 flex flex-col gap-4 md:hidden">
            <a href="#features" className="hover:text-orange-400 transition">
              Features
            </a>
            <a href="#chat" className="hover:text-orange-400 transition">
              Chat
            </a>
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
