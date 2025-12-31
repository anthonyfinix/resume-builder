import { useContext, useRef } from "react";
import formatDate from "../utils/formatDate";
import { Heading, Paragraph, Document } from '../components/Resume/styles/index'
import { FontLoader } from "../components/Resume/styles/FontLoader";
import {Text} from "../components/Resume/styles/Text";
import { ResumeContext } from "../Provider/ResumeProvider";

const Resume = () => {
  const resume = useContext(ResumeContext);
  const resumeRef = useRef<HTMLDivElement>(null);
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
      <Text fontSize="3em">{resume?.state.basics.name}</Text>
      <Text fontSize="0.75em" marginBottom="2em">{resume?.state.basics.label}</Text>
      <div style={{ display: "flex" }}>
        <div style={{flexGrow: 0}}>
          <Text fontSize="1.5em" marginBottom={.2}>Expectation</Text>
          <Text fontSize="0.75em" marginBottom={.2}>{resume?.state.basics.summary}</Text>
          <Text fontSize="1.5em">Academic Qualification</Text>
          {resume?.state.education.map((edu, i) => {
            return (
              <>
                <Text fontSize="0.75em" key={i}>{edu.institution} - {edu.qualification} - {formatDate(edu.endDate)}</Text>
              </>
            )
          })}

          <Text fontSize="1.5em">Professional Journey</Text>
          {resume?.state.work.map((exp, i) => {
            return (
              <div key={i}>
                <Text>{exp.companyName}</Text>
                <Text fontSize=".75em">{exp.description}</Text>
              </div>
            ) 
          })}
        </div>
        <div style={{flexBasis: "30%", flexShrink: 0, marginLeft: 10}}>
          <Text fontSize="1.5em">Contact Us</Text>
          <Text fontSize=".75em">{resume?.state.basics.email}</Text>
          <Text fontSize=".75em">{resume?.state.basics.phone}</Text>
          <Text fontSize="1.5em">Date of Birth</Text>
          <Text fontSize=".75em">{formatDate(resume?.state.basics.birthDate)}</Text>
          <Text fontSize="1.5em">Language</Text>
          <Text fontSize=".75em">{resume?.state.languages.join(", ").replace(/, *$/, "")}</Text>
          <Text fontSize="1.5em">Skills</Text>
          <Text fontSize=".75em">{resume?.state.skills.keywords.join(", ").replace(/, *$/, "")}</Text>
        </div>
      </div>
    </Document>
  );
};
export default Resume;
