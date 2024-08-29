import { useState } from "react";

import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./store/atoms";

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
