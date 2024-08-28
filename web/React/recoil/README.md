# Recoil 
A State management library for React

## Problem with contextAPI

Take a look at the below code 

``` jsx
import { useContext, useState } from "react";
import { CountContext } from "./context";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);

  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;

```


The code 

``` jsx

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
```

Does not use any of the context values, such as count and setCount
but still re-renders as it was inside the ContextProvider


To Solve this the State management tools like Redux and Recoil are made


## Recoil  

1. Create an Atom

``` js

const { atom } = require("recoil");

const countAtom = atom({
  key: "countAtom",
  default: 0,
});

```

2. Wrap root component with RecoilRoot

``` js

  return (
    <RecoilRoot>
      <div>
        <Count />
      </div>
    </RecoilRoot>
  );
}
```

3. Use useRecoilValue for getting value of a state variable and useSetRecoilState where we need set state and useRecoilState where we need both
``` js


function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>{count}</div>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
  )}

```



### Things to implement
1.  **Atoms**: Recoil uses the concept of atoms to store the state.
2.  **Selectors**: These are functions that compute derived state based on other state.
3.  **RecoilRoot**: 
4.  **useRecoilState**:
5.  **useSetRecoilState**:
6.  **useRecoilValue**:


