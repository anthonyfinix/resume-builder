import { useContext } from "react";
import Resume from "./Resume/Resume";
import { ResumeContext } from "./ResumeProvider";

const Content = () => {
  const resumeContext = useContext(ResumeContext);
  return <div className="content">
    <div style={{ transform: "scale(0.7)" }}>
    <Resume ref={resumeContext?.resumeRef} />
    </div>
    {/* <ResumeSVG/> */}
  </div>;
};
export default Content;
