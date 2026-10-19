export default function PopulationLegend() {
  const grades = [
    { color: "#FFEDA0", label: "0–250,000" },
    { color: "#FEB24C", label: "250,001–500,000" },
    { color: "#FD8D3C", label: "500,001–750,000" },
    { color: "#FC4E2A", label: "750,001–1 million" },
    { color: "#E31A1C", label: "1–1.5 million" },
    { color: "#BD0026", label: "1.5–2 million" },
    { color: "#800026", label: "Over 2 million" },
  ];

  return (
    <div className="absolute bottom-5 right-4 z-[1000] rounded-lg bg-white p-4 shadow-lg">
      <h3 className="mb-2 text-sm font-semibold text-slate-800">
        Population (2019)
      </h3>

      {grades.map((grade) => (
        <div key={grade.label} className="mb-1 flex items-center gap-2">
          <span
            className="h-3 w-4 rounded-sm"
            style={{ backgroundColor: grade.color }}
          />
          <span className="text-xs text-slate-600">{grade.label}</span>
        </div>
      ))}
    </div>
  );
}
