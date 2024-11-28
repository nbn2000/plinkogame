import React from "react";

export default function Table() {
  return (
    <div className="my-10">
      <h1 className="text-3xl md:text-4xl md:px-20 ">Key Feature table</h1>

      <table className="table-auto mx-auto my-10 w-full md:w-4/5 border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-700 p-2 bg-gray-200">
              Parameter
            </th>
            <th className="border border-slate-700 p-2 bg-gray-200">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">🎮 Game Name</td>
            <td className="border border-slate-300 p-2">Plinko</td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">🎨 Theme</td>
            <td className="border border-slate-300 p-2">Classic</td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">🔢 Number of Rows</td>
            <td className="border border-slate-300 p-2">Adjustable</td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">⚙️ Foundation</td>
            <td className="border border-slate-300 p-2">
              Based on the random movement of the ball
            </td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">
              🔮 Essence of the Game
            </td>
            <td className="border border-slate-300 p-2">
              The chip bounces off pegs and lands in a prize zone
            </td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">💎 Bonus Features</td>
            <td className="border border-slate-300 p-2">
              Multipliers, Risk Level Settings
            </td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">💵 Minimum Bet</td>
            <td className="border border-slate-300 p-2">0.10</td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">💸 Maximum Bet</td>
            <td className="border border-slate-300 p-2">100</td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">
              📊 Return to Player (RTP)
            </td>
            <td className="border border-slate-300 p-2">
              May vary depending on the game version
            </td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">
              🎢 Volatility (Risk Level)
            </td>
            <td className="border border-slate-300 p-2">Adjustable</td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">🏆 Maximum Win</td>
            <td className="border border-slate-300 p-2">1,000x bet</td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">✅ Demo Version</td>
            <td className="border border-slate-300 p-2">
              Available in most online casinos
            </td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">
              📱 Mobile Availability
            </td>
            <td className="border border-slate-300 p-2">
              Yes, available on Android and iOS
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
