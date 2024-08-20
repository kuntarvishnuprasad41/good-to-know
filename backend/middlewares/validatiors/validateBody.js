const validateBody = (req, res, next) => {
  if (req.body) {
    if (req.body.name && req.body.priority) {
      next();
    } else {
      return res.status(400).send({ message: "Invalid request body" });
    }
  }
};

module.exports = validateBody;
