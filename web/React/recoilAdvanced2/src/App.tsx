import { useState } from "react";

import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { getTodoByIdAtom } from "./store/atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
    </>
  );
}

export default App;

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
