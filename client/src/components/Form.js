import React, { useState } from "react";
import pic from "./image/1212.png";

import "./SOPForm.css";

function SOPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: null || "",
    highLevelEducation: "Choose",
    Institute: "",
    StudyField: "",
    RelWorkExp: "",
    InstituteApplyInCanada: "",
    ProgrammeOfStudy: "",
    ApplyCountry: "",
    FutureGoal: "",
    EnglishScoreListening: null || "",
    EnglishScoreReading: null || "",
    EnglishScoreSpeaking: null || "",
    EnglishScoreWriting: null || "",
    FirstYearTutionFee: "",
    TutionFee: null || "",
    GIC: "",
    GICPay: null || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a new FormData object and append form data
    const formDataObject = new FormData();
    formDataObject.append("name", formData.name);
    formDataObject.append("email", formData.email);
    formDataObject.append("email", formData.age);
    formDataObject.append("email", formData.highLevelEducation);
    formDataObject.append("email", formData.Institute);
    formDataObject.append("email", formData.StudyField);
    formDataObject.append("email", formData.RelWorkExp);
    formDataObject.append("email", formData.InstituteApplyInCanada);
    formDataObject.append("email", formData.ProgrammeOfStudy);
    formDataObject.append("email", formData.ApplyCountry);
    formDataObject.append("email", formData.FutureGoal);
    formDataObject.append("email", formData.EnglishScoreListening);
    formDataObject.append("email", formData.EnglishScoreReading);
    formDataObject.append("email", formData.EnglishScoreSpeaking);
    formDataObject.append("email", formData.EnglishScoreWriting);
    formDataObject.append("email", formData.FirstYearTutionFee);
    formDataObject.append("email", formData.TutionFee);
    formDataObject.append("email", formData.GIC);
    formDataObject.append("email", formData.GICPay);

    // Send the form data to the backend API
    try {
      const response = await fetch("https://sopserver.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set Content-Type
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: formData.age,
          highLevelEducation: formData.highLevelEducation,
          Institute: formData.Institute,
          StudyField: formData.StudyField,
          RelWorkExp: formData.RelWorkExp,
          InstituteApplyInCanada: formData.InstituteApplyInCanada,
          ProgrammeOfStudy: formData.ProgrammeOfStudy,
          ApplyCountry: formData.ApplyCountry,
          FutureGoal: formData.FutureGoal,
          EnglishScoreListening: formData.EnglishScoreListening,
          EnglishScoreReading: formData.EnglishScoreReading,
          EnglishScoreSpeaking: formData.EnglishScoreSpeaking,
          EnglishScoreWriting: formData.EnglishScoreWriting,
          FirstYearTutionFee: formData.FirstYearTutionFee,
          TutionFee: formData.TutionFee,
          GIC: formData.GIC,
          GICPay: formData.GICPay,
        }),
      });
      if (response.status === 200) {
        alert("Form submitted successfully, Your Response has been Recorded");
        window.location.reload();
      } else {
        alert("Form submission failed. Please try again later.");
      }
    } catch (error) {}
  };

  const resetForm = () => {
    window.location.reload();
  };
  return (
    <div className="container">
      <div className="pic">
        <img src={pic} alt="pic" />
      </div>
      <div className="text">
        {" "}
        <h2>Customized SOP Generator</h2>
        <p>
          Fill this questionnaire for the student. After submitting, you will
          receive an email at the email address that you have provided with a
          Statement of Purpose customized for you. You can use and modify that
          as per your needs.
          <br />
          <br />
          <br />
          If you would like to get it edited, reviewed, or drafted by our
          experts, you can get in touch with us:{" "}
          <a href="https://surajsinghal.netlify.app">
            https://surajsinghal.netlify.app
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Name:</label>
          <input
            required={true}
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>Email:</label>
          <input
            required={true}
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>Age:</label>
          <input
            required={true}
            type="number"
            placeholder="Your Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>High Level of Education:</label>
          <select
            required={true}
            name="highLevelEducation"
            value={formData.highLevelEducation}
            onChange={handleInputChange}
          >
            <option value="Grade 12">Grade 12</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelors Degree">Bachelors Degree</option>
            <option value="Masters Degree">Masters Degree</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="form">
          <label>Institute Name:</label>
          <input
            required={true}
            type="text"
            placeholder="Your Answer"
            name="Institute"
            value={formData.Institute}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>Field of Study:</label>
          <input
            required={true}
            type="text"
            placeholder="Your Answer"
            name="StudyField"
            value={formData.StudyField}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>Relevent Work Experience:</label>
          <p>
            Write None if no work experience. Provide the following details if
            yes:
          </p>{" "}
          <br />
          <br />
          <p>1. Job Title </p>
          <p>2. Company Name </p>
          <p>3. Job duties </p>
          <br />
          <p>
            {" "}
            Sample Answer: I worked as a Sales Manager at Effizient Immigration
            Inc from Jan 2022 till Feb 2023. In this role, I managed sales
            operations, reaching out to leads, lead the outreach program,
            ensured meeting monthly targets.
          </p>
          <input
            required={true}
            type="text"
            placeholder="Your Answer"
            name="RelWorkExp"
            value={formData.RelWorkExp}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>What institute did you get admitted to in Canada?:</label>
          <input
            required={true}
            type="text"
            placeholder="Your Answer"
            name="InstituteApplyInCanada"
            value={formData.InstituteApplyInCanada}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>What is your program of study in Canada?:</label>
          <input
            required={true}
            type="text"
            placeholder="Your Answer"
            name="ProgrammeOfStudy"
            value={formData.ProgrammeOfStudy}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>Which country are you applying from?:</label>
          <input
            required={true}
            type="text"
            placeholder="Your Answer"
            name="ApplyCountry"
            value={formData.ApplyCountry}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>What are your future goals? :</label>
          <input
            required={true}
            type="text"
            placeholder="Your Answer"
            name="FutureGoal"
            value={formData.FutureGoal}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>English Scores - Listening :</label>
          <input
            required={true}
            type="number"
            placeholder="Your Score"
            name="EnglishScoreListening"
            value={formData.EnglishScoreListening}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>English Scores - Reading :</label>
          <input
            required={true}
            type="number"
            placeholder="Your Answer"
            name="EnglishScoreReading"
            value={formData.EnglishScoreReading}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>English Scores - Speaking :</label>
          <input
            required={true}
            type="number"
            placeholder="Your Answer"
            name="EnglishScoreSpeaking"
            value={formData.EnglishScoreSpeaking}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>English Scores - Writing :</label>
          <input
            required={true}
            type="number"
            placeholder="Your Answer"
            name="EnglishScoreWriting"
            value={formData.EnglishScoreWriting}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>Did you pay your first year tuition fee?:</label>
          <div>
            <input
              className="radio"
              type="radio"
              name="FirstYearTutionFee"
              value="Yes"
              checked={formData.FirstYearTutionFee === "Yes"}
              onChange={handleInputChange}
            />
            <label>Yes</label>
          </div>
          <div>
            <input
              className="radio"
              type="radio"
              name="FirstYearTutionFee"
              value="No"
              checked={formData.FirstYearTutionFee === "No"}
              onChange={handleInputChange}
            />
            <label>No</label>
          </div>
        </div>
        <div className="form">
          <label>How much tuition fee did you pay?:</label>

          <input
            required={true}
            type="number"
            placeholder="Your Answer"
            name="TutionFee"
            value={formData.TutionFee}
            onChange={handleInputChange}
          />
        </div>
        <div className="form">
          <label>Did you do a GIC? :</label>
          <div>
            <input
              className="radio"
              type="radio"
              name="GIC"
              value="Yes"
              checked={formData.GIC === "Yes"}
              onChange={handleInputChange}
            />
            <label>Yes</label>
          </div>
          <div>
            <input
              className="radio"
              type="radio"
              name="GIC"
              value="No"
              checked={formData.GIC === "No"}
              onChange={handleInputChange}
            />
            <label>No</label>
          </div>
        </div>
        <div className="form">
          <label>How much did you pay towards GIC? :</label>
          <input
            required={true}
            type="number"
            placeholder="Your Answer"
            name="GICPay"
            value={formData.GICPay}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
        <button className="reset" type="reset" onClick={resetForm}>
          Clear Form
        </button>
        <div className="information">
          <p>Never Submit Password through Forms</p>
          <h4>
            This content is neither created nor endorsed by any other. Report
            Abuse - Terms of Service - Privacy Policy
          </h4>

          <h3>Built with ❤️ by Suraj Singhal</h3>
        </div>
      </form>
    </div>
  );
}

export default SOPForm;
