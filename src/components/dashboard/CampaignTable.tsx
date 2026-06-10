import { Megaphone } from 'lucide-react'
import { campaignData } from '../../data/dashboardData'

const statusClasses = {
  Active: 'bg-emerald-500/10 text-emerald-400',
  Paused: 'bg-amber-500/10 text-amber-400',
  Completed: 'bg-cyan-500/10 text-cyan-400',
}

export function CampaignTable() {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Marketing Performance</p>
          <h3 className="mt-1 text-xl font-bold text-white">
            Campaign ROI
          </h3>
        </div>

        <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
          <Megaphone size={20} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-slate-800 text-sm text-slate-400">
              <th className="pb-3 font-medium">Campaign</th>
              <th className="pb-3 font-medium">Channel</th>
              <th className="pb-3 font-medium">Spend</th>
              <th className="pb-3 font-medium">Revenue</th>
              <th className="pb-3 font-medium">ROI</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {campaignData.map((campaign) => (
              <tr
                key={campaign.name}
                className="border-b border-slate-800/70 text-sm last:border-0"
              >
                <td className="py-4 font-semibold text-white">
                  {campaign.name}
                </td>
                <td className="py-4 text-slate-400">{campaign.channel}</td>
                <td className="py-4 text-slate-400">{campaign.spend}</td>
                <td className="py-4 font-medium text-white">
                  {campaign.revenue}
                </td>
                <td className="py-4 text-emerald-400">{campaign.roi}</td>
                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      statusClasses[campaign.status]
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}