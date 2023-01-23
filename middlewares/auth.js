
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { user } = require('../models/index');

module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Access denied!" });
  } else {

    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, authConfig.secret, (error, decoded) => {
      if (error) {
        res.status(500).json({ msg: "Problem with decoding", error });
      } else {

        user.findByPk(decoded.user.id, { include: "roles" }).then(user => {
          req.user = user;
          next();
        });
      }

    })
  }
  const onlyAdmin = (req,res,next) =>{
    const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    if (payload.rolIdRol === 1) {
        next();
      } else {
        res.status(403).json({ message: "You are not authorized" });
      }
  }
};