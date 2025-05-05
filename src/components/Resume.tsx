import { FC } from "react";
export type ResumeProps = {
  name: string;
  headline: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Date;
  currentAddress: string;
  permanentAddress: string;
  expectation: string[];
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
const Resume: FC<ResumeProps> = ({ name, headline }) => {
  return (
    <div className=" scale-75 w-[49.625rem] h-[70.1875rem] bg-white p-8 shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <h1 className="text-2xl font-bold mb-4">{headline}</h1>
    </div>
  );
};
export default Resume;
