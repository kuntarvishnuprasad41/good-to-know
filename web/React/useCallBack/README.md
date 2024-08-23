# useCallback

This is not about the memoization or minimizing the amount of code that is run.
This ensures that the child component doesn't re-render unneccesarily if the function doesn't need to change across the renders.

## syn

```
const dontRerenderUnlessValueOfXChanges = useCallback(()=>{
  //some instruction
}, [x])
```


``` javascript

const [a, setA] = useState(0)
const [b, setB] = useState(0)
const [c, setC] = useState(0)


setA(10)
setB(10)


setTimeout(()=>{
  setA(10)
}, 5000)  // will set the value of A with same value after 10 sec

 const calculateSum = () =>{
  return a+b;
 }  let us say that we have this function which calculates sum of 2 a+b
let sum = calculateSum ()

return <><Child calculateSum() /></> 

const Child = ({calculateSum}) =>{ //This section re-renders even if value of state is changed but still value remain unchanged, for eg: a & b was 10, ran setA(10), setB(10) this section re-renders
  const sum = calculateSum()
    
  return <>{sum}</> //This section re-renders even if value of state is changed but still value remain unchanged, for eg: a & b was 10, ran setA(10), setB(10) this section re-renders
}


// To Solve this we can

const calculateSum = useCallBack(()=>{
  return a+b
},[a, b])

return <><Child calculateSum() /></> 

const Child = ({calculateSum}) =>{ //This section re-renders even if value of state is changed but still value remain unchanged, for eg: a & b was 10, ran setA(10), setB(10) this section re-renders
  const sum = calculateSum()

  return <>{sum}</> //This section re-renders even if value of state is changed but still value remain unchanged, for eg: a & b was 10, ran setA(10), setB(10) this section re-renders
}




```


## Great day

