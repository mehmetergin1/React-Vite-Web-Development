import React from 'react';
import { Wallet } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-md py-6 px-4 mb-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wallet className="w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tight">Akıllı Bütçe & Harcama Takibi</h1>
        </div>
        <span className="bg-indigo-500 text-indigo-100 text-xs px-3 py-1 rounded-full font-medium">
          AI Supported Web App
        </span>
      </div>
    </header>
  );
}