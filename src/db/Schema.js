const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	"name" : String,
	"pass" : String
})
const studentSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    require: true,
  },
  Lastname: {
    type: String,
    require: true,
  },
  DateofBirth: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  Fatherfirstname: {
    type: String,
    require: true,
  },
  Fatherlastname: {
    type: String,
    require: true,
  },
  Motherfirstname: {
    type: String,
    require: true,
  },
  Motherlastname: {
    type: String,
    require: true,
  },
  Gender: {
    type: String,
    require: true,
  },
  Nationality: {
    type: String,
    require: true,
  },
  Street: {
    type: String,
    require: true,
  },
  City: {
    type: String,
    require: true,
  },
  Country: {
    type: String,
    require: true,
  },
  Telephonehome: {
    type: Number,
    require: true,
  },
  Telephonemobile: {
    type: Number,
    require: true,
  },
  HSCname: {
    type: String,
    require: true,
  },
  HSCboard: {
    type: String,
    require: true,
  },
  HSCpercentage: {
    type: Number,
    require: true,
  },
  SSCname: {
    type: String,
    require: true,
  },
  SSCboard: {
    type: String,
    require: true,
  },
  SSCpercentage: {
    type: Number,
    require: true,
  },
  CurrentInstuationboard: {
    type: String,
    require: true,
  },
  CurrentInstuationname: {
    type: String,
    require: true,
  },
  Currentpercentage: {
    type: Number,
    require: true,
  },
  Backlog: {
    type: String,
    require: true,
  },
  profilePhoto: {
    data : Buffer,
    contentType: String,
  },
  SSCCertificate: {
    data: Buffer,
    contentType: String,
  },
  HSCCertificate: {
    data: Buffer,
    contentType: String,
  },
  degreeCertificate: {
    data: Buffer,
    contentType: String,
  },
  uploadedDate: String,
  description: String,
});

module.exports = { userSchema, studentSchema };