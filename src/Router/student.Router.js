const { studentSchema } = require("../db/schema");
const { readFileSync, rmSync } = require("fs");
const { model } = require("mongoose");
const { join } = require("path");
const delectFiles = (req) => {
  rmSync(
    join(__dirname, "..", "..", "uploads", req.files.profilePhoto[0].filename)
  );
  rmSync(
    join(__dirname, "..", "..", "uploads", req.files.SSCCertificate[0].filename)
  );
  rmSync(
    join(__dirname, "..", "..", "uploads", req.files.HSCCertificate[0].filename)
  );
  rmSync(
    join(
      __dirname,
      "..",
      "..",
      "uploads",
      req.files.degreeCertificate[0].filename
    )
  );
};
const studentRouter = async (req, res) => {
  const student = {
    ...req.body,
    uploadedData: new Date().toLocaleString(),
    profilePhoto: {
      data: readFileSync(
        join(
          __dirname,
          "..",
          "..",
          "uploads",
          req.files.profilePhoto[0].filename
        )
      ),
      contentType: "image/png",
    },
    SSCCertificate: {
      data: readFileSync(
        join(
          __dirname,
          "..",
          "..",
          "uploads",
          req.files.SSCCertificate[0].filename
        )
      ),
      contentType: "image/png",
    },
    HSCCertificate: {
      data: readFileSync(
        join(
          __dirname,
          "..",
          "..",
          "uploads",
          req.files.HSCCertificate[0].filename
        )
      ),
      contentType: "image/png",
    },
    degreeCertificate: {
      data: readFileSync(
        join(
          __dirname,
          "..",
          "..",
          "uploads",
          req.files.degreeCertificate[0].filename
        )
      ),
      contentType: "image/png",
    },
    Currentpercentage: Number(req.body.Currentpercentage),
    SSCpercentage: Number(req.body.SSCpercentage),
    Telephonehome: Number(req.body.Telephonehome),
    Telephonemobile: Number(req.body.Telephonemobile),
    HSCpercentage: Number(req.body.HSCpercentage),
  };

  const db = model("student", studentSchema);
  console.log(student);
  db.create(student, (err) => {
    if (!err) {
      console.log("data stored");
    } else {
      console.log("data not stored", err);
    }
    res.sendFile(join(__dirname, "..", "..", "public", "index.html"));
    delectFiles(req);
  });
};
const studentsRouter = async (req, res) => {
  console.log(req.url);
  let db = model("student", studentSchema);
  db.find().exec((err, students) => {
    if (err) {
      res.send("");
    } else {
      let cp = students.map((student) => {
        return {
          Firstname: student.Firstname,
          Lastname: student.Lastname,
          DateofBirth: student.DateofBirth,
          Email: student.Email,
          Fatherfirstname: student.Fatherfirstname,
          Fatherlastname: student.Fatherlastname,
          Motherfirstname: student.Motherfirstname,
          Motherlastname: student.Motherlastname,
          Gender: student.Gender,
          Nationality: student.Nationality,
          Street: student.Street,
          City: student.City,
          Country: student.Country,
          Telephonehome: student.Telephonehome,
          Telephonemobile: student.Telephonemobile,
          HSCname: student.HSCname,
          HSCboard: student.HSCboard,
          HSCpercentage: student.HSCpercentage,
          SSCname: student.SSCname,
          SSCboard: student.SSCboard,
          SSCpercentage: student.SSCpercentage,
          CurrentInstuationboard: student.CurrentInstuationboard,
          CurrentInstuationname: student.CurrentInstuationname,
          Currentpercentage: student.Currentpercentage,
          Backlog: student.Backlog,
          profilePhoto: {
            ...student.profilePhoto,
            data: student.profilePhoto.data.toString("base64"),
          },
          SSCCertificate: {
            ...student.SSCCertificate,
            data: student.SSCCertificate.data.toString("base64"),
          },
          HSCCertificate: {
            ...student.HSCCertificate,
            data: student.HSCCertificate.data.toString("base64"),
          },
          degreeCertificate: {
            ...student.degreeCertificate,
            data: student.degreeCertificate.data.toString("base64"),
          },
        };
      });
      res.send({ students: cp });
    }
  });
};

module.exports = { studentRouter, studentsRouter };
