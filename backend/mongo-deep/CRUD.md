## Insert Data into Mongo

### Lets say the schema is 
``` js

const userSchema = new mongoose.Schema({
    username:String,
    password:String
})

const User = mongoose.model('User',userSchema)

```

### Then, this is how we add data


``` js

User.create({
    username: req.body.username,
    password: req.body.password,
})

```


## Find data

``` js

//To FindbyId
User.findById("1")

// Find by data, lists firstone
User.findOne("username":"vishnu@test.com")

// Find by data, all
User.find("username":"vishnu@test.com")


```

## Update data

``` js 

User.updateOne({
        "id":1
    },{
        password : "newPassword"
    })

// for every row in table

User.update({},{
    premium:true
})

```

## Delete
```js

//deletes everything
User.deleteMany({})

User.deleteOne(  {
    username:'vishnu@test.com'
})

```