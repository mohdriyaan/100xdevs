import { useEffect, useState } from "react"
import axios from "axios"

export const Meals = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals ?? [])
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-baseline justify-between">
          <h1 className="text-xl font-semibold text-slate-900">Seafood</h1>
          {!loading && !error && (
            <span className="text-sm text-slate-400">{items.length} meals</span>
          )}
        </div>

        {loading && (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="aspect-square bg-slate-100" />
                <div className="space-y-2 p-3">
                  <div className="h-3 w-3/4 rounded bg-slate-100" />
                  <div className="h-3 w-1/4 rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-rose-100 bg-rose-50 px-4 py-8 text-center text-sm text-rose-600">
            Couldn't load meals. Try refreshing the page.
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-400">
            No meals found.
          </div>
        )}

        {!loading && !error && items.length > 0 && (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {items.map(({ strMeal, strMealThumb, idMeal }) => (
              <section
                key={idMeal}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <section className="p-3">
                  <p className="line-clamp-2 text-sm font-medium text-slate-900">{strMeal}</p>
                  <p className="mt-1 text-xs text-slate-400">#{idMeal}</p>
                </section>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Meals