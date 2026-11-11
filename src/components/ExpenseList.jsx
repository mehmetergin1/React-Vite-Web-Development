import React from 'react';
import { Trash2 } from 'lucide-react';

const categoryColors = {
  Gıda: 'bg-orange-100 text-orange-700',
  Fatura: 'bg-blue-100 text-blue-700',
  Eğlence: 'bg-purple-100 text-purple-700',
  Maaş: 'bg-emerald-100 text-emerald-700',
  Diğer: 'bg-gray-100 text-gray-700',
};

export default function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-white p-8 rounded-xl text-center border border-slate-100 text-slate-400">
        Henüz eklenmiş bir işlem bulunmuyor.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 font-bold text-slate-800">
        İşlem Geçmişi
      </div>
      <div className="divide-y divide-slate-100">
        {expenses.map((item) => (
          <div key={item.id} className="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 transition">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category] || categoryColors.Diğer}`}>
                {item.category}
              </span>
              <div>
                <p className="font-medium text-slate-800 text-sm">{item.title}</p>
                <p className="text-xs text-slate-400">{item.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className={`font-semibold text-sm ${item.type === 'gelir' ? 'text-emerald-600' : 'text-slate-700'}`}>
                {item.type === 'gelir' ? '+' : '-'}₺{Number(item.amount).toLocaleString('tr-TR')}
              </span>
              <button
                onClick={() => onDeleteExpense(item.id)}
                className="text-slate-400 hover:text-rose-600 transition p-1"
                title="Sil"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}