const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  try {
    console.log('request', request)
    const token = request.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(token)
    request.userData = decoded;
    request.userId = decoded.userId;
    next();
  } catch (err) {
    return response.status(401).json({
      message: 'Auth Failed',
    });
  }
};
