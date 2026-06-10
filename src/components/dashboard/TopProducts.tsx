import { products } from '../../data/dashboardData'

export function TopProducts() {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
      <div className="mb-6">
        <p className="text-sm text-slate-400">Product Performance</p>
        <h3 className="mt-1 text-xl font-bold text-white">
          Top Products
        </h3>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div>
              <h4 className="font-semibold text-white">{product.name}</h4>
              <p className="mt-1 text-sm text-slate-400">{product.category}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-white">{product.revenue}</p>
              <p className="mt-1 text-sm text-emerald-400">{product.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}