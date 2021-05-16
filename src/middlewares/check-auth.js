const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log(req)
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(token)
    req.userData = decoded;
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Auth Failed",
    });
  }
};
