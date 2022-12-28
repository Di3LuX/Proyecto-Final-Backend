
const { user } = require("../models/index");
const authConfig = require("../config/auth");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userController = {};


userController.register = (req, res) => {

  let password = bcrypt.hashSync(req.body.password, 10);

  user.create({
    username: req.body.username,
    email: req.body.email,
    password: password,
    role_id: 3,
    name: req.body.name,
    location: req.body.location
  })
    .then(user => {
      let token = jsonwebtoken.sign({ user: user }, authConfig.secret, {
        expiresIn: authConfig.expires
      });
      res.json({
        user: user,
        token: token
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(`Hey loquet! ${error.message}`);
    });
};

userController.login = (req, res) => {

  let { email, password } = req.body;
  user.findOne({
    where: { email: email }
  })
    .then(user => {
      if (!user) {
        res.status(404).json({ msg: "That user is not registred here..." });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          let token = jsonwebtoken.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
          });
          res.json({
            user: user,
            token: token
          })
        } else {
          res.status(401).json({ msg: "Wrong password, try again :(" })
        }
      }
    })
    .catch(error => {
      res.status(500).json(error.message);
    })
}

userController.modifyCurrentUser = async (req, res) => {

  const { authorization } = req.headers;
  const [jsonwebtoken] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jsonwebtoken, process.env.JWT_SECRET);
  if (req.body.email !== payload.email) {
    throw new Error("Sorry, we couldn't modify your data")
    return
  }
  try {
    let data = req.body;
    let res = await models.user.update({
      name: data.name,
      username: data.username,
    }, { where: { email: data.email } })
    res.send("Success in modifying")
  } catch (error) {
    res.send(error)
  }
}

/* Implementar?

// Todos los datos sobre el usuario:

userController.findCurrentUser = async (req, res) => {
  const { authorization } = req.headers;
  const [ jsonwebtoken] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jsonwebtoken, process.env.JWT_SECRET);
  try {
    let id = payload.id_user;
    let resp = await models.user.findAll({
      where: {
        id: id,
      },
    });
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
}

// (Only Admin) Eliminacion de perfil de usuario

userController.deleteUser = async (req, res) => {
  try {
    let userEmail = req.params.email;
    let resp = await models.user.destroy({
      where: {
        email: userEmail,
      }
    })
    if (resp === 1) {
      res.send("Hasta la vista, BABY!")
    } else {
      res.send("There's no users here with that e-mail");
    }
  } catch (error) {
    res.send(error)
  }
}



// (Only Admin) Un .findAll para traer todos los datos de perfil de usuario por si hiciera falta.

userController.findAll = async (req, res) => {
  try {
    const users = await models.user.findAll();
    return res.status(200).json(users);
  } catch (error) {
    res.send(error);
  }
};

*/
module.exports = userController;