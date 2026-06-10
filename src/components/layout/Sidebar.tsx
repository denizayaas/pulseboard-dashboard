import { BarChart3, Home, LineChart, Settings, Wallet } from 'lucide-react'

const menuItems = [
  { label: 'Overview', icon: Home },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Revenue', icon: Wallet },
  { label: 'Reports', icon: LineChart },
  { label: 'Settings', icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-800 bg-slate-950 px-5 py-6 lg:block">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          PulseBoard
        </p>
        <h1 className="mt-2 text-2xl font-bold text-white">
          Dashboard
        </h1>
      </div>

      <nav className="mt-10 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
            >
              <Icon size={18} />
              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}