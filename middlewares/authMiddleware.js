
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
    const payload = jwt.verify(jwt, process.env.JWT_SECRET);
    if (payload.role_id === 1 ) {
        next();
      } else {
        res.status(403).json({ message: "You are not authorized" });
      }
  }
};


// Otra forma

/*
const jwt = require("jsonwebtoken");

const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const [strategy, jwt] = authorization.split(" ");
    if (strategy.toLowerCase() !== "bearer") {
      throw new Error("Invalid strategy");
    }
    const payload = jwt.verify(jwt, process.env.JWT_SECRET);
    req.auth = payload;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Why you still here? Go Login!" });
    return;
  }
};


const roleValidation = (role) => (req, res, next) => {
  if (req.auth?.role === role) {
    next();
  } else {
    res.status(403).json({ message: "You are not an admin" });
  }
};

const userRegistred = (email) => async (req, res, next) => {
  email = req.params.email || req.body.email;
  if (req.auth?.email === email) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized" });
  }
};

module.exports = {
  authBearerMiddleware,
  roleValidation,
  userRegistred,
};
*/