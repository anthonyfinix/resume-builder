import { FC, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ResumeContext } from "../ResumeProvider";
import formatDate from "../../utils/formatDate";
import { Resume as StyledResume } from './styles/index'
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
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    baseFontSize: 0
  });
  const INVERSE_ASPECT_RATIO = 1 / 0.706;

  const handleSize = () => {
    if (resumeRef.current) {
      const currentWidth = resumeRef.current.clientWidth;
      const newHeight = currentWidth * INVERSE_ASPECT_RATIO;
      const newBaseFontSize = currentWidth / 25;
      resumeRef.current.style.height = `${newHeight}px`;
      setDimensions({
        width: currentWidth,
        height: newHeight,
        baseFontSize: newBaseFontSize
      });
    }
  };

  useLayoutEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div
      id="resume-preview"
      style={{
        width: '500px',
        height: dimensions.height,
        background: "#fff",
        padding: "40px"
      }}
      ref={(ref) => {
        resumeRef.current = ref;
        if (resume) {
          resume.resumeRef.current = ref;
        }
      }}
    >
      {/* <header style={{ marginBottom: 10 }}>
          <FirstName />
          <Text>{resume?.headline}</Text>
        </header> */}
      <h1 style={{ fontSize: `${dimensions.baseFontSize * 1.2}px`, marginBottom: 5 }}>{resume?.name}</h1>
      <h2 style={{ fontSize: `${dimensions.baseFontSize * .6}px` }}>Summary</h2>
      <p style={{ fontSize: `${dimensions.baseFontSize * 0.5}px`, marginBottom: 5 }}>{resume?.headline}</p>
      <h2 style={{ fontSize: `${dimensions.baseFontSize * .6}px` }}>Experience</h2>
      {resume?.experience.map(exp => {
        return (
          <>
            <h2 style={{ fontSize: `${dimensions.baseFontSize * .5}px` }}>{exp.companyName}</h2>
            <p style={{ fontSize: `${dimensions.baseFontSize * .5}px` }}>{exp.description}</p>
          </>
        )
      })}
      <h2 style={{ fontSize: `${dimensions.baseFontSize * .6}px`, marginTop: 5 }}>Education</h2>
      {resume?.education.map(edu => {
        return (
          <>
            <h2 style={{ fontSize: `${dimensions.baseFontSize * .5}px` }}>{edu.institution} - {edu.qualification} - {formatDate(edu.endDate)}</h2>
          </>
        )
      })}
      <h2 style={{ fontSize: `${dimensions.baseFontSize * .6}px`, marginTop: 5 }}>Language</h2>
      <p style={{ fontSize: `${dimensions.baseFontSize * .5}px` }}>{resume?.languages.join(", ").replace(/, *$/, "")}</p>
      <h2 style={{ fontSize: `${dimensions.baseFontSize * .6}px`, marginTop: 5 }}>Skills</h2>
      <p style={{ fontSize: `${dimensions.baseFontSize * .5}px` }}>{resume?.tags.join(", ").replace(/, *$/, "")}</p>
    </div>
  );
};
export default Resume;
