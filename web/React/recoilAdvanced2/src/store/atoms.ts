import { atom, atomFamily } from "recoil";

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
