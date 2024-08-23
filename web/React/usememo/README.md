# useMemo

This ensures that the component doesn't re-render unneccesarily

## syn

```
const dontRerenderUnlessValueOfXChanges = useMemo(()=>{
  //some instruction
}, [x])
```


```

const [x, setX] = useState(0)
const [y, setY] = useState(0)
const [z, setZ] = useState(0)

setX(10)
setY(10)


setTimeout(()=>{
  setZ(19)
}, 5000) //sets the z value after 5 Seconds

//This function / operation takes only x & y 

// let res = x+y # This will render again after 5 seconds because z value changed

//We Can write the above statement as 


let res = useMemo(()=>{
  return x+y
},[x,y]) 

//the above won't re-render again for change in only z after 5 seconds as it needs only x and y


```


## Great day

