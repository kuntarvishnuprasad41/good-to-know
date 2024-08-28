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

#### Above code can also be written as 
``` js
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
```


### selector : Let's add another text where it says whether the count variable even or not

1. Define selector
``` js 
import { selector } from "recoil";
import { countAtom } from "../count";

export const evenOddSelector = selector({
  key: "evenOddSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0 ? "Even" : "Odd";
  },
});
```
2. useValue
``` js
 const count = useRecoilValue(countAtom);
  const countType = useRecoilValue(evenOddSelector);

  return (
    <div>
      {count}

      <div> It is {countType} </div>
    </div>
  );
}



```


### Things to implement
1.  **Atoms**: Recoil uses the concept of atoms to store the state.
2.  **Selectors**: These are functions that compute derived state based on other state.
3.  **RecoilRoot**: 
4.  **useRecoilState**:
5.  **useSetRecoilState**:
6.  **useRecoilValue**:


