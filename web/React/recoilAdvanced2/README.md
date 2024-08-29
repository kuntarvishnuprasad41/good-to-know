## Recoil AtomFamily 

### Problem with just atom :

  For eg, when we have multiple todos, which has to be rendered in same component and no global atoms allowed, you start creating multple atoms. 


  for eg: 
  ``` js 

  export const TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Walk dog", completed: false },
  { id: 3, text: "Do laundry", completed: false },
];

export const todosAtom = atom({
  key: 'todos',
  default: TODOS
})

```

even if a single value in the array changes all the componants using it will have to call whole array again, that is a lot of unwanted data


  ## Atom family is just another method of handling atoms efficiently. 

  ``` js 

import { atomFamily } from "recoil";



export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});

//then use it like

const Todo = ({ id }) => {
  const currentTodo = useRecoilValue(todoAtomFamily(id));
  

  return (
    <>
      <h3>Todo</h3>
      {currentTodo?.text} <br />
      {currentTodo?.completed ? "Completed" : "Not Completed"}
      <br />
    </>
  );
};

  ```



## Selector Family
  ### Async calls with selectorfamily


``` js

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


// usage

const Todo = ({ id }) => {
  // const currentTodo = useRecoilValue(todoAtomFamily(id));

  const todos = useRecoilValue(getTodoByIdAtom(id));

  return (
    <>
      <h3>Todo</h3>
      {todos?.text} <br />
      {todos?.completed ? "Completed" : "Not Completed"}
      {JSON.stringify(todos)}
      <br />
    </>
  );
};

```