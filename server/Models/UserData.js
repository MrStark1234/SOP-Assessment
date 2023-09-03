const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  highLevelEducation: String,
  Institute: String,
  StudyField: String,
  RelWorkExp: String,
  InstituteApplyInCanada: String,
  ProgrammeOfStudy: String,
  ApplyCountry: String,
  FutureGoal: String,
  EnglishScoreListening: Number,
  EnglishScoreReading: Number,
  EnglishScoreSpeaking: Number,
  EnglishScoreWriting: Number,
  FirstYearTutionFee: String,
  TutionFee: Number,
  GIC: String,
  GICPay: Number,
});

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;
