
import React from 'react';
import ItemCalculator from './components/ItemCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eee7ff] via-[#fff1f7] to-[#e0f7ff] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <ItemCalculator />
      </div>
    </div>
  );
}

export default App;
