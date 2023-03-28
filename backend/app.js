const express = require("express");
const mongoose = require("mongoose");
const courseRouter = require("./router/courseRoutes");
const cors = require('cors')
const app = express();

(async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/course");

    console.log(`connected to DB`);
  } catch (e) {
    console.log(`Error connecting to DB`, e);
  }
})();

app.use(express.json());
app.use(cors())
app.use("/courses", courseRouter);

app.listen(3000, () => {
  console.log("conected");
});
