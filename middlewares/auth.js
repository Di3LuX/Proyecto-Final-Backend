
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { user } = require('../models/index');

module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Access denied!" });
  } else {

    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        res.status(500).json({ msg: "Problem with decoding", err });
      } else {

        user.findByPk(decoded.user.id, { include: "roles" }).then(user => {
          req.user = user;
          next();
        });
      }

    })
  }

};