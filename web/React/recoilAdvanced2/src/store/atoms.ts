import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Walk dog", completed: false },
  { id: 3, text: "Do laundry", completed: false },
];

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});

export const getTodoByIdAtom = atomFamily({
  key: "getTodoByIdAtom",
  default: selectorFamily({
    key: "getTodoByIdAtomSel",
    get:
      (id) =>
      async ({ get }) => {
        const res = await fetch("http://localhost:8000/todo/" + id);
        const todo = await res.json();
        return todo;
      },
  }),
});

export const getTodoFromAPIAtom = atom({
  key: "getTodoFromAPIAtom",
  default: selector({
    key: "getTodoFromAPIAtomSel",
    get: async () => {
      const todo = await fetch("http://localhost:8000/todos");
      const res = await todo.json();
      return res;
    },
  }),
});
