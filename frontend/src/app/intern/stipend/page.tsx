'use client';

import React from 'react';
import { Wallet, TrendingUp, CheckCircle, ArrowDownToLine, DollarSign } from 'lucide-react';
import { MOCK_INTERN_PROFILE } from '@/components/intern/data';

export default function StipendPage() {
  const history = [
    { month: 'July 2026', amount: '₹10,000', status: 'Disbursed', date: 'Jul 28, 2026', txId: 'TXN-884920' },
    { month: 'June 2026', amount: '₹10,000', status: 'Disbursed', date: 'Jun 28, 2026', txId: 'TXN-773192' },
  ];

  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-3xl text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Wallet className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Stipend & Performance Earnings</h2>
            <p className="text-xs text-[#9CA3AF]">Track monthly internship stipends, milestones, and bank disbursement logs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white">
          <p className="text-xs text-[#9CA3AF] uppercase font-semibold">Current Monthly Stipend</p>
          <p className="text-3xl font-extrabold text-amber-300 mt-2">{MOCK_INTERN_PROFILE.currentStipend}</p>
          <span className="inline-block mt-3 text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
            ✓ Performance Verified
          </span>
        </div>

        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white">
          <p className="text-xs text-[#9CA3AF] uppercase font-semibold">Total Earned to Date</p>
          <p className="text-3xl font-extrabold text-white mt-2">₹20,000</p>
          <span className="inline-block mt-3 text-[10px] text-[#38BDF8] font-semibold">2 Months Disbursed</span>
        </div>

        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white">
          <p className="text-xs text-[#9CA3AF] uppercase font-semibold">Expected Next Cycle</p>
          <p className="text-3xl font-extrabold text-cyan-300 mt-2">{MOCK_INTERN_PROFILE.expectedStipend}</p>
          <span className="inline-block mt-3 text-[10px] text-amber-300 font-bold">Level 3 Bonus Included</span>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 shadow-md text-white space-y-4">
        <h3 className="font-bold text-base text-white pb-3 border-b border-[#1F2937]">Disbursement History</h3>
        <div className="space-y-3">
          {history.map((h, i) => (
            <div key={i} className="bg-[#172033] border border-[#1F2937] rounded-2xl p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-white">{h.month} Stipend</h4>
                <p className="text-xs text-[#9CA3AF]">Tx ID: {h.txId} • Date: {h.date}</p>
              </div>
              <div className="text-right">
                <span className="font-extrabold text-sm text-amber-300 block">{h.amount}</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  {h.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
