import React, { useState } from "react";

const RetirementCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8);
  const [time, setTime] = useState(20);

  // Compound Interest Formula
  const finalAmount = principal * Math.pow(1 + rate / 100, time);
  const totalInterest = finalAmount - principal;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Retirement Asset Calculator
        </h1>

        {/* Input Controls */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Principal */}
          <div>
            <label className="block text-sm font-medium mb-2">Principal (₹)</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white"
            />
            <input
              type="range"
              min="1000"
              max="1000000"
              step="1000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full mt-3 accent-amber-500"
            />
          </div>

          {/* Rate */}
          <div>
            <label className="block text-sm font-medium mb-2">Interest Rate (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white"
            />
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full mt-3 accent-amber-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium mb-2">Time (Years)</label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white"
            />
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="w-full mt-3 accent-amber-500"
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-slate-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-amber-400">Final Amount</h3>
            <p className="text-2xl font-bold mt-2">
              ₹{finalAmount.toFixed(2)}
            </p>
          </div>
          <div className="p-6 bg-slate-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-green-400">Total Interest</h3>
            <p className="text-2xl font-bold mt-2">
              ₹{totalInterest.toFixed(2)}
            </p>
          </div>
          <div className="p-6 bg-slate-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-blue-400">Time Period</h3>
            <p className="text-2xl font-bold mt-2">{time} Years</p>
          </div>
        </div>

        {/* Graphical Line Representation */}
        <div className="mt-12">
          <h2 className="text-center text-xl font-semibold mb-4">Growth Over Time</h2>
          <div className="relative w-full h-2 bg-gray-600 rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-amber-500 rounded-full transition-all"
              style={{
                width: `${(time / 50) * 100}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-300">
            <span>0 yrs</span>
            <span>{time} yrs</span>
            <span>50 yrs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetirementCalculator;
