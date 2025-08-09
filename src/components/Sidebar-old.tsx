import { FC, useRef, useState } from "react";
import {
  Datepicker,
  TabsRef,
  Tabs,
  TabItem,
  Button,
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
} from "flowbite-react";

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
  handleDateOfBirthChange: (dateOfBirth: Date | null) => void;
  currentAddress: string;
  handleCurrentAddressChange: (currentAddress: string) => void;
  permanentAddress: string;
  handlePermanentAddressChange: (permanentAddress: string) => void;
  expectations: string[];
  handleExpectationsChange: (
    expectation: string,
    operation: "ADD" | "REMOVE" | "UPDATE"
  ) => void;
  languages: string[];
  handleLanguagesChange: (
    language: string,
    operation: "ADD" | "REMOVE" | "UPDATE"
  ) => void;
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

const Sidebar: FC<SidebarProps> = ({
  name,
  handleNameChange,
  dateOfBirth,
  handleDateOfBirthChange,
  phoneNumber,
  handlePhoneNumberChange,
  email,
  handleEmailChange,
  currentAddress,
  handleCurrentAddressChange,
  permanentAddress,
  handlePermanentAddressChange,
  expectations,
  handleExpectationsChange,
  languages,
  handleLanguagesChange,
  headline,
  handleHeadlineChange,
}) => {
  const tabsRef = useRef<TabsRef>(null);
  const activeTab = useState<number>(0);
  const [currentExpectation, setCurrentExpectation] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("");
  return (
    <div className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg overflow-y-scroll">
      <Tabs ref={tabsRef} onActiveTabChange={(tab) => activeTab[1](tab)}>
        <TabItem active title="Contents">
          <Accordion>
            <AccordionPanel className="border-0">
              <AccordionTitle className="p-2 border-0">
                Basic Information
              </AccordionTitle>
              <AccordionContent>
                <div className="input-label-wrapper hide-label">
                  <p>Name</p>
                  <input
                    className="input"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                  />
                </div>
                <div className="input-label-wrapper hide-label">
                  <p>Phone Number</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) =>
                      handlePhoneNumberChange(e.currentTarget.value)
                    }
                  />
                </div>
                <div className="input-label-wrapper hide-label">
                  <p>Email Address</p>
                  <input
                    placeholder="Enter email"
                    className="input"
                    type="text"
                    value={email}
                    onChange={(e) => handleEmailChange(e.currentTarget.value)}
                  />
                </div>
                <div className="input-label-wrapper">
                  <p>Date of birth</p>
                  <Datepicker
                    className="input dateInput"
                    color="white"
                    value={dateOfBirth}
                    onChange={handleDateOfBirthChange}
                  />
                </div>
                <div className="input-label-wrapper hide-label">
                  <p>Current Address</p>
                  <textarea
                    className="input"
                    value={currentAddress}
                    placeholder="Current Address"
                    onChange={(e) =>
                      handleCurrentAddressChange(e.currentTarget.value)
                    }
                  />
                </div>
                <div className="input-label-wrapper hide-label">
                  <p>Permanent Address</p>
                  <textarea
                    className="input"
                    placeholder="Permanent Address"
                    value={permanentAddress}
                    onChange={(e) =>
                      handlePermanentAddressChange(e.currentTarget.value)
                    }
                  />
                </div>
                <div className="input-label-wrapper hide-label">
                  <p>Language</p>
                  <div>
                    <>
                      {languages.map((language) => (
                        <span>{language}</span>
                      ))}
                    </>
                    <div>
                      <input
                        className="input"
                        placeholder="Enter Langauge"
                        type="text"
                        value={currentLanguage}
                        onChange={(e) =>
                          setCurrentLanguage(e.currentTarget.value)
                        }
                      />
                      <Button
                        onClick={() => {
                          handleLanguagesChange(currentLanguage, "ADD");
                          setCurrentLanguage("");
                        }}
                        size="xs"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel className="border-0">
              <AccordionTitle className="p-2 border-0">
                Resume Content
              </AccordionTitle>
              <AccordionContent>
                <div>
                  <p>Tools Worked in</p>
                  <input type="text" />
                </div>
                <div className="input-label-wrapper">
                  <p>Headline</p>
                  <input
                    className="input"
                    type="text"
                    value={headline}
                    onChange={(e) =>
                      handleHeadlineChange(e.currentTarget.value)
                    }
                  />
                </div>
                <div className="input-label-wrapper">
                  <p>Expectation</p>
                  <div>
                    <>
                      {expectations.map((expectation) => (
                        <span>{expectation}</span>
                      ))}
                    </>
                    <div>
                      <input
                        className="input"
                        type="text"
                        value={currentExpectation}
                        onChange={(e) =>
                          setCurrentExpectation(e.currentTarget.value)
                        }
                      />
                      <Button
                        onClick={() =>
                          handleExpectationsChange(currentExpectation, "ADD")
                        }
                        size="xs"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel className="border-0">
              <AccordionTitle className="p-2 border-0">
                Work Experience
              </AccordionTitle>
              <AccordionContent>
                <div>
                  <p>Experience</p>
                  <input type="text" />
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel className="border-0">
              <AccordionTitle className="p-2 border-0">
                Academic Qualification
              </AccordionTitle>
              <AccordionContent>
                <div>
                  <p>Academic Qualification</p>
                  <input type="text" />
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </TabItem>
        <TabItem title="Customize"></TabItem>
      </Tabs>
    </div>
  );
};
export default Sidebar;
