const { z } = require('zod');

const userValidator = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    firstname: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" })
});

const courseValidator = z.object({
    title: z.string().min(1, { message: "Course title is required" }),
    description: z.string().min(1, { message: "Course description is required" }),
    price: z.number().positive({ message: "Price must be a positive number" }),
    imageUrl: z.string().url({ message: "Image URL must be valid" })
});




const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body); // Parse and validate the request body
        next(); // If validation passes, proceed to the next middleware/route handler
    } catch (err) {
        return res.status(400).json({ errors: err.errors });
    }
};


module.exports = {
    validateSchema,
    courseValidator,
    userValidator
};