const { join } = require("path");

const form1Router = async (req, res) => {
  console.log(join(__dirname, "..", "public", "html", "index.html"));
  await res.sendFile(join(__dirname, "..", "public", "index.html"));
};
const studentsTable = async (req, res) => {
  await res
    .sendFile
    // join(__dirname, "..", "public", "html", "StudentTable.html");
    ();
};
module.exports = { form1Router, studentsTable };
