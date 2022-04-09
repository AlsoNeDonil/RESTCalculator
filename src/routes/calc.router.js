const Router = require("express");
const calcController = require("../controllers/calc.controller");
const router = new Router();

router.get("/execute", calcController.execute);

module.exports = router;