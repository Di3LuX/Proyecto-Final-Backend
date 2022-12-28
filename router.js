
const router = require("express").Router();
const auth = require('./middlewares/auth');

const userRouter = require("./views/userRouter");

router.use("/users", userRouter);

module.exports = router;