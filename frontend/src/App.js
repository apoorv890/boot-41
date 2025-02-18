import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to React with Tailwind CSS
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
              <p className="text-lg text-gray-600">
                Start editing your app by modifying <code className="font-mono bg-gray-100 p-1 rounded">src/App.js</code>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
