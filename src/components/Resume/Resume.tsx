import { useContext, useLayoutEffect, useRef } from "react";
import { ResumeContext } from "../ResumeProvider";
import formatDate from "../../utils/formatDate";
import FirstName from "./FirstName";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Aside from "./Aside";
import Main from "./Main";
import Article from "./Article";
import Figure from "./Figure";
import Experience from "./Experience";
import Education from "./Education";

const Resume = () => {
  const resume = useContext(ResumeContext);
  const resumeRef = useRef<HTMLInputElement>(null);
  const handleSize = () => {};
  useLayoutEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div
      ref={resumeRef}
      style={{
        height: "80vh",
        aspectRatio: "0.706",
        width: "auto",
        background: "#fff",
        padding: "24px",
        boxSizing: "border-box",
        overflow: "auto",
        boxShadow: "0px 1px 100px -30px #00000069",
        fontSize: "12px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: 10 }}>
        <FirstName />
        <p>{resume?.headline}</p>
      </header>

      <div
        style={{
          display: "flex",
          gap: 15,
        }}
      >
        <Main>
          <Article>
            <Heading>Expectation</Heading>
            <p>{resume?.expectation}</p>
          </Article>
          <Article>
            <Heading>Experience</Heading>
            {resume?.experience?.map((exp, idx) => (
              <Experience key={idx} exp={exp} />
            ))}
          </Article>
          <Article>
            <Heading>Education</Heading>
            {resume?.education?.map((edu, idx) => (
              <Education key={idx} edu={edu} />
            ))}
          </Article>
        </Main>
        <Aside>
          <Article>
            <Heading>Contact</Heading>
            <Figure>
              <p> {resume?.phoneNumber}</p>
              <p> {resume?.email}</p>
            </Figure>
          </Article>

          <Article>
            <Heading>Date of Birth</Heading>
            <p>{formatDate(resume?.dateOfBirth)}</p>
          </Article>

          <Article>
            <Heading>Address</Heading>
            <Subheading subdued>Current</Subheading>
            <p>{resume?.currentAddress}</p>
            <Subheading subdued>Permanent</Subheading>
            <p>{resume?.permanentAddress}</p>
          </Article>

          <Article>
            <Heading>Tags</Heading>
            <div>
              <p>{resume?.tags?.join(", ")}</p>
            </div>
          </Article>

          <Article>
            <Heading>Languages</Heading>
            <ul>
              {resume?.languages?.map((language, idx) => (
                <li key={idx}>{language}</li>
              ))}
            </ul>
          </Article>
        </Aside>
      </div>
    </div>
  );
};
export default Resume;
