const authCheck = (req, res, next) => {
  if (req.headers.authorization === "vishnu") {
    next();
  } else {
    return res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = authCheck;
