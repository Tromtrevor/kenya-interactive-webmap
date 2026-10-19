import KenyaMap from "./components/kenyaMap";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="mx-auto mb-6 max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-700">
          Kenya · Census 2019
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Kenya Interactive Atlas
        </h1>

        <p className="mt-2 text-slate-600">
          Explore county boundaries and population distribution.
        </p>
      </header>

      <section className="mx-auto max-w-7xl">
        <KenyaMap />
      </section>
    </main>
  );
}
