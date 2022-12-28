
const router = require("express").Router();
const auth = require('./middlewares/auth');

const userRouter = require("./views/userRouter");
const vehiclesRouter = require("./views/vehiclesRouter");
const estatesRouter = require("./views/estatesRouter");
const variousRouter = require("./views/variousRouter");

router.use("/vehicles", vehiclesRouter);
router.use("/estates", estatesRouter);
router.use("/various", variousRouter);
router.use("/users", userRouter);

module.exports = router;