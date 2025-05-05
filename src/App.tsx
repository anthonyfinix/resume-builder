import "./App.css";
import Sidebar from "./components/Sidebar";
import Resume from "./components/Resume";
import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const [permanentAddress, setPermanentAddress] = useState<string>("");
  const [expectation, setExpectation] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [workExperiences, setWorkExperiences] = useState<
    {
      companyName: string;
      designation: string;
      duties: string[];
      joiningData: Date;
      relievedData: Date;
      current: boolean;
    }[]
  >([]);
  const [academicQualifications, setAcademicQualifications] = useState<
    {
      establishmentName: string;
      joiningData: Date;
      relievedData: Date;
      certifcation: string;
      link?: string[];
      persuing: boolean;
    }[]
  >([]);
  return (
    <>
      <div id="backdrop" className="bg-neutral-200 overflow-hidden h-screen">
        <div className="page-wrapper flex justify-center">
          <Resume
            name={name}
            headline={headline}
            phoneNumber={phoneNumber}
            email={email}
            dateOfBirth={dateOfBirth}
            currentAddress={currentAddress}
            permanentAddress={permanentAddress}
            expectation={expectation}
            language={languages}
            workExperiences={workExperiences}
            academicQualifications={academicQualifications}
          />
        </div>
        <Sidebar
          // Personal Information
          name={name}
          handleNameChange={setName}
          headline={headline}
          handleHeadlineChange={setHeadline}
          phoneNumber={phoneNumber}
          handlePhoneNumberChange={setPhoneNumber}
          email={email}
          handleEmailChange={setEmail}
          dateOfBirth={dateOfBirth}
          handleDateOfBirthChange={setDateOfBirth}
          currentAddress={currentAddress}
          handleCurrentAddressChange={setCurrentAddress}
          permanentAddress={permanentAddress}
          handlePermanentAddressChange={setPermanentAddress}
          expectation={expectation}
          handleExpectationChange={setExpectation}
          languages={languages}
          handleLanguagesChange={setLanguages}
          workExperiences={workExperiences}
          handleWorkExperiencesChange={setWorkExperiences}
          academicQualifications={academicQualifications}
          handleAcademicQualificationsChange={setAcademicQualifications}
        />
      </div>
    </>
  );
}

export default App;
