
const router = require("express").Router();
const auth = require('./middlewares/auth');

const userRouter = require("./views/userRouter");
const vehiclesRouter = require("./views/vehiclesRouter");
const estatesRouter = require("./views/estatesRouter");

router.use("/vehicles", vehiclesRouter);
router.use("/estates", estatesRouter);
router.use("/users", userRouter);

module.exports = router;