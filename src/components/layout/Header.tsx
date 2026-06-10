import { Bell, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-800 bg-slate-950/80 px-6 py-5 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 lg:hidden">
          PulseBoard
        </p>

        <p className="mt-2 text-sm text-slate-400 lg:mt-0">
          Welcome back, Deniz
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          Analytics Overview
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-slate-400 md:flex">
          <Search size={18} />
          <span className="text-sm">Search dashboard...</span>
        </div>

        <button className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-slate-300 hover:text-white">
          <Bell size={18} />
        </button>
      </div>
    </header>
  )
}