import { FC } from "react";

export type SidebarProps = {
  name: string;
  handleNameChange: (name: string) => void;
  headline: string;
  handleHeadlineChange: (headline: string) => void;
  phoneNumber: string;
  handlePhoneNumberChange: (phoneNumber: string) => void;
  email: string;
  handleEmailChange: (email: string) => void;
  dateOfBirth: Date;
  handleDateOfBirthChange: (dateOfBirth: Date) => void;
  currentAddress: string;
  handleCurrentAddressChange: (currentAddress: string) => void;
  permanentAddress: string;
  handlePermanentAddressChange: (permanentAddress: string) => void;
  expectation: string[];
  handleExpectationChange: (expectation: string[]) => void;
  languages: string[];
  handleLanguagesChange: (languages: string[]) => void;
  workExperiences: {
    companyName: string;
    designation: string;
    duties: string[];
    joiningData: Date;
    relievedData: Date;
    current: boolean;
  }[];
  handleWorkExperiencesChange: (
    workExperiences: {
      companyName: string;
      designation: string;
      duties: string[];
      joiningData: Date;
      relievedData: Date;
      current: boolean;
    }[]
  ) => void;
  academicQualifications: {
    establishmentName: string;
    joiningData: Date;
    relievedData: Date;
    certifcation: string;
    link?: string[];
    persuing: boolean;
  }[];
  handleAcademicQualificationsChange: (
    academicQualifications: {
      establishmentName: string;
      joiningData: Date;
      relievedData: Date;
      certifcation: string;
      link?: string[];
      persuing: boolean;
    }[]
  ) => void;
};

const Sidebar: FC<SidebarProps> = ({ name, handleNameChange }) => {
  return (
    <div className="absolute top-0 right-0 h-screen w-64 bg-white p-4 shadow-lg">
      <div>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
      </div>
      <div>
        <p>Contact</p>
        <input type="text" />
      </div>
      <div>
        <p>Date of birth</p>
        <input type="text" />
      </div>
      <div>
        <p>Address</p>
        <input type="text" />
      </div>
      <div>
        <p>Tools Worked in</p>
        <input type="text" />
      </div>
      <div>
        <p>Languages</p>
        <input type="text" />
      </div>
      <div>
        <p>Tag Line</p>
        <input type="text" />
      </div>
      <div>
        <p>Expectation</p>
        <input type="text" />
      </div>
      <div>
        <p>Acadenuc Qualification</p>
        <input type="text" />
      </div>
      <div>
        <p>Experience</p>
        <input type="text" />
      </div>
    </div>
  );
};
export default Sidebar;
