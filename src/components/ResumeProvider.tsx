import { Education, Experience, Resume } from "../types";
import { createContext, FC, ReactElement, useMemo, useState } from "react";

export type ResumeContext = Resume & {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  setExpectation: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  setDateOfBirth: React.Dispatch<React.SetStateAction<Date>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setCurrentAddress: React.Dispatch<React.SetStateAction<string>>;
  setPermanentAddress: React.Dispatch<React.SetStateAction<string>>;
  setExperience: React.Dispatch<React.SetStateAction<Experience[]>>;
  setEducation: React.Dispatch<React.SetStateAction<Education[]>>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  setLanguages: React.Dispatch<React.SetStateAction<string[]>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ResumeContext = createContext<null | ResumeContext>(null);
const ResumeProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [name, setName] = useState("John Doe");
  const [expectation, setExpectation] = useState("Good workin culture");
  const [phoneNumber, setPhoneNumber] = useState("+1 (555) 123-4567");
  const [dateOfBirth, setDateOfBirth] = useState(new Date(1990, 0, 1));
  const [email, setEmail] = useState("johndoe@example.com");
  const [tags, setTags] = useState<string[]>(["React", "Shopify"]);
  const [languages, setLanguages] = useState<string[]>([
    "English",
    "Malayalam",
    "Hindi",
  ]);
  const [currentAddress, setCurrentAddress] = useState(
    "123 Main St, Springfield, IL"
  );
  const [permanentAddress, setPermanentAddress] = useState(
    "456 Elm St, Springfield, IL"
  );
  const [headline, setHeadline] = useState(
    "Passionate coder and tech enthusiast with 5+ years of experience"
  );
  const [experience, setExperience] = useState<Experience[]>([
    {
      id: "exp1",
      companyName: "Tech Solutions Inc.",
      designation: "Software Engineer",
      description:
        "Built and maintained web applications using React and Node.js. Improved performance, implemented automated tests, and worked in cross‑functional teams.",
      startDate: new Date(2019, 0),
      endDate: new Date(2021, 5),
    },
    {
      id: "exp2",
      companyName: "Creative Apps Ltd.",
      designation: "Frontend Developer",
      description:
        "Developed responsive UI components with React and TypeScript. Optimized speed, enhanced accessibility, and integrated APIs.",
      startDate: new Date(2021, 6),
      endDate: null,
    },
  ]);
  const [education, setEducation] = useState<Education[]>([
    {
      id: "education1",
      institution: "Tech University",
      qualification: "B.Sc. Computer Science",
      startDate: new Date(2015, 8), // September 2015
      endDate: new Date(2019, 5), // June 2019
    },
    {
      id: "education2",
      institution: "Online Coding Bootcamp",
      qualification: "Full Stack Development",
      startDate: new Date(2023, 1), // February 2023
      endDate: null, // Currently ongoing
    },
  ]);
  const data = useMemo(
    () => ({
      name,
      setName,
      expectation,
      setExpectation,
      phoneNumber,
      setPhoneNumber,
      email,
      setEmail,
      currentAddress,
      setCurrentAddress,
      permanentAddress,
      setPermanentAddress,
      headline,
      setHeadline,
      experience,
      setExperience,
      education,
      setEducation,
      tags,
      setTags,
      languages,
      setLanguages,
      dateOfBirth,
      setDateOfBirth,
    }),
    [
      name,
      expectation,
      phoneNumber,
      email,
      currentAddress,
      permanentAddress,
      headline,
      experience,
      education,
      tags,
      languages,
      dateOfBirth,
    ]
  );
  return (
    <ResumeContext.Provider value={data}>{children}</ResumeContext.Provider>
  );
};
export default ResumeProvider;
