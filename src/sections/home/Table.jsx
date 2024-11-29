import useLocales from "/src/hooks/useLocales";

export default function Table() {
  const { t } = useLocales();
  return (
    <div className="my-10">
      <h1 className="text-3xl md:text-4xl md:px-20 ">
        {t("Key Feature table")}
      </h1>

      <table className="table-auto mx-auto my-10 w-full md:w-4/5 border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-700 p-2 bg-gray-200">
              {t("Parameter")}
            </th>
            <th className="border border-slate-700 p-2 bg-gray-200">
              {t("Description")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">🎮 {t("Game Name")}</td>
            <td className="border border-slate-300 p-2">Plinko</td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">🎨 {t("Theme")}</td>
            <td className="border border-slate-300 p-2">{t("Classic")}</td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">
              🔢 {t("Number of Rows")}
            </td>
            <td className="border border-slate-300 p-2">{t("Adjustable")}</td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">
              ⚙️ {t("Foundation")}
            </td>
            <td className="border border-slate-300 p-2">
              {t("Based on the random movement of the ball")}
            </td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">
              🔮 {t("Essence of the Game")}
            </td>
            <td className="border border-slate-300 p-2">
              {t("The chip bounces off pegs and lands in a prize zone")}
            </td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">
              💎 {t("Bonus Features")}
            </td>
            <td className="border border-slate-300 p-2">
              {t("Multipliers, Risk Level Settings")}
            </td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">
              💵 {t("Minimum Bet")}
            </td>
            <td className="border border-slate-300 p-2">0.10</td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">
              💸 {t("Maximum Bet")}
            </td>
            <td className="border border-slate-300 p-2">100</td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">
              📊 {t("Return to Player (RTP)")}
            </td>
            <td className="border border-slate-300 p-2">
              {t("May vary depending on the game version")}
            </td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">
              🎢 {t("Volatility (Risk Level)")}
            </td>
            <td className="border border-slate-300 p-2">{t("Adjustable")}</td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">
              🏆 {t("Maximum Win")}
            </td>
            <td className="border border-slate-300 p-2">{t("1,000x bet")}</td>
          </tr>
          <tr className="border border-slate-300 bg-gray-100">
            <td className="border border-slate-300 p-2">
              ✅ {t("Demo Version")}
            </td>
            <td className="border border-slate-300 p-2">
              {t("Available in most online casinos")}
            </td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300 p-2">
              📱 {t("Mobile Availability")}
            </td>
            <td className="border border-slate-300 p-2">
              {t("Yes, available on Android and iOS")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
