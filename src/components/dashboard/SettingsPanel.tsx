import { useState } from 'react'
import { Bell, Database, ShieldCheck } from 'lucide-react'

const initialSettings = [
    {
        title: 'Real-time alerts',
        description: 'Receive notifications when revenue or traffic changes sharply.',
        icon: Bell,
        enabled: true,
    },
    {
        title: 'Data sync',
        description: 'Dashboard metrics refresh automatically from connected sources.',
        icon: Database,
        enabled: true,
    },
    {
        title: 'Access control',
        description: 'Workspace permissions are protected with role-based rules.',
        icon: ShieldCheck,
        enabled: false,
    },
]

export function SettingsPanel() {
    const [settings, setSettings] = useState(initialSettings)

    function toggleSetting(title: string) {
        setSettings((currentSettings) =>
            currentSettings.map((setting) =>
                setting.title === title
                    ? { ...setting, enabled: !setting.enabled }
                    : setting,
            ),
        )
    }

    return (
        <article
            id="settings"
            className="scroll-mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl"
        >
            <div className="mb-6">
                <p className="text-sm text-slate-400">Workspace Settings</p>
                <h3 className="mt-1 text-xl font-bold text-white">
                    System Preferences
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                    Preferences are saved locally during this demo session.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {settings.map((setting) => {
                    const Icon = setting.icon

                    return (
                        <div
                            key={setting.title}
                            className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                                    <Icon size={18} />
                                </div>

                                <button
                                    type="button"
                                    onClick={() => toggleSetting(setting.title)}
                                    aria-pressed={setting.enabled}
                                    className={`relative h-7 w-12 rounded-full transition ${setting.enabled ? 'bg-cyan-500' : 'bg-slate-700'
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${setting.enabled ? 'left-6' : 'left-1'
                                            }`}
                                    />
                                </button>
                            </div>

                            <h4 className="font-semibold text-white">{setting.title}</h4>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                {setting.description}
                            </p>

                            <p
                                className={`mt-4 text-sm font-medium ${setting.enabled ? 'text-emerald-400' : 'text-slate-500'
                                    }`}
                            >
                                {setting.enabled ? 'Enabled' : 'Disabled'}
                            </p>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}