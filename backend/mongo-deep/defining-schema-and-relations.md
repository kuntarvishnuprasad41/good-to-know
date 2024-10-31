
## Defining Schema in Mongoose

``` js
const userSchema = new mongoose.Schema({
    email:String, 
    name:String,
    password:String
})

```

## Lets say the user is has some courses purchased from the courses table bellow

```js
const courseSchema = new mongoose.Schema({
    title:String,
    price:number
});

```

### How can we add the relation? we can do it like below

```js

const userSchema = new mongoose.Schema({
    email:String, 
    name:String,
    password:String,
    purchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

```


## Model

```js
consr User = mongoose.model('User', userSchema);
consr Course = mongoose.model('Course', userSchema);

```