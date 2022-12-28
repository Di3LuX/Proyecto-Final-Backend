
const router = require("express").Router();
const auth = require('./middlewares/auth');

const userRouter = require("./views/userRouter");
const vehiclesRouter = require("./views/vehiclesRouter");

router.use("/vehicles", vehiclesRouter);
router.use("/users", userRouter);

module.exports = router;