"use client";

import React, { useState } from "react";
import { DollarSign, Download, CheckCircle, Clock, FileText, Plus } from "lucide-react";
import { Card, Button, Badge } from "@/components/ui/core";
import { StipendRecord } from "@/types";

export function StipendsView() {
  const [stipends, setStipends] = useState<StipendRecord[]>([
    { id: "STP-01", internName: "Priya Patel", amount: 15000, bonus: 3000, total: 18000, transactionId: "TXN-99812", paymentStatus: "Paid", paymentDate: "2026-08-01" },
    { id: "STP-02", internName: "Rahul Sharma", amount: 12000, bonus: 1500, total: 13500, transactionId: "TXN-99813", paymentStatus: "Paid", paymentDate: "2026-08-01" },
    { id: "STP-03", internName: "Karan Mehta", amount: 12000, bonus: 0, total: 12000, transactionId: "TXN-PENDING", paymentStatus: "Pending", paymentDate: "2026-08-05" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Stipend Wall & Financial Disbursal</h1>
          <p className="text-xs text-slate-400">Manage intern payouts, performance bonuses & transaction receipts.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline"><Download className="w-4 h-4" /> Export Report</Button>
          <Button size="sm"><Plus className="w-4 h-4" /> Process Batch</Button>
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4">Intern Name</th>
                <th className="p-4">Base Stipend</th>
                <th className="p-4">Bonus</th>
                <th className="p-4">Total Amount</th>
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {stipends.map((st) => (
                <tr key={st.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{st.internName}</td>
                  <td className="p-4 text-slate-500">₹{st.amount.toLocaleString()}</td>
                  <td className="p-4 text-emerald-600 font-semibold">+₹{st.bonus.toLocaleString()}</td>
                  <td className="p-4 font-extrabold text-slate-900 dark:text-white">₹{st.total.toLocaleString()}</td>
                  <td className="p-4 font-mono text-[11px] text-slate-400">{st.transactionId}</td>
                  <td className="p-4"><Badge variant={st.paymentStatus === "Paid" ? "success" : "warning"}>{st.paymentStatus}</Badge></td>
                  <td className="p-4 text-right">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800">
                      <FileText className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
