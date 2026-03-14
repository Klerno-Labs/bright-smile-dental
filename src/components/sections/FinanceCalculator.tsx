"use client";

import { useState } from "react";
import { Calculator, DollarSign } from "lucide-react";

interface FinanceCalculatorProps {
  basePrice: number;
}

export function FinanceCalculator({ basePrice }: FinanceCalculatorProps) {
  const [months, setMonths] = useState(12);
  
  // Simple calculation logic: Base Price / Months + Small Interest Fee (simulated)
  const interestRate = 0.05; 
  const totalWithInterest = basePrice * (1 + interestRate);
  const monthlyPayment = Math.round(totalWithInterest / months);

  return (
    <div className="bg-[#E0F2F2] p-6 rounded-xl border border-[#4CA1A3]/20">
      <div className="flex items-center gap-2 mb-4 text-[#0E3A53]">
        <Calculator className="h-5 w-5 text-[#4CA1A3]" />
        <h4 className="font-bold text-lg">Finance Calculator</h4>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#0E3A53] mb-2">
            Treatment Cost: ${basePrice.toLocaleString()}
          </label>
          <input
            type="range"
            min="3"
            max="24"
            step="3"
            value={months}
            onChange={(e) => setMonths(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4CA1A3]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>3 Mo</span>
            <span className="font-bold text-[#4CA1A3]">{months} Months</span>
            <span>24 Mo</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Est. Monthly Payment</p>
          <div className="flex items-center justify-center gap-1 text-[#0E3A53]">
            <DollarSign className="h-6 w-6 text-[#4CA1A3]" />
            <span className="text-3xl font-bold">{monthlyPayment}</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">*Approved credit required. APR approx 5%.</p>
        </div>
      </div>
    </div>
  );
}