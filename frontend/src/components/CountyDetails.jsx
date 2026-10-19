import { getCountyName, getCountyCode, getPopulation } from "./utils";

export default function CountyDetails({ county }) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
        County information
      </p>

      <h2 className="mt-2 text-xl font-bold text-slate-900">
        {county ? getCountyName(county) : "Explore Kenya"}
      </h2>

      {county ? (
        <div className="mt-5 space-y-4">
          <div>
            <p className="text-sm text-slate-500">Population (2019)</p>
            <p className="text-2xl font-bold text-slate-900">
              {getPopulation(county).toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">County code</p>
            <p className="font-medium text-slate-800">
              {getCountyCode(county)}
            </p>
          </div>

          {county.population_2009 != null && (
            <div>
              <p className="text-sm text-slate-500">Population (2009)</p>
              <p className="font-semibold text-slate-800">
                {Number(county.population_2009).toLocaleString()}
              </p>
            </div>
          )}

          {county.pop_difference != null && (
            <div>
              <p className="text-sm text-slate-500">
                Population change, 2009–2019
              </p>
              <p className="font-semibold text-slate-800">
                {Number(county.pop_difference).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      ) : (
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Select any county on the map to view its population statistics. Hover
          over counties to see a quick population summary.
        </p>
      )}

      <div className="mt-6 border-t border-slate-100 pt-4">
        <p className="text-xs text-slate-400">
          Source: Kenya Population and Housing Census, 2019
        </p>
      </div>
    </aside>
  );
}
