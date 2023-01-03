const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { connectionDB } = require("./db/conn");
const { allPhotos } = require("../multer/image");
const { form1Router, studentsTable } = require("./Router/page.Router");
const { studentRouter } = require("./Router/student.Router");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", form1Router);
app.post("/student", allPhotos, studentRouter);

mongoose.set("strictQuery", false);
app.listen(port, async () => {
  await connectionDB();
  console.log(`Server is running at port no ${port}`);
});
