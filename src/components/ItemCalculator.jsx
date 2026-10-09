
import React, { useState } from 'react';

function ItemCalculator() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('Medium');
  const unitPrice = 499;

  function handleIncrement() {
    setQty(qty + 1);
  }

  function handleDecrement() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-2xl shadow-fuchsia-300/30 backdrop-blur-xl transition-all duration-500 hover:shadow-purple-400/40">

      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pink-300/30 blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-300/30 blur-3xl"></div>

      <div className="relative bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 p-7 text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md">
          <span>✦</span> PREMIUM COLLECTION
        </div>

        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          Item<span className="text-pink-200">.</span>Counter
        </h2>

        <p className="mt-2 text-sm text-purple-100 sm:text-base">
          ✨ Your favourite tech, your way!
        </p>

        <div className="absolute right-6 top-8 text-5xl opacity-30">
          ✧
        </div>
      </div>

      <div className="relative space-y-7 p-6 sm:p-8">

        <div className="flex flex-col gap-5 rounded-3xl border border-purple-100 bg-gradient-to-br from-white to-purple-50 p-5 sm:flex-row sm:items-center">

          <div className="flex h-28 w-28 shrink-0 items-center justify-center self-center rounded-3xl bg-gradient-to-br from-violet-200 via-fuchsia-100 to-pink-200 text-6xl shadow-inner ring-4 ring-white transition duration-500 hover:rotate-6 hover:scale-110 sm:self-auto">
            🎧
          </div>

          <div className="flex-1 text-center sm:text-left">
            <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-fuchsia-700">
              Best Seller ✦
            </span>

            <h3 className="mt-3 text-xl font-extrabold text-gray-800">
              Premium Wireless Earbuds
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Premium sound. Everyday comfort.
            </p>

            <p className="mt-3 text-3xl font-black text-transparent bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text">
              ₹{unitPrice}
              <span className="ml-2 text-sm font-medium text-gray-400">
                / unit
              </span>
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-violet-100 bg-violet-50/70 p-5">
          <label className="mb-3 block text-sm font-extrabold uppercase tracking-wider text-violet-800">
            🎨 Choose Your Style
          </label>

          <select
            value={size}
            onChange={handleSizeChange}
            className="w-full cursor-pointer appearance-none rounded-2xl border-2 border-purple-200 bg-white px-4 py-4 font-bold text-gray-700 shadow-sm outline-none transition duration-300 hover:border-fuchsia-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-200/60"
          >
            <option value="Small">🌸 Small Variant</option>
            <option value="Medium">💜 Medium Variant</option>
            <option value="Large">💎 Large Variant</option>
          </select>

          <p className="mt-3 text-xs text-violet-500">
            Selected: {size} edition
          </p>
        </div>

        <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-violet-50 p-5 sm:p-6">
          <div className="mb-5 text-center">
            <h3 className="text-lg font-black text-gray-800">
              Adjust Quantity
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              One tap closer to your favourite! ♡
            </p>
          </div>

          <div className="flex items-center justify-center gap-5">
            <button
              onClick={handleDecrement}
              disabled={qty === 1}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-3xl font-bold text-white shadow-lg shadow-pink-300/50 transition duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              −
            </button>

            <div className="flex h-16 min-w-24 items-center justify-center rounded-2xl border border-violet-100 bg-white px-5 text-3xl font-black text-violet-700 shadow-inner">
              {qty}
            </div>

            <button
              onClick={handleIncrement}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-3xl font-bold text-white shadow-lg shadow-violet-300/50 transition duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-90"
            >
              +
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 p-6 text-white shadow-xl shadow-teal-200/60 sm:p-7">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-12 right-20 h-36 w-36 rounded-full bg-white/10"></div>

          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-white/80">
                  YOUR SELECTION
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  {size} Variant
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  Quantity: {qty} item{qty > 1 ? 's' : ''}
                </p>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 text-3xl backdrop-blur-md">
                🛍️
              </div>
            </div>

            <div className="my-5 border-t border-white/30"></div>

            <p className="text-sm font-semibold text-white/80">
              TOTAL PRICE
            </p>

            <div className="mt-1 flex flex-wrap items-end justify-between gap-3">
              <p className="text-4xl font-black tracking-tight sm:text-5xl">
                ₹{qty * unitPrice}
              </p>

              <span className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur-md">
                ✓ Great Choice!
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs font-medium tracking-wide text-gray-400">
          MADE WITH ♡ · HAPPY SHOPPING
        </p>

      </div>
    </div>
  );
}

export default ItemCalculator;
