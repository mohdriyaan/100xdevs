import { atom, selector } from "recoil"

export const TodosAtom = atom({
  key: "TodosAtom",
  default: []
})

export const SearchAtom = atom({
  key: "SearchAtom",
  default: ""
})

export const TitleAtom = atom({
  key: "TitleAtom",
  default: ""
})

export const DescriptionAtom = atom({
  key: "DescriptionAtom",
  default: ""
})

export const FilteredTodos = selector({
  key: "FilteredTodos",
  get: ({ get }) => {
    const todos = get(TodosAtom)
    const searchTodo = (get(SearchAtom) || "").toLowerCase()

    return todos.filter((todo) => {
      const title = (todo.title || "").toLowerCase()
      const description = (todo.description || "").toLowerCase()
      return title.includes(searchTodo) || description.includes(searchTodo)
    })
  }
})


