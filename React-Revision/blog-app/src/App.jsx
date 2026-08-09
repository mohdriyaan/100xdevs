import { AddNewBlog } from "./components/add-new-blog"
import { BlogList } from "./components/blog-list"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-white/10">
        {/* Background effects */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-violet-300">
              REDUX TOOLKIT PROJECT
            </span>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              My Blog
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Create, manage and showcase your thoughts with a simple
              Redux-powered blogging application.
            </p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">

        {/* Create Blog */}
        <section>
          <div className="mb-7">
            <span className="text-xs font-bold tracking-[0.2em] text-violet-400">
              CREATE
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Write something new
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Share your thoughts with the world.
            </p>
          </div>

          <AddNewBlog />
        </section>

        {/* Blog List */}
        <section className="mt-20">
          <div className="mb-7">
            <span className="text-xs font-bold tracking-[0.2em] text-violet-400">
              EXPLORE
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Latest Blogs
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Your published posts will appear here.
            </p>
          </div>

          <BlogList />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <p className="text-sm text-slate-500">
          Built with React & Redux Toolkit
        </p>
      </footer>
    </div>
  )
}

export default App