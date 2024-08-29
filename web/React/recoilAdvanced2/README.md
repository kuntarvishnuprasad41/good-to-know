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



  ```