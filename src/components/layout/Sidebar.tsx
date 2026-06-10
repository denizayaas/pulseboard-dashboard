import { BarChart3, Home, LineChart, Settings, Wallet } from 'lucide-react'

const menuItems = [
  { label: 'Overview', icon: Home, href: '#overview' },
  { label: 'Analytics', icon: BarChart3, href: '#analytics' },
  { label: 'Revenue', icon: Wallet, href: '#revenue' },
  { label: 'Reports', icon: LineChart, href: '#reports' },
  { label: 'Settings', icon: Settings, href: '#settings' },
]

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-slate-800 bg-slate-950 px-5 py-6 lg:sticky lg:top-0 lg:block">
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
            <a
              key={item.label}
              href={item.href}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
            >
              <Icon size={18} />
              {item.label}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}