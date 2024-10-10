const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

mongoose.connect("mongodb://localhost:27017/course-selling", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});


const userSchema = new Schema({

    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastName: String,
    role: { type: String, default: "User" }
});

const adminSchema = new Schema({

    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastName: String,
    role: { type: String, default: "Admin" }

});

const courseSchema = new Schema({

    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({

    courseId: ObjectId,
    userId: ObjectId
});


const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}