const upload = require("multer")({ dest: "uploads" });


const allPhotos = upload.fields([
  {
    name: "profilePhoto",
    maxCount: 1,
  },
  {
    name: "SSCCertificate",
    maxCount: 1,
  },
  {
    name: "HSCCertificate",
    maxCount: 1,
  },
  {
    name: "degreeCertificate",
    maxCount: 1,
  },
])

module.exports = { allPhotos, upload };