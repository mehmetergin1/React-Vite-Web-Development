import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Gıda');
  const [type, setType] = useState('gider');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAddExpense({
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
      category,
      type,
      date: new Date().toLocaleDateString('tr-TR')
    });

    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Yeni İşlem Ekle</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <label className="block text-xs font-medium text-slate-600 mb-1">Açıklama</label>
          <input
            type="text"
            placeholder="Örn: Market alışverişi, Maaş"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Tutar (₺)</label>
          <input
            type="number"
            placeholder="0.00"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Kategori</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          >
            <option value="Gıda">Gıda</option>
            <option value="Fatura">Fatura</option>
            <option value="Eğlence">Eğlence</option>
            <option value="Maaş">Maaş</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">İşlem Tipi</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          >
            <option value="gider">Gider</option>
            <option value="gelir">Gelir</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full md:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm transition flex items-center justify-center gap-2"
      >
        <PlusCircle className="w-4 h-4" />
        Ekle
      </button>
    </form>
  );
}