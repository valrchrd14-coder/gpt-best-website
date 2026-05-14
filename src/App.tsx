import React from 'react';
import GPTBestWebsite from './components/GPTBestWebsite';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-black min-h-screen text-white">
      <Navigation />
      <GPTBestWebsite />
    </div>
  );
}

export default App;
