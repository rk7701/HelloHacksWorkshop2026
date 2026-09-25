function App() {
  const types = [
    { name: 'Fire', color: 'bg-orange-100 text-orange-800 ring-orange-200', icon: 'F' },
    { name: 'Water', color: 'bg-sky-100 text-sky-800 ring-sky-200', icon: 'W' },
    { name: 'Grass', color: 'bg-green-100 text-green-800 ring-green-200', icon: 'G' },
    { name: 'Electric', color: 'bg-yellow-100 text-yellow-800 ring-yellow-200', icon: 'E' },
  ]

  return (
    <main className="min-h-screen px-5 py-12 sm:py-20">
      <section className="mx-auto max-w-xl">
        <div className="mb-10 flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full border-[5px] border-[#252525] bg-white text-xl shadow-[inset_0_-8px_0_#f3eee4]" aria-hidden="true">
            <span className="size-3 rounded-full border-[3px] border-[#252525] bg-white" />
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#77736c]">Trainer�s battle guide</span>
        </div>

        <div className="rounded-3xl border border-[#e9dfcb] bg-white p-7 shadow-sm sm:p-10">
          <div className="mb-8 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">Battle prep</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#252525] sm:text-4xl">Pok�mon Battle Assistant</h1>
          <p className="mt-3 text-base leading-7 text-[#77736c]">What type of Pok�mon are you fighting?</p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {types.map((type) => (
              <button
                key={type.name}
                type="button"
                className={`flex min-h-14 items-center gap-3 rounded-xl px-4 font-semibold ring-1 transition hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${type.color}`}
              >
                <span aria-hidden="true">{type.icon}</span>
                {type.name}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-5 text-center text-xs text-[#999187]">Choose a type to get battle ready.</p>
      </section>
    </main>
  )
}

export default App


