import { FC, useContext, useRef } from "react";
import { ResumeContext } from "../components/ResumeProvider";
import formatDate from "../utils/formatDate";
import { Heading, Paragraph, Title, Document } from '../components/Resume/styles/index'
import { FontLoader } from "../components/Resume/styles/FontLoader";
import {Text} from "../components/Resume/styles/Text";
// import FirstName from "./FirstName";
// import Heading from "./Heading";
// import Subheading from "./Subheading";
// import Aside from "./Aside";
// import Main from "./Main";
// import Article from "./Article";
// import Figure from "./Figure";
// import Experience from "./Experience";
// import Education from "./Education";
// import Text from "./Text";

const Resume: FC<{
  ref: React.RefObject<HTMLDivElement | null> | undefined;
}> = () => {
  const resume = useContext(ResumeContext);
  const resumeRef = useRef<HTMLDivElement>(null);

  console.log(typeof resume?.dateOfBirth)
  return (
    <Document
      id="resume-preview"
      ref={(ref) => {
        resumeRef.current = ref;
        if (resume) resume.resumeRef.current = ref;
      }}
      fontFamily='"Inter", sans-serif'
    >
      <FontLoader font="Inter:opsz" />
      <Text fontSize="3em">{resume?.name}</Text>
      <Paragraph>{resume?.headline}</Paragraph>
      <div style={{ display: "flex" }}>
        <div style={{flexGrow: 0}}>
          <Text fontSize="1.5em" marginBottom={.2}>Expectation</Text>
          <Text fontSize="0.75em" marginBottom={.2}>{resume?.expectation}</Text>
          <Text fontSize="1.5em">Academic Qualification</Text>
          {resume?.education.map((edu, i) => {
            return (
              <>
                <Paragraph key={i}>{edu.institution} - {edu.qualification} - {formatDate(edu.endDate)}</Paragraph>
              </>
            )
          })}

          <Text fontSize="1.5em">Professional Journey</Text>
          {resume?.experience.map((exp, i) => {
            return (
              <div key={i}>
                <Heading>{exp.companyName}</Heading>
                <Paragraph>{exp.description}</Paragraph>
              </div>
            ) 
          })}
        </div>
        <div style={{flexBasis: "30%", flexShrink: 0, marginLeft: 10}}>
          <Text fontSize="1.5em">Contact Us</Text>
          <Text fontSize=".75em">{resume?.email}</Text>
          <Text fontSize=".75em">{resume?.phoneNumber}</Text>
          <Text fontSize="1.5em">Date of Birth</Text>
          <Text fontSize=".75em">{formatDate(resume?.dateOfBirth)}</Text>
          <Text fontSize="1.5em">Language</Text>
          <Paragraph>{resume?.languages.join(", ").replace(/, *$/, "")}</Paragraph>
          <Text fontSize="1.5em">Skills</Text>
          <Paragraph>{resume?.tags.join(", ").replace(/, *$/, "")}</Paragraph>
        </div>
      </div>
    </Document>
  );
};
export default Resume;
