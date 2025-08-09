import { FC } from "react";
export type ResumeProps = {
  name: string;
  headline: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Date;
  currentAddress: string;
  permanentAddress: string;
  expectations: string[];
  workExperiences: {
    companyName: string;
    designation: string;
    duties: string[];
    joiningData: Date;
    relievedData: Date;
    current: boolean;
  }[];
  academicQualifications: {
    establishmentName: string;
    joiningData: Date;
    relievedData: Date;
    certifcation: string;
    link?: string[];
    persuing: boolean;
  }[];
  language: string[];
};
const Resume: FC<ResumeProps> = ({ name, headline, phoneNumber, email }) => {
  return (
    <div className=" scale-75 w-[49.625rem] h-[70.1875rem] bg-white p-8 shadow-lg">
      <h1 className="resume-content-name text-2xl font-bold mb-4">{name ? name : "John Doe"}</h1>
      <h1 className="resume-content-headline text-2xl font-bold mb-4">
        {headline ? headline : "this is a headline about me"}
      </h1>
      <div className="flex">
        <div className="w-2/3">67%</div>
        <div className="w-1/3">
          <div className="resume-block-wrapper">
            <h3 className="resume-content-subheading">Contact</h3>
            <p className="resume-content-body">{email}</p>
            <p className="resume-content-body">{phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
