import React, { useState } from "react";
import { PiggyBank, Percent, Clock } from "lucide-react";

const RetirementCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8);
  const [time, setTime] = useState(20);

  // Compound Interest Formula
  const finalAmount = principal * Math.pow(1 + rate / 100, time);
  const totalInterest = finalAmount - principal;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Section - Form & Results */}
        <div className="space-y-10">
          {/* Header */}
          <h1 className="text-4xl font-extrabold text-center lg:text-left">
            Retirement Asset Calculator
          </h1>
          <p className="text-slate-300 text-center lg:text-left max-w-lg">
            Plan your future with smart savings! Adjust your investment, rate, and time to see how your money grows over time.
          </p>

          {/* Input Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Principal */}
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl backdrop-blur-lg">
              <div className="flex items-center space-x-3 mb-4">
                <PiggyBank className="w-6 h-6 text-amber-400" />
                <h3 className="font-semibold">Principal (₹)</h3>
              </div>
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
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl backdrop-blur-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Percent className="w-6 h-6 text-green-400" />
                <h3 className="font-semibold">Rate (%)</h3>
              </div>
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
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl backdrop-blur-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="font-semibold">Time (Years)</h3>
              </div>
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
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-amber-400">Final Amount</h3>
              <p className="text-2xl font-bold mt-2">₹{finalAmount.toFixed(2)}</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-green-400">Total Interest</h3>
              <p className="text-2xl font-bold mt-2">₹{totalInterest.toFixed(2)}</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-blue-400">Time Period</h3>
              <p className="text-2xl font-bold mt-2">{time} Years</p>
            </div>
          </div>
        </div>

        {/* Right Section - Image & Tips */}
        <div className="space-y-8 text-center lg:text-left">
          <img
            src="https://img.freepik.com/free-vector/financial-growth-illustration_23-2148431665.jpg"
            alt="Retirement Planning"
            className="rounded-2xl shadow-lg"
          />
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-amber-400">
              💡 Smart Money Tips
            </h2>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Start early to maximize compound growth.</li>
              <li>• Diversify investments to reduce risks.</li>
              <li>• Increase contributions as income grows.</li>
              <li>• Reinvest interest for long-term benefits.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetirementCalculator;
