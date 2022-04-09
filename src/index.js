const express = require("express");
const calcRouter = require("./routes/calc.router.js");

const app = express();

app.use("/api", calcRouter);

app.listen(3000, () => {
    console.log("Server has been started");
})