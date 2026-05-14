import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-gray-400">
      <div className="max-w-6xl mx-auto px-8">
        <p className="mb-4">© 2026 GPT Best. All rights reserved.</p>
        <div className="flex justify-center gap-8 text-sm">
          <a href="#" className="hover:text-orange-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
