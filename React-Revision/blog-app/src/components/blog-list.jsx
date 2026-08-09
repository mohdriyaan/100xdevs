import { useSelector } from "react-redux"

export const BlogList = () => {
  const blogList = useSelector((state) => state.blog.blogList)

  if (blogList.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl text-violet-400">
          ✦
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white">
          No blogs yet
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          Your published blogs will appear here. Start by writing
          your first blog above.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {blogList.map((data, index) => (
        <article
          key={index}
          className="group flex min-h-[280px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-violet-950/20"
        >
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="rounded-full bg-violet-500/10 px-3 py-1 text-[10px] font-bold tracking-wider text-violet-400">
              BLOG
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 pt-8">
            <h3 className="text-xl font-bold leading-tight tracking-tight text-white">
              {data.title}
            </h3>

            <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-400">
              {data.description}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs text-slate-600">
              Published
            </span>

            <span className="text-xs font-semibold text-violet-400 transition group-hover:text-violet-300">
              Read more →
            </span>
          </div>
        </article>
      ))}
    </div>
  )
}