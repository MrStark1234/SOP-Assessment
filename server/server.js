const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserData = require("./Models/UserData");
const dotenv = require("dotenv").config();
// const sendMail = require("./SendMail");
const nodemailer = require("nodemailer");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
//-------------------------------------------------------------//

//---------------------------------------------------------------------//
const app = express();
const PORT = process.env.port || 80;

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to the world of coding");
});

app.post("/submit", async (req, res) => {
  try {
    // Create a new user data entry
    const newUser = new UserData(req.body);
    await newUser.save();

    let transporter = await nodemailer.createTransport({
      host: "smtp.ethereal.email",
      post: 587,
      auth: {
        user: "alfonzo23@ethereal.email",
        pass: "8Je9Gyvv4xYK25AAcd",
      },
    });

    let info = await transporter.sendMail({
      from: '"Suraj Singhal 👻" <alfonzo23@ethereal.email>', // sender address
      to: newUser.email, // list of receivers
      subject: "Statement of Purpose Generated", // Subject line
      text: `Statement of Purpose My name is ${newUser.name}, and I am ${newUser.age} years old. I hold a ${newUser.highLevelEducation} degree in ${newUser.StudyField} from ${newUser.Institute}. My academic journey has equipped me with the knowledge and skills required to excel in the field of ${newUser.StudyField}. With ${newUser.EnglishScoreListening} in listening, ${newUser.EnglishScoreReading} in reading, ${newUser.EnglishScoreSpeaking} in speaking, and ${newUser.EnglishScoreWriting} in writing, I am confident in my ability to communicate effectively in English. In addition to my academic background, I have gained practical experience through my previous role. ${newUser.RelWorkExp}. This experience has honed my interpersonal and leadership skills, which I believe are essential in my pursuit of a ${newUser.FutureGoal}. I am particularly interested in studying ${newUser.ProgrammeOfStudy} at ${newUser.InstituteApplyInCanada} in Canada. The opportunity to enroll in this program aligns perfectly with my career aspirations. I am enthusiastic about the prospect of furthering my knowledge and expertise in the field of ${newUser.ProgrammeOfStudy}. Moreover, I am committed to contributing positively to the academic community at ${newUser.InstituteApplyInCanada}. My passion for learning, combined with my determination to excel, drives me to strive for academic excellence. To fund my education, I have secured the necessary financial resources, including the ${newUser.FirstYearTutionFee} payment of tuition fees, which amounts to ${newUser.TutionFee} and the ${newUser.GICPay} for the Guaranteed Investment Certificate (GIC). In conclusion, my educational background, professional experience, and determination make me a strong candidate for the ${newUser.ProgrammeOfStudy} program at ${newUser.InstituteApplyInCanada}. I am eager to embark on this educational journey and work diligently to achieve my goal of becoming an ${newUser.FutureGoal}.`, // plain text body
      html: `<h1>Statement of Purpose</h1><p>My name is ${newUser.name}, and I am ${newUser.age} years old. I hold a ${newUser.highLevelEducation} degree in ${newUser.StudyField} from ${newUser.Institute}. My academic journey has equipped me with the knowledge and skills required to excel in the field of ${newUser.StudyField}.</p><p>With ${newUser.EnglishScoreListening} in listening, ${newUser.EnglishScoreReading} in reading, ${newUser.EnglishScoreSpeaking} in speaking, and ${newUser.EnglishScoreWriting} in writing, I am confident in my ability to communicate effectively in English.</p><p>In addition to my academic background, I have gained practical experience through my previous role. ${newUser.RelWorkExp}. This experience has honed my interpersonal and leadership skills, which I believe are essential in my pursuit of a ${newUser.FutureGoal}.</p><p>I am particularly interested in studying ${newUser.ProgrammeOfStudy} at ${newUser.InstituteApplyInCanada} in Canada. The opportunity to enroll in this program aligns perfectly with my career aspirations. I am enthusiastic about the prospect of furthering my knowledge and expertise in the field of ${newUser.ProgrammeOfStudy}.</p><p>Moreover, I am committed to contributing positively to the academic community at ${newUser.InstituteApplyInCanada}. My passion for learning, combined with my determination to excel, drives me to strive for academic excellence.</p><p>To fund my education, I have secured the necessary financial resources, including the ${newUser.FirstYearTutionFee} payment of tuition fees, which amounts to ${newUser.TutionFee} and the ${newUser.GICPay} for the Guaranteed Investment Certificate (GIC).</p><p>In conclusion, my educational background, professional experience, and determination make me a strong candidate for the ${newUser.ProgrammeOfStudy} program at ${newUser.InstituteApplyInCanada}. I am eager to embark on this educational journey and work diligently to achieve my goal of becoming an ${newUser.FutureGoal}.</p>`,
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

mongoose
  .connect(process.env.MongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
