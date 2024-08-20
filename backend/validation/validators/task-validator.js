const { z } = require("zod");

// {
//     "name": "Name11121",
//     "description": "This is task 112",
//     "priority": "low",
//     "status": "pending"
// }

const schema = z.object({
  name: z.string().min(3, "Name is required"),
  description: z.string().min(3, "Description is required"),
  priority: z.string().min(1, "Priority is required"),
  status: z.string().min(1, "Status is required"),
});

module.exports = schema; // export the schema
