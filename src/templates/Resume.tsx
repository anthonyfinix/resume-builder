import { FC, useContext, useRef } from "react";
import { ResumeContext } from "../components/ResumeProvider";
import formatDate from "../utils/formatDate";
import { Wrapper, Heading, Paragraph, Title } from '../components/Resume/styles/index'
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


  return (
    <Wrapper
      id="resume-preview"
      ref={(ref) => {
        resumeRef.current = ref;
        if (resume) {
          resume.resumeRef.current = ref;
        }
      }}
    >
      <Title>{resume?.name}</Title>
      <Heading>Summary</Heading>
      <Paragraph>{resume?.headline}</Paragraph>
      <Heading>Experience</Heading>
      {resume?.experience.map((exp, i) => {
        return (
          <div key={i}>
            <Heading>{exp.companyName}</Heading>
            <Paragraph>{exp.description}</Paragraph>
          </div>
        )
      })}
      <Heading>Education</Heading>
      {resume?.education.map((edu, i) => {
        return (
          <>
            <Paragraph key={i}>{edu.institution} - {edu.qualification} - {formatDate(edu.endDate)}</Paragraph>
          </>
        )
      })}
      <Heading>Language</Heading>
      <Paragraph>{resume?.languages.join(", ").replace(/, *$/, "")}</Paragraph>
      <Heading>Skills</Heading>
      <Paragraph>{resume?.tags.join(", ").replace(/, *$/, "")}</Paragraph>
    </Wrapper>
  );
};
export default Resume;
