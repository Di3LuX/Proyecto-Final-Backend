
const router = require("express").Router();

const userRouter = require("./views/userRouter");
const vehiclesRouter = require("./views/vehiclesRouter");
const estatesRouter = require("./views/estatesRouter");
const variousRouter = require("./views/variousRouter");
const ordersRouter = require("./views/ordersRoutes")

router.use("/vehicles", vehiclesRouter);
router.use("/estates", estatesRouter);
router.use("/various", variousRouter);
router.use("/users", userRouter);
router.use("/orders", ordersRouter);

module.exports = router;