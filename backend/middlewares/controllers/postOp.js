const postOp = (req, res) => {
  return res.status(200).send({ message: "Success", data: req.body });
};

module.exports = postOp;
