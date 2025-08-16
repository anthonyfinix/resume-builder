import { FC, useContext, useLayoutEffect, useRef } from "react";
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
import Text from "./Text";

const Resume: FC<{
  ref: React.RefObject<HTMLDivElement | null> | undefined;
}> = () => {
  const resume = useContext(ResumeContext);
  const resumeRef = useRef<HTMLDivElement>(null);
  const handleSize = () => {};
  useLayoutEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <>
      <div
        id="resume"
        ref={(ref) => {
          resumeRef.current = ref;
          if (resume) {
            resume.resumeRef.current = ref;
          }
        }}
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
          <Text>{resume?.headline}</Text>
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
              <Text>{resume?.expectation}</Text>
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
                <Text> {resume?.phoneNumber}</Text>
                <Text> {resume?.email}</Text>
              </Figure>
            </Article>

            <Article>
              <Heading>Date of Birth</Heading>
              <Text>{formatDate(resume?.dateOfBirth)}</Text>
            </Article>

            <Article>
              <Heading>Address</Heading>
              <Subheading subdued>Current</Subheading>
              <Text>{resume?.currentAddress}</Text>
              <Subheading subdued>Permanent</Subheading>
              <Text>{resume?.permanentAddress}</Text>
            </Article>

            <Article>
              <Heading>Tags</Heading>
              <div>
                <Text>{resume?.tags?.join(", ")}</Text>
              </div>
            </Article>

            <Article>
              <Heading>Languages</Heading>
              <div>
                {resume?.languages?.map((language, idx) => (
                  <Text key={idx}>{language}</Text>
                ))}
              </div>
            </Article>
          </Aside>
        </div>
      </div>
    </>
  );
};
export default Resume;
