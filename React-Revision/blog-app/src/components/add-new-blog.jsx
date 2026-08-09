import { useDispatch, useSelector } from "react-redux"
import {
  addBlogData,
  handleInputChange,
  resetFormData
} from "../redux/features/blogSlice"

export const AddNewBlog = () => {
  const dispatch = useDispatch()

  const { title, description } = useSelector(
    (state) => state.blog.formData
  )

  const onChangeInput = (event) => {
    dispatch(
      handleInputChange({
        name: event.target.name,
        value: event.target.value
      })
    )
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (!title.trim() || !description.trim()) {
      return
    }

    dispatch(
      addBlogData({
        title: title.trim(),
        description: description.trim()
      })
    )

    dispatch(resetFormData())
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl">
      <form onSubmit={submitHandler} className="p-6 sm:p-8">

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-semibold text-slate-200"
          >
            Blog Title
          </label>

          <input
            id="title"
            type="text"
            name="title"
            value={title}
            placeholder="Enter an interesting title..."
            onChange={onChangeInput}
            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
          />

          <p className="mt-2 text-xs text-slate-500">
            Give your blog a clear and engaging title.
          </p>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-semibold text-slate-200"
          >
            Blog Description
          </label>

          <textarea
            id="description"
            name="description"
            value={description}
            placeholder="What do you want to write about?"
            onChange={onChangeInput}
            rows={5}
            className="w-full resize-y rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-slate-600 transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
          />

          <p className="mt-2 text-xs text-slate-500">
            Tell your readers what your blog is about.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!title.trim() || !description.trim()}
          className="group mt-7 flex w-full items-center justify-between rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span>Publish Blog</span>

          <span className="text-xl transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </form>
    </div>
  )
}