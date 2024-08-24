# contextAPI

Context provides a way to pass data through the component tree without having to pass props down manually at every level.


## - Step 1 : createContext 
``` jsx
import { createContext } from "react";

export const CountContext = createContext(0);
```

or

``` js

export const CountContext = createContext({
  count: 0,
  setCount: () => {},
});


```


## - Step 2 : wrap any componant which wants to use the value inside a provider. 


``` jsx
<CountContext.Provider value={count}>
  <Count count={count} setCount={setCount} />
</CountContext.Provider>
```

or 

``` jsx
<CountContext.Provider value={{ count, setCount }}>
  <Count />
</CountContext.Provider>
```
## - Step 3 : useContext

``` jsx

 const count = useContext(CountContext);

  return <div>{count}</div>;
```


``` jsx
  const { count, setCount } = useContext(CountContext);
```