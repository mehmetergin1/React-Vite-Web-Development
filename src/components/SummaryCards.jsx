import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export default function SummaryCards({ expenses }) {
  const totalGelir = expenses
    .filter(item => item.type === 'gelir')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const totalGider = expenses
    .filter(item => item.type === 'gider')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const netBakiye = totalGelir - totalGider;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Toplam Gelir</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">₺{totalGelir.toLocaleString('tr-TR')}</p>
        </div>
        <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
          <TrendingUp className="w-6 h-6" />
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Toplam Gider</p>
          <p className="text-2xl font-bold text-rose-600 mt-1">₺{totalGider.toLocaleString('tr-TR')}</p>
        </div>
        <div className="p-3 bg-rose-50 rounded-lg text-rose-600">
          <TrendingDown className="w-6 h-6" />
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Net Bakiye</p>
          <p className={`text-2xl font-bold mt-1 ${netBakiye >= 0 ? 'text-indigo-600' : 'text-rose-600'}`}>
            ₺{netBakiye.toLocaleString('tr-TR')}
          </p>
        </div>
        <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
          <DollarSign className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}