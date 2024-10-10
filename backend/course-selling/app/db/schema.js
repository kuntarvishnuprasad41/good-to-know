const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId


const userSchema = Schema({

    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastName: String,
    role: "User"
});

const adminSchema = Schema({

    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastName: String,
    role: "Admin"

});

const courseSchema = Schema({

    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId(adminSchema)

});

const purchaseSchema = Schema({

    courseId: ObjectId(courseSchema),
    userId: ObjectId(userSchema)

});


const userModel = mongoose.Model("user", userSchema)
const adminModel = mongoose.Model("admin", adminSchema)
const courseModel = mongoose.Model("course", courseSchema)
const purchaseModel = mongoose.Model("purchase", purchaseSchema)

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}