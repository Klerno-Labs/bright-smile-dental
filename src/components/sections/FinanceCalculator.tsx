"use client";

import { useState } from "react";
import { DollarSign, Info } from "lucide-react";

export function FinanceCalculator() {
  const [cost, setCost] = useState(3000);
  const months = 12;
  const interestRate = 0.05; // 5% APR for calculation example

  const monthlyPayment = (cost / months) * (1 + interestRate);

  return (
    <div className="bg-[#F0F9FA] p-8 rounded-2xl border border-secondary/20">
      <h3 className="font-heading text-xl font-bold text-primary mb-2">Finance Calculator</h3>
      <p className="text-sm text-text-main mb-6">Estimate your monthly payments. Subject to credit approval.</p>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-primary mb-2 flex justify-between">
            <span>Treatment Cost</span>
            <span className="text-secondary">${cost.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="500"
            max="15000"
            step="100"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>$500</span>
            <span>$15,000</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <div className="text-sm text-muted mb-1 flex items-center justify-center gap-1">
            <Info className="w-3 h-3" /> Est. Monthly Payment
          </div>
          <div className="text-3xl font-bold text-primary flex items-center justify-center gap-1">
            <DollarSign className="w-6 h-6" />
            {monthlyPayment.toFixed(2)}
          </div>
          <div className="text-xs text-muted mt-2">{months} months at 5% APR</div>
        </div>

        <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Apply for Financing
        </button>
      </div>
    </div>
  );
}